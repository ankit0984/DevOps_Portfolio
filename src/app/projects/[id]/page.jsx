'use client'
import { useParams } from 'next/navigation'
import { motion } from 'framer-motion'
import { workData } from '@/app/Data/data'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowLeft, Github, Globe, Trophy } from 'lucide-react'

export default function ProjectDetails() {
  const { id } = useParams()
  const project = workData.find(p => p.id === id)

  if (!project) {
    return (    
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-2xl">Project not found</h1>
      </div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen py-24 px-4"
    >
      <div className="container mx-auto max-w-5xl">
        <Link href="/projects">
          <Button variant="ghost" className="mb-8 gap-2">
            <ArrowLeft className="w-4 h-4" />
            Back to Projects
          </Button>
        </Link>

        <div className="space-y-8">
          {/* Header */}
          <div className="flex flex-col gap-4">
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

          {/* Project Image */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="relative aspect-video rounded-xl overflow-hidden"
          >
            <Image
              src={project.image}
              alt={project.name}
              width={1200}
              height={675}
              className="object-cover"
              priority
            />
          </motion.div>

          {/* Project Links */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex gap-4"
          >
            {project.github && (
              <Button asChild>
                <Link href={project.github} target="_blank" className="gap-2">
                  <Github className="w-4 h-4" />
                  View Code
                </Link>
              </Button>
            )}
            {project.demo && (
              <Button asChild variant="outline">
                <Link href={project.demo} target="_blank" className="gap-2">
                  <Globe className="w-4 h-4" />
                  Live Demo
                </Link>
              </Button>
            )}
          </motion.div>

          {/* Project Description */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="prose dark:prose-invert max-w-none"
          >
            <h2 className="text-2xl font-semibold mb-4">Project Overview</h2>
            <div className="whitespace-pre-line text-muted-foreground">
              {project.longDescription}
            </div>
          </motion.div>

          {/* Technologies */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            <h2 className="text-2xl font-semibold mb-4">Technologies Used</h2>
            <div className="flex flex-wrap gap-2">
              {project.tech?.map((tech, index) => (
                <span
                  key={index}
                  className="px-3 py-1 rounded-full bg-primary/10 text-primary"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Achievements */}
          {project.achievements && (
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <h2 className="text-2xl font-semibold mb-4">Key Achievements</h2>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {project.achievements.map((achievement, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-4 rounded-lg bg-card"
                  >
                    <Trophy className="w-5 h-5 text-primary mt-1" />
                    <p className="text-sm">{achievement}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </motion.div>
  )
}
