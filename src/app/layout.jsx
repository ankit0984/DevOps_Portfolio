import { Outfit } from 'next/font/google'
import './globals.css'
// import Header from '@/app/app-components/Header'
import Header from '@/app/app-components/Navbar/Nav'
import Footer from '@/app/app-components/Footer'
import { ThemeProvider } from '@/components/ui/theme-provider'

const outfit = Outfit({ subsets: ['latin'] })

export const metadata = {
  title: 'Ankit Kumar',
  description: 'Portfolio website of Ankit Kumar',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={outfit.className}>
        <ThemeProvider attribute="class" defaultTheme="light">
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
