import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src="https://media.licdn.com/dms/image/v2/D4D03AQEVmpZpyhGojg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1729161753903?e=1735171200&v=beta&t=g09obBFgw7Lz2pup7mcaWKclrMxW8zQBjrp12BmMR3E" alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/walisonjose" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/walisonjosededeus/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>Walison J. Deus</h1>
          <p>Desenvolvedor Full Stack</p>

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