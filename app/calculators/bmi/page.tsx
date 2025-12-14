import type { Metadata } from "next"
import { BmiCalculator } from "@/components/calculators/bmi-calculator"
import { RelatedTools } from "@/components/related-tools"
import { BackButton } from "@/components/back-button"

export const metadata: Metadata = {
  title: "BMI Calculator - Body Mass Index | CalcJoy",
  description:
    "Calculate your Body Mass Index (BMI) and understand your health status. Free BMI calculator with detailed health information.",
  keywords: ["BMI calculator", "body mass index", "health calculator", "weight calculator", "BMI chart"],
}

export default function BmiCalculatorPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-2xl">
      <BackButton />
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-4">BMI Calculator</h1>
        <p className="text-muted-foreground">Calculate your Body Mass Index and understand your health status</p>
      </div>
      <BmiCalculator />
      <RelatedTools currentPath="/calculators/bmi" />
    </div>
  )
}
