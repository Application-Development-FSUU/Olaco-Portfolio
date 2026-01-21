'use client'

import { motion } from 'framer-motion'
import { Mail, Linkedin, Facebook, Instagram } from 'lucide-react'

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
          className="p-8 bg-gradient-to-br from-card to-background border border-border rounded-lg"
        >
          <p className="text-foreground/80 font-light text-lg">
            I'm always interested in hearing about new opportunities and collaborations.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
