import React from "react";
import '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss';

type TimelineItem = {
  title: string;
  subtitle: string;
  location: string;
  date: string;
  description: string;
  tags: string[];
};

const timelineData: TimelineItem[] = [
  {
    title: "Fidela Solutions",
    subtitle: "Desenvolvedor Full Stack",
    location: "Remoto",
    date: "2021 - atual",
    description: "Atuo na sustentação e evolução de produtos digitais — incluindo aplicativos mobile e portais web — voltados para o setor de loyalty. Minha rotina envolve o diagnóstico e a resolução de bugs, além da implementação de melhorias contínuas que garantem a estabilidade, performance e qualidade das soluções assegurando entregas sólidas e alinhadas às necessidades do negócio..",
    tags: ["React", "React Native", "Salesforce", "Node.JS" ],
  },
  {
    title: "Prefeitura de Aparecida de Goiânia",
    subtitle: "Diretoria de Inovação",
    location: "Aparecida de Goiânia - GO",
    date: "2019 - 2021",
    description: "Implantação do projeto Siga, app de mobilidade com React Native/Expo e Ruby on Rails no back-end.",
    tags: ["Mobilidade", "React", "React Native", "Expo", "Ruby on Rails"],
  },
  {
    title: "Projeto Tainacan - Media Lab/UFG",
    subtitle: "SysAdmin Linux",
    location: "Goiânia - GO",
    date: "2015 - 2019",
    description: "Atuava como SysAdmin no Media Lab/UFG no âmbito do projeto Tainacan desempenhando atividades relacionadas a manutenção da infraestrutura para ambiente de produção de aplicações web desenvolvidas sob a plataforma Wordpress. Além disso possui experiência na configuração de microserviços e ambientes baseados em Docker e responsável pelo gerenciamento de rotinas de backup com o software Bacula, monitoramento e configuração do ambiente de hospedagem.",
    tags: ["Linux", "Infra", "Acervos digitais", "Suporte", "Treinamento"],
  },
  {
    title: "Bacharelado em Informática - IFG",
    subtitle: "Graduação",
    location: "Inhumas - GO",
    date: "2007 - 2012",
    description: "Formação acadêmica em Informática.",
    tags: ["Acadêmico"],
  },
];

function Timeline() {
  return (
    <section id="history" className="timeline-section">
      <div className="timeline-header">
        {/* <span className="eyebrow">Linha do tempo</span> */}
        <div>
          <h1>Carreira</h1>
          <p>Experiências que moldaram minha atuação em produto e engenharia.</p>
        </div>
      </div>

      <VerticalTimeline animate={true} lineColor="#1d2a44">
        {timelineData.map((item) => (
          <VerticalTimelineElement
            key={item.title + item.date}
            className="vertical-timeline-element--work timeline-card"
            date={item.date}
            iconStyle={{ background: "#38bdf8", color: "#0b1220", boxShadow: "0 0 0 4px rgba(56, 189, 248, 0.25)" }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
            contentArrowStyle={{ borderRight: "7px solid #0f172a" }}
          >
            <div className="timeline-card__head">
              <div>
                <h3>{item.title}</h3>
                <h4>{item.subtitle}</h4>
              </div>
              <span className="badge">{item.location}</span>
            </div>
            <p>{item.description}</p>
            <div className="tag-row">
              {item.tags.map((tag) => (
                <span className="chip" key={tag}>{tag}</span>
              ))}
            </div>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </section>
  );
}

export default Timeline;