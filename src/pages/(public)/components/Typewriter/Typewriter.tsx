import { FlipWords } from "@/components/ui/flip-words";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import { Link } from "react-router-dom";

export function TypewriterEffectSmoothDemo() {
  const words = [
    {
      text: "Transfira seu domínio",
    },
    {
      text: ".co.ao .ao ",
      className: "text-purple-500 dark:text-blue-500"
    },
    
  ];

  const works = ["HOSPEDAGENS", "E-MAIL", "SITES", "VPS-LINUX","VPS-WINDOWS"];

 
  return (
    <div className="flex flex-col items-center justify-center h-[40rem]  ">
      <TypewriterEffectSmooth words={words} />
      <p className="text-neutral-600  dark:text-neutral-200 text-xs sm:text-xl mb-3  ">
        ANGOHOST ,MAIS DE 9 ANOS DE EXPERIÊNCIA TRABALHANDO COM 
        <FlipWords className='text-purple-600' words={works}/>
      </p>
     
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
         <Link to={"/Email-profissional"} >
        <button  className="w-40 h-10 rounded-xl bg-black border dark:border-white border-transparent text-white text-sm">
        Comprar domínio 
        </button>
         </Link>

         <Link  to={"/dominios"} >
        <button  className="w-40 h-10 rounded-xl bg-white text-black border border-black  text-sm">
          Transferir domínio
        </button>
         </Link>
      </div>
    </div>
  );
}
