import type { Metadata } from "next"
import { Card, CardContent } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "About CalcJoy - Free Online Calculators",
  description: "Learn about CalcJoy, your trusted source for free online calculators and unit converters.",
  keywords: ["about calcjoy", "calculator website", "about us"],
}

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">About CalcJoy</h1>

      <Card className="mb-8">
        <CardContent className="p-8 space-y-6">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
            <p className="text-muted-foreground leading-relaxed">
              CalcJoy is dedicated to providing free, accurate, and easy-to-use calculators and unit converters for
              everyone. We believe that essential calculation tools should be accessible to all, whether you're a
              student, professional, or someone who needs quick calculations in daily life.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">What We Offer</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Our platform features a comprehensive collection of calculators and converters:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Simple calculator for everyday arithmetic</li>
              <li>Scientific calculator for advanced mathematical operations</li>
              <li>BMI calculator to track your health metrics</li>
              <li>Income tax calculator to estimate your taxes</li>
              <li>Unit converters for length, weight, and temperature</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">Why Choose CalcJoy?</h2>
            <ul className="space-y-3">
              <li className="flex gap-3">
                <span className="text-primary font-bold">✓</span>
                <div>
                  <strong>Free Forever:</strong> All our tools are completely free with no hidden charges
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">✓</span>
                <div>
                  <strong>Fast & Accurate:</strong> Get instant, precise results for all calculations
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">✓</span>
                <div>
                  <strong>Mobile Friendly:</strong> Works seamlessly on all devices and screen sizes
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">✓</span>
                <div>
                  <strong>No Registration:</strong> Start calculating immediately without creating an account
                </div>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">Our Commitment</h2>
            <p className="text-muted-foreground leading-relaxed">
              We are committed to continuously improving our tools and adding new calculators based on user feedback.
              Our goal is to make CalcJoy your go-to destination for all calculation needs, combining simplicity with
              powerful functionality.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
