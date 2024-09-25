import { C_B_BTN_OBTERAJUDA, C_BannerHeroSecond, C_BannerInfoText, InforPostUser } from "./style"

export const BannerHeroSecond = () => {
    return (
        <C_BannerHeroSecond >
            <InforPostUser>
                <h4>
                    Francisco  Jamba
                </h4>
                <p>Guia da Angohost</p>
            </InforPostUser>
            <div></div>
            <C_BannerInfoText>
                <h2> Por que escolher a Angohost?</h2>
                <p>Porque nós sabemos que até mesmo a melhor tecnologia nada mais é do que um reflexo das pessoas que estão por trás dela.
                    É por isso que oferecemos suporte técnico especializado e muito mais.</p>

                <C_B_BTN_OBTERAJUDA href="https://ajuda.angohost.ao" style={{ textDecoration: "none" }}>Obter Ajuda</C_B_BTN_OBTERAJUDA>
            </C_BannerInfoText>
        </C_BannerHeroSecond>
    )
}