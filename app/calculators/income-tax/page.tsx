import type { Metadata } from "next"
import { IncomeTaxCalculator } from "@/components/calculators/income-tax-calculator"
import { RelatedTools } from "@/components/related-tools"
import { BackButton } from "@/components/back-button"

export const metadata: Metadata = {
  title: "Income Tax Calculator | CalcJoy",
  description:
    "Calculate your estimated income tax and take-home pay. Free income tax calculator with detailed breakdown.",
  keywords: ["income tax calculator", "tax calculator", "salary calculator", "take home pay"],
}

export default function IncomeTaxCalculatorPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-2xl">
      <BackButton />
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-4">Income Tax Calculator</h1>
        <p className="text-muted-foreground">Calculate your estimated income tax and take-home pay</p>
      </div>
      <IncomeTaxCalculator />
      <RelatedTools currentPath="/calculators/income-tax" />
    </div>
  )
}
