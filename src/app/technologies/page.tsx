"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";

const techStack = [
  { category: "Frontend",       emoji: "🖥️", technologies: ["React", "Next.js", "Vue.js", "TypeScript", "JavaScript", "Tailwind CSS", "Framer Motion"] },
  { category: "Backend",        emoji: "⚙️", technologies: ["Node.js", "Laravel", "ASP.NET Core", "Python", "PHP", "Go", "FastAPI", "Java"] },
  { category: "Mobile",         emoji: "📱", technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Expo", "Firebase"] },
  { category: "Database",       emoji: "🗄️", technologies: ["PostgreSQL", "MySQL", "SQL Server", "MongoDB", "Redis", "Firebase", "Elasticsearch"] },
  { category: "Cloud & DevOps", emoji: "☁️", technologies: ["AWS", "Microsoft Azure", "Google Cloud", "Docker", "Kubernetes", "GitHub Actions", "Terraform"] },
  { category: "AI & Analytics", emoji: "🤖", technologies: ["OpenAI / GPT", "LangChain", "TensorFlow", "PyTorch", "Power BI", "Tableau", "Pandas"] },
];

export default function TechnologiesPage() {
  return (
    <div className="pt-32 pb-24 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 grid-bg opacity-30" />
      <div className="absolute right-0 top-32 w-[500px] h-[500px] bg-royal-blue/5 rounded-full blur-3xl -z-10" />

      <section className="mb-20 text-center">
        <Container>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <span className="text-accent-blue font-semibold text-sm uppercase tracking-widest">Tech Stack</span>
            <h1 className="text-5xl md:text-6xl font-bold text-white mt-4 mb-6">
              Technologies We <span className="text-blue-gradient">Master</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              We build with the best. Our tech stack is chosen for performance, scalability, security, and long-term maintainability.
            </p>
          </motion.div>
        </Container>
      </section>

      <section>
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {techStack.map((stack, idx) => (
              <motion.div
                key={stack.category}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.45, delay: (idx % 3) * 0.1 }}
              >
                <div className="rounded-2xl border border-charcoal-border bg-charcoal-card overflow-hidden h-full hover:border-accent-blue/50 transition-all duration-300 hover:shadow-[0_0_28px_rgba(37,99,235,0.22)] group">
                  {/* Card header */}
                  <div className="px-7 py-5 bg-charcoal-soft border-b border-charcoal-border flex items-center justify-between group-hover:bg-charcoal-hover transition-colors">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{stack.emoji}</span>
                      <h3 className="text-lg font-bold text-white">{stack.category}</h3>
                    </div>
                    <div className="w-2 h-2 rounded-full bg-accent-blue animate-pulse" />
                  </div>
                  {/* Tags */}
                  <div className="p-7">
                    <div className="flex flex-wrap gap-2.5">
                      {stack.technologies.map((tech) => (
                        <motion.span
                          key={tech}
                          whileHover={{ scale: 1.06 }}
                          className="px-3 py-1.5 rounded-full text-sm font-semibold border border-royal-blue/30 bg-royal-blue/10 text-accent-blue hover:border-accent-blue hover:bg-royal-blue/20 transition-all duration-300 cursor-pointer"
                        >
                          {tech}
                        </motion.span>
                      ))}
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
