import React from "react";
import tainacan_project from '../assets/images/tainacan_project.jpg';
import ingoh from '../assets/images/ingoh.jpg';
import siga2 from '../assets/images/siga2.png';
import '../assets/styles/Project.scss';

type ProjectItem = {
    title: string;
    description: string;
    link: string;
    image: string;
    tags: string[];
};

const projects: ProjectItem[] = [
    {
        title: "Tainacan",
        description: "Software livre para acervos digitais em WordPress, flexível e poderoso para gestão de repositórios.",
        link: "https://tainacan.org/",
        image: tainacan_project,
        tags: ["WP", "Open Source", "CMS"],
    },
    {
        title: "Banco de Sangue INGOH",
        description: "App para solicitação e acompanhamento de bolsas de sangue e hemocomponentes em fluxo completo.",
        link: "https://apps.apple.com/br/app/banco-de-sangue-ingoh/id1522368415",
        image: ingoh,
        tags: ["iOS", "Saúde", "Formulários"],
    },
    {
        title: "Siga Aparecida",
        description: "Aplicativo de mobilidade para a frota de Aparecida de Goiânia, semelhante a apps de transporte.",
        link: "https://apps.apple.com/br/app/siga-aparecida/id1548999328",
        image: siga2,
        tags: ["Mobilidade", "iOS", "Mapas"],
    },
];

function Project() {
    return (
        <section className="projects-container" id="projects">
            <div className="projects-header">
                <div>
                    <h1>Projetos</h1>
                    <p>Algumas entregas recentes que combinam produto, design e engenharia.</p>
                </div>
            </div>

            <div className="projects-grid">
                {projects.map((project) => (
                    <article className="project-card" key={project.title}>
                        <div className="project-media">
                            <img src={project.image} alt={project.title} loading="lazy" />
                        </div>

                        <div className="project-content">
                            <div className="project-meta">
                                {project.tags.map((tag) => (
                                    <span className="chip" key={tag}>{tag}</span>
                                ))}
                            </div>
                            <h2>
                                <a href={project.link} target="_blank" rel="noreferrer">
                                    {project.title}
                                </a>
                            </h2>
                            <p>{project.description}</p>
                            {/* <a className="project-link" href={project.link} target="_blank" rel="noreferrer">
                                    Ver produto
                            </a> */}
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}

export default Project;