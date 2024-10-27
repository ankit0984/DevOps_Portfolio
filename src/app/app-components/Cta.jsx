import React from 'react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function Cta() {
  return (
    <section className="py-24 bg-tertiary">
      <div className="container mx-auto">
        <div className="flex flex-col items-center">
          <h2 className="font-semibold text-3xl max-w-xl text-center mb-8">
            Prepared to turn ideas into reality? I&apos;am here to help
          </h2>
          <Link href={'/contact'}>
            <Button>Contact me</Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
