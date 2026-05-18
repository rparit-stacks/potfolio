"use client"

import { motion } from "framer-motion"
import { GraduationCap, MapPin, Award } from "lucide-react"

const education = [
  {
    degree: "Master of Computer Application",
    school: "Manipal University",
    location: "Jaipur, IN",
    date: "07/2025 — Present",
  },
  {
    degree: "Bachelor of Computer Application",
    school: "Guru Gobind Singh Indraprastha University",
    location: "Delhi, IN",
    date: "11/2022 — 07/2025",
  },
]

export default function Education() {
  return (
    <section id="education" className="py-24 bg-white dark:bg-[#0d0d0f] relative">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <p className="ios-section-eyebrow flex items-center justify-center gap-2">
            <Award className="h-4 w-4" /> Education
          </p>
          <h2 className="ios-section-title mt-2">Academic journey.</h2>
        </motion.div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {education.map((edu, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="ios-card p-6 md:p-7"
            >
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-[#0a84ff]/10 text-[#0a84ff] mb-4">
                <GraduationCap className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold tracking-tight">{edu.degree}</h3>
              <p className="text-[14.5px] text-[var(--ios-text)] mt-1">{edu.school}</p>
              <div className="mt-2 flex items-center gap-1.5 text-[13px] text-[var(--ios-text-muted)]">
                <MapPin className="h-3.5 w-3.5" />
                {edu.location}
              </div>
              <div className="mt-4 ios-chip inline-flex w-fit">{edu.date}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
