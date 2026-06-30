import React from "react";
import OpenInNewRoundedIcon from '@mui/icons-material/OpenInNewRounded';
import acessa_agro from '../assets/images/acessa_agro.svg';
import clubegiro from '../assets/images/clubegiro.png';
import tainacan_logo from '../assets/images/tainacan_logo.svg';
import ingoh from '../assets/images/ingoh.jpg';
import siga2 from '../assets/images/siga2.png';
import shelfup from '../assets/images/shelfup.png';
import '../assets/styles/Project.scss';

type ProjectItem = {
    title: string;
    description: string;
    link: string;
    image?: string;
    logoOnly?: boolean;
    tags: string[];
    association?: string;
    period?: string;
    accentColor?: string;
};

const projects: ProjectItem[] = [
    {
        title: "Acessa Agro",
        description: "Programa de fidelidade oficial da Syngenta para produtores rurais: plataforma de benefícios onde o agricultor acumula pontos ao adquirir produtos elegíveis. Atuei na equipe de sustentação e evolução — portal e app — fazendo triagem de tickets de produção, investigação de fluxos, desenvolvimento de correções e acompanhamento de validação até o deploy.",
        link: "https://acessaagro.com.br/",
        image: acessa_agro,
        logoOnly: true,
        tags: ["React Native", "React.js", "Firebase", "Salesforce", "Node.js", "Android", "iOS"],
        association: "Fidela",
        period: "mar 2023 – jun 2026",
        accentColor: "#16a34a",
    },
    {
        title: "Clube Giro",
        description: "Programa de fidelidade gamificado do Grupo JCA — viações 1001, Cometa, Catarinense e Expresso do Sul. Passageiros acumulam pontos e medalhas a cada viagem para trocar por prêmios. Atuei na equipe de sustentação: triagem de tickets N1, análise de fluxos afetados, desenvolvimento de correções, validação com QA e deploy em produção.",
        link: "https://clubegiro.com.br/",
        image: clubegiro,
        logoOnly: true,
        tags: ["React Native", "Firebase", "Salesforce", "Node.js", "Android", "iOS"],
        association: "Fidela",
        period: "jan 2023 – jun 2026",
        accentColor: "#1a7a7a",
    },
    {
        title: "ShelfUp",
        description: "Plataforma de auditoria e execução de trade marketing para monitoramento de share de prateleira e visibilidade no varejo. App offline-first usado por vendedores em campo — missão crítica, com impacto direto na operação dos clientes em caso de falha. Atuei na sustentação e desenvolvimento de melhorias, com ações coordenadas com QA, infra e produto e cuidado redobrado em cada deploy.",
        link: "https://shelfup.com.br/",
        tags: ["React Native", "Salesforce", "Node.js", "SQLite"],
        association: "Cogny",
        image: shelfup,
        logoOnly: true,
        period: "abr 2021 – mar 2023",
        accentColor: "#4f46e5",
    },
    {
        title: "Tainacan",
        description: "Solução brasileira open source para gestão e publicação de acervos digitais em WordPress, voltada a instituições culturais e projetos de pesquisa. Atuei como SysAdmin no MediaLAB/UFG: manutenção da infraestrutura de produção, configuração de microsserviços em Docker, administração de backups com Bacula e monitoramento geral do ambiente de hospedagem.",
        link: "https://tainacan.org/",
        image: tainacan_logo,
        logoOnly: true,
        tags: ["Linux", "Docker", "Kubernetes", "WordPress", "Apache", "MySQL", "Bacula", "ISPConfig"],
        association: "MediaLAB – UFG",
        period: "mar 2015 – mar 2019",
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
        description: "Plataforma interna de gerenciamento da frota municipal de Aparecida de Goiânia: dashboard em Ruby on Rails e dois aplicativos Android que funcionam nos moldes de apps de mobilidade urbana — o usuário solicita uma viagem e é atendido por um motorista da frota. Atuei na Diretoria de Inovação auxiliando na implantação técnica, desenvolvimento de melhorias e correção de bugs.",
        link: "https://www.youtube.com/watch?v=jXa3RaAoal4",
        image: siga2,
        tags: ["React Native", "Expo", "JavaScript", "Java", "Android", "Ruby on Rails"],
        association: "Prefeitura de Aparecida de Goiânia",
        period: "mar 2019 – abr 2021",
    },
];

function Project() {
    return (
        <section className="projects-container" id="projects">
            <div className="projects-header">
                {/* <span className="eyebrow">Projetos</span> */}
                <div>
                    <h1>Projetos</h1>
                    <p>Alguns dos projetos em que atuei em produto, engenharia e sustentação.</p>
                </div>
            </div>

            <div className="projects-grid">
                {projects.map((project) => (
                    <article className="project-card" key={project.title}>
                        <div
                            className={`project-media${project.logoOnly ? ' project-media--logo' : ''}`}
                            style={project.accentColor ? { ['--project-accent' as string]: project.accentColor } : undefined}
                        >
                            {project.image ? (
                                <img src={project.image} alt={project.title} loading="lazy" />
                            ) : (
                                <div className="project-placeholder">
                                    <span className="project-placeholder__title">{project.title}</span>
                                    {project.association && (
                                        <span className="project-placeholder__assoc">via {project.association}</span>
                                    )}
                                </div>
                            )}
                        </div>

                        <div className="project-content">
                            <div className="project-header-row">
                                <div className="project-meta">
                                    {project.tags.map((tag) => (
                                        <span className="chip" key={tag}>{tag}</span>
                                    ))}
                                </div>
                                {(project.association || project.period) && (
                                    <div className="project-attrs">
                                        {project.association && (
                                            <span className="project-assoc">{project.association}</span>
                                        )}
                                        {project.period && (
                                            <span className="project-period">{project.period}</span>
                                        )}
                                    </div>
                                )}
                            </div>

                            <h2>
                                <a href={project.link} target="_blank" rel="noreferrer">
                                    {project.title}
                                    <OpenInNewRoundedIcon className="link-icon" fontSize="inherit" />
                                </a>
                            </h2>
                            <p>{project.description}</p>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}

export default Project;
