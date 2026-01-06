"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { 
  Database, 
  Lock, 
  Server, 
  Settings, 
  Workflow, 
  Cloud, 
  Code, 
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
  BarChart,
  Terminal
} from "lucide-react"

export default function Services() {
  const services = [
    {
      title: "Spring Boot REST API Development",
      description:
        "Custom API development with Spring Boot and Spring Data JPA, following best practices for security, performance, and maintainability. Build scalable RESTful services with proper DTOs and request/response handling.",
      icon: <Server className="h-10 w-10 text-jungle-500" />,
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "JWT Authentication & Security",
      description: "Implement secure authentication systems using JWT tokens, Spring Security, and role-based access control (RBAC) for enterprise-level security in Java applications.",
      icon: <Lock className="h-10 w-10 text-jungle-500" />,
      color: "from-red-500 to-pink-500",
    },
    {
      title: "Microservices Architecture",
      description:
        "Design and develop microservices architecture to enhance scalability and maintainability. Implement service-to-service communication and distributed system patterns.",
      icon: <Workflow className="h-10 w-10 text-jungle-500" />,
      color: "from-purple-500 to-indigo-500",
    },
    {
      title: "Spring Security & RBAC",
      description: "Implement comprehensive security solutions with Spring Security, including role-based access control, session management, and secure authentication flows.",
      icon: <Shield className="h-10 w-10 text-jungle-500" />,
      color: "from-orange-500 to-red-500",
    },
    {
      title: "Database Design & Integration",
      description:
        "Design and integrate databases (MySQL, PostgreSQL, DynamoDB) using Spring Data JPA, Hibernate ORM, and Flyway migrations. Optimize queries for performance.",
      icon: <Database className="h-10 w-10 text-jungle-500" />,
      color: "from-green-500 to-emerald-500",
    },
    {
      title: "Docker & Containerization",
      description: "Containerize Java applications with Docker for easy deployment and scalability. Create Docker images and manage containerized microservices.",
      icon: <Box className="h-10 w-10 text-jungle-500" />,
      color: "from-blue-500 to-teal-500",
    },
    {
      title: "CI/CD Pipelines & DevOps",
      description:
        "Set up continuous integration and deployment pipelines for efficient deployment and DevOps practices. Automate testing, building, and deployment processes.",
      icon: <Zap className="h-10 w-10 text-jungle-500" />,
      color: "from-yellow-500 to-amber-500",
    },
    {
      title: "API Documentation (Swagger/OpenAPI)",
      description: "Create comprehensive API documentation using Swagger/OpenAPI. Generate interactive API docs for better developer experience and API testing.",
      icon: <FileCode className="h-10 w-10 text-jungle-500" />,
      color: "from-teal-500 to-cyan-500",
    },
    {
      title: "Testing & Quality Assurance",
      description: "Write comprehensive unit and integration tests using JUnit and Mockito. Implement Test-Driven Development (TDD) practices for robust applications.",
      icon: <TestTube className="h-10 w-10 text-jungle-500" />,
      color: "from-pink-500 to-rose-500",
    },
    {
      title: "AWS Cloud Services",
      description: "Deploy and manage applications on AWS including EC2, S3, SQS, and DynamoDB. Implement cloud-native solutions for scalable backend systems.",
      icon: <Cloud className="h-10 w-10 text-jungle-500" />,
      color: "from-indigo-500 to-purple-500",
    },
    {
      title: "Layered Architecture Design",
      description: "Design clean, maintainable layered architectures (Controller, Service, Repository) with proper separation of concerns and SOLID principles.",
      icon: <Layers className="h-10 w-10 text-jungle-500" />,
      color: "from-slate-500 to-gray-500",
    },
    {
      title: "Exception Handling & Error Management",
      description: "Implement global exception handling, custom error responses, and proper error management strategies for robust application behavior.",
      icon: <Settings className="h-10 w-10 text-jungle-500" />,
      color: "from-amber-500 to-orange-500",
    },
    {
      title: "Email Service Integration",
      description: "Integrate email services using Spring Mail for automated notifications, OTP verification, and transactional emails in applications.",
      icon: <Mail className="h-10 w-10 text-jungle-500" />,
      color: "from-blue-500 to-indigo-500",
    },
    {
      title: "Message Queue Integration (Kafka)",
      description: "Implement event-driven architectures using Apache Kafka for asynchronous messaging, event streaming, and microservices communication.",
      icon: <Workflow className="h-10 w-10 text-jungle-500" />,
      color: "from-green-500 to-teal-500",
    },
    {
      title: "AI & LLM Integration",
      description: "Integrate AI capabilities using Spring AI, RAG (Retrieval-Augmented Generation), vector databases, and embeddings for intelligent applications.",
      icon: <Brain className="h-10 w-10 text-jungle-500" />,
      color: "from-violet-500 to-purple-500",
    },
    {
      title: "Version Control & Collaboration",
      description: "Manage code repositories with Git and GitHub. Implement best practices for branching, code reviews, and collaborative development workflows.",
      icon: <GitBranch className="h-10 w-10 text-jungle-500" />,
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "Performance Optimization",
      description: "Optimize application performance through query optimization, caching strategies, transaction management, and efficient resource utilization.",
      icon: <Zap className="h-10 w-10 text-jungle-500" />,
      color: "from-yellow-500 to-orange-500",
    },
    {
      title: "WebSocket & Real-time Communication",
      description: "Implement real-time communication features using WebSocket for live updates, notifications, and interactive features in web applications.",
      icon: <Globe className="h-10 w-10 text-jungle-500" />,
      color: "from-cyan-500 to-blue-500",
    },
    {
      title: "Build Tools & Dependency Management",
      description: "Manage project dependencies and builds using Maven and Gradle. Configure build automation and dependency resolution for Java projects.",
      icon: <Terminal className="h-10 w-10 text-jungle-500" />,
      color: "from-amber-500 to-yellow-500",
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <motion.div
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <Card className="h-full border-slate-200 dark:border-jungle-800 hover:shadow-xl transition-all duration-300 dark:bg-jungle-900/30 group overflow-hidden relative">
                  {/* Gradient overlay on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                  
                  <CardHeader className="flex flex-row items-center gap-4 relative z-10">
                    <div className={`rounded-full p-3 bg-gradient-to-br ${service.color} bg-opacity-10 group-hover:bg-opacity-20 transition-all duration-300`}>
                      {service.icon}
                    </div>
                    <CardTitle className="text-xl text-slate-800 dark:text-white group-hover:bg-gradient-to-r group-hover:from-jungle-600 group-hover:to-blue-600 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="relative z-10">
                    <CardDescription className="text-slate-600 dark:text-slate-300 text-base leading-relaxed">
                      {service.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
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
