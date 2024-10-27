import React from 'react'
import Social from '@/app/app-components/Navbar/Social'
export default function Footer() {
  return (
    <footer className="bg-secondary py-12">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-between">
          <Social
            containerStyles="flex gap-x-6 mx-auto xl:mx-0 mb-4"
            iconStyles="text-primary text-[20px] hover:text-white trasition-all"
          />
          <div className="text-muted-foreground">
            Copyright &copy; Ankit Kumar. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  )
}
