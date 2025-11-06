"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Database, Lock, Server, Settings, Workflow } from "lucide-react"

export default function Services() {
  const services = [
    {
      title: "Spring Boot REST API Development",
      description:
        "Custom API development with Spring Boot and Spring Data JPA, following best practices for security, performance, and maintainability.",
      icon: <Server className="h-10 w-10 text-jungle-500" />,
    },
    {
      title: "JWT Authentication & Security",
      description: "Implement secure authentication systems using JWT for authentication and authorization in Java applications.",
      icon: <Lock className="h-10 w-10 text-jungle-500" />,
    },
    {
      title: "Microservices Architecture",
      description:
        "Design and develop microservices architecture to enhance scalability and maintainability of enterprise applications.",
      icon: <Workflow className="h-10 w-10 text-jungle-500" />,
    },
    {
      title: "CI/CD Pipelines & DevOps",
      description:
        "Set up continuous integration and deployment pipelines for efficient deployment and DevOps practices.",
      icon: <Workflow className="h-10 w-10 text-jungle-500" />,
    },
    {
      title: "Docker & Containerization",
      description: "Containerize Java applications with Docker for easy deployment and scalability.",
      icon: <Server className="h-10 w-10 text-jungle-500" />,
    },
    {
      title: "Database Integration & Optimization",
      description:
        "Integrate and optimize database operations using Spring Data JPA and efficient query design.",
      icon: <Database className="h-10 w-10 text-jungle-500" />,
    },
  ]

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="what-i-can-do" className="py-20 bg-white dark:bg-jungle-950 relative overflow-hidden">
      {/* Jungle vines decoration */}
      <div className="absolute -left-4 top-0 w-24 h-full opacity-10 pointer-events-none">
        <motion.div
          className="absolute top-0 left-0 w-full h-full"
          style={{
            backgroundImage:
              'url(\'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 600"><path d="M30,0 Q60,100 20,200 Q-20,300 30,400 Q80,500 30,600" stroke="%239ab354" fill="none" strokeWidth="5" /></svg>\')',
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
          }}
        />
      </div>

      <div className="absolute -right-4 top-0 w-24 h-full opacity-10 pointer-events-none">
        <motion.div
          className="absolute top-0 right-0 w-full h-full"
          style={{
            backgroundImage:
              'url(\'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 600"><path d="M70,0 Q40,100 80,200 Q120,300 70,400 Q20,500 70,600" stroke="%239ab354" fill="none" strokeWidth="5" /></svg>\')',
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
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
            What I Can Do
            <img src="/icons8-spring-boot.svg" alt="Spring Boot" className="h-8 w-8" />
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Here's what I can help you build with Java and Spring Boot - robust and scalable backend systems.
          </p>
          <div className="h-1 w-20 bg-jungle-500 mx-auto mt-4"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border-slate-200 dark:border-jungle-800 hover:shadow-md transition-shadow duration-300 dark:bg-jungle-900/30">
                <CardHeader className="flex flex-row items-center gap-4">
                  <div className="rounded-full p-2 bg-jungle-100 dark:bg-jungle-800">{service.icon}</div>
                  <CardTitle className="text-xl text-slate-800 dark:text-white">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-slate-600 dark:text-slate-300 text-base">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button size="lg" onClick={scrollToContact} className="bg-jungle-600 hover:bg-jungle-700 text-white">
            Let's Work Together
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
