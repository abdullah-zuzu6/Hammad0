"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export function SimpleCalculator() {
  const [display, setDisplay] = useState("0")
  const [previousValue, setPreviousValue] = useState<string | null>(null)
  const [operation, setOperation] = useState<string | null>(null)
  const [newNumber, setNewNumber] = useState(true)

  const handleNumber = (num: string) => {
    if (newNumber) {
      setDisplay(num)
      setNewNumber(false)
    } else {
      setDisplay(display === "0" ? num : display + num)
    }
  }

  const handleDecimal = () => {
    if (newNumber) {
      setDisplay("0.")
      setNewNumber(false)
    } else if (!display.includes(".")) {
      setDisplay(display + ".")
    }
  }

  const handleOperation = (op: string) => {
    const current = Number.parseFloat(display)

    if (previousValue === null) {
      setPreviousValue(display)
    } else if (operation) {
      const prev = Number.parseFloat(previousValue)
      let result = 0

      switch (operation) {
        case "+":
          result = prev + current
          break
        case "-":
          result = prev - current
          break
        case "*":
          result = prev * current
          break
        case "/":
          result = prev / current
          break
      }

      setDisplay(String(result))
      setPreviousValue(String(result))
    }

    setOperation(op)
    setNewNumber(true)
  }

  const handleEquals = () => {
    if (operation && previousValue !== null) {
      const current = Number.parseFloat(display)
      const prev = Number.parseFloat(previousValue)
      let result = 0

      switch (operation) {
        case "+":
          result = prev + current
          break
        case "-":
          result = prev - current
          break
        case "*":
          result = prev * current
          break
        case "/":
          result = prev / current
          break
      }

      setDisplay(String(result))
      setPreviousValue(null)
      setOperation(null)
      setNewNumber(true)
    }
  }

  const handleClear = () => {
    setDisplay("0")
    setPreviousValue(null)
    setOperation(null)
    setNewNumber(true)
  }

  const handleBackspace = () => {
    if (display.length > 1) {
      setDisplay(display.slice(0, -1))
    } else {
      setDisplay("0")
      setNewNumber(true)
    }
  }

  return (
    <Card>
      <CardContent className="p-6">
        <div className="mb-4 p-4 bg-muted rounded-lg text-right">
          <div className="text-3xl font-bold break-all">{display}</div>
        </div>

        <div className="grid grid-cols-4 gap-2">
          <Button variant="outline" onClick={handleClear} className="text-destructive bg-transparent">
            C
          </Button>
          <Button variant="outline" onClick={handleBackspace}>
            ←
          </Button>
          <Button variant="outline" onClick={() => handleOperation("/")}>
            ÷
          </Button>
          <Button variant="outline" onClick={() => handleOperation("*")}>
            ×
          </Button>

          <Button variant="outline" onClick={() => handleNumber("7")}>
            7
          </Button>
          <Button variant="outline" onClick={() => handleNumber("8")}>
            8
          </Button>
          <Button variant="outline" onClick={() => handleNumber("9")}>
            9
          </Button>
          <Button variant="outline" onClick={() => handleOperation("-")}>
            −
          </Button>

          <Button variant="outline" onClick={() => handleNumber("4")}>
            4
          </Button>
          <Button variant="outline" onClick={() => handleNumber("5")}>
            5
          </Button>
          <Button variant="outline" onClick={() => handleNumber("6")}>
            6
          </Button>
          <Button variant="outline" onClick={() => handleOperation("+")}>
            +
          </Button>

          <Button variant="outline" onClick={() => handleNumber("1")}>
            1
          </Button>
          <Button variant="outline" onClick={() => handleNumber("2")}>
            2
          </Button>
          <Button variant="outline" onClick={() => handleNumber("3")}>
            3
          </Button>
          <Button variant="default" onClick={handleEquals} className="row-span-2">
            =
          </Button>

          <Button variant="outline" onClick={() => handleNumber("0")} className="col-span-2">
            0
          </Button>
          <Button variant="outline" onClick={handleDecimal}>
            .
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
