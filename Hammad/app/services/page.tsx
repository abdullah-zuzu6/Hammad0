"use client"

import { motion } from "framer-motion"
import { Search, TrendingUp, Settings, Smartphone, BarChart3, Star } from "lucide-react"

const services = [
  {
    icon: Search,
    title: "On-Page SEO",
    description:
      "Optimize your website's content, meta tags, headings, and internal linking structure for better search rankings.",
    price: "$100",
    priceDetail: "per project",
    featured: false,
  },
  {
    icon: TrendingUp,
    title: "Off-Page SEO",
    description:
      "Build high-quality backlinks and improve your domain authority through strategic link building campaigns.",
    price: "$100",
    priceDetail: "per project",
    featured: false,
  },
  {
    icon: Settings,
    title: "Technical SEO",
    description:
      "Improve site speed, mobile responsiveness, crawlability, and fix technical issues for optimal performance.",
    price: "$100",
    priceDetail: "per project",
    featured: false,
  },
  {
    icon: Smartphone,
    title: "Flutter Development",
    description:
      "Build beautiful, high-performance cross-platform mobile applications for iOS and Android with Flutter.",
    price: "$500",
    priceDetail: "per project",
    featured: true,
  },
  {
    icon: BarChart3,
    title: "Data Analytics",
    description: "Comprehensive insights, reporting, and performance analysis to help you make data-driven decisions.",
    price: "Custom",
    priceDetail: "pricing",
    featured: false,
  },
]

export default function ServicesPage() {
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
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
            My <span className="text-primary">Services</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Professional services designed to help your business dominate search rankings and create stunning mobile
            experiences that convert.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto mb-16 bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/30 rounded-2xl p-8"
        >
          <h2 className="text-2xl font-bold mb-4 text-center">Comprehensive Digital Solutions</h2>
          <p className="text-muted-foreground text-center leading-relaxed mb-6">
            From technical SEO audits to custom mobile app development, I provide end-to-end solutions that drive real
            business growth. Every project is backed by data, optimized for performance, and built to scale.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">100%</div>
              <div className="text-sm text-muted-foreground">Client Satisfaction</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">24/7</div>
              <div className="text-sm text-muted-foreground">Support Available</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">Fast</div>
              <div className="text-sm text-muted-foreground">Delivery Guaranteed</div>
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                className={`relative bg-card border ${
                  service.featured
                    ? "border-primary shadow-lg shadow-primary/20 lg:col-span-3 lg:max-w-2xl lg:mx-auto"
                    : "border-border"
                } rounded-xl p-8 transition-all duration-300 hover:shadow-xl hover:border-primary/50`}
              >
                {service.featured && (
                  <div className="absolute -top-3 right-8">
                    <span className="inline-flex items-center gap-1 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                      <Star size={14} />
                      Featured
                    </span>
                  </div>
                )}

                <div className="flex flex-col h-full">
                  <div
                    className={`inline-flex items-center justify-center w-14 h-14 rounded-lg mb-6 ${
                      service.featured ? "bg-primary/20 text-primary" : "bg-muted text-primary"
                    }`}
                  >
                    <Icon size={28} />
                  </div>

                  <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground mb-6 flex-grow leading-relaxed">{service.description}</p>

                  <div className="pt-4 border-t border-border">
                    <div className="flex items-baseline gap-1">
                      <span className="text-3xl font-bold text-primary">{service.price}</span>
                      <span className="text-sm text-muted-foreground">{service.priceDetail}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-muted-foreground mb-6">
            Ready to get started? Let's discuss how I can help you achieve your goals.
          </p>
          <a href="/contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary text-primary-foreground px-8 py-4 rounded-lg font-medium transition-colors hover:bg-primary/90"
            >
              Get in Touch
            </motion.button>
          </a>
        </motion.div>
      </div>
    </div>
  )
}
