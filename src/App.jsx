import React from 'react';
import { useState } from 'react';
import ParticleScene from "./ParticleScene";
import Reveal from "./Reveal";
import TypingText from "./TypingText";


const skills = [
  { label: 'Data & Analytics', items: ['Python', 'SQL', 'Pandas', 'NumPy', 'Power BI', 'EDA'] },
  { label: 'AI & Machine Learning', items: ['PyTorch', 'TensorFlow', 'LangChain', 'LLMs', 'YOLO'] },
  { label: 'Development & Tools', items: ['Streamlit', 'Django', 'React', 'PostgreSQL', 'Git', 'Docker', 'AWS'] },
];

const projects = [
  {
    number: '01',
    type: 'GENERATIVE AI · DATA ANALYTICS',
    title: 'AI Data Analyst Chatbot',
    liveUrl: 'https://ai-data-analyst-vbxursw8daupwmytt9ddz6.streamlit.app/',
    description: 'A conversational analytics assistant designed to help users explore datasets and get insights through natural-language questions.',
    stack: ['Python', 'Streamlit', 'LangChain', 'Pandas', 'nemotron 3 ultra'],
    mark: '✳',
  },
  {
    number: '02',
    type: 'FULL-STACK · SAAS',
    title: 'Gymnastics SaaS Application',
    description: 'A full-stack application concept with backend APIs, structured data storage, and payment integration for a gymnastics-focused platform.',
    stack: ['Django', 'React', 'PostgreSQL', 'REST APIs', 'AWS', 'Docker'],
    mark: '⌘',
  },
  {
    number: '03',
    type: 'COMPUTER VISION · DEEP LEARNING',
    title: 'Automated Defect Detection',
    description: 'A computer-vision project using object detection to identify defects, with analysis and visualization of model results.',
    stack: ['PyTorch', 'YOLO', 'NumPy', 'Matplotlib', 'Django'],
    mark: '◎',
  },
];

const navItems = [
  ['About', '#about'],
  ['Skills', '#skills'],
  ['Projects', '#projects'],
  ['Experience', '#experience'],
  ['Contact', '#contact'],
];

function ArrowUpRight() {
  return <span aria-hidden="true" className="arrow">↗</span>;
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />

      <header className="topbar">
        <a className="brand" href="#home" aria-label="Saqib home">
          <span className="brand-mark">S<span>.</span></span>
          <span className="brand-name">SAQIB<span className="brand-slash">/</span>PORTFOLIO</span>
        </a>
        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? 'CLOSE −' : 'MENU +'}
        </button>
        <nav className={menuOpen ? 'nav-links nav-open' : 'nav-links'}>
          {navItems.map(([label, href]) => (
            <a key={label} href={href} onClick={closeMenu}>{label}</a>
          ))}
          <a className="nav-cta" href="#contact" onClick={closeMenu}>Let’s talk <ArrowUpRight /></a>
        </nav>
      </header>

      <main>
        <section className="hero section-wrap" id="home">
          <ParticleScene />
          <div className="hero-copy">
            <div className="eyebrow"><span className="status-dot" /> OPEN TO OPPORTUNITIES <span className="eyebrow-line" /></div>
            <h1>Turning data<br />into <span className="gradient-text">direction.</span></h1>
            <p className="hero-subtitle">
              Hey, I’m <strong>Mohammed Saqib</strong> — an AI &amp; ML graduate interested in data science,
              machine learning, and building useful AI-powered products.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects"> Explore my work <ArrowUpRight /></a>
              <a className="button button-ghost"href="/Saqib-Resume.pdf"download="Saqib-Resume.pdf">
               Download Resume ↓</a>
              <a className="button button-ghost" href="#contact">Get in touch</a>
            </div>
            <div className="hero-meta">
              <div><span className="meta-label">FOCUS</span><span>AI · Data · Analytics</span></div>
              <div><span className="meta-label">BASED IN</span><span>Bengaluru, India</span></div>
            </div>
          </div>

         <div className="hero-visual">
  <img
    src="/cyber-background.png"
    alt="Mohammed Saqib — AI and Data Analytics Portfolio"
    className="cyber-background-image"
  />
</div>
          <a className="scroll-cue" href="#about"><span /> SCROLL TO EXPLORE</a>
        </section>

        <section className="ticker" aria-label="Areas of interest">
          <div className="ticker-track">
            {['DATA SCIENCE', 'MACHINE LEARNING', 'GENERATIVE AI', 'DATA VISUALIZATION', 'PYTHON', 'DATA SCIENCE', 'MACHINE LEARNING', 'GENERATIVE AI'].map((item, i) => (
              <span key={`${item}-${i}`}>{item}<b>✳</b></span>
            ))}
          </div>
        </section>

        <section className="section-wrap content-section about-section" id="about">
          <Reveal>
          <div className="section-heading">
            <span className="section-index">01 / ABOUT</span>
            <h2>Curious by nature.<br /><span className="muted-heading">Analytical by design.</span></h2>
          </div>
          <div className="about-grid">
            <div className="about-statement">
              <span className="quote-mark">“</span>
              <p>I enjoy connecting the dots between <em>data, technology, and real-world problems.</em></p>
            </div>
            <div className="about-details">
              <p>I’m an Artificial Intelligence and Machine Learning graduate who enjoys exploring data, building practical machine-learning solutions, and turning complex information into something people can use.</p>
              <p>Through my internship and academic projects, I’ve worked with Python-based analytics, LLM-powered applications, computer vision, and full-stack development. I’m currently looking for opportunities where I can keep learning and contribute to meaningful products.</p>
              <div className="education-chip"><span className="chip-icon">✳</span><div><b>B.E. Artificial Intelligence &amp; Machine Learning</b><small>Sambhram Institute of Technology · Bengaluru</small></div></div>
            </div>
          </div>
          </Reveal>
        </section>

        <section className="section-wrap content-section skills-section" id="skills">
          <Reveal>
          <div className="section-heading row-heading">
            <div><span className="section-index">02 / TOOLKIT</span><h2>Tools I use to<br /><span className="muted-heading">make things happen.</span></h2></div>
            <p className="heading-note">A growing toolkit across analytics, AI, and software development.</p>
          </div>
          <div className="skills-grid">
            {skills.map((group, i) => (
              <article className="skill-card" key={group.label}>
                <div className="skill-card-top"><span>0{i + 1}</span><span className="skill-symbol">{['⌁', '✳', '⌘'][i]}</span></div>
                <h3>{group.label}</h3>
                <div className="tag-list">{group.items.map(item => <span className="tag" key={item}>{item}</span>)}</div>
              </article>
            ))}
          </div>
          </Reveal>
        </section>

        <section className="section-wrap content-section projects-section" id="projects">
          <Reveal>
          <div className="section-heading row-heading">
            <div><span className="section-index">03 / SELECTED WORK</span><h2>Built to explore.<br /><span className="muted-heading">Made to solve.</span></h2></div>
            <p className="heading-note">A selection of academic and internship work across AI, analytics, and application development.</p>
          </div>
          <div className="project-list">
            {projects.map(project => (
              <article className="project-card" key={project.number}>
                <div className="project-number">{project.number}</div>
                <div className="project-art"><span>{project.mark}</span><div className="art-ring ring-one" /><div className="art-ring ring-two" /><div className="art-cross">+</div></div>
                <div className="project-info">
                  <span className="project-type">{project.type}</span>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="tag-list">
  {project.stack.map(item => (
    <span className="tag" key={item}>{item}</span>
  ))}
</div>

{project.liveUrl && (
  <a
    href={project.liveUrl}
    target="_blank"
    rel="noopener noreferrer"
    style={{
      display: 'inline-block',
      marginTop: '16px',
      padding: '10px 16px',
      backgroundColor: '#72e4e9',
      color: '#101426',
      textDecoration: 'none',
      borderRadius: '6px',
      fontWeight: 700,
      position: 'relative',
      zIndex: 10,
    }}
  >
    View Live Demo ↗
  </a>
)}
                </div>
                <span className="project-arrow" aria-hidden="true">↗</span>
              </article>
            ))}
          </div>
          </Reveal>
        </section>

        <section className="section-wrap content-section experience-section" id="experience">
          <Reveal>
          <div className="section-heading">
            <span className="section-index">04 / EXPERIENCE</span>
            <h2>Learning by<br /><span className="muted-heading">building in the real world.</span></h2>
          </div>
          <div className="timeline">
            <div className="timeline-marker"><span /></div>
            <div className="timeline-content">
              <div className="timeline-meta"><span>DATA SCIENCE INTERN</span><span className="timeline-current">INTERNSHIP</span></div>
              <h3>Take it smart (OPC) Private Limited</h3>
              <p className="timeline-summary">Contributed to an AI Data Analyst Chatbot built to make dataset exploration more accessible through conversational interaction.</p>
              <ul>
                <li>Worked with Python and Pandas for data handling and analysis workflows.</li>
                <li>Used Streamlit to build the application interface and LangChain to support LLM-based interactions.</li>
                <li>Explored natural-language interaction as a way to make data insights easier to access.</li>
              </ul>
              <div className="tag-list"><span className="tag">Python</span><span className="tag">Pandas</span><span className="tag">Streamlit</span><span className="tag">LangChain</span><span className="tag">LLMs</span></div>
            </div>
          </div>
          </Reveal>
        </section>

        <section className="contact-section" id="contact">
          <div className="section-wrap contact-inner">
            <span className="section-index">05 / LET'S CONNECT</span>
            <div className="contact-layout">
              <div><h2>Have a problem<br />worth <span className="gradient-text">solving?</span></h2><p>I’m open to entry-level opportunities in data analytics, data science, and AI/ML. Let’s connect.</p></div>
              <div className="contact-actions">
<a
  className="contact-link"
  href="https://mail.google.com/mail/?view=cm&fs=1&to=saqibsaakii@gmail.com"
  target="_blank"
  rel="noreferrer"
>
  <span>
    EMAIL ME
    <small>saqibsaakii@gmail.com</small>
  </span>
  <ArrowUpRight />
</a>
                <a className="contact-link" href="https://www.linkedin.com/in/saqib-kolkar-3222a6379/" target="_blank" rel="noreferrer"><span>LINKEDIN <small>https://www.linkedin.com/in/saqib-kolkar-3222a6379/</small></span><ArrowUpRight /></a>
                <a className="contact-link" href="https://github.com/saqib-ai18" target="_blank" rel="noreferrer"><span>GITHUB <small>https://github.com/saqib-ai18</small></span><ArrowUpRight /></a>
              </div>
            </div>
            <footer className="footer"><a className="brand" href="#home"><span className="brand-mark">S<span>.</span></span><span className="brand-name">SAQIB<span className="brand-slash">/</span>PORTFOLIO</span></a><span>DESIGNED WITH CURIOSITY · © {new Date().getFullYear()} MOHAMMED SAQIB</span><a href="#home" className="back-top">BACK TO TOP ↑</a></footer>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
