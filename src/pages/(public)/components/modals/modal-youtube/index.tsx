import React from 'react';
import './modal-youtube.css';

interface ModalModalYoutubeProps {
    isOpen: boolean;
    onClose: () => void;
}

const ModalYoutube: React.FC<ModalModalYoutubeProps> = ({ isOpen, onClose }) => {
    
    if (!isOpen) return null;


    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
            <iframe width="500" height="340"  style={{border:"none"}}  src="https://www.youtube.com/embed/Kgb4rb32E8I" title="HOSPEDAGEM DE SITE"   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                <button onClick={onClose}>Fechar</button>
            </div>
        </div>
    );
};

export default ModalYoutube;