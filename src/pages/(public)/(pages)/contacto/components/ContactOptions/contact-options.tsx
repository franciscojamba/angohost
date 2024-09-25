import "./contact-option.css"
function ContactOptions() {
    return (
      <div className="contact-container bg-white">
        <h1 className="text-[1.4rem] font-medium">Enviar e-mail para programas e escritórios específicos</h1>
        <div className="contact-sections">
          <div className="contact-section flex flex-col">
            <img src="https://newfold.scene7.com/is/content/NewfoldDigital/ico-team-1?ts=1685605842699&dpr=off" alt="Imprensa" />
            <h2 className="font-medium">Imprensa</h2>
            <p>Se você é membro da imprensa ou tem dúvidas sobre a imprensa e a mídia, envie um e-mail para: <a href="mailto:comercial@angohost.ao" className="no-underline" style={{textDecoration: 'none'}}>comercial@angohost.ao</a></p>
          </div>
          <div className="contact-section flex flex-col">
            <img src="https://newfold.scene7.com/is/content/NewfoldDigital/ico-handshake-2?ts=1685605841256&dpr=off" alt="Programa de Afiliados" />
            <h2 className="font-medium">Programa de Afiliados</h2>
            <p>Para qualquer dúvida sobre nosso programa de afiliados, envie um e-mail para: <a href="mailto:comercial@angohost.ao" className="no-underline"  style={{textDecoration: 'none'}}>comercial@angohost.ao</a></p>
          </div>
          <div className="contact-section flex flex-col">
            <img src="https://newfold.scene7.com/is/content/NewfoldDigital/ico-contract-1?ts=1685605839733&dpr=off" alt="Jurídico" />
            <h2 className="font-medium">Jurídico</h2>
            <p>Por favor, revise nossos termos de serviço e aviso de privacidade. Para mais informacoes contacte-nos pelo endereco <a href="mailto:legal@angohost.ao" className="no-underline"  style={{textDecoration: 'none'}}>legal@angohost.ao</a></p>
          </div>
        </div>
      </div>
    );
  }
  
  export default ContactOptions;