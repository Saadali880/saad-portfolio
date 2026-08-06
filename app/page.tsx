const projects = [
  {
    number: "01",
    category: "Machine Learning",
    title: "Credit Card Fraud Detection",
    description: "An end-to-end classification pipeline for highly imbalanced transaction data, including resampling and precision, recall and F1 evaluation.",
    stack: ["Python", "scikit-learn", "Pandas", "KNN", "Naive Bayes"],
    href: "https://github.com/Saadali880/credit-card-fraud-detection",
    status: "Model pipeline",
  },
  {
    number: "02",
    category: "Applied AI",
    title: "FlyRank ML Internship",
    description: "Hands-on machine learning notebooks, experiments and practical AI workflows developed during an active internship.",
    stack: ["Jupyter", "Python", "Machine Learning", "GenAI"],
    href: "https://github.com/Saadali880/flyrank-ml-internship-saad",
    status: "In progress",
  },
  {
    number: "03",
    category: "Database Engineering",
    title: "Hospital Management Database",
    description: "A SQL Server database with 15+ relational tables for patients, appointments, prescriptions, billing and transactional integrity.",
    stack: ["SQL Server", "T-SQL", "JOINs", "Stored Procedures"],
    href: "https://github.com/Saadali880/hospital-management-database",
    status: "15+ tables",
  },
  {
    number: "04",
    category: "Algorithms",
    title: "Huffman Compression",
    description: "Lossless text compression in C++ using a custom min-heap and Huffman tree with prefix-code validation and ratio analysis.",
    stack: ["C++", "DSA", "Min-Heap", "Huffman Tree"],
    href: "https://github.com/Saadali880/huffman-compression-algorithm",
    status: "From scratch",
  },
  {
    number: "05",
    category: "OOP · C++",
    title: "Hotel Management System",
    description: "A role-based hotel workflow for receptionists and guests, covering rooms, food ordering, billing and file handling.",
    stack: ["C++", "OOP", "File Handling", "Role Access"],
    href: "https://github.com/Saadali880?tab=repositories",
    status: "Console system",
  },
  {
    number: "06",
    category: "Programming Fundamentals",
    title: "Hospital Management System",
    description: "An interactive console application simulating patient records, appointments and core hospital operations with modular code.",
    stack: ["C++", "Structures", "Control Flow", "Modular Design"],
    href: "https://github.com/Saadali880?tab=repositories",
    status: "Core workflows",
  },
];

const skills = [
  { group: "Languages", items: ["Python", "C++", "SQL"] },
  { group: "AI / Machine Learning", items: ["Artificial Intelligence", "Machine Learning", "Prompt Engineering", "Data Analysis", "scikit-learn", "Pandas", "NumPy", "KNN", "Naive Bayes", "K-Means", "Regression"] },
  { group: "Computer Science", items: ["Data Structures & Algorithms", "Object-Oriented Programming", "Databases", "DBMS", "Problem Solving", "Computer Networks", "Operating Systems"] },
  { group: "Tools & Platforms", items: ["React Native", "Claude Code", "Git", "GitHub", "Jupyter Notebook", "VS Code", "SQL Server", "Microsoft Excel", "Microsoft Word", "Microsoft PowerPoint"] },
];

const credentials = [
  { title: "Foundations of AI and Machine Learning", issuer: "Microsoft", issued: "Aug 2026", credential: "7OS9EVHCUOBH", image: "/cert-foundations-ai-ml.jpg", href: "https://coursera.org/verify/7OS9EVHCUOBH" },
  { title: "Foundations of Machine Learning", issuer: "Coursera", issued: "Aug 2026", credential: "ZGKLRTOVNEXS", image: "/cert-foundations-ml.jpg", href: "https://coursera.org/verify/ZGKLRTOVNEXS" },
  { title: "Machine Learning with Python", issuer: "IBM", issued: "Aug 2026", credential: "PI30QJTECX6MW", image: "/cert-ml-python.jpg", href: "https://coursera.org/verify/PI30QJTECX6MW" },
  { title: "Exploratory Data Analysis for Machine Learning", issuer: "IBM", issued: "Aug 2026", credential: "43KGSAIKU2WW", image: "/cert-eda-ml.jpg", href: "https://coursera.org/verify/43KGSAIKU2WW" },
  { title: "Python 101 for Data Science", issuer: "IBM", issued: "Apr 2026", credential: "7f3c28efb7084f49acf4a89db6ddff73", image: "/cert-python-101.jpg", href: "https://courses.cognitiveclass.ai/certificates/7f3c28efb7084f49acf4a89db6ddff73" },
  { title: "Introduction to Agent Skills", issuer: "Anthropic", issued: "Aug 2026", credential: "LinkedIn verified", image: "/cert-agent-skills.jpg", href: "https://www.linkedin.com/in/saad-ali-3007a1333/details/certifications/" },
  { title: "Introduction to Subagents", issuer: "Anthropic", issued: "Aug 2026", credential: "LinkedIn verified", image: "/cert-subagents.jpg", href: "https://www.linkedin.com/in/saad-ali-3007a1333/details/certifications/" },
  { title: "Claude Platform 101", issuer: "Anthropic", issued: "Aug 2026", credential: "LinkedIn verified", image: "/cert-claude-platform.jpg", href: "https://www.linkedin.com/in/saad-ali-3007a1333/details/certifications/" },
  { title: "Claude Code 101", issuer: "Anthropic", issued: "Aug 2026", credential: "LinkedIn verified", image: "/cert-claude-code-101.jpg", href: "https://www.linkedin.com/in/saad-ali-3007a1333/details/certifications/" },
  { title: "Claude Code in Action", issuer: "Anthropic", issued: "Aug 2026", credential: "LinkedIn verified", image: "/cert-claude-code-action.jpg", href: "https://www.linkedin.com/in/saad-ali-3007a1333/details/certifications/" },
];

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

export default function Home() {
  return (
    <main id="top">
      <div className="ambient" aria-hidden="true">
        <i className="spark s1" /><i className="spark s2" /><i className="spark s3" />
        <i className="spark s4" /><i className="spark s5" /><i className="spark s6" />
      </div>

      <header className="site-header shell">
        <a className="brand" href="#top" aria-label="Saad Ali home">
          <span className="brand-chip">⌘</span><strong>Saad Ali</strong><em>Portfolio</em>
        </a>
        <nav aria-label="Primary navigation">
          <a href="#about">About</a><a href="#experience">Experience</a><a href="#education">Education</a><a href="#skills">Skills</a>
          <a href="#projects">Projects</a><a href="#certificates">Certificates</a><a href="#contact">Contact</a>
        </nav>
        <a className="header-cta" href="mailto:saadali45.official@gmail.com">Get in Touch</a>
      </header>

      <section className="hero shell">
        <div className="terminal reveal">
          <span className="traffic red" /><span className="traffic yellow" /><span className="traffic green" />
          <code><b>›_ SYS_LOG:</b> Building intelligent systems with data, code and curiosity...</code>
        </div>
        <div className="role-pill reveal delay-1">✦ Computer Science · AI / ML · Software</div>
        <h1 className="reveal delay-2">Hi, I&apos;m <span>Saad Ali</span></h1>
        <p className="hero-title reveal delay-2">Final-year CS Student at <strong>Lahore Garrison University</strong></p>
        <p className="hero-copy reveal delay-3">
          I engineer practical software across machine learning, data and algorithms—turning classroom fundamentals into working, measurable systems.
        </p>
        <div className="hero-actions reveal delay-4">
          <a className="button primary" href="#projects">View My Work <span>→</span></a>
          <a className="button secondary" href="#contact">Contact Me</a>
          <a className="icon-button" href="https://github.com/Saadali880" target="_blank" rel="noreferrer" aria-label="GitHub profile">GH</a>
          <a className="icon-button" href="https://www.linkedin.com/in/saad-ali-3007a1333" target="_blank" rel="noreferrer" aria-label="LinkedIn profile">in</a>
        </div>

        <div className="metric-grid" aria-label="Career highlights">
          <article><strong>06+</strong><span>Featured Projects</span><small>AI · DATA · ALGORITHMS</small></article>
          <article><strong>10</strong><span>Credentials</span><small>LINKEDIN VERIFIED</small></article>
          <article><strong>01</strong><span>Active Internship</span><small>APPLIED MACHINE LEARNING</small></article>
          <article><strong>03+</strong><span>Core Domains</span><small>AI · SOFTWARE · DATA</small></article>
        </div>
      </section>

      <section className="section shell" id="about">
        <div className="section-heading">
          <p>01 / ABOUT</p><h2>Curious by nature.<br /><span>Builder by practice.</span></h2>
        </div>
        <div className="about-layout">
          <div className="about-copy">
            <p className="lead">I build things to understand them—from fraud detection models and compression algorithms to role-based management systems.</p>
            <p>My academic journey has taken me from writing C++ console applications to training ML classifiers and exploring distributed computing. I care about clear logic, useful outcomes and continuous improvement.</p>
            <div className="availability"><i /> Open to internships · Lahore / Remote</div>
          </div>
          <div className="principle-grid">
            <article><b>01</b><h3>Problem first</h3><p>Understand the user, data and constraints before choosing tools.</p></article>
            <article><b>02</b><h3>Build to learn</h3><p>Turn concepts into systems that can be tested, measured and improved.</p></article>
            <article><b>03</b><h3>Keep it clear</h3><p>Readable code, honest evaluation and thoughtful documentation.</p></article>
          </div>
        </div>
      </section>

      <section className="section shell" id="experience">
        <div className="section-heading split">
          <div><p>02 / EXPERIENCE</p><h2>Applied learning at <span>FlyRank.</span></h2></div>
          <p className="section-note">Turning machine-learning concepts into practical notebooks, experiments and AI workflows in a professional environment.</p>
        </div>
        <div className="experience-card">
          <div className="experience-date">2026 — Present</div>
          <div className="company-mark">FR</div>
          <div className="experience-copy"><small>MACHINE LEARNING INTERNSHIP</small><h3>Machine Learning Intern</h3><h4>FlyRank AI · Remote</h4><p>Developing practical machine-learning workflows, exploratory notebooks and model experiments while building skills in prompt engineering, Claude Code and agentic AI systems.</p><div><span>Machine Learning</span><span>Python</span><span>Data Analysis</span><span>Prompt Engineering</span><span>AI Agents</span></div></div>
        </div>
      </section>

      <section className="section education-section" id="education">
        <div className="shell">
          <div className="section-heading split">
            <div><p>03 / EDUCATION</p><h2>Strong foundations.<br /><span>Continuous growth.</span></h2></div>
            <p className="section-note">Formal computer-science education supported by focused, hands-on technical learning.</p>
          </div>
          <div className="education-grid">
            <article><div className="education-year">2023 — PRESENT</div><div className="education-icon">LGU</div><div><small>BACHELOR&apos;S DEGREE</small><h3>BS Computer Science</h3><h4>Lahore Garrison University</h4><p>Algorithms, databases, computer networks, operating systems, digital image processing and applied machine learning.</p></div></article>
            <article><div className="education-year">2021 — 2023</div><div className="education-icon">PGC</div><div><small>INTERMEDIATE</small><h3>Intermediate in Computer Science</h3><h4>Punjab Group of Colleges</h4><p>Programming, mathematics and foundational computing concepts.</p></div></article>
          </div>
        </div>
      </section>

      <section className="section skills-section" id="skills">
        <div className="shell">
          <div className="section-heading"><p>04 / CAPABILITIES</p><h2>Verified skills for<br /><span>real-world problems.</span></h2></div>
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <article key={skill.group}><div className="skill-index">0{index + 1}</div><h3>{skill.group}</h3><div>{skill.items.map(item => <span key={item}>{item}</span>)}</div></article>
            ))}
          </div>
        </div>
      </section>

      <section className="section shell" id="projects">
        <div className="section-heading split">
          <div><p>05 / SELECTED PROJECTS</p><h2>Proof over <span>promises.</span></h2></div>
          <p className="section-note">Six projects that show how I reason, build and learn—from messy data to clean systems.</p>
        </div>
        <div className="project-grid">
          {projects.map((project) => (
            <a className="project-card" key={project.title} href={project.href} target="_blank" rel="noreferrer">
              <div className="project-top"><span>{project.number}</span><em>{project.category}</em><Arrow /></div>
              <div className="project-art" aria-hidden="true"><i /><i /><i /><b>{project.number}</b></div>
              <div className="project-content"><small>{project.status}</small><h3>{project.title}</h3><p>{project.description}</p><div>{project.stack.map(item => <span key={item}>{item}</span>)}</div></div>
            </a>
          ))}
        </div>
        <a className="text-link" href="https://github.com/Saadali880?tab=repositories" target="_blank" rel="noreferrer">Explore all repositories on GitHub <Arrow /></a>
      </section>

      <section className="section certificate-section" id="certificates">
        <div className="shell">
          <div className="section-heading split">
            <div><p>06 / LICENSES & CERTIFICATES</p><h2>Verified credentials.<br /><span>Visible progress.</span></h2></div>
            <a className="text-link" href="https://www.linkedin.com/in/saad-ali-3007a1333/details/certifications/" target="_blank" rel="noreferrer">View verified credentials <Arrow /></a>
          </div>
          <div className="credential-grid">
            {credentials.map(item => (
              <a className="credential-card" key={item.title} href={item.href} target="_blank" rel="noreferrer">
                <div className="certificate-image"><img src={item.image} alt={`${item.title} certificate thumbnail`} /></div>
                <div className="certificate-copy"><small>{item.issued}</small><h3>{item.title}</h3><p>{item.issuer}</p><span>Credential: {item.credential}</span></div>
                <div className="verified-mark">✓<em>VERIFIED</em></div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="shell contact-inner">
          <p>07 / LET&apos;S CONNECT</p>
          <h2>Have an internship, project<br />or interesting problem?</h2>
          <p className="contact-copy">I&apos;m ready to contribute, learn fast and build something useful with a strong engineering team.</p>
          <a className="contact-email" href="mailto:saadali45.official@gmail.com">saadali45.official@gmail.com <Arrow /></a>
          <div className="social-row"><a href="https://github.com/Saadali880" target="_blank" rel="noreferrer">GitHub <Arrow /></a><a href="https://www.linkedin.com/in/saad-ali-3007a1333" target="_blank" rel="noreferrer">LinkedIn <Arrow /></a></div>
        </div>
      </section>

      <footer className="footer shell"><span>© 2026 Saad Ali</span><span>Designed & built with curiosity.</span><a href="#top">Back to top ↑</a></footer>
    </main>
  );
}
