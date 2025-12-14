import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "CalcJoy - Free Online Calculators & Unit Converters",
  description:
    "Free online calculators and unit converters. Simple calculator, scientific calculator, BMI calculator, income tax calculator, and more. Fast, accurate, and easy to use.",
  keywords: [
    "calculator",
    "online calculator",
    "free calculator",
    "unit converter",
    "BMI calculator",
    "tax calculator",
    "scientific calculator",
  ],
  authors: [{ name: "CalcJoy" }],
  generator: "Next.js",
  applicationName: "CalcJoy",
  metadataBase: new URL("https://calcjoy.com"),
  openGraph: {
    title: "CalcJoy - Free Online Calculators & Unit Converters",
    description: "Free online calculators and unit converters for all your calculation needs",
    type: "website",
    locale: "en_US",
    siteName: "CalcJoy",
  },
  twitter: {
    card: "summary_large_image",
    title: "CalcJoy - Free Online Calculators",
    description: "Free online calculators and unit converters",
  },
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} font-sans antialiased`}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
