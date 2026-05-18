"use client"

import { useState, useRef, useEffect } from "react"
import { motion } from "framer-motion"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Award, FileText, ChevronRight, ChevronLeft, Download } from "lucide-react"

const certificates = [
  { name: "Coursera Certificate · DIJ1GMKTN3O6", file: "/cert/Coursera DIJ1GMKTN3O6.pdf" },
  { name: "Coursera Certificate · IQRIHHA10NL7", file: "/cert/Coursera IQRIHHA10NL7.pdf" },
  { name: "Coursera Certificate · PQ56JF3RQY62", file: "/cert/Coursera PQ56JF3RQY62.pdf" },
  { name: "Coursera Certificate · VYRCXILD1YNS", file: "/cert/Coursera VYRCXILD1YNS.pdf" },
  { name: "Programming in C and C++ with AI Training", file: "/cert/Programming in C and C++ with AI Training - Certificate of Completion.pdf" },
  { name: "Data Structures & Algorithms Training", file: "/cert/Data Structures & Algorithms Training - Certificate of Completion.pdf" },
  { name: "DSA Training (Cohort 2)", file: "/cert/Data Structures & Algorithms Training - Certificate of Completion (1).pdf" },
  { name: "Certificate · 484d181341f607a8b4b735c72d433381", file: "/cert/484d181341f607a8b4b735c72d433381.pdf" },
  { name: "Certificate · 98e33324-423c-4a0d-97fc-a22adcad2940", file: "/cert/98e33324-423c-4a0d-97fc-a22adcad2940.pdf" },
  { name: "Certificate · efc38bbc-cc16-4753-b547-552ba9fe0420", file: "/cert/efc38bbc-cc16-4753-b547-552ba9fe0420.pdf" },
  { name: "CAN Certificate · 32394901", file: "/cert/CAN_32394901_4219480.pdf" },
  { name: "CAN Certificate · 32817742", file: "/cert/CAN_32817742_4262504.pdf" },
  { name: "CAN Certificate · 32817742 (Cohort 2)", file: "/cert/CAN_32817742_4262504 (1).pdf" },
]

export default function Certificates() {
  const [selected, setSelected] = useState<string | null>(null)
  const scrollRef = useRef<HTMLDivElement>(null)
  const [showLeft, setShowLeft] = useState(false)
  const [showRight, setShowRight] = useState(true)

  const checkScroll = () => {
    if (!scrollRef.current) return
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current
    setShowLeft(scrollLeft > 6)
    setShowRight(scrollLeft < scrollWidth - clientWidth - 6)
  }

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return
    checkScroll()
    el.addEventListener("scroll", checkScroll)
    window.addEventListener("resize", checkScroll)
    return () => {
      el.removeEventListener("scroll", checkScroll)
      window.removeEventListener("resize", checkScroll)
    }
  }, [])

  return (
    <section id="certificates" className="py-24 bg-white dark:bg-[#0d0d0f] relative">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-10"
        >
          <p className="ios-section-eyebrow flex items-center justify-center gap-2">
            <Award className="h-4 w-4" /> Certificates
          </p>
          <h2 className="ios-section-title mt-2">Things I learned along the way.</h2>
        </motion.div>

        <div className="relative max-w-7xl mx-auto">
          {showLeft && (
            <button
              onClick={() => scrollRef.current?.scrollBy({ left: -360, behavior: "smooth" })}
              className="hidden md:flex absolute -left-3 top-1/2 -translate-y-1/2 z-10 h-10 w-10 items-center justify-center rounded-full ios-glass shadow-md hover:text-[#0a84ff]"
              aria-label="Scroll left"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
          )}
          {showRight && (
            <button
              onClick={() => scrollRef.current?.scrollBy({ left: 360, behavior: "smooth" })}
              className="hidden md:flex absolute -right-3 top-1/2 -translate-y-1/2 z-10 h-10 w-10 items-center justify-center rounded-full ios-glass shadow-md hover:text-[#0a84ff]"
              aria-label="Scroll right"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          )}

          <div
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide scroll-smooth -mx-4 px-4"
            style={{ scrollbarWidth: "none" }}
          >
            {certificates.map((c, i) => (
              <motion.button
                key={c.file + i}
                onClick={() => setSelected(c.file)}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.04 }}
                whileHover={{ y: -4 }}
                className="shrink-0 w-64 text-left ios-card overflow-hidden"
              >
                <div className="relative h-40 bg-gradient-to-br from-[#0a84ff]/10 via-[#5e5ce6]/8 to-[#af52de]/10 flex items-center justify-center">
                  <FileText className="h-12 w-12 text-[#0a84ff] opacity-60" />
                  <span className="absolute top-3 right-3 h-8 w-8 inline-flex items-center justify-center rounded-full ios-glass">
                    <Award className="h-3.5 w-3.5 text-[#0a84ff]" />
                  </span>
                </div>
                <div className="p-4">
                  <div className="text-[13.5px] font-semibold tracking-tight line-clamp-2 leading-snug">
                    {c.name}
                  </div>
                  <div className="mt-2 text-[12px] text-[#0a84ff] font-medium inline-flex items-center gap-1">
                    View PDF <ChevronRight className="h-3 w-3" />
                  </div>
                </div>
              </motion.button>
            ))}
          </div>
        </div>

        <Dialog open={selected !== null} onOpenChange={(o) => !o && setSelected(null)}>
          <DialogContent className="max-w-[95vw] w-[95vw] h-[92vh] p-0 bg-white dark:bg-[#1c1c1e] border border-[var(--ios-separator)] rounded-3xl overflow-hidden flex flex-col">
            <DialogHeader className="px-6 py-4 border-b border-[var(--ios-separator)] flex flex-row items-center justify-between gap-3">
              <DialogTitle className="text-[15px] font-semibold tracking-tight truncate">
                {certificates.find((c) => c.file === selected)?.name || "Certificate"}
              </DialogTitle>
              {selected && (
                <a
                  href={selected}
                  download
                  className="ios-button-secondary text-xs py-1.5 inline-flex items-center gap-2"
                >
                  <Download className="h-3.5 w-3.5" /> Download
                </a>
              )}
            </DialogHeader>
            <div className="flex-1 p-3">
              {selected && (
                <iframe
                  src={`${selected}#toolbar=1&navpanes=1&scrollbar=1&zoom=page-fit`}
                  title="Certificate PDF"
                  className="w-full h-full rounded-2xl border border-[var(--ios-separator)]"
                />
              )}
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  )
}
