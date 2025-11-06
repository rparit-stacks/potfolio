"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Code, Network, Layers, Shield, Workflow, Database } from "lucide-react"

export default function Skills() {
  const skills = [
    {
      name: "Java",
      icon: <Code className="h-8 w-8 text-orange-600 dark:text-orange-400" />,
      color: "bg-orange-100 dark:bg-orange-900",
      description: "Core programming language for backend development",
    },
    {
      name: "Spring Boot",
      icon: <img src="/icons8-spring-boot.svg" alt="Spring Boot" className="h-8 w-8" />,
      color: "bg-green-100 dark:bg-green-900",
      description: "Enterprise Java framework for building microservices",
    },
    {
      name: "REST API",
      icon: <Network className="h-8 w-8 text-blue-600 dark:text-blue-400" />,
      color: "bg-blue-100 dark:bg-blue-900",
      description: "Designing and developing RESTful web services",
    },
    {
      name: "Microservices",
      icon: <Layers className="h-8 w-8 text-purple-600 dark:text-purple-400" />,
      color: "bg-purple-100 dark:bg-purple-900",
      description: "Building scalable microservices architecture",
    },
    {
      name: "JWT",
      icon: <Shield className="h-8 w-8 text-red-600 dark:text-red-400" />,
      color: "bg-red-100 dark:bg-red-900",
      description: "JWT authentication and authorization",
    },
    {
      name: "Docker/CI/CD",
      icon: <Workflow className="h-8 w-8 text-cyan-600 dark:text-cyan-400" />,
      color: "bg-cyan-100 dark:bg-cyan-900",
      description: "Containerization and DevOps practices",
    },
    {
      name: "Spring Data JPA",
      icon: <Database className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />,
      color: "bg-indigo-100 dark:bg-indigo-900",
      description: "Database operations and ORM",
    },
    {
      name: "Spring Security",
      icon: <Shield className="h-8 w-8 text-emerald-600 dark:text-emerald-400" />,
      color: "bg-emerald-100 dark:bg-emerald-900",
      description: "Security and role-based access control",
    },
  ]

  return (
    <section id="skills" className="py-20 bg-white dark:bg-jungle-950 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div
          className="absolute inset-0 bg-contain"
          style={{
            backgroundImage: `url('/images/django-jungle.png')`,
            backgroundPosition: "center",
            backgroundSize: "80%",
            backgroundRepeat: "no-repeat",
            filter: "blur(2px)",
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white mb-4 flex items-center justify-center gap-2">
            <img src="/icons8-spring-boot.svg" alt="Spring Boot" className="h-8 w-8" />
            Skills & Technologies
            <img src="/icons8-spring-boot.svg" alt="Spring Boot" className="h-8 w-8" />
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Technologies and tools I use to build robust and scalable backend systems.
          </p>
          <div className="h-1 w-20 bg-jungle-500 mx-auto mt-4"></div>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className={`h-full border-none ${skill.color} hover:shadow-lg transition-shadow duration-300`}>
                <CardContent className="p-6 flex flex-col items-center justify-center text-center">
                  <div className="mb-4">{skill.icon}</div>
                  <h3 className="font-semibold text-lg text-slate-800 dark:text-white mb-2">{skill.name}</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300">{skill.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

