import React from "react";
import EmojiEventsRoundedIcon from '@mui/icons-material/EmojiEventsRounded';
import MenuBookRoundedIcon from '@mui/icons-material/MenuBookRounded';
import '../assets/styles/Achievements.scss';
import CTDIESummary from "./CTDIESummary";

const PUBLIC = process.env.PUBLIC_URL ?? '';

type Item = {
  title: string;
  detail?: string;
  link?: string;
  tags?: string[];
};

const honors: Item[] = [
  {
    title: "1º lugar no CTD-IE do 1º Congresso Brasileiro de Informática na Educação (CBIE 2012)",
    detail: "Concurso de TCC, Dissertações e Teses",
    tags: ["CBIE 2012", "CTD-IE"],
  },
];

const publications: Item[] = [
  {
    title: "PROGRAMAÇÃO DE AGENTES INTELIGENTES COM JAVA",
    link: `${PUBLIC}/docs/PROGRAMACAO_DE_AGENTES_INTELIGENTES_COM_JAVA.pdf`,
    tags: ["Java", "Agentes", "IA"],
  },
  {
    title: "Processos de comunicação entre agentes inteligentes para o sistema AgenTCC",
    link: `${PUBLIC}/docs/1820-2868-1-SM.pdf`,
    tags: ["AgenTCC", "Comunicação", "Assistentes"],
  },
];

function Achievements() {
  return (
    <section className="achievements" id="honors">
      <div className="achievements-header">
        {/* <span className="eyebrow">Honors & Publicações</span> */}
        <div>
          <h1>Publicações</h1>
          {/* <p>Prêmios e trabalhos acadêmicos que reforçam minha base em agentes, IA e engenharia de software.</p> */}
        </div>
      </div>

      <div className="achievements-grid">
        <article className="ach-card"> 
          <div className="ach-head">
            <div className="icon-badge teal"><MenuBookRoundedIcon fontSize="small" /></div>
            <div>
              <h3>Publicações</h3>
            </div>
          </div>
          <ul>
            {publications.map((item) => (
              <li key={item.title}>
                <div className="item-title">
                  {item.link ? (
                    <a href={item.link} target="_blank" rel="noopener noreferrer">{item.title}</a>
                  ) : (
                    item.title
                  )}
                </div>
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
        <article className="ach-card">
          <div className="ach-head">
            <div className="icon-badge gold"><EmojiEventsRoundedIcon fontSize="small" /></div>
            <div>
              <h3>Reconhecimentos</h3>
            </div>
          </div>
          <ul>
            {honors.map((item) => (
              <li key={item.title}>
                <div className="item-title">{item.title}</div>
                {item.detail && <div className="item-detail">{item.detail}</div>}
                {item.tags && (
                  <div className="pill-row">
                    {item.tags.map((tag) => (
                      <span className="pill pill-gold" key={tag}>{tag}</span>
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ul>
          {/* <div className="ach-inline-highlight">
            <CTDIESummary embedded />
          </div> */}
        </article>

        {/* <article className="ach-card"> 
          <div className="ach-head">
            <div className="icon-badge teal"><MenuBookRoundedIcon fontSize="small" /></div>
            <div>
              <h3>Publicações</h3>
            </div>
          </div>
          <ul>
            {publications.map((item) => (
              <li key={item.title}>
                <div className="item-title">
                  {item.link ? (
                    <a href={item.link} target="_blank" rel="noopener noreferrer">{item.title}</a>
                  ) : (
                    item.title
                  )}
                </div>
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
        </article> */}
      </div>
    </section>
  );
}

export default Achievements;
