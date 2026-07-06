"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Code2, Cloud, BrainCircuit, LineChart, Server, Smartphone, Globe, Palette, Search, ShieldCheck, Database, HeadphonesIcon, ArrowRight } from "lucide-react";
import Link from "next/link";

const services = [
  { title: "Custom Software Development", icon: Code2,          desc: "Tailor-made applications built to your exact business logic and workflows.",              tech: "React, Next.js, Node.js, Laravel, .NET" },
  { title: "Web Applications",            icon: Globe,          desc: "Scalable, high-performance web apps with modern frontend and robust backend APIs.",        tech: "Next.js, Vue.js, TypeScript, REST/GraphQL" },
  { title: "Mobile Applications",         icon: Smartphone,     desc: "Native and cross-platform iOS & Android apps with stellar user experience.",              tech: "React Native, Flutter, Swift, Kotlin" },
  { title: "UI/UX Design",               icon: Palette,        desc: "User-centered design systems, wireframes, prototypes, and pixel-perfect interfaces.",      tech: "Figma, Adobe XD, Tailwind CSS" },
  { title: "Digital Marketing & SEO",    icon: Search,         desc: "Data-driven campaigns, on-page SEO, technical audits, and growth analytics.",             tech: "Google Ads, Meta Ads, GA4, Semrush" },
  { title: "Cloud Solutions",            icon: Cloud,          desc: "Cloud migration, architecture design, DevOps pipelines, and managed infrastructure.",     tech: "AWS, Azure, Docker, Kubernetes, Terraform" },
  { title: "AI-Powered Automation",      icon: BrainCircuit,   desc: "LLM integrations, chatbots, predictive models, and intelligent process automation.",     tech: "OpenAI, LangChain, Python, TensorFlow" },
  { title: "Business Websites",          icon: ShieldCheck,    desc: "Fast, responsive, SEO-optimised business websites that convert visitors into clients.",    tech: "Next.js, WordPress, Webflow" },
  { title: "API Development",            icon: Database,       desc: "Secure RESTful and GraphQL APIs with documentation, versioning, and rate limiting.",      tech: "Node.js, Express, FastAPI, Swagger" },
  { title: "Data Analytics",             icon: LineChart,      desc: "Turn raw data into actionable intelligence with BI dashboards and data pipelines.",       tech: "Power BI, Tableau, SQL, Pandas" },
  { title: "DevOps & CI/CD",             icon: Server,         desc: "Automated testing, build pipelines, and zero-downtime deployments.",                      tech: "GitHub Actions, Jenkins, GitLab CI" },
  { title: "Maintenance & Support",      icon: HeadphonesIcon, desc: "24/7 monitoring, security patches, performance tuning, and SLA-backed support.",         tech: "ITIL, SLA Management, Monitoring Tools" },
];

export default function ServicesPage() {
  return (
    <div className="pt-32 pb-24 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 grid-bg opacity-30" />
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-royal-blue/5 rounded-full blur-3xl -z-10" />

      <section className="mb-20 text-center">
        <Container>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <span className="text-accent-blue font-semibold text-sm uppercase tracking-widest">What We Offer</span>
            <h1 className="text-5xl md:text-6xl font-bold text-white mt-4 mb-6">
              Full-Spectrum <span className="text-blue-gradient">Digital Services</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              From design to deployment — every service you need to digitalize and scale your business under one roof.
            </p>
          </motion.div>
        </Container>
      </section>

      <section className="mb-24">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((svc, i) => (
              <motion.div
                key={svc.title}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.45, delay: (i % 3) * 0.08 }}
              >
                <div className="group relative h-full rounded-2xl border border-charcoal-border bg-charcoal-card p-7 hover:border-accent-blue/50 transition-all duration-300 hover:shadow-[0_0_28px_rgba(37,99,235,0.22)] overflow-hidden cursor-pointer flex flex-col">
                  <div className="absolute inset-0 bg-gradient-to-br from-royal-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative z-10 flex flex-col h-full">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-royal-blue/30 to-accent-blue/20 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                      <svc.icon className="text-accent-blue" size={24} />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-accent-blue transition-colors">{svc.title}</h3>
                    <p className="text-sm text-gray-400 leading-relaxed mb-5 flex-1 group-hover:text-gray-300 transition-colors">{svc.desc}</p>
                    <div className="pt-4 border-t border-charcoal-border mt-auto">
                      <span className="text-xs font-bold text-accent-blue/60 uppercase tracking-wider block mb-1 group-hover:text-accent-blue transition-colors">Tech Stack</span>
                      <span className="text-xs font-medium text-gray-400 group-hover:text-gray-300 transition-colors">{svc.tech}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      <section>
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="relative rounded-3xl border border-charcoal-border bg-charcoal-card p-12 lg:p-16 text-center overflow-hidden group hover:border-accent-blue/40 transition-all duration-300"
          >
            <div className="absolute inset-0 -z-10 grid-bg opacity-30" />
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_60%_60%_at_50%_50%,rgba(37,99,235,0.12),transparent)]" />
            <h2 className="text-4xl font-bold text-white mb-5">
              Need a <span className="text-blue-gradient">Custom Solution</span>?
            </h2>
            <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
              Tell us about your project and get a free consultation with our experts.
            </p>
            <Link href="/contact">
              <Button size="lg" className="gap-2">Discuss Your Project <ArrowRight size={20} /></Button>
            </Link>
          </motion.div>
        </Container>
      </section>
    </div>
  );
}
