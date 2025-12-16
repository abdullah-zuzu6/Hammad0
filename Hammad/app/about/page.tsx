"use client"

import { motion } from "framer-motion"
import { GraduationCap, Briefcase, Code, Target, Heart, Lightbulb } from "lucide-react"

const skills = [
  { name: "SEO Optimization", level: 95 },
  { name: "Flutter Development", level: 90 },
  { name: "Data Analytics", level: 85 },
  { name: "Technical SEO", level: 92 },
  { name: "Mobile Development", level: 88 },
]

const coreValues = [
  {
    icon: Target,
    title: "Results-Driven",
    description: "Every project is measured by real, tangible outcomes that impact your bottom line.",
  },
  {
    icon: Heart,
    title: "Client-First",
    description: "Your success is my success. I prioritize your goals and work as an extension of your team.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Staying ahead of trends to bring you cutting-edge solutions that give you a competitive advantage.",
  },
]

export default function AboutPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            About <span className="text-primary">Me</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            A passionate professional dedicated to helping businesses succeed through strategic SEO and innovative
            mobile solutions.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto space-y-12"
        >
          {/* Introduction */}
          <motion.div variants={itemVariants} className="bg-card border border-border rounded-xl p-8">
            <h2 className="text-2xl font-bold mb-4">Introduction</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              I'm Hammad Masood, a dedicated SEO Specialist and Flutter Developer with a passion for creating digital
              solutions that drive measurable results. With years of hands-on experience in both search engine
              optimization and mobile app development, I've helped numerous businesses establish a commanding online
              presence and connect meaningfully with their audiences.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              My approach combines technical expertise with strategic thinking, ensuring every project delivers not just
              beautiful design, but real business impact. Whether it's ranking #1 on Google or building an app that
              users love, I'm committed to excellence in every detail.
            </p>
          </motion.div>

          {/* Core Values */}
          <motion.div variants={itemVariants}>
            <h2 className="text-3xl font-bold mb-8 text-center">
              My <span className="text-primary">Core Values</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {coreValues.map((value, index) => {
                const Icon = value.icon
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -5 }}
                    className="bg-card border border-border rounded-xl p-6 text-center hover:border-primary/50 transition-colors"
                  >
                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/20 text-primary mb-4">
                      <Icon size={24} />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>

          {/* Education */}
          <motion.div variants={itemVariants} className="bg-card border border-border rounded-xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-primary/20 text-primary rounded-lg p-3">
                <GraduationCap size={24} />
              </div>
              <h2 className="text-2xl font-bold">Education</h2>
            </div>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-2">Bachelor's in Information Technology </h3>
                <p className="text-muted-foreground">
                  Specialized in software development, data structures, and digital marketing strategies
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Professional Certifications</h3>
                <p className="text-muted-foreground">
                  Google SEO Certification, Flutter Development Specialist, Advanced Data Analytics, Google Analytics
                  Expert
                </p>
              </div>
            </div>
          </motion.div>

          {/* Experience */}
          <motion.div variants={itemVariants} className="bg-card border border-border rounded-xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-primary/20 text-primary rounded-lg p-3">
                <Briefcase size={24} />
              </div>
              <h2 className="text-2xl font-bold">Professional Experience</h2>
            </div>
            <div className="space-y-6">
              <div className="border-l-2 border-primary pl-6">
                <h3 className="text-xl font-semibold mb-2">SEO Consultant & Strategist</h3>
                <p className="text-primary mb-2">2022 - Present</p>
                <p className="text-muted-foreground leading-relaxed">
                  Helping businesses achieve top search rankings through comprehensive SEO strategies including
                  technical audits, on-page optimization, strategic link building, and content optimization. Increased
                  organic traffic by an average of 250% for clients across various industries.
                </p>
              </div>
              <div className="border-l-2 border-accent pl-6">
                <h3 className="text-xl font-semibold mb-2">Flutter Developer</h3>
                <p className="text-accent mb-2">2023 - Present</p>
                <p className="text-muted-foreground leading-relaxed">
              
                  Specialized in creating beautiful, intuitive user experiences with clean architecture and scalable
                  code that maintainers love.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Skills */}
          <motion.div variants={itemVariants} className="bg-card border border-border rounded-xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-primary/20 text-primary rounded-lg p-3">
                <Code size={24} />
              </div>
              <h2 className="text-2xl font-bold">Skills & Expertise</h2>
            </div>
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-primary">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="h-full bg-gradient-to-r from-primary to-accent"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Mission Statement */}
          <motion.div
            variants={itemVariants}
            className="bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/30 rounded-xl p-8 text-center"
          >
            <h2 className="text-2xl font-bold mb-4">My Mission</h2>
            <p className="text-lg leading-relaxed max-w-2xl mx-auto">
              To empower businesses with digital solutions that not only look great but deliver measurable results. I
              believe in building long-term partnerships where your growth is my priority, and every project is an
              opportunity to exceed expectations.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
