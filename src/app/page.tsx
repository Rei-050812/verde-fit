import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Concerns from "@/components/sections/Concerns";
import Reasons from "@/components/sections/Reasons";
import Testimonials from "@/components/sections/Testimonials";
import Profile from "@/components/sections/Profile";
import Pricing from "@/components/sections/Pricing";
import FAQ from "@/components/sections/FAQ";
import Access from "@/components/sections/Access";
import CTA from "@/components/sections/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Concerns />
      <Reasons />
      <Testimonials />
      <Profile />
      <Pricing />
      <FAQ />
      <Access />
      <CTA />
    </>
  );
}
