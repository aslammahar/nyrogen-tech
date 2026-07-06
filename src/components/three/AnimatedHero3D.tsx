"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export function AnimatedHero3D({ className }: { className?: string }) {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    let width = mount.clientWidth;
    let height = mount.clientHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 32;

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: "high-performance" });
    } catch { return; }

    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(width, height);
    renderer.setClearColor(0x000000, 0);
    mount.appendChild(renderer.domElement);

    const group = new THREE.Group();
    scene.add(group);

    const royalBlue  = new THREE.Color(0x2563EB);
    const accentBlue = new THREE.Color(0x3B82F6);
    const lightBlue  = new THREE.Color(0x60A5FA);

    // ----- Outer wireframe cube -----
    const cubeGeo = new THREE.BoxGeometry(10, 10, 10);
    const cubeEdges = new THREE.EdgesGeometry(cubeGeo);
    const cubeLines = new THREE.LineSegments(
      cubeEdges,
      new THREE.LineBasicMaterial({ color: royalBlue, linewidth: 1 })
    );
    group.add(cubeLines);

    // ----- Inner icosphere -----
    const sphereGeo = new THREE.IcosahedronGeometry(4.2, 3);
    const sphereMat = new THREE.MeshPhongMaterial({
      color: royalBlue,
      emissive: new THREE.Color(0x0a1a4a),
      shininess: 120,
      wireframe: false,
    });
    const sphere = new THREE.Mesh(sphereGeo, sphereMat);
    group.add(sphere);

    // Wireframe overlay on sphere
    const sphereWireMat = new THREE.MeshBasicMaterial({ color: accentBlue, wireframe: true, transparent: true, opacity: 0.25 });
    const sphereWire = new THREE.Mesh(sphereGeo, sphereWireMat);
    group.add(sphereWire);

    // ----- Orbital rings -----
    const ringMat = new THREE.MeshBasicMaterial({ color: accentBlue, transparent: true, opacity: 0.6 });
    const ring1 = new THREE.Mesh(new THREE.TorusGeometry(14, 0.12, 8, 100), ringMat.clone());
    ring1.rotation.x = Math.PI / 5;
    group.add(ring1);

    const ring2 = new THREE.Mesh(new THREE.TorusGeometry(17, 0.10, 8, 100), ringMat.clone());
    ring2.rotation.y = Math.PI / 4;
    group.add(ring2);

    const ring3 = new THREE.Mesh(new THREE.TorusGeometry(11, 0.08, 8, 100), ringMat.clone());
    ring3.rotation.z = Math.PI / 3;
    group.add(ring3);

    // ----- Floating particles -----
    const pCount = 100;
    const pPositions = new Float32Array(pCount * 3);
    const pVelocities = new Float32Array(pCount * 3);
    for (let i = 0; i < pCount; i++) {
      const i3 = i * 3;
      pPositions[i3]     = (Math.random() - 0.5) * 50;
      pPositions[i3 + 1] = (Math.random() - 0.5) * 50;
      pPositions[i3 + 2] = (Math.random() - 0.5) * 50;
      pVelocities[i3]     = (Math.random() - 0.5) * 0.05;
      pVelocities[i3 + 1] = (Math.random() - 0.5) * 0.05;
      pVelocities[i3 + 2] = (Math.random() - 0.5) * 0.05;
    }
    const pGeo = new THREE.BufferGeometry();
    pGeo.setAttribute("position", new THREE.BufferAttribute(pPositions, 3));
    const particles = new THREE.Points(
      pGeo,
      new THREE.PointsMaterial({ color: lightBlue, size: 0.25, sizeAttenuation: true, transparent: true, opacity: 0.75 })
    );
    group.add(particles);

    // ----- Node dots on sphere surface -----
    const nodeCount = 24;
    const nodeGeo = new THREE.SphereGeometry(0.18, 8, 8);
    const nodeMat = new THREE.MeshBasicMaterial({ color: lightBlue });
    for (let i = 0; i < nodeCount; i++) {
      const phi   = Math.acos(1 - (2 * (i + 0.5)) / nodeCount);
      const theta = Math.PI * (1 + Math.sqrt(5)) * i;
      const r = 4.5;
      const node = new THREE.Mesh(nodeGeo, nodeMat);
      node.position.set(
        r * Math.sin(phi) * Math.cos(theta),
        r * Math.sin(phi) * Math.sin(theta),
        r * Math.cos(phi)
      );
      group.add(node);
    }

    // Lights
    scene.add(new THREE.AmbientLight(0xffffff, 0.5));
    const pointLight = new THREE.PointLight(royalBlue, 2, 60);
    pointLight.position.set(0, 0, 10);
    scene.add(pointLight);

    // Mouse interaction
    const pointer = { x: 0, y: 0 };
    const handlePointer = (e: PointerEvent) => {
      const r = mount.getBoundingClientRect();
      pointer.x = ((e.clientX - r.left) / r.width)  * 2 - 1;
      pointer.y = ((e.clientY - r.top)  / r.height) * 2 - 1;
    };
    window.addEventListener("pointermove", handlePointer);

    // Resize
    const handleResize = () => {
      if (!mount) return;
      width = mount.clientWidth; height = mount.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };
    window.addEventListener("resize", handleResize);

    let frameId: number;
    const clock = new THREE.Clock();

    function animate() {
      frameId = requestAnimationFrame(animate);
      const t = clock.getElapsedTime();

      // Auto-rotate + mouse influence
      group.rotation.y = t * 0.12 + pointer.x * 0.3;
      group.rotation.x = t * 0.08 + pointer.y * -0.15;

      // Rings independent spin
      ring1.rotation.x += 0.003;
      ring2.rotation.y -= 0.002;
      ring3.rotation.z += 0.0025;

      // Particle drift
      const pos = pGeo.attributes.position.array as Float32Array;
      for (let i = 0; i < pCount; i++) {
        const i3 = i * 3;
        pos[i3]     += pVelocities[i3];
        pos[i3 + 1] += pVelocities[i3 + 1];
        pos[i3 + 2] += pVelocities[i3 + 2];
        if (Math.abs(pos[i3])     > 28) pVelocities[i3]     *= -1;
        if (Math.abs(pos[i3 + 1]) > 28) pVelocities[i3 + 1] *= -1;
        if (Math.abs(pos[i3 + 2]) > 28) pVelocities[i3 + 2] *= -1;
      }
      pGeo.attributes.position.needsUpdate = true;

      // Pulse point light
      pointLight.intensity = 1.8 + Math.sin(t * 1.5) * 0.6;

      renderer.render(scene, camera);
    }
    animate();

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("pointermove", handlePointer);
      window.removeEventListener("resize", handleResize);
      renderer.dispose();
      if (renderer.domElement.parentElement === mount) mount.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} className={className} aria-hidden="true" />;
}
