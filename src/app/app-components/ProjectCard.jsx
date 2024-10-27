import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Card, CardHeader } from '@/components/ui/card'
import { Github, Link2Icon } from 'lucide-react'
import { Badge } from '@/components/ui/badge'

export default function ProjectCard({ project }) {
  return (
    <Card className="group overflow-hidden relative h-auto">
      <CardHeader className="p-0">
        <div
          className="relative w-full h-[300px] flex items-center justify-center bg-tertiary xl:bg-work_project_bg xl:bg-[110%]
        xl:bg-no-repeat overflow-hidden"
        >
          <Image
            className="absolute bottom-0 shadow-2xl"
            src={project.image}
            alt=""
            width={247}
            height={250}
            priority
          />
          {/*button for links*/}
          <div className="absolute inset-0 flex items-center justify-center gap-x-4">
            <Link
              href={project.link}
              className="bg-secondary w-[54px] h-[54px] rounded-full flex justify-center items-center scale-0 opacity-0
                   group-hover:scale-100 group-hover:opacity-100 transition-all duration-200"
            >
              <Link2Icon className="text-white" />
            </Link>
            <Link
              href={project.github}
              className="bg-secondary w-[54px] h-[54px] rounded-full flex justify-center items-center scale-0 opacity-0
                   group-hover:scale-100 group-hover:opacity-100 transition-all duration-200"
            >
              <Github className="text-white" />
            </Link>
          </div>
        </div>
      </CardHeader>
      <CardHeader>
        <div className="h-auto px-8 py-6">
          <Badge className="uppercase text-sm font-medium mb-2 absolute top-4 left-5">
            {project.category}
          </Badge>
          <h4 className="h4 mb-1">{project.name}</h4>
          <p className="text-muted-foreground text-lg line-clamp-3">
            {project.description}
          </p>
        </div>
      </CardHeader>
    </Card>
  )
}
