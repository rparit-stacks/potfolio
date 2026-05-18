"use client"

import { motion } from "framer-motion"
import {
  Code,
  Network,
  Layers,
  Shield,
  Workflow,
  Server,
  Sparkles,
} from "lucide-react"
import { useTechExperience } from "@/hooks/use-tech-experience"

const techPills = [
  { name: "Java", icon: Code },
  { name: "Spring Boot", icon: Server },
  { name: "REST API", icon: Network },
  { name: "Microservices", icon: Layers },
  { name: "JWT", icon: Shield },
  { name: "Docker / CI", icon: Workflow },
]

export default function About() {
  const techExp = useTechExperience()

  return (
    <section id="about" className="py-24 bg-white dark:bg-[#0d0d0f] relative">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <p className="ios-section-eyebrow">About</p>
          <h2 className="ios-section-title mt-2">
            Engineer who ships.
          </h2>
          <p className="mt-4 text-[17px] text-[var(--ios-text-muted)] leading-relaxed">
            I’m Rohit Parit — a Java developer focused on building reliable,
            performant backends and the products around them.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {/* Avatar card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5"
          >
            <div className="ios-card p-6 h-full">
              <div className="relative aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-[#0a84ff]/12 via-[#5e5ce6]/10 to-[#af52de]/12">
                <img
                  src="/pp.jpg"
                  alt="Rohit Parit"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 p-5 bg-gradient-to-t from-black/55 to-transparent text-white">
                  <div className="text-lg font-semibold tracking-tight">Rohit Parit</div>
                  <div className="text-sm opacity-90">Java · Spring Boot · MongoDB</div>
                </div>
              </div>

              <div className="mt-5 grid grid-cols-3 gap-3">
                <Stat k="160+" v="LeetCode" />
                <Stat k="5+" v="Products" />
                <Stat k={techExp?.shortLabel ?? "—"} v="Experience" />
              </div>
            </div>
          </motion.div>

          {/* Story + tech pills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-7"
          >
            <div className="ios-card p-7 md:p-9 h-full">
              <div className="inline-flex items-center gap-2 ios-chip mb-4">
                <Sparkles className="h-3.5 w-3.5" /> A bit about me
              </div>
              <div className="space-y-4 text-[16px] leading-relaxed text-[var(--ios-text)]">
                <p>
                  Currently a Backend Java Developer at <strong>Debound</strong>,
                  leading the migration of Bank of Maharashtra’s legacy PHP stack to
                  a modern Java ecosystem with REST APIs.
                </p>
                <p className="text-[var(--ios-text-muted)]">
                  I specialise in Spring Boot, Spring Security &amp; JWT, microservices,
                  CI/CD, and DevOps. Recent work includes{" "}
                  <strong>NainiStore</strong> — a hyperlocal marketplace running on
                  Spring Boot &amp; MongoDB — and{" "}
                  <strong>ClearPack PackIQ Copilot</strong>, a RAG-powered backend
                  for factory technicians.
                </p>
                <p className="text-[var(--ios-text-muted)]">
                  Pursuing MCA at Manipal University Jaipur. Always learning,
                  always shipping.
                </p>
              </div>

              <div className="mt-7 grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                {techPills.map(({ name, icon: Icon }) => (
                  <div
                    key={name}
                    className="flex items-center gap-2 rounded-2xl border border-[var(--ios-separator)] bg-[var(--ios-bg)] dark:bg-white/[0.04] px-3 py-2.5 text-sm font-medium"
                  >
                    <span className="inline-flex h-7 w-7 items-center justify-center rounded-lg bg-[#0a84ff]/10 text-[#0a84ff]">
                      <Icon className="h-3.5 w-3.5" />
                    </span>
                    {name}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function Stat({ k, v }: { k: string; v: string }) {
  return (
    <div className="rounded-2xl border border-[var(--ios-separator)] bg-[var(--ios-bg)] dark:bg-white/[0.04] p-3 text-center">
      <div className="text-xl font-semibold tracking-tight">{k}</div>
      <div className="text-[11px] uppercase tracking-wider text-[var(--ios-text-muted)] mt-0.5">
        {v}
      </div>
    </div>
  )
}
