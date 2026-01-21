'use client'

import { motion } from 'framer-motion'
import { Mail, Linkedin, Facebook, Instagram, Heart } from 'lucide-react'

const currentYear = new Date().getFullYear()

export default function Footer() {
  const socialLinks = [
    {
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/samanthanicoleolaco',
      label: 'LinkedIn',
    },
    {
      icon: Facebook,
      href: 'https://www.facebook.com/samanthanicoleolaco',
      label: 'Facebook',
    },
    {
      icon: Instagram,
      href: 'https://www.instagram.com/oh_samuelle',
      label: 'Instagram',
    },
    {
      icon: Mail,
      href: 'mailto:iamsamanthanicoleolaco@gmail.com',
      label: 'Email',
    },
  ]

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex justify-center mb-8">
          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex gap-4">
              {socialLinks.map((link) => {
                const Icon = link.icon
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.label !== 'Email' ? '_blank' : undefined}
                    rel={link.label !== 'Email' ? 'noopener noreferrer' : undefined}
                    className="p-2 text-foreground/70 hover:text-primary hover:bg-primary/10 rounded-lg transition-all duration-300"
                    title={link.label}
                  >
                    <Icon size={20} />
                  </a>
                )
              })}
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-border my-8"></div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-center text-center md:text-left text-foreground/60 font-light text-sm"
        >
          <p>
            © {currentYear} Samantha Nicole Olaco. All rights reserved.
          </p>
          <div className="flex items-center gap-2 mt-4 md:mt-0">
            <span>Made with</span>
            <Heart size={16} className="text-primary fill-primary" />
            <span>for the web.</span>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
