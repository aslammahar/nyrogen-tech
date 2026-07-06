"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Target, Eye, CheckCircle2, ArrowRight, Quote } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const values = [
  { title: "Innovation First",   desc: "We continuously push boundaries to deliver cutting-edge digital solutions.", icon: "🚀" },
  { title: "Quality Obsessed",   desc: "Strict quality standards ensure every product is robust, secure, and reliable.", icon: "✅" },
  { title: "Client Partnership", desc: "Your success is our success. We work as an extension of your team.", icon: "🤝" },
  { title: "Integrity Always",   desc: "Full transparency, honesty, and professional ethics in every engagement.", icon: "🛡️" },
];

const highlights = [
  "Custom software tailored to your exact business needs",
  "Full-cycle development from ideation to deployment",
  "Agile methodology with transparent communication",
  "Post-launch support and continuous improvement",
  "AI-powered automation and cloud-first architecture",
  "Cross-platform web and mobile applications",
];

const team = [
  {
    name: "Aslam Baig",
    role: "Laravel Developer",
    bio: "Skilled backend engineer specializing in Laravel, PHP, and CRM systems. Builds robust, scalable APIs and full-stack web applications powering Nyrogen's enterprise products.",
    photo: aslam-baig.jpg,
    initials: "AB",
    color: "from-royal-blue to-accent-blue",
  },
  {
    name: "Saeed Ahmed",
    role: "Graphic Designer",
    bio: "Creative designer with a sharp eye for visual storytelling. Crafts stunning brand identities, UI components, and marketing assets that make Nyrogen's products stand out.",
    photo: null,
    initials: "S",
    color: "from-purple-600 to-purple-400",
  },
  {
    name: "Sara Khan",
    role: "Sales Manager",
    bio: "Results-driven sales professional who builds lasting client relationships. Sara leads Nyrogen's sales pipeline and ensures every client finds the right solution for their needs.",
    photo: null,
    initials: "SK",
    color: "from-emerald-600 to-emerald-400",
  },
  {
    name: "Saim Khan",
    role: "Marketing Specialist",
    bio: "Digital marketing expert specializing in SEO, social media strategy, and growth campaigns. Alishba drives Nyrogen's brand visibility and lead generation across global markets.",
    photo: null,
    initials: "SK",
    color: "from-pink-600 to-pink-400",
  },
];

export default function AboutPage() {
  return (
    <div className="pt-32 pb-24 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 grid-bg opacity-30" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-royal-blue/5 rounded-full blur-3xl -z-10" />

      {/* ── Header ─────────────────────────────────────── */}
      <section className="mb-20 text-center">
        <Container>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <span className="text-accent-blue font-semibold text-sm uppercase tracking-widest">About Us</span>
            <h1 className="text-5xl md:text-6xl font-bold text-white mt-4 mb-6 leading-tight">
              Dedicated to Helping <span className="text-blue-gradient">Businesses Grow</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Nyrogen Technologies is a software company dedicated to helping businesses grow through innovative
              digital solutions — custom software, web applications, mobile applications, UI/UX design,
              digital marketing, SEO, cloud solutions, and AI-powered business automation.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* ── Story + Mission / Vision ────────────────────── */}
      <section className="mb-24">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Our Story</h2>
              <p className="text-gray-400 leading-relaxed mb-5">
                Nyrogen Technologies was founded with a singular vision: to make enterprise-quality software accessible
                to businesses of every size. What started as a boutique development studio has grown into a full-spectrum
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
                    {h}
                  </li>
                ))}
              </ul>
            </motion.div>

            <div className="grid grid-cols-1 gap-6">
              {[
                {
                  Icon: Target, title: "Our Mission",
                  body: "To deliver secure, scalable, and user-focused technology that drives business success — empowering our clients with digital solutions that create real, measurable impact.",
                },
                {
                  Icon: Eye, title: "Our Vision",
                  body: "To be the world's most trusted partner in digital transformation — building the software backbone of tomorrow's most innovative businesses.",
                },
              ].map(({ Icon, title, body }, idx) => (
                <motion.div key={title}
                  initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }} transition={{ duration: 0.5, delay: idx * 0.1 }}
                >
                  <div className="group rounded-2xl border border-charcoal-border bg-charcoal-card p-8 hover:border-accent-blue/40 transition-all duration-300 hover:shadow-[0_0_28px_rgba(37,99,235,0.2)]">
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

{/* ── CEO MESSAGE ─────────────────────────────────── */}
      <section className="mb-24 relative overflow-hidden">
        <Container>
          <div className="text-center mb-14">
            <span className="text-accent-blue font-semibold text-sm uppercase tracking-widest">Leadership</span>
            <h2 className="text-4xl font-bold text-white mt-3">
              Message from the <span className="text-blue-gradient">CEO</span>
            </h2>
          </div>

          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.7 }}
            >
              <div className="relative rounded-3xl border border-charcoal-border bg-charcoal-card overflow-hidden hover:border-accent-blue/30 transition-all duration-300 hover:shadow-[0_0_50px_rgba(37,99,235,0.15)]">
                <div className="h-1 w-full bg-gradient-to-r from-royal-blue via-accent-blue to-light-blue" />

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                  {/* Photo side */}
                  <div className="lg:col-span-4 relative min-h-[340px] overflow-hidden flex flex-col items-center justify-center bg-gradient-to-br from-royal-blue/10 to-charcoal p-10">
                    <div className="absolute inset-0 grid-bg opacity-15" />
                    <div className="relative z-10">
                      <div className="relative w-44 h-44 mx-auto">
                        <div className="absolute inset-0 rounded-full border-2 border-accent-blue/40 animate-spin-slow" style={{ margin: "-8px" }} />
                        <div className="absolute inset-0 rounded-full shadow-[0_0_30px_rgba(37,99,235,0.5)]" />
                        <div className="w-44 h-44 rounded-full overflow-hidden border-4 border-royal-blue/50 relative">
                          <Image
                            src="/ceo-yousuf-asim.jpg"
                            alt="Mr. Yousuf Asim – CEO"
                            fill
                            className="object-cover object-center"
                            sizes="176px"
                            priority
                          />
                        </div>
                      </div>
                      <div className="text-center mt-6">
                        <h3 className="text-xl font-bold text-white">Mr.Yousuf Asim</h3>
                        <p className="text-accent-blue font-semibold text-sm mt-1 tracking-wide">Chief Executive Officer</p>
                        <p className="text-gray-400 text-xs mt-1">Nyrogen Technologies</p>
                      </div>
                    </div>
                  </div>

                  {/* Message side */}
                  <div className="lg:col-span-8 p-8 md:p-12 flex flex-col justify-center">
                    <Quote className="text-royal-blue/40 mb-6" size={48} strokeWidth={1.5} />
                    <blockquote className="space-y-4 text-gray-300 text-lg leading-relaxed mb-8">
                      <p>
                        At Nyrogen Technologies, we believe that technology is not just a tool — it is the foundation
                        upon which the future of every business is built. Since day one, our mission has been simple:
                        to engineer digital solutions that truly make a difference.
                      </p>
                      <p>
                        We have built over 17 enterprise-grade products — from AI chatbots and hospital management
                        systems to fleet tracking and e-commerce platforms — each one a testament to our commitment
                        to quality, innovation, and client success.
                      </p>
                      <p>
                        Our team doesn&apos;t just write code. We listen, understand, and partner with you to
                        transform your biggest challenges into your strongest competitive advantages. That is the
                        Nyrogen promise — and it is one we deliver on every single day.
                      </p>
                    </blockquote>
                    <div className="flex items-center gap-4 pt-6 border-t border-charcoal-border">
                      <div>
                        <p className="font-bold text-white text-lg">Yousuf Asim</p>
                        <p className="text-accent-blue text-sm font-semibold">CEO &amp; Founder, Nyrogen Technologies</p>
                      </div>
                      <div className="ml-auto hidden sm:block">
                        <svg width="120" height="40" viewBox="0 0 120 40" fill="none" className="opacity-40">
                          <path d="M5 30 Q20 5 40 20 Q55 32 70 15 Q90 0 115 20" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" fill="none" />
                          <path d="M10 35 Q30 28 50 32" stroke="#3B82F6" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.5"/>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>
      
{/* ── CFO MESSAGE ─────────────────────────────────── */}
      <section className="mb-24 relative overflow-hidden">
        <Container>
          <div className="text-center mb-14">
            <span className="text-accent-blue font-semibold text-sm uppercase tracking-widest">Leadership</span>
            <h2 className="text-4xl font-bold text-white mt-3">
              Message from the <span className="text-blue-gradient">CFO</span>
            </h2>
          </div>

          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.7 }}
            >
              <div className="relative rounded-3xl border border-charcoal-border bg-charcoal-card overflow-hidden hover:border-accent-blue/30 transition-all duration-300 hover:shadow-[0_0_50px_rgba(37,99,235,0.15)]">
                <div className="h-1 w-full bg-gradient-to-r from-royal-blue via-accent-blue to-light-blue" />

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                  {/* Photo side */}
                  <div className="lg:col-span-4 relative min-h-[340px] overflow-hidden flex flex-col items-center justify-center bg-gradient-to-br from-royal-blue/10 to-charcoal p-10">
                    <div className="absolute inset-0 grid-bg opacity-15" />
                    <div className="relative z-10">
                      <div className="relative w-44 h-44 mx-auto">
                        <div className="absolute inset-0 rounded-full border-2 border-accent-blue/40 animate-spin-slow" style={{ margin: "-8px" }} />
                        <div className="absolute inset-0 rounded-full shadow-[0_0_30px_rgba(37,99,235,0.5)]" />
                        <div className="w-44 h-44 rounded-full overflow-hidden border-4 border-royal-blue/50 relative">
                          <Image
                            src="/cfo-aslam-baig.jpg"
                            alt="Mr. Aslam Baig – CFO"
                            fill
                            className="object-cover object-center"
                            sizes="176px"
                            priority
                          />
                        </div>
                      </div>
                      <div className="text-center mt-6">
                        <h3 className="text-xl font-bold text-white">Mr. Aslam Baig</h3>
                        <p className="text-accent-blue font-semibold text-sm mt-1 tracking-wide">Chief Financial Officer</p>
                        <p className="text-gray-400 text-xs mt-1">Nyrogen Technologies</p>
                      </div>
                    </div>
                  </div>

                  {/* Message side */}
                  <div className="lg:col-span-8 p-8 md:p-12 flex flex-col justify-center">
                    <Quote className="text-royal-blue/40 mb-6" size={48} strokeWidth={1.5} />
                    <blockquote className="space-y-4 text-gray-300 text-lg leading-relaxed mb-8">
                      <p>
                        Behind every product we ship at Nyrogen Technologies is a simple financial discipline:
                        build things that are sustainable, not just impressive. Growth means nothing if it
                        isn&apos;t built on a foundation that can support the next ten years, not just the next
                        ten projects.
                      </p>
                      <p>
                        My role is to make sure every dollar we invest — in our engineers, our infrastructure,
                        our research — comes back multiplied in the value we deliver to clients. That discipline
                        is why we&apos;ve been able to scale to 17+ enterprise products without ever cutting
                        corners on quality or compromising the trust our clients place in us.
                      </p>
                      <p>
                        We treat every client engagement as a long-term investment, not a transaction. That
                        means transparent pricing, honest timelines, and a commitment to delivering measurable
                        ROI — because at the end of the day, our growth is only real if it&apos;s built on
                        yours.
                      </p>
                      <p>
                        That&apos;s the financial philosophy behind everything we build — and it&apos;s one
                        I stand behind on every project, every quarter, every year.
                      </p>
                    </blockquote>
                    <div className="flex items-center gap-4 pt-6 border-t border-charcoal-border">
                      <div>
                        <p className="font-bold text-white text-lg">Aslam Baig</p>
                        <p className="text-accent-blue text-sm font-semibold">CFO, Nyrogen Technologies</p>
                      </div>
                      <div className="ml-auto hidden sm:block">
                        <svg width="120" height="40" viewBox="0 0 120 40" fill="none" className="opacity-40">
                          <path d="M5 30 Q20 5 40 20 Q55 32 70 15 Q90 0 115 20" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" fill="none" />
                          <path d="M10 35 Q30 28 50 32" stroke="#3B82F6" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.5"/>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* ── TEAM ────────────────────────────────────────── */}
      <section className="mb-24 bg-charcoal-soft border-y border-charcoal-border py-24 relative overflow-hidden">
        <div className="absolute inset-0 -z-10 grid-bg opacity-20" />
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,rgba(37,99,235,0.08),transparent)]" />

        <Container>
          <div className="text-center mb-14">
            <span className="text-accent-blue font-semibold text-sm uppercase tracking-widest">The Team</span>
            <h2 className="text-4xl font-bold text-white mt-3 mb-4">
              Meet the <span className="text-blue-gradient">People Behind Nyrogen</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              World-class engineers, designers, and marketers committed to delivering exceptional digital products.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, idx) => (
              <motion.div key={member.name}
                initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <div className="group rounded-3xl border border-charcoal-border bg-charcoal-card p-7 text-center hover:border-accent-blue/50 transition-all duration-300 hover:shadow-[0_0_36px_rgba(37,99,235,0.22)] relative overflow-hidden h-full">
                  <div className="absolute inset-0 bg-gradient-to-br from-royal-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative z-10 flex flex-col items-center">

                    {/* Avatar */}
                    <div className="relative w-24 h-24 mx-auto mb-5">
                      <div
                        className="absolute rounded-full border border-accent-blue/25 group-hover:border-accent-blue/60 transition-colors animate-spin-slow"
                        style={{ inset: "-6px" }}
                      />
                      <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-royal-blue/30 group-hover:border-accent-blue/60 transition-colors relative">
                        {member.photo ? (
                          <Image
                            src={member.photo}
                            alt={member.name}
                            fill
                            className="object-cover object-top"
                            sizes="96px"
                          />
                        ) : (
                          <div className={`w-full h-full bg-gradient-to-br ${member.color} flex items-center justify-center`}>
                            <span className="text-2xl font-bold text-white">{member.initials}</span>
                          </div>
                        )}
                      </div>
                    </div>

                    <h3 className="text-lg font-bold text-white mb-1 group-hover:text-accent-blue transition-colors">
                      {member.name}
                    </h3>
                    <span className="inline-block text-xs font-bold px-3 py-1 rounded-full border border-royal-blue/30 bg-royal-blue/10 text-accent-blue mb-4">
                      {member.role}
                    </span>
                    <p className="text-sm text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                      {member.bio}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      

      {/* ── CORE VALUES ─────────────────────────────────── */}
      <section className="mb-24 bg-charcoal-soft border-y border-charcoal-border py-24">
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
              <motion.div key={v.title}
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

      {/* ── CTA ─────────────────────────────────────────── */}
      <section>
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="relative rounded-3xl border border-charcoal-border bg-charcoal-card p-12 text-center overflow-hidden group hover:border-accent-blue/40 transition-all duration-300"
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
