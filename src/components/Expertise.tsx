import React from "react";
import '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faDocker, faPython } from '@fortawesome/free-brands-svg-icons';
import '../assets/styles/Expertise.scss';

type SkillCard = {
    title: string;
    subtitle: string;
    description: string;
    tags: string[];
    icon: typeof faReact;
    accent: string;
};

const skills: SkillCard[] = [
    {
        title: "React Native & Web",
        subtitle: "Apps mobile e portais",
        description: "7+ anos com React Native e React entregando produtos performáticos, acessíveis e preparados para escala.",
        tags: ["React Native", "React", "JavaScript", "TypeScript", "Expo", "Java"],
        icon: faReact,
        accent: "#38bdf8",
    },
    {
        title: "Infra & Linux",
        subtitle: "SysAdmin e observabilidade",
        description: "3+ anos administrando Linux, deploy de serviços e otimização de ambientes para disponibilidade e segurança.",
        tags: ["Linux", "Docker", "Nginx/Apache", "Monitoramento", "CI/CD", "Shell"],
        icon: faDocker,
        accent: "#22d3ee",
    },
    {
        title: "Loyalty & Sustentação",
        subtitle: "Estabilidade e performance",
        description: "Atuação diária em diagnóstico e correção de bugs, hardening de performance e melhoria contínua em produtos de loyalty.",
        tags: ["Loyalty", "Bugfix", "Performance", "Observabilidade", "Suporte", "Melhoria contínua"],
        icon: faPython,
        accent: "#a3e635",
    },
];

function Expertise() {
    return (
        <section className="expertise-section" id="expertise">
            <div className="expertise-header">
                <span className="eyebrow">Skills</span>
                {/* <div>
                    <h1>Stack e especialidades</h1>
                    {/* <p>Loyalty, mobile, web e infra: sustentação, performance e produtos prontos para o negócio.</p> 
                </div> */}
            </div>

            <div className="skills-grid">
                {skills.map((skill) => (
                    <article className="skill-card" key={skill.title} style={{ ['--accent' as string]: skill.accent }}>
                        <div className="icon-badge">
                            <FontAwesomeIcon icon={skill.icon} size="2x" />
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