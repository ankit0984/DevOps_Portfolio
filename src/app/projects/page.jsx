'use client'
import React, { useState } from 'react'
import { Tabs, TabsTrigger, TabsList, TabsContent } from '@/components/ui/tabs'
import ProjectCard from '@/app/app-components/ProjectCard'

const workData = [
  {
    image: '/assets/work/1.png',
    category: 'Nextjs',
    name: 'E-commerce Platform',
    description:
      'Developed a high-performance e-commerce platform using Next.js and Node.js, featuring server-side rendering and optimized SEO.',
    link: '/ecommerce',
    github: '/github/ecommerce',
  },
  {
    image: '/assets/work/2.png',
    category: 'Fullstack',
    name: 'Social Media App',
    description:
      'Created a full-stack social media application with React, Node.js, and MongoDB, including real-time chat and notifications.',
    link: '/socialmedia',
    github: '/github/socialmedia',
  },
  {
    image: '/assets/work/3.png',
    category: 'DevOps',
    name: 'CI/CD Pipeline',
    description:
      'Implemented a CI/CD pipeline using Jenkins and Docker, automating the build, test, and deployment processes for multiple microservices.',
    link: '/cicd',
    github: '/github/cicd',
  },
  {
    image: '/assets/work/4.png',
    category: 'Nextjs',
    name: 'Inventory Management System',
    description:
      'Built a scalable inventory management system using React and GraphQL, with real-time updates and advanced reporting features.',
    link: '/inventory',
    github: '/github/inventory',
  },
  {
    image: '/assets/work/1.png',
    category: 'Nextjs',
    name: 'Blog Platform',
    description:
      'Developed a blog platform with Next.js and Markdown support, featuring dynamic routing and static site generation.',
    link: '/blog',
    github: '/github/blog',
  },
  {
    image: '/assets/work/2.png',
    category: 'Fullstack',
    name: 'Project Management Tool',
    description:
      'Built a project management tool using MERN stack, with features like task assignments, deadlines, and progress tracking.',
    link: '/projectmanagement',
    github: '/github/projectmanagement',
  },
  {
    image: '/assets/work/3.png',
    category: 'DevOps',
    name: 'Monitoring System',
    description:
      'Implemented a monitoring system using Prometheus and Grafana, providing real-time metrics and alerting for infrastructure.',
    link: '/monitoring',
    github: '/github/monitoring',
  },
  {
    image: '/assets/work/4.png',
    category: 'Nextjs',
    name: 'Portfolio Website',
    description:
      'Created a personal portfolio website using Next.js, showcasing projects, blogs, and contact information.',
    link: '/portfolio',
    github: '/github/portfolio',
  },
  {
    image: '/assets/work/1.png',
    category: 'Fullstack',
    name: 'E-learning Platform',
    description:
      'Developed an e-learning platform with React and Node.js, featuring video courses, quizzes, and progress tracking.',
    link: '/elearning',
    github: '/github/elearning',
  },
  {
    image: '/assets/work/2.png',
    category: 'DevOps',
    name: 'Infrastructure as Code',
    description:
      'Implemented infrastructure as code using Terraform and AWS, automating the provisioning and management of cloud resources.',
    link: '/iac',
    github: '/github/iac',
  },
  {
    image: '/assets/work/3.png',
    category: 'Nextjs',
    name: 'News Aggregator',
    description:
      'Built a news aggregator using Next.js and RSS feeds, providing real-time updates and categorization of news articles.',
    link: '/news',
    github: '/github/news',
  },
  {
    image: '/assets/work/4.png',
    category: 'Fullstack',
    name: 'Online Marketplace',
    description:
      'Created an online marketplace with React and Node.js, featuring product listings, user reviews, and payment integration.',
    link: '/marketplace',
    github: '/github/marketplace',
  },
  {
    image: '/assets/work/1.png',
    category: 'DevOps',
    name: 'Log Management System',
    description:
      'Implemented a log management system using ELK stack (Elasticsearch, Logstash, Kibana), providing centralized logging and analysis.',
    link: '/logmanagement',
    github: '/github/logmanagement',
  },
  {
    image: '/assets/work/2.png',
    category: 'Nextjs',
    name: 'Event Booking System',
    description:
      'Developed an event booking system using Next.js and Firebase, featuring real-time booking and notifications.',
    link: '/eventbooking',
    github: '/github/eventbooking',
  },
  {
    image: '/assets/work/3.png',
    category: 'Fullstack',
    name: 'Job Portal',
    description:
      'Built a job portal with React and Node.js, featuring job listings, resume uploads, and application tracking.',
    link: '/jobportal',
    github: '/github/jobportal',
  },
]
const uniqueCategories = [
  'all projects',
  ...new Set(workData.map((item) => item.category)),
]

export default function Projects() {
  const [category, setCategory] = useState('all projects')

  const filteredProjects = workData.filter((project) => {
    return category === 'all projects' ? project : project.category === category
  })

  return (
    <section className="min-h-screen pt-12 mt-20">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text center mx-auto">
          My Projects
        </h2>
        <Tabs defaultValue={category} className="mb-24 xl:mb-48">
          <TabsList
            className="w-full grid h-full md:grid-cols-4 lg:max-w-[640px]
          mb-12 mx-auto md:border"
          >
            {uniqueCategories.map((cat, index) => (
              <TabsTrigger
                onClick={() => setCategory(cat)}
                value={cat}
                key={index}
              >
                {cat}
              </TabsTrigger>
            ))}
          </TabsList>
          <div className="text-lg xl:mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4">
            {filteredProjects.map((project, index) => {
              return (
                <TabsContent key={index} value={category}>
                  <ProjectCard project={project} />
                </TabsContent>
              )
            })}
          </div>
        </Tabs>
      </div>
    </section>
  )
}
