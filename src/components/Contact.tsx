import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import '../assets/styles/Contact.scss';

function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-inner">
        <span className="eyebrow">Contato</span>
        <h1>Vamos conversar?</h1>
        <p>Disponível para projetos, oportunidades e colaborações em mobile, web e infra.</p>

        <div className="contact-actions">
          <a className="btn primary" href="mailto:walison.josededeus@gmail.com">
            <EmailRoundedIcon fontSize="inherit" />
            Enviar e-mail
          </a>
          <a className="btn ghost" href="https://www.linkedin.com/in/walisonjosededeus/" target="_blank" rel="noreferrer">
            <LinkedInIcon fontSize="inherit" />
            LinkedIn
          </a>
          <a className="btn ghost" href="https://github.com/walisonjose" target="_blank" rel="noreferrer">
            <GitHubIcon fontSize="inherit" />
            GitHub
          </a>
        </div>

        <p className="contact-email-bare">walison.josededeus@gmail.com</p>
      </div>
    </section>
  );
}

export default Contact;
