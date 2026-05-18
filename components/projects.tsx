"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import {
  ExternalLink,
  Github,
  Code,
  Database,
  Shield,
  Layers,
  ArrowRight,
  Package,
  KeyRound,
} from "lucide-react"
import { projectsData, type Project } from "@/lib/projects-data"

export default function Projects({ showAll = false }: { showAll?: boolean }) {
  const [selected, setSelected] = useState<number | null>(null)
  const displayed = showAll ? projectsData : projectsData.slice(0, 3)

  return (
    <section id="projects" className="py-24 bg-white dark:bg-[#0d0d0f] relative">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <p className="ios-section-eyebrow">Work</p>
          <h2 className="ios-section-title mt-2">Recent projects.</h2>
          <p className="mt-4 text-[17px] text-[var(--ios-text-muted)] leading-relaxed">
            Hyperlocal commerce, AI copilots, fintech and full-stack products
            shipped end-to-end.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {displayed.map((project, index) => (
            <motion.article
              key={project.id}
              data-project-id={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
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
                <h3 className="text-lg font-semibold tracking-tight text-[var(--ios-text)]">
                  {project.title}
                </h3>
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
                    onClick={() => setSelected(index)}
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

        {!showAll && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center mt-12"
          >
            <Link href="/projects" className="ios-button-primary inline-flex items-center gap-2">
              View all projects <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        )}
      </div>

      {/* Details dialog */}
      {selected !== null && (
        <Dialog open={selected !== null} onOpenChange={() => setSelected(null)}>
          <DialogContent className="max-w-3xl max-h-[88vh] overflow-y-auto bg-white dark:bg-[#1c1c1e] border border-[var(--ios-separator)] rounded-3xl p-0">
            <ProjectDialogBody project={displayed[selected]} />
          </DialogContent>
        </Dialog>
      )}
    </section>
  )
}

function ProjectDialogBody({ project }: { project: Project }) {
  return (
    <div>
      <div className="relative aspect-[16/8] w-full overflow-hidden bg-[var(--ios-bg)]">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/70 to-transparent text-white">
          <span className="ios-chip backdrop-blur bg-white/15 text-white border-white/20">
            {project.primarySkill}
          </span>
          <h3 className="mt-3 text-2xl md:text-3xl font-semibold tracking-tight">
            {project.title}
          </h3>
        </div>
      </div>

      <div className="p-6 md:p-8 space-y-7">
        <DialogHeader className="space-y-2">
          <DialogTitle className="sr-only">{project.title}</DialogTitle>
          <DialogDescription className="text-[15px] leading-relaxed text-[var(--ios-text)]">
            {project.detailedDescription}
          </DialogDescription>
        </DialogHeader>

        <Section icon={Code} title="Technologies">
          <div className="flex flex-wrap gap-1.5">
            {project.technologies.map((t) => (
              <span key={t} className="ios-chip">
                {t}
              </span>
            ))}
          </div>
        </Section>

        <Section icon={Layers} title="Key features">
          <ul className="space-y-2">
            {project.keyFeatures.map((f, i) => (
              <li key={i} className="flex gap-3 text-[15px] text-[var(--ios-text-muted)]">
                <span className="text-[#0a84ff] mt-1">›</span>
                <span>{f}</span>
              </li>
            ))}
          </ul>
        </Section>

        <Section icon={Database} title="Features">
          <ul className="space-y-2">
            {project.features.map((f, i) => (
              <li key={i} className="flex gap-3 text-[15px] text-[var(--ios-text-muted)]">
                <span className="text-emerald-500 mt-1">✓</span>
                <span>{f}</span>
              </li>
            ))}
          </ul>
        </Section>

        {project.entities && project.entities.length > 0 && (
          <Section icon={Shield} title="Core entities">
            <div className="flex flex-wrap gap-1.5">
              {project.entities.map((e) => (
                <span
                  key={e}
                  className="text-[12px] font-medium px-2.5 py-1 rounded-md bg-[var(--ios-bg)] dark:bg-white/[0.06] border border-[var(--ios-separator)] text-[var(--ios-text)]"
                >
                  {e}
                </span>
              ))}
            </div>
          </Section>
        )}

        {project.apiEndpoints && project.apiEndpoints.length > 0 && (
          <Section icon={Code} title="API endpoints">
            <ul className="space-y-1.5">
              {project.apiEndpoints.map((e, i) => (
                <li
                  key={i}
                  className="font-mono text-[12.5px] bg-[var(--ios-bg)] dark:bg-white/[0.05] border border-[var(--ios-separator)] rounded-lg px-3 py-2 text-[var(--ios-text)]"
                >
                  {e}
                </li>
              ))}
            </ul>
          </Section>
        )}

        {(project.demo || project.blog || project.extraLinks?.length) && (
          <Section icon={ExternalLink} title="Links">
            <div className="flex flex-wrap gap-2">
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ios-button-secondary text-sm py-2 inline-flex items-center gap-2"
                >
                  <ExternalLink className="h-3.5 w-3.5" /> Live app
                </a>
              )}
              {project.blog && (
                <a
                  href={project.blog}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ios-button-secondary text-sm py-2 inline-flex items-center gap-2"
                >
                  <ExternalLink className="h-3.5 w-3.5" /> Admin panel
                </a>
              )}
              {project.extraLinks?.map((l) => (
                <a
                  key={l.url}
                  href={l.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ios-button-secondary text-sm py-2 inline-flex items-center gap-2"
                >
                  <ExternalLink className="h-3.5 w-3.5" /> {l.label}
                </a>
              ))}
            </div>
          </Section>
        )}

        {project.adminCredentials && (
          <Section icon={KeyRound} title="Admin credentials">
            <div className="rounded-2xl border border-[var(--ios-separator)] bg-[var(--ios-bg)] dark:bg-white/[0.04] p-4 space-y-1.5 text-sm">
              <div><span className="text-[var(--ios-text-muted)]">Email:</span> {project.adminCredentials.email}</div>
              <div><span className="text-[var(--ios-text-muted)]">Password:</span> {project.adminCredentials.password}</div>
              {project.adminCredentials.note && (
                <div className="text-[12.5px] text-[var(--ios-text-muted)] pt-1">
                  {project.adminCredentials.note}
                </div>
              )}
              <a
                href={project.adminCredentials.loginUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="ios-button-primary text-sm py-2 inline-flex items-center gap-2 mt-3"
              >
                <KeyRound className="h-3.5 w-3.5" /> Open admin
              </a>
            </div>
          </Section>
        )}

        <DialogFooter className="!justify-between flex-wrap gap-2 pt-2">
          {project.docker && (
            <a
              href={project.docker}
              target="_blank"
              rel="noopener noreferrer"
              className="ios-button-secondary text-sm py-2 inline-flex items-center gap-2"
            >
              <Package className="h-3.5 w-3.5" /> Docker
            </a>
          )}
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="ios-button-primary text-sm py-2 inline-flex items-center gap-2 ml-auto"
          >
            <Github className="h-3.5 w-3.5" /> View on GitHub
          </a>
        </DialogFooter>
      </div>
    </div>
  )
}

function Section({
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
