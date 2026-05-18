"use client"

import { useEffect, useState, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Lightbulb, X, ChevronLeft, Send, CheckCircle2 } from "lucide-react"

const VISITED_KEY = "portfolio_has_visited_before"
const POPUP_DELAY_MS = 45_000 // 40–50 sec

type VisitorRole = "business" | "hr" | "other" | ""

export default function SuggestionPopup() {
  const [isReturning, setIsReturning] = useState(false)
  const [expanded, setExpanded] = useState(false)
  const [hasAutoShown, setHasAutoShown] = useState(false)

  const [role, setRole] = useState<VisitorRole>("")
  const [suggestion, setSuggestion] = useState("")
  const [email, setEmail] = useState("")
  const [sending, setSending] = useState(false)
  const [sent, setSent] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const visitedBefore = localStorage.getItem(VISITED_KEY) === "true"

    if (!visitedBefore) {
      localStorage.setItem(VISITED_KEY, "true")
      return
    }

    setIsReturning(true)

    const timer = window.setTimeout(() => {
      setExpanded(true)
      setHasAutoShown(true)
    }, POPUP_DELAY_MS)

    return () => window.clearTimeout(timer)
  }, [])

  const collapse = useCallback(() => setExpanded(false), [])
  const open = useCallback(() => setExpanded(true), [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!suggestion.trim()) {
      setError("Please share at least one suggestion.")
      return
    }

    setSending(true)
    setError(null)

    try {
      const roleLabel =
        role === "business"
          ? "Business owner / Founder"
          : role === "hr"
            ? "HR / Recruiter"
            : role === "other"
              ? "Other"
              : "Not specified"

      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "suggestion",
          formData: {
            suggestion: suggestion.trim(),
            role: roleLabel,
            email: email.trim() || "Anonymous",
          },
        }),
      })

      if (!res.ok) throw new Error("Failed to send")
      setSent(true)
      setSuggestion("")
      setTimeout(() => {
        setSent(false)
        collapse()
      }, 2500)
    } catch {
      setError("Could not send right now. Try the contact form instead.")
    } finally {
      setSending(false)
    }
  }

  if (!isReturning) return null

  return (
    <motion.div
      className="fixed right-0 bottom-6 md:bottom-10 z-[45] flex flex-col items-end pointer-events-none"
      initial={false}
    >
      {/* Re-open tab when collapsed */}
      <AnimatePresence>
        {!expanded && (
          <motion.button
            type="button"
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 24 }}
            transition={{ type: "spring", stiffness: 380, damping: 28 }}
            onClick={open}
            className="pointer-events-auto mr-0 flex items-center gap-2 rounded-l-2xl rounded-r-none ios-glass-strong shadow-lg border border-r-0 border-[var(--ios-separator)] pl-3 pr-2.5 py-3 hover:pr-3 transition-all group"
            aria-label="Open growth suggestion panel"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-[#0a84ff] to-[#5e5ce6] text-white shadow-md">
              <Lightbulb className="h-4 w-4" />
            </span>
            <span className="hidden sm:flex flex-col items-start text-left pr-1">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-[#0a84ff]">
                Suggest
              </span>
              <span className="text-[12px] text-[var(--ios-text-muted)] max-w-[88px] leading-tight">
                {hasAutoShown ? "Tap to open" : "Coming soon…"}
              </span>
            </span>
            <ChevronLeft className="h-4 w-4 text-[var(--ios-text-muted)] group-hover:text-[#0a84ff] sm:hidden" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Main panel */}
      <AnimatePresence>
        {expanded && (
          <motion.aside
            role="dialog"
            aria-labelledby="suggestion-popup-title"
            initial={{ opacity: 0, x: 120, scale: 0.96 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 120, scale: 0.96 }}
            transition={{ type: "spring", stiffness: 320, damping: 30 }}
            className="pointer-events-auto mr-3 md:mr-5 w-[min(100vw-1.5rem,22rem)] ios-glass-strong rounded-2xl shadow-2xl border border-[var(--ios-separator)] overflow-hidden"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.15 }}
            >
              {/* Header */}
              <motion.div
                className="relative px-4 pt-4 pb-3 bg-gradient-to-br from-[#0a84ff]/12 via-transparent to-[#af52de]/10"
                initial={{ y: -8, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1 }}
              >
                <button
                  type="button"
                  onClick={collapse}
                  className="absolute top-3 right-3 h-8 w-8 inline-flex items-center justify-center rounded-full hover:bg-black/[0.06] dark:hover:bg-white/[0.08] text-[var(--ios-text-muted)] transition"
                  aria-label="Minimize panel"
                >
                  <X className="h-4 w-4" />
                </button>
                <div className="flex items-center gap-2.5 pr-8">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#0a84ff] to-[#5e5ce6] text-white">
                    <Lightbulb className="h-5 w-5" />
                  </span>
                  <motion.div
                    initial={{ opacity: 0, x: 12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <p className="text-[11px] font-semibold uppercase tracking-wider text-[#0a84ff]">
                      Quick ask
                    </p>
                    <h2
                      id="suggestion-popup-title"
                      className="text-[15px] font-semibold tracking-tight leading-snug text-[var(--ios-text)]"
                    >
                      One thing to help me grow?
                    </h2>
                  </motion.div>
                </div>
              </motion.div>

              <motion.div
                className="px-4 pb-4"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25 }}
              >
                <p className="text-[13px] leading-relaxed text-[var(--ios-text-muted)]">
                  I don&apos;t know who you are yet — if you run a business, hire people, or
                  work in tech,{" "}
                  <span className="text-[var(--ios-text)] font-medium">
                    suggest one thing
                  </span>{" "}
                  that could help me improve or grow. It genuinely helps.
                </p>

                {sent ? (
                  <div className="mt-4 flex items-center gap-2 rounded-xl border border-emerald-200 bg-emerald-50 dark:bg-emerald-500/10 dark:border-emerald-500/20 p-3 text-sm text-emerald-700 dark:text-emerald-300">
                    <CheckCircle2 className="h-4 w-4 shrink-0" />
                    Thank you — means a lot!
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="mt-4 space-y-3">
                    {error && (
                      <p className="text-[12px] text-red-600 dark:text-red-400">{error}</p>
                    )}

                    <motion.div
                      className="flex flex-wrap gap-1.5"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.3 }}
                    >
                      {(
                        [
                          ["business", "Business"],
                          ["hr", "HR"],
                          ["other", "Other"],
                        ] as const
                      ).map(([value, label]) => (
                        <button
                          key={value}
                          type="button"
                          onClick={() => setRole(value)}
                          className={`text-[11px] font-medium px-2.5 py-1 rounded-full border transition ${
                            role === value
                              ? "bg-[#0a84ff] text-white border-transparent"
                              : "border-[var(--ios-separator)] text-[var(--ios-text-muted)] hover:border-[#0a84ff]/40"
                          }`}
                        >
                          {label}
                        </button>
                      ))}
                    </motion.div>

                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Email (optional)"
                      className="w-full rounded-xl border border-[var(--ios-separator)] bg-white/80 dark:bg-white/[0.04] px-3 py-2 text-[13px] outline-none focus:border-[#0a84ff] transition"
                    />

                    <textarea
                      value={suggestion}
                      onChange={(e) => setSuggestion(e.target.value)}
                      placeholder="Your one suggestion…"
                      rows={3}
                      required
                      className="w-full rounded-xl border border-[var(--ios-separator)] bg-white/80 dark:bg-white/[0.04] px-3 py-2 text-[13px] outline-none focus:border-[#0a84ff] transition resize-none"
                    />

                    <button
                      type="submit"
                      disabled={sending}
                      className="w-full ios-button-primary text-sm py-2.5 inline-flex items-center justify-center gap-2 disabled:opacity-60"
                    >
                      {sending ? "Sending…" : (
                        <>
                          Send suggestion <Send className="h-3.5 w-3.5" />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </motion.div>
            </motion.div>
          </motion.aside>
        )}
      </AnimatePresence>
    </motion.div>
  )
}
