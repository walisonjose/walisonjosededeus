import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import LocationOnRoundedIcon from '@mui/icons-material/LocationOnRounded';
import profilePhoto from '../assets/images/profile.jpg';
import '../assets/styles/Main.scss';

function Main() {
  return (
    <section className="hero">
      <div className="hero-grid">
        <div className="hero-copy">
          <div className="eyebrow">Desenvolvedor Mobile SR · React Native · React</div>
          <h1>Walison J. Deus</h1>
          <p className="lede">
            Desenvolvedor <strong>React Native</strong> e <strong>React</strong> com vivência em produtos dos segmentos de
            <em> loyalty</em>, mobilidade urbana, saúde e cultura — atuando desde a concepção até a publicação nas lojas,
            com evolução contínua, integrações e ganhos de performance. Rotina voltada ao diagnóstico de bugs e
            decisões de arquitetura que asseguram estabilidade das soluções. Trajetória complementada por +4 anos
            como administrador Linux, com vivência em Docker, microsserviços e infraestrutura de produção.
          </p>

          <div className="hero-meta">
            <span className="badge"><LocationOnRoundedIcon fontSize="inherit" style={{ marginRight: 4 }} />Manaus · AM · Brasil</span>
            {/* <span className="badge">React Native</span>
            <span className="badge">React · Node.js · JavaScript</span> */}
          </div>

          <div className="hero-available">
            <span className="available-dot" aria-hidden="true" />
            Disponível para novas oportunidades
          </div>

          <div className="hero-actions">
            <a className="btn primary" href="#projects">Ver projetos</a>
            <a className="btn ghost" href="https://www.linkedin.com/in/walisonjosededeus/" target="_blank" rel="noreferrer">LinkedIn</a>
          </div>

          <div className="social-row">
            <a href="https://github.com/walisonjose" target="_blank" rel="noreferrer" aria-label="GitHub">
              <GitHubIcon />
            </a>
            <a href="https://www.linkedin.com/in/walisonjosededeus/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <LinkedInIcon />
            </a>
            <a href="mailto:walison.josededeus@gmail.com" aria-label="Email">
              <EmailRoundedIcon />
            </a>
          </div>
        </div>

        <div className="hero-figure">
          <div className="avatar-ring">
            <img src={profilePhoto} alt="Walison J. Deus" />
          </div>
          <div className="glow" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}

export default Main;