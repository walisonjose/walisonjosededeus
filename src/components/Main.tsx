import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';

function Main() {
  return (
    <section className="hero">
      <div className="hero-grid">
        <div className="hero-copy">
          <div className="eyebrow">React Native · Loyalty</div>
          <h1>Walison J. Deus</h1>
          <p className="lede">Mais de 4 anos sustentando e evoluindo produtos de loyalty, mobile e web. Atuo em diagnóstico e correção de bugs, performance e melhorias contínuas para manter estabilidade e alinhamento ao negócio.</p>

          <div className="hero-meta">
            {/* <span className="badge">Palmas · Tocantins · Brasil</span> */}
            <span className="badge">React Native · 7+ anos</span>
            <span className="badge">SysAdmin Linux · 3+ anos</span>
          </div>

          {/* <div className="hero-actions">
            <a className="btn primary" href="#projects">Ver projetos</a>
            <a className="btn ghost" href="https://www.linkedin.com/in/walisonjosededeus/" target="_blank" rel="noreferrer">LinkedIn</a>
          </div> */}

          <div className="social-row">
            <a href="https://github.com/walisonjose" target="_blank" rel="noreferrer" aria-label="GitHub">
              <GitHubIcon />
            </a>
            <a href="https://www.linkedin.com/in/walisonjosededeus/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <LinkedInIcon />
            </a>
          </div>
        </div>

        <div className="hero-figure">
          <div className="avatar-ring">
            <img src="https://media.licdn.com/dms/image/v2/D4D03AQFfG7olI6031w/profile-displayphoto-scale_200_200/B4DZqZqVr_KIAg-/0/1763514605096?e=1770854400&v=beta&t=peQ-wrjba8Ngb1Lx8-OxBkCRkVbX9VVPqeak486qE2w" alt="Walison J. Deus" />
          </div>
          <div className="glow" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}

export default Main;