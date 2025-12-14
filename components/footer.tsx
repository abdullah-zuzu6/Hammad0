import Link from "next/link"
import { Calculator, Heart } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-card/50 backdrop-blur-sm mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-1 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <Link href="/" className="flex items-center gap-2 font-bold text-xl mb-4 group">
              <Calculator className="w-6 h-6 text-primary group-hover:rotate-12 transition-transform duration-300" />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">CalcJoy</span>
            </Link>
            <p className="text-sm text-muted-foreground">Making calculations joyful and effortless for everyone.</p>
          </div>

          {/* Calculators Links */}
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
            <h3 className="font-semibold mb-4 text-foreground">Calculators</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link
                  href="/calculators/simple"
                  className="hover:text-primary transition-colors hover:translate-x-1 inline-block duration-200"
                >
                  Simple Calculator
                </Link>
              </li>
              <li>
                <Link
                  href="/calculators/scientific"
                  className="hover:text-primary transition-colors hover:translate-x-1 inline-block duration-200"
                >
                  Scientific Calculator
                </Link>
              </li>
              <li>
                <Link
                  href="/calculators/bmi"
                  className="hover:text-primary transition-colors hover:translate-x-1 inline-block duration-200"
                >
                  BMI Calculator
                </Link>
              </li>
              <li>
                <Link
                  href="/calculators/income-tax"
                  className="hover:text-primary transition-colors hover:translate-x-1 inline-block duration-200"
                >
                  Income Tax Calculator
                </Link>
              </li>
            </ul>
          </div>

          {/* Converters Links */}
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
            <h3 className="font-semibold mb-4 text-foreground">Converters</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link
                  href="/converters/length"
                  className="hover:text-primary transition-colors hover:translate-x-1 inline-block duration-200"
                >
                  Length Converter
                </Link>
              </li>
              <li>
                <Link
                  href="/converters/weight"
                  className="hover:text-primary transition-colors hover:translate-x-1 inline-block duration-200"
                >
                  Weight Converter
                </Link>
              </li>
              <li>
                <Link
                  href="/converters/temperature"
                  className="hover:text-primary transition-colors hover:translate-x-1 inline-block duration-200"
                >
                  Temperature Converter
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
            <h3 className="font-semibold mb-4 text-foreground">Company</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link
                  href="/about"
                  className="hover:text-primary transition-colors hover:translate-x-1 inline-block duration-200"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-primary transition-colors hover:translate-x-1 inline-block duration-200"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="hover:text-primary transition-colors hover:translate-x-1 inline-block duration-200"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="hover:text-primary transition-colors hover:translate-x-1 inline-block duration-200"
                >
                  Terms of Use
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border/40 mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p className="flex items-center justify-center gap-2">
            &copy; {new Date().getFullYear()} CalcJoy. Made with{" "}
            <Heart className="w-4 h-4 text-accent fill-accent animate-pulse" /> for calculation enthusiasts.
          </p>
        </div>
      </div>
    </footer>
  )
}
