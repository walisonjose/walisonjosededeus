import React from "react";
import EmojiEventsRoundedIcon from '@mui/icons-material/EmojiEventsRounded';
import WorkspacePremiumRoundedIcon from '@mui/icons-material/WorkspacePremiumRounded';
import MenuBookRoundedIcon from '@mui/icons-material/MenuBookRounded';
import '../assets/styles/Achievements.scss';
import CTDIESummary from "./CTDIESummary";

type Item = {
  title: string;
  detail?: string;
  tags?: string[];
};

const honors: Item[] = [
  {
    title: "1º lugar no CTD-IE do 1º Congresso Brasileiro de Informática na Educação (CBIE 2012)",
    detail: "Concurso de TCC, Dissertações e Teses",
    tags: ["CBIE 2012", "CTD-IE", "1º lugar"],
  },
];

const publications: Item[] = [
  {
    title: "Intelligent Agent Assistants Support to the Development of End of Course Work",
    tags: ["Agentes", "Assistentes", "Pesquisa"],
  },
  {
    title: "Um estudo de ontologias como ferramenta para a modelagem do processo de comunicação entre agentes",
    tags: ["Ontologias", "Comunicação", "Agentes"],
  },
  {
    title: "PROGRAMAÇÃO DE AGENTES INTELIGENTES COM JAVA",
    tags: ["Java", "Agentes", "IA"],
  },
  {
    title: "Processos de comunicação entre agentes assistentes para o sistema AgenTCC",
    tags: ["AgenTCC", "Comunicação", "Assistentes"],
  },
];

function Achievements() {
  return (
    <section className="achievements" id="honors">
      <div className="achievements-header">
        <span className="eyebrow">Honors & Publicações</span>
        <div>
          <h1>Reconhecimentos e pesquisa</h1>
          <p>Prêmios e trabalhos acadêmicos que reforçam minha base em agentes, IA e engenharia de software.</p>
        </div>
      </div>

      <div className="achievements-grid">
        <article className="ach-card">
          <div className="ach-head">
            <div className="icon-badge gold"><EmojiEventsRoundedIcon fontSize="small" /></div>
            <div>
              <h3>Honors & Awards</h3>
              <p>Resultados em competições e reconhecimentos.</p>
            </div>
          </div>
          <ul>
            {honors.map((item) => (
              <li key={item.title}>
                <div className="item-title">{item.title}</div>
                {item.detail && <div className="item-detail">{item.detail}</div>}
              </li>
            ))}
          </ul>
          <div className="ach-inline-highlight">
            <CTDIESummary embedded />
          </div>
        </article>

        <article className="ach-card">
          <div className="ach-head">
            <div className="icon-badge teal"><MenuBookRoundedIcon fontSize="small" /></div>
            <div>
              <h3>Publications</h3>
              <p>Pesquisa e escrita em agentes inteligentes e comunicação.</p>
            </div>
          </div>
          <ul>
            {publications.map((item) => (
              <li key={item.title}>
                <div className="item-title">{item.title}</div>
                {item.tags && (
                  <div className="pill-row">
                    {item.tags.map((tag) => (
                      <span className="pill" key={tag}>{tag}</span>
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  );
}

export default Achievements;
