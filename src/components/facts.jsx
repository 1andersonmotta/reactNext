import { library } from '@fortawesome/fontawesome-svg-core';
import { faGraduationCap, faHandHoldingDollar, faLightbulb, faMedal, faMugHot, faStar, faStarHalfStroke, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Adicione os ícones à biblioteca
library.add(faHandHoldingDollar, faMugHot, faMedal, faGraduationCap, faThumbsUp, faLightbulb);

const Facts = () => {
    return (
        <div className="cursos">
            <h2>FATOS</h2>
            <div className="funfacts">
                <ul>
                    <li>
                        <i><FontAwesomeIcon icon="fa-solid fa-hand-holding-dollar" /></i>
                        <span>Contrato</span>
                        <p>PJ ou CLT</p>
                    </li>
                    <li>
                        <i><FontAwesomeIcon icon="fa-solid fa-mug-hot" /></i>
                        <span>100%</span>
                        <p>Disponível</p>
                    </li>
                    <li>
                        <i><FontAwesomeIcon icon="fa-solid fa-medal" /></i>
                        <span>32</span>
                        <p>Cerificados</p>
                    </li>
                    <li>
                        <i><FontAwesomeIcon icon="fa-solid fa-graduation-cap" /></i>
                        <span>Superior</span>
                        <p>ADS Cursando</p>
                    </li>
                    <li>
                        <i><FontAwesomeIcon icon="fa-solid fa-thumbs-up" /></i>
                        <span>100%</span>
                        <p>Responsável</p>
                    </li>
                    <li>
                        <i><FontAwesomeIcon icon="fa-solid fa-lightbulb" /></i>
                        <span>Perfil</span>
                        <p>Criativo</p>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Facts;