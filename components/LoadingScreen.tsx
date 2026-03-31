'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [show, setShow] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false)
      setTimeout(onComplete, 300)
    }, 900)
    return () => clearTimeout(timer)
  }, [onComplete])

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-bg"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
            className="flex flex-col items-center gap-6"
          >
            {/* FG monogram */}
            <svg
              viewBox="0 0 80 80"
              width={80}
              height={80}
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* F */}
              <motion.path
                d="M 15 65 L 15 15 L 38 15 M 15 38 L 33 38"
                stroke="#F59E0B"
                strokeWidth={3}
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
              />
              {/* G */}
              <motion.path
                d="M 65 30 L 65 15 L 42 15 L 42 65 L 65 65 L 65 42 L 53 42"
                stroke="#F59E0B"
                strokeWidth={3}
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.5, delay: 0.2, ease: 'easeInOut' }}
              />
            </svg>

            {/* Loading bar */}
            <div className="w-24 h-px bg-border overflow-hidden">
              <motion.div
                className="h-full bg-accent"
                initial={{ width: '0%' }}
                animate={{ width: '100%' }}
                transition={{ duration: 0.7, ease: 'easeInOut' }}
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
