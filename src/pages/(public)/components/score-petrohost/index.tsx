import "./score-petrohost.css"
import { FaWordpressSimple } from "react-icons/fa6";

export const ScorePetrohost = () => {

    return (
        <>
            <div className="ratings-container-column" >
                <div className="ratings-container-recomendacao" >


                    <div>
                        <FaWordpressSimple size={26} />
                    </div>
                    <div className="ratings-container-recomendacao-info" >
                        <p>Recomendado por <a href="petrohost.ao">WordPress.org</a> </p>
                    </div>
                </div>
                <div className="ratings-container">
                    <a href="https://pt.trustpilot.com/review/petrohost.ao" className="rating">
                        <img src="data:image/svg+xml,%3Csvg%20role%3D%22img%22%20aria-labelledby%3D%22trustpilotLogo-1fctjenadw9%22%20viewBox%3D%220%200%20126%2031%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20style%3D%22position%3A%20absolute%3B%20height%3A%20100%25%3B%20width%3A%20100%25%3B%20left%3A%200%3B%20top%3A%200%3B%22%3E%3Ctitle%20id%3D%22trustpilotLogo-1fctjenadw9%22%3ETrustpilot%3C%2Ftitle%3E%3Cpath%20class%3D%22tp-logo__text%22%20d%3D%22M33.074774%2011.07005H45.81806v2.364196h-5.010656v13.290316h-2.755306V13.434246h-4.988435V11.07005h.01111zm12.198892%204.319629h2.355341v2.187433h.04444c.077771-.309334.222203-.60762.433295-.894859.211092-.287239.466624-.56343.766597-.79543.299972-.243048.633276-.430858.999909-.585525.366633-.14362.744377-.220953%201.12212-.220953.288863%200%20.499955.011047.611056.022095.1111.011048.222202.033143.344413.04419v2.408387c-.177762-.033143-.355523-.055238-.544395-.077333-.188872-.022096-.366633-.033143-.544395-.033143-.422184%200-.822148.08838-1.199891.254096-.377744.165714-.699936.41981-.977689.740192-.277753.331429-.499955.729144-.666606%201.21524-.166652.486097-.244422%201.03848-.244422%201.668195v5.39125h-2.510883V15.38968h.01111zm18.220567%2011.334883H61.02779v-1.579813h-.04444c-.311083.574477-.766597%201.02743-1.377653%201.369908-.611055.342477-1.233221.51924-1.866497.51924-1.499864%200-2.588654-.364573-3.25526-1.104765-.666606-.740193-.999909-1.856005-.999909-3.347437V15.38968h2.510883v6.948968c0%20.994288.188872%201.701337.577725%202.1101.377744.408763.922139.618668%201.610965.618668.533285%200%20.96658-.077333%201.322102-.243048.355524-.165714.644386-.37562.855478-.65181.222202-.265144.377744-.596574.477735-.972194.09999-.37562.144431-.784382.144431-1.226288v-6.573349h2.510883v11.323836zm4.27739-3.634675c.07777.729144.355522%201.237336.833257%201.535623.488844.287238%201.06657.441905%201.744286.441905.233312%200%20.499954-.022095.799927-.055238.299973-.033143.588836-.110476.844368-.209905.266642-.099429.477734-.254096.655496-.452954.166652-.198857.244422-.452953.233312-.773335-.01111-.320381-.133321-.585525-.355523-.784382-.222202-.209906-.499955-.364573-.844368-.497144-.344413-.121525-.733267-.232-1.17767-.320382-.444405-.088381-.888809-.18781-1.344323-.287239-.466624-.099429-.922138-.232-1.355432-.37562-.433294-.14362-.822148-.342477-1.166561-.596573-.344413-.243048-.622166-.56343-.822148-.950097-.211092-.386668-.311083-.861716-.311083-1.436194%200-.618668.155542-1.12686.455515-1.54667.299972-.41981.688826-.75124%201.14434-1.005336.466624-.254095.97769-.430858%201.544304-.541334.566615-.099429%201.11101-.154667%201.622075-.154667.588836%200%201.15545.066286%201.688736.18781.533285.121524%201.02213.320381%201.455423.60762.433294.276191.788817.640764%201.07768%201.08267.288863.441905.466624.98324.544395%201.612955h-2.621984c-.122211-.596572-.388854-1.005335-.822148-1.204193-.433294-.209905-.933248-.309334-1.488753-.309334-.177762%200-.388854.011048-.633276.04419-.244422.033144-.466624.088382-.688826.165715-.211092.077334-.388854.198858-.544395.353525-.144432.154667-.222203.353525-.222203.60762%200%20.309335.111101.552383.322193.740193.211092.18781.488845.342477.833258.475048.344413.121524.733267.232%201.177671.320382.444404.088381.899918.18781%201.366542.287239.455515.099429.899919.232%201.344323.37562.444404.14362.833257.342477%201.17767.596573.344414.254095.622166.56343.833258.93905.211092.37562.322193.850668.322193%201.40305%200%20.673906-.155541%201.237336-.466624%201.712385-.311083.464001-.711047.850669-1.199891%201.137907-.488845.28724-1.04435.508192-1.644295.640764-.599946.132572-1.199891.198857-1.788727.198857-.722156%200-1.388762-.077333-1.999818-.243048-.611056-.165714-1.14434-.408763-1.588745-.729144-.444404-.33143-.799927-.740192-1.05546-1.226289-.255532-.486096-.388853-1.071621-.411073-1.745528h2.533103v-.022095zm8.288135-7.700208h1.899828v-3.402675h2.510883v3.402675h2.26646v1.867052h-2.26646v6.054109c0%20.265143.01111.486096.03333.684954.02222.18781.07777.353524.155542.486096.07777.132572.199981.232.366633.298287.166651.066285.377743.099428.666606.099428.177762%200%20.355523%200%20.533285-.011047.177762-.011048.355523-.033143.533285-.077334v1.933338c-.277753.033143-.555505.055238-.811038.088381-.266642.033143-.533285.04419-.811037.04419-.666606%200-1.199891-.066285-1.599855-.18781-.399963-.121523-.722156-.309333-.944358-.552381-.233313-.243049-.377744-.541335-.466625-.905907-.07777-.364573-.13332-.784383-.144431-1.248384v-6.683825h-1.899827v-1.889147h-.02222zm8.454788%200h2.377562V16.9253h.04444c.355523-.662858.844368-1.12686%201.477644-1.414098.633276-.287239%201.310992-.430858%202.055369-.430858.899918%200%201.677625.154667%202.344231.475048.666606.309335%201.222111.740193%201.666515%201.292575.444405.552382.766597%201.193145.9888%201.92229.222202.729145.333303%201.513527.333303%202.3421%200%20.762288-.099991%201.50248-.299973%202.20953-.199982.718096-.499955%201.347812-.899918%201.900194-.399964.552383-.911029.98324-1.533194%201.31467-.622166.33143-1.344323.497144-2.18869.497144-.366634%200-.733267-.033143-1.0999-.099429-.366634-.066286-.722157-.176762-1.05546-.320381-.333303-.14362-.655496-.33143-.933249-.56343-.288863-.232-.522175-.497144-.722157-.79543h-.04444v5.656393h-2.510883V15.38968zm8.77698%205.67849c0-.508193-.06666-1.005337-.199981-1.491433-.133321-.486096-.333303-.905907-.599946-1.281527-.266642-.37562-.599945-.673906-.988799-.894859-.399963-.220953-.855478-.342477-1.366542-.342477-1.05546%200-1.855387.364572-2.388672%201.093717-.533285.729144-.799928%201.701337-.799928%202.916578%200%20.574478.066661%201.104764.211092%201.59086.144432.486097.344414.905908.633276%201.259432.277753.353525.611056.629716.99991.828574.388853.209905.844367.309334%201.355432.309334.577725%200%201.05546-.121524%201.455423-.353525.399964-.232.722157-.541335.97769-.905907.255531-.37562.444403-.79543.555504-1.270479.099991-.475049.155542-.961145.155542-1.458289zm4.432931-9.99812h2.510883v2.364197h-2.510883V11.07005zm0%204.31963h2.510883v11.334883h-2.510883V15.389679zm4.755124-4.31963h2.510883v15.654513h-2.510883V11.07005zm10.210184%2015.963847c-.911029%200-1.722066-.154667-2.433113-.452953-.711046-.298287-1.310992-.718097-1.810946-1.237337-.488845-.530287-.866588-1.160002-1.12212-1.889147-.255533-.729144-.388854-1.535622-.388854-2.408386%200-.861716.133321-1.657147.388853-2.386291.255533-.729145.633276-1.35886%201.12212-1.889148.488845-.530287%201.0999-.93905%201.810947-1.237336.711047-.298286%201.522084-.452953%202.433113-.452953.911028%200%201.722066.154667%202.433112.452953.711047.298287%201.310992.718097%201.810947%201.237336.488844.530287.866588%201.160003%201.12212%201.889148.255532.729144.388854%201.524575.388854%202.38629%200%20.872765-.133322%201.679243-.388854%202.408387-.255532.729145-.633276%201.35886-1.12212%201.889147-.488845.530287-1.0999.93905-1.810947%201.237337-.711046.298286-1.522084.452953-2.433112.452953zm0-1.977528c.555505%200%201.04435-.121524%201.455423-.353525.411074-.232.744377-.541335%201.01102-.916954.266642-.37562.455513-.806478.588835-1.281527.12221-.475049.188872-.961145.188872-1.45829%200-.486096-.066661-.961144-.188872-1.44724-.122211-.486097-.322193-.905907-.588836-1.281527-.266642-.37562-.599945-.673907-1.011019-.905907-.411074-.232-.899918-.353525-1.455423-.353525-.555505%200-1.04435.121524-1.455424.353525-.411073.232-.744376.541334-1.011019.905907-.266642.37562-.455514.79543-.588835%201.281526-.122211.486097-.188872.961145-.188872%201.447242%200%20.497144.06666.98324.188872%201.458289.12221.475049.322193.905907.588835%201.281527.266643.37562.599946.684954%201.01102.916954.411073.243048.899918.353525%201.455423.353525zm6.4883-9.66669h1.899827v-3.402674h2.510883v3.402675h2.26646v1.867052h-2.26646v6.054109c0%20.265143.01111.486096.03333.684954.02222.18781.07777.353524.155541.486096.077771.132572.199982.232.366634.298287.166651.066285.377743.099428.666606.099428.177762%200%20.355523%200%20.533285-.011047.177762-.011048.355523-.033143.533285-.077334v1.933338c-.277753.033143-.555505.055238-.811038.088381-.266642.033143-.533285.04419-.811037.04419-.666606%200-1.199891-.066285-1.599855-.18781-.399963-.121523-.722156-.309333-.944358-.552381-.233313-.243049-.377744-.541335-.466625-.905907-.07777-.364573-.133321-.784383-.144431-1.248384v-6.683825h-1.899827v-1.889147h-.02222z%22%20fill%3D%22%23191919%22%3E%3C%2Fpath%3E%3Cpath%20class%3D%22tp-logo__star%22%20fill%3D%22%2300B67A%22%20d%3D%22M30.141707%2011.07005H18.63164L15.076408.177071l-3.566342%2010.892977L0%2011.059002l9.321376%206.739063-3.566343%2010.88193%209.321375-6.728016%209.310266%206.728016-3.555233-10.88193%209.310266-6.728016z%22%3E%3C%2Fpath%3E%3Cpath%20class%3D%22tp-logo__star-notch%22%20fill%3D%22%23005128%22%20d%3D%22M21.631369%2020.26169l-.799928-2.463625-5.755033%204.153914z%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E" alt="Trustpilot" />
                        <div className="stars">
                            ★★★★
                        </div>
                        <div className="score">
                            TrustScore 3.8 | 28,115 Avaliações
                        </div>
                    </a>
                    <a href="#" className="rating">
                        <img src="https://pt.hostadvice.com/wp-content/themes/bestwh/v3/dist/img/logo-fox.png" alt="Hostadvice" />
                        <div className="stars">
                            ★★★★★
                        </div>
                        <div className="score">
                            Nota: 4.8/5 | 1,237 Avaliações
                        </div>
                    </a>
                    <a href="#" className="rating">
                        <img src="https://www.hostinger.com.br/h-assets/svg/icons/google-dark.svg" alt="Google" />
                        <div className="stars">
                            ★★★★★
                        </div>
                        <div className="score">
                            Nota: 4.6/5 | 2,432 Avaliações
                        </div>
                    </a>
                    <a href="#" className="rating">
                        <img src="https://www.hostinger.com.br/h-assets/svg/icons/wpbeginner-dark.svg" alt="WPBeginner" />
                        <div className="stars">
                            ★★★★★
                        </div>
                        <div className="score">
                            Nota: 4.7 | 874 Avaliações
                        </div>
                    </a>
                </div>
            </div>
        </>
    )
}