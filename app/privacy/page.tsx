import type { Metadata } from "next"
import { Card, CardContent } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Privacy Policy | CalcJoy",
  description: "CalcJoy Privacy Policy - Learn how we protect your data and privacy.",
}

export default function PrivacyPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>

      <Card>
        <CardContent className="p-8 space-y-6">
          <div>
            <p className="text-sm text-muted-foreground mb-6">Last updated: {new Date().toLocaleDateString()}</p>
            <p className="text-muted-foreground leading-relaxed">
              CalcJoy ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how
              we collect, use, and safeguard your information when you use our website.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">
              CalcJoy is designed with privacy in mind. We collect minimal information:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>No personal calculations or input data are stored on our servers</li>
              <li>Basic analytics data (page views, browser type) to improve our service</li>
              <li>Contact form information only when you voluntarily submit it</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">How We Use Your Information</h2>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>To provide and maintain our calculator services</li>
              <li>To improve and optimize our website</li>
              <li>To respond to your inquiries and support requests</li>
              <li>To analyze usage patterns and enhance user experience</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">Data Security</h2>
            <p className="text-muted-foreground leading-relaxed">
              All calculations are performed locally in your browser. We do not transmit or store your calculation data.
              We use industry-standard security measures to protect any information we do collect.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">Cookies</h2>
            <p className="text-muted-foreground leading-relaxed">
              We use minimal cookies for basic functionality and analytics. You can disable cookies in your browser
              settings, though this may affect some features.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">Third-Party Services</h2>
            <p className="text-muted-foreground leading-relaxed">
              We may use third-party analytics services to help us understand how our website is used. These services
              may collect information about your use of our website.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">Changes to This Policy</h2>
            <p className="text-muted-foreground leading-relaxed">
              We may update this Privacy Policy from time to time. We will notify users of any material changes by
              posting the new Privacy Policy on this page.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
            <p className="text-muted-foreground leading-relaxed">
              If you have any questions about this Privacy Policy, please contact us at privacy@calcjoy.com
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
