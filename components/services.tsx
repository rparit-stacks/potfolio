"use client"

import { motion } from "framer-motion"
import {
  Database,
  Lock,
  Server,
  Settings,
  Workflow,
  Cloud,
  TestTube,
  FileCode,
  Brain,
  Mail,
  GitBranch,
  Layers,
  Shield,
  Box,
  Zap,
  Globe,
  Terminal,
} from "lucide-react"

const services = [
  { title: "REST API Development", description: "Custom Spring Boot + Spring Data APIs with proper DTOs, validation, security, and performance.", icon: Server },
  { title: "JWT & Spring Security", description: "Secure auth with JWT, refresh tokens, RBAC, and session management for enterprise apps.", icon: Lock },
  { title: "Microservices Architecture", description: "Designing service boundaries, inter-service communication, and resilient distributed patterns.", icon: Workflow },
  { title: "Role-Based Access Control", description: "End-to-end RBAC with Spring Security including hierarchical roles and resource ownership.", icon: Shield },
  { title: "Database Design", description: "MongoDB, MySQL, PostgreSQL — schemas, indexing, query optimization, and migrations.", icon: Database },
  { title: "Docker & Deploy", description: "Containerise apps, push to registries, and ship to Vercel / EC2 with sensible defaults.", icon: Box },
  { title: "CI/CD Pipelines", description: "Automated builds, tests, and deploys via GitHub Actions and managed runners.", icon: Zap },
  { title: "OpenAPI / Swagger", description: "Self-documenting APIs, contracts, and Postman collections that stay in sync.", icon: FileCode },
  { title: "Testing & QA", description: "JUnit, Mockito, TDD where it matters — integration tests over flaky unit tests.", icon: TestTube },
  { title: "AWS Cloud", description: "EC2, S3, SQS, DynamoDB — cloud-native backends with observability.", icon: Cloud },
  { title: "Layered Architecture", description: "Controller / Service / Repository, separation of concerns, and SOLID by default.", icon: Layers },
  { title: "Exception Handling", description: "Global handlers, consistent error envelopes, and graceful failure modes.", icon: Settings },
  { title: "Email & OTP", description: "Spring Mail, OTP flows, transactional templates, retry & idempotency.", icon: Mail },
  { title: "Kafka / Event-Driven", description: "Producers, consumers, dead-letter topics, and event-driven microservices.", icon: Workflow },
  { title: "AI & LLM Integration", description: "RAG with LangChain, Qdrant, embeddings, hybrid search, and streaming responses.", icon: Brain },
  { title: "Version Control", description: "Git workflows, conventional commits, code review, and clean history.", icon: GitBranch },
  { title: "Performance Tuning", description: "Query plans, caching, JVM tuning, and end-to-end latency reduction.", icon: Zap },
  { title: "WebSocket / Realtime", description: "Real-time channels for chat, live order tracking, and dashboards.", icon: Globe },
  { title: "Build Tooling", description: "Maven & Gradle multi-module builds with sensible profiles and reproducible artifacts.", icon: Terminal },
]

export default function Services() {
  const scrollToContact = () =>
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })

  return (
    <section id="what-i-can-do" className="py-24 bg-[var(--ios-bg)] relative">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <p className="ios-section-eyebrow">Services</p>
          <h2 className="ios-section-title mt-2">What I can build for you.</h2>
          <p className="mt-4 text-[17px] text-[var(--ios-text-muted)] leading-relaxed">
            Pick anything below — happy to scope it with you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-5">
          {services.map((s, i) => {
            const Icon = s.icon
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.03 }}
              >
                <div className="ios-card h-full p-5">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-[#0a84ff]/10 text-[#0a84ff] mb-4">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-semibold tracking-tight text-[15.5px] mb-1.5">{s.title}</h3>
                  <p className="text-[13.5px] text-[var(--ios-text-muted)] leading-relaxed">
                    {s.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center mt-12"
        >
          <button onClick={scrollToContact} className="ios-button-primary">
            Let’s work together
          </button>
        </motion.div>
      </div>
    </section>
  )
}
