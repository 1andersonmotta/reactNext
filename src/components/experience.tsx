/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useState } from 'react';

const Experience = () => {
    useEffect(() => {
        const divExperiencia = document.querySelectorAll('.experience_content div');
        const liExperiencia = document.querySelectorAll('.experience_content ul li');
        const divEducation = document.querySelectorAll('.education_content div');
        const liEducation = document.querySelectorAll('.education_content ul li');

        divExperiencia[0].classList.add('ativo');
        divEducation[0].classList.add('ativo');
        liExperiencia[0].classList.add('ativo');
        liEducation[0].classList.add('ativo');

        function slideShow(index, isEducation = false) {
            const divList = isEducation ? divEducation : divExperiencia;
            const liList = isEducation ? liEducation : liExperiencia;

            divList.forEach((div) => div.classList.remove('ativo'));
            liList.forEach((botao) => botao.classList.remove('ativo'));

            divList[index].classList.add('ativo');
            liList[index].classList.add('ativo');
        }

        liExperiencia.forEach((event, index) => {
            event.addEventListener('click', () => {
                slideShow(index);
            });
        });

        liEducation.forEach((event, index) => {
            event.addEventListener('click', () => {
                slideShow(index, true);
            });
        });

        return () => {
            liExperiencia.forEach((event, index) => {
                event.removeEventListener('click', () => {
                    slideShow(index);
                });
            });

            liEducation.forEach((event, index) => {
                event.removeEventListener('click', () => {
                    slideShow(index, true);
                });
            });
        };
    }, []);

    const [contador, setContador] = useState(1);

    function slideShow2(index) {
        const divEducation = document.querySelectorAll('.education_content div');
        const liEducation = document.querySelectorAll('.education_content ul li');

        divEducation.forEach((div) => div.classList.remove('ativo'));
        liEducation.forEach((botao) => botao.classList.remove('ativo'));

        divEducation[index].classList.add('ativo');
        if (index === 7) {
            index = 0;
        }
        liEducation[index].classList.add('ativo');
    }

    function show() {
        if (contador === 7) {
            slideShow2(7);
            setContador(0);
        } else {
            slideShow2(contador);
            setContador((prevContador) => prevContador + 1);
        }
    }

    function clickou() {
        if (contador === 7) {
            slideShow2(7);
            setContador(0);
        } else {
            slideShow2(contador);
            setContador((prevContador) => prevContador + 1);
        }
    }

    return (
        <div className="my_resume">
            <div className="sobre_titulo">
                <h1 id="experiencia">Experiência</h1>
                <div aria-label="Seção apenas de ilustrações de botões">
                    <span></span>
                </div>
            </div>
            <div className="resume_generico">
                <h2 className="experience"><i className="fa-solid fa-handshake"></i>EXPERIÊNCIA</h2>
                <div className="experience_content">
                    <div>
                        <a style={{ color: '#f7f7f7' }} href="https://tegra.com.br/" target="_blank">
                            <span>2021-2023</span>
                            <h3>• Tegra LTDA</h3>
                            <p>
                                Empresa com sede em Sorocaba-SP que disponibiliza os Serviços de Desenvolvimento de Software,
                                Alocação de Squad e Hunting com mais de 10 anos no mercado na
                                qual atingida pela crise no mercado "lay-off" encerrou nossa parceria.
                            </p>
                        </a>
                    </div>
                    <ul>
                        <li><i className="fa-sharp fa-solid fa-circle" style={{ display: 'none' }}></i></li>
                    </ul>
                </div>
                <h2 className="education"><i className="fa-solid fa-book"></i>FORMAÇÃO - CURSOS</h2>
                <div className="education_content" onClick={clickou}>
                    <div>
                        <span>2023-2025 - Cursando</span>
                        <h3>• Análise e Desenvolvimento de Sistemas - Cruzeiro do Sul S.A, Sorocaba </h3>
                        <p>Cursando Análise e Desenvolvimento de Sistemas </p>
                    </div>
                    {/* Adicione os demais itens aqui */}
                    <ul>
                        {Array.from({ length: 7 }).map((_, index) => (
                            <li key={index}><i className="fa-sharp fa-solid fa-circle"></i></li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Experience;
