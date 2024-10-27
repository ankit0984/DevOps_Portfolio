'use client'
import { useState, useEffect, useMemo } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Download, Moon, Sun } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Logo from './Logo'
import MobileNav from './MobileNav'

export default function Navbar() {
  const [isSticky, setIsSticky] = useState(false)
  const [theme, setTheme] = useState('system')
  const [activeSection, setActiveSection] = useState('')
  const pathname = usePathname()

  // Memoize the links array
  const links = useMemo(
    () => [
      { name: 'Home', href: '#home' },
      { name: 'About', href: '#about' },
      { name: 'Skills', href: '#skills' },
      { name: 'Projects', href: '#projects' },
      { name: 'Contact', href: '#contact' },
    ],
    []
  ) // Empty dependency array since links are static

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Smooth scroll handler
  const handleScroll = (e, href) => {
    e.preventDefault()

    if (href.startsWith('#') && pathname === '/') {
      const element = document.getElementById(href.substring(1))
      if (element) {
        const navHeight = 80
        const elementPosition = element.getBoundingClientRect().top
        const offsetPosition = elementPosition + window.pageYOffset - navHeight

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        })
      }
    } else {
      window.location.href = href.startsWith('#') ? '/' + href : href
    }
  }

  // Setup intersection observer for sections
  useEffect(() => {
    if (pathname !== '/') {
      return
    }

    const sectionIds = links
      .map((link) => link.href)
      .filter((href) => href.startsWith('#'))
      .map((href) => href.substring(1))

    const observerOptions = {
      rootMargin: '-80px 0px -50% 0px',
      threshold: 0,
    }

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection('#' + entry.target.id)
        }
      })
    }

    const observer = new IntersectionObserver(observerCallback, observerOptions)

    sectionIds.forEach((id) => {
      const element = document.getElementById(id)
      if (element) {
        observer.observe(element)
      }
    })

    // Check if we're at the top of the page
    const handleScrollForHome = () => {
      if (window.scrollY < 100) {
        setActiveSection('/')
      }
    }

    window.addEventListener('scroll', handleScrollForHome)

    return () => {
      sectionIds.forEach((id) => {
        const element = document.getElementById(id)
        if (element) {
          observer.unobserve(element)
        }
      })
      window.removeEventListener('scroll', handleScrollForHome)
    }
  }, [links, pathname])

  // Update active section when pathname changes
  useEffect(() => {
    if (pathname !== '/') {
      setActiveSection(pathname)
    }
  }, [pathname])

  const handleDownloadCV = () => {
    const link = document.createElement('a')
    link.href =
      'https://cdn.sanity.io/files/r4bu79zv/book-shop/728bd03e2cdab52768afd106ef6080dd26215c10.pdf'
    link.download = 'Ankit_Kumar_CV.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const isLinkActive = (href) => {
    if (pathname === '/') {
      if (href === '/') {
        return activeSection === '/' || !activeSection
      }
      return href === activeSection
    }

    if (href.startsWith('#')) {
      return false
    }
    return href === pathname
  }

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 ${
        isSticky
          ? 'bg-background/80 backdrop-blur-md shadow-md'
          : 'bg-transparent'
      } transition-all duration-300`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
    >
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-20">
          <motion.div
            className="flex-shrink-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <Link
              href="/"
              className="text-2xl sm:text-3xl font-bold text-primary"
            >
              <Logo />
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex flex-grow justify-center">
            <div className="flex items-baseline space-x-1 sm:space-x-4">
              {links.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleScroll(e, link.href)}
                  className={`px-4 py-3 rounded-full text-base font-medium transition-colors duration-200 ${
                    isLinkActive(link.href)
                      ? 'text-primary bg-primary/20'
                      : 'text-foreground hover:bg-primary/10'
                  }`}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Desktop Buttons */}
          <div className="hidden lg:flex items-center space-x-2">
            <Button
              variant=""
              className="flex items-center h-10 rounded-md"
              onClick={handleDownloadCV}
            >
              Download CV
              <Download className="mr-2 h-4 w-4" />
            </Button>
          </div>

          {/* Mobile and Tablet menu button */}
          <div className="lg:hidden">
            <MobileNav
              links={links}
              activeSection={activeSection}
              handleScroll={handleScroll}
              theme={theme}
              setTheme={setTheme}
              handleDownloadCV={handleDownloadCV}
              pathname={pathname}
              isLinkActive={isLinkActive}
            />
          </div>
        </div>
      </div>
    </motion.nav>
  )
}
