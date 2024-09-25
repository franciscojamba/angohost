import React from 'react';
import './modal-manutencao.css';
import { Link } from 'react-router-dom';

interface ModalManutencaoProps {
    isOpen: boolean;
    onClose: () => void;
}

const ModalManutencao: React.FC<ModalManutencaoProps> = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <h2 className='title-aviso' >Notificação sobre a Falha e</h2>
                <h2 className='title-aviso' >Demora na Ativação de Novos Domínios</h2>
                <p>Nacionais (.AO e .CO.AO).</p>

                {/* <a  href='https://wa.me/+24492300143' >Para compra e suporte entra em contacto</a>
                <div className='modal-content-contactos' >
                    <a href='mailto:support@petrohost.ao' >
                    <div className='modal-content-contacto' >
                    <CiMail color="#0e3f7b" size={48} />
                    <p>support@petrohost.ao</p>
                    </div>
                    
                    </a>
                    <a href=' https://wa.me/+244923000143'  className='modal-content-contacto'  >
                    <div>
                    <FaSquareWhatsapp color='#0e3f7b'  size={48} />
                    </div>
                    <p>+244 923 000 143</p>
                    </a>
                    <a href='tel:+244225300935'  className='modal-content-contacto'  >
                    <div>
                    <IoCall color='#0e3f7b'  size={48} />
                    </div>
                    <p>+244 225 300 935</p>
                    </a>
                </div> */}

                <Link to={"/alerta"}  >
                    <button onClick={onClose}>Saiba mais</button>

                </Link>
            </div>
        </div>
    );
};

export default ModalManutencao;