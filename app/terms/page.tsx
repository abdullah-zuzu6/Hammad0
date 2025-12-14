import type { Metadata } from "next"
import { Card, CardContent } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Terms of Use | CalcJoy",
  description: "CalcJoy Terms of Use - Read our terms and conditions for using our calculator services.",
}

export default function TermsPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8">Terms of Use</h1>

      <Card>
        <CardContent className="p-8 space-y-6">
          <div>
            <p className="text-sm text-muted-foreground mb-6">Last updated: {new Date().toLocaleDateString()}</p>
            <p className="text-muted-foreground leading-relaxed">
              Welcome to CalcJoy. By accessing and using this website, you accept and agree to be bound by the terms and
              conditions outlined below.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
            <p className="text-muted-foreground leading-relaxed">
              By using CalcJoy, you agree to comply with these Terms of Use. If you do not agree with any part of these
              terms, please do not use our website.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">2. Use of Services</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">
              You agree to use CalcJoy only for lawful purposes. You must not:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Use the service in any way that violates applicable laws or regulations</li>
              <li>Attempt to interfere with or disrupt the service</li>
              <li>Use automated systems to access the service without permission</li>
              <li>Attempt to gain unauthorized access to any part of the service</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">3. Accuracy of Calculations</h2>
            <p className="text-muted-foreground leading-relaxed">
              While we strive to provide accurate calculations, CalcJoy is provided "as is" without warranties of any
              kind. We do not guarantee the accuracy, completeness, or reliability of any calculations. Users should
              verify important calculations independently.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">4. Limitation of Liability</h2>
            <p className="text-muted-foreground leading-relaxed">
              CalcJoy and its operators shall not be liable for any direct, indirect, incidental, consequential, or
              punitive damages arising from your use of the service or any errors in calculations.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">5. Intellectual Property</h2>
            <p className="text-muted-foreground leading-relaxed">
              All content on CalcJoy, including text, graphics, logos, and software, is the property of CalcJoy and
              protected by intellectual property laws. You may not reproduce or distribute any content without
              permission.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">6. Third-Party Links</h2>
            <p className="text-muted-foreground leading-relaxed">
              Our website may contain links to third-party websites. We are not responsible for the content or practices
              of these external sites.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">7. Changes to Terms</h2>
            <p className="text-muted-foreground leading-relaxed">
              We reserve the right to modify these Terms of Use at any time. Continued use of the service after changes
              constitutes acceptance of the new terms.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">8. Governing Law</h2>
            <p className="text-muted-foreground leading-relaxed">
              These Terms of Use shall be governed by and construed in accordance with applicable laws, without regard
              to conflict of law provisions.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">9. Contact Information</h2>
            <p className="text-muted-foreground leading-relaxed">
              If you have any questions about these Terms of Use, please contact us at legal@calcjoy.com
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
