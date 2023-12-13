/* eslint-disable react/no-unescaped-entities */
const Experience = () => {
    function sobreMim() {
        const divExperiencia = document.querySelectorAll('.experience_content div')
        const liExperiencia = document.querySelectorAll('.experience_content ul li')
        const divEducation = document.querySelectorAll('.education_content div')
        const liEducation = document.querySelectorAll('.education_content ul li')


        divExperiencia[0].classList.add('ativo')
        divEducation[0].classList.add('ativo')
        liExperiencia[0].classList.add('ativo')
        liEducation[0].classList.add('ativo')

        function slideShow(index) {
            divExperiencia.forEach((div) => {
                div.classList.remove('ativo');
            })
            liExperiencia.forEach((botao) => {
                botao.classList.remove('ativo');
            })
            divExperiencia[index].classList.add('ativo')
            liExperiencia[index].classList.add('ativo')
        }

        function slideShow2(index) {
            divEducation.forEach((div) => {
                div.classList.remove('ativo');
            })
            liEducation.forEach((botao) => {
                botao.classList.remove('ativo');
            })
            divEducation[index].classList.add('ativo')
            liEducation[index].classList.add('ativo')
        }

        liExperiencia.forEach((event, index) => {
            event.addEventListener('click', () => {
                slideShow(index)
            });
        });

        liEducation.forEach((event, index) => {
            event.addEventListener('click', () => {
                slideShow2(index)
            });
        });
    }

    sobreMim()

    const divEducation = document.querySelectorAll('.education_content div')
    const liEducation = document.querySelectorAll('.education_content ul li')
    function slideShow2(index) {
        divEducation.forEach((div) => {
            div.classList.remove('ativo');
        })
        liEducation.forEach((botao) => {
            botao.classList.remove('ativo');
        })
        divEducation[index].classList.add('ativo')
        if (index == 7) { index = 0 }
        liEducation[index].classList.add('ativo')
    }

    let contador = 1
    function show() {
        if (contador == 7) {
            slideShow2(7);
            return contador = 0
        }
        slideShow2(contador);
        return contador++
    }
    function clickou() {
        if (contador == 7) {
            slideShow2(7);
            return contador = 0
        }
        slideShow2(contador);
        return contador++
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
                    <div><a style={{ color: '#f7f7f7' }} href="https://tegra.com.br/" target="_blank">
                        <span>2021-2023</span>
                        <h3>• Tegra
                            LTDA
                        </h3>
                        <p>Empresa com sede em Sorocaba-SP que disponibiliza os Serviços de Desenvolvimento de Software,
                            Alocação de Squad e Hunting com mais de 10 anos no mercado na
                            qual atingida pela crise no mercado "lay-off" encerrou nossa parceria .</p>
                    </a>
                    </div>

                    <ul>
                        <li><i className="fa-sharp fa-solid fa-circle" style={{ display: 'none' }}></i></li>
                    </ul>
                </div>
                <h2 className="education"><i className="fa-solid fa-book"></i>FORMAÇÃO - CURSOS</h2>
                <div className="education_content" onClick={clickou() as any}>
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
                        <li><i className="fa-sharp fa-solid fa-circle"></i></li>
                        <li><i className="fa-sharp fa-solid fa-circle"></i></li>
                        <li><i className="fa-sharp fa-solid fa-circle"></i></li>
                        <li><i className="fa-sharp fa-solid fa-circle"></i></li>
                        <li><i className="fa-sharp fa-solid fa-circle"></i></li>
                        <li><i className="fa-sharp fa-solid fa-circle"></i></li>
                        <li><i className="fa-sharp fa-solid fa-circle"></i></li>
                    </ul>
                </div>
            </div>
            <div className="cursos">
                <h2><i className="fa-solid fa-heart"></i>FATOS</h2>
                <div className="funfacts">
                    <ul>
                        <li>
                            <i className="fa-solid fa-mug-hot"></i>
                            <span>100%</span>
                            <p>Disponível</p>
                        </li>
                        <li>
                            <i className="fa-solid fa-medal"></i>
                            <span>32</span>
                            <p>Cerificados</p>
                        </li>
                        <li>
                            <i className="fa-solid fa-graduation-cap"></i>
                            <span>Disposto</span>
                            <p>A Estudar </p>
                        </li>
                        <li>
                            <i className="fa-sharp fa-solid fa-hand-holding-dollar"></i>
                            <span>Contrato</span>
                            <p>PJ ou CLT</p>
                        </li>
                        <li>
                            <i className="fa-solid fa-thumbs-up"></i>
                            <span>100%</span>
                            <p>Responsável</p>
                        </li>
                        <li>
                            <i className="fa-regular fa-lightbulb"></i>
                            <span>Perfil</span>
                            <p>Criativo</p>
                        </li>
                        <li>
                            <i className="fa-solid fa-microphone-lines"></i>
                            <span>Boa</span>
                            <p>Comunicação </p>
                        </li>
                        <li>
                            <i className="fa-solid fa-heart-pulse"></i>
                            <span>Realiza</span>
                            <p>Atividade Física</p>
                        </li>
                    </ul>
                </div>
                <h2><i className="fa-sharp fa-regular fa-star"></i>HABILIDADES</h2>
                <div className="my_skill ">
                    <div className="skill_content">
                        <h3>JavaScript </h3>
                        <ul>
                            <li><i className="fa-sharp fa-solid fa-star"></i></li>
                            <li><i className="fa-sharp fa-solid fa-star"></i></li>
                            <li><i className="fa-sharp fa-solid fa-star"></i></li>
                            <li><i className="fa-sharp fa-solid fa-star"></i></li>
                            <i className="fa-solid fa-star-half-stroke"></i>
                        </ul>
                    </div>
                    <div className="skill_content">
                        <h3>TypeScript</h3>
                        <ul>
                            <li><i className="fa-sharp fa-solid fa-star"></i></li>
                            <li><i className="fa-sharp fa-solid fa-star"></i></li>
                            <li><i className="fa-sharp fa-solid fa-star"></i></li>
                            <li><i className="fa-sharp fa-solid fa-star"></i></li>
                            <i className="fa-solid fa-star-half-stroke"></i>
                        </ul>
                    </div>
                    <div className="skill_content">
                        <h3>NodeJS</h3>
                        <ul>
                            <li><i className="fa-sharp fa-solid fa-star"></i></li>
                            <li><i className="fa-sharp fa-solid fa-star"></i></li>
                            <li><i className="fa-sharp fa-solid fa-star"></i></li>
                            <li><i className="fa-sharp fa-solid fa-star"></i></li>
                            <i className="fa-solid fa-star-half-stroke"></i>
                        </ul>
                    </div>
                    <div className="skill_content">
                        <h3>PostgresSql</h3>
                        <ul>
                            <li><i className="fa-sharp fa-solid fa-star"></i></li>
                            <li><i className="fa-sharp fa-solid fa-star"></i></li>
                            <li><i className="fa-sharp fa-solid fa-star"></i></li>
                            <li><i className="fa-sharp fa-solid fa-star"></i></li>
                            <i className="fa-solid fa-star-half-stroke"></i>
                        </ul>
                    </div>
                    <div className="skill_content">
                        <h3>MySql</h3>
                        <ul>
                            <li><i className="fa-sharp fa-solid fa-star"></i></li>
                            <li><i className="fa-sharp fa-solid fa-star"></i></li>
                            <li><i className="fa-sharp fa-solid fa-star"></i></li>
                            <i className="fa-solid fa-star-half-stroke"></i>
                            <li><i className="fa-sharp fa-solid fa-star" style={{ color: "#ffffff45;" }}></i></li>
                        </ul>
                    </div>
                    <div className="skill_content">
                        <h3>Sqlite</h3>
                        <ul>
                            <li><i className="fa-sharp fa-solid fa-star"></i></li>
                            <li><i className="fa-sharp fa-solid fa-star"></i></li>
                            <li><i className="fa-sharp fa-solid fa-star"></i></li>
                            <li><i className="fa-sharp fa-solid fa-star"></i></li>
                            <li><i className="fa-sharp fa-solid fa-star" style={{ color: "#ffffff45;" }}></i></li>
                        </ul>
                    </div>
                    <div className="skill_content">
                        <h3>MongoDB</h3>
                        <ul>
                            <li><i className="fa-sharp fa-solid fa-star"></i></li>
                            <li><i className="fa-sharp fa-solid fa-star"></i></li>
                            <li><i className="fa-sharp fa-solid fa-star"></i></li>
                            <i className="fa-solid fa-star-half-stroke"></i>
                            <li><i className="fa-sharp fa-solid fa-star" style={{ color: "#ffffff45;" }}></i></li>
                        </ul>
                    </div>
                    <div className="skill_content">
                        <h3>Prisma</h3>
                        <ul>
                            <li><i className="fa-sharp fa-solid fa-star"></i></li>
                            <li><i className="fa-sharp fa-solid fa-star"></i></li>
                            <li><i className="fa-sharp fa-solid fa-star"></i></li>
                            <i className="fa-solid fa-star-half-stroke"></i>
                            <li><i className="fa-sharp fa-solid fa-star" style={{ color: "#ffffff45;" }}></i></li>
                        </ul>
                    </div>
                    <div className="skill_content">
                        <h3>TypeORM</h3>
                        <ul>
                            <li><i className="fa-sharp fa-solid fa-star"></i></li>
                            <li><i className="fa-sharp fa-solid fa-star"></i></li>
                            <li><i className="fa-sharp fa-solid fa-star"></i></li>
                            <i className="fa-solid fa-star-half-stroke"></i>
                            <li><i className="fa-sharp fa-solid fa-star" style={{ color: "#ffffff45;" }}></i></li>
                        </ul>
                    </div>
                    <div className="skill_content">
                        <h3>Sequelize</h3>
                        <ul>
                            <li><i className="fa-sharp fa-solid fa-star"></i></li>
                            <li><i className="fa-sharp fa-solid fa-star"></i></li>
                            <li><i className="fa-sharp fa-solid fa-star"></i></li>
                            <i className="fa-solid fa-star-half-stroke"></i>
                            <li><i className="fa-sharp fa-solid fa-star" style={{ color: "#ffffff45;" }}></i></li>
                        </ul>
                    </div>
                    <div className="skill_content">
                        <h3>Express</h3>
                        <ul>
                            <li><i className="fa-sharp fa-solid fa-star"></i></li>
                            <li><i className="fa-sharp fa-solid fa-star"></i></li>
                            <li><i className="fa-sharp fa-solid fa-star"></i></li>
                            <li><i className="fa-sharp fa-solid fa-star"></i></li>
                            <li><i className="fa-sharp fa-solid fa-star" style={{ color: "#ffffff45;" }}></i></li>
                        </ul>
                    </div>
                    <div className="skill_content">
                        <h3>Docker</h3>
                        <ul>
                            <li><i className="fa-sharp fa-solid fa-star"></i></li>
                            <li><i className="fa-sharp fa-solid fa-star"></i></li>
                            <li><i className="fa-sharp fa-solid fa-star"></i></li>
                            <li><i className="fa-sharp fa-solid fa-star"></i></li>
                            <li><i className="fa-sharp fa-solid fa-star" style={{ color: "#ffffff45;" }}></i></li>

                        </ul>
                    </div>
                    <div className="skill_content">
                        <h3>HTML</h3>
                        <ul>
                            <li><i className="fa-sharp fa-solid fa-star"></i></li>
                            <li><i className="fa-sharp fa-solid fa-star"></i></li>
                            <li><i className="fa-sharp fa-solid fa-star"></i></li>
                            <li><i className="fa-sharp fa-solid fa-star"></i></li>
                            <li><i className="fa-sharp fa-solid fa-star" style={{ color: "#ffffff45;" }}></i></li>
                        </ul>
                    </div>
                    <div className="skill_content">
                        <h3>CSS</h3>
                        <ul>
                            <li><i className="fa-sharp fa-solid fa-star"></i></li>
                            <li><i className="fa-sharp fa-solid fa-star"></i></li>
                            <li><i className="fa-sharp fa-solid fa-star"></i></li>
                            <li><i className="fa-sharp fa-solid fa-star"></i></li>
                            <li><i className="fa-sharp fa-solid fa-star" style={{ color: "#ffffff45;" }}></i></li>
                        </ul>
                    </div>
                    <div className="skill_content">
                        <h3>React</h3>
                        <ul>
                            <li><i className="fa-sharp fa-solid fa-star"></i></li>
                            <li><i className="fa-sharp fa-solid fa-star"></i></li>
                            <li><i className="fa-sharp fa-solid fa-star"></i></li>
                            <li><i className="fa-sharp fa-solid fa-star" style={{ color: "#ffffff45;" }}></i></li>
                            <li><i className="fa-sharp fa-solid fa-star" style={{ color: "#ffffff45;" }}></i></li>
                        </ul>
                    </div>
                    <div className="skill_content">
                        <h3>Serverless</h3>
                        <ul>
                            <li><i className="fa-sharp fa-solid fa-star"></i></li>
                            <li><i className="fa-sharp fa-solid fa-star"></i></li>
                            <li><i className="fa-sharp fa-solid fa-star"></i></li>
                            <li><i className="fa-sharp fa-solid fa-star" style={{ color: "#ffffff45;" }}></i></li>
                            <li><i className="fa-sharp fa-solid fa-star" style={{ color: "#ffffff45;" }}></i></li>
                        </ul>
                    </div>
                    <div className="skill_content">
                        <h3>Graphql</h3>
                        <ul>
                            <li><i className="fa-sharp fa-solid fa-star"></i></li>
                            <li><i className="fa-sharp fa-solid fa-star"></i></li>
                            <li><i className="fa-sharp fa-solid fa-star"></i></li>
                            <li><i className="fa-sharp fa-solid fa-star" style={{ color: "#ffffff45;" }}></i></li>
                            <li><i className="fa-sharp fa-solid fa-star" style={{ color: "#ffffff45;" }}></i></li>
                        </ul>
                    </div>
                    <div className="skill_content">
                        <h3>AWS</h3>
                        <ul>
                            <li><i className="fa-sharp fa-solid fa-star"></i></li>
                            <li><i className="fa-sharp fa-solid fa-star"></i></li>
                            <li><i className="fa-sharp fa-solid fa-star"></i></li>
                            <li><i className="fa-sharp fa-solid fa-star" style={{ color: "#ffffff45;" }}></i></li>
                            <li><i className="fa-sharp fa-solid fa-star" style={{ color: "#ffffff45;" }}></i></li>
                        </ul>
                    </div>
                    <div className="skill_content">
                        <h3>Inglês</h3>
                        <ul>
                            <li><i className="fa-sharp fa-solid fa-star"></i></li>
                            <li><i className="fa-sharp fa-solid fa-star"></i></li>
                            <li><i className="fa-sharp fa-solid fa-star"></i></li>
                            <li><i className="fa-sharp fa-solid fa-star"></i></li>
                            <li><i className="fa-sharp fa-solid fa-star" style={{ color: "#ffffff45;" }}></i></li>

                        </ul>
                    </div>
                </div>
                {/* <!-- <div className="funfacts">
                                                                                                            <h2><i className="fa-solid fa-heart"></i>FATOS</h2>
                                                                                                            <ul>
                                                                                                                <li>
                                                                                                                    <i className="fa-solid fa-mug-hot"></i>
                                                                                                                    <span>100%</span>
                                                                                                                    <p>Disponível</p>
                                                                                                                </li>
                                                                                                                <li>
                                                                                                                    <i className="fa-solid fa-medal"></i>
                                                                                                                    <span>32</span>
                                                                                                                    <p>Cerificados</p>
                                                                                                                </li>
                                                                                                                <li>
                                                                                                                    <i className="fa-solid fa-graduation-cap"></i>
                                                                                                                    <span>Disposto</span>
                                                                                                                    <p>Estudar </p>
                                                                                                                </li>
                                                                                                                <li>
                                                                                                                    <i className="fa-sharp fa-solid fa-hand-holding-dollar"></i>
                                                                                                                    <span>Contrato</span>
                                                                                                                    <p>PJ ou CLT</p>
                                                                                                                </li>
                                                                                                            </ul>
                                                                                                        </div> --> */}
            </div>
        </div>
    )
}

export default Experience;