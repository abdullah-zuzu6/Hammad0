"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function IncomeTaxCalculator() {
  const [income, setIncome] = useState("")
  const [result, setResult] = useState<{
    grossIncome: number
    tax: number
    netIncome: number
    taxRate: number
  } | null>(null)

  const calculateTax = () => {
    const grossIncome = Number.parseFloat(income)

    if (!grossIncome || grossIncome <= 0) {
      return
    }

    // Simple progressive tax calculation (example rates)
    let tax = 0
    let remainingIncome = grossIncome

    // Tax brackets (simplified example for US)
    const brackets = [
      { limit: 10000, rate: 0.1 },
      { limit: 30000, rate: 0.12 },
      { limit: 50000, rate: 0.22 },
      { limit: 100000, rate: 0.24 },
      { limit: Number.POSITIVE_INFINITY, rate: 0.32 },
    ]

    let previousLimit = 0
    for (const bracket of brackets) {
      const taxableInBracket = Math.min(remainingIncome, bracket.limit - previousLimit)
      if (taxableInBracket <= 0) break

      tax += taxableInBracket * bracket.rate
      remainingIncome -= taxableInBracket
      previousLimit = bracket.limit

      if (remainingIncome <= 0) break
    }

    const netIncome = grossIncome - tax
    const taxRate = (tax / grossIncome) * 100

    setResult({
      grossIncome,
      tax: Number.parseFloat(tax.toFixed(2)),
      netIncome: Number.parseFloat(netIncome.toFixed(2)),
      taxRate: Number.parseFloat(taxRate.toFixed(2)),
    })
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Calculate Your Income Tax</CardTitle>
        <CardDescription>Enter your annual gross income to estimate your tax liability</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="income">Annual Gross Income ($)</Label>
            <Input
              id="income"
              type="number"
              placeholder="e.g., 75000"
              value={income}
              onChange={(e) => setIncome(e.target.value)}
            />
          </div>

          <Button onClick={calculateTax} className="w-full">
            Calculate Tax
          </Button>
        </div>

        {result && (
          <div className="mt-6 space-y-4">
            <div className="p-4 bg-muted rounded-lg">
              <div className="flex justify-between items-center mb-2">
                <span className="text-muted-foreground">Gross Income</span>
                <span className="text-xl font-bold">${result.grossIncome.toLocaleString()}</span>
              </div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-muted-foreground">Estimated Tax</span>
                <span className="text-xl font-bold text-destructive">-${result.tax.toLocaleString()}</span>
              </div>
              <div className="flex justify-between items-center pt-2 border-t">
                <span className="font-semibold">Net Income (Take-Home)</span>
                <span className="text-2xl font-bold text-green-600">${result.netIncome.toLocaleString()}</span>
              </div>
            </div>

            <div className="p-4 bg-primary/10 rounded-lg">
              <div className="text-center">
                <p className="text-sm text-muted-foreground mb-1">Effective Tax Rate</p>
                <p className="text-3xl font-bold text-primary">{result.taxRate}%</p>
              </div>
            </div>

            <p className="text-xs text-muted-foreground">
              * This is a simplified calculation for illustration purposes. Actual tax rates may vary based on
              deductions, credits, and local tax laws.
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
