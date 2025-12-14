"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

type LengthUnit = "meters" | "kilometers" | "centimeters" | "millimeters" | "miles" | "yards" | "feet" | "inches"

const conversionToMeters: Record<LengthUnit, number> = {
  meters: 1,
  kilometers: 1000,
  centimeters: 0.01,
  millimeters: 0.001,
  miles: 1609.34,
  yards: 0.9144,
  feet: 0.3048,
  inches: 0.0254,
}

export function LengthConverter() {
  const [fromValue, setFromValue] = useState("1")
  const [fromUnit, setFromUnit] = useState<LengthUnit>("meters")
  const [toUnit, setToUnit] = useState<LengthUnit>("feet")

  const convert = () => {
    const value = Number.parseFloat(fromValue)
    if (isNaN(value)) return "0"

    const inMeters = value * conversionToMeters[fromUnit]
    const result = inMeters / conversionToMeters[toUnit]
    return result.toFixed(6).replace(/\.?0+$/, "")
  }

  const units: LengthUnit[] = ["meters", "kilometers", "centimeters", "millimeters", "miles", "yards", "feet", "inches"]

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
            <Select value={fromUnit} onValueChange={(value) => setFromUnit(value as LengthUnit)}>
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
            <Select value={toUnit} onValueChange={(value) => setToUnit(value as LengthUnit)}>
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
