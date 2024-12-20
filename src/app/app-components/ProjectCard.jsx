'use client'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Github, Globe } from 'lucide-react'

export default function ProjectCard({ project }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
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
          <Link href={project.link || '#'} className="flex-1">
            <Button className="w-full">View Details</Button>
          </Link>
          {project.github && (
            <Button variant="outline" size="icon" asChild>
              <Link href={project.github} target="_blank">
                <Github className="w-4 h-4" />
              </Link>
            </Button>
          )}
          {project.link && (
            <Button variant="outline" size="icon" asChild>
              <Link href={project.link} target="_blank">
                <Globe className="w-4 h-4" />
              </Link>
            </Button>
          )}
        </div>
      </div>
    </motion.div>
  )
}
