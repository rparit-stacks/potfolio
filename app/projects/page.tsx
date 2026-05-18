"use client"

import { useState, useMemo } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import Footer from "@/components/footer"
import { projectsData, getPrimarySkills, type Project } from "@/lib/projects-data"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import {
  Search,
  X,
  Github,
  ExternalLink,
  ArrowLeft,
  Code,
  Database,
  Shield,
  Layers,
  KeyRound,
  Package,
} from "lucide-react"

export default function ProjectsPage() {
  const [selected, setSelected] = useState<number | null>(null)
  const [activeSkill, setActiveSkill] = useState<string>("All")
  const [q, setQ] = useState("")

  const primarySkills = getPrimarySkills()

  const filtered = useMemo(() => {
    let list: Project[] = projectsData
    if (activeSkill !== "All") list = list.filter((p) => p.primarySkill === activeSkill)
    if (q.trim()) {
      const needle = q.toLowerCase()
      list = list.filter(
        (p) =>
          p.title.toLowerCase().includes(needle) ||
          p.description.toLowerCase().includes(needle) ||
          p.skills.some((s) => s.toLowerCase().includes(needle)) ||
          p.primarySkill.toLowerCase().includes(needle)
      )
    }
    return list
  }, [activeSkill, q])

  return (
    <main className="min-h-screen bg-[var(--ios-bg)]">
      {/* Header / filters */}
      <section className="pt-32 pb-10 bg-white dark:bg-[#0d0d0f] border-b border-[var(--ios-separator)]">
        <div className="container mx-auto px-4 md:px-6">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-sm text-[var(--ios-text-muted)] hover:text-[#0a84ff] transition mb-6"
          >
            <ArrowLeft className="h-4 w-4" /> Back home
          </Link>

          <div className="max-w-3xl">
            <p className="ios-section-eyebrow">All projects</p>
            <h1 className="ios-section-title mt-2">Everything I’ve shipped.</h1>
            <p className="mt-3 text-[16.5px] text-[var(--ios-text-muted)] leading-relaxed">
              Search by title, description, skill or filter by primary tech.
            </p>
          </div>

          <div className="mt-7 max-w-2xl">
            <div className="flex items-center gap-2 rounded-2xl border border-[var(--ios-separator)] bg-white dark:bg-white/[0.04] px-4 py-3 focus-within:border-[#0a84ff] transition">
              <Search className="h-4 w-4 text-[var(--ios-text-muted)]" />
              <input
                type="text"
                placeholder="Search projects…"
                value={q}
                onChange={(e) => setQ(e.target.value)}
                className="flex-1 bg-transparent outline-none text-[15px] placeholder:text-[var(--ios-text-muted)]"
              />
              {q && (
                <button
                  onClick={() => setQ("")}
                  className="text-[var(--ios-text-muted)] hover:text-[var(--ios-text)]"
                  aria-label="Clear search"
                >
                  <X className="h-4 w-4" />
                </button>
              )}
            </div>
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            <SkillBtn label="All" active={activeSkill === "All"} onClick={() => setActiveSkill("All")} />
            {primarySkills.map((s) => (
              <SkillBtn
                key={s}
                label={s}
                active={activeSkill === s}
                onClick={() => setActiveSkill(s)}
              />
            ))}
          </div>

          <div className="mt-5 text-sm text-[var(--ios-text-muted)]">
            Showing <span className="font-semibold text-[#0a84ff]">{filtered.length}</span>{" "}
            project{filtered.length !== 1 ? "s" : ""}
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          {filtered.length === 0 ? (
            <div className="text-center py-20 max-w-md mx-auto">
              <div className="ios-card p-8">
                <p className="text-[15px] text-[var(--ios-text)]">No projects match your filters.</p>
                <button
                  onClick={() => {
                    setActiveSkill("All")
                    setQ("")
                  }}
                  className="ios-button-secondary text-sm py-2 mt-4"
                >
                  Clear filters
                </button>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
              {filtered.map((project, i) => (
                <motion.article
                  key={project.id}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.04 }}
                  className="ios-card overflow-hidden group flex flex-col"
                >
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-[var(--ios-bg)]">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="ios-chip backdrop-blur-md bg-white/70 dark:bg-black/40">
                        {project.primarySkill}
                      </span>
                    </div>
                  </div>
                  <div className="p-5 flex-1 flex flex-col">
                    <h3 className="text-lg font-semibold tracking-tight">{project.title}</h3>
                    <p className="mt-2 text-sm text-[var(--ios-text-muted)] leading-relaxed line-clamp-3">
                      {project.description}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {project.techStack.slice(0, 4).map((t) => (
                        <span
                          key={t}
                          className="text-[11px] font-medium px-2 py-1 rounded-md bg-[var(--ios-bg)] dark:bg-white/[0.06] text-[var(--ios-text-muted)] border border-[var(--ios-separator)]"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                    <div className="mt-5 flex items-center gap-2">
                      <button
                        onClick={() => setSelected(i)}
                        className="flex-1 ios-button-primary text-sm py-2"
                      >
                        Details
                      </button>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex h-9 w-9 items-center justify-center rounded-full ios-glass hover:text-[#0a84ff] transition"
                        aria-label="GitHub"
                      >
                        <Github className="h-4 w-4" />
                      </a>
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex h-9 w-9 items-center justify-center rounded-full ios-glass hover:text-[#0a84ff] transition"
                          aria-label="Open demo"
                        >
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      )}
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          )}
        </div>
      </section>

      {selected !== null && filtered[selected] && (
        <Dialog open={selected !== null} onOpenChange={() => setSelected(null)}>
          <DialogContent className="max-w-3xl max-h-[88vh] overflow-y-auto bg-white dark:bg-[#1c1c1e] border border-[var(--ios-separator)] rounded-3xl p-0">
            <div>
              <div className="relative aspect-[16/8] w-full overflow-hidden bg-[var(--ios-bg)]">
                <img src={filtered[selected].image} alt={filtered[selected].title} className="w-full h-full object-cover" />
                <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/70 to-transparent text-white">
                  <span className="ios-chip backdrop-blur bg-white/15 text-white border-white/20">
                    {filtered[selected].primarySkill}
                  </span>
                  <h3 className="mt-3 text-2xl md:text-3xl font-semibold tracking-tight">
                    {filtered[selected].title}
                  </h3>
                </div>
              </div>

              <div className="p-6 md:p-8 space-y-7">
                <DialogHeader className="space-y-2">
                  <DialogTitle className="sr-only">{filtered[selected].title}</DialogTitle>
                  <DialogDescription className="text-[15px] leading-relaxed text-[var(--ios-text)]">
                    {filtered[selected].detailedDescription}
                  </DialogDescription>
                </DialogHeader>

                <Sec icon={Code} title="Technologies">
                  <div className="flex flex-wrap gap-1.5">
                    {filtered[selected].technologies.map((t) => (
                      <span key={t} className="ios-chip">
                        {t}
                      </span>
                    ))}
                  </div>
                </Sec>

                <Sec icon={Layers} title="Key features">
                  <ul className="space-y-2">
                    {filtered[selected].keyFeatures.map((f, i) => (
                      <li key={i} className="flex gap-3 text-[15px] text-[var(--ios-text-muted)]">
                        <span className="text-[#0a84ff] mt-1">›</span>
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </Sec>

                <Sec icon={Database} title="Features">
                  <ul className="space-y-2">
                    {filtered[selected].features.map((f, i) => (
                      <li key={i} className="flex gap-3 text-[15px] text-[var(--ios-text-muted)]">
                        <span className="text-emerald-500 mt-1">✓</span>
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </Sec>

                {filtered[selected].entities && filtered[selected].entities!.length > 0 && (
                  <Sec icon={Shield} title="Core entities">
                    <div className="flex flex-wrap gap-1.5">
                      {filtered[selected].entities!.map((e) => (
                        <span
                          key={e}
                          className="text-[12px] font-medium px-2.5 py-1 rounded-md bg-[var(--ios-bg)] dark:bg-white/[0.06] border border-[var(--ios-separator)]"
                        >
                          {e}
                        </span>
                      ))}
                    </div>
                  </Sec>
                )}

                {filtered[selected].apiEndpoints && filtered[selected].apiEndpoints!.length > 0 && (
                  <Sec icon={Code} title="API endpoints">
                    <ul className="space-y-1.5">
                      {filtered[selected].apiEndpoints!.map((e, i) => (
                        <li
                          key={i}
                          className="font-mono text-[12.5px] bg-[var(--ios-bg)] dark:bg-white/[0.05] border border-[var(--ios-separator)] rounded-lg px-3 py-2"
                        >
                          {e}
                        </li>
                      ))}
                    </ul>
                  </Sec>
                )}

                {filtered[selected].adminCredentials && (
                  <Sec icon={KeyRound} title="Admin credentials">
                    <div className="rounded-2xl border border-[var(--ios-separator)] bg-[var(--ios-bg)] dark:bg-white/[0.04] p-4 space-y-1.5 text-sm">
                      <div><span className="text-[var(--ios-text-muted)]">Email:</span> {filtered[selected].adminCredentials!.email}</div>
                      <div><span className="text-[var(--ios-text-muted)]">Password:</span> {filtered[selected].adminCredentials!.password}</div>
                      {filtered[selected].adminCredentials!.note && (
                        <div className="text-[12.5px] text-[var(--ios-text-muted)] pt-1">
                          {filtered[selected].adminCredentials!.note}
                        </div>
                      )}
                      <a
                        href={filtered[selected].adminCredentials!.loginUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ios-button-primary text-sm py-2 inline-flex items-center gap-2 mt-3"
                      >
                        <KeyRound className="h-3.5 w-3.5" /> Open admin
                      </a>
                    </div>
                  </Sec>
                )}

                <DialogFooter className="!justify-between flex-wrap gap-2 pt-2">
                  {filtered[selected].docker && (
                    <a
                      href={filtered[selected].docker!}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ios-button-secondary text-sm py-2 inline-flex items-center gap-2"
                    >
                      <Package className="h-3.5 w-3.5" /> Docker
                    </a>
                  )}
                  <a
                    href={filtered[selected].github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ios-button-primary text-sm py-2 inline-flex items-center gap-2 ml-auto"
                  >
                    <Github className="h-3.5 w-3.5" /> View on GitHub
                  </a>
                </DialogFooter>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}

      <Footer />
    </main>
  )
}

function SkillBtn({
  label,
  active,
  onClick,
}: {
  label: string
  active: boolean
  onClick: () => void
}) {
  return (
    <button
      onClick={onClick}
      className={`inline-flex items-center rounded-full px-3.5 py-1.5 text-sm font-medium transition border ${
        active
          ? "bg-[#0a84ff] text-white border-transparent shadow-[0_6px_18px_-8px_rgba(10,132,255,0.6)]"
          : "ios-glass text-[var(--ios-text)] border-transparent hover:bg-black/[0.04] dark:hover:bg-white/[0.06]"
      }`}
    >
      {label}
    </button>
  )
}

function Sec({
  icon: Icon,
  title,
  children,
}: {
  icon: React.ComponentType<{ className?: string }>
  title: string
  children: React.ReactNode
}) {
  return (
    <section>
      <h4 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-[var(--ios-text-muted)] mb-3">
        <Icon className="h-4 w-4 text-[#0a84ff]" />
        {title}
      </h4>
      {children}
    </section>
  )
}
