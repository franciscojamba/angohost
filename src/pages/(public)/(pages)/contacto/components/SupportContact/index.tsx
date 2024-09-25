import './SupportContact.css'; // Make sure to create this CSS file
import im from '../../../../../../assets/images/branca.png'
import { PiHeadset } from 'react-icons/pi';
import { FaCircleInfo } from 'react-icons/fa6';

function SupportContact() {
  return (
    <div className="support-container relative">
      <div className="support-text">
        <h2 style={{color:"orange"}} >CONTATE NOSSA EQUIPE DE SUPORTE</h2>
        <h1>Estamos aqui 24 horas por dia, 7 dias por semana</h1>
        <p>Entre em contato com suas dúvidas, preocupações e desafios. Ou apenas para dizer oi. Ficaremos felizes em conversar e ajudar.</p>
        <button style={{marginBottom:10}}  onClick={() => window.location.href = 'mailto:support@angohost.ao'}>Conversar Agora <PiHeadset size={20}/></button>
        <p>Ligue agora para <a href="tel:+923000143">+244 923 000 328 | 942 090 108 |  +244226430401  </a></p>
        <div className='flex items-center justify-start gap-2 opacity-50'><FaCircleInfo size={10}/><small className='mb-2'>Taxas de chamadas internacionais podem ser aplicadas</small></div>
        <p>E-mail: <a href="tel:+942090108">support@angohost.ao </a></p>
        
      </div>
      <img src={im} alt="Support Team" className='w-[900px] absolute bottom-0 right-[50px]'/>
    </div>
  );
}

export default SupportContact;