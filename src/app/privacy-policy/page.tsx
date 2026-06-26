import PageHeader from "@/components/ui/PageHeader";
import PrivacyPolicySection from "@/components/sections/legal/PrivacyPolicySection";

export const metadata = {
  title: "Privacy Policy | OSMIKE BDM NIG LIMITED",
  description: "Learn about how OSMIKE BDM NIG LIMITED collects, uses, and protects your personal information.",
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
