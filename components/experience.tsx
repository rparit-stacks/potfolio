"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Briefcase, Server, Smartphone, Palette } from "lucide-react"
import { useTechExperience } from "@/hooks/use-tech-experience"
import { formatCareerSince } from "@/lib/experience"

const experiences = [
  {
    role: "Backend Java Developer",
    company: "Debound",
    date: "11/2025 — Present",
    icon: Server,
    tags: ["Java", "Spring Boot", "REST APIs", "Migration"],
    description: [
      "Spearheading the migration of Bank of Maharashtra’s legacy PHP system to a modern Java ecosystem.",
      "Architecting scalable REST APIs, improving system efficiency and reducing response times by ~40%.",
    ],
  },
  {
    role: "Frontend & E-commerce Engineer",
    company: "Studio Sara (Quout)",
    date: "10/2025 — 11/2025",
    icon: Palette,
    tags: ["React", "TypeScript", "Storefront", "Admin Panel"],
    description: [
      "Built the Quout storefront and admin panel for Studio Sara — custom prints & embroidery design studio.",
      "Implemented product catalog, order flow, and admin controls for a small-batch printing business.",
    ],
  },
  {
    role: "Full Stack Developer",
    company: "GNEXT",
    date: "07/2025 — 10/2025",
    icon: Smartphone,
    tags: ["PHP", "Full Stack", "End-to-End Design"],
    description: [
      "Collaborated with a cross-functional team to build a Physiotherapy Booking System for Abhaile Physiotherapy.",
      "Designed and implemented the application end-to-end, delivering a seamless user experience.",
    ],
  },
]

export default function Experience() {
  const techExp = useTechExperience()
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])

  return (
    <section id="experience" className="py-24 bg-[var(--ios-bg)] relative">
      <div className="container mx-auto px-4 md:px-6" ref={containerRef}>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <p className="ios-section-eyebrow flex items-center justify-center gap-2">
            <Briefcase className="h-4 w-4" /> Experience
          </p>
          <h2 className="ios-section-title mt-2">Career path.</h2>
          <p className="mt-4 text-[16px] text-[var(--ios-text-muted)] leading-relaxed">
            {techExp ? (
              <>
                <span className="font-semibold text-[var(--ios-text)]">{techExp.label}</span> in
                tech since {formatCareerSince()}.
              </>
            ) : (
              <>Building in tech since {formatCareerSince()}.</>
            )}
          </p>
        </motion.div>

        <div className="relative max-w-3xl mx-auto pl-8 md:pl-10">
          <div className="absolute left-3 md:left-4 top-0 bottom-0 w-px bg-[var(--ios-separator)]" />
          <motion.div
            style={{ height: lineHeight }}
            className="absolute left-3 md:left-4 top-0 w-px bg-gradient-to-b from-[#0a84ff] via-[#5e5ce6] to-[#af52de]"
          />

          <div className="space-y-7">
            {experiences.map((exp, i) => {
              const Icon = exp.icon
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.5, delay: 0.05 * i }}
                  className="relative"
                >
                  <span className="absolute -left-[34px] md:-left-[42px] top-3 inline-flex h-7 w-7 items-center justify-center rounded-full bg-white dark:bg-[#1c1c1e] border border-[var(--ios-separator)] shadow-sm">
                    <Icon className="h-3.5 w-3.5 text-[#0a84ff]" />
                  </span>

                  <div className="ios-card p-6">
                    <div className="flex flex-wrap items-center gap-2 mb-1.5">
                      <span className="ios-chip text-[11px]">{exp.date}</span>
                    </div>
                    <h3 className="text-lg font-semibold tracking-tight">{exp.role}</h3>
                    <div className="text-[14px] text-[var(--ios-text-muted)] mt-0.5">{exp.company}</div>

                    <ul className="mt-3 space-y-1.5 text-[14.5px] text-[var(--ios-text)]">
                      {exp.description.map((d, j) => (
                        <li key={j} className="flex gap-2">
                          <span className="text-[#0a84ff] mt-1">›</span>
                          <span className="text-[var(--ios-text-muted)]">{d}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {exp.tags.map((t) => (
                        <span
                          key={t}
                          className="text-[11px] font-medium px-2 py-1 rounded-md bg-[var(--ios-bg)] dark:bg-white/[0.06] text-[var(--ios-text-muted)] border border-[var(--ios-separator)]"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
