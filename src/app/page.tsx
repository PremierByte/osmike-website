import Hero from "@/components/sections/home/Hero";
import Features from "@/components/sections/home/Features";
import AboutTeaser from "@/components/sections/home/AboutTeaser";
import Testimonials from "@/components/sections/home/Testimonials";
import FaqTeaser from "@/components/sections/home/FaqTeaser";
import CtaBanner from "@/components/sections/home/CtaBanner";

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <AboutTeaser />
      <Testimonials />
      <FaqTeaser />
      <CtaBanner />
    </>
  );
}
