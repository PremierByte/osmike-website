import PageHeader from "@/components/ui/PageHeader";
import PrivacyPolicySection from "@/components/sections/legal/PrivacyPolicySection";

export const metadata = {
  title: "Privacy Policy | Vantage Real Estate",
  description: "Learn about how Vantage Real Estate collects, uses, and protects your personal information.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHeader 
        title="Privacy Policy" 
        description="Our commitment to protecting your privacy and personal data."
        breadcrumbs={[{ label: "Privacy Policy", href: "/privacy-policy" }]}
      />
      
      <PrivacyPolicySection />
    </>
  );
}
