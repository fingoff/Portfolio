'use client'

import { motion } from 'framer-motion'
import { projects } from '@/data/content'
import SectionLabel from '@/components/SectionLabel'

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-16 px-6 sm:px-8">
      <div className="max-w-6xl mx-auto">
        <SectionLabel>Projects</SectionLabel>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-5">
          {projects.map((project, i) => {
            const color = (project as { color?: string }).color ?? '#F59E0B'
            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative overflow-hidden bg-surface border border-border hover:border-accent/30 transition-all duration-300 group flex flex-col"
              >
                {/* Visual header */}
                <div
                  className="relative h-44 overflow-hidden shrink-0"
                  style={{ background: `linear-gradient(135deg, ${color}18 0%, ${color}06 100%)` }}
                >
                  {/* Grid lines */}
                  <div
                    className="absolute inset-0"
                    style={{
                      backgroundImage: `linear-gradient(${color}22 1px, transparent 1px), linear-gradient(90deg, ${color}22 1px, transparent 1px)`,
                      backgroundSize: '32px 32px',
                    }}
                  />
                  {/* Top accent line on hover */}
                  <div
                    className="absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ background: `linear-gradient(90deg, transparent, ${color}, transparent)` }}
                  />
                  {/* Corner accent dot */}
                  <div
                    className="absolute top-5 left-6 w-1.5 h-1.5 rounded-full"
                    style={{ backgroundColor: color }}
                  />
                  {/* Large background number */}
                  <span
                    className="absolute bottom-3 right-5 font-mono font-bold leading-none select-none"
                    style={{ fontSize: '5.5rem', color, opacity: 0.14 }}
                    aria-hidden="true"
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>

                {/* Content */}
                <div className="p-8 flex flex-col flex-1">
                  <p className="font-mono text-[11px] text-muted mb-4 tracking-widest uppercase">
                    {project.period}
                  </p>
                  <h3 className="text-base font-semibold text-text mb-4 leading-snug">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed mb-8 flex-1">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="font-mono text-[11px] px-2 py-1 bg-bg border border-border text-muted group-hover:border-border/80 transition-colors duration-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
