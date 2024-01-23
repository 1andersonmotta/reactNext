import React, { useEffect, useRef, useState } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBook, faCircle, faHandshakeSimple } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Adicione os ícones à biblioteca
library.add(faHandshakeSimple, faCircle, faBook);

const Experience = () => {
    const [contador, setContador] = useState(1);

    const divExperienciaRef = useRef([]);
    const liExperienciaRef = useRef([]);
    const divEducationRef = useRef([]);
    const liEducationRef = useRef([]);

    // const divExperienciaRef = useRef<NodeListOf<HTMLDivElement>>(document.querySelectorAll('.experience_content div'));
    // const liExperienciaRef = useRef<NodeListOf<HTMLLIElement>>(document.querySelectorAll('.experience_content ul li'));
    // const divEducationRef = useRef<NodeListOf<HTMLDivElement>>(document.querySelectorAll('.education_content div'));
    // const liEducationRef = useRef<NodeListOf<HTMLLIElement>>(document.querySelectorAll('.education_content ul li'));


    useEffect(() => {
        divExperienciaRef.current = document.querySelectorAll('.experience_content div');
        liExperienciaRef.current = document.querySelectorAll('.experience_content ul li');
        divEducationRef.current = document.querySelectorAll('.education_content div');
        liEducationRef.current = document.querySelectorAll('.education_content ul li');

        divExperienciaRef.current[0].classList.add('ativo');
        divEducationRef.current[0].classList.add('ativo');
        liExperienciaRef.current[0].classList.add('ativo');
        liEducationRef.current[0].classList.add('ativo');

        function slideShow(index: number, isEducation = false) {
            const divList = isEducation ? divEducationRef.current : divExperienciaRef.current;
            const liList = isEducation ? liEducationRef.current : liExperienciaRef.current;

            divList.forEach((div) => div.classList.remove('ativo'));
            liList.forEach((botao) => botao.classList.remove('ativo'));

            divList[index].classList.add('ativo');
            liList[index].classList.add('ativo');
        }

        liExperienciaRef.current.forEach((event, index) => {
            event.addEventListener('click', () => {
                slideShow(index);
            });
        });

        liEducationRef.current.forEach((event, index) => {
            event.addEventListener('click', () => {
                slideShow(index, true);
            });
        });

        return () => {
            liExperienciaRef.current.forEach((event, index) => {
                event.removeEventListener('click', () => {
                    slideShow(index);
                });
            });

            liEducationRef.current.forEach((event, index) => {
                event.removeEventListener('click', () => {
                    slideShow(index, true);
                });
            });
        };
    }, []);

    function slideShow2(index: number) {
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
            slideShow2(0);
            setContador(1);
        } else {
            slideShow2(contador);
            setContador((prevContador) => prevContador + 1);
        }
    }

    return (
        <div className="my_resume">
            <div className="resume_generico">
                <h2 className="experience"><i><FontAwesomeIcon icon={faHandshakeSimple} /></i>EXPERIÊNCIA</h2>
                <div className="experience_content">
                    <div>
                        <a style={{ color: '#f7f7f7' }} href="https://tegra.com.br/" target="_blank">
                            <span>2021-2023</span>
                            <h3>• Tegra LTDA</h3>
                            <p>
                                Empresa com sede em Sorocaba-SP que disponibiliza os Serviços de Desenvolvimento de Software,
                                Alocação de Squad e Hunting com mais de 10 anos no mercado.
                            </p>
                        </a>
                    </div>
                    <ul>
                        <li><i style={{ display: 'none' }}><FontAwesomeIcon icon={faCircle} /></i></li>
                    </ul>
                </div>
                <h2 className="education"><i><FontAwesomeIcon icon={faBook} /></i>FORMAÇÃO - CURSOS</h2>
                <div className="education_content" onClick={clickou}>
                    <div>
                        <span>2023-2025 - Cursando</span>
                        <h3>• Análise e Desenvolvimento de Sistemas - Cruzeiro do Sul S.A, Sorocaba </h3>
                        <p>Cursando Análise e Desenvolvimento de Sistemas </p>
                    </div>
                    <div>
                        <span>2009-2011 - Concluído </span>
                        <h3>• Tecnologia em Eventos - CEUNSP</h3>
                        <p>Curso Superior de Tecnologia em Eventos - Centro Universitário Nossa Senhora do
                            Patrocínio - Criação e Organização de Eventos.
                        </p>
                    </div>
                    <div>
                        <span>2022-2022 </span>
                        <h3>• CURSOS - ALURA</h3>
                        <p>- PostgreSQL primeiros passos com SQL<br />
                            - NodeJs criando sua primeira biblioteca<br />
                            - NestJS criando uma API Rest com TypeScript<br />
                            - JavaScript programando a Orientação a Objetos<br />
                            - JavaScript primeiros passos da programação orientada a objetos<br />
                            - Fundamentos do JavaScript objetos<br />
                            - Fundamentos do JavaScript Arrays<br />
                            - Algoritmos com JavaScript II aprofundando em algoritmos de ordenação e busca<br />
                            - Algoritmos com JavaScript I iniciando com algoritmos de ordenação<br />
                            - Expressões regulares: capturando textos de forma mágica<br />
                            - JavaScript: explorando a linguagem<br />
                            - JavaScript: tipos, variáveis e funções<br />
                            - NodeJS: Streaming de dados e Repositório<br />
                            - PostgreSQL: comandos DML e DDL<br />
                            - PostgreSQL: Views, Sub-Consultas e Funções<br />
                            - TypeScript parte 1: evoluindo seu JavaScript<br />
                            - TypeScript parte 2: avançando na linguagem<br />
                            - Typescript parte 3: mais técnicas e boas práticas<br />

                        </p>
                    </div>
                    <div>
                        <span>2021-2022 </span>
                        <h3>• CURSOS - GRASSHOPER GOOGLE POR LAURA HOMES</h3>
                        <p>- Fundamentos de Codificação<br />
                            - Fundamentos de Programação II<br />
                            - Introdução à Entrevista<br />
                            - Animações<br />
                            - Animações II<br />
                            - Uso de um editor de código<br />
                            - Intro to Webpages<br />
                            - Automation<br />
                        </p>
                    </div>
                    <div>
                        <span>2021-2022 </span>
                        <h3>• CURSOS - Canal Curso em Video </h3>
                        <p>- Curso Grátis de JavaScript e ECMAScript para Iniciantes por Gustavo Guanabara Patrocinado pelo
                            Google. <br />
                            - Curso de HTML5 e Css3 por Gustavo Guanabara
                        </p>
                    </div>
                    <div>
                        <span>2021-2022 </span>
                        <h3>• CURSOS - Canal Dev Aprender </h3>
                        <p>- Curso Javascript Completo 2020 [Iniciantes] + 14 Mini-Projetos
                        </p>
                    </div>
                    <div>
                        <span>2018-2018 </span>
                        <h3>• CURSOS - SENAI </h3>
                        <p>- Curso Montagen, Desmontagem e Configuração de Microcomputadores
                        </p>
                    </div>
                    <ul>
                        <li><i ><FontAwesomeIcon icon={faCircle} /></i></li>
                        <li><i ><FontAwesomeIcon icon={faCircle} /></i></li>
                        <li><i ><FontAwesomeIcon icon={faCircle} /></i></li>
                        <li><i ><FontAwesomeIcon icon={faCircle} /></i></li>
                        <li><i ><FontAwesomeIcon icon={faCircle} /></i></li>
                        <li><i ><FontAwesomeIcon icon={faCircle} /></i></li>
                        <li><i ><FontAwesomeIcon icon={faCircle} /></i></li>
                    </ul>
                    {/* Adicione os demais itens aqui */}
                    <ul>
                        {Array.from({ length: 7 }).map((_, index) => (
                            <li key={index}><i></i></li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Experience;
