"use client";

import { motion } from "framer-motion";
import { ArrowRight, Code2, Smartphone, Globe, BrainCircuit, Cloud, Palette, Search, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { AnimatedHero3D } from "@/components/three/AnimatedHero3D";
import Link from "next/link";

const services = [
  { title: "Custom Software Development", icon: Code2 },
  { title: "Web Applications",            icon: Globe },
  { title: "Mobile Applications",         icon: Smartphone },
  { title: "UI/UX Design",               icon: Palette },
  { title: "Digital Marketing & SEO",    icon: Search },
  { title: "Cloud Solutions",            icon: Cloud },
  { title: "AI-Powered Automation",      icon: BrainCircuit },
  { title: "Business Websites",          icon: ShieldCheck },
];

const projects = [
  { name: "Travel CRM",                  category: "CRM"           },
  { name: "Learning Management System",  category: "EdTech"        },
  { name: "Inventory Management System", category: "ERP"           },
  { name: "Point of Sale (POS)",         category: "Retail"        },
  { name: "Construction ERP",            category: "ERP"           },
  { name: "Real Estate CRM",             category: "CRM"           },
  { name: "Customer Relationship Mgmt",  category: "CRM"           },
  { name: "Decision Support System",     category: "Analytics"     },
  { name: "AI ChatBot for Consultation", category: "AI"            },
  { name: "Accountant",                  category: "Finance"       },
  { name: "MDS (Shabzi Mandi)",          category: "Marketplace"   },
  { name: "Hospital Management",         category: "Healthcare"    },
  { name: "POS System",                  category: "Retail"        },
  { name: "GYM Management",             category: "Fitness"       },
  { name: "Threads Platform",            category: "Social"        },
  { name: "Fleet Management",            category: "Logistics"     },
  { name: "Sales CRM",                   category: "CRM"           },
];

const stats = [
  { value: "17+",  label: "Products Built"      },
  { value: "300+", label: "Clients Served"      },
  { value: "25+",  label: "Countries"           },
  { value: "20+",  label: "Years Experience"    },
];

const categoryColor: Record<string, string> = {
  CRM: "#2563EB", EdTech: "#3B82F6", ERP: "#1D4ED8", Retail: "#60A5FA",
  Analytics: "#2563EB", AI: "#06B6D4", Finance: "#3B82F6", Marketplace: "#1D4ED8",
  Healthcare: "#2563EB", Fitness: "#3B82F6", Social: "#60A5FA", Logistics: "#1D4ED8",
};

export default function Home() {
  return (
    <>
      {/* ──── HERO ──────────────────────────────────────────── */}
      <section className="relative pt-36 pb-28 lg:pt-44 lg:pb-40 overflow-hidden">
        {/* 3-D canvas */}
        <div className="absolute inset-0 -z-10">
          <AnimatedHero3D className="w-full h-full" />
        </div>
        {/* Grid overlay */}
        <div className="absolute inset-0 -z-20 grid-bg" />
        {/* Radial glow */}
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_70%_55%_at_50%_-5%,rgba(37,99,235,0.2),transparent)]" />
        {/* Bottom fade so next section reads clearly */}
        <div className="absolute bottom-0 inset-x-0 h-32 -z-10 bg-gradient-to-t from-charcoal to-transparent" />

        <Container className="relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full glass-dark"
            >
              <span className="w-2 h-2 rounded-full bg-accent-blue animate-pulse" />
              <span className="text-sm font-semibold text-accent-blue tracking-wide">
                Enterprise Software Engineering
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.08 }}
              className="text-5xl lg:text-7xl font-bold tracking-tight mb-7 leading-[1.08]"
            >
              Helping Businesses Grow with{" "}
              <span className="text-blue-gradient">Innovative Digital Solutions</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="text-xl text-gray-400 mb-10 max-w-3xl mx-auto leading-relaxed"
            >
              Nyrogen Technologies specializes in custom software development, web &amp; mobile applications,
              UI/UX design, digital marketing, SEO, cloud solutions, and AI-powered business automation.
              We deliver secure, scalable, and user-focused technology.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.22 }}
              className="flex flex-col sm:flex-row justify-center items-center gap-4"
            >
              <Link href="/contact">
                <Button size="lg" className="gap-2 w-full sm:w-auto">
                  Book Free Consultation <ArrowRight size={20} />
                </Button>
              </Link>
              <Link href="/products">
                <Button size="lg" variant="outline" className="w-full sm:w-auto">
                  View Our Projects
                </Button>
              </Link>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* ──── WHAT WE DO ─────────────────────────────────────── */}
      <section className="py-24 bg-charcoal-soft border-y border-charcoal-border">
        <Container>
          <div className="text-center mb-14">
            <span className="text-accent-blue font-semibold text-sm uppercase tracking-widest">What We Do</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-4">
              Our <span className="text-blue-gradient">Core Specializations</span>
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              From ideation to deployment — we cover every dimension of your digital needs.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {services.map((svc, i) => (
              <motion.div
                key={svc.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.06 }}
              >
                <div className="group relative rounded-2xl border border-charcoal-border bg-charcoal-card p-6 h-full flex flex-col items-center text-center cursor-pointer overflow-hidden hover:border-accent-blue/50 transition-all duration-300 hover:shadow-[0_0_28px_rgba(37,99,235,0.22)]">
                  <div className="absolute inset-0 bg-gradient-to-br from-royal-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-royal-blue/30 to-accent-blue/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <svc.icon className="text-accent-blue" size={24} />
                  </div>
                  <h3 className="text-sm font-semibold text-white group-hover:text-accent-blue transition-colors leading-snug">
                    {svc.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* ──── STATS ──────────────────────────────────────────── */}
      <section className="py-20">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                className="group relative p-6 rounded-2xl border border-charcoal-border hover:border-accent-blue/50 transition-all duration-300"
              >
                <span className="text-4xl md:text-5xl font-bold text-blue-gradient block">
                  {s.value}
                </span>
                <p className="text-sm md:text-base font-medium text-gray-400 uppercase tracking-wider mt-3">
                  {s.label}
                </p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* ──── PROJECTS SHOWCASE ─────────────────────────────── */}
      <section className="py-24 bg-charcoal-soft border-y border-charcoal-border">
        <Container>
          <div className="text-center mb-14">
            <span className="text-accent-blue font-semibold text-sm uppercase tracking-widest">Portfolio</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-4">
              Projects We&apos;ve <span className="text-blue-gradient">Built</span>
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              17 enterprise-grade products across healthcare, retail, finance, AI, logistics and more.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {projects.map((project, i) => (
              <motion.div
                key={project.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: (i % 6) * 0.06 }}
              >
                <div className="group relative rounded-2xl border border-charcoal-border bg-charcoal-card p-6 h-full hover:border-accent-blue/50 transition-all duration-300 hover:shadow-[0_0_28px_rgba(37,99,235,0.2)] overflow-hidden cursor-pointer">
                  <div className="absolute inset-0 bg-gradient-to-br from-royal-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative z-10 flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-base font-semibold text-white group-hover:text-accent-blue transition-colors mb-1">
                        {project.name}
                      </h3>
                      <span
                        className="inline-block text-xs font-bold px-2.5 py-0.5 rounded-full border"
                        style={{
                          color: categoryColor[project.category] ?? "#3B82F6",
                          borderColor: `${categoryColor[project.category] ?? "#3B82F6"}44`,
                          background: `${categoryColor[project.category] ?? "#3B82F6"}12`,
                        }}
                      >
                        {project.category}
                      </span>
                    </div>
                    <div className="w-8 h-8 rounded-lg bg-royal-blue/10 border border-royal-blue/20 flex items-center justify-center shrink-0 group-hover:bg-royal-blue/30 transition-colors">
                      <ArrowRight size={14} className="text-accent-blue" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/products">
              <Button variant="outline" size="lg" className="gap-2">
                View All Products <ArrowRight size={18} />
              </Button>
            </Link>
          </div>
        </Container>
      </section>

      {/* ──── MISSION / DESCRIPTION ──────────────────────────── */}
      <section className="py-24">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-accent-blue font-semibold text-sm uppercase tracking-widest">Our Mission</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-8">
              Technology That <span className="text-blue-gradient">Drives Success</span>
            </h2>
            <p className="text-xl text-gray-400 leading-relaxed mb-10">
              Nyrogen Technologies is a software company dedicated to helping businesses grow through
              innovative digital solutions. Our mission is to deliver secure, scalable, and user-focused
              technology that drives business success — from startups to global enterprises.
            </p>
            <Link href="/about">
              <Button size="lg" className="gap-2">
                Learn About Us <ArrowRight size={20} />
              </Button>
            </Link>
          </div>
        </Container>
      </section>

      {/* ──── CTA ────────────────────────────────────────────── */}
      <section className="py-24 bg-charcoal-soft relative overflow-hidden">
        <div className="absolute inset-0 -z-10 grid-bg opacity-60" />
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_60%_60%_at_50%_50%,rgba(37,99,235,0.14),transparent)]" />
        <Container className="relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to <span className="text-blue-gradient">Transform</span> Your Business?
          </h2>
          <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
            Let&apos;s build software that scales, performs, and drives real results.
          </p>
          <Link href="/contact">
            <Button size="lg">Get in Touch Today</Button>
          </Link>
        </Container>
      </section>
    </>
  );
}
