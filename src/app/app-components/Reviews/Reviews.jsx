'use client'
import React from 'react'
import 'swiper/css'
import 'swiper/css/pagination'
import { Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import Image from 'next/image'

const reviewData = [
  {
    avatar: '/assets/reviews/avatar-1.png',
    name: 'Emily Johnson',
    job: 'Senior Fullstack Developer',
    review:
      'Fullstack development requires constant learning. Staying updated with frontend and backend technologies is crucial for success in this ever-evolving field.',
  },
  {
    avatar: '/assets/reviews/avatar-2.png',
    name: 'Michael Chen',
    job: 'DevOps Engineer',
    review:
      "Automation and continuous integration are key to streamlining development. Bridging development and operations is invaluable in today's fast-paced tech environment.",
  },
  {
    avatar: '/assets/reviews/avatar-3.png',
    name: 'Sarah Williams',
    job: 'Fullstack Developer',
    review:
      'Fullstack versatility opens many opportunities. From crafting UIs to optimizing databases, working across the entire stack is incredibly rewarding.',
  },
  {
    avatar: '/assets/reviews/avatar-4.png',
    name: 'Alex Rodriguez',
    job: 'Senior DevOps Specialist',
    review:
      'DevOps is a culture, not just tools. Fostering collaboration between development and operations significantly improves product quality and deployment frequency.',
  },
  {
    avatar: '/assets/reviews/avatar-5.png',
    name: 'Priya Patel',
    job: 'Fullstack Web Developer',
    review:
      "Balancing frontend user experience with backend performance drives me. It's satisfying to see a project come together from end to end.",
  },
  {
    avatar: '/assets/reviews/avatar-6.png',
    name: 'David Kim',
    job: 'Cloud DevOps Engineer',
    review:
      "Cloud DevOps emphasizes scalability and security. Designing and maintaining robust, cloud-native infrastructures is crucial in today's tech landscape.",
  },
]
export default function Reviews() {
  return (
    <section className="min-h-screen flex justify-center items-center">
      <div className="container mx-auto">
        <h2 className="section-title mb-12 text-center mx-auto">Reviews</h2>
        <Swiper
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1400: { slidesPerView: 3 },
          }}
          spaceBetween={30}
          modules={[Pagination]}
          pagination={{ clickable: true }}
          className="h-[350px]"
        >
          {reviewData.map((person, index) => {
            return (
              <SwiperSlide key={index}>
                <Card className="bg-tertiary p-8 min-h-[300px]">
                  <CardHeader className="p-0 mb-10">
                    <div className="flex items-center gap-x-4">
                      <Image
                        src={person.avatar}
                        alt=""
                        width={70}
                        height={70}
                        priority
                      />
                      <div className="flex flex-col">
                        <CardTitle>{person.name}</CardTitle>
                        <p>{person.job}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardDescription className="text-lg text-muted-foreground">
                    {person.review}
                  </CardDescription>
                </Card>
              </SwiperSlide>
            )
          })}
        </Swiper>
      </div>
    </section>
  )
}
