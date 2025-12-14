import type { Metadata } from "next"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Ruler, Weight, Thermometer } from "lucide-react"

export const metadata: Metadata = {
  title: "Unit Converters | CalcJoy",
  description:
    "Free online unit converters for length, weight, and temperature. Convert between different units instantly.",
  keywords: ["unit converter", "length converter", "weight converter", "temperature converter"],
}

export default function ConvertersPage() {
  const converters = [
    {
      title: "Length Converter",
      description: "Convert between meters, feet, inches, kilometers, miles, and more",
      icon: Ruler,
      href: "/converters/length",
    },
    {
      title: "Weight Converter",
      description: "Convert between kilograms, pounds, ounces, grams, and more",
      icon: Weight,
      href: "/converters/weight",
    },
    {
      title: "Temperature Converter",
      description: "Convert between Celsius, Fahrenheit, and Kelvin",
      icon: Thermometer,
      href: "/converters/temperature",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-12 max-w-6xl">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Unit Converters</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Convert between different units of measurement quickly and accurately
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {converters.map((converter) => {
          const Icon = converter.icon
          return (
            <Card key={converter.href} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Icon className="w-12 h-12 mb-4 text-primary" />
                <CardTitle>{converter.title}</CardTitle>
                <CardDescription>{converter.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild className="w-full">
                  <Link href={converter.href}>Open Converter</Link>
                </Button>
              </CardContent>
            </Card>
          )
        })}
      </div>
    </div>
  )
}
