"use client"

import { useState, useMemo } from "react"
import { motion } from "framer-motion"
import Hero from "@/components/hero"
import Projects from "@/components/projects"
import Footer from "@/components/footer"
import { projectsData, getPrimarySkills, getAllSkills, type Project } from "@/lib/projects-data"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { ExternalLink, Github, Code, Database, Shield, Mail, Layers, Search, X, Package } from "lucide-react"

export default function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null)
  const [selectedPrimarySkill, setSelectedPrimarySkill] = useState<string>("All")
  const [searchQuery, setSearchQuery] = useState<string>("")

  const primarySkills = getPrimarySkills()
  const allSkills = getAllSkills()

  const filteredProjects = useMemo(() => {
    let filtered = projectsData

    // Filter by primary skill
    if (selectedPrimarySkill !== "All") {
      filtered = filtered.filter((project) => project.primarySkill === selectedPrimarySkill)
    }

    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase()
      filtered = filtered.filter(
        (project) =>
          project.title.toLowerCase().includes(query) ||
          project.description.toLowerCase().includes(query) ||
          project.skills.some((skill) => skill.toLowerCase().includes(query)) ||
          project.primarySkill.toLowerCase().includes(query)
      )
    }

    return filtered
  }, [selectedPrimarySkill, searchQuery])

  return (
    <main className="min-h-screen">
      <Hero />

      {/* Filters Section */}
      <section className="py-12 bg-white dark:bg-jungle-950 border-b border-slate-200 dark:border-jungle-800">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-800 dark:text-white mb-4 flex items-center gap-2">
                <img src="/icons8-spring-boot.svg" alt="Spring Boot" className="h-6 w-6" />
                Filter Projects
              </h2>
            </div>

            {/* Search Bar */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400" />
              <Input
                type="text"
                placeholder="Search projects by name, description, or skills..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-10 h-12 text-base"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-slate-600"
                >
                  <X className="h-5 w-5" />
                </button>
              )}
            </div>

            {/* Primary Skill Filter */}
            <div>
              <h3 className="text-lg font-semibold text-slate-800 dark:text-white mb-3">
                Filter by Primary Skill
              </h3>
              <div className="flex flex-wrap gap-2">
                <Button
                  variant={selectedPrimarySkill === "All" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedPrimarySkill("All")}
                  className={
                    selectedPrimarySkill === "All"
                      ? "bg-jungle-600 hover:bg-jungle-700 text-white"
                      : "border-jungle-200 dark:border-jungle-700"
                  }
                >
                  All
                </Button>
                {primarySkills.map((skill) => (
                  <Button
                    key={skill}
                    variant={selectedPrimarySkill === skill ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedPrimarySkill(skill)}
                    className={
                      selectedPrimarySkill === skill
                        ? "bg-jungle-600 hover:bg-jungle-700 text-white"
                        : "border-jungle-200 dark:border-jungle-700"
                    }
                  >
                    {skill}
                  </Button>
                ))}
              </div>
            </div>

            {/* Results Count */}
            <div className="text-slate-600 dark:text-slate-300">
              Showing <span className="font-semibold text-jungle-600 dark:text-jungle-400">{filteredProjects.length}</span>{" "}
              project{filteredProjects.length !== 1 ? "s" : ""}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-slate-50 dark:bg-jungle-900/30">
        <div className="container mx-auto px-4">
          {filteredProjects.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-xl text-slate-600 dark:text-slate-300">
                No projects found matching your criteria.
              </p>
              <Button
                variant="outline"
                onClick={() => {
                  setSelectedPrimarySkill("All")
                  setSearchQuery("")
                }}
                className="mt-4 border-jungle-200 dark:border-jungle-700"
              >
                Clear Filters
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full flex flex-col overflow-hidden border-slate-200 dark:border-jungle-800 hover:shadow-lg transition-shadow duration-300 dark:bg-jungle-800/30">
                    <div className="aspect-video w-full overflow-hidden bg-slate-100 dark:bg-jungle-800 relative group">
                      <img
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-jungle-900/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <CardHeader>
                      <div className="flex items-start justify-between gap-2">
                        <CardTitle className="text-xl text-slate-800 dark:text-white">{project.title}</CardTitle>
                        <Badge className="bg-jungle-500 text-white text-xs">
                          {project.primarySkill}
                        </Badge>
                      </div>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {project.techStack.slice(0, 4).map((tech, i) => (
                          <Badge
                            key={i}
                            variant="secondary"
                            className="bg-jungle-100 dark:bg-jungle-700/50 text-jungle-800 dark:text-jungle-200"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <CardDescription className="text-slate-600 dark:text-slate-300 text-base">
                        {project.description}
                      </CardDescription>
                    </CardContent>
                    <CardFooter className="flex gap-2 pt-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setSelectedProject(index)}
                        className="border-jungle-200 dark:border-jungle-700 flex-1"
                      >
                        <Code className="h-4 w-4 mr-1" /> View Details
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        asChild
                        className="border-jungle-200 dark:border-jungle-700"
                      >
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4 mr-1" /> GitHub
                        </a>
                      </Button>
                      {project.docker && (
                        <Button
                          variant="outline"
                          size="sm"
                          asChild
                          className="border-jungle-200 dark:border-jungle-700"
                        >
                          <a href={project.docker} target="_blank" rel="noopener noreferrer">
                            <Package className="h-4 w-4 mr-1" /> Docker
                          </a>
                        </Button>
                      )}
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Project Details Dialog */}
      {selectedProject !== null && filteredProjects[selectedProject] && (
        <Dialog open={selectedProject !== null} onOpenChange={() => setSelectedProject(null)}>
          <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={filteredProjects[selectedProject].image}
                  alt={filteredProjects[selectedProject].title}
                  className="w-20 h-20 rounded-lg object-cover"
                />
                <div>
                  <DialogTitle className="text-2xl">{filteredProjects[selectedProject].title}</DialogTitle>
                  <DialogDescription className="text-base mt-2">
                    {filteredProjects[selectedProject].detailedDescription}
                  </DialogDescription>
                </div>
              </div>
            </DialogHeader>

            <div className="space-y-6 mt-4">
              {/* Technologies */}
              <div>
                <h3 className="text-lg font-semibold text-slate-800 dark:text-white mb-3 flex items-center gap-2">
                  <Code className="h-5 w-5 text-jungle-500" />
                  Technologies Used
                </h3>
                <div className="flex flex-wrap gap-2">
                  {filteredProjects[selectedProject].technologies.map((tech, i) => (
                    <Badge
                      key={i}
                      variant="secondary"
                      className="bg-jungle-100 dark:bg-jungle-700/50 text-jungle-800 dark:text-jungle-200"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Key Features */}
              <div>
                <h3 className="text-lg font-semibold text-slate-800 dark:text-white mb-3 flex items-center gap-2">
                  <Layers className="h-5 w-5 text-jungle-500" />
                  Key Features
                </h3>
                <ul className="space-y-2">
                  {filteredProjects[selectedProject].keyFeatures.map((feature, i) => (
                    <li key={i} className="text-slate-600 dark:text-slate-300 flex items-start gap-2">
                      <span className="text-jungle-500 mt-1">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Features */}
              <div>
                <h3 className="text-lg font-semibold text-slate-800 dark:text-white mb-3 flex items-center gap-2">
                  <Database className="h-5 w-5 text-jungle-500" />
                  Features
                </h3>
                <ul className="space-y-2">
                  {filteredProjects[selectedProject].features.map((feature, i) => (
                    <li key={i} className="text-slate-600 dark:text-slate-300 flex items-start gap-2">
                      <span className="text-jungle-500 mt-1">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Entities */}
              {filteredProjects[selectedProject].entities && (
                <div>
                  <h3 className="text-lg font-semibold text-slate-800 dark:text-white mb-3 flex items-center gap-2">
                    <Shield className="h-5 w-5 text-jungle-500" />
                    Core Entities
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {filteredProjects[selectedProject].entities?.map((entity, i) => (
                      <Badge
                        key={i}
                        variant="outline"
                        className="border-jungle-300 dark:border-jungle-600 text-jungle-700 dark:text-jungle-300"
                      >
                        {entity}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}

              {/* API Endpoints */}
              {filteredProjects[selectedProject].apiEndpoints && (
                <div>
                  <h3 className="text-lg font-semibold text-slate-800 dark:text-white mb-3 flex items-center gap-2">
                    <Code className="h-5 w-5 text-jungle-500" />
                    API Endpoints
                  </h3>
                  <ul className="space-y-2">
                    {filteredProjects[selectedProject].apiEndpoints?.map((endpoint, i) => (
                      <li key={i} className="text-slate-600 dark:text-slate-300 font-mono text-sm bg-slate-100 dark:bg-slate-800 p-2 rounded">
                        {endpoint}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Video Tutorial */}
              {filteredProjects[selectedProject].videoTutorial && (
                <div>
                  <h3 className="text-lg font-semibold text-slate-800 dark:text-white mb-3 flex items-center gap-2">
                    <Mail className="h-5 w-5 text-jungle-500" />
                    Video Tutorial
                  </h3>
                  <a
                    href={filteredProjects[selectedProject].videoTutorial}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-jungle-600 dark:text-jungle-400 hover:underline flex items-center gap-2"
                  >
                    <ExternalLink className="h-4 w-4" />
                    Watch Project Explanation Video
                  </a>
                </div>
              )}
            </div>

            <DialogFooter className="mt-6">
              <Button
                variant="outline"
                onClick={() => setSelectedProject(null)}
                className="border-jungle-200 dark:border-jungle-700"
              >
                Close
              </Button>
              {filteredProjects[selectedProject].docker && (
                <Button
                  variant="outline"
                  asChild
                  className="border-jungle-200 dark:border-jungle-700"
                >
                  <a href={filteredProjects[selectedProject].docker!} target="_blank" rel="noopener noreferrer">
                    <Package className="h-4 w-4 mr-2" /> Docker
                  </a>
                </Button>
              )}
              <Button
                asChild
                className="bg-jungle-600 hover:bg-jungle-700 text-white"
              >
                <a href={filteredProjects[selectedProject].github} target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4 mr-2" /> View on GitHub
                </a>
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      )}

      <Footer />
    </main>
  )
}

