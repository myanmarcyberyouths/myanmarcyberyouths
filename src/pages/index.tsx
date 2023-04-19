import {Inter} from 'next/font/google'
import HeroSection from '../components/HeroSection'
import ContactSection from "@/components/ContactSection";
import FAQSection from "@/components/FAQSection";
import NewLetter from "@/components/NewLetter";

const inter = Inter({subsets: ['latin']})

export default function Home() {
    return (
        <main>
            <HeroSection/>
            <ContactSection/>
            <FAQSection/>
        </main>
    )
}
