'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Download } from 'lucide-react'
import LoadingScreen from '@/components/LoadingScreen'
import AboutSection from '@/components/AboutSection'
import ExperienceSection from '@/components/ExperienceSection'
import ProjectsSection from '@/components/ProjectsSection'
import SkillsSection from '@/components/SkillsSection'

const navLinks = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Tech Stack' },
]

export default function Home() {
  const [loaded, setLoaded] = useState(false)
  const [activeSection, setActiveSection] = useState('about')
  const [mouse, setMouse] = useState({ x: 0, y: 0 })
  const mainRef = useRef<HTMLDivElement>(null)

  // Track active section via Intersection Observer
  useEffect(() => {
    if (!loaded) return
    const sections = navLinks.map(l => document.getElementById(l.id)).filter(Boolean) as HTMLElement[]
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter(e => e.isIntersecting)
        if (visible.length > 0) {
          setActiveSection(visible[0].target.id)
        }
      },
      { rootMargin: '-10% 0px -50% 0px', threshold: 0 }
    )
    sections.forEach(s => observer.observe(s))
    return () => observer.disconnect()
  }, [loaded])

  // Mouse spotlight
  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    setMouse({ x: e.clientX, y: e.clientY })
  }, [])

  if (!loaded) {
    return <LoadingScreen onComplete={() => setLoaded(true)} />
  }

  return (
    <div
      className="relative min-h-screen"
      onMouseMove={handleMouseMove}
    >
      {/* Page-wide mouse spotlight */}
      <div
        className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300"
        style={{
          background: `radial-gradient(600px circle at ${mouse.x}px ${mouse.y}px, rgba(245,158,11,0.06), transparent 40%)`,
        }}
        aria-hidden="true"
      />

      <div className="lg:flex lg:justify-between lg:gap-4 max-w-screen-xl mx-auto px-6 sm:px-12 lg:px-16">
        {/* ── Left column — fixed on desktop ── */}
        <header className="lg:sticky lg:top-0 lg:flex lg:flex-col lg:justify-between lg:max-h-screen lg:w-[340px] lg:shrink-0 lg:py-16 pt-20 pb-10">
          <div>
            {/* Headshot */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-5"
            >
              <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-border hover:border-accent transition-colors duration-300">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/headshot.jpg"
                  alt="Finlay Goff"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const el = e.target as HTMLImageElement
                    el.style.display = 'none'
                    el.parentElement!.innerHTML = '<div class="w-full h-full bg-surface flex items-center justify-center font-mono text-accent text-lg">FG</div>'
                  }}
                />
              </div>
            </motion.div>

            {/* Name */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
            >
              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-heading">
                Finlay Goff
              </h1>
              <h2 className="mt-3 text-lg font-medium text-text">
                Full-Stack Engineer
              </h2>
              <p className="mt-4 max-w-xs text-muted leading-relaxed">
                Building modern, scalable digital products for the web.
              </p>
            </motion.div>

            {/* Available badge */}
            {/* <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.4 }}
              className="mt-5"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 border border-border rounded-full">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                </span>
                <span className="font-mono text-[11px] text-muted tracking-wide">Open to opportunities</span>
              </div>
            </motion.div> */}

            {/* Nav — desktop only */}
            <nav className="hidden lg:block mt-10" aria-label="In-page navigation">
              <ul className="space-y-0">
                {navLinks.map((link, i) => {
                  const isActive = activeSection === link.id
                  return (
                    <motion.li
                      key={link.id}
                      initial={{ opacity: 0, x: -12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.5 + i * 0.05 }}
                    >
                      <a
                        href={`#${link.id}`}
                        className="group flex items-center gap-4 py-3"
                      >
                        <span
                          className={`h-px transition-all duration-300 ${
                            isActive ? 'w-16 bg-heading' : 'w-8 bg-border group-hover:w-16 group-hover:bg-text'
                          }`}
                        />
                        <span
                          className={`font-mono text-xs uppercase tracking-widest transition-colors duration-300 ${
                            isActive ? 'text-heading' : 'text-muted group-hover:text-text'
                          }`}
                        >
                          {link.label}
                        </span>
                      </a>
                    </motion.li>
                  )
                })}
              </ul>
            </nav>
          </div>

          {/* Bottom of left column — currently + socials */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            className="mt-12 lg:mt-0"
          >
            {/* Social links */}
            <div className="flex items-center gap-5">
              <a
                href="https://github.com/fingoff"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted hover:text-heading transition-colors duration-200"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/finlay-goff-602779132/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted hover:text-heading transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:finlaygoff@gmail.com"
                className="text-muted hover:text-heading transition-colors duration-200"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
              <a
                href="/finlay-goff-cv.pdf"
                download
                className="inline-flex items-center gap-1.5 font-mono text-xs text-muted hover:text-accent border border-border hover:border-accent px-3 py-1.5 transition-all duration-200 ml-2"
              >
                CV <Download size={12} />
              </a>
            </div>
          </motion.div>
        </header>

        {/* ── Right column — scrollable content ── */}
        <main ref={mainRef} className="lg:pt-24 lg:pb-16 pb-20 lg:w-full lg:max-w-[600px]">
          <AboutSection />
          <ExperienceSection />
          <ProjectsSection />
          <SkillsSection />

          {/* Minimal footer */}
          <footer className="mt-16 pt-8 border-t border-border">
            <p className="font-mono text-xs text-muted">
              Finlay Goff · {new Date().getFullYear()}
            </p>
          </footer>
        </main>
      </div>
    </div>
  )
}
