import React from "react";
import "../assets/styles/Certifications.scss";

type Certification = {
  title: string;
  tags: string[];
};

const certs: Certification[] = [
  {
    title: "Engenharia de Software para Aviônica",
    tags: ["Engenharia", "Sistemas críticos"],
  },
  {
    title: "Linux Security Servers in Cloud",
    tags: ["Linux", "Segurança", "Cloud"],
  },
  {
    title: "Desafio: Agentes de IA com N8N na Prática",
    tags: ["IA", "Automação", "n8n"],
  },
  {
    title: "Desenvolvedor Multiplataforma Android/iOS com React e Redux",
    tags: ["React Native", "Redux", "Mobile"],
  },
];

function Certifications() {
  return (
    <section className="cert-section" id="certifications">
      <div className="cert-header">
        <span className="eyebrow">Certificações</span>
        <div>
          <h1>Formação complementar</h1>
          <p>Reconhecimentos que reforçam minha atuação em mobile, segurança e sistemas críticos.</p>
        </div>
      </div>

      <div className="cert-grid">
        {certs.map((cert) => (
          <article className="cert-card" key={cert.title}>
            <h3>{cert.title}</h3>
            <div className="pill-row">
              {cert.tags.map((tag) => (
                <span className="pill" key={tag}>{tag}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Certifications;
