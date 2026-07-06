"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { MapPin, Clock, Rocket, TrendingUp, Heart, Users } from "lucide-react";
import Link from "next/link";

const perks = [
  { title: "Remote First",         icon: Rocket,    desc: "Work from anywhere in the world. We value great work over office presence."      },
  { title: "Continuous Learning",  icon: TrendingUp, desc: "Education budget for courses, certifications, and conferences."                 },
  { title: "Health Coverage",      icon: Heart,     desc: "Comprehensive health, dental, and vision coverage for you and your family."       },
  { title: "Collaborative Culture",icon: Users,     desc: "Work alongside world-class engineers, designers, and product thinkers."          },
];

const jobs = [
  { title: "Senior Full Stack Engineer (React + Node.js)", location: "Remote / Global",  type: "Full-time" },
  { title: "Laravel Backend Developer",                    location: "Remote / Global",  type: "Full-time" },
  { title: "UI/UX Product Designer (Figma)",              location: "Remote / Global",  type: "Full-time" },
  { title: "React Native Mobile Developer",               location: "Remote / Global",  type: "Full-time" },
  { title: "DevOps & Cloud Engineer",                     location: "Remote / Global",  type: "Full-time" },
  { title: "AI / ML Engineer",                            location: "Remote / Global",  type: "Full-time" },
  { title: "Enterprise Sales Executive",                  location: "USA / Europe",     type: "Full-time" },
];

export default function CareersPage() {
  return (
    <div className="pt-32 pb-24 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 grid-bg opacity-30" />

      <section className="mb-20 text-center">
        <Container>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <span className="text-accent-blue font-semibold text-sm uppercase tracking-widest">Careers</span>
            <h1 className="text-5xl md:text-6xl font-bold text-white mt-4 mb-6">
              Join the <span className="text-blue-gradient">Nyrogen Team</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              We are always looking for passionate engineers, designers, and strategists to help us build the future of enterprise software.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Perks */}
      <section className="mb-24 bg-charcoal-soft border-y border-charcoal-border py-20">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white">Why Work at <span className="text-blue-gradient">Nyrogen</span>?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {perks.map((perk, idx) => (
              <motion.div
                key={perk.title}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.45, delay: idx * 0.08 }}
              >
                <div className="group rounded-2xl border border-charcoal-border bg-charcoal-card p-7 h-full hover:border-accent-blue/50 transition-all duration-300 hover:shadow-[0_0_28px_rgba(37,99,235,0.2)] relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-royal-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative z-10">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-royal-blue/30 to-accent-blue/20 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                      <perk.icon className="text-accent-blue" size={24} />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-accent-blue transition-colors">{perk.title}</h3>
                    <p className="text-sm text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">{perk.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Open Positions */}
      <section>
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-10 text-center">
              <span className="text-blue-gradient">Open Positions</span>
            </h2>
            <div className="flex flex-col gap-4">
              {jobs.map((job, idx) => (
                <motion.div
                  key={job.title}
                  initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }} transition={{ duration: 0.45, delay: idx * 0.06 }}
                >
                  <div className="group rounded-2xl border border-charcoal-border bg-charcoal-card p-6 md:p-7 flex flex-col md:flex-row items-start md:items-center justify-between hover:border-accent-blue/50 transition-all duration-300 hover:shadow-[0_0_24px_rgba(37,99,235,0.18)] hover:bg-charcoal-hover">
                    <div className="mb-4 md:mb-0">
                      <h3 className="text-lg font-bold text-white mb-2 group-hover:text-accent-blue transition-colors">{job.title}</h3>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-400 font-medium">
                        <span className="flex items-center gap-1.5"><MapPin size={14} className="text-accent-blue" /> {job.location}</span>
                        <span className="flex items-center gap-1.5"><Clock size={14} className="text-accent-blue" /> {job.type}</span>
                      </div>
                    </div>
                    <Link href="/contact">
                      <Button variant="primary" size="sm">Apply Now</Button>
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
