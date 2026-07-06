"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Target, Eye, CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";

const values = [
  { title: "Innovation First",    desc: "We continuously push boundaries to deliver cutting-edge digital solutions.",     icon: "🚀" },
  { title: "Quality Obsessed",    desc: "Strict quality standards ensure every product is robust, secure, and reliable.", icon: "✅" },
  { title: "Client Partnership",  desc: "Your success is our success. We work as an extension of your team.",            icon: "🤝" },
  { title: "Integrity Always",    desc: "Full transparency, honesty, and professional ethics in every engagement.",       icon: "🛡️" },
];

const highlights = [
  "Custom software tailored to your exact business needs",
  "Full-cycle development from ideation to deployment",
  "Agile methodology with transparent communication",
  "Post-launch support and continuous improvement",
  "AI-powered automation and cloud-first architecture",
  "Cross-platform web and mobile applications",
];

export default function AboutPage() {
  return (
    <div className="pt-32 pb-24 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 grid-bg opacity-30" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-royal-blue/5 rounded-full blur-3xl -z-10" />

      {/* Header */}
      <section className="mb-20 text-center">
        <Container>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <span className="text-accent-blue font-semibold text-sm uppercase tracking-widest">About Us</span>
            <h1 className="text-5xl md:text-6xl font-bold text-white mt-4 mb-6 leading-tight">
              Dedicated to Helping <span className="text-blue-gradient">Businesses Grow</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Nyrogen Technologies is a software company dedicated to helping businesses grow through innovative
              digital solutions. We specialize in custom software development, web applications, mobile applications,
              business websites, UI/UX design, digital marketing, SEO, cloud solutions, and AI-powered business automation.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Mission + Vision */}
      <section className="mb-24">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Story */}
            <motion.div
              initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Our Story</h2>
              <p className="text-gray-400 leading-relaxed mb-5">
                Nyrogen Technologies was founded with a singular vision: to make enterprise-quality software accessible to
                businesses of every size. What started as a boutique development studio has grown into a full-spectrum
                digital transformation partner trusted by clients across 25+ countries.
              </p>
              <p className="text-gray-400 leading-relaxed mb-8">
                Our global team of engineers, designers, and strategists brings deep domain expertise across healthcare,
                education, retail, finance, logistics, and more — ensuring every solution is purpose-built, not generic.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {highlights.map((h) => (
                  <li key={h} className="flex items-start gap-2 text-sm text-gray-400">
                    <CheckCircle2 size={16} className="text-accent-blue mt-0.5 shrink-0" />
                    <span className="group-hover:text-white">{h}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Mission / Vision cards */}
            <div className="grid grid-cols-1 gap-6">
              {[
                {
                  Icon: Target, title: "Our Mission",
                  body: "To deliver secure, scalable, and user-focused technology that drives business success — empowering our clients with digital solutions that create real, measurable impact.",
                  gradient: "from-royal-blue/20 to-accent-blue/10",
                },
                {
                  Icon: Eye, title: "Our Vision",
                  body: "To be the world's most trusted partner in digital transformation — building the software backbone of tomorrow's most innovative businesses.",
                  gradient: "from-accent-blue/10 to-royal-blue/5",
                },
              ].map(({ Icon, title, body, gradient }, idx) => (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }} transition={{ duration: 0.5, delay: idx * 0.1 }}
                >
                  <div className={`group rounded-2xl border border-charcoal-border bg-gradient-to-br ${gradient} p-8 hover:border-accent-blue/40 transition-all duration-300 hover:shadow-[0_0_28px_rgba(37,99,235,0.2)]`}>
                    <div className="w-12 h-12 rounded-xl bg-royal-blue/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <Icon className="text-accent-blue" size={26} />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
                    <p className="text-gray-400 leading-relaxed">{body}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Core Values */}
      <section className="bg-charcoal-soft border-y border-charcoal-border py-24 mb-24">
        <Container>
          <div className="text-center mb-14">
            <span className="text-accent-blue font-semibold text-sm uppercase tracking-widest">Principles</span>
            <h2 className="text-4xl font-bold text-white mt-3 mb-4">
              Our <span className="text-blue-gradient">Core Values</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">The principles that guide every decision we make and every line of code we write.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, idx) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.45, delay: idx * 0.08 }}
              >
                <div className="group rounded-2xl border border-charcoal-border bg-charcoal-card p-8 h-full hover:border-accent-blue/50 transition-all duration-300 hover:shadow-[0_0_28px_rgba(37,99,235,0.2)] relative overflow-hidden cursor-pointer">
                  <div className="absolute inset-0 bg-gradient-to-br from-royal-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative z-10">
                    <span className="text-4xl mb-5 block group-hover:scale-110 transition-transform duration-300">{v.icon}</span>
                    <h3 className="text-lg font-bold text-white mb-3 group-hover:text-accent-blue transition-colors">{v.title}</h3>
                    <p className="text-sm text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">{v.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section>
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="relative rounded-3xl border border-charcoal-border bg-charcoal-card p-12 text-center overflow-hidden hover:border-accent-blue/40 transition-all duration-300 group"
          >
            <div className="absolute inset-0 -z-10 grid-bg opacity-30" />
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_60%_60%_at_50%_50%,rgba(37,99,235,0.12),transparent)]" />
            <h2 className="text-4xl font-bold text-white mb-5">
              Let&apos;s Build Together <span className="text-blue-gradient">Today</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto mb-8 text-lg">
              Join hundreds of businesses that trust Nyrogen Technologies for their most critical software needs.
            </p>
            <Link href="/contact">
              <Button size="lg" className="gap-2">Start Your Project <ArrowRight size={20} /></Button>
            </Link>
          </motion.div>
        </Container>
      </section>
    </div>
  );
}
