
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './slider.css'
import { LogoClienteAngohost } from '@/constants/clientes-angohost';
import { FlipWords } from '@/components/ui/flip-words';





export const SidesClientes = () => {
  const words = ["HOSPEDAGENS", "E-MAIL", "SITES", "VPS-LINUX","VPS-WINDOWS"];

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
    <div  className="slider_container  flex-col" 
    
    style={{
      width: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      
    }}
    >
   <div className='w-full  flex flex-col justify-center items-center mt-3' >

    <h3 className='font-semibold text-2xl w-1/3 uppercase  text-gray-600' >Hospede seu site com quem é especialista na área, são mais de 9 anos de experiência
    </h3>
    <h3 className='font-semibold text-2xl text-neutral-800' >
    TRABALHANDO COM
    <FlipWords className='text-purple-600' words={words}/>
    </h3>

   </div>

      <Slider {...settings} arrows={false}className="slider" centerMode>
        {LogoClienteAngohost.map((brand, index) => (
          <div key={index} className="slide_item  flex justify-center items-center"   style={{ height: "150px" }}>
            <img src={brand.image} alt={brand.name} className="slide_item_image w-36 h-auto object-contain " style={{ maxHeight: "100%" }}/>
          </div>
        ))}
      </Slider>

      {/* <Slider {...settings} arrows={false}className="slider" centerMode>
        {LogoClienteAngohost.map((brand, index) => (
          <div key={index} className="slide_item  flex justify-center items-center"   style={{ height: "150px" }}>
            <img src={brand.image} alt={brand.name} className="slide_item_image w-36 h-auto object-contain " style={{ maxHeight: "100%" }}/>
          </div>
        ))}
      </Slider> */}
    </div>
  )
}