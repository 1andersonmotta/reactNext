import React from 'react';

//Treinando a manipulação de Icones com Font AwesomeS
import { library } from '@fortawesome/fontawesome-svg-core';
import {
    faHandHoldingDollar,
    faMugHot,
    faMedal,
    faGraduationCap,
    faThumbsUp,
    faLightbulb
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Adicione os ícones à biblioteca
library.add(
    faHandHoldingDollar,
    faMugHot,
    faMedal,
    faGraduationCap,
    faThumbsUp,
    faLightbulb
);

const Facts = () => {
    return (
        <div className="cursos">
            <h2>FATOS</h2>
            <div className="funfacts">
                <ul>
                    <li>
                        <i><FontAwesomeIcon icon={faHandHoldingDollar} /></i>
                        <span>Contrato</span>
                        <p>PJ ou CLT</p>
                    </li>
                    <li>
                        <i><FontAwesomeIcon icon={faMugHot} /></i>
                        <span>100%</span>
                        <p>Disponível</p>
                    </li>
                    <li>
                        <i><FontAwesomeIcon icon={faMedal} /></i>
                        <span>32</span>
                        <p>Cerificados</p>
                    </li>
                    <li>
                        <i><FontAwesomeIcon icon={faGraduationCap} /></i>
                        <span>Superior</span>
                        <p>ADS Cursando</p>
                    </li>
                    <li>
                        <i><FontAwesomeIcon icon={faThumbsUp} /></i>
                        <span>100%</span>
                        <p>Responsável</p>
                    </li>
                    <li>
                        <i><FontAwesomeIcon icon={faLightbulb} /></i>
                        <span>Perfil</span>
                        <p>Criativo</p>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Facts;