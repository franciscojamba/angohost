import './Notification.css';
import { LOGOBRANCO } from './../../../../../utils/logos';
import NavbarFull from '../../nav/nav';
import { Footer } from '../../footer';

const Notification = () => {

  // if (!isOpen) return null;
  return (
    <>
      <NavbarFull logo={LOGOBRANCO} color="#ffff" />
      <div className="container-hospedagem">
        <div className="container-hospedagem-wordpress"  >
          <div className="content-hospedagem-wordpress-left">
            <div className="content-info" >
              <h3>Alerta Angohost</h3>
              <h2>Notificação sobre a Falha e Demora na Ativação de Novos Domínios</h2>
              <p>Nacionais (.AO e .CO.AO)</p>
            </div>

          </div>

        </div>

        <div>
        </div>
      </div>
      <div className="notification">
        <h2>Notificação sobre a Falha e Demora na Ativação de Novos Domínios Nacionais (.AO e .CO.AO)</h2>
        <p>
          Prezado Cliente,
        </p>
        <p>
          Gostaríamos de informar que haverá uma demora na renovação, alteração de nameservers e ativação de novos domínios de extensão .AO e .CO.AO devido a uma atualização na plataforma central a nível nacional.
        </p>
        <p>
          Os domínios já registrados e ativos não serão afetados.
        </p>
        <p>
          Esta atualização está sendo realizada por uma plataforma central estatal, sobre a qual o Grupo PH não possui controle total, o que impede uma solução rápida para este evento. Portanto, não é possível definir uma data específica para a resolução do problema.
        </p>
        <p>
          Assim que o serviço voltar ao normal, esta notificação será removida e o problema será considerado resolvido.
        </p>
        <p>
          O Grupo PH pede desculpas a todos os clientes pelo transtorno e esperamos resolver este problema o mais rápido possível.
        </p>
        <p>
          Atenciosamente, <br />
          Grupo PH
        </p>
      </div>

      <Footer />
    </>
  );
};

export default Notification;
