'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, Download } from 'lucide-react'
import { experience } from '@/data/content'
import SectionLabel from '@/components/SectionLabel'

export default function ExperienceSection() {
  const [expanded, setExpanded] = useState<string | null>(null)

  const toggle = (company: string) =>
    setExpanded((prev) => (prev === company ? null : company))

  return (
    <section id="experience" className="mb-24">
      <SectionLabel index="02">Experience</SectionLabel>
      <div className="mt-6">
        {experience.map((role, i) => {
          const isOpen = expanded === role.company
          return (
            <motion.div
              key={role.company}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <div
                className={`group relative grid grid-cols-1 sm:grid-cols-[140px_1fr] gap-1 sm:gap-6 py-6 px-5 -mx-5 rounded-md cursor-pointer transition-all duration-300 ${isOpen ? 'bg-surface/50 shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)]' : 'hover:bg-surface/50 hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] hover:drop-shadow-lg'}`}
                onClick={() => toggle(role.company)}
                role="button"
                aria-expanded={isOpen}
              >
                {/* Period */}
                <div className="font-mono text-xs text-muted mt-1 uppercase tracking-wide">
                  {role.period}
                </div>

                {/* Content */}
                <div>
                  <div className="flex items-start justify-between gap-2">
                    <h3 className={`text-base font-medium transition-colors duration-300 leading-snug ${isOpen ? 'text-accent' : 'text-heading group-hover:text-accent'}`}>
                      {role.role} · {role.company}
                    </h3>
                    <ChevronDown
                      size={16}
                      className={`text-muted mt-0.5 shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 text-accent' : ''}`}
                    />
                  </div>

                  <p className="mt-2 text-sm text-muted leading-relaxed">
                    {role.summary}
                  </p>

                  {/* Tech tags — always visible */}
                  <div className="flex flex-wrap gap-2 mt-4">
                    {role.tech.map((t) => (
                      <span
                        key={t}
                        className="font-mono text-[11px] px-2.5 py-1 rounded-full bg-accent/10 text-accent"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Expandable highlights */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.ul
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="overflow-hidden mt-4 space-y-2 border-t border-white/5 pt-4"
                      >
                        {role.highlights.map((h, j) => (
                          <motion.li
                            key={j}
                            initial={{ opacity: 0, x: -8 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.25, delay: j * 0.05 }}
                            className="text-sm text-muted leading-relaxed flex gap-2"
                          >
                            <span className="text-accent mt-1 shrink-0 text-[10px]">▹</span>
                            <span>{h}</span>
                          </motion.li>
                        ))}
                      </motion.ul>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>
          )
        })}
      </div>

      {/* CV download nudge */}
      <div className="mt-8 px-5 -mx-5">
        <a
          href="/finlay-goff-cv.pdf"
          download
          className="inline-flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-full border border-accent/30 text-accent hover:bg-accent/10 hover:border-accent transition-all duration-200 group"
        >
          <Download size={14} className="group-hover:translate-y-0.5 transition-transform duration-200" />
          <span>View full CV</span>
        </a>
      </div>
    </section>
  )
}
