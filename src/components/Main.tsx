import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src="https://avatars.githubusercontent.com/u/11925691?s=400&u=485d09278292ea5abab71f7b838da6ae731b17b3&v=4" alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/walisonjose" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/walisonjosededeus/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>Walison J. Deus</h1>
          <p>Desenvolvedor React & React Native</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/walisonjose" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/walisonjosededeus/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;