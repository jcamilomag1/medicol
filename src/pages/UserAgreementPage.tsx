import { Helmet } from "react-helmet";
import { LegalLayout } from "@/components/legal/LegalLayout";

const UserAgreementPage = () => {
  return (
    <>
      <Helmet>
        <title>User Agreement - Medicol Medical Tourism</title>
        <meta name="description" content="User Agreement Contract for Medicol Medical Tourism - Terms and conditions for our medical tourism services." />
        <meta name="robots" content="noindex, follow" />
      </Helmet>

      <LegalLayout
        title="User Agreement Contract"
        lastUpdated="January 2025"
        breadcrumb="User Agreement"
      >
        <div className="space-y-8">
          <section>
            <p className="text-lg">
              This User Agreement ("Agreement") is entered into between Medicol Medical Tourism ("Medicol," "we," "us," or "our") and the individual ("Client," "you," or "your") seeking medical tourism services. By engaging our services, you agree to the terms and conditions outlined below.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">1. Scope of Services</h2>
            <p className="mb-3">Medicol provides medical tourism facilitation services, which may include but are not limited to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Coordinating consultations with licensed healthcare providers</li>
              <li>Arranging medical procedures and treatments</li>
              <li>Organizing travel, accommodation, and logistics</li>
              <li>Providing post-treatment follow-up and support</li>
            </ul>
            <p className="mt-3">
              <strong>Important:</strong> Medicol acts as a facilitator and is not a healthcare provider. All medical treatments are performed by licensed, independent healthcare professionals.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">2. Medical Provider Relationship</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Medicol partners with accredited hospitals, clinics, and licensed medical professionals.</li>
              <li>The healthcare providers are solely responsible for the medical services provided.</li>
              <li>Medicol does not guarantee specific medical outcomes or results.</li>
              <li>Clients are encouraged to conduct their own research and seek independent medical advice before proceeding with any treatment.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">3. Informed Consent and Medical Decisions</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Clients must provide accurate and complete medical history and health information.</li>
              <li>Clients are responsible for understanding the risks, benefits, and alternatives of any medical procedure.</li>
              <li>Medicol will facilitate communication between clients and healthcare providers, but final medical decisions rest with the client and their chosen medical professional.</li>
              <li>Clients must sign informed consent forms provided by healthcare providers before undergoing any procedure.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">4. Payments and Fees</h2>
            
            <h3 className="text-xl font-semibold text-foreground mb-3">a. Service Fees</h3>
            <p className="mb-3">
              Medicol charges a facilitation fee for coordinating services. This fee is separate from medical, travel, and accommodation costs.
            </p>

            <h3 className="text-xl font-semibold text-foreground mb-3">b. Payment Terms</h3>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>A deposit may be required to confirm bookings.</li>
              <li>Full payment must be made before the scheduled treatment date unless otherwise agreed upon.</li>
              <li>Payment methods include bank transfers, credit/debit cards, and other approved methods.</li>
            </ul>

            <h3 className="text-xl font-semibold text-foreground mb-3">c. Refund Policy</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Deposits are non-refundable unless the medical provider cancels the procedure.</li>
              <li>Refunds for medical services are subject to the policies of the healthcare provider.</li>
              <li>Cancellations made by the client may result in partial or full forfeiture of payments, depending on the timing and circumstances.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">5. Travel and Logistics</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Medicol assists in arranging flights, accommodations, and transportation but is not responsible for delays, cancellations, or disruptions caused by airlines, hotels, or third-party service providers.</li>
              <li>Clients are responsible for obtaining necessary travel documents, including passports and visas.</li>
              <li>Travel insurance is strongly recommended and may be required.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">6. Limitation of Liability</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Medicol is not liable for any medical complications, adverse outcomes, or malpractice by healthcare providers.</li>
              <li>Medicol is not responsible for losses or damages resulting from travel disruptions, accommodation issues, or unforeseen events beyond our control (e.g., natural disasters, pandemics, political instability).</li>
              <li>Clients acknowledge that medical procedures carry inherent risks and agree to hold Medicol harmless for any complications arising from treatments.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">7. Insurance</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Clients are strongly encouraged to obtain travel and medical insurance before engaging in medical tourism.</li>
              <li>Medicol does not provide insurance coverage and is not responsible for claims denied by insurance providers.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">8. Confidentiality and Privacy</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Medicol is committed to protecting client privacy in accordance with our Privacy Policy.</li>
              <li>Medical records and personal information will be shared only with authorized healthcare providers and service partners necessary for treatment and logistics.</li>
              <li>Clients consent to the collection, use, and disclosure of their information as outlined in our Privacy Policy.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">9. Governing Law and Dispute Resolution</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>This Agreement is governed by the laws of Colombia.</li>
              <li>Any disputes arising from this Agreement will be resolved through good-faith negotiation.</li>
              <li>If a resolution cannot be reached, disputes will be subject to binding arbitration under the rules of the Colombian Arbitration Center.</li>
              <li>Clients agree to waive their right to pursue class-action lawsuits against Medicol.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">10. Contact Information</h2>
            <p className="mb-3">
              For questions or concerns regarding this Agreement, please contact us:
            </p>
            <div className="bg-muted/50 p-6 rounded-lg border border-border/40">
              <p className="font-semibold text-foreground mb-2">Medicol Medical Tourism</p>
              <p>Email: <a href="mailto:info@medicol.me" className="text-primary hover:underline">info@medicol.me</a></p>
              <p>Phone: <a href="tel:+573052757316" className="text-primary hover:underline">+57 305 275 7316</a></p>
              <p>WhatsApp: <a href="https://wa.me/573052757316" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">+57 305 275 7316</a></p>
            </div>
          </section>

          <div className="mt-12 p-6 bg-primary/5 border border-primary/20 rounded-lg space-y-4">
            <p className="font-semibold text-foreground">
              Acknowledgment and Acceptance
            </p>
            <p className="text-sm text-muted-foreground">
              By using Medicol's services, you acknowledge that you have read, understood, and agree to be bound by the terms of this User Agreement. If you do not agree with any part of this Agreement, you should not proceed with our services.
            </p>
            <p className="text-sm text-muted-foreground">
              <strong>Note:</strong> Medicol reserves the right to modify this Agreement at any time. Clients will be notified of significant changes, and continued use of our services constitutes acceptance of the updated terms.
            </p>
          </div>
        </div>
      </LegalLayout>
    </>
  );
};

export default UserAgreementPage;
