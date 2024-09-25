// import LogoEndiama from "../../assets/logos_clientes/logo_endiama_01.png"
import LogoAngoMart from "../../../../assets/images/logos_clientes/logo_angomart.png"
import LogoUniversal from "../../../../assets/images/logos_clientes/logo-universal-new.png"
import LogoBaxtter from "../../../../assets/images/logos_clientes/logo_baxtter.png"
// import LogoIsptec from "../../assets/logos_clientes/logo_isptec.png"
import LogoSuper from "../../../../assets/images/logos_clientes/logo_super.png"
import LogoTransjorn from "../../../../assets/images/logos_clientes/logo_transjorn.png"
import LogoSoapro from "../../../../assets/images/logos_clientes/soapro.png"
import LogoTopspot from "../../../../assets/images/logos_clientes/topspot.webp"
import LogoNeofarma from "../../../../assets/images/logos_clientes/neofarma.png"
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './slider.css'

export const SidesClientes = () => {

  const brands = [
    { name: 'Endiama', logo: "https://www.narispc.co.ao/images/media/2022/04/kZRfY08304.png" },
    { name: 'Universal', logo: LogoUniversal },
    { name: 'AngoMart', logo: LogoAngoMart },
    { name: 'Baxxter', logo: LogoBaxtter },
    { name: 'Isptec', logo: "https://bolsas.isptec.co.ao/wp-content/uploads/2023/09/Horizontal-1.png" },
    { name: 'Super', logo: LogoSuper },
    { name: 'Transjorn', logo: LogoTransjorn },
    { name: 'Yurman Advogados', logo: "https://yurman-advogados.com/assets/template/img/logo2.png"},
    { name: 'Soapro', logo: LogoSoapro },
    { name: 'Topspot Angola', logo: LogoTopspot},
    { name: 'Neofarma', logo: LogoNeofarma },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div  className="slider_container" style={{ width: "100%",display:"flex", justifyContent: "center", alignItems: "center" }} >
      <Slider {...settings} arrows={false}className="slider" centerMode>
        {brands.map((brand, index) => (
          <div key={index} className="slide_item">
            <img src={brand.logo} alt={brand.name} className="slide_item_image"/>
          </div>
        ))}
      </Slider>
    </div>
  )
}