import PageHeader from "@/components/ui/PageHeader";
import FaqSection from "@/components/sections/faq/FaqSection";
import CtaBanner from "@/components/sections/home/CtaBanner";

export const metadata = {
  title: "FAQ | Vantage Real Estate",
  description: "Frequently asked questions about our luxury real estate services.",
};

export default function FaqPage() {
  return (
    <>
      <PageHeader 
        title="Frequently Asked Questions" 
        description="Find answers to common inquiries about our services, methodologies, and expertise."
        breadcrumbs={[{ label: "FAQ", href: "/faq" }]}
      />
      
      <FaqSection />

      <CtaBanner />
    </>
  );
}
