import React from "react";
import WorkspacePremiumRoundedIcon from '@mui/icons-material/WorkspacePremiumRounded';
import OpenInNewRoundedIcon from '@mui/icons-material/OpenInNewRounded';
import "../assets/styles/Certifications.scss";

type Certification = {
  title: string;
  institution?: string;
  year?: number;
  credentialUrl?: string;
  tags: string[];
};

const certs: Certification[] = [
  {
    title: "Engenharia de Software para Aviônica",
    institution: "",
    year: undefined,
    tags: ["Engenharia", "Sistemas críticos"],
  },
  {
    title: "Linux Security – Servers in Cloud",
    institution: "",
    year: undefined,
    tags: ["Linux", "Segurança", "Cloud"],
  },
  {
    title: "Desafio: Agentes de IA com n8n na Prática",
    institution: "",
    year: undefined,
    tags: ["IA", "Automação", "n8n"],
  },
  {
    title: "Desenvolvedor Multiplataforma Android/iOS com React e Redux",
    institution: "",
    year: undefined,
    tags: ["React Native", "Redux", "Mobile"],
  },
];

function Certifications() {
  return (
    <section className="cert-section" id="certifications">
      <div className="cert-header">
        {/* <span className="eyebrow">Formação complementar</span> */}
        <div>
          <h1>Formação complementar</h1>
          {/* <p>Reconhecimentos que reforçam minha atuação em mobile, segurança e sistemas críticos.</p> */}
        </div>
      </div>

      <div className="cert-grid">
        {certs.map((cert) => (
          <article className="cert-card" key={cert.title}>
            <div className="cert-icon">
              <WorkspacePremiumRoundedIcon fontSize="small" />
            </div>
            <div className="cert-body">
              <h3>
                {cert.credentialUrl ? (
                  <a href={cert.credentialUrl} target="_blank" rel="noopener noreferrer">
                    {cert.title}
                    <OpenInNewRoundedIcon className="cert-link-icon" fontSize="inherit" />
                  </a>
                ) : (
                  cert.title
                )}
              </h3>
              {(cert.institution || cert.year) && (
                <p className="cert-meta">
                  {cert.institution && <span>{cert.institution}</span>}
                  {cert.institution && cert.year && <span className="cert-sep">·</span>}
                  {cert.year && <span>{cert.year}</span>}
                </p>
              )}
            </div>
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
