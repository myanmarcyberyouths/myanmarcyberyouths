import {Inter} from 'next/font/google'
import HeroSection from '../components/HeroSection'
import ContactSection from "@/components/ContactSection";
import FAQSection from "@/components/FAQSection";
import NewLetter from "@/components/NewLetter";
import Footer from "@/components/Footer";
import ClientLogos from "@/components/ClientLogos";
import Testimonials from "@/components/Testimonials";

const inter = Inter({subsets: ['latin']})

export default function Home() {
    return (
        <main>
            <HeroSection/>
            <ClientLogos/>
            <Testimonials/>
            <ContactSection/>
            <FAQSection/>
            <Footer/>
        </main>
    )
}
