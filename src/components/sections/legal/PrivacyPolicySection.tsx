import React from "react";

export default function PrivacyPolicySection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="prose prose-slate max-w-none">
          <h2 className="text-3xl font-bold text-primary mb-6">1. Introduction</h2>
          <p className="text-slate-600 mb-6 leading-relaxed">
            Welcome to Vantage Real Estate ("we", "our", "us"). We are committed to protecting and respecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
          </p>

          <h2 className="text-3xl font-bold text-primary mb-6 mt-12">2. Information We Collect</h2>
          <p className="text-slate-600 mb-6 leading-relaxed">
            We may collect personal information that you voluntarily provide to us when you express an interest in obtaining information about us or our products and Services, when you participate in activities on the Website, or otherwise when you contact us. The personal information that we collect depends on the context of your interactions with us and the Website, the choices you make, and the products and features you use. The personal information we collect may include the following:
          </p>
          <ul className="list-disc pl-6 text-slate-600 mb-6 space-y-2">
            <li>Names, email addresses, phone numbers, and other similar contact data.</li>
            <li>Information related to your real estate inquiries, preferences, and investment goals.</li>
            <li>Financial information provided during property valuation or investment advisory.</li>
          </ul>

          <h2 className="text-3xl font-bold text-primary mb-6 mt-12">3. How We Use Your Information</h2>
          <p className="text-slate-600 mb-6 leading-relaxed">
            We use personal information collected via our Website for a variety of business purposes described below. We process your personal information for these purposes in reliance on our legitimate business interests, in order to enter into or perform a contract with you, with your consent, and/or for compliance with our legal obligations.
          </p>
          <ul className="list-disc pl-6 text-slate-600 mb-6 space-y-2">
            <li>To fulfill and manage your requests for property management, brokerage, and advisory services.</li>
            <li>To send you marketing and promotional communications (if you have opted in).</li>
            <li>To respond to your inquiries and offer support.</li>
            <li>To improve our website, services, and overall user experience.</li>
          </ul>

          <h2 className="text-3xl font-bold text-primary mb-6 mt-12">4. Sharing Your Information</h2>
          <p className="text-slate-600 mb-6 leading-relaxed">
            We only share information with your consent, to comply with laws, to provide you with services, to protect your rights, or to fulfill business obligations. We may share your data with trusted third-party vendors, service providers, contractors, or agents who perform services for us or on our behalf and require access to such information to do that work.
          </p>

          <h2 className="text-3xl font-bold text-primary mb-6 mt-12">5. Data Security</h2>
          <p className="text-slate-600 mb-6 leading-relaxed">
            We have implemented appropriate technical and organizational security measures designed to protect the security of any personal information we process. However, please also remember that we cannot guarantee that the internet itself is 100% secure. Although we will do our best to protect your personal information, transmission of personal information to and from our Website is at your own risk.
          </p>

          <h2 className="text-3xl font-bold text-primary mb-6 mt-12">6. Contact Us</h2>
          <p className="text-slate-600 mb-6 leading-relaxed">
            If you have questions or comments about this policy, you may email us at privacy@vantage-agency.com or by post to:
            <br /><br />
            <strong>Vantage Real Estate Agency</strong><br />
            123 Luxury Lane<br />
            Metropolis, NY 10001<br />
            United States
          </p>
        </div>
      </div>
    </section>
  );
}
