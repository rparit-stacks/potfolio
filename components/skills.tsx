"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Code, Network, Layers, Shield, Workflow, Database, Brain, GitBranch, TestTube, Sparkles, Server, Cloud, Lock, Mail, FileCode, Box, Terminal } from "lucide-react"
import { projectsData } from "@/lib/projects-data"
import { useToast } from "@/hooks/use-toast"

export default function Skills() {
  const [displayedText, setDisplayedText] = useState("")
  const fullText = "SKILLS"
  const [currentCategory, setCurrentCategory] = useState(0)
  const { toast } = useToast()

  const skillCategories = [
    {
      title: "Backend / Frameworks",
      icon: <Server className="h-6 w-6" />,
      skills: [
        "Spring Boot", 
        "Spring MVC", 
        "Spring Data JPA", 
        "REST APIs", 
        "Microservices Architecture", 
        "Servlet", 
        "Spring Security (RBAC)", 
        "JWT Authentication", 
        "WebSocket",
        "Spring Web",
        "Spring Mail"
      ],
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-100 dark:bg-blue-900/30",
    },
    {
      title: "Databases & Data Management",
      icon: <Database className="h-6 w-6" />,
      skills: [
        "MySQL", 
        "PostgreSQL", 
        "DynamoDB", 
        "Kafka (Message Queue)", 
        "Flyway (Database Migration)", 
        "JPA/Hibernate ORM",
        "Database Design",
        "Query Optimization"
      ],
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-100 dark:bg-green-900/30",
    },
    {
      title: "Cloud & DevOps",
      icon: <Cloud className="h-6 w-6" />,
      skills: [
        "Docker", 
        "CI/CD Pipelines", 
        "AWS S3", 
        "AWS EC2", 
        "AWS SQS", 
        "Linux", 
        "Containerization",
        "Docker Hub",
        "DevOps Practices"
      ],
      color: "from-indigo-500 to-purple-500",
      bgColor: "bg-indigo-100 dark:bg-indigo-900/30",
    },
    {
      title: "Programming Languages",
      icon: <Code className="h-6 w-6" />,
      skills: [
        "Java (Primary - Expert)", 
        "JavaScript", 
        "C++",
        "TypeScript",
        "Object-Oriented Programming",
        "Design Patterns"
      ],
      color: "from-orange-500 to-red-500",
      bgColor: "bg-orange-100 dark:bg-orange-900/30",
    },
    {
      title: "Security & Authentication",
      icon: <Shield className="h-6 w-6" />,
      skills: [
        "Spring Security", 
        "JWT (JSON Web Tokens)", 
        "Role-Based Access Control (RBAC)",
        "Session Management",
        "Authentication & Authorization",
        "Security Best Practices"
      ],
      color: "from-red-500 to-pink-500",
      bgColor: "bg-red-100 dark:bg-red-900/30",
    },
    {
      title: "API Development & Documentation",
      icon: <Network className="h-6 w-6" />,
      skills: [
        "RESTful API Design", 
        "Swagger/OpenAPI", 
        "API Documentation",
        "Postman",
        "API Testing",
        "DTOs & Request/Response Handling",
        "Pagination & Filtering"
      ],
      color: "from-teal-500 to-cyan-500",
      bgColor: "bg-teal-100 dark:bg-teal-900/30",
    },
    {
      title: "Testing & Quality Assurance",
      icon: <TestTube className="h-6 w-6" />,
      skills: [
        "JUnit", 
        "Mockito", 
        "Unit Testing",
        "Integration Testing",
        "Test-Driven Development (TDD)",
        "Postman API Testing",
        "Debugging & Troubleshooting"
      ],
      color: "from-yellow-500 to-amber-500",
      bgColor: "bg-yellow-100 dark:bg-yellow-900/30",
    },
    {
      title: "Version Control & Collaboration",
      icon: <GitBranch className="h-6 w-6" />,
      skills: [
        "Git", 
        "GitHub",
        "Version Control",
        "Code Collaboration",
        "Branch Management",
        "Pull Requests & Code Review"
      ],
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-100 dark:bg-purple-900/30",
    },
    {
      title: "Architecture & Design",
      icon: <Layers className="h-6 w-6" />,
      skills: [
        "Microservices Architecture",
        "Layered Architecture",
        "Service-Oriented Architecture (SOA)",
        "Design Patterns",
        "SOLID Principles",
        "Clean Code Practices",
        "Separation of Concerns"
      ],
      color: "from-slate-500 to-gray-500",
      bgColor: "bg-slate-100 dark:bg-slate-900/30",
    },
    {
      title: "Build Tools & Utilities",
      icon: <Box className="h-6 w-6" />,
      skills: [
        "Maven",
        "Gradle",
        "Gson (JSON Processing)",
        "Build Automation",
        "Dependency Management"
      ],
      color: "from-amber-500 to-orange-500",
      bgColor: "bg-amber-100 dark:bg-amber-900/30",
    },
    {
      title: "AI & Machine Learning",
      icon: <Brain className="h-6 w-6" />,
      skills: [
        "Spring AI", 
        "RAG (Retrieval-Augmented Generation)", 
        "Vector Databases", 
        "Embeddings",
        "AI Integration",
        "LLM Integration"
      ],
      color: "from-violet-500 to-purple-500",
      bgColor: "bg-violet-100 dark:bg-violet-900/30",
    },
    {
      title: "Additional Tools & Technologies",
      icon: <Terminal className="h-6 w-6" />,
      skills: [
        "Spring Mail (Email Service)",
        "Exception Handling",
        "Logging & Monitoring",
        "Transaction Management",
        "Performance Optimization",
        "Code Refactoring"
      ],
      color: "from-rose-500 to-pink-500",
      bgColor: "bg-rose-100 dark:bg-rose-900/30",
    },
  ]

  // Typing animation for SKILLS title
  useEffect(() => {
    let currentIndex = 0
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayedText(fullText.slice(0, currentIndex))
        currentIndex++
      } else {
        clearInterval(typingInterval)
      }
    }, 150)

    return () => clearInterval(typingInterval)
  }, [])

  // Auto-rotate categories (30 seconds per category - user can manually change anytime)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCategory((prev) => (prev + 1) % skillCategories.length)
    }, 30000) // 30 seconds per category - gives enough time to read, user can click to change manually
    return () => clearInterval(interval)
  }, [])

  // Handle skill click - find matching projects
  const handleSkillClick = (skill: string) => {
    // Normalize skill name for matching (case-insensitive, remove special chars)
    const normalizeSkill = (s: string) => s.toLowerCase().replace(/[^a-z0-9]/g, '')
    const normalizedSkill = normalizeSkill(skill)

    // Find projects that have this skill
    const matchingProjects = projectsData.filter((project) => {
      // Check in skills array
      const hasSkill = project.skills.some((s) => normalizeSkill(s) === normalizedSkill)
      // Check in techStack array
      const inTechStack = project.techStack.some((t) => normalizeSkill(t) === normalizedSkill)
      // Check in primarySkill
      const isPrimary = normalizeSkill(project.primarySkill) === normalizedSkill
      // Check in technologies array
      const inTechnologies = project.technologies?.some((t) => normalizeSkill(t) === normalizedSkill)

      return hasSkill || inTechStack || isPrimary || inTechnologies
    })

    if (matchingProjects.length > 0) {
      // Navigate to projects section
      const projectsSection = document.getElementById("projects")
      if (projectsSection) {
        projectsSection.scrollIntoView({ behavior: "smooth" })
        
        // Try to find and highlight the first matching project
        setTimeout(() => {
          const projectElement = document.querySelector(`[data-project-id="${matchingProjects[0].id}"]`)
          if (projectElement) {
            projectElement.scrollIntoView({ behavior: "smooth", block: "center" })
            // Add highlight effect
            projectElement.classList.add("ring-4", "ring-jungle-500", "ring-offset-2")
            setTimeout(() => {
              projectElement.classList.remove("ring-4", "ring-jungle-500", "ring-offset-2")
            }, 2000)
          }
        }, 500)

        toast({
          title: `Found ${matchingProjects.length} project(s) with ${skill}`,
          description: matchingProjects.map((p) => p.title).join(", "),
          duration: 3000,
        })
      }
    } else {
      // No matching project found
      toast({
        title: "Project Coming Soon",
        description: "Please wait some time. If skills are written, project must exist. You can check GitHub portfolio will soon update.",
        duration: 5000,
        variant: "default",
      })
    }
  }

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-white via-slate-50 to-white dark:from-jungle-950 dark:via-jungle-900 dark:to-jungle-950 relative overflow-hidden">
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => {
          const randomX = Math.random() * 100
          const randomY = Math.random() * 100
          const randomDelay = Math.random() * 2
          const randomDuration = Math.random() * 3 + 2
          
          return (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-jungle-400/20 dark:bg-jungle-400/10 rounded-full"
              style={{
                left: `${randomX}%`,
                top: `${randomY}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0, 0.6, 0],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: randomDuration,
                repeat: Infinity,
                delay: randomDelay,
                ease: "easeInOut",
              }}
            />
          )
        })}
      </div>

      {/* Glowing gradient orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

      <div className="container mx-auto px-4 relative z-10">
        {/* Animated SKILLS Title with typing effect */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="h-10 w-10 text-jungle-600 dark:text-jungle-400" />
            </motion.div>
            <h2 className="text-5xl md:text-6xl font-bold">
              <span className="bg-gradient-to-r from-jungle-600 via-blue-600 to-purple-600 dark:from-jungle-400 dark:via-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
                {displayedText}
                {displayedText.length < fullText.length && (
                  <motion.span
                    animate={{ opacity: [1, 0] }}
                    transition={{ duration: 0.8, repeat: Infinity }}
                    className="inline-block"
                  >
                    |
                  </motion.span>
                )}
              </span>
            </h2>
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <Brain className="h-10 w-10 text-jungle-600 dark:text-jungle-400" />
            </motion.div>
          </div>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Technologies and tools I use to build robust and scalable backend systems with AI integration.
          </p>
        </motion.div>

        {/* Category Tabs - Scrollable */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-8 overflow-x-auto pb-2 scrollbar-hide">
          {skillCategories.map((category, index) => (
            <motion.button
              key={index}
              onClick={() => setCurrentCategory(index)}
              className={`px-3 py-1.5 md:px-4 md:py-2 rounded-full font-medium text-xs md:text-sm transition-all duration-300 whitespace-nowrap ${
                currentCategory === index
                  ? `bg-gradient-to-r ${category.color} text-white shadow-lg scale-110`
                  : "bg-slate-200 dark:bg-jungle-800 text-slate-700 dark:text-slate-300 hover:bg-slate-300 dark:hover:bg-jungle-700"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.title}
            </motion.button>
          ))}
        </div>

        {/* Skills Display with Animation */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentCategory}
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.4 }}
            className="mb-8"
          >
            <Card className={`border-2 border-jungle-200 dark:border-jungle-700 ${skillCategories[currentCategory].bgColor} backdrop-blur-sm`}>
              <CardContent className="p-8">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  className="flex items-center gap-3 mb-6"
                >
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${skillCategories[currentCategory].color} text-white`}>
                    {skillCategories[currentCategory].icon}
                  </div>
                  <h3 className="text-2xl font-bold text-slate-800 dark:text-white">
                    {skillCategories[currentCategory].title}
                  </h3>
                </motion.div>

                <div className="flex flex-wrap gap-3">
                  {skillCategories[currentCategory].skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      initial={{ opacity: 0, scale: 0.8, y: 10 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      transition={{ delay: 0.3 + skillIndex * 0.05 }}
                      whileHover={{ scale: 1.1, y: -5 }}
                      className="group relative"
                    >
                      <div 
                        onClick={() => handleSkillClick(skill)}
                        className={`px-4 py-2 rounded-lg bg-white/80 dark:bg-jungle-800/80 backdrop-blur-sm border border-jungle-200 dark:border-jungle-700 shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer relative z-10`}
                      >
                        <span className="text-sm font-semibold text-slate-800 dark:text-white group-hover:bg-gradient-to-r group-hover:from-jungle-600 group-hover:to-blue-600 group-hover:bg-clip-text group-hover:text-transparent transition-all">
                          {skill}
                        </span>
                      </div>
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-jungle-400/20 to-blue-400/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity blur-sm -z-0"
                        initial={false}
                      />
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </AnimatePresence>

        {/* Progress indicator */}
        <div className="flex justify-center gap-2 mt-8">
          {skillCategories.map((_, index) => (
            <motion.div
              key={index}
              className={`h-2 rounded-full transition-all duration-300 ${
                currentCategory === index
                  ? "w-8 bg-gradient-to-r from-jungle-500 to-blue-500"
                  : "w-2 bg-slate-300 dark:bg-jungle-700"
              }`}
              whileHover={{ scale: 1.2 }}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

