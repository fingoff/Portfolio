import { Github, Linkedin, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="py-16 px-6 sm:px-8 border-t border-border">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        <p className="font-mono text-xs text-muted">Finlay Goff · 2026</p>
        <div className="flex items-center gap-6">
          <a
            href="https://github.com/fingoff"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted hover:text-text transition-colors duration-200"
            aria-label="GitHub"
          >
            <Github size={16} />
          </a>
          <a
            href="https://www.linkedin.com/in/finlay-goff-602779132/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted hover:text-text transition-colors duration-200"
            aria-label="LinkedIn"
          >
            <Linkedin size={16} />
          </a>
          <a
            href="mailto:finlaygoff@gmail.com"
            className="text-muted hover:text-text transition-colors duration-200"
            aria-label="Email"
          >
            <Mail size={16} />
          </a>
        </div>
      </div>
    </footer>
  )
}
