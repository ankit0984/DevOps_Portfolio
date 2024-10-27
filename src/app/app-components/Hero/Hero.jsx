import Image from 'next/image'
import { Button } from '@/components/ui/button'
import Social from '../Navbar/Social'
import Link from 'next/link'
import { Download, Send, Terminal } from 'lucide-react'

const TechBadge = ({ text }) => (
  <span className="bg-secondary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
    {text}
  </span>
)

const Corner = ({ className }) => (
  <div className={`absolute w-12 h-12 ${className}`}>
    <div className="absolute w-full h-[2px] bg-primary/50" />
    <div className="absolute w-[2px] h-full bg-primary/50" />
    <div className="absolute w-3 h-3 rounded-full bg-primary/30 animate-pulse" />
  </div>
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

  return (
    <section
      id="home"
      className="flex items-center justify-center mx-auto p-8 py-8 md:py-16 lg:py-24 min-h-[90vh] mt-20"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row justify-between gap-8 lg:gap-12 items-center">
          <div className="flex max-w-[650px] flex-col justify-center mx-auto lg:mx-0 text-center lg:text-left">
            <div className="flex items-center gap-2 justify-center lg:justify-start mb-4">
              <Terminal size={20} className="text-primary" />
              <span className="text-sm uppercase font-semibold text-primary tracking-[4px]">
                DevOps Engineer
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 lg:mb-6 balance">
              Hi, I&apos;m <span className="text-primary">Ankit Kumar</span>
            </h1>

            <div className="flex flex-wrap gap-2 justify-center lg:justify-start mb-4 lg:mb-6">
              {techStack.map((tech) => (
                <TechBadge key={tech} text={tech} />
              ))}
            </div>

            <p className="text-base md:text-lg mb-6 lg:mb-8 text-muted-foreground balance">
              Experienced DevOps Engineer specializing in automating deployment
              pipelines, orchestrating containerized applications, and
              implementing infrastructure as code. Building robust CI/CD
              workflows and managing cloud infrastructure to deliver scalable,
              reliable solutions.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start mb-6 lg:mb-8">
              <Link href="#contact">
                <Button className="w-full sm:w-auto gap-x-2 shadow-lg">
                  Contact me <Send size={16} />
                </Button>
              </Link>
              <Link href="https://cdn.sanity.io/files/r4bu79zv/book-shop/728bd03e2cdab52768afd106ef6080dd26215c10.pdf">
                <Button
                  variant="secondary"
                  className="w-full sm:w-auto gap-x-2"
                >
                  Download CV <Download size={18} />
                </Button>
              </Link>
            </div>

            <Social
              containerStyles="flex gap-x-6 justify-center lg:justify-start"
              iconStyles="text-foreground text-[30px] hover:text-primary transition-all"
            />
          </div>

          <div className="relative w-full max-w-[400px] lg:max-w-[500px] hidden sm:block order-first lg:order-last mt-8 lg:mt-0">
            <div className="relative w-[300px] h-[300px] sm:w-[350px] sm:h-[350px] md:w-[450px] md:h-[450px] rounded-full overflow-hidden mx-auto group">
              <Corner className="top-0 left-0 origin-top-left rotate-180" />
              <Corner className="top-0 right-0 origin-top-right -rotate-90" />
              <Corner className="bottom-0 left-0 origin-bottom-left rotate-90" />
              <Corner className="bottom-0 right-0 origin-bottom-right" />

              <div className="absolute inset-4 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 blur-2xl animate-pulse" />

              <div className="absolute inset-0 rounded-full border border-primary/20 animate-spin-slow" />

              <div className="absolute inset-4 flex items-center justify-center">
                <Image
                  src="/assets/about/myimg.png"
                  alt="Ankit Kumar - DevOps Engineer"
                  height={450}
                  width={450}
                  className="rounded-full transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 640px) 300px, (max-width: 768px) 350px, 450px"
                  priority
                />
              </div>
            </div>
          </div>
        </div>

        <div className="hidden md:flex justify-center mt-8 lg:mt-12">
          <div className="w-[30px] h-[50px] border-2 border-primary rounded-full flex justify-center p-2">
            <div className="w-2 h-2 bg-primary rounded-full animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  )
}
