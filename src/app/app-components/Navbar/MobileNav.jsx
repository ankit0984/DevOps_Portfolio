'use client'

import React from 'react'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { AlignJustify, Download } from 'lucide-react'
import Social from './Social'
import { Button } from '@/components/ui/button'
import Logo from './Logo'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const links = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
]

export default function MobileNav({ handleDownloadCV }) {
  const pathname = usePathname()

  return (
    <Sheet>
      <SheetTrigger>
        <AlignJustify className="h-6 w-6" />
        <span className="sr-only">Toggle menu</span>
      </SheetTrigger>

      <SheetContent side="right" className="w-[300px] sm:w-[400px] p-6">
        <SheetHeader>
          <SheetTitle className="text-2xl font-bold">
            <Logo />
          </SheetTitle>
        </SheetHeader>
        <div className="py-6">
          <div className="flex flex-col space-y-4">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`px-4 py-3 rounded-md text-lg font-medium ${
                  pathname === link.href
                    ? 'text-primary bg-primary/20'
                    : 'text-foreground hover:bg-primary/10'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
          <div className="mt-6 space-y-4">
            <Button
              variant="outline"
              size="lg"
              className="w-full flex items-center justify-center"
              onClick={handleDownloadCV}
            >
              <Download className="mr-2 h-5 w-5" /> Download CV
            </Button>
          </div>
        </div>
        <div className="absolute bottom-8 left-6 right-6 mb-6">
          <div className="flex justify-center space-x-6">
            <Social containerStyles="flex gap-x-6" iconStyles="text-2xl" />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}
