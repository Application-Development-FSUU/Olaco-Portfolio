'use client'

import { motion } from 'framer-motion'
import { Code2, Lightbulb, Rocket } from 'lucide-react'

const projects = [
  {
    id: 1,
    title: 'What I Know',
    description: 'Core fundamentals of web development including HTML, CSS, and React. Building solid foundations with semantic markup and responsive design patterns.',
    icon: Code2,
    skills: ['HTML', 'CSS', 'React'],
  },
  {
    id: 2,
    title: 'What I Learned',
    description: 'Advanced concepts and modern tools. From state management to animations, I explore new technologies and refine my problem-solving skills on real projects.',
    icon: Lightbulb,
    skills: ['Framer Motion', 'Tailwind CSS', 'Next.js'],
  },
  {
    id: 3,
    title: 'What I Aspire to Build',
    description: 'Innovative web applications that solve real-world problems. Combining beautiful design with robust functionality to create systems that make an impact.',
    icon: Rocket,
    skills: ['Full-Stack Apps', 'System Design', 'UX Focus'],
  },
]

export default function Portfolio() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  }

  return (
    <section id="portfolio" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20">
      <div className="max-w-7xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: '-100px' }}
          className="mb-16 text-center"
        >
          <h2 className="text-5xl md:text-6xl font-light mb-4">My Work</h2>
          <p className="text-xl text-foreground/70 font-light">A journey of growth and creation</p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {projects.map((project) => {
            const Icon = project.icon
            return (
              <motion.div
                key={project.id}
                variants={cardVariants}
                className="group relative bg-gradient-to-br from-background to-card border border-border rounded-xl p-6 hover:border-primary transition-all duration-300 overflow-hidden"
              >
                {/* Gradient background on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-3xl"></div>

                {/* Content */}
                <div className="relative z-10">
                  <div className="mb-4 inline-flex p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors duration-300">
                    <Icon className="text-primary group-hover:text-accent transition-colors duration-300" size={24} />
                  </div>

                  <h3 className="text-2xl font-light mb-3 text-foreground">{project.title}</h3>

                  <p className="text-foreground/70 font-light leading-relaxed mb-6">{project.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {project.skills.map((skill) => (
                      <span key={skill} className="px-3 py-1 bg-primary/20 text-primary text-sm font-light rounded-full">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
