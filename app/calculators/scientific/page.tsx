import type { Metadata } from "next"
import { ScientificCalculator } from "@/components/calculators/scientific-calculator"
import { RelatedTools } from "@/components/related-tools"
import { BackButton } from "@/components/back-button"

export const metadata: Metadata = {
  title: "Scientific Calculator | CalcJoy",
  description:
    "Free online scientific calculator with trigonometric, logarithmic, and exponential functions. Perfect for students and professionals.",
  keywords: ["scientific calculator", "advanced calculator", "trigonometry", "logarithm", "exponential"],
}

export default function ScientificCalculatorPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-3xl">
      <BackButton />
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-4">Scientific Calculator</h1>
        <p className="text-muted-foreground">Advanced calculator with scientific functions for complex calculations</p>
      </div>
      <ScientificCalculator />
      <RelatedTools currentPath="/calculators/scientific" />
    </div>
  )
}
