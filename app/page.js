import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import FeaturesAccordion from "@/components/FeaturesAccordion";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import Testimonials3 from "@/components/Testimonials3";
import config from "@/config";

export default function Home() {
  return (
    <>
      < Header />
      < main >
        < Hero 
            // title="Create and share AI&apos;s you can talk to"
            // description="Sometimes you need someone to talk things through with. We make it easy to have those conversations with exactly the right personality."
            // ctaButtonText="Try it out"
            // img="/join.png"
            // ctaButtonLink={config.auth.callbackUrl}
        />
        < Problem />
        < FeaturesAccordion />
        < Testimonials3 />
        < Pricing />
        < FAQ />
        < CTA />
      </ main >
      < Footer />
    </>
  );
}