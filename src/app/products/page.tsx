"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Check } from "lucide-react";
import Link from "next/link";

const projects = [
  {
    name: "Travel CRM",
    category: "CRM",
    description: "A comprehensive CRM designed for travel agencies and tour operators. Manages leads, bookings, itineraries, and customer journeys end-to-end.",
    features: ["Lead Management & Scoring", "Automated Quotations", "Itinerary Builder", "Payment Gateway Integration"],
  },
  {
    name: "Learning Management System",
    category: "EdTech",
    description: "A full-featured LMS for educational institutions and corporate training — courses, assessments, progress tracking, and certifications.",
    features: ["Course Builder & SCORM", "Live Class Integration", "Assessment Engine", "Certificates & Badges"],
  },
  {
    name: "Inventory Management System",
    category: "ERP",
    description: "Real-time inventory tracking across multiple warehouses with purchase orders, stock alerts, and supplier management.",
    features: ["Multi-Warehouse Support", "Barcode / QR Scanning", "Low-Stock Alerts", "Supplier Portal"],
  },
  {
    name: "Point of Sale (POS)",
    category: "Retail",
    description: "Lightning-fast POS for retail stores with offline support, loyalty programs, multi-store sync, and detailed analytics.",
    features: ["Offline Mode", "Multi-Store Sync", "Loyalty Programs", "Advanced Analytics"],
  },
  {
    name: "Construction ERP",
    category: "ERP",
    description: "End-to-end ERP for construction firms — project planning, resource allocation, budget tracking, and safety compliance.",
    features: ["Project Planning", "Resource Allocation", "Budget & Cost Tracking", "Safety Compliance"],
  },
  {
    name: "Real Estate CRM",
    category: "CRM",
    description: "Empowers real estate agents and developers to manage property listings, leads, viewings, and commission tracking.",
    features: ["Property Listing Mgmt", "Lead Follow-up Automation", "Contract Management", "Commission Tracking"],
  },
  {
    name: "Customer Relationship Management",
    category: "CRM",
    description: "A versatile enterprise CRM with pipeline management, task automation, email integration, and deep reporting.",
    features: ["Sales Pipeline", "Task Automation", "Email Integration", "Custom Dashboards"],
  },
  {
    name: "Decision Support System",
    category: "Analytics",
    description: "Data-driven DSS that aggregates business KPIs, runs scenario modeling, and surfaces actionable insights for leadership.",
    features: ["KPI Aggregation", "Scenario Modeling", "Visual Dashboards", "Exportable Reports"],
  },
  {
    name: "AI ChatBot for Consultation",
    category: "AI",
    description: "Intelligent AI-powered chatbot that handles client consultations, qualifies leads, and books appointments autonomously.",
    features: ["NLP / LLM Powered", "Lead Qualification", "Appointment Booking", "CRM Integration"],
  },
  {
    name: "Accountant",
    category: "Finance",
    description: "Full accounting system with chart of accounts, journal entries, AR/AP, payroll processing, and tax reporting.",
    features: ["Chart of Accounts", "AR / AP Management", "Payroll Processing", "Tax & Compliance Reports"],
  },
  {
    name: "MDS (Shabzi Mandi)",
    category: "Marketplace",
    description: "A digital marketplace platform for fresh produce (Mandi) — connecting farmers, wholesalers, and retailers in real time.",
    features: ["Farmer Onboarding", "Live Price Discovery", "Order Management", "Delivery Tracking"],
  },
  {
    name: "Hospital Management",
    category: "Healthcare",
    description: "HIPAA-aligned HMS covering patient records, OPD/IPD management, pharmacy, billing, and lab integrations.",
    features: ["Electronic Health Records", "OPD / IPD Mgmt", "Pharmacy & Lab", "Billing & Insurance"],
  },
  {
    name: "POS System",
    category: "Retail",
    description: "Cloud-based POS tailored for restaurants and hospitality — table management, kitchen display, and split billing.",
    features: ["Table Management", "Kitchen Display System", "Split Billing", "Online Orders Integration"],
  },
  {
    name: "GYM Management",
    category: "Fitness",
    description: "Complete gym management suite — memberships, class scheduling, trainer assignments, and payment tracking.",
    features: ["Membership Plans", "Class Scheduling", "Trainer Management", "Payment & Renewals"],
  },
  {
    name: "Threads Platform",
    category: "Social",
    description: "A threaded discussion and community platform with real-time messaging, content moderation, and engagement analytics.",
    features: ["Threaded Discussions", "Real-time Messaging", "Content Moderation", "Engagement Analytics"],
  },
  {
    name: "Fleet Management",
    category: "Logistics",
    description: "Track and manage vehicle fleets in real time — GPS tracking, driver assignments, maintenance schedules, and fuel logs.",
    features: ["GPS Live Tracking", "Driver Assignments", "Maintenance Alerts", "Fuel & Cost Logs"],
  },
  {
    name: "Sales CRM",
    category: "CRM",
    description: "A sales-focused CRM for high-velocity teams — pipeline stages, call logging, targets, leaderboards, and commission tracking.",
    features: ["Pipeline Stages", "Call & Activity Logs", "Sales Targets", "Leaderboard & Commissions"],
  },
];

const categoryColor: Record<string, string> = {
  CRM: "#2563EB", EdTech: "#3B82F6", ERP: "#1D4ED8", Retail: "#60A5FA",
  Analytics: "#2563EB", AI: "#06B6D4", Finance: "#3B82F6", Marketplace: "#1D4ED8",
  Healthcare: "#2563EB", Fitness: "#3B82F6", Social: "#60A5FA", Logistics: "#1D4ED8",
};

export default function ProductsPage() {
  return (
    <div className="pt-32 pb-24 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 grid-bg opacity-30" />

      {/* Header */}
      <section className="mb-20 text-center">
        <Container>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <span className="text-accent-blue font-semibold text-sm uppercase tracking-widest">Our Portfolio</span>
            <h1 className="text-5xl md:text-6xl font-bold text-white mt-4 mb-6">
              17 Enterprise Products <span className="text-blue-gradient">Built & Shipped</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              From AI chatbots to hospital management systems — every product is purpose-built, not templated.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Products grid */}
      <section>
        <Container>
          <div className="flex flex-col gap-7">
            {projects.map((p, idx) => (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.5, delay: idx * 0.03 }}
              >
                <div className="group relative rounded-3xl border border-charcoal-border bg-charcoal-card overflow-hidden hover:border-accent-blue/50 transition-all duration-300 hover:shadow-[0_0_40px_rgba(37,99,235,0.18)]">
                  <div className="absolute inset-0 bg-gradient-to-r from-royal-blue/0 via-royal-blue/4 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />

                  <div className="grid grid-cols-1 lg:grid-cols-12">
                    {/* Content */}
                    <div className="lg:col-span-8 p-8 lg:p-10 flex flex-col justify-center relative z-10">
                      <div className="flex items-center gap-3 mb-4">
                        <span
                          className="inline-block text-xs font-bold px-3 py-1 rounded-full border"
                          style={{
                            color: categoryColor[p.category] ?? "#3B82F6",
                            borderColor: `${categoryColor[p.category] ?? "#3B82F6"}44`,
                            background: `${categoryColor[p.category] ?? "#3B82F6"}14`,
                          }}
                        >
                          {p.category}
                        </span>
                        <span className="text-xs text-gray-400 font-mono">#{String(idx + 1).padStart(2, "0")}</span>
                      </div>
                      <h2 className="text-2xl md:text-3xl font-bold text-white mb-3 group-hover:text-accent-blue transition-colors">
                        {p.name}
                      </h2>
                      <p className="text-gray-400 mb-6 leading-relaxed">{p.description}</p>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-8">
                        {p.features.map((f) => (
                          <li key={f} className="flex items-center gap-2 text-sm text-gray-400">
                            <Check size={14} className="text-accent-blue shrink-0" />
                            <span className="group-hover:text-gray-300 transition-colors">{f}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="flex gap-4 pt-6 border-t border-charcoal-border">
                        <Button size="sm" className="gap-1.5">Live Demo <ArrowRight size={14} /></Button>
                        <Link href="/contact">
                          <Button size="sm" variant="outline">Request Quote</Button>
                        </Link>
                      </div>
                    </div>

                    {/* Visual accent */}
                    <div className="lg:col-span-4 min-h-[220px] relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-royal-blue/10 to-charcoal">
                      <div className="absolute inset-0 grid-bg opacity-20" />
                      <div className="relative z-10 text-center px-6">
                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-royal-blue to-accent-blue flex items-center justify-center mx-auto mb-4 shadow-[0_0_24px_rgba(37,99,235,0.5)] group-hover:shadow-[0_0_40px_rgba(37,99,235,0.7)] transition-all duration-300 animate-pulse-ring">
                          <span className="text-white font-bold text-xl">N</span>
                        </div>
                        <p className="text-white font-bold text-sm">{p.name}</p>
                        <p className="text-accent-blue/80 text-xs mt-1 font-semibold uppercase tracking-wide">{p.category}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}
