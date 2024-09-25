import {  useState } from "react";
import "./style.css"





export default function Form(){

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e: { target: { name: any; value: any; }; }) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
        
        
    };

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        console.log('Form Data Submitted:', formData);
    };










    return(
    <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
            <label htmlFor="name">Nome:</label>
            <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
            />
        </div>
        <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
            />
        </div>
        <div className="form-group">
            <label htmlFor="message">Mensagem:</label>
            <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
            ></textarea>
        </div>
        <button type="submit">Enviar</button>
    </form>
    )
}

