'use client'

import { motion } from 'framer-motion'
import { education } from '@/data/content'
import SectionLabel from '@/components/SectionLabel'

export default function EducationSection() {
  return (
    <section id="education" className="py-16 px-6 sm:px-8">
      <div className="max-w-6xl mx-auto">
        <SectionLabel>Education</SectionLabel>
        <div className="mt-8">
          {education.map((entry, i) => (
            <motion.div
              key={entry.institution}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-8 lg:gap-20 py-12 border-b border-border last:border-0"
            >
              <div>
                <p className="font-mono text-xs text-muted mb-3 tracking-widest uppercase">
                  {entry.period}
                </p>
                <h3 className="text-lg font-semibold text-text mb-1">
                  {entry.institution}
                </h3>
                <p className="text-sm text-muted">{entry.degree}</p>
              </div>
              <p className="text-sm text-muted leading-relaxed lg:pt-1">
                {entry.detail}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
