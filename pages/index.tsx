import CarbonCreditSection from "../components/Home/CarbonCreditSection";
import CarRaceSection from "../components/Home/CarRaceSection";
import CombatGameSection from "../components/Home/CombatGameSection";
import ContactSection from "../components/Home/ContactSection";
import CountDownSection from "../components/Home/CountDownSection";
import HeroSection from "../components/Home/HeroSection";
import IconSection from "../components/Home/IconSection";
import PlayAndEarnSection from "../components/Home/PlayAndEarnSection";
import RoadMapSection from "../components/Home/RoadMapSection";
import TokenDistributionSection from "../components/Home/TokenDistributionSection";
import TokenEconomicSection from "../components/Home/TokenEconomicSection";
import WalletSection from "../components/Home/WalletSection";
import WelcomeSection from "../components/Home/WelcomeSection";
import WhitePaperSection from "../components/Home/WhitePaperSection";
import WhyChooseUsSection from "../components/Home/WhyChooseUsSection";
import Meta from "../components/Meta/Meta";

export default function Home() {
    return (
        <>
            <Meta
                title="Metadorado"
                keywords="Metadorado"
                description="Metadorado"
            />

            <HeroSection />
            <WelcomeSection />
            <PlayAndEarnSection />
            <CarRaceSection />
            <IconSection />
            <CountDownSection />
            <CarbonCreditSection />
            <CombatGameSection />
            <WhitePaperSection />
            <WhyChooseUsSection />
            <TokenEconomicSection />
            <TokenDistributionSection />
            <RoadMapSection />
            <WalletSection />
            <ContactSection />
        </>
    );
}
