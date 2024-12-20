'use client'
import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { ArrowLeft, Github, Globe } from 'lucide-react'
import { workData } from '@/app/Data/data'

export default function Projects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const cardVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen py-24 px-4"
    >
      <div className="container mx-auto max-w-7xl">
        <div className="flex items-center justify-between mb-12">
          <div>
            <Link href="/">
              <Button variant="ghost" className="gap-2">
                <ArrowLeft className="w-4 h-4" />
                Back to Home
              </Button>
            </Link>
            <h1 className="text-4xl font-bold mt-4">My Projects</h1>
            <p className="text-muted-foreground mt-2">
              A collection of my latest work and personal projects
            </p>
          </div>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {workData.map((project, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="group relative bg-card rounded-xl overflow-hidden shadow-lg h-[400px] flex flex-col"
            >
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.name}
                  width={400}
                  height={300}
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              
              <div className="flex-1 p-6 flex flex-col">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
                  <p className="text-muted-foreground text-sm line-clamp-3">
                    {project.description}
                  </p>
                </div>

                <div className="mt-4">
                  <span className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary">
                    {project.category}
                  </span>
                </div>

                <div className="mt-4 flex gap-3">
                  <Link href={`/projects/${project.id}`} className="flex-1">
                    <Button className="w-full">View Details</Button>
                  </Link>
                  {project.github && (
                    <Button variant="outline" size="icon" asChild>
                      <Link href={project.github} target="_blank">
                        <Github className="w-4 h-4" />
                      </Link>
                    </Button>
                  )}
                  {project.demo && (
                    <Button variant="outline" size="icon" asChild>
                      <Link href={project.demo} target="_blank">
                        <Globe className="w-4 h-4" />
                      </Link>
                    </Button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  )
}
