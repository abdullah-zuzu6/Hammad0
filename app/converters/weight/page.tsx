import type { Metadata } from "next"
import { WeightConverter } from "@/components/converters/weight-converter"
import { RelatedTools } from "@/components/related-tools"
import { BackButton } from "@/components/back-button"

export const metadata: Metadata = {
  title: "Weight Converter | CalcJoy",
  description:
    "Convert between different weight units including kilograms, pounds, ounces, and grams. Free and easy to use.",
  keywords: ["weight converter", "mass converter", "kg to lbs", "pounds to kg"],
}

export default function WeightConverterPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-2xl">
      <BackButton />
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-4">Weight Converter</h1>
        <p className="text-muted-foreground">Convert between different units of weight</p>
      </div>
      <WeightConverter />
      <RelatedTools currentPath="/converters/weight" />
    </div>
  )
}
