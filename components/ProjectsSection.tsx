'use client'

import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import { projects } from '@/data/content'
import SectionLabel from '@/components/SectionLabel'

export default function ProjectsSection() {
  return (
    <section id="projects" className="mb-24">
      <SectionLabel index="03">Projects</SectionLabel>
      <div className="mt-6 space-y-3">
        {projects.map((project, i) => {
          const color = (project as { color?: string }).color ?? '#F59E0B'
          return (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <div className="group relative grid grid-cols-1 sm:grid-cols-[140px_1fr] gap-1 sm:gap-6 py-6 px-5 -mx-5 rounded-md hover:bg-surface/50 hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] hover:drop-shadow-lg transition-all duration-300 cursor-default">
                {/* Image / visual placeholder */}
                <div
                  className="relative h-24 sm:h-full rounded overflow-hidden mb-3 sm:mb-0"
                  style={{ background: `linear-gradient(135deg, ${color}20 0%, ${color}08 100%)` }}
                >
                  {/* Grid overlay */}
                  <div
                    className="absolute inset-0"
                    style={{
                      backgroundImage: `linear-gradient(${color}15 1px, transparent 1px), linear-gradient(90deg, ${color}15 1px, transparent 1px)`,
                      backgroundSize: '20px 20px',
                    }}
                  />
                  {/* Number */}
                  <span
                    className="absolute bottom-1 right-2 font-mono font-bold leading-none select-none"
                    style={{ fontSize: '3rem', color, opacity: 0.2 }}
                    aria-hidden="true"
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>

                {/* Content */}
                <div>
                  <p className="font-mono text-xs text-muted mb-2 tracking-wide">
                    {project.period}
                  </p>
                  <h3 className="text-base font-medium text-heading group-hover:text-accent transition-colors duration-300 leading-snug">
                    {project.title}
                    <ExternalLink size={12} className="inline ml-2 mb-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </h3>
                  <p className="mt-2 text-sm text-muted leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="font-mono text-[11px] px-2.5 py-1 rounded-full bg-accent/10 text-accent"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}
