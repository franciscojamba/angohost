
import { Helmet } from "react-helmet";
// import { BannerHeroSecond } from "../../components/banner-hero-2";
import { BannerHome } from "../../components/banner-home/banner-home";
import { Footer } from "../../components/footer";
import { Header } from "../../components/header";
// import { PetrohostBanner } from "../../components/petrohost-banner";
import { ListaDePlano } from "../../components/planos";
import { SidesClientes } from "../../components/side_clientes";
import { ContentHero } from "./components/conente-hero-primeiro";
import { GlobeDemo } from "../../components/Globe";
import { TypewriterEffectSmoothDemo } from "../../components/Typewriter/Typewriter";
import { GoogleGeminiEffectDemo } from "../../components/Gemini-Effect/GeminiEffect";

export default function Home() {
    
    return (
        <>
            <Helmet>
                <title>Angohost - Hospedagem de Sites com Especialistas Angolanos</title>
            </Helmet>
            <Header />
            <BannerHome />
            <SidesClientes />
            <ListaDePlano />
            
            <ContentHero />
            {/* <BannerHeroSecond /> */}
            <GlobeDemo/>
            <GoogleGeminiEffectDemo/>
            <TypewriterEffectSmoothDemo/>
            {/* <PetrohostBanner /> */}
            <Footer />
        </>
    )
}