import React from "react";
import '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faDocker, faNode } from '@fortawesome/free-brands-svg-icons';
import { faMobile } from '@fortawesome/free-solid-svg-icons';
import '../assets/styles/Expertise.scss';

type SkillCard = {
    title: string;
    subtitle: string;
    description: string;
    tags: string[];
    icon: typeof faReact
};

const skills: SkillCard[] = [
    {
        title: "React Native",
        subtitle: "Apps iOS e Android",
        description: "Experiência consolidada com React Native e Expo em apps de loyalty (Fidela, Cogny), mobilidade urbana (Siga Aparecida) e saúde (INGOH). Publicação e sustentação contínua nas lojas App Store e Google Play.",
        tags: ["React Native", "Expo", "TypeScript", "iOS", "Android", "Java", "Zustand", "Firebase"],
        icon: faMobile
    },
    {
        title: "React & Node.js",
        subtitle: "Frontend e backend",
        description: "Portais web e APIs em produção para o setor de loyalty com React, Next.js e Node.js. Integrações com Firebase, Salesforce e ecossistemas de fidelidade.",
        tags: ["React", "Node.js", "Ruby on Rails", "Firebase", "TypeScript", "Salesforce", "REST"],
        icon: faNode
    },
    {
        title: "Infra & Linux",
        subtitle: "SysAdmin e DevOps",
        description: "4+ anos como SysAdmin Linux no projeto Tainacan/UFG: Docker, Kubernetes, Nginx, pipelines CI/CD, backup com Bacula e monitoramento de infraestrutura de produção.",
        tags: ["Linux", "Docker", "Kubernetes", "Nginx", "CI/CD", "Shell", "Bacula"],
        icon: faDocker,
    },
];

function Expertise() {
    return (
        <section className="expertise-section" id="expertise">
            <div className="expertise-header">
                {/* <span className="eyebrow">Skills</span> */}
                <div>
                    <h1>Stacks</h1>
                    {/* <p>Mobile, web e infra: produtos robustos e estáveis do frontend ao servidor.</p> */}
                </div>
            </div>

            <div className="skills-grid">
                {skills.map((skill) => (
                    <article className="skill-card" key={skill.title}>
                        <div className="skill-icon"
                         >
                            <FontAwesomeIcon icon={skill.icon} size="4x" />
                        </div>
                        <div className="skill-copy">
                            <h3>{skill.title}</h3>
                            <h4>{skill.subtitle}</h4>
                            <p>{skill.description}</p>
                        </div>
                        <div className="pill-row">
                            {skill.tags.map((tag) => (
                                <span className="pill" key={tag}>{tag}</span>
                            ))}
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}

export default Expertise;