import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Carreira</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="2021 - present"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Fidela Solutions</h3>
            <h4 className="vertical-timeline-element-subtitle">Remoto</h4>
            <p>
            Desenvolvedor Full Stack com foco em React e React Native, atuando no desenvolvimento de soluções de fidelização e engajamento de usuários (Acessa Agro e Deu Cash).
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2019 - 2021"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Diretoria de Inovação - Prefeitura de Aparecida de Goiânia</h3>
            <h4 className="vertical-timeline-element-subtitle">Aparecida de Goiânia - GO</h4>
            <p>
            Atuando na implantação do projeto Siga, voltado para mobilidade urbana. Atuando com React Native e Expo no front-end e Ruby on Rails no back-end.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2015 - 2019"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Projeto Tainacan - Media Lab/UFG</h3>
            <h4 className="vertical-timeline-element-subtitle">Goiânia - GO</h4>
            <p>
            SysAdmin Linux no Media Lab/UFG, participando do projeto Tainacan,
             atuando com a configuração e manutenção de infraestrutura e também com suporte e treinamento de usuários.</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2007 - 2012"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Bacharelado em Informática, IFG.</h3>
            <h4 className="vertical-timeline-element-subtitle">Inhumas, Goiás</h4>
            <p>
              Graduação.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;