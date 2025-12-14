import type { Metadata } from "next"
import { TemperatureConverter } from "@/components/converters/temperature-converter"
import { RelatedTools } from "@/components/related-tools"
import { BackButton } from "@/components/back-button"

export const metadata: Metadata = {
  title: "Temperature Converter | CalcJoy",
  description: "Convert between Celsius, Fahrenheit, and Kelvin. Free and easy to use temperature converter.",
  keywords: ["temperature converter", "celsius to fahrenheit", "fahrenheit to celsius", "kelvin converter"],
}

export default function TemperatureConverterPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-2xl">
      <BackButton />
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-4">Temperature Converter</h1>
        <p className="text-muted-foreground">Convert between Celsius, Fahrenheit, and Kelvin</p>
      </div>
      <TemperatureConverter />
      <RelatedTools currentPath="/converters/temperature" />
    </div>
  )
}
