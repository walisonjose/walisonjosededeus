import React from "react";
import mock01 from '../assets/images/mock01.png';
import mock02 from '../assets/images/mock02.png';
import mock03 from '../assets/images/mock03.png';
import mock04 from '../assets/images/mock04.png';
import mock05 from '../assets/images/mock05.png';
import mock06 from '../assets/images/mock06.png';
import mock07 from '../assets/images/mock07.png';
import mock08 from '../assets/images/mock08.png';
import mock09 from '../assets/images/mock09.png';
import mock10 from '../assets/images/mock10.png';
import tainacan_project from '../assets/images/tainacan_project.jpg';
import ingoh from '../assets/images/ingoh.jpg';
import siga2 from '../assets/images/siga2.png';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Projetos</h1>
       
        <div className="projects-grid">
            <div className="project">
                <a href="https://tainacan.org/" target="_blank" rel="noreferrer"><img src={tainacan_project} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://tainacan.org/" target="_blank" rel="noreferrer"><h2>Tainacan</h2></a>
                <p>Um software livre, flexível e potente para criação de repositórios de acervos digitais em WordPress.</p>
            </div>
            <div className="project">
                <a href="https://apps.apple.com/br/app/banco-de-sangue-ingoh/id1522368415" target="_blank" rel="noreferrer"><img src={ingoh} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://apps.apple.com/br/app/banco-de-sangue-ingoh/id1522368415" target="_blank" rel="noreferrer"><h2>Banco de Sangue INGOH</h2></a>
                <p>Banco de Sangue INGOH é um aplicativo voltado para a realização de solicitação de bolsas de sangue e hemocomponentes por meio de um formulário específico,
                       acompanhamento da triagem de solicitação e a entrega.</p> 
            </div>
            <div className="project">
                <a href="https://www.youtube.com/watch?v=jXa3RaAoal4" target="_blank" rel="noreferrer"><img src={siga2} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://apps.apple.com/br/app/siga-aparecida/id1548999328" target="_blank" rel="noreferrer"><h2>Siga Aparecida</h2></a>
                <p>O Siga Aparecida é um aplicativo voltado para os usuários da frota veicular da cidade de Aparecida de Goiânia. 
                O seu funcionamento é semelhante aos aplicativos de transporte de passageiros. Onde basta ao usuário criar a sua conta, logar no app e solicitar a sua viagem.</p> 
            </div>
        </div>
    </div>
    );
}

export default Project;