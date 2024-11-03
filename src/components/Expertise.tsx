import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faDocker, faPython } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "React",
    "React Native",
    "JavaScript",
    "Expo EAS",
    "Expo",
    "Android Nativo",
    "JSX"
];

const labelsSecond = [
    "Docker",
    "Firebase",
    "Kurbenetes",
    "Bacula",
    "CPG",
    "Linux",
    "Ispconfig",
    "cPanel",
];

const labelsThird = [
    "Salesforce",
    "JADE",
    "NodeJS",
    "Ruby on Rails",
    "Laravel",
    "Java",
    "LLMs",
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Skills</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faReact} size="3x"/>
                    <h3>Desenvolvedor Full Stack</h3>
                    <p>Tenho vasta experiência com a stack React e React Native, atuando no desenvolvimento e manutenção de projetos, com foco em entregar soluções escaláveis e de alta qualidade.</p>
                    <div className="flex-chips">
                        <span className="chip-title"></span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faDocker} size="3x"/>
                    <h3>Infra</h3>
                    <p>No contexto de infraestrutura, possuo conhecimentos em diversas ferramentas consagradas, voltadas para configuração, manutenção e disponibilidade de serviços, aplicáveis a diferentes tipos de aplicações.</p>
                    <div className="flex-chips">
                        <span className="chip-title"></span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faPython} size="3x"/>
                    <h3>Outras Ferramentas</h3>
                    <p>Experiência com Salesforce, NodeJS, Ruby on Rails e Laravel para desenvolvimento de soluções personalizadas e back-end robusto.</p>
                    <br/> <br/>
                    <div className="flex-chips">
                        <span className="chip-title"></span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;