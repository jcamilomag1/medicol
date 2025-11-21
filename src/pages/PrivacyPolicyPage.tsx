import { Helmet } from "react-helmet";
import { LegalLayout } from "@/components/legal/LegalLayout";

const PrivacyPolicyPage = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy - Medicol Medical Tourism</title>
        <meta name="description" content="Privacy Policy for Medicol Medical Tourism - Learn how we collect, use, and protect your personal information." />
        <meta name="robots" content="noindex, follow" />
      </Helmet>

      <LegalLayout
        title="Privacy Policy"
        lastUpdated="January 2025"
        breadcrumb="Privacy Policy"
      >
        <div className="space-y-8">
          <section>
            <p className="text-lg">
              Medicol Medical Tourism ("we," "us," or "our") is committed to protecting the privacy and security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our medical tourism services and website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">1. Information We Collect</h2>
            <p className="mb-4">We may collect the following types of information:</p>
            
            <h3 className="text-xl font-semibold text-foreground mb-3">a. Personal Information</h3>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Full name, date of birth, gender, and contact details (email, phone number, address)</li>
              <li>Passport or government-issued ID information</li>
              <li>Medical history, health conditions, and treatment preferences</li>
              <li>Payment and billing information</li>
            </ul>

            <h3 className="text-xl font-semibold text-foreground mb-3">b. Medical Information</h3>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Medical records, diagnostic test results, and prescriptions</li>
              <li>Information related to medical procedures, treatments, and consultations</li>
              <li>Emergency contact information</li>
            </ul>

            <h3 className="text-xl font-semibold text-foreground mb-3">c. Travel and Logistics Information</h3>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Flight details, accommodation preferences, and travel itinerary</li>
              <li>Visa and immigration documents</li>
            </ul>

            <h3 className="text-xl font-semibold text-foreground mb-3">d. Technical Information</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>IP address, browser type, and device information</li>
              <li>Cookies and usage data from our website</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">2. How We Use Your Information</h2>
            <p className="mb-3">We use your information for the following purposes:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Service Delivery:</strong> To coordinate medical treatments, travel arrangements, and accommodations</li>
              <li><strong>Communication:</strong> To provide updates, respond to inquiries, and send appointment reminders</li>
              <li><strong>Payment Processing:</strong> To process payments and manage billing</li>
              <li><strong>Legal Compliance:</strong> To comply with healthcare regulations and legal obligations</li>
              <li><strong>Improvement:</strong> To enhance our services and customer experience</li>
              <li><strong>Marketing:</strong> To send promotional materials (only with your consent)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">3. How We Share Your Information</h2>
            <p className="mb-3">We may share your information with:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Healthcare Providers:</strong> Doctors, hospitals, and clinics involved in your treatment</li>
              <li><strong>Service Partners:</strong> Travel agencies, hotels, and transportation providers</li>
              <li><strong>Payment Processors:</strong> Third-party payment gateways for secure transactions</li>
              <li><strong>Legal Authorities:</strong> When required by law or to protect our rights</li>
              <li><strong>Insurance Companies:</strong> If applicable to your treatment</li>
            </ul>
            <p className="mt-3">
              We do not sell your personal information to third parties.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">4. Data Security</h2>
            <p>
              We implement industry-standard security measures to protect your information, including encryption, secure servers, and access controls. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">5. International Data Transfers</h2>
            <p>
              Since we operate in multiple countries, your information may be transferred to and stored in jurisdictions outside your home country. We ensure that appropriate safeguards are in place to protect your data in compliance with applicable laws.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">6. Your Rights</h2>
            <p className="mb-3">You have the right to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Access:</strong> Request a copy of your personal information</li>
              <li><strong>Correction:</strong> Update or correct inaccurate information</li>
              <li><strong>Deletion:</strong> Request deletion of your data (subject to legal obligations)</li>
              <li><strong>Opt-Out:</strong> Unsubscribe from marketing communications</li>
              <li><strong>Data Portability:</strong> Request your data in a portable format</li>
            </ul>
            <p className="mt-3">
              To exercise these rights, contact us at <a href="mailto:info@medicol.me" className="text-primary hover:underline">info@medicol.me</a>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">7. Data Retention</h2>
            <p>
              We retain your information for as long as necessary to fulfill the purposes outlined in this policy or as required by law. Medical records may be retained for a longer period in compliance with healthcare regulations.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">8. Cookies and Tracking Technologies</h2>
            <p className="mb-3">
              Our website uses cookies and similar technologies to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Enhance user experience</li>
              <li>Analyze website traffic</li>
              <li>Personalize content</li>
            </ul>
            <p className="mt-3">
              You can manage cookie preferences through your browser settings.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">9. Changes to This Privacy Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. Any changes will be posted on our website with an updated "Last Updated" date. Continued use of our services after changes constitutes acceptance of the revised policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">10. Contact Us</h2>
            <p className="mb-3">
              If you have any questions or concerns about this Privacy Policy, please contact us:
            </p>
            <div className="bg-muted/50 p-6 rounded-lg border border-border/40">
              <p className="font-semibold text-foreground mb-2">Medicol Medical Tourism</p>
              <p>Email: <a href="mailto:info@medicol.me" className="text-primary hover:underline">info@medicol.me</a></p>
              <p>Phone: <a href="tel:+573052757316" className="text-primary hover:underline">+57 305 275 7316</a></p>
              <p>WhatsApp: <a href="https://wa.me/573052757316" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">+57 305 275 7316</a></p>
            </div>
          </section>

          <div className="mt-12 p-6 bg-primary/5 border border-primary/20 rounded-lg">
            <p className="text-sm text-muted-foreground">
              <strong>Note:</strong> By using our services, you acknowledge that you have read and understood this Privacy Policy and agree to its terms.
            </p>
          </div>
        </div>
      </LegalLayout>
    </>
  );
};

export default PrivacyPolicyPage;
