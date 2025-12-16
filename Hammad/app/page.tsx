"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, CheckCircle2, Trophy, Users, Zap, ChevronDown } from "lucide-react"
import { useState } from "react"

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  const stats = [
    { icon: Trophy, value: "50+", label: "Projects Completed" },
    { icon: Users, value: "30+", label: "Happy Clients" },
    { icon: Zap, value: "5+", label: "Years Experience" },
  ]

  const reasons = [
    "Proven track record of improving search rankings by 200%+",
    "Custom SEO strategies tailored to your business goals",
    "Beautiful, high-performance mobile apps that users love",
    "Data-driven approach with comprehensive analytics",
    "Dedicated support and transparent communication",
  ]

  const faqs = [
    {
      question: "What SEO services do you offer?",
      answer:
        "I provide comprehensive SEO services including On-Page SEO, Off-Page SEO, and Technical SEO. Each service is designed to improve your search rankings, drive organic traffic, and increase conversions. I analyze your website, competitors, and industry to create a customized strategy that delivers measurable results.",
    },
    {
      question: "How long does it take to see SEO results?",
      answer:
        "Typically, you can expect to see initial improvements within 3-4 months, with significant results after 6-12 months. SEO is a long-term investment that builds sustainable organic growth. The timeline varies based on your industry competition, current website status, and goals.",
    },
    {
      question: "What technologies do you use for Flutter development?",
      answer:
        "I use Flutter with Dart to build cross-platform mobile applications. My tech stack includes Firebase for backend services, REST APIs for integrations, state management solutions like Provider or Riverpod, and modern UI/UX design principles to create beautiful, high-performance apps for both iOS and Android.",
    },
    {
      question: "Do you offer ongoing support after project completion?",
      answer:
        "Yes, I provide dedicated ongoing support and maintenance for all projects. For SEO clients, this includes monthly reporting, continuous optimization, and strategy adjustments. For Flutter apps, I offer bug fixes, updates, and feature enhancements to ensure your app stays current and performs optimally.",
    },
    {
      question: "How do you determine pricing for projects?",
      answer:
        "Pricing is based on project scope, complexity, and timeline. SEO services start at $100 per project type, while Flutter development starts at $500. I provide detailed proposals outlining deliverables, timelines, and costs. For larger projects, I offer flexible payment plans to accommodate your budget.",
    },
    {
      question: "Can you help with both new websites and existing ones?",
      answer:
        "I work with both new and established websites. For new sites, I implement SEO best practices from the ground up. For existing sites, I conduct thorough audits to identify issues and opportunities, then create a strategic plan to improve your search visibility and user experience.",
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="flex items-center justify-center pt-16 min-h-screen">
        <div className="container mx-auto px-4 py-20">
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Text Content */}
            <motion.div variants={itemVariants} className="space-y-6">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-balance">
                  I am <span className="text-primary">Hammad Masood</span>
                </h1>
              </motion.div>

              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.5 }}>
                <h2 className="text-2xl md:text-3xl lg:text-4xl text-muted-foreground text-balance">
                  SEO Specialist & Flutter Developer
                </h2>
              </motion.div>

              <motion.p variants={itemVariants} className="text-lg text-muted-foreground max-w-xl leading-relaxed">
                Transforming businesses through strategic SEO optimization and building exceptional mobile experiences.
                Let's take your digital presence to the Next level.
              </motion.p>

              <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link href="/services">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg font-medium transition-colors hover:bg-primary/90"
                  >
                    View Services
                    <ArrowRight size={20} />
                  </motion.button>
                </Link>
                <Link href="/contact">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center justify-center gap-2 bg-card border border-border text-foreground px-8 py-4 rounded-lg font-medium transition-colors hover:bg-muted"
                  >
                    Contact Me
                  </motion.button>
                </Link>
              </motion.div>
            </motion.div>

            <motion.div variants={itemVariants} className="flex justify-center lg:justify-end">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="relative w-80 h-80 md:w-96 md:h-96"
              >
                {/* Animated glowing background layers */}
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0 bg-primary/30 rounded-full blur-3xl"
                />
                <motion.div
                  animate={{
                    scale: [1.2, 1, 1.2],
                    opacity: [0.2, 0.4, 0.2],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                    delay: 0.5,
                  }}
                  className="absolute inset-0 bg-accent/25 rounded-full blur-2xl"
                />

                <motion.div
                  whileHover={{ scale: 1.05, rotate: 3 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="relative z-10 w-full h-full"
                >
                  <Image
                    src="/images/hammad.jpeg"
                    alt="Hammad Masood - SEO Specialist & Flutter Developer"
                    width={400}
                    height={400}
                    priority
                    className="rounded-full shadow-2xl border-4 border-primary/30 object-cover w-full h-full"
                  />
                  {/* Gradient overlay for better blend */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/10 to-transparent" />
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="py-20 bg-card/50"
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/20 text-primary mb-4">
                    <Icon size={32} />
                  </div>
                  <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="py-20"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Why Choose <span className="text-primary">Me?</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                I bring a unique combination of technical expertise and strategic thinking to deliver results that
                matter.
              </p>
            </motion.div>

            <div className="space-y-4">
              {reasons.map((reason, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start gap-4 bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-colors"
                >
                  <CheckCircle2 className="text-primary flex-shrink-0 mt-1" size={24} />
                  <p className="text-lg leading-relaxed">{reason}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="py-20 bg-card/30"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Frequently Asked <span className="text-primary">Questions</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Get answers to common questions about my services, process, and expertise.
              </p>
            </motion.div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <FAQItem key={index} faq={faq} index={index} />
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

function FAQItem({ faq, index }: { faq: { question: string; answer: string }; index: number }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-card border border-border rounded-xl overflow-hidden hover:border-primary/50 transition-colors"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between gap-4 p-6 text-left"
      >
        <h3 className="text-lg font-semibold">{faq.question}</h3>
        <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.3 }}>
          <ChevronDown className="text-primary flex-shrink-0" size={24} />
        </motion.div>
      </button>

      <motion.div
        initial={false}
        animate={{
          height: isOpen ? "auto" : 0,
          opacity: isOpen ? 1 : 0,
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="overflow-hidden"
      >
        <div className="px-6 pb-6">
          <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
        </div>
      </motion.div>
    </motion.div>
  )
}
