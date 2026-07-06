"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

interface MoleculeFieldProps {
  className?: string;
}

/**
 * Signature 3D element: a drifting lattice of bonded nodes — ion-blue atoms
 * linked by catalyst-teal bonds. A literal nod to "Nyrogen": enterprise
 * systems rendered at the atomic scale. Rotates slowly on its own and tilts
 * toward the cursor. Respects prefers-reduced-motion.
 */
export function MoleculeField({ className }: MoleculeFieldProps) {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let width = mount.clientWidth;
    let height = mount.clientHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.z = 13;

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
        powerPreference: "low-power",
      });
    } catch {
      return;
    }
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(width, height);
    mount.appendChild(renderer.domElement);

    const group = new THREE.Group();
    scene.add(group);

    // ---- Build a randomized molecular lattice ----------------------
    const NODE_COUNT = 46;
    const RADIUS = 5.4;
    const positions: THREE.Vector3[] = [];

    for (let i = 0; i < NODE_COUNT; i++) {
      // Fibonacci-ish sphere distribution with jitter, for an organic but even spread
      const phi = Math.acos(1 - (2 * (i + 0.5)) / NODE_COUNT);
      const theta = Math.PI * (1 + Math.sqrt(5)) * i;
      const r = RADIUS * (0.55 + Math.random() * 0.55);
      const v = new THREE.Vector3(
        r * Math.sin(phi) * Math.cos(theta),
        r * Math.sin(phi) * Math.sin(theta),
        r * Math.cos(phi)
      );
      v.x += (Math.random() - 0.5) * 1.2;
      v.y += (Math.random() - 0.5) * 1.2;
      v.z += (Math.random() - 0.5) * 1.2;
      positions.push(v);
    }

    // glow sprite texture (radial gradient on canvas)
    function makeGlowTexture(hex: string) {
      const size = 128;
      const canvas = document.createElement("canvas");
      canvas.width = size;
      canvas.height = size;
      const ctx = canvas.getContext("2d")!;
      const gradient = ctx.createRadialGradient(
        size / 2,
        size / 2,
        0,
        size / 2,
        size / 2,
        size / 2
      );
      gradient.addColorStop(0, hex);
      gradient.addColorStop(0.4, hex);
      gradient.addColorStop(1, "rgba(0,0,0,0)");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, size, size);
      const tex = new THREE.CanvasTexture(canvas);
      tex.needsUpdate = true;
      return tex;
    }

    const ionGlow = makeGlowTexture("rgba(79,124,255,0.9)");
    const catalystGlow = makeGlowTexture("rgba(0,229,176,0.95)");

    const nodeMeshes: THREE.Sprite[] = [];
    positions.forEach((pos, i) => {
      const isCatalyst = i % 6 === 0;
      const material = new THREE.SpriteMaterial({
        map: isCatalyst ? catalystGlow : ionGlow,
        transparent: true,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
      });
      const sprite = new THREE.Sprite(material);
      const scale = isCatalyst ? 0.85 : 0.55 + Math.random() * 0.25;
      sprite.scale.set(scale, scale, 1);
      sprite.position.copy(pos);
      group.add(sprite);
      nodeMeshes.push(sprite);

      // small solid core for crispness at a distance
      const coreGeo = new THREE.SphereGeometry(isCatalyst ? 0.05 : 0.035, 8, 8);
      const coreMat = new THREE.MeshBasicMaterial({
        color: isCatalyst ? 0x00e5b0 : 0x4f7cff,
      });
      const core = new THREE.Mesh(coreGeo, coreMat);
      core.position.copy(pos);
      group.add(core);
    });

    // ---- Bonds: connect each node to its nearest neighbors ----------
    const bondPositions: number[] = [];
    const bondColors: number[] = [];
    const ionColor = new THREE.Color(0x4f7cff);
    const catalystColor = new THREE.Color(0x00e5b0);

    for (let i = 0; i < positions.length; i++) {
      const distances = positions
        .map((p, j) => ({ j, d: i === j ? Infinity : positions[i].distanceTo(p) }))
        .sort((a, b) => a.d - b.d);

      const neighborCount = 2;
      for (let k = 0; k < neighborCount; k++) {
        const { j, d } = distances[k];
        if (d < RADIUS * 1.15 && j > i) {
          bondPositions.push(
            positions[i].x,
            positions[i].y,
            positions[i].z,
            positions[j].x,
            positions[j].y,
            positions[j].z
          );
          const c = Math.random() > 0.75 ? catalystColor : ionColor;
          bondColors.push(c.r, c.g, c.b, c.r, c.g, c.b);
        }
      }
    }

    const bondGeometry = new THREE.BufferGeometry();
    bondGeometry.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(bondPositions, 3)
    );
    bondGeometry.setAttribute(
      "color",
      new THREE.Float32BufferAttribute(bondColors, 3)
    );
    const bondMaterial = new THREE.LineBasicMaterial({
      vertexColors: true,
      transparent: true,
      opacity: 0.35,
      blending: THREE.AdditiveBlending,
    });
    const bonds = new THREE.LineSegments(bondGeometry, bondMaterial);
    group.add(bonds);

    group.rotation.x = 0.3;
    group.rotation.y = 0.4;

    // ---- Interaction state --------------------------------------------
    const pointer = { x: 0, y: 0 };
    const targetRotation = { x: group.rotation.x, y: group.rotation.y };

    function handlePointerMove(e: PointerEvent) {
      const rect = mount!.getBoundingClientRect();
      pointer.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      pointer.y = ((e.clientY - rect.top) / rect.height) * 2 - 1;
    }
    window.addEventListener("pointermove", handlePointerMove);

    function handleResize() {
      if (!mount) return;
      width = mount.clientWidth;
      height = mount.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    }
    window.addEventListener("resize", handleResize);

    let frameId: number;
    let elapsed = 0;
    const clock = new THREE.Clock();

    function animate() {
      frameId = requestAnimationFrame(animate);
      const delta = Math.min(clock.getDelta(), 0.05);
      elapsed += delta;

      if (!prefersReducedMotion) {
        targetRotation.y = 0.4 + pointer.x * 0.35 + elapsed * 0.06;
        targetRotation.x = 0.3 + pointer.y * -0.2;
        group.rotation.y += (targetRotation.y - group.rotation.y) * 0.04;
        group.rotation.x += (targetRotation.x - group.rotation.x) * 0.04;
      }

      renderer.render(scene, camera);
    }
    animate();

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("resize", handleResize);
      bondGeometry.dispose();
      bondMaterial.dispose();
      ionGlow.dispose();
      catalystGlow.dispose();
      scene.traverse((obj) => {
        if (obj instanceof THREE.Mesh || obj instanceof THREE.Sprite) {
          obj.geometry?.dispose?.();
          const mat = obj.material as THREE.Material | THREE.Material[];
          if (Array.isArray(mat)) mat.forEach((m) => m.dispose());
          else mat?.dispose?.();
        }
      });
      renderer.dispose();
      if (renderer.domElement.parentElement === mount) {
        mount.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={mountRef} className={className} aria-hidden="true" />;
}
