import { Github, Linkedin, Mail, Container } from "lucide-react"

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="py-10 bg-white dark:bg-[#0d0d0f] border-t border-[var(--ios-separator)]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-[#0a84ff] to-[#5e5ce6] text-white font-semibold text-sm shadow-[0_4px_10px_-3px_rgba(10,132,255,0.5)]">
              R
            </span>
            <div>
              <div className="font-semibold tracking-tight text-[15px]">Rohit Parit</div>
              <div className="text-[12.5px] text-[var(--ios-text-muted)]">
                Java · Spring Boot · Backend engineer
              </div>
            </div>
          </div>

          <nav className="flex items-center gap-1.5">
            <FootLink href="https://www.linkedin.com/in/rparit1934/" icon={Linkedin} label="LinkedIn" />
            <FootLink href="https://github.com/rparit-stacks" icon={Github} label="GitHub" />
            <FootLink href="https://hub.docker.com/u/rparit1934" icon={Container} label="Docker" />
            <FootLink href="mailto:rohitparit1934@gmail.com" icon={Mail} label="Email" />
          </nav>

          <div className="text-[12.5px] text-[var(--ios-text-muted)]">
            © {year} Rohit Parit · Built with care
          </div>
        </div>
      </div>
    </footer>
  )
}

function FootLink({
  href,
  icon: Icon,
  label,
}: {
  href: string
  icon: React.ComponentType<{ className?: string }>
  label: string
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="inline-flex h-9 w-9 items-center justify-center rounded-full hover:bg-black/[0.04] dark:hover:bg-white/[0.06] text-[var(--ios-text-muted)] hover:text-[#0a84ff] transition"
    >
      <Icon className="h-4 w-4" />
    </a>
  )
}
