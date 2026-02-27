import BackgroundGlow from "@/components/BackgroundGlow";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Features from "@/components/Features";
import Process from "@/components/Process";
import SocialProof from "@/components/SocialProof";
import Pricing from "@/components/Pricing";
import CtaFooter from "@/components/CtaFooter";

export default function Home() {
  return (
    <>
      <BackgroundGlow />
      <Navbar />
      <Hero />
      <Stats />
      <Features />
      <Process />
      <SocialProof />
      <Pricing />
      <CtaFooter />
    </>
  );
}
