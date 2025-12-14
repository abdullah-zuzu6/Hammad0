"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export function ScientificCalculator() {
  const [display, setDisplay] = useState("0")
  const [memory, setMemory] = useState(0)

  const handleNumber = (num: string) => {
    setDisplay(display === "0" ? num : display + num)
  }

  const handleOperator = (op: string) => {
    setDisplay(display + op)
  }

  const handleFunction = (func: string) => {
    try {
      const value = Number.parseFloat(display)
      let result = 0

      switch (func) {
        case "sin":
          result = Math.sin((value * Math.PI) / 180)
          break
        case "cos":
          result = Math.cos((value * Math.PI) / 180)
          break
        case "tan":
          result = Math.tan((value * Math.PI) / 180)
          break
        case "log":
          result = Math.log10(value)
          break
        case "ln":
          result = Math.log(value)
          break
        case "sqrt":
          result = Math.sqrt(value)
          break
        case "square":
          result = value * value
          break
        case "inverse":
          result = 1 / value
          break
      }

      setDisplay(String(result))
    } catch (error) {
      setDisplay("Error")
    }
  }

  const handleEquals = () => {
    try {
      // Replace × with * and ÷ with / for eval
      const expression = display.replace(/×/g, "*").replace(/÷/g, "/")
      const result = eval(expression)
      setDisplay(String(result))
    } catch (error) {
      setDisplay("Error")
    }
  }

  const handleClear = () => {
    setDisplay("0")
  }

  const handleBackspace = () => {
    setDisplay(display.length > 1 ? display.slice(0, -1) : "0")
  }

  return (
    <Card>
      <CardContent className="p-6">
        <div className="mb-4 p-4 bg-muted rounded-lg text-right">
          <div className="text-2xl font-bold break-all">{display}</div>
        </div>

        <div className="grid grid-cols-5 gap-2">
          {/* Scientific Functions Row 1 */}
          <Button variant="secondary" size="sm" onClick={() => handleFunction("sin")}>
            sin
          </Button>
          <Button variant="secondary" size="sm" onClick={() => handleFunction("cos")}>
            cos
          </Button>
          <Button variant="secondary" size="sm" onClick={() => handleFunction("tan")}>
            tan
          </Button>
          <Button variant="secondary" size="sm" onClick={() => handleFunction("log")}>
            log
          </Button>
          <Button variant="secondary" size="sm" onClick={() => handleFunction("ln")}>
            ln
          </Button>

          {/* Scientific Functions Row 2 */}
          <Button variant="secondary" size="sm" onClick={() => handleFunction("sqrt")}>
            √
          </Button>
          <Button variant="secondary" size="sm" onClick={() => handleFunction("square")}>
            x²
          </Button>
          <Button variant="secondary" size="sm" onClick={() => handleOperator("^")}>
            xʸ
          </Button>
          <Button variant="secondary" size="sm" onClick={() => handleFunction("inverse")}>
            1/x
          </Button>
          <Button variant="secondary" size="sm" onClick={() => handleNumber("3.14159")}>
            π
          </Button>

          {/* Basic Calculator Functions */}
          <Button variant="outline" onClick={handleClear}>
            C
          </Button>
          <Button variant="outline" onClick={handleBackspace}>
            ←
          </Button>
          <Button variant="outline" onClick={() => handleOperator("/")}>
            ÷
          </Button>
          <Button variant="outline" onClick={() => handleOperator("*")}>
            ×
          </Button>
          <Button variant="outline" onClick={() => handleNumber("(")}>
            (
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
          <Button variant="outline" onClick={() => handleOperator("-")}>
            −
          </Button>
          <Button variant="outline" onClick={() => handleNumber(")")}>
            )
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
          <Button variant="outline" onClick={() => handleOperator("+")}>
            +
          </Button>
          <Button variant="outline" onClick={() => handleNumber("2.71828")}>
            e
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
          <Button variant="outline" onClick={() => handleNumber("%")}>
            %
          </Button>

          <Button variant="outline" onClick={() => handleNumber("0")} className="col-span-2">
            0
          </Button>
          <Button variant="outline" onClick={() => handleNumber(".")}>
            .
          </Button>
          <Button
            variant="outline"
            onClick={() => setDisplay(display.includes("-") ? display.slice(1) : "-" + display)}
          >
            +/−
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
