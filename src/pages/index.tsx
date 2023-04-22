import HeroSection from "../components/HeroSection";
import ContactSection from "@/components/ContactSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import Testimonials from "@/components/Testimonials";
import ServicesSection from "@/components/ServicesSection";
import FormerClientLogosSection from "@/components/FormerClientLogosSections";

// const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <HeroSection />
      <FormerClientLogosSection />
      <ServicesSection />
      <Testimonials />
      <ContactSection />
      <FAQSection />
      <Footer />
    </main>
  );
}
