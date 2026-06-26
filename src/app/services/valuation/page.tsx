import PageHeader from "@/components/ui/PageHeader";
import CtaBanner from "@/components/sections/home/CtaBanner";
import ValuationSection from "@/components/sections/services/ValuationSection";
import ServiceProcessSection from "@/components/sections/services/ServiceProcessSection";
import ServiceBenefitsSection from "@/components/sections/services/ServiceBenefitsSection";
import { FileSearch, Calculator, BadgeCheck } from "lucide-react";

export const metadata = {
  title: "Luxury Property Valuation | OSMIKE BDM NIG LIMITED",
  description: "Meticulous appraisals combining proprietary market algorithms with nuanced understanding.",
};

export default function ValuationPage() {
  return (
    <>
      <PageHeader 
        title="Luxury Property Valuation" 
        description="Establishing the true worth of prestige assets through rigorous analysis and market nuance."
        breadcrumbs={[
          { label: "Services", href: "/services" },
          { label: "Property Valuation", href: "/services/valuation" }
        ]}
      />
      <ValuationSection />
      <ServiceProcessSection 
        title="Valuation Methodology"
        steps={[
          { title: "Property Inspection", description: "Detailed physical walkthrough to assess condition and unique features." },
          { title: "Comparative Analysis", description: "Benchmarking against recent sales and active listings in the micro-market." },
          { title: "Financial Modeling", description: "Income capitalization and replacement cost approaches when applicable." },
          { title: "Final Reporting", description: "Delivery of a comprehensive, legally defensible valuation document." }
        ]}
      />
      <ServiceBenefitsSection 
        title="Why Trust Our Valuations"
        benefits={[
          { title: "Extreme Accuracy", description: "Algorithms combined with human nuance for precise pricing.", icon: <Calculator className="w-7 h-7 text-secondary" /> },
          { title: "Deep Diligence", description: "Leaving no stone unturned in zoning, historical, and market research.", icon: <FileSearch className="w-7 h-7 text-secondary" /> },
          { title: "Certified Experts", description: "Appraisals conducted by globally recognized valuation professionals.", icon: <BadgeCheck className="w-7 h-7 text-secondary" /> }
        ]}
      />
      <CtaBanner />
    </>
  );
}
