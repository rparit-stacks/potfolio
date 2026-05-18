import Hero from "@/components/hero"
import About from "@/components/about"
import Skills from "@/components/skills"
import Projects from "@/components/projects"
import Experience from "@/components/experience"
import Education from "@/components/education"
import Services from "@/components/services"
import Certificates from "@/components/certificates"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--ios-bg)]">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Education />
      <Services />
      <Certificates />
      <Contact />
      <Footer />
    </main>
  )
}
