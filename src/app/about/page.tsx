import PageHeader from "@/components/ui/PageHeader";
import AboutSection from "@/components/sections/about/AboutSection";
import MissionSection from "@/components/sections/about/MissionSection";
import TeamSection from "@/components/sections/about/TeamSection";
import CtaBanner from "@/components/sections/home/CtaBanner";

export const metadata = {
  title: "About Us | Vantage Real Estate",
  description: "Learn more about Vantage Real Estate's history, values, and global reach.",
};

export default function AboutPage() {
  return (
    <>
      <PageHeader 
        title="About Vantage" 
        description="A legacy of excellence in luxury real estate, built on integrity and global insight."
        breadcrumbs={[{ label: "About", href: "/about" }]}
      />
      
      <AboutSection />
      <MissionSection />
      <TeamSection />

      <CtaBanner />
    </>
  );
}
