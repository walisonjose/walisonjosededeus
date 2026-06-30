import React from "react";
import '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faGraduationCap } from '@fortawesome/free-solid-svg-icons';
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
  type?: 'work' | 'edu';
};

const timelineData: TimelineItem[] = [
  {
    title: "Fidela",
    subtitle: "Desenvolvedor PL",
    location: "Palmas · TO",
    date: "set 2024 – jun 2026",
    description: "Sustentação e evolução de produtos digitais — apps mobile e portais web — no setor de loyalty. Diagnóstico e resolução de bugs, melhorias contínuas de performance e qualidade, garantindo estabilidade e alinhamento com as necessidades de negócio.",
    tags: ["React Native", "React", "TypeScript", "Node.JS", "Firebase"],
  },
  {
    title: "Cogny",
    subtitle: "Analista Desenvolvedor PL",
    location: "Brasília · DF",
    date: "out 2021 – ago 2024",
    description: "Desenvolvimento e manutenção de soluções digitais no setor de loyalty. Atuação full-stack em projetos mobile e web com entregas orientadas à estabilidade e performance.",
    tags: ["React Native", "React", "TypeScript", "Node.JS"],
  },
  {
    title: "Everymind",
    subtitle: "Analista Desenvolvedor PL",
    location: "Palmas · TO",
    date: "abr 2021 – out 2021",
    description: "Desenvolvimento de soluções digitais com foco em mobile e integrações Salesforce para produtos de loyalty.",
    tags: ["React Native", "Salesforce", "JavaScript"],
  },
  {
    title: "Prefeitura de Aparecida de Goiânia",
    subtitle: "Desenvolvedor React Native Pleno",
    location: "Aparecida de Goiânia · GO",
    date: "mar 2019 – abr 2021",
    description: "Implantação do projeto Siga, aplicativo de mobilidade urbana para Aparecida de Goiânia. Desenvolvimento mobile com React Native/Expo e back-end em Ruby on Rails.",
    tags: ["React Native", "Expo", "Ruby on Rails", "Mobilidade"],
  },
  {
    title: "MediaLAB – Universidade Federal de Goiás",
    subtitle: "SysAdmin Linux",
    location: "Campus Samambaia · GO",
    date: "mar 2015 – mar 2019",
    description: "SysAdmin no MediaLab/UFG no projeto Tainacan. Manutenção de infraestrutura WordPress para produção web, configuração de microserviços e ambientes Docker, gerenciamento de backup com Bacula e monitoramento de ambiente de hospedagem.",
    tags: ["Linux", "Docker", "WordPress", "Bacula", "Nginx", "Tainacan"],
  },
  {
    title: "IFG – Campus Inhumas",
    subtitle: "Estagiário · Laboratórios de Informática",
    location: "Inhumas · GO",
    date: "dez 2011 – mai 2012",
    description: "Atividades de manutenção dos laboratórios de informática do campus.",
    tags: ["Suporte", "Hardware", "Linux"],
    type: 'edu',
  },
  {
    title: "Instituto Federal de Goiás",
    subtitle: "Monitor · Programação de Computadores",
    location: "Inhumas · GO",
    date: "ago 2009 – jul 2011",
    description: "Auxílio a estudantes de informática em disciplinas de programação. Projeto de Iniciação Científica (2008-2009): sistema baseado em agentes inteligentes para apoio ao desenvolvimento de TCCs.",
    tags: ["Ensino", "Programação", "Agentes", "Java"],
    type: 'edu',
  },
  {
    title: "Bacharelado em Informática – IFG",
    subtitle: "Graduação · Campus Inhumas",
    location: "Inhumas · GO",
    date: "2007 – 2012",
    description: "Formação em Informática pelo Instituto Federal de Educação, Ciência e Tecnologia de Goiás – Campus Inhumas.",
    tags: ["Acadêmico", "Informática"],
    type: 'edu',
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
        {timelineData.map((item) => {
          const isEdu = item.type === 'edu';
          return (
            <VerticalTimelineElement
              key={item.title + item.date}
              className={`timeline-card${isEdu ? ' timeline-card--edu' : ''}`}
              date={item.date}
              iconStyle={{
                background: isEdu ? "#4f46e5" : "#38bdf8",
                color: "#fff",
                boxShadow: `0 0 0 4px ${isEdu ? "rgba(99,102,241,0.25)" : "rgba(56,189,248,0.25)"}`,
              }}
              icon={<FontAwesomeIcon icon={isEdu ? faGraduationCap : faBriefcase} />}
              contentArrowStyle={{ borderRight: "7px solid #0f172a" }}
            >
              <div className="timeline-card__head">
                <div>
                  <h3>{item.title}</h3>
                  <h4>{item.subtitle}</h4>
                </div>
                <span className={`badge${isEdu ? ' badge--edu' : ''}`}>{item.location}</span>
              </div>
              <p>{item.description}</p>
              <div className="tag-row">
                {item.tags.map((tag) => (
                  <span className="chip" key={tag}>{tag}</span>
                ))}
              </div>
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </section>
  );
}

export default Timeline;