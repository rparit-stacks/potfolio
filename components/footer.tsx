import { Github, Linkedin, Mail, Container } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-8 bg-jungle-900 text-slate-300 relative overflow-hidden">
      {/* Jungle silhouette at the bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-16 opacity-20">
        <div
          className="w-full h-full bg-bottom bg-repeat-x"
          style={{
            backgroundImage: `url('/images/django-jungle.png')`,
            backgroundSize: "auto 100%",
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0 flex items-center gap-3">
            <img src="/placeholder-user.jpg" alt="Rohit Parit" className="h-10 w-10 rounded-md" />
            <div>
              <p className="text-lg font-semibold flex items-center gap-2">
                Rohit Parit <img src="/icons8-spring-boot.svg" alt="Spring Boot" className="h-5 w-5" />
              </p>
              <p className="text-sm text-jungle-400">Java Developer</p>
            </div>
          </div>

          <div className="flex gap-4 mb-4 md:mb-0">
            <a
              href="https://www.linkedin.com/in/rparit1934/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-jungle-800 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="https://github.com/rparit-stacks"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-jungle-800 transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://hub.docker.com/u/rparit1934"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-jungle-800 transition-colors"
              aria-label="Docker"
            >
              <Container className="h-5 w-5" />
            </a>
            <a
              href="mailto:rohitparit1934@gmail.com"
              className="p-2 rounded-full hover:bg-jungle-800 transition-colors"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>

          <div className="text-sm text-jungle-400">© {currentYear} Rohit Parit. All rights reserved.</div>
        </div>
      </div>
    </footer>
  )
}
