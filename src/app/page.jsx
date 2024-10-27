import Hero from '@/app/app-components/Hero/Hero'
import About from '@/app/app-components/About/About'
import Services from '@/app/app-components/Skills/services'
import Work from '@/app/app-components/Projects/Work'
import Reviews from '@/app/app-components/Reviews/Reviews'
import Cta from '@/app/app-components/Cta'
import ContactPage from './app-components/Contact/Contact'

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <Work />
      {/* <Reviews /> */}
      <ContactPage />
      {/* <Cta /> */}
    </main>
  )
}
