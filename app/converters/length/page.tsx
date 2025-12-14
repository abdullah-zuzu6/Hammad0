import type { Metadata } from "next"
import { LengthConverter } from "@/components/converters/length-converter"
import { RelatedTools } from "@/components/related-tools"
import { BackButton } from "@/components/back-button"

export const metadata: Metadata = {
  title: "Length Converter | CalcJoy",
  description:
    "Convert between different length units including meters, feet, inches, kilometers, and miles. Free and easy to use.",
  keywords: ["length converter", "distance converter", "meters to feet", "km to miles"],
}

export default function LengthConverterPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-2xl">
      <BackButton />
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-4">Length Converter</h1>
        <p className="text-muted-foreground">Convert between different units of length</p>
      </div>
      <LengthConverter />
      <RelatedTools currentPath="/converters/length" />
    </div>
  )
}
