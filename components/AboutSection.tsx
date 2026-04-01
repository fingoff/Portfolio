'use client'

import { motion } from 'framer-motion'
import SectionLabel from './SectionLabel'

export default function AboutSection() {
  return (
    <section id="about" className="mb-16 scroll-mt-16">
    <SectionLabel index="01">About Me</SectionLabel>
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex flex-wrap gap-2 mb-6">
          {[
            '📍 London, UK',
            '🏏 Two Circles',
            '💻 C# / .NET & TypeScript',
            '🎓 MEng First Class, Imperial',
          ].map(item => (
            <span key={item} className="font-mono text-xs text-muted border border-border px-2.5 py-1 rounded-full">
              {item}
            </span>
          ))}
        </div>
        <div className="space-y-4 text-muted leading-relaxed text-sm">
          <p>
            I&apos;m a Full-Stack Engineer based in London, currently building digital platforms at{' '}
            <span className="text-heading font-medium">Two Circles</span> - a global sports marketing
            agency working with clients including Formula 1, the NFL, and the ECB. My day-to-day spans
            backend services in C# and .NET, TypeScript APIs, and frontend work in React and Next.js.
          </p>
          <p>
            I studied Electronic and Information Engineering with a focus on software at{' '}
            <span className="text-heading font-medium">Imperial College London</span>, graduating
            with a First Class MEng. My final year project - a computer vision guide system for the
            visually impaired - pushed me further into software engineering, and I&apos;ve been building
            in that direction ever since.
          </p>
          <p>
            I&apos;m most at home working across the full stack: comfortable designing relational schemas,
            building REST APIs, and shipping polished UIs. Outside of work I&apos;m usually digging into
            something new - lately that&apos;s been infrastructure, LLMs, and how they&apos;re changing
            the way software gets built.
          </p>
        </div>
      </motion.div>
    </section>
  )
}
