"use client"

import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import { Github, Linkedin, Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react"
import { supabase, isSupabaseReady } from "@/lib/supabase"

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((p) => ({ ...p, [name]: value }))
    setError(null)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)
    try {
      let ipAddress = "unknown"
      try {
        const r = await fetch("https://api.ipify.org?format=json")
        const d = await r.json()
        ipAddress = d.ip
      } catch {}

      const userAgent = typeof window !== "undefined" ? window.navigator.userAgent : "unknown"
      let source = "Direct Visit"
      if (typeof window !== "undefined") {
        const p = new URLSearchParams(window.location.search)
        const s = p.get("source")
        if (s) source = s.charAt(0).toUpperCase() + s.slice(1)
      }

      const emailResponse = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "form",
          ipAddress,
          userAgent,
          source,
          formData,
        }),
      })

      if (!emailResponse.ok) throw new Error("Failed to send message")

      if (isSupabaseReady) {
        try {
          await supabase.from("contacts").insert(formData)
        } catch {}
      }

      setSubmitted(true)
      setFormData({ name: "", email: "", message: "" })
      setTimeout(() => setSubmitted(false), 5000)
    } catch (err: any) {
      setError(err?.message || "Failed to send message. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-24 bg-[var(--ios-bg)] relative">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <p className="ios-section-eyebrow">Contact</p>
          <h2 className="ios-section-title mt-2">Let’s build something good.</h2>
          <p className="mt-4 text-[17px] text-[var(--ios-text-muted)] leading-relaxed">
            Have a project in mind, or want to chat backends and AI? Drop a line.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 max-w-5xl mx-auto">
          {/* Info card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2"
          >
            <div className="ios-card p-6 md:p-7 h-full">
              <h3 className="text-xl font-semibold tracking-tight mb-5">Contact info</h3>
              <ul className="space-y-1">
                <InfoRow icon={Mail} label="Email" value="rohitparit1934@gmail.com" href="mailto:rohitparit1934@gmail.com" />
                <InfoRow icon={Phone} label="Phone" value="+91 98101 67696" href="tel:+919810167696" />
                <InfoRow icon={MapPin} label="Location" value="New Delhi, IN" />
              </ul>

              <div className="ios-divider my-5" />

              <div className="text-xs uppercase tracking-wider text-[var(--ios-text-muted)] mb-3">
                Connect
              </div>
              <div className="flex gap-2">
                <Social href="https://www.linkedin.com/in/rparit1934/" icon={Linkedin} label="LinkedIn" />
                <Social href="https://github.com/rparit-stacks" icon={Github} label="GitHub" />
                <Social href="mailto:rohitparit1934@gmail.com" icon={Mail} label="Email" />
              </div>
            </div>
          </motion.div>

          {/* Form card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-3"
          >
            <div className="ios-card p-6 md:p-7">
              <h3 className="text-xl font-semibold tracking-tight mb-5">Send a message</h3>

              {submitted ? (
                <div className="rounded-2xl border border-emerald-200 bg-emerald-50 dark:bg-emerald-500/10 dark:border-emerald-500/20 p-5 flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-emerald-600 mt-0.5" />
                  <div>
                    <div className="font-semibold text-emerald-700 dark:text-emerald-300">Message sent</div>
                    <div className="text-sm text-emerald-700/80 dark:text-emerald-300/80">
                      Thanks for reaching out — I’ll get back to you soon.
                    </div>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {error && (
                    <div className="rounded-2xl border border-red-200 bg-red-50 dark:bg-red-500/10 dark:border-red-500/20 p-3 text-sm text-red-700 dark:text-red-300">
                      {error}
                    </div>
                  )}

                  <Field id="name" label="Name">
                    <input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      required
                      className="w-full bg-transparent outline-none text-[15px] placeholder:text-[var(--ios-text-muted)]"
                    />
                  </Field>

                  <Field id="email" label="Email">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      required
                      className="w-full bg-transparent outline-none text-[15px] placeholder:text-[var(--ios-text-muted)]"
                    />
                  </Field>

                  <Field id="message" label="Message" multiline>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project…"
                      required
                      rows={5}
                      className="w-full bg-transparent outline-none text-[15px] placeholder:text-[var(--ios-text-muted)] resize-none"
                    />
                  </Field>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="ios-button-primary inline-flex items-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? "Sending…" : (<>Send message <Send className="h-4 w-4" /></>)}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function InfoRow({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: React.ComponentType<{ className?: string }>
  label: string
  value: string
  href?: string
}) {
  const body = (
    <div className="flex items-center gap-3 py-3">
      <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-[#0a84ff]/10 text-[#0a84ff]">
        <Icon className="h-4.5 w-4.5" />
      </span>
      <div className="min-w-0">
        <div className="text-[11px] uppercase tracking-wider text-[var(--ios-text-muted)]">{label}</div>
        <div className="font-medium text-[15px] truncate">{value}</div>
      </div>
    </div>
  )
  return (
    <li>
      {href ? (
        <a href={href} className="block rounded-xl hover:bg-black/[0.03] dark:hover:bg-white/[0.04] -mx-2 px-2 transition">
          {body}
        </a>
      ) : (
        <div className="-mx-2 px-2">{body}</div>
      )}
    </li>
  )
}

function Social({
  href,
  icon: Icon,
  label,
}: {
  href: string
  icon: React.ComponentType<{ className?: string }>
  label: string
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="inline-flex h-10 w-10 items-center justify-center rounded-full ios-glass hover:text-[#0a84ff] transition"
    >
      <Icon className="h-4.5 w-4.5" />
    </a>
  )
}

function Field({
  id,
  label,
  multiline,
  children,
}: {
  id: string
  label: string
  multiline?: boolean
  children: React.ReactNode
}) {
  return (
    <div
      className={`rounded-2xl border border-[var(--ios-separator)] bg-white dark:bg-white/[0.04] px-4 ${
        multiline ? "py-3" : "py-2.5"
      } focus-within:border-[#0a84ff] transition`}
    >
      <label htmlFor={id} className="block text-[11px] uppercase tracking-wider text-[var(--ios-text-muted)] mb-1">
        {label}
      </label>
      {children}
    </div>
  )
}
