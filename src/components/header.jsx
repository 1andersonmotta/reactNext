
const Header = () => {
    return (
        <header>
            <h1>Dev <span>Anderson Motta</span></h1>
            <nav>
                <ul aria-label="Navegação primária" className="navegacao-primaria">
                    <li><a href="#sobre">Resumo</a></li>
                    <li><a href="#experiencia">Experiência</a></li>
                    <li><a href="#projeto">Projetos</a></li>
                    <li><a href="#contato">Contatos</a></li>
                </ul>
                <i className="fa-solid fa-bars"></i>
            </nav>
        </header>
    )
}

export default Header;