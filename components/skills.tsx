"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  Server,
  Database,
  Cloud,
  Smartphone,
  CreditCard,
  Shield,
  Network,
  TestTube,
  GitBranch,
  Layers,
  Box,
  Brain,
  Terminal,
  Code,
} from "lucide-react"
import { projectsData } from "@/lib/projects-data"
import { useToast } from "@/hooks/use-toast"

type Category = {
  title: string
  icon: React.ComponentType<{ className?: string }>
  skills: string[]
}

const categories: Category[] = [
  {
    title: "Backend",
    icon: Server,
    skills: [
      "Spring Boot",
      "Spring MVC",
      "Spring Data JPA",
      "Spring Data MongoDB",
      "REST APIs",
      "Microservices",
      "Spring Security",
      "JWT",
      "WebSocket",
      "Spring Mail",
    ],
  },
  {
    title: "Databases",
    icon: Database,
    skills: [
      "MySQL",
      "PostgreSQL",
      "MongoDB",
      "MongoDB Atlas",
      "DynamoDB",
      "Kafka",
      "Flyway",
      "JPA / Hibernate",
      "Query Optimization",
    ],
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    skills: [
      "Docker",
      "CI/CD",
      "AWS S3",
      "AWS EC2",
      "AWS SQS",
      "Linux",
      "Vercel",
      "SPA Deployment",
    ],
  },
  {
    title: "Frontend",
    icon: Smartphone,
    skills: [
      "React",
      "TypeScript",
      "Vite",
      "TanStack Query",
      "Tailwind CSS",
      "Next.js",
      "Responsive UI",
      "SPA Routing",
    ],
  },
  {
    title: "Payments & Integrations",
    icon: CreditCard,
    skills: [
      "Razorpay",
      "Firebase Cloud Messaging",
      "Cloudinary",
      "Google OAuth",
      "Email OTP",
      "Push Notifications",
    ],
  },
  {
    title: "Security",
    icon: Shield,
    skills: [
      "Spring Security",
      "JWT (Access + Refresh)",
      "RBAC",
      "Session Management",
      "Auth Flows",
    ],
  },
  {
    title: "API & Docs",
    icon: Network,
    skills: [
      "RESTful API Design",
      "Swagger / OpenAPI",
      "Postman",
      "DTO Patterns",
      "Pagination & Filtering",
    ],
  },
  {
    title: "Testing",
    icon: TestTube,
    skills: ["JUnit", "Mockito", "Unit Testing", "Integration Tests", "TDD"],
  },
  {
    title: "Tooling",
    icon: GitBranch,
    skills: ["Git", "GitHub", "Maven", "Gradle", "Code Review"],
  },
  {
    title: "Architecture",
    icon: Layers,
    skills: ["Layered Architecture", "SOA", "SOLID", "Design Patterns", "Clean Code"],
  },
  {
    title: "AI / LLM",
    icon: Brain,
    skills: [
      "LangChain",
      "LangGraph",
      "RAG",
      "Qdrant",
      "OpenAI API",
      "Anthropic Claude",
      "Embeddings",
      "Hybrid Search",
      "SSE Streaming",
      "Spring AI",
    ],
  },
  {
    title: "Languages",
    icon: Code,
    skills: ["Java", "JavaScript", "TypeScript", "C++"],
  },
]

export default function Skills() {
  const [active, setActive] = useState(0)
  const { toast } = useToast()

  const handleSkillClick = (skill: string) => {
    const norm = (s: string) => s.toLowerCase().replace(/[^a-z0-9]/g, "")
    const n = norm(skill)
    const matches = projectsData.filter(
      (p) =>
        p.skills.some((s) => norm(s) === n) ||
        p.techStack.some((t) => norm(t) === n) ||
        norm(p.primarySkill) === n ||
        p.technologies?.some((t) => norm(t) === n)
    )

    if (matches.length === 0) {
      toast({
        title: "Project coming soon",
        description:
          "This skill is in my stack — production project link will appear shortly.",
      })
      return
    }

    const section = document.getElementById("projects")
    section?.scrollIntoView({ behavior: "smooth" })
    setTimeout(() => {
      const el = document.querySelector(`[data-project-id="${matches[0].id}"]`)
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "center" })
        el.classList.add("ring-2", "ring-[#0a84ff]", "ring-offset-2")
        setTimeout(() => el.classList.remove("ring-2", "ring-[#0a84ff]", "ring-offset-2"), 1800)
      }
    }, 500)

    toast({
      title: `Found ${matches.length} project${matches.length > 1 ? "s" : ""}`,
      description: matches.map((p) => p.title).join(", "),
    })
  }

  const Active = categories[active]
  const ActiveIcon = Active.icon

  return (
    <section id="skills" className="py-24 bg-[var(--ios-bg)] relative">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <p className="ios-section-eyebrow">Skills</p>
          <h2 className="ios-section-title mt-2">Tools I work with daily.</h2>
          <p className="mt-4 text-[17px] text-[var(--ios-text-muted)] leading-relaxed">
            Tap a skill to jump to a project where I’ve shipped it.
          </p>
        </motion.div>

        {/* Category pills */}
        <div className="flex flex-wrap justify-center gap-2 mb-8 max-w-5xl mx-auto">
          {categories.map((c, i) => {
            const Icon = c.icon
            const isActive = i === active
            return (
              <button
                key={c.title}
                onClick={() => setActive(i)}
                className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-all border ${
                  isActive
                    ? "bg-[#0a84ff] text-white border-transparent shadow-[0_8px_22px_-10px_rgba(10,132,255,0.6)]"
                    : "ios-glass text-[var(--ios-text)] border-transparent hover:bg-black/[0.04] dark:hover:bg-white/[0.06]"
                }`}
              >
                <Icon className="h-4 w-4" />
                {c.title}
              </button>
            )
          })}
        </div>

        {/* Active group card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3 }}
            className="max-w-4xl mx-auto"
          >
            <div className="ios-card p-6 md:p-8">
              <div className="flex items-center gap-3 mb-5">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#0a84ff]/10 text-[#0a84ff]">
                  <ActiveIcon className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-[var(--ios-text-muted)]">
                    Category
                  </div>
                  <div className="text-lg font-semibold tracking-tight">{Active.title}</div>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {Active.skills.map((skill) => (
                  <button
                    key={skill}
                    onClick={() => handleSkillClick(skill)}
                    className="ios-chip hover:bg-[#0a84ff] hover:text-white hover:border-transparent transition-colors"
                  >
                    {skill}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
