import Link from "next/link"
import { Linkedin, Mail, Phone } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-card/50 backdrop-blur-sm border-t border-border mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Hammad Masood
            </h3>
            <p className="text-muted-foreground">SEO Specialist & Flutter Developer</p>
            <p className="text-sm text-muted-foreground mt-2">Transforming businesses through digital excellence</p>
          </div>

          <div className="space-y-3">
            <Link
              href="https://www.linkedin.com/in/hammadmasood221?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-all hover:translate-x-1"
            >
              <Linkedin size={20} />
              <span>linkedin/hammad-masood</span>
            </Link>
            <Link
              href="mailto:hammad.masood@gmail.com"
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-all hover:translate-x-1"
            >
              <Mail size={20} />
              <span>hammad.masood@gmail.com</span>
            </Link>
            <Link
              href="tel:+1234567890"
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-all hover:translate-x-1"
            >
              <Phone size={20} />
              <span>+92 318 4264113</span>
            </Link>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Hammad Masood. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
