import React from 'react';
import { FaGithub, FaWhatsapp, FaInstagram, FaFacebook } from "react-icons/fa"
import { CiLinkedin } from "react-icons/ci"

const FooterComponent = () => {
    return (
        <footer>
            <div id="contato" className="sobre_titulo">
                <h1>Contatos</h1>
                <div aria-label="Seção apenas de ilustrações de botões">
                    <span></span>
                </div>
            </div>
            <nav aria-label="navegação de links sociais">
                <ul className="footer_sociais">
                    <li><a href="https://www.linkedin.com/in/anderson-motta-96b138235/" target="_blank"><i><CiLinkedin size={80} /></i></a></li>
                    <li><a href="https://wa.me/5515997897412" target="_blank"><i><FaWhatsapp size={80} /></i></a></li>
                    <li><a href="https://github.com/1andersonmotta" target="_blank"><i><FaGithub size={80} /></i></a></li>
                    <li><a href="https://www.instagram.com/djanderson_motta/" target="_blank"><i><FaInstagram size={80} /></i></a></li>
                    <li><a href="https://www.facebook.com/djandersonmotta" target="_blank"><i><FaFacebook size={80} /></i></a></li>
                </ul>
            </nav>
            <p className="footer_comercial">Todos os direitos reservados - DEV ANDERSON MOTTA &copy; 2023</p>
        </footer>
    )
}

export default FooterComponent;