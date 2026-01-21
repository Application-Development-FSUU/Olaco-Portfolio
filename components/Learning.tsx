'use client'

import { motion } from 'framer-motion'
import { CheckCircle } from 'lucide-react'

const learningItems = [
  {
    id: 1,
    title: 'React Fundamentals & Best Practices',
    description: 'Deep diving into hooks, state management, and component composition patterns',
  },
  {
    id: 2,
    title: 'JavaScript Improvements',
    description: 'Mastering modern ES6+ features, async patterns, and functional programming concepts',
  },
  {
    id: 3,
    title: 'Advanced Animations with Framer Motion',
    description: 'Creating smooth, engaging interactions and micro-interactions for better UX',
  },
  {
    id: 4,
    title: 'Building Real-World Systems',
    description: 'Developing production-ready applications with proper architecture and scalability',
  },
]

export default function Learning() {
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
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  }

  return (
    <section id="learning" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20 bg-gradient-to-b from-background via-background to-card/30">
      <div className="max-w-4xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: '-100px' }}
          className="mb-16 text-center"
        >
          <h2 className="text-5xl md:text-6xl font-light mb-4">Currently Learning</h2>
          <p className="text-xl text-foreground/70 font-light">Always growing, always improving</p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="space-y-4"
        >
          {learningItems.map((item) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              className="group flex gap-4 p-6 bg-gradient-to-r from-background to-card border border-border rounded-lg hover:border-primary transition-all duration-300 overflow-hidden relative"
            >
              {/* Hover glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              {/* Icon */}
              <div className="flex-shrink-0 relative z-10">
                <CheckCircle className="text-primary group-hover:text-accent transition-colors duration-300 mt-1" size={24} />
              </div>

              {/* Content */}
              <div className="flex-1 relative z-10">
                <h3 className="text-lg font-light text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-foreground/70 font-light">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
