import type React from "react"
import Link from "next/link"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Calculator, Ruler, Weight, Thermometer, Activity, DollarSign } from "lucide-react"

interface Tool {
  title: string
  description: string
  href: string
  icon: React.ReactNode
  category: "calculator" | "converter"
}

const allTools: Tool[] = [
  {
    title: "Simple Calculator",
    description: "Basic arithmetic operations",
    href: "/calculators/simple",
    icon: <Calculator className="w-5 h-5" />,
    category: "calculator",
  },
  {
    title: "Scientific Calculator",
    description: "Advanced mathematical functions",
    href: "/calculators/scientific",
    icon: <Calculator className="w-5 h-5" />,
    category: "calculator",
  },
  {
    title: "BMI Calculator",
    description: "Calculate your Body Mass Index",
    href: "/calculators/bmi",
    icon: <Activity className="w-5 h-5" />,
    category: "calculator",
  },
  {
    title: "Income Tax Calculator",
    description: "Estimate your income tax",
    href: "/calculators/income-tax",
    icon: <DollarSign className="w-5 h-5" />,
    category: "calculator",
  },
  {
    title: "Length Converter",
    description: "Convert between length units",
    href: "/converters/length",
    icon: <Ruler className="w-5 h-5" />,
    category: "converter",
  },
  {
    title: "Weight Converter",
    description: "Convert between weight units",
    href: "/converters/weight",
    icon: <Weight className="w-5 h-5" />,
    category: "converter",
  },
  {
    title: "Temperature Converter",
    description: "Convert between temperature units",
    href: "/converters/temperature",
    icon: <Thermometer className="w-5 h-5" />,
    category: "converter",
  },
]

interface RelatedToolsProps {
  currentPath: string
  limit?: number
}

export function RelatedTools({ currentPath, limit = 4 }: RelatedToolsProps) {
  // Filter out the current tool and get related ones
  const relatedTools = allTools.filter((tool) => tool.href !== currentPath).slice(0, limit)

  return (
    <div className="mt-16 animate-fade-in">
      <h2 className="text-2xl font-bold mb-6 text-center">Related Tools</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {relatedTools.map((tool, index) => (
          <Link key={tool.href} href={tool.href} className="group" style={{ animationDelay: `${index * 100}ms` }}>
            <Card className="h-full transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary/20 hover:border-primary/50 bg-card/50 backdrop-blur-sm animate-slide-up">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                    {tool.icon}
                  </div>
                </div>
                <CardTitle className="text-lg group-hover:text-primary transition-colors">{tool.title}</CardTitle>
                <CardDescription className="text-sm">{tool.description}</CardDescription>
              </CardHeader>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}
