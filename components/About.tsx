'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  return (
    <section id="about" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20">
      <div className="max-w-7xl w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center"
        >
          {/* Left - Profile Image */}
          <motion.div variants={itemVariants} className="flex justify-center md:justify-start order-2 md:order-1">
            <div className="relative w-80 h-96 md:w-96 md:h-[28rem]">
              <div className="absolute -inset-4 rounded-2xl bg-gradient-to-b from-primary/40 to-primary/20 blur-3xl"></div>
              <div className="relative w-full h-full rounded-2xl border-2 border-primary overflow-hidden">
                <Image
                  src="/images/profile.png"
                  alt="Samantha Nicole Olaco"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div variants={itemVariants} className="space-y-6 order-1 md:order-2">
            <motion.h2 variants={itemVariants} className="text-5xl md:text-6xl font-light">
              Samantha Nicole Olaco
            </motion.h2>

            <motion.p variants={itemVariants} className="text-xl text-primary font-light">
              UI Designer / Web Developer
            </motion.p>

            <motion.p variants={itemVariants} className="text-lg text-foreground/80 font-light leading-relaxed">
              Samantha Nicole Olaco is a student developer focused on UI design and web development. She enjoys creating clean, modern, and visually engaging interfaces that balance aesthetics and functionality. Her work centers on thoughtful layouts, cohesive color systems, and subtle animations to deliver smooth and intuitive user experiences.
            </motion.p>

            <motion.p variants={itemVariants} className="text-lg text-foreground/80 font-light leading-relaxed">
              She continuously sharpens her skills through hands-on projects, exploring modern frontend tools and design practices while building real-world web solutions.
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
