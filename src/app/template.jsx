'use client'
import React from 'react'
import { motion } from 'framer-motion'
import useScrollProgress from '@/hooks/useScrollProgress'

const varients = {
  hidden: { opacity: 0 },
  enter: { opacity: 1 },
}

export default function Template({ children }) {
  const completion = useScrollProgress()
  return (
    <>
      <motion.main
        variants={varients}
        initial="hidden"
        animate="enter"
        transition={{ type: 'linear', delay: 0.2, duration: 0.4 }}
      >
        {children}
      </motion.main>
      {/* completion bar */}
      <span
        style={{ transform: `translateY(${completion - 100}%)` }}
        className="fixed z-50 bg-primary w-1 top-0 right-0 bottom-0 transition-all duration-700"
      ></span>
      <div className="h-[200px]"></div>
      {/*<div className="h-[140px] sm:h-[300px] md:h-[220px] lg:h-[280px]"></div>*/}
    </>
  )
}
