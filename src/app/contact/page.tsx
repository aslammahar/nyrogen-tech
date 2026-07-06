"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { useForm } from "react-hook-form";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

type FormData = {
  name: string; company: string; email: string;
  phone: string; service: string; budget: string; message: string;
};

const inp = "w-full px-4 py-3 rounded-xl border border-charcoal-border bg-charcoal-soft text-white placeholder:text-gray-400/50 focus:ring-2 focus:ring-royal-blue/50 focus:border-royal-blue outline-none transition-all duration-300 hover:border-accent-blue/40";

const contactInfo = [
  { icon: MapPin, title: "Headquarters",   body: "123 Tech Boulevard, Suite 500\nSan Francisco, CA 94105" },
  { icon: Mail,   title: "Email",          body: "info@nyrogen.com\nsupport@nyrogen.com" },
  { icon: Phone,  title: "Phone",          body: "+1 (800) 123-4567\n+44 20 7946 0958" },
  { icon: Clock,  title: "Business Hours", body: "Mon–Fri: 9 AM – 6 PM EST\n24/7 Enterprise Support" },
];

export default function ContactPage() {
  const { register, handleSubmit, formState: { errors, isSubmitSuccessful }, reset } = useForm<FormData>();
  const onSubmit = (_: FormData) => { setTimeout(() => reset(), 4000); };

  return (
    <div className="pt-32 pb-24 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 grid-bg opacity-30" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-royal-blue/6 rounded-full blur-3xl -z-10 animate-float" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-royal-blue/5 rounded-full blur-3xl -z-10 animate-float" style={{ animationDelay: "1.5s" }} />

      <section className="mb-16 text-center">
        <Container>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <span className="text-accent-blue font-semibold text-sm uppercase tracking-widest">Contact</span>
            <h1 className="text-5xl md:text-6xl font-bold text-white mt-4 mb-6">
              Let&apos;s Build <span className="text-blue-gradient">Something Great</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Talk to our experts about your project. We respond within 2 business hours.
            </p>
          </motion.div>
        </Container>
      </section>

      <section>
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">

            {/* Form */}
            <motion.div className="lg:col-span-8"
              initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="rounded-3xl border border-charcoal-border bg-charcoal-card p-8 md:p-12 hover:border-accent-blue/30 transition-all duration-300">
                <h2 className="text-2xl font-bold text-white mb-8">Send Us a Message</h2>

                {isSubmitSuccessful && (
                  <div className="mb-6 p-4 rounded-xl border border-royal-blue/40 bg-royal-blue/10 text-accent-blue text-sm font-semibold">
                    ✅ Message received! Our team will contact you within 2 business hours.
                  </div>
                )}

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-white mb-2">Full Name *</label>
                      <input {...register("name", { required: true })} className={inp} placeholder="John Doe" />
                      {errors.name && <span className="text-red-400 text-xs mt-1 block">Required</span>}
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-white mb-2">Company</label>
                      <input {...register("company")} className={inp} placeholder="Acme Corp" />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-white mb-2">Work Email *</label>
                      <input type="email" {...register("email", { required: true })} className={inp} placeholder="john@company.com" />
                      {errors.email && <span className="text-red-400 text-xs mt-1 block">Valid email required</span>}
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-white mb-2">Phone</label>
                      <input {...register("phone")} className={inp} placeholder="+1 (555) 000-0000" />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-white mb-2">Service Needed</label>
                      <select {...register("service")} className={inp}>
                        <option value="Custom Software">Custom Software Development</option>
                        <option value="Web App">Web Application</option>
                        <option value="Mobile App">Mobile Application</option>
                        <option value="UI/UX">UI/UX Design</option>
                        <option value="AI">AI / Automation</option>
                        <option value="Cloud">Cloud Solutions</option>
                        <option value="SEO">Digital Marketing & SEO</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-white mb-2">Budget Range</label>
                      <select {...register("budget")} className={inp}>
                        <option value="&lt;10k">Less than $10,000</option>
                        <option value="10-50k">$10,000 – $50,000</option>
                        <option value="50-100k">$50,000 – $100,000</option>
                        <option value="100k+">$100,000+</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-white mb-2">Project Details *</label>
                    <textarea {...register("message", { required: true })} rows={5}
                      className={`${inp} resize-none`} placeholder="Tell us about your project..." />
                    {errors.message && <span className="text-red-400 text-xs mt-1 block">Required</span>}
                  </div>
                  <Button type="submit" size="lg" className="w-full md:w-auto px-12">Submit Request</Button>
                </form>
              </div>
            </motion.div>

            {/* Sidebar */}
            <motion.div className="lg:col-span-4 flex flex-col gap-5"
              initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="rounded-3xl border border-charcoal-border bg-charcoal-card p-7 hover:border-accent-blue/30 transition-all duration-300">
                <h3 className="text-xl font-bold text-white mb-7">Contact Information</h3>
                <div className="space-y-6">
                  {contactInfo.map((item) => (
                    <div key={item.title} className="flex items-start gap-4 group">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-royal-blue/30 to-accent-blue/20 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                        <item.icon className="text-accent-blue" size={18} />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white text-sm">{item.title}</h4>
                        <p className="text-sm text-gray-400 mt-0.5 whitespace-pre-line group-hover:text-gray-300 transition-colors">{item.body}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Animated map placeholder */}
              <div className="h-44 rounded-2xl border border-charcoal-border bg-charcoal-soft relative overflow-hidden flex items-center justify-center">
                <div className="absolute inset-0 grid-bg opacity-50" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_50%,rgba(37,99,235,0.15),transparent)]" />
                <div className="relative z-10 text-center">
                  <div className="w-9 h-9 rounded-full bg-royal-blue/30 border-2 border-accent-blue animate-pulse-ring mx-auto mb-2 flex items-center justify-center">
                    <MapPin className="text-accent-blue" size={16} />
                  </div>
                  <p className="text-accent-blue text-xs font-bold">San Francisco, CA</p>
                </div>
              </div>
            </motion.div>

          </div>
        </Container>
      </section>
    </div>
  );
}
