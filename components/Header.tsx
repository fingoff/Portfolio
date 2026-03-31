'use client'

import { useState, useEffect } from 'react'

const navLinks = [
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Skills', href: '#skills' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-bg/80 backdrop-blur-md border-b border-border' : ''
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-8 h-16 flex items-center justify-between">
        <a
          href="#"
          className="font-mono text-sm text-muted hover:text-text transition-colors duration-200"
        >
          fg
        </a>
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted hover:text-text transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
          <a
            href="/finlay-goff-cv.pdf"
            download
            className="font-mono text-xs px-4 py-2 border border-border hover:border-accent hover:text-accent transition-all duration-200"
          >
            CV ↓
          </a>
        </nav>
      </div>
    </header>
  )
}
