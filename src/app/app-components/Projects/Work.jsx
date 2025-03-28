'use client'
import { motion } from 'framer-motion'
import { workData } from '@/app/Data/data'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Github, Globe } from 'lucide-react'
import useEmblaCarousel from 'embla-carousel-react'
import { useCallback, useEffect, useState } from 'react'
import * as AspectRatio from '@radix-ui/react-aspect-ratio'

export default function Work() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start' })
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [scrollSnaps, setScrollSnaps] = useState([])

  const scrollTo = useCallback(
    (index) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  )

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    setScrollSnaps(emblaApi.scrollSnapList())
    emblaApi.on('select', onSelect)
    return () => emblaApi.off('select', onSelect)
  }, [emblaApi, onSelect])

  // Get the latest 6 projects for the carousel
  const latestProjects = workData.slice(0, 6)

  return (
    <div id="projects" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="container flex flex-col items-center"
      >
        <div className="flex flex-col items-center gap-4 mb-12 text-center">
          <span className="px-3 py-1 text-sm rounded-full bg-primary/10 text-primary">
            Portfolio
          </span>
          <h2 className="text-3xl font-bold sm:text-4xl">Latest Projects</h2>
          <p className="max-w-xl text-muted-foreground">
            Explore my recent work in DevOps and development, featuring automated pipelines,
            infrastructure as code, and cloud-native solutions.
          </p>
        </div>

        {/* Carousel */}
        <div className="w-full max-w-5xl overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {latestProjects.map((project) => (
              <div key={project.id} className="flex-[0_0_100%] min-w-0 sm:flex-[0_0_50%] lg:flex-[0_0_33.33%] pl-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="group relative flex flex-col h-full bg-card rounded-xl overflow-hidden border"
                >
                  <div className="relative">
                    <AspectRatio.Root ratio={16 / 9}>
                      <Image
                        src={project.image}
                        alt={project.name}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </AspectRatio.Root>
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <Link href={`/projects/${project.id}`}>
                        <Button variant="secondary">View Details</Button>
                      </Link>
                    </div>
                  </div>

                  <div className="flex flex-col flex-grow p-4">
                    <div className="flex-grow">
                      <span className="text-sm text-primary">{project.category}</span>
                      <h3 className="text-xl font-semibold mt-1">{project.name}</h3>
                      <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
                        {project.description}
                      </p>
                    </div>

                    <div className="flex gap-2 mt-4">
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
              </div>
            ))}
          </div>
        </div>

        {/* Carousel Navigation Dots */}
        <div className="flex justify-center gap-2 mt-4">
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === selectedIndex ? 'bg-primary' : 'bg-primary/20'
              }`}
            />
          ))}
        </div>

        {/* View All Projects Button */}
        <Link href="/projects" className="mt-12">
          <Button size="lg">View All Projects</Button>
        </Link>
      </motion.div>
    </div>
  )
}
