'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import toast, { Toaster } from 'react-hot-toast'
import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Twitter,
  Loader2,
  Send,
} from 'lucide-react'
import { motion } from 'framer-motion'

const formSchema = z.object({
  name: z.string().min(2, {
    message: 'Name must be at least 2 characters.',
  }),
  email: z.string().email({
    message: 'Please enter a valid email address.',
  }),
  subject: z.string().min(5, {
    message: 'Subject must be at least 5 characters.',
  }),
  message: z.string().min(10, {
    message: 'Message must be at least 10 characters.',
  }),
})

const contactInfo = {
  email: 'en.ankitkumarpandey@gmail.com',
  phone: '+91 9310126226',
  location: 'Naraina New Delhi, India',
  socials: {
    github: 'https://github.com/ankit0984',
    linkedin: 'https://linkedin.com/in/ankitkumar064',
    twitter: 'https://twitter.com/kumar94477',
  },
}

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
  })

  async function onSubmit(values) {
    setIsSubmitting(true)
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message')
      }

      toast.success(
        "Message sent! Thank you for your message. I'll get back to you soon.",
        {
          duration: 5000,
          position: 'bottom-center',
          icon: '✉️',
        }
      )
      form.reset()
    } catch (error) {
      toast.error('Failed to send message. Please try again later.', {
        duration: 5000,
        position: 'bottom-center',
        icon: '❌',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  }

  return (
    <motion.section
      initial="initial"
      animate="animate"
      id="contact"
      className="min-h-screen w-full bg-gradient-to-b from-background to-background/80 pt-20"
    >
      <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <motion.div {...fadeInUp} className="mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Get in Touch
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Have a question or want to work together? I&apos;d love to hear from
            you.
          </p>
        </motion.div>

        <motion.div
          {...fadeInUp}
          className="mt-16 rounded-2xl bg-card shadow-lg"
        >
          <div className="grid gap-8 p-8 lg:grid-cols-2 lg:p-12">
            {/* Contact Form */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-semibold">Send Me a Message</h2>
                <p className="mt-2 text-sm text-muted-foreground">
                  Fill out the form below and I&apos;ll get back to you as soon
                  as possible.
                </p>
              </div>

              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-6"
                >
                  <div className="grid gap-4 sm:grid-cols-2">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Name</FormLabel>
                          <FormControl>
                            <Input placeholder="John Doe" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input placeholder="john@example.com" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Subject</FormLabel>
                        <FormControl>
                          <Input placeholder="What's this about?" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Tell me about your project..."
                            className="min-h-[150px] resize-none"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button
                    type="submit"
                    className="w-full"
                    size="lg"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </Form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-semibold">Contact Information</h2>
                <p className="mt-2 text-sm text-muted-foreground">
                  Feel free to reach out through any of these channels.
                </p>
              </div>

              <div className="space-y-6">
                <motion.div
                  whileHover={{ x: 5 }}
                  className="flex items-start space-x-4"
                >
                  <div className="rounded-lg bg-primary/10 p-2">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium">Email</h3>
                    <a
                      href={`mailto:${contactInfo.email}`}
                      className="text-sm text-muted-foreground hover:text-primary"
                    >
                      {contactInfo.email}
                    </a>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ x: 5 }}
                  className="flex items-start space-x-4"
                >
                  <div className="rounded-lg bg-primary/10 p-2">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium">Phone</h3>
                    <a
                      href={`tel:${contactInfo.phone}`}
                      className="text-sm text-muted-foreground hover:text-primary"
                    >
                      {contactInfo.phone}
                    </a>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ x: 5 }}
                  className="flex items-start space-x-4"
                >
                  <div className="rounded-lg bg-primary/10 p-2">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium">Location</h3>
                    <p className="text-sm text-muted-foreground">
                      {contactInfo.location}
                    </p>
                  </div>
                </motion.div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Connect With Me</h3>
                <div className="flex space-x-4">
                  <motion.a
                    whileHover={{ y: -2 }}
                    href={contactInfo.socials.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-lg bg-primary/10 p-2 text-primary hover:bg-primary/20"
                  >
                    <Github className="h-6 w-6" />
                    <span className="sr-only">GitHub</span>
                  </motion.a>

                  <motion.a
                    whileHover={{ y: -2 }}
                    href={contactInfo.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-lg bg-primary/10 p-2 text-primary hover:bg-primary/20"
                  >
                    <Linkedin className="h-6 w-6" />
                    <span className="sr-only">LinkedIn</span>
                  </motion.a>

                  <motion.a
                    whileHover={{ y: -2 }}
                    href={contactInfo.socials.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-lg bg-primary/10 p-2 text-primary hover:bg-primary/20"
                  >
                    <Twitter className="h-6 w-6" />
                    <span className="sr-only">Twitter</span>
                  </motion.a>
                </div>
              </div>

              {/* Additional Info Card */}
              <div className="rounded-lg bg-primary/5 p-6">
                <h4 className="font-semibold">Looking for DevOps Services?</h4>
                <p className="mt-2 text-sm text-muted-foreground">
                  I specialize in CI/CD, containerization, cloud architecture,
                  and infrastructure automation. Let&apos;s discuss how I can
                  help optimize your development workflow.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      <Toaster />
    </motion.section>
  )
}
