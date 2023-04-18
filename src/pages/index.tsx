import {Inter} from 'next/font/google'
import HeroSection from '../components/HeroSection'
import ContactSection from "@/components/ContactSection";

const inter = Inter({subsets: ['latin']})

export default function Home() {
    return (
        <main>
            <HeroSection/>
            <ContactSection/>
        </main>
    )
}
