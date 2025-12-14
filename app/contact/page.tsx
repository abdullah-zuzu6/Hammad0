import type { Metadata } from "next"
import { ContactForm } from "@/components/contact-form"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, MessageSquare } from "lucide-react"

export const metadata: Metadata = {
  title: "Contact Us | CalcJoy",
  description: "Get in touch with CalcJoy. Send us your feedback, suggestions, or report issues.",
  keywords: ["contact calcjoy", "feedback", "support"],
}

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
        <p className="text-lg text-muted-foreground">
          We'd love to hear from you! Send us your feedback, suggestions, or questions.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <Card>
          <CardContent className="p-6 flex items-start gap-4">
            <Mail className="w-8 h-8 text-primary flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-lg mb-2">Email Us</h3>
              <p className="text-muted-foreground">For general inquiries and support</p>
              <a href="mailto:support@calcjoy.com" className="text-primary hover:underline">
                support@calcjoy.com
              </a>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6 flex items-start gap-4">
            <MessageSquare className="w-8 h-8 text-primary flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-lg mb-2">Feedback</h3>
              <p className="text-muted-foreground">Help us improve by sharing your thoughts and suggestions</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <ContactForm />
    </div>
  )
}
