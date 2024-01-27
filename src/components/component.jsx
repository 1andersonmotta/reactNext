import React, { useEffect, useRef } from 'react';

const Component = () => {
    const tituloRef = useRef(null);

    useEffect(() => {
        function ativaLetra(elemento) {
            const arrTexto = elemento.innerHTML.split('');
            elemento.innerHTML = '';
            arrTexto.forEach((letra, i) => {
                setTimeout(() => {
                    elemento.innerHTML += letra;
                }, 75 * i);
            });
        }

        const titulo = tituloRef.current;
        ativaLetra(titulo);

        const intervalId = setInterval(() => {
            ativaLetra(titulo);
        }, 5000);

        // Limpando o intervalo quando o componente é desmontado
        return () => clearInterval(intervalId);
    }, []); // O array de dependências vazio garante que o useEffect só será executado uma vez

    return (
        <section aria-label="seção curriculo download Anderson" className="section-div">
            <div>
                <h2></h2>
                <h2 ref={tituloRef} className="digitando">Desenvolvedor</h2>
                <p>FullStack | NodeJs | JavaScript | TypeScript | React</p>
                <a className="box" href="./AndersonParenteMottacv.pdf" download="">Download CV</a>
            </div>
        </section>
    );
}

export default Component;
