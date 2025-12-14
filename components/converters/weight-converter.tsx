"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

type WeightUnit = "kilograms" | "grams" | "milligrams" | "pounds" | "ounces" | "tons" | "stones"

const conversionToKilograms: Record<WeightUnit, number> = {
  kilograms: 1,
  grams: 0.001,
  milligrams: 0.000001,
  pounds: 0.453592,
  ounces: 0.0283495,
  tons: 1000,
  stones: 6.35029,
}

export function WeightConverter() {
  const [fromValue, setFromValue] = useState("1")
  const [fromUnit, setFromUnit] = useState<WeightUnit>("kilograms")
  const [toUnit, setToUnit] = useState<WeightUnit>("pounds")

  const convert = () => {
    const value = Number.parseFloat(fromValue)
    if (isNaN(value)) return "0"

    const inKg = value * conversionToKilograms[fromUnit]
    const result = inKg / conversionToKilograms[toUnit]
    return result.toFixed(6).replace(/\.?0+$/, "")
  }

  const units: WeightUnit[] = ["kilograms", "grams", "milligrams", "pounds", "ounces", "tons", "stones"]

  return (
    <Card>
      <CardContent className="p-6 space-y-6">
        <div className="space-y-2">
          <Label htmlFor="from-value">From</Label>
          <div className="flex gap-2">
            <Input
              id="from-value"
              type="number"
              value={fromValue}
              onChange={(e) => setFromValue(e.target.value)}
              className="flex-1"
            />
            <Select value={fromUnit} onValueChange={(value) => setFromUnit(value as WeightUnit)}>
              <SelectTrigger className="w-[180px]">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {units.map((unit) => (
                  <SelectItem key={unit} value={unit}>
                    {unit.charAt(0).toUpperCase() + unit.slice(1)}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="to-value">To</Label>
          <div className="flex gap-2">
            <Input id="to-value" type="text" value={convert()} readOnly className="flex-1 bg-muted" />
            <Select value={toUnit} onValueChange={(value) => setToUnit(value as WeightUnit)}>
              <SelectTrigger className="w-[180px]">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {units.map((unit) => (
                  <SelectItem key={unit} value={unit}>
                    {unit.charAt(0).toUpperCase() + unit.slice(1)}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="p-4 bg-muted rounded-lg text-center">
          <p className="text-sm text-muted-foreground">
            {fromValue} {fromUnit} ={" "}
            <span className="font-bold text-foreground">
              {convert()} {toUnit}
            </span>
          </p>
        </div>
      </CardContent>
    </Card>
  )
}
