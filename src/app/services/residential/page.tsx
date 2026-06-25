import PageHeader from "@/components/ui/PageHeader";
import CtaBanner from "@/components/sections/home/CtaBanner";
import ResidentialSection from "@/components/sections/services/ResidentialSection";
import ServiceProcessSection from "@/components/sections/services/ServiceProcessSection";
import ServiceBenefitsSection from "@/components/sections/services/ServiceBenefitsSection";
import { Shield, Clock, TrendingUp } from "lucide-react";

export const metadata = {
  title: "Residential Property Management | Vantage Real Estate",
  description: "End-to-end management of luxury residential assets.",
};

export default function ResidentialManagementPage() {
  return (
    <>
      <PageHeader 
        title="Residential Property Management" 
        description="White-glove management for your luxury residential assets, maximizing yield while minimizing your operational burden."
        breadcrumbs={[
          { label: "Services", href: "/services" },
          { label: "Residential Management", href: "/services/residential" }
        ]}
      />
      <ResidentialSection />
      <ServiceProcessSection 
        title="Our Management Process"
        steps={[
          { title: "Initial Audit", description: "Comprehensive review of the property's condition, compliance, and financials." },
          { title: "Strategic Positioning", description: "Market analysis to determine optimal rental rates and positioning." },
          { title: "Tenant Acquisition", description: "Rigorous screening and selection of high-quality tenants." },
          { title: "Ongoing Management", description: "24/7 maintenance support and proactive asset preservation." }
        ]}
      />
      <ServiceBenefitsSection 
        title="Why Choose Our Management"
        benefits={[
          { title: "Maximized Yields", description: "We proactively manage rents to ensure your property performs at peak market rates.", icon: <TrendingUp className="w-7 h-7 text-secondary" /> },
          { title: "Risk Mitigation", description: "Thorough legal and financial compliance to protect your asset.", icon: <Shield className="w-7 h-7 text-secondary" /> },
          { title: "24/7 Availability", description: "Round-the-clock support for emergencies, ensuring tenant satisfaction.", icon: <Clock className="w-7 h-7 text-secondary" /> }
        ]}
      />
      <CtaBanner />
    </>
  );
}
