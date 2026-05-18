"use client"

import { motion } from "framer-motion"
import { Download, Github, Linkedin, ArrowRight, Sparkles } from "lucide-react"
import Link from "next/link"
import { useTechExperience } from "@/hooks/use-tech-experience"

export default function Hero() {
  const techExp = useTechExperience()
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden ios-mesh pt-28 pb-20">
      {/* Soft animated gradient orbs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          aria-hidden
          className="absolute -top-32 -left-24 w-[40rem] h-[40rem] rounded-full bg-[#0a84ff]/25 blur-3xl"
          animate={{ y: [0, 20, 0], x: [0, 10, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          aria-hidden
          className="absolute -bottom-32 -right-24 w-[42rem] h-[42rem] rounded-full bg-[#af52de]/20 blur-3xl"
          animate={{ y: [0, -20, 0], x: [0, -10, 0] }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative">
        <div className="max-w-4xl mx-auto text-center">
          {/* Eyebrow chip */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 ios-glass rounded-full px-4 py-1.5 text-xs font-medium text-[var(--ios-text-muted)] mb-6"
          >
            <span className="inline-flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            Available for new opportunities
            <Sparkles className="h-3.5 w-3.5 text-[#0a84ff]" />
          </motion.div>

          {/* Avatar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="mx-auto mb-7 relative"
          >
            <div className="relative h-28 w-28 md:h-32 md:w-32 mx-auto">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#0a84ff] via-[#5e5ce6] to-[#af52de] blur-xl opacity-50" />
              <img
                src="/pp.jpg"
                alt="Rohit Parit"
                className="relative h-full w-full rounded-full object-cover ring-4 ring-white dark:ring-[#1c1c1e] shadow-[0_18px_40px_-14px_rgba(10,132,255,0.45)]"
              />
            </div>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="text-[clamp(2.4rem,6vw,4.6rem)] font-bold leading-[1.04] tracking-[-0.04em] text-[var(--ios-text)]"
          >
            Backend engineering, <br className="hidden md:block" />
            <span className="text-gradient-ios">crafted with care.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.12 }}
            className="mt-5 text-[17px] md:text-xl text-[var(--ios-text-muted)] max-w-2xl mx-auto leading-relaxed"
          >
            I build secure, scalable products in Java &amp; Spring Boot — REST APIs,
            microservices, payments, and AI-integrated systems used in production.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-9 flex flex-wrap items-center justify-center gap-3"
          >
            <Link href="#contact" className="ios-button-primary inline-flex items-center gap-2">
              Hire me <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/projects" className="ios-button-secondary inline-flex items-center gap-2">
              View work
            </Link>
            <a
              href="/rohit-parit-resume.pdf"
              download="Rohit-Parit-Resume.pdf"
              className="ios-button-secondary inline-flex items-center gap-2"
            >
              <Download className="h-4 w-4" /> Resume
            </a>
          </motion.div>

          {/* Social row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 flex items-center justify-center gap-2 text-[var(--ios-text-muted)]"
          >
            <a
              href="https://www.linkedin.com/in/rparit1934/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full ios-glass hover:text-[#0a84ff] transition"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-4.5 w-4.5" />
            </a>
            <a
              href="https://github.com/rparit-stacks"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full ios-glass hover:text-[#0a84ff] transition"
              aria-label="GitHub"
            >
              <Github className="h-4.5 w-4.5" />
            </a>
          </motion.div>

          {/* Stats strip */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-14 grid grid-cols-3 gap-3 md:gap-6 max-w-2xl mx-auto"
          >
            {[
              { k: "5+", v: "Production apps" },
              {
                k: techExp?.shortLabel ?? "—",
                v: "Tech experience",
              },
              { k: "160+", v: "LeetCode solved" },
            ].map((s) => (
              <div
                key={s.v}
                className="ios-glass rounded-2xl px-4 py-5 text-left"
              >
                <div className="text-2xl md:text-3xl font-semibold tracking-tight">
                  {s.k}
                </div>
                <div className="text-xs md:text-sm text-[var(--ios-text-muted)] mt-1">
                  {s.v}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
