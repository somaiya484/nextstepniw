import FAQ from "@/components/FaqData";
import FreeEvaluationSection from "@/components/FreeEvaluationSection";
import HeroBanner from "@/components/HeroBanner";
import NewsMarquee from "@/components/NewsMarquee";
import OurServicesSection from "@/components/OurServicesSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import Image from "next/image";

export default function Home() {
  return (
    <section>
      <NewsMarquee></NewsMarquee>
      <HeroBanner></HeroBanner>
      <OurServicesSection></OurServicesSection>
      <FreeEvaluationSection></FreeEvaluationSection>
      <WhyChooseSection></WhyChooseSection>
      <FAQ></FAQ>
    </section>
  );
}
