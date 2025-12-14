import type { Metadata } from "next"
import { SimpleCalculator } from "@/components/calculators/simple-calculator"
import { RelatedTools } from "@/components/related-tools"
import { BackButton } from "@/components/back-button"

export const metadata: Metadata = {
  title: "Simple Calculator | CalcJoy",
  description:
    "Free online simple calculator for basic arithmetic operations. Add, subtract, multiply, and divide with ease.",
  keywords: ["simple calculator", "basic calculator", "arithmetic calculator", "free calculator"],
}

export default function SimpleCalculatorPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-2xl">
      <BackButton />
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-4">Simple Calculator</h1>
        <p className="text-muted-foreground">Perform basic arithmetic operations with our easy-to-use calculator</p>
      </div>
      <SimpleCalculator />
      <RelatedTools currentPath="/calculators/simple" />
    </div>
  )
}
