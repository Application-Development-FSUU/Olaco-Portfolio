'use client'

import { motion } from 'framer-motion'
import { Mail, Linkedin, Facebook, Instagram } from 'lucide-react'
import { useState, useEffect } from 'react'
import emailjs from '@emailjs/browser'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { toast } from 'sonner'

const socialLinks = [
  {
    id: 1,
    icon: Linkedin,
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/samanthanicoleolaco',
    color: 'hover:text-blue-400',
  },
  {
    id: 2,
    icon: Facebook,
    label: 'Facebook',
    href: 'https://www.facebook.com/samanthanicoleolaco',
    color: 'hover:text-blue-500',
  },
  {
    id: 3,
    icon: Instagram,
    label: 'Instagram',
    href: 'https://www.instagram.com/oh_samuelle',
    color: 'hover:text-pink-500',
  },
  {
    id: 4,
    icon: Mail,
    label: 'Email',
    href: 'mailto:iamsamanthanicoleolaco@gmail.com',
    color: 'hover:text-primary',
  },
]

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [isLoading, setIsLoading] = useState(false)

  // Initialize EmailJS
  useEffect(() => {
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
    if (!publicKey) {
      console.warn('EmailJS public key is not set. Please check your .env.local file.')
    } else {
      emailjs.init(publicKey)
    }
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    if (!formData.name || !formData.email || !formData.message) {
      toast.error('Please fill in all fields')
      return
    }

    // Validate environment variables
    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY

    if (!serviceId || !templateId || !publicKey) {
      toast.error('Email configuration is missing. Please check your .env.local file.')
      console.error('Missing EmailJS configuration:', {
        serviceId: !serviceId ? 'missing' : 'present',
        templateId: !templateId ? 'missing' : 'present',
        publicKey: !publicKey ? 'missing' : 'present',
      })
      return
    }

    setIsLoading(true)
    try {
      const response = await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: 'samantha.olaco@urios.edu.ph',
        }
      )

      if (response.status === 200) {
        toast.success('Message sent successfully!')
        setFormData({
          name: '',
          email: '',
          message: '',
        })
      } else {
        toast.error('Failed to send message')
      }
    } catch (error: any) {
      console.error('EmailJS Error:', error)
      console.error('Error Details:', {
        text: error.text,
        status: error.status,
        message: error.message,
      })
      
      if (error.text === 'The public key is required. Visit https://dashboard.emailjs.com/admin/account') {
        toast.error('Public key is missing or invalid. Check your .env.local file.')
      } else if (error.text) {
        toast.error(error.text)
      } else if (error.status === 0) {
        toast.error('Failed to send. Check your Template ID and Public Key in .env.local')
      } else if (error.message) {
        toast.error(error.message)
      } else {
        toast.error('An error occurred while sending your message')
      }
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section id="contact" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20">
      <div className="max-w-4xl w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: '-100px' }}
          className="mb-12"
        >
          <h2 className="text-5xl md:text-6xl font-light mb-4">Let's Connect</h2>
          <p className="text-xl text-foreground/70 font-light">Feel free to reach out and say hello!</p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="flex justify-center gap-8 md:gap-12 mb-12 flex-wrap"
        >
          {socialLinks.map((social) => {
            const Icon = social.icon
            return (
              <motion.a
                key={social.id}
                href={social.href}
                target={social.label !== 'Email' ? '_blank' : undefined}
                rel={social.label !== 'Email' ? 'noopener noreferrer' : undefined}
                variants={itemVariants}
                className="group"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className={`p-6 bg-gradient-to-br from-card to-background border border-border rounded-full ${social.color} transition-all duration-300 group-hover:border-primary group-hover:shadow-xl group-hover:shadow-primary/20`}>
                  <Icon size={32} className="transition-colors duration-300" />
                </div>
                <p className="mt-3 text-sm text-foreground/70 group-hover:text-primary transition-colors duration-300">{social.label}</p>
              </motion.a>
            )
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true, margin: '-100px' }}
          className="p-8 bg-gradient-to-br from-card to-background border border-border rounded-lg max-w-2xl mx-auto"
        >
          <h3 className="text-2xl font-light mb-6">Send me a message</h3>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your name"
                  required
                  className="bg-background border-border"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="your.email@example.com"
                  required
                  className="bg-background border-border"
                />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Message
              </label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Your message here..."
                required
                className="bg-background border-border min-h-40 resize-none"
              />
            </div>

            <Button
              type="submit"
              disabled={isLoading}
              className="w-full md:w-auto"
            >
              {isLoading ? 'Sending...' : 'Send Message'}
            </Button>
          </form>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true, margin: '-100px' }}
          className="mt-8 p-8 bg-gradient-to-br from-card to-background border border-border rounded-lg"
        >
          <p className="text-foreground/80 font-light text-lg">
            I'm always interested in hearing about new opportunities and collaborations.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
