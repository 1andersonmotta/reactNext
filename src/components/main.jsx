import React from 'react';
import { FaGithub, FaCalendarAlt, FaWhatsapp } from "react-icons/fa"
import { CiLinkedin } from "react-icons/ci"
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const Main = () => {

    return (
        <main>
            <article aria-label="seção sobre mim" className="sobre" id="sobre">
                <div className="sobre_titulo"></div>
                <div className="sobre_conteudo">
                    <div id="info" className="sobre_texto">
                        <h1>Anderson Motta</h1>
                        <p>
                            É com grande entusiasmo que me apresento como um apaixonado pela arte de solucionar problemas e
                            pelas infinitas possibilidades criativas que o mundo da programação oferece. Minha jornada nesse
                            emocionante universo começou em junho de 2021, marcando uma transição significativa em minha
                            carreira de mais de 18 anos como DJ. Minha ligação inata com a tecnologia e minha curiosidade
                            incessante me levaram a enxergar no desenvolvimento de software uma oportunidade extraordinária
                            para crescimento profissional.

                            Minha incursão no mercado de desenvolvimento foi possível graças à empresa Tegra, que me
                            concedeu a oportunidade de imersão como bolsista, culminando em minha posição atual como
                            desenvolvedor, onde estive por aproximadamente dois anos. Essa experiência me proporcionou um
                            aprendizado valioso, pelo qual sou profundamente grato, e estou ansioso para continuar a
                            expandir meus horizontes no mundo da programação.

                            Sou um entusiasta dedicado quando se trata de aprendizado, possuindo um compromisso inabalável
                            em aprimorar minhas habilidades. Minha determinação é um dos pilares que me impulsionam a
                            superar desafios e a alcançar objetivos. Além disso, acredito que uma comunicação eficaz é
                            essencial em qualquer ambiente de trabalho, e estou confiante em minha capacidade de colaborar e
                            comunicar de maneira eficiente com a equipe.

                            Estou ansioso para a oportunidade de compartilhar minha paixão, conhecimento e dedicação com uma
                            equipe que valorize o desenvolvimento de software de alta qualidade e inovação. Acredito que
                            minha trajetória única e minha disposição para aprender constantemente me tornam um candidato
                            promissor.

                            Estou à disposição para discutir como minha experiência e habilidades podem contribuir para o sucesso de sua empresa.
                        </p>
                    </div>
                    <div className="sobre_info">
                        <p><i><FaCalendarAlt /></i>Data de aniversário: 16 jun 1985</p>
                        <p><i ><FaGithub /></i><a style={{ color: '#707070' }}
                            href="https://github.com/1andersonmotta" target="_blank" rel="noopener noreferrer">GitHub</a>
                        </p>
                        <p><i><FaLocationDot /></i>Endereço: Sorocaba, Brasil, São Paulo</p>
                        <p><i><CiLinkedin /></i><a style={{ color: '#707070' }}
                            href="https://www.linkedin.com/in/anderson-motta-96b138235/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                        </p>
                        <p><i><FaWhatsapp /></i>
                            <a style={{ color: '#707070' }} href="https://wa.me/5515997504755" target="_blank" rel="noopener noreferrer">Telefone: (15) 99789-7412</a>
                        </p>
                        <p>
                            <i><MdEmail /></i>Email: devandersonmotta@gmail.com
                        </p>
                    </div>
                </div>
            </article>
        </main>
    );
};

export default Main;
