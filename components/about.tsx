"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Code, Network, Layers, Shield, Workflow } from "lucide-react"

export default function About() {
  const skills = [
    { 
      name: "Java", 
      icon: <Code className="h-8 w-8 text-orange-600 dark:text-orange-400" />, 
      color: "bg-orange-100 dark:bg-orange-900" 
    },
    { 
      name: "Spring Boot", 
      icon: <img src="/icons8-spring-boot.svg" alt="Spring Boot" className="h-8 w-8" />, 
      color: "bg-green-100 dark:bg-green-900" 
    },
    { 
      name: "REST API", 
      icon: <Network className="h-8 w-8 text-blue-600 dark:text-blue-400" />, 
      color: "bg-blue-100 dark:bg-blue-900" 
    },
    { 
      name: "Microservices", 
      icon: <Layers className="h-8 w-8 text-purple-600 dark:text-purple-400" />, 
      color: "bg-purple-100 dark:bg-purple-900" 
    },
    { 
      name: "JWT", 
      icon: <Shield className="h-8 w-8 text-red-600 dark:text-red-400" />, 
      color: "bg-red-100 dark:bg-red-900" 
    },
    { 
      name: "Docker/CI/CD", 
      icon: <Workflow className="h-8 w-8 text-cyan-600 dark:text-cyan-400" />, 
      color: "bg-cyan-100 dark:bg-cyan-900" 
    },
  ]

  return (
    <section id="about" className="py-20 bg-white dark:bg-jungle-950 relative overflow-hidden">
      {/* Jungle background decoration */}
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
            About Me
            <img src="/icons8-spring-boot.svg" alt="Spring Boot" className="h-8 w-8" />
          </h2>
          <div className="h-1 w-20 bg-jungle-500 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="aspect-square max-w-md mx-auto bg-gradient-to-b from-jungle-800/50 to-jungle-950/50 rounded-lg overflow-hidden relative">
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                animate={{ rotate: [0, 5, 0, -5, 0] }}
                transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              >
                <img
                  src="images/kihuni.png"
                  alt="Rohit Parit - Java Developer"
                  className="w-full h-full object-contain p-4 rounded-full"
                />
              </motion.div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-jungle-900/90 to-transparent p-6">
                <h3 className="text-white text-xl font-bold">Rohit Parit</h3>
                <p className="text-jungle-200">Java Developer</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-lg text-slate-700 dark:text-slate-300">
              I'm Rohit Parit — a Java Developer currently working at Amdox Technologies, with experience building 
              full-stack Java applications, REST APIs, and microservices architecture.
            </p>
            <p className="text-lg text-slate-700 dark:text-slate-300">
              I specialize in Spring Boot, Spring Data JPA, JWT authentication, microservices architecture, 
              CI/CD pipelines, and DevOps practices. I've worked on projects like Eventura, Gold Loan Management System, and FormFree.
            </p>
            <p className="text-lg text-slate-700 dark:text-slate-300">
              Currently pursuing Master of Computer Application at Manipal University Jaipur. I've solved 160+ questions on LeetCode 
              and continuously improving my skills in Java full-stack development.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4">
              {skills.map((skill, index) => (
                <Card key={index} className={`border-none ${skill.color}`}>
                  <CardContent className="p-4 flex flex-col items-center justify-center text-center">
                    <div className="mb-2">{skill.icon}</div>
                    <span className="font-medium text-slate-800 dark:text-white">{skill.name}</span>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
