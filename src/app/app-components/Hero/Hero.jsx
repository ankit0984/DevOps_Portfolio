'use client'

import Image from 'next/image'
import { Button } from '@/components/ui/button'
import Social from '../Navbar/Social'
import Link from 'next/link'
import { Download, Send, Terminal } from 'lucide-react'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const TechBadge = ({ text }) => (
  <motion.span 
    className="bg-secondary/10 text-primary px-3 py-1 rounded-full text-sm font-medium hover:bg-primary/20 transition-colors cursor-default"
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    {text}
  </motion.span>
)

const Corner = ({ className }) => (
  <motion.div 
    className={`absolute w-12 h-12 ${className}`}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5 }}
  >
    <motion.div 
      className="absolute w-full h-[2px] bg-primary/50"
      animate={{ scaleX: [1, 1.2, 1] }}
      transition={{ duration: 2, repeat: Infinity }}
    />
    <motion.div 
      className="absolute w-[2px] h-full bg-primary/50"
      animate={{ scaleY: [1, 1.2, 1] }}
      transition={{ duration: 2, repeat: Infinity }}
    />
    <motion.div 
      className="absolute w-3 h-3 rounded-full bg-primary/30"
      animate={{ scale: [1, 1.2, 1] }}
      transition={{ duration: 1.5, repeat: Infinity }}
    />
  </motion.div>
)

export default function Hero() {
  const techStack = [
    'AWS',
    'Docker',
    'Kubernetes',
    'Jenkins',
    'Terraform',
    'Git',
  ]

  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  }

  return (
    <section
      ref={sectionRef}
      id="home"
      className="flex items-center justify-center mx-auto p-8 py-8 md:py-16 lg:py-24 min-h-[90vh] mt-20"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row justify-between gap-8 lg:gap-12 items-center">
          <motion.div 
            className="flex max-w-[650px] flex-col justify-center mx-auto lg:mx-0 text-center lg:text-left"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <motion.div 
              className="flex items-center gap-2 justify-center lg:justify-start mb-4"
              variants={itemVariants}
            >
              <Terminal size={20} className="text-primary" />
              <span className="text-sm uppercase font-semibold text-primary tracking-[4px]">
                DevOps Engineer
              </span>
            </motion.div>

            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 lg:mb-6 balance"
              variants={itemVariants}
            >
              Hi, I&apos;m <span className="text-primary">Ankit Kumar</span>
            </motion.h1>

            <motion.div 
              className="flex flex-wrap gap-2 justify-center lg:justify-start mb-4 lg:mb-6"
              variants={itemVariants}
            >
              {techStack.map((tech) => (
                <TechBadge key={tech} text={tech} />
              ))}
            </motion.div>

            <motion.p 
              className="text-base md:text-lg mb-6 lg:mb-8 text-muted-foreground balance"
              variants={itemVariants}
            >
              Experienced DevOps Engineer specializing in automating deployment
              pipelines, orchestrating containerized applications, and
              implementing infrastructure as code. Building robust CI/CD
              workflows and managing cloud infrastructure to deliver scalable,
              reliable solutions.
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start mb-6 lg:mb-8"
              variants={itemVariants}
            >
              <Link href="#contact">
                <Button className="w-full sm:w-auto gap-x-2 shadow-lg hover:scale-105 transition-transform">
                  Contact me <Send size={16} />
                </Button>
              </Link>
              <Link href="https://cdn.sanity.io/files/r4bu79zv/book-shop/728bd03e2cdab52768afd106ef6080dd26215c10.pdf">
                <Button
                  variant="secondary"
                  className="w-full sm:w-auto gap-x-2 hover:scale-105 transition-transform"
                >
                  Download CV <Download size={18} />
                </Button>
              </Link>
            </motion.div>

            <motion.div 
              variants={itemVariants}
            >
              <Social
                containerStyles="flex gap-x-6 justify-center lg:justify-start"
                iconStyles="text-foreground text-[30px] hover:text-primary transition-all hover:scale-110"
              />
            </motion.div>
          </motion.div>

          <motion.div 
            className="relative w-full max-w-[400px] lg:max-w-[500px] hidden sm:block order-first lg:order-last mt-8 lg:mt-0"
            variants={itemVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <motion.div 
              className="relative w-[300px] h-[300px] sm:w-[350px] sm:h-[350px] md:w-[450px] md:h-[450px] rounded-full overflow-hidden mx-auto group"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <Corner className="top-0 left-0 origin-top-left rotate-180" />
              <Corner className="top-0 right-0 origin-top-right -rotate-90" />
              <Corner className="bottom-0 left-0 origin-bottom-left rotate-90" />
              <Corner className="bottom-0 right-0 origin-bottom-right" />

              <motion.div 
                className="absolute inset-4 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 blur-2xl"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
              />

              <motion.div 
                className="absolute inset-0 rounded-full border border-primary/20"
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              />

              <motion.div 
                className="absolute inset-4 flex items-center justify-center"
                variants={itemVariants}
              >
                <Image
                  src="/assets/about/myimg.png"
                  alt="Ankit Kumar - DevOps Engineer"
                  height={450}
                  width={450}
                  className="rounded-full transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 640px) 300px, (max-width: 768px) 350px, 450px"
                  priority
                />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        <motion.div 
          className="hidden md:flex justify-center mt-8 lg:mt-12"
          variants={itemVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div 
            className="w-[30px] h-[50px] border-2 border-primary rounded-full flex justify-center p-2"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <motion.div 
              className="w-2 h-2 bg-primary rounded-full"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
