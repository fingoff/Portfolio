'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { experience } from '@/data/content'
import SectionLabel from '@/components/SectionLabel'

export default function ExperienceSection() {
  const [expanded, setExpanded] = useState<string | null>(null)

  return (
    <section id="experience" className="py-16 px-6 sm:px-8">
      <div className="max-w-6xl mx-auto">
        <SectionLabel>Experience</SectionLabel>
        <div className="mt-8 space-y-3">
          {experience.map((role, i) => {
            const isOpen = expanded === role.company
            return (
              <motion.div
                key={role.company}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className={`border transition-colors duration-300 ${isOpen ? 'border-accent/30 bg-surface' : 'border-border bg-surface hover:border-muted/40'}`}
              >
                {/* Clickable header */}
                <button
                  className="w-full text-left px-7 py-7 flex gap-4 items-start"
                  onClick={() => setExpanded(isOpen ? null : role.company)}
                  aria-expanded={isOpen}
                >
                  {/* Accent bar */}
                  <div
                    className={`shrink-0 w-0.5 self-stretch rounded-full transition-colors duration-300 ${isOpen ? 'bg-accent' : 'bg-border'}`}
                  />
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-1.5">
                      <h3 className="text-lg font-semibold text-text">{role.company}</h3>
                      <span className="font-mono text-xs text-muted">{role.period}</span>
                    </div>
                    <p className="text-sm text-accent mb-3">{role.role}</p>
                    <p className="text-sm text-muted leading-relaxed">{role.summary}</p>
                    <div className="flex flex-wrap gap-2 mt-5">
                      {role.tech.map((t) => (
                        <span
                          key={t}
                          className="font-mono text-[11px] px-2 py-1 bg-bg border border-border text-muted"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                  <ChevronDown
                    size={16}
                    className={`text-muted shrink-0 mt-1 transition-transform duration-300 ${isOpen ? 'rotate-180 text-accent' : ''}`}
                  />
                </button>

                {/* Expandable details */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="details"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
                      className="overflow-hidden"
                    >
                      <ul className="pl-[3.25rem] pr-7 pb-7 pt-1 space-y-3 border-t border-border/50">
                        {role.highlights.map((h, j) => (
                          <motion.li
                            key={j}
                            initial={{ opacity: 0, x: -8 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.25, delay: j * 0.05 }}
                            className="flex gap-4 text-sm text-muted leading-relaxed pt-3"
                          >
                            <span className="text-accent mt-0.5 shrink-0 select-none">-</span>
                            <span>{h}</span>
                          </motion.li>
                        ))}
                      </ul>
                      {(() => {
                        const screenshots = (role as { screenshots?: { src: string; caption: string }[] }).screenshots
                        if (!screenshots?.length) return null
                        return (
                          <div className="pl-[3.25rem] pr-7 pb-7 border-t border-border/50">
                            <p className="font-mono text-[11px] text-muted uppercase tracking-widest mb-4 pt-5">
                              Work Preview
                            </p>
                            <div className="flex gap-4 overflow-x-auto pb-2">
                              {screenshots.map((shot, k) => (
                                <motion.div
                                  key={k}
                                  initial={{ opacity: 0, y: 8 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  transition={{ duration: 0.25, delay: 0.2 + k * 0.1 }}
                                  className="shrink-0 flex flex-col gap-2"
                                >
                                  {/* eslint-disable-next-line @next/next/no-img-element */}
                                  <img
                                    src={shot.src}
                                    alt={shot.caption}
                                    onError={(e) => {
                                      const img = e.target as HTMLImageElement
                                      img.src = `https://placehold.co/500x281/111111/2a2a2a?text=${encodeURIComponent(shot.caption)}`
                                    }}
                                    className="h-36 w-auto rounded-sm object-cover border border-border hover:border-accent/30 transition-colors duration-200"
                                  />
                                  <p className="font-mono text-[10px] text-muted">{shot.caption}</p>
                                </motion.div>
                              ))}
                            </div>
                          </div>
                        )
                      })()}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
