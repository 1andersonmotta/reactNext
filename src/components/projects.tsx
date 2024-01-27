import React, { useEffect, useRef, useState } from 'react';

const ProjectsComponent = () => {
    // const listAll = document.querySelectorAll('.projects_armazenamento ul li');
    const listAllRef = useRef(null);

    // const buttonGeral = document.querySelectorAll('.projects_models ul li');
    const buttonGeral = useRef();

    function listAll() {
        if (listAllRef.current) {
            if (buttonGeral.current.innerText == "Exibir") {
                listAllRef.current.style.display = "grid"
                buttonGeral.current.innerText = "Ocultar"
            } else if (listAllRef.current.style.display == "grid" && buttonGeral.current.innerText == "Ocultar") {
                listAllRef.current.style.display = "none"
                buttonGeral.current.innerText = "Exibir"
            };
        }
    }


    // const removeClick = (index) => {
    //     buttonGeral.forEach((item) => {
    //         item.classList.remove('ativo');
    //     });
    //     buttonGeral[index].classList.add('ativo');
    // };

    // const showLista = (lista, buttom = 'all') => {
    //     lista.forEach((item) => {
    //         item.classList.remove('ativo');
    //     });

    //     switch (buttom) {
    //         case 'reais':
    //             [0, 1, 2, 3, 4, 5].forEach((i) => lista[i].classList.add('ativo'));
    //             break;
    //         case 'estudo':
    //             [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32].forEach((i) => lista[i].classList.add('ativo'));
    //             break;
    //         case 'website':
    //             [8, 9, 16, 23, 26, 27, 28, 29, 31, 32].forEach((i) => lista[i].classList.add('ativo'));
    //             break;
    //         case 'all':
    //         default:
    //             [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32].forEach((i) => lista[i].classList.add('ativo'));
    //             break;
    //     }
    // };

    // buttonGeral.forEach((event, index) => {
    //     event.addEventListener('click', () => {
    //         removeClick(index);
    //     });
    // });

    // const handleButtonClick = (e) => {
    //     let currentButton = e.target;
    //     if (currentButton.classList.contains('all')) {
    //         showLista(listAll);
    //     }
    //     if (currentButton.classList.contains('reais')) {
    //         showLista(listAll, 'reais');
    //     }
    //     if (currentButton.classList.contains('estudo')) {
    //         showLista(listAll, 'estudo');
    //     }
    //     if (currentButton.classList.contains('website')) {
    //         showLista(listAll, 'website');
    //     }
    //     if (currentButton.classList.contains('all')) {
    //         showLista(listAll, 'all');
    //     }
    // };

    // buttonGeral.forEach((item) => {
    //     item.addEventListener('click', handleButtonClick);
    // });

    return (
        <section className="projects">

            <div className="projects_models">
                <ul aria-label="Navegação entre modelos especificos de projetos">
                    <li onClick={() => { listAll() }} ref={buttonGeral} className="vermais">Exibir</li>
                </ul>
            </div>
            <div className="projects_armazenamento">
                <ul ref={listAllRef} aria-label="Navegação de projetos e websites">
                    <li className='ativo' id="reais">
                        <img src="/img/integraadmin.png" alt="fotodj1" />
                        <p>IntegraAdmin: Gestão de funcionários com controle e
                            apontamentos de horas, envio de notas e email's. Projeto NodeJS com NestJs, TypeScript
                            e banco de dados PostgreSQL.</p>
                    </li>
                    <li className='ativo' id="reais">
                        <img src="/img/abrafarma.png" alt="fotodj" />
                        <p>Abrafarma: Controle de informações sobre eventos, palestras e palestrantes.
                            Desenvolvimento experimental utilizando a plataforma CronApp Low/Hi code.</p>
                    </li>
                    <li className='ativo' id="reais">
                        <img src="/img/eduzz.png" alt="imgEduz" />
                        <p>VitrineLinks: Visualização e comercialização de produtos e cursos pela Eduzz / Select.
                            Aplicação
                            NodeJs, TypeScript e banco de dados PostgreSql com Docker.</p>
                    </li>
                    <li className='ativo' id="reais"><img src="/img/eurofarma.png" alt="imgEurofarma" />
                        <p>Voary: Gerenciamento de candidatos com controle completo de fases com envio de emails.
                            cliente Eurofarma. Aplicação NodeJs com TypeScript, Prisma e banco de dados PostgreSql com
                            Docker.</p>

                    </li>
                    <li className='ativo' id="reais"><img src="/img/centralservice.png" alt="imgCentral" />
                        <p>CentralService: Gerenciamento de Ordem de Serviços, Estoques, Clientes e Funcionários
                            voltado ao setor de equipamentos hospitalares aplicação com NodeJs, NestJS, TypeORM e banco de
                            dados PostgreSQL com Docker.</p>
                    </li>
                    <li className='ativo' id="reais"><img src="/img/brengatech.png" alt="imgBrenga" />
                        <p>BrengaTech: Gerenciamento de Ordem de Serviços, Pagamentos, Estoques, Clientes, Oficinas
                            parceiras e Funcionários
                            voltado ao setor automibilistico aplicação NodeJs com JavaScript e banco de dados PostgreSql.
                        </p>

                    </li>
                    <li className='ativo' id="estudo"><img src="/img/estacionamento.png" alt="imgEstacionamento" />
                        <p>Estacionamento: Projeto Backend para um serviço de estacionamento com CRUD completo para controle
                            de Veiculos e Atividade utilizando banco não-relacional Sqlite,
                            JavaScript e Express.</p>
                    </li>
                    <li className='ativo' id="estudo"><img src="/img/jogo.png" alt="imgEstacionamento" />
                        <p>Jogo Multiplayer: Projeto de um Jogo multiplayer com JavaScript, SocketIO para
                            comunicação sentre Server e Client, manipulaçao de DOM. Projeto Felipe Dechamps.</p>
                    </li>
                    <li className='ativo' id="website"><img src="/img/html.png" alt="imgEstacionamento" />
                        <p>Site Google-Glass: Projeto de criação de um Site com JavaScript, HTML e CSS para venda do
                            Google-Glass. Curso em Video com Gustavo Guanabara. </p>
                    </li>
                    <li className='ativo' id="website"><img src="/img/sssite.png" alt="imgSite" />
                        <p>Site SS-Produções: Projeto pessoal de criação de um Site para treinamento de JavaScript, HTML,
                            CSS,
                            manipulação de dados, imagens, audio, videos e animações.</p>
                    </li>
                    <li className='ativo' id="estudo"><img src="/img/git.png" alt="imgGit" />
                        <p>Projeto de uma Aplicação back-end que conecta a API do GitHub seleciona os
                            Repositórios mais bem avaliados de uma lista de linguagem e exibe com metodo para favoritar /
                            desfavoritar - JavaScript, Axios, Express e PostgreSQL com Docker.</p>
                    </li>
                    <li className='ativo' id="estudo"><img src="/img/login.png" alt="imgGit" />
                        <p>Projeto de criação de Aplicações para Login com diferentes Abordagens, Layout's, Validações
                            de Campos, CRUD, criptografia de senhas, manipulação de Docker/Docker compose, LocalStorage.
                        </p>
                    </li>
                    <li className='ativo' id="estudo"><img src="/img/conta.png" alt="imgGit" />
                        <p>Projeto de Aplicação Simulada de "Conta Poupança" com depósito, saque e extrato
                            utilizando JavaScript e HTML.
                        </p>
                    </li>
                    <li className='ativo' id="estudo"><img src="/img/calculadora.png" alt="imgGit" />
                        <p>Projeto de uma Calculadora
                            utilizando JavaScript, HTML e CSS. CFB Cursos Prof. Bruno.
                        </p>
                    </li>
                    <li className='ativo' id="estudo"><img src="/img/imc.png" alt="imgGit" />
                        <p>Projeto de uma Aplicação para Calculdo de IMC com JavaScript, HTML e CSS.
                        </p>
                    </li>
                    <li className='ativo' id="estudo"><img src="/img/radar.png" alt="imgGit" />
                        <p>Projeto de uma Aplicação para Radar de velocidade com cálculos de pontuação,
                            JavaScript ,HTML e CSS.
                        </p>
                    </li>
                    <li className='ativo' id="website"><img src="/img/portifolio.png" alt="imgGit" />
                        <p>Projeto de criação de um Portifólio para auxiliar na recolocação no mercado de trabalho,
                            JavaScript ,HTML e CSS.
                        </p>
                    </li>
                    <li className='ativo' id="estudo"><img src="/img/authtdd.png" alt="imgGit" />
                        <p>Projeto de estudo Testes TDD com Jest , JWT para authenticação de rotas, Banco Isolado Sqlite3 e
                            Postgress.
                        </p>
                    </li>
                    <li className='ativo' id="estudo"><img src="/img/mongo.png" alt="imgGit" />
                        <p>Projeto de estudo MongoDB banco NOSql com Atlas banco em Nuvem com NodeJS, Express, Nodemon ,
                            Mongoose com CRUD APIRest e Verbo HTTP.
                        </p>
                    </li>
                    <li className='ativo' id="estudo"><img src="/img/graphql.png" alt="imgGit" />
                        <p>Projeto de estudo Graphql com NestJS e TypeORM utilizando banco Postgress local com a ferramenta
                            PG-Admin.
                        </p>
                    </li>
                    <li className='ativo' id="estudo"><img src="/img/serverless.png" alt="imgGit" />
                        <p>Projeto de estudo Serverless com NodeJS, Prisma e banco Postgres em nuvem com Servidor Elephant.
                        </p>
                    </li>
                    <li className='ativo' id="estudo"><img src="/img/mysql.png" alt="imgGit" />
                        <p>Projeto de estudo Mysql com Workbrench em NodeJS.
                        </p>
                    </li>
                    <li className='ativo' id="estudo"><img src="/img/agenda.png" alt="imgGit" />
                        <p>Aplicação Agenda de contatos desenvolvida com Javascript, HTML, CSS, framework Node-red e Banco
                            de dados com
                            Wampserver64.
                        </p>
                    </li>
                    <li className='ativo' id="estudo"><img src="/img/transcricaofala.png" alt="imgGit" />
                        <p>Projeto Pessoal em Andamento como principal função a Transcrição de fala utilizando as
                            tecnologias JavaScript, HTML e CSS.
                        </p>
                    </li>
                    <li className='ativo' id="estudo"><img src="/img/estoque.png" alt="imgGit" />
                        <p>Projeto de Controle de Estoque, Fornecedores e Pessoas, tive a oportunidade de aplicar meus
                            conhecimentos em JavaScript,
                            HTML e CSS para criar uma interface de usuário intuitiva e amigável.
                            Utilizei o Node-RED para a lógica de automação, implementei um banco de dados MySQL
                            através do WampServer.
                        </p>
                    </li>
                    <li className='ativo' id="estudo"><img src="/img/reactTodoList.png" alt="imgGit" />
                        <p>O projeto consiste na criação de uma aplicação "To-Do List" moderna e eficaz, desenvolvida
                            utilizando a biblioteca **React**.
                            Essa aplicação oferece uma interface intuitiva e amigável para ajudar os usuários a organizar
                            suas tarefas diárias de forma eficiente e produtiva.
                        </p>
                    </li>
                    <li className='ativo' id="estudo"><img src="/img/reactmovie.png" alt="imgGit" />
                        <p>Projeto de criação de uma aplicação com REACT + VITE que acessa a API do TMDB e possibilita
                            consultar diversas informações sobre Filmes.
                        </p>
                    </li>
                    <li className='ativo' id="estudo"><img src="/img/reactcep.png" alt="imgGit" />
                        <p>Este é um aplicativo React simples que utiliza a biblioteca Axios para consultar informações de
                            um CEP usando a API do ViaCEP.
                            Permite aos usuários inserirem um CEP e, ao submeterem o formulário, obterem as informações
                            relacionadas a esse CEP.
                        </p>
                    </li>
                    <li className='ativo' id="estudo"><img src="/img/reactclima.png" alt="imgGit" />
                        <p>Projeto de criação de uma aplicação com REACT que acessa a API real 'Weather' e renderiza na tela
                            alguns dados do clima da Cidade pesquisada. JavaScript, CSS e Tailwind.
                        </p>
                    </li>
                    <li className='ativo' id="estudo"><img src="/img/reactcart.png" alt="imgGit" />
                        <p>Projeto de criação de uma aplicação com REACT que acessa a API real do Mercado Livre e
                            possibilita
                            Adicionar ou Excluir produtos no carrinho e ja somar ou subtrair o valor Total de forma
                            dinâmica.
                        </p>
                    </li>
                    <li className='ativo' id="estudo"><img src="/img/snake.png" alt="imgGit" />
                        <p>Projeto de criação do famoso jogo da Cobrinha "Snake". Aplicação desenvolvida com JavaScript,
                            HTML5 e CSS3.
                        </p>
                    </li>
                    <li className='ativo' id="estudo"><img src="/img/full.png" alt="imgGit" />
                        <p>FullStack Project - 1 - Trilha BackEnd : Desenvolvimento em NodeJS e TypeScript com um banco de
                            dados SQLite que deve receber um arquivo .CSV e salvá-lo, com uma opção de busca por qualquer
                            parâmetro que possa existir.
                            2 - Trilha FrontEnd : Desenvolvimento em NodeJS e React com Vite. Conexão com API gerada na
                            trilha de BanckEnd.
                        </p>
                    </li>
                    <li className='ativo' id="estudo"><img src="/img/parallax.png" alt="imgGit" />
                        <p>Projeto de criação de uma aplicação com REACT com Animação, efeito scroll com PARALLAX e
                            manipulação de eixo X e Y
                        </p>
                    </li>
                </ul>
            </div>
            <a className="vermais" href="https://github.com/1andersonmotta" target="_blank">Veja mais Projetos <i
                className="fa-brands fa-github-alt"></i></a>

        </section>
    )
}

export default ProjectsComponent;