import type { Metadata } from "next"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calculator, Activity, Gauge, DollarSign } from "lucide-react"

export const metadata: Metadata = {
  title: "Free Online Calculators | CalcJoy",
  description:
    "Access a variety of free online calculators including simple, scientific, BMI, and income tax calculators. Fast, accurate, and easy to use.",
  keywords: ["calculators", "online calculator", "free calculator", "math calculator", "scientific calculator"],
}

export default function CalculatorsPage() {
  const calculators = [
    {
      title: "Simple Calculator",
      description: "Perform basic arithmetic operations like addition, subtraction, multiplication, and division",
      icon: Calculator,
      href: "/calculators/simple",
    },
    {
      title: "Scientific Calculator",
      description: "Advanced calculator with trigonometric, logarithmic, and exponential functions",
      icon: Activity,
      href: "/calculators/scientific",
    },
    {
      title: "BMI Calculator",
      description: "Calculate your Body Mass Index and understand your health status",
      icon: Gauge,
      href: "/calculators/bmi",
    },
    {
      title: "Income Tax Calculator",
      description: "Estimate your income tax and take-home pay based on your salary",
      icon: DollarSign,
      href: "/calculators/income-tax",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-12 max-w-6xl">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Free Online Calculators</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Choose from our collection of calculators designed to make your calculations quick and accurate
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {calculators.map((calc) => {
          const Icon = calc.icon
          return (
            <Card key={calc.href} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Icon className="w-12 h-12 mb-4 text-primary" />
                <CardTitle>{calc.title}</CardTitle>
                <CardDescription>{calc.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild className="w-full">
                  <Link href={calc.href}>Open Calculator</Link>
                </Button>
              </CardContent>
            </Card>
          )
        })}
      </div>
    </div>
  )
}
