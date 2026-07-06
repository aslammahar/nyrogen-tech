"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { HeartPulse, GraduationCap, Plane, Building2, ShoppingCart, Factory, Landmark, Home, Shield, Globe, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

const industries = [
  { name: "Healthcare",         icon: HeartPulse,    desc: "HIPAA-compliant EHR, HMS, telemedicine and hospital billing systems."       },
  { name: "Education",          icon: GraduationCap, desc: "LMS, university ERPs, student portals and e-learning platforms."            },
  { name: "Travel & Tourism",   icon: Plane,         desc: "Booking engines, travel CRMs and itinerary management platforms."           },
  { name: "Construction",       icon: Building2,     desc: "Project planning, resource allocation and safety compliance ERPs."          },
  { name: "Retail & E-commerce",icon: ShoppingCart,  desc: "POS, inventory management and omnichannel digital storefronts."            },
  { name: "Manufacturing",      icon: Factory,       desc: "Supply chain, IoT integration and production tracking systems."             },
  { name: "Finance & Banking",  icon: Landmark,      desc: "Secure fintech apps, accounting systems and data analytics platforms."      },
  { name: "Real Estate",        icon: Home,          desc: "Property management, real estate CRMs and virtual tour applications."       },
  { name: "Government",         icon: Shield,        desc: "Citizen portals, secure data management and e-governance platforms."        },
  { name: "NGOs & Non-Profit",  icon: Globe,         desc: "Donation tracking, volunteer management and outreach digital tools."        },
];

export default function IndustriesPage() {
  return (
    <div className="pt-32 pb-24 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 grid-bg opacity-30" />

      <section className="mb-20 text-center">
        <Container>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <span className="text-accent-blue font-semibold text-sm uppercase tracking-widest">Industries</span>
            <h1 className="text-5xl md:text-6xl font-bold text-white mt-4 mb-6">
              Industries We <span className="text-blue-gradient">Serve</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Highly specialized, domain-driven software solutions that address real industry challenges and drive measurable competitive advantage.
            </p>
          </motion.div>
        </Container>
      </section>

      <section className="mb-24">
        <Container>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {industries.map((ind, i) => (
              <motion.div
                key={ind.name}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.45, delay: (i % 4) * 0.08 }}
              >
                <div className="group rounded-2xl border border-charcoal-border bg-charcoal-card p-7 h-full hover:border-accent-blue/50 transition-all duration-300 hover:shadow-[0_0_28px_rgba(37,99,235,0.22)] relative overflow-hidden cursor-pointer">
                  <div className="absolute inset-0 bg-gradient-to-br from-royal-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative z-10">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-royal-blue/25 to-accent-blue/15 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                      <ind.icon className="text-accent-blue" size={28} />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-accent-blue transition-colors">{ind.name}</h3>
                    <p className="text-sm text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">{ind.desc}</p>
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
            className="relative rounded-3xl border border-charcoal-border bg-charcoal-card p-12 text-center overflow-hidden hover:border-accent-blue/40 transition-all duration-300"
          >
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_60%_60%_at_50%_50%,rgba(37,99,235,0.1),transparent)]" />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-5">
              Don&apos;t see your industry? <span className="text-blue-gradient">Let&apos;s talk.</span>
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto mb-8">
              We adapt to any domain. Tell us your challenge and we&apos;ll engineer the solution.
            </p>
            <Link href="/contact">
              <Button size="lg" className="gap-2">Start a Conversation <ArrowRight size={20} /></Button>
            </Link>
          </motion.div>
        </Container>
      </section>
    </div>
  );
}
