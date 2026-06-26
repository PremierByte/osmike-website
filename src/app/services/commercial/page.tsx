import PageHeader from "@/components/ui/PageHeader";
import CtaBanner from "@/components/sections/home/CtaBanner";
import CommercialSection from "@/components/sections/services/CommercialSection";
import ServiceProcessSection from "@/components/sections/services/ServiceProcessSection";
import ServiceBenefitsSection from "@/components/sections/services/ServiceBenefitsSection";
import { Briefcase, Map, Target } from "lucide-react";

export const metadata = {
  title: "Commercial Brokerage & Leasing | OSMIKE BDM NIG LIMITED",
  description: "Strategic placement and negotiation for prime commercial spaces.",
};

export default function CommercialBrokeragePage() {
  return (
    <>
      <PageHeader 
        title="Commercial Brokerage & Leasing" 
        description="Aligning your operational needs with the optimal geographic footprint to drive business success."
        breadcrumbs={[
          { label: "Services", href: "/services" },
          { label: "Commercial Brokerage", href: "/services/commercial" }
        ]}
      />
      <CommercialSection />
      <ServiceProcessSection 
        title="Commercial Leasing Process"
        steps={[
          { title: "Needs Assessment", description: "Deep dive into your operational requirements and corporate goals." },
          { title: "Market Scanning", description: "Identifying on and off-market opportunities that match your criteria." },
          { title: "Site Tours & Analysis", description: "Coordinated viewings and detailed logistical evaluation." },
          { title: "Lease Negotiation", description: "Aggressive structuring to secure favorable terms and concessions." }
        ]}
      />
      <ServiceBenefitsSection 
        title="The Commercial Edge"
        benefits={[
          { title: "Market Insight", description: "Access to proprietary data on upcoming commercial developments.", icon: <Map className="w-7 h-7 text-secondary" /> },
          { title: "Negotiation Power", description: "Decades of experience securing the best possible lease terms.", icon: <Briefcase className="w-7 h-7 text-secondary" /> },
          { title: "Strategic Alignment", description: "Ensuring your real estate supports your long-term business goals.", icon: <Target className="w-7 h-7 text-secondary" /> }
        ]}
      />
      <CtaBanner />
    </>
  );
}
