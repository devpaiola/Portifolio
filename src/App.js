import React, { useState } from 'react';
import './App.css';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const handleNavClick = (section) => {
    setActiveSection(section);
    setIsMenuOpen(false);
  };

  const projects = [
    {
      name: 'WorkBase AI',
      url: 'https://workbaseai.app/',
      description: 'IA com contexto específico da empresa WorkMonitor. Solução inteligente para automação e análise de dados empresariais.',
      tech: ['Laravel', 'PostgreSQL', 'React', 'Digital Ocean'],
      highlight: true
    },
    {
      name: 'FAQ WorkBase AI',
      url: 'https://faq.workbaseai.app/',
      description: 'FAQ inteligente da WorkMonitor com respostas automatizadas e contextualmente relevantes.',
      tech: ['Laravel', 'PostgreSQL', 'React', 'Digital Ocean'],
      highlight: true
    },
    {
      name: 'CampFlow',
      url: 'https://campflow-gules.vercel.app/',
      description: 'Plataforma de automação de campanhas para agências, facilitando gestão e otimização de processos.',
      tech: ['React', 'Python', 'Vercel'],
      highlight: false
    },
    {
      name: 'Analizify',
      url: 'https://devpaiola.tech/analizify',
      description: 'Plataforma que centraliza feedbacks e utiliza IA para análise, melhorando o tempo de vida útil com clientes.',
      tech: ['Python', 'AI/ML', 'Data Analysis'],
      highlight: false
    },
    {
      name: 'OboardAI',
      url: 'https://devpaiola.tech/oboardai',
      description: 'Middleware entre empresas de marketing e clientes, integrando dados de Instagram, Facebook, Google Ads e outras plataformas.',
      tech: ['API Integration', 'Backend', 'OAuth'],
      highlight: false
    }
  ];

  const skills = {
    backend: ['Laravel', 'Python', 'PHP', 'Node.js', 'API REST', 'Microservices'],
    databases: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis'],
    devops: ['Digital Ocean', 'Docker', 'CI/CD', 'Linux'],
    frontend: ['React', 'JavaScript', 'HTML/CSS'],
    tools: ['Git', 'Postman', 'Vercel', 'OAuth', 'AI/ML Integration']
  };

  return (
    <div className="App">
      {/* Header */}
      <header className="header">
        <div className="container">
          <div className="logo">
            <span className="bracket">{'<'}</span>
            devpaiola
            <span className="bracket">{'/>'}</span>
          </div>
          <button
            className={`menu-toggle ${isMenuOpen ? 'open' : ''}`}
            onClick={toggleMenu}
            aria-expanded={isMenuOpen}
            aria-controls="primary-navigation"
            aria-label="Alternar menu"
            type="button"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
          <nav
            id="primary-navigation"
            className={`nav-links ${isMenuOpen ? 'open' : ''}`}
            aria-label="Navegação principal"
          >
            <a
              href="#home"
              className={activeSection === 'home' ? 'active' : ''}
              onClick={() => handleNavClick('home')}
              aria-current={activeSection === 'home' ? 'page' : undefined}
            >
              Início
            </a>
            <a
              href="#projects"
              className={activeSection === 'projects' ? 'active' : ''}
              onClick={() => handleNavClick('projects')}
              aria-current={activeSection === 'projects' ? 'page' : undefined}
            >
              Projetos
            </a>
            <a
              href="#skills"
              className={activeSection === 'skills' ? 'active' : ''}
              onClick={() => handleNavClick('skills')}
              aria-current={activeSection === 'skills' ? 'page' : undefined}
            >
              Skills
            </a>
            <a
              href="#contact"
              className={activeSection === 'contact' ? 'active' : ''}
              onClick={() => handleNavClick('contact')}
              aria-current={activeSection === 'contact' ? 'page' : undefined}
            >
              Contato
            </a>
          </nav>
        </div>
      </header>

      <main className="main-content">
        {/* Hero Section */}
        <section className="hero" id="home">
          <div className="container">
            <div className="hero-content">
              <div className="status">
                <span className="status-indicator"></span>
                Disponível para projetos
              </div>
              <h1>
                Backend Developer<br />
                <span className="gradient-text">Especializado em APIs & Arquitetura</span>
              </h1>
              <p className="hero-description">
                Sou DevPaiola, desenvolvedor backend focado em construir sistemas escaláveis, APIs robustas e
                soluções inteligentes com integração de IA. Experiência em Laravel, Python,
                PostgreSQL e infraestrutura cloud.
              </p>
              <div className="hero-buttons">
                <a href="#projects" className="btn btn-primary">Ver Projetos</a>
                <a href="#contact" className="btn btn-secondary">Entrar em Contato</a>
              </div>
            </div>
            <div className="hero-visual">
              <div className="code-window">
                <div className="window-header">
                  <span className="dot red"></span>
                  <span className="dot yellow"></span>
                  <span className="dot green"></span>
                </div>
                <pre className="code-content">
{`// backend magic 
class Developer {
  constructor() {
    this.name = "Devpaiola";
    this.focus = "APIs & Architecture";
    this.stack = [
      "Laravel", "Python", 
      "PostgreSQL", "React"
    ];
  }

  buildSolutions() {
    return "Scalable & Robust";
  }
}`}
                </pre>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="projects" id="projects">
          <div className="container">
            <h2 className="section-title">
              <span className="title-number">01.</span> Projetos em Destaque
            </h2>
            <div className="projects-grid">
              {projects.map((project, index) => (
                <div key={index} className={`project-card ${project.highlight ? 'featured' : ''}`}>
                  <div className="project-header">
                    <h3>{project.name}</h3>
                    {project.url !== '#' && (
                      <a href={project.url} target="_blank" rel="noopener noreferrer" className="project-link">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                          <polyline points="15 3 21 3 21 9"></polyline>
                          <line x1="10" y1="14" x2="21" y2="3"></line>
                        </svg>
                      </a>
                    )}
                  </div>
                  <p className="project-description">{project.description}</p>
                  <div className="project-tech">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="skills" id="skills">
          <div className="container">
            <h2 className="section-title">
              <span className="title-number">02.</span> Stack & Tecnologias
            </h2>
            <div className="skills-grid">
              <div className="skill-category">
                <h3>
                  <span className="icon"></span> Backend
                </h3>
                <div className="skill-tags">
                  {skills.backend.map((skill, i) => (
                    <span key={i} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </div>
              <div className="skill-category">
                <h3>
                  <span className="icon"></span> Databases
                </h3>
                <div className="skill-tags">
                  {skills.databases.map((skill, i) => (
                    <span key={i} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </div>
              <div className="skill-category">
                <h3>
                  <span className="icon"></span> DevOps & Cloud
                </h3>
                <div className="skill-tags">
                  {skills.devops.map((skill, i) => (
                    <span key={i} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </div>
              <div className="skill-category">
                <h3>
                  <span className="icon"></span> Frontend
                </h3>
                <div className="skill-tags">
                  {skills.frontend.map((skill, i) => (
                    <span key={i} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </div>
              <div className="skill-category">
                <h3>
                  <span className="icon"></span> Tools & Outros
                </h3>
                <div className="skill-tags">
                  {skills.tools.map((skill, i) => (
                    <span key={i} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="contact" id="contact">
          <div className="container">
            <h2 className="section-title">
              <span className="title-number">03.</span> Vamos Conversar?
            </h2>
            <div className="contact-content">
              <p className="contact-description">
                Estou sempre aberto a discutir novos projetos, ideias criativas ou oportunidades
                para fazer parte de suas soluções backend. Entre em contato!
              </p>
              <div className="contact-methods">
                <a href="mailto:devpaiola@gmail.com" className="contact-card">
                  <span className="contact-icon"></span>
                  <span className="contact-label">Email</span>
                </a>
                <a href="https://linkedin.com/in/devpaiola" target="_blank" rel="noopener noreferrer" className="contact-card">
                  <span className="contact-icon"></span>
                  <span className="contact-label">LinkedIn</span>
                </a>
                <a href="https://github.com/devpaiola" target="_blank" rel="noopener noreferrer" className="contact-card">
                  <span className="contact-icon"></span>
                  <span className="contact-label">GitHub</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>Desenvolvido com  por Backend Developer</p>
          <p className="footer-tech">React  2025</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
