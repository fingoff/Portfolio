'use client'

import { motion } from 'framer-motion'
import { education } from '@/data/content'
import SectionLabel from '@/components/SectionLabel'

export default function EducationSection() {
  return (
    <section id="education" className="mb-16">
      <SectionLabel index="04">Education</SectionLabel>
      <div className="mt-6">
        {education.map((entry, i) => (
          <motion.div
            key={entry.institution}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
          >
            <div className="group relative grid grid-cols-1 sm:grid-cols-[140px_1fr] gap-1 sm:gap-6 py-6 px-5 -mx-5 rounded-md hover:bg-surface/50 hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] hover:drop-shadow-lg transition-all duration-300 cursor-default">
              <div className="font-mono text-xs text-muted mt-1 uppercase tracking-wide">
                {entry.period}
              </div>
              <div>
                <h3 className="text-base font-medium text-heading group-hover:text-accent transition-colors duration-300 leading-snug">
                  {entry.institution}
                </h3>
                <p className="text-sm text-accent/80 mt-1">{entry.degree}</p>
                <p className="mt-2 text-sm text-muted leading-relaxed">
                  {entry.detail}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
