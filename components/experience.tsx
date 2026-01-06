"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Briefcase, Calendar, Code, Server, Smartphone, ExternalLink } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export default function Experience() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  // Create a continuous line animation
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])

  const experiences = [
    {
      role: "Backend Java Developer",
      company: "Debound",
      date: "11/2025 - Present",
      icon: <Server className="h-5 w-5 text-white" />,
      color: "from-blue-500 to-cyan-500",
      tags: ["Java", "Spring Boot", "REST APIs", "Migration"],
      description: [
        "Spearheaded the critical migration of Bank of Maharashtra’s legacy PHP system to a robust Java ecosystem.",
        "Architected scalable REST APIs, enhancing system efficiency and reducing response times by 40%."
      ]
    },
    {
      role: "Full Stack Developer",
      company: "GNEXT",
      date: "07/2025 - 10/2025",
      icon: <Smartphone className="h-5 w-5 text-white" />,
      color: "from-purple-500 to-pink-500",
      tags: ["PHP", "Full Stack", "End-to-End Design"],
      description: [
        "Collaborated with a cross-functional team to build a comprehensive Physiotherapy Booking System for Abhaile Physiotherapy.",
        "Designed and implemented the application end-to-end, delivering a seamless user experience from scratch."
      ]
    },
    {
      role: "Software Development Engineer",
      company: "Bluestock Fintech",
      date: "05/2025 - 07/2025",
      icon: <Code className="h-5 w-5 text-white" />,
      color: "from-orange-500 to-red-500",
      tags: ["Java", "Security", "Fintech"],
      description: [
        "Contributed to innovative financial solutions, focusing on core Java development.",
        "Enhanced application security protocols and implemented critical new features for the fintech platform."
      ]
    }
  ]

  return (
    <section id="experience" className="py-24 bg-slate-50 dark:bg-jungle-950 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-20">
        <div className="absolute top-1/4 left-0 w-64 h-64 bg-jungle-500 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-blue-500 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10" ref={containerRef}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-jungle-100 dark:bg-jungle-900 text-jungle-700 dark:text-jungle-300 text-sm font-medium mb-4">
            <Briefcase className="h-4 w-4" />
            <span>Career Path</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-jungle-500 to-teal-400">Experience</span>
          </h2>
          <div className="h-1.5 w-24 bg-gradient-to-r from-jungle-500 to-teal-400 mx-auto rounded-full"></div>
        </motion.div>

        <div className="relative max-w-5xl mx-auto">
          {/* Vertical Timeline Line */}
          <div className="absolute left-[15px] md:left-1/2 top-0 bottom-0 w-0.5 bg-slate-200 dark:bg-slate-700 -translate-x-1/2 md:translate-x-0"></div>
          <motion.div
            style={{ height: lineHeight }}
            className="absolute left-[15px] md:left-1/2 top-0 w-0.5 bg-gradient-to-b from-jungle-500 via-teal-400 to-blue-500 -translate-x-1/2 md:translate-x-0"
          />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className={`relative flex items-center md:justify-between ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>

                {/* Timeline Dot */}
                <div className="absolute left-[15px] md:left-1/2 -translate-x-1/2 flex items-center justify-center w-8 h-8 rounded-full bg-white dark:bg-slate-900 border-4 border-slate-100 dark:border-slate-800 z-20 shadow-lg">
                  <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${exp.color}`} />
                </div>

                {/* Content Card */}
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true, margin: "-100px" }}
                  className={`ml-12 md:ml-0 md:w-[45%] ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}
                >
                  <Card className="group relative overflow-hidden border-none bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                    {/* Gradient Border Overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${exp.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none`} />
                    <div className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r ${exp.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`} />

                    <CardHeader className="pb-2">
                      <div className={`flex items-center gap-3 mb-2 ${index % 2 === 0 ? "md:flex-row-reverse" : "flex-row"}`}>
                        <div className={`p-2 rounded-lg bg-gradient-to-br ${exp.color} shadow-md`}>
                          {exp.icon}
                        </div>
                        <Badge variant="outline" className="border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                          {exp.date}
                        </Badge>
                      </div>
                      <CardTitle className="text-xl font-bold text-slate-800 dark:text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-jungle-600 group-hover:to-teal-500 transition-colors">
                        {exp.role}
                      </CardTitle>
                      <div className="text-lg font-semibold text-slate-600 dark:text-slate-400">
                        {exp.company}
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className={`space-y-2 text-slate-600 dark:text-slate-300 text-sm mb-4 marker:text-jungle-500`}>
                        {exp.description.map((item, i) => (
                          <motion.li
                            key={i}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.4 + (i * 0.1) }}
                            viewport={{ once: true }}
                            className="flex items-start gap-2"
                          >
                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-jungle-500 shrink-0" />
                            <span className={`${index % 2 === 0 ? "md:text-right" : "text-left"}`}>{item}</span>
                          </motion.li>
                        ))}
                      </ul>
                      <div className={`flex flex-wrap gap-2 mt-4 ${index % 2 === 0 ? "md:justify-end" : "justify-start"}`}>
                        {exp.tags.map((tag, t) => (
                          <Badge key={t} variant="secondary" className="bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>

                {/* Spacer for the other side */}
                <div className="hidden md:block md:w-[45%]" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
