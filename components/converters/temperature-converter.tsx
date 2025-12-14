"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

type TemperatureUnit = "celsius" | "fahrenheit" | "kelvin"

export function TemperatureConverter() {
  const [fromValue, setFromValue] = useState("0")
  const [fromUnit, setFromUnit] = useState<TemperatureUnit>("celsius")
  const [toUnit, setToUnit] = useState<TemperatureUnit>("fahrenheit")

  const convert = () => {
    const value = Number.parseFloat(fromValue)
    if (isNaN(value)) return "0"

    // Convert to Celsius first
    let celsius: number
    switch (fromUnit) {
      case "celsius":
        celsius = value
        break
      case "fahrenheit":
        celsius = ((value - 32) * 5) / 9
        break
      case "kelvin":
        celsius = value - 273.15
        break
    }

    // Convert from Celsius to target unit
    let result: number
    switch (toUnit) {
      case "celsius":
        result = celsius
        break
      case "fahrenheit":
        result = (celsius * 9) / 5 + 32
        break
      case "kelvin":
        result = celsius + 273.15
        break
    }

    return result.toFixed(2)
  }

  const units: TemperatureUnit[] = ["celsius", "fahrenheit", "kelvin"]

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
            <Select value={fromUnit} onValueChange={(value) => setFromUnit(value as TemperatureUnit)}>
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
            <Select value={toUnit} onValueChange={(value) => setToUnit(value as TemperatureUnit)}>
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
            {fromValue}° {fromUnit.charAt(0).toUpperCase()} ={" "}
            <span className="font-bold text-foreground">
              {convert()}° {toUnit.charAt(0).toUpperCase()}
            </span>
          </p>
        </div>
      </CardContent>
    </Card>
  )
}
