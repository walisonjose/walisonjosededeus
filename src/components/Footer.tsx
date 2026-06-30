import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import '../assets/styles/Footer.scss'

function Footer() {
  return (
    <footer>
      <p className="footer-cta">Quer conversar sobre um projeto ou oportunidade?</p>
      <a className="footer-email" href="mailto:walison.josededeus@gmail.com">
        walison.josededeus@gmail.com
      </a>
      <div className="footer-social">
        <a href="https://github.com/walisonjose" target="_blank" rel="noreferrer" aria-label="GitHub"><GitHubIcon/></a>
        <a href="https://www.linkedin.com/in/walisonjosededeus/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><LinkedInIcon/></a>
        <a href="mailto:walison.josededeus@gmail.com" aria-label="Email"><EmailRoundedIcon/></a>
      </div>
      <p className="footer-copy">Walison J. Deus · Manaus, AM · Brasil</p>
    </footer>
  );
}

export default Footer;