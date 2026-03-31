'use client'

import { motion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 sm:px-8 pt-16 overflow-hidden">
      {/* Ambient gradient orbs */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/4 -left-48 w-[500px] h-[500px] rounded-full bg-accent/10 blur-[140px] animate-pulse" />
        <div
          className="absolute bottom-1/4 right-0 w-[400px] h-[400px] rounded-full bg-accent/6 blur-[120px] animate-pulse"
          style={{ animationDelay: '2s', animationDuration: '4s' }}
        />
        <div
          className="absolute top-3/4 left-1/3 w-[300px] h-[300px] rounded-full bg-accent/4 blur-[100px] animate-pulse"
          style={{ animationDelay: '1s', animationDuration: '5s' }}
        />
      </div>
      <div className="max-w-6xl mx-auto w-full relative">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <p className="font-mono text-xs text-muted mb-8 tracking-[0.25em] uppercase">
            Software Engineer · London
          </p>
          <h1 className="text-[clamp(4rem,12vw,11rem)] font-bold leading-[0.88] tracking-tight text-text mb-10">
            Finlay
            <br />
            Goff
          </h1>
          <p className="text-base text-muted max-w-lg leading-relaxed mb-12">
            Backend-leaning Full-stack Engineer building scalable modern web apps
            for the sports industryat <span className="text-text">Two Circles</span>.
            <br />
            MEng from Imperial College London.
          </p>
          <div className="flex flex-wrap items-center gap-6">
            <a
              href="#experience"
              className="font-mono text-sm px-6 py-3 bg-accent text-bg font-medium hover:bg-amber-400 transition-colors duration-200"
            >
              View Work
            </a>
            <a
              href="/finlay-goff-cv.pdf"
              download
              className="font-mono text-sm text-muted hover:text-text transition-colors duration-200 underline underline-offset-4 decoration-border"
            >
              Download CV
            </a>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
      >
        <ArrowDown size={16} className="text-muted animate-bounce" />
      </motion.div>
    </section>
  )
}
