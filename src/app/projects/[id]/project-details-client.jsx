'use client'

import { useRef, useEffect, useState } from 'react'
import { motion, useInView, useScroll } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowLeft, Github, Globe, Trophy, ArrowUp, Calendar, Tag, Boxes, CheckCheck, Anchor } from 'lucide-react'

// Animation variants for staggered animations
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.1 * i,
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
}

export default function ProjectDetailsClient({ project }) {
  const [showScrollTop, setShowScrollTop] = useState(false)
  const { scrollYProgress } = useScroll()
//   const containerRef = useRef(null)

  // Use refs and inView for more efficient animations
  const headerRef = useRef(null)
  const imageRef = useRef(null)
  const linksRef = useRef(null)
  const descriptionRef = useRef(null)
  const techRef = useRef(null)
  const achievementsRef = useRef(null)

  const headerInView = useInView(headerRef, { once: true, amount: 0.3 })
  const imageInView = useInView(imageRef, { once: true, amount: 0.1 })
  const linksInView = useInView(linksRef, { once: true, amount: 0.3 })
  const descriptionInView = useInView(descriptionRef, { once: true, amount: 0.3 })
  const techInView = useInView(techRef, { once: true, amount: 0.3 })
  const achievementsInView = useInView(achievementsRef, { once: true, amount: 0.3 })


  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === 'Escape') {
        window.location.href = '/projects'
      }
    }
    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen py-24 md:py-16 px-4">
      <div className="container mx-auto py-8 px-4">
        <Link href="/projects" aria-label="Back to Projects">
          <Button variant="ghost" className="mb-8 gap-2">
            <ArrowLeft className="w-4 h-4" aria-hidden="true" />
            <span>Back to Projects</span>
          </Button>
        </Link>
        <div className="flex flex-col mb-4 gap-4">
          <motion.h1
            className="text-4xl font-bold"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            {project.name}
          </motion.h1>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex gap-2"
          >
            <span className="px-3 py-1 rounded-full bg-primary/10 text-primary">
              {project.category}
            </span>
          </motion.div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-8 space-y-8">
            {/* Hero Image */}
            <motion.div
              ref={imageRef}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={
                imageInView
                  ? { opacity: 1, scale: 1 }
                  : { opacity: 0, scale: 0.95 }
              }
              transition={{ duration: 0.6 }}
            >
              <Image
                src={project.image || '/placeholder.svg'}
                alt={project.name}
                width={900}
                height={900}
                layout="intrinsic" // Maintains original aspect ratio
                className="relative rounded-2xl overflow-hidden shadow-2xl"
                onError={(e) => {
                  e.target.src = '/placeholder.svg'
                }}
              />
            </motion.div>

            {/* Project Description */}
            <motion.div
              ref={descriptionRef}
              initial={{ opacity: 0, y: 20 }}
              animate={
                descriptionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
              }
              transition={{ duration: 0.5 }}
              className="prose dark:prose-invert max-w-none bg-white rounded-2xl p-8 shadow-lg"
            >
              <h2 className="text-2xl font-semibold mb-4">Project Overview</h2>
              <div className="whitespace-pre-line text-muted-foreground text-justify">
                {project.description}
              </div>
            </motion.div>
            {/* Key_features */}
            <motion.div
              ref={descriptionRef}
              initial={{ opacity: 0, y: 20 }}
              animate={
                descriptionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
              }
              transition={{ duration: 0.5 }}
              className="prose dark:prose-invert max-w-none bg-white rounded-2xl p-8 shadow-lg"
            >
              <h2 className="text-2xl font-semibold mb-4">Key Features:</h2>
              <div className="whitespace-pre-line text-muted-foreground">
                {project.Key_Features && (
                  <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                    {project.Key_Features.slice(0, 5).map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                )}
              </div>
            </motion.div>

            {/* Achievements */}
            {project.achievements && (
              <motion.div
                ref={achievementsRef}
                initial={{ opacity: 0, y: 20 }}
                animate={
                  achievementsInView
                    ? { opacity: 1, y: 0 }
                    : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.5 }}
                className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg"
              >
                <h2 className="text-2xl font-semibold mb-6">
                  Key Achievements
                </h2>
                <div className="grid gap-4">
                  {project.achievements.map((achievement, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-4 p-4 rounded-xl bg-gray-50 dark:bg-gray-700/50 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                    >
                      <Trophy className="w-5 h-5 text-primary mt-1" />
                      <p className="text-sm">{achievement}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4 space-y-8">
            {/* Project Info Card */}
            <motion.div
              ref={headerRef}
              initial={{ opacity: 0, y: 20 }}
              animate={
                headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
              }
              className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg sticky top-24"
            >
              <h1 className="text-3xl font-bold mb-4">{project.name}</h1>

              {/* Category */}
              <div className="flex items-center gap-2 mb-6">
                <Tag className="w-4 h-4 text-primary" />
                <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm">
                  {project.category}
                </span>
                <span className="flex px-3 py-1 rounded-full bg-primary/10 text-primary text-sm">
                  {project.status === 'Completed' ? (
                    <CheckCheck className="w-4 h-4 text-primary m-1" />
                  ) : (
                    <Anchor className="w-4 h-4 text-primary m-1" />
                  )}
                  {project.status}
                </span>
              </div>

              {/* Project Links */}
              <div className="flex flex-col gap-3 mb-8">
                {project.github && (
                  <Button
                    asChild
                    variant="outline"
                    className="w-full justify-start gap-2 hover:scale-102 transition-transform"
                  >
                    <Link
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="w-4 h-4" aria-hidden="true" />
                      <span>View Source Code</span>
                    </Link>
                  </Button>
                )}
                {project.demo && (
                  <Button
                    asChild
                    className="w-full justify-start gap-2 hover:scale-102 transition-transform"
                  >
                    <Link
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Globe className="w-4 h-4" aria-hidden="true" />
                      <span>Live Demo</span>
                    </Link>
                  </Button>
                )}
              </div>

              {/* Technologies */}
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Boxes className="w-4 h-4 text-primary" />
                  <h2 className="font-semibold">Technologies</h2>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.tech?.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 text-sm rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors cursor-default"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll to top button */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: showScrollTop ? 1 : 0 }}
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 p-3 bg-primary text-primary-foreground rounded-full shadow-lg hover:scale-110 transition-transform"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-5 h-5" />
      </motion.button>
    </div>
  )
}
