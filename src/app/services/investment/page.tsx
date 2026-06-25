import PageHeader from "@/components/ui/PageHeader";
import CtaBanner from "@/components/sections/home/CtaBanner";
import InvestmentSection from "@/components/sections/services/InvestmentSection";
import ServiceProcessSection from "@/components/sections/services/ServiceProcessSection";
import ServiceBenefitsSection from "@/components/sections/services/ServiceBenefitsSection";
import { LineChart, PieChart, Globe } from "lucide-react";

export const metadata = {
  title: "Real Estate Investment Advisory | Vantage Real Estate",
  description: "Data-driven portfolio strategies and high-yield opportunities.",
};

export default function InvestmentAdvisoryPage() {
  return (
    <>
      <PageHeader 
        title="Real Estate Investment Advisory" 
        description="Translating market complexity into actionable strategies that multiply wealth."
        breadcrumbs={[
          { label: "Services", href: "/services" },
          { label: "Investment Advisory", href: "/services/investment" }
        ]}
      />
      <InvestmentSection />
      <ServiceProcessSection 
        title="Investment Strategy Process"
        steps={[
          { title: "Portfolio Review", description: "Analyzing your current assets, risk tolerance, and growth objectives." },
          { title: "Market Identification", description: "Pinpointing high-yield domestic and international markets." },
          { title: "Asset Acquisition", description: "Executing purchases of undervalued or high-potential properties." },
          { title: "Performance Tracking", description: "Continuous monitoring and quarterly strategic adjustments." }
        ]}
      />
      <ServiceBenefitsSection 
        title="Investment Advantages"
        benefits={[
          { title: "Data-Driven Decisions", description: "We rely on hard data and predictive modeling, not speculation.", icon: <LineChart className="w-7 h-7 text-secondary" /> },
          { title: "Diversification", description: "Strategies to spread risk across various asset classes and locations.", icon: <PieChart className="w-7 h-7 text-secondary" /> },
          { title: "Global Access", description: "Connections to exclusive, off-market opportunities worldwide.", icon: <Globe className="w-7 h-7 text-secondary" /> }
        ]}
      />
      <CtaBanner />
    </>
  );
}
