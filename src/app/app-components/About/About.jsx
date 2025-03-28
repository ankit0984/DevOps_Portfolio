'use client'

import React from 'react'
import Image from 'next/image'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { infoData, qualificationData, skillData } from '@/app/Data/data'
import { GraduationCap, Briefcase } from 'lucide-react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function About() {
  const getData = (arr, title) => {
    return arr.find((item) => item.title === title)
  }

  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
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
    <section 
      id="about" 
      className="py-8 md:py-12 lg:py-24 min-h-screen"
      ref={sectionRef}
    >
      <motion.div 
        className="container mx-auto px-4"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.h2 
          className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 md:mb-8 lg:mb-16 text-center"
          variants={itemVariants}
        >
          About me
        </motion.h2>
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          <motion.div 
            className="lg:flex-1 flex justify-center items-center"
            variants={itemVariants}
          >
            <motion.div 
              className="relative w-[300px] h-[300px] sm:w-[350px] sm:h-[350px] md:w-[450px] md:h-[450px] rounded-full overflow-hidden"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src="/assets/about/myimg.png"
                alt="Developer"
                fill
                className="rounded-full object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority
              />
            </motion.div>
          </motion.div>
          <motion.div 
            className="flex-1"
            variants={itemVariants}
          >
            <Tabs defaultValue="personal" className="w-full">
              <TabsList className="w-full grid grid-cols-3 mb-8 md:mb-12 lg:max-w-[520px] mx-auto lg:mx-0">
                <TabsTrigger className="text-sm md:text-base" value="personal">
                  Personal Info
                </TabsTrigger>
                <TabsTrigger
                  className="text-sm md:text-base"
                  value="qualifications"
                >
                  Qualifications
                </TabsTrigger>
                <TabsTrigger className="text-sm md:text-base" value="skills">
                  Skills
                </TabsTrigger>
              </TabsList>
              <div className="mt-6 md:mt-8 lg:mt-12">
                {/* Personal Info Tab */}
                <TabsContent value="personal">
                  <motion.div
                    className="text-center lg:text-left"
                    variants={itemVariants}
                  >
                    <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-4">
                      Dedicated DevOps Engineer
                    </h3>
                    <p className="text-sm md:text-base lg:text-lg text-justify mb-6">
                      As an enthusiastic DevOps engineer, I&apos;m passionate
                      about optimizing software development processes and
                      enhancing system reliability. With a strong foundation in
                      Python, Git, and Linux, I leverage cloud technologies and
                      containerization to streamline workflows. My dedication to
                      staying current with the latest DevOps practices drives me
                      to contribute effectively to innovative projects in cloud
                      computing and system optimization.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                      {infoData.map((item, id) => (
                        <motion.div
                          key={id}
                          className="flex items-center gap-x-4"
                          variants={itemVariants}
                        >
                          <div className="text-primary">{item.icon}</div>
                          <div className="text-sm md:text-base">
                            {item.text}
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </TabsContent>
                {/* Qualifications Tab */}
                <TabsContent value="qualifications">
                  <motion.div
                    className="text-center lg:text-left"
                    variants={itemVariants}
                  >
                    <div className="grid md:grid-cols-2 gap-8">
                      {/* Experience */}
                      <motion.div
                        className="flex flex-col gap-y-6"
                        variants={itemVariants}
                      >
                        <div className="flex gap-x-4 items-center text-lg md:text-xl text-primary">
                          <Briefcase />
                          <h4 className="capitalize font-medium">
                            {getData(qualificationData, 'Experience').title}
                          </h4>
                        </div>
                        <div className="flex flex-col gap-y-6">
                          {getData(qualificationData, 'Experience').data.map(
                            (item, id) => {
                              const { company, position, year } = item
                              return (
                                <motion.div
                                  key={id}
                                  className="flex gap-x-4 group"
                                  variants={itemVariants}
                                >
                                  <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                    <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                                  </div>
                                  <div>
                                    <div className="font-semibold text-base md:text-lg mb-1">
                                      {company}
                                    </div>
                                    <div className="text-sm md:text-base text-muted-foreground mb-2">
                                      {position}
                                    </div>
                                    <div className="text-sm font-medium">
                                      {year}
                                    </div>
                                  </div>
                                </motion.div>
                              )
                            }
                          )}
                        </div>
                      </motion.div>
                      {/* Education */}
                      <motion.div
                        className="flex flex-col gap-y-6"
                        variants={itemVariants}
                      >
                        <div className="flex gap-4 items-center text-lg md:text-xl text-primary">
                          <GraduationCap size={20} />
                          <h4 className="capitalize font-medium">
                            {getData(qualificationData, 'Education').title}
                          </h4>
                        </div>
                        <div className="flex flex-col gap-y-6">
                          {getData(qualificationData, 'Education').data.map(
                            (item, id) => {
                              const { university, qualification, year } = item
                              return (
                                <motion.div
                                  key={id}
                                  className="flex gap-x-4 group"
                                  variants={itemVariants}
                                >
                                  <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                    <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                                  </div>
                                  <div>
                                    <div className="font-semibold text-base md:text-lg mb-1">
                                      {university}
                                    </div>
                                    <div className="text-sm md:text-base text-muted-foreground mb-2">
                                      {qualification}
                                    </div>
                                    <div className="text-sm font-medium">
                                      {year}
                                    </div>
                                  </div>
                                </motion.div>
                              )
                            }
                          )}
                        </div>
                      </motion.div>
                    </div>
                  </motion.div>
                </TabsContent>
                {/* Skills Tab */}
                <TabsContent value="skills">
                  <motion.div
                    className="text-center lg:text-left"
                    variants={itemVariants}
                  >
                    <div className="mb-8">
                      <h4 className="text-lg md:text-xl font-semibold mb-2">
                        Skills
                      </h4>
                      <div className="border-b border-border mb-4"></div>
                      <div className="flex flex-wrap justify-center lg:justify-start gap-3">
                        {getData(skillData, 'Skills').data.map(
                          (item, index) => {
                            const { name } = item
                            return (
                              <motion.div
                                key={index}
                                className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs md:text-sm"
                                variants={itemVariants}
                              >
                                {name}
                              </motion.div>
                            )
                          }
                        )}
                      </div>
                    </div>
                    {/* Tools list */}
                    <div>
                      <h4 className="text-lg md:text-xl font-semibold mb-2">
                        Tools
                      </h4>
                      <div className="border-b border-border mb-4"></div>
                      <div className="flex flex-wrap justify-center lg:justify-start gap-4 md:gap-6">
                        {getData(skillData, 'Tools').data.map((item, index) => {
                          const { imgPath } = item
                          return (
                            <motion.div
                              key={index}
                              className="w-[40px] h-[40px]"
                              variants={itemVariants}
                            >
                              <Image
                                src={imgPath}
                                alt=""
                                width={40}
                                height={40}
                                priority
                              />
                            </motion.div>
                          )
                        })}
                      </div>
                    </div>
                  </motion.div>
                </TabsContent>
              </div>
            </Tabs>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
