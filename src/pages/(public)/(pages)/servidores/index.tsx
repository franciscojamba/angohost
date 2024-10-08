import "./style-servidores.css"
import { Footer } from "../../components/footer"
import NavbarFull from "../../components/nav/nav"
import { LOGOBRANCO } from "../../../../utils/logos"
import { FaServer } from "react-icons/fa6";
import { Helmet } from "react-helmet"

import ProductCardCloudServer from "../cloud-server-windows/components/card-plano"


interface Product {
    id: number;
    title: string;
    price: number;
    cores: number;
    ram: string;
    storage: string;
    snapshots: number;
    traffic: string;
}
const Servidores = () => {




    const products: Product[] = [
        {
            id: 1,
            title: "CLOUD VPS 1",
            price: 14000.50,
            cores: 4,
            ram: "6 GB RAM",
            storage: "100 GB NVMe or 400 GB SSD",
            snapshots: 1,
            traffic: "32 TB Traffic* Unlimited Incoming",
        },
        {
            id: 2,
            title: "CLOUD VPS 2",
            price: 30000.50,
            cores: 6,
            ram: "16 GB RAM",
            storage: "200 GB NVMe or 400 GB SSD",
            snapshots: 2,
            traffic: "32 TB Traffic* Unlimited Incoming",
        },
        // Add more products as needed
    ];

    return (
        <>
            <Helmet>
                <title>Servidores VPS super rápido equipado com SSD</title>
            </Helmet>
            <NavbarFull logo={LOGOBRANCO} color="#ffff" />
            <div>
                <div className="container-hospedagem">
                    <div className="container-hospedagem-wordpress" >
                        <div className="content-hospedagem-wordpress-left">
                            <div className="content-info" >
                                <h3>SERVIDORES</h3>
                                <h2>Desempenho e Flexibilidade com nossos Servidores VPS!</h2>
                                <p>Hospedagem com Uptime Garantido de 99,9% e Suporte Especializado 24/7!</p>
                            </div>

                           
                            {/* <a href="#blog-petrohost" className="why-hostgator">Por que escolher a Petrohost</a> */}
                        </div>
                        <div className="content-hospedagem-wordpress-rigth" >
                            <FaServer color="#fff" size={200} />
                        </div>
                    </div>


                </div>
            </div>
            <div id="planos-vps" className="plano-title"  >
                <h2>Hospedagem VPS</h2>
                <p>Aproveite armazenamento ilimitado, sites ilimitados e transferência de dados sem limites. Desempenho superior e flexibilidade total para o seu negócio!".</p>
            </div>
            {/* <div className="planos-word-press" >
                {
                    planos.map((plan, index) => (
                        <PricingCard link={()=>{}} key={index} cicle={plan.cicle} descontos={0} descricao={plan.descricao} id={index.toString()} planoPopular={plan.plano_m} preco={parseInt(plan.price)} precoComDesconto={parseInt(plan.price) - 1000} recursos={plan.features} titulo={plan.title} info={"lorem ipsum dolor teste beta"} />
                    ))}

            </div> */}  <div className="flex flex-wrap justify-center gap-4">
                {products.map((product) => (
                    <ProductCardCloudServer key={product.id} product={product} />
                ))}
                 {products.map((product) => (
                    <ProductCardCloudServer key={product.id} product={product} />
                ))}
            </div>

            {/* <div className="container-acordion" >
                <div className="container-acordion-width" >
                    <AccordionPetrohost />
                </div>
            </div> */}
            <Footer />
        </>
    )
}


export default Servidores;