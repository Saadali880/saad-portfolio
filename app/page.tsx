const projects = [
  {
    index: "01",
    title: "Credit Card Fraud Detection",
    type: "Machine Learning",
    description:
      "An end-to-end classification pipeline built for highly imbalanced transaction data, with exploratory analysis, resampling and model evaluation.",
    stack: ["Python", "scikit-learn", "Pandas", "KNN", "Naive Bayes"],
    outcome: "Precision · Recall · F1",
    href: "https://github.com/Saadali880/credit-card-fraud-detection",
    tone: "blue",
  },
  {
    index: "02",
    title: "FlyRank ML Internship",
    type: "Applied AI",
    description:
      "A growing collection of hands-on machine learning notebooks and experiments completed during an active AI internship.",
    stack: ["Jupyter", "Python", "Machine Learning", "GenAI"],
    outcome: "Learning in public",
    href: "https://github.com/Saadali880/flyrank-ml-internship-saad",
    tone: "lime",
  },
  {
    index: "03",
    title: "Hospital Management Database",
    type: "Data Engineering",
    description:
      "A Microsoft SQL Server system with 15 relational tables covering patients, appointments, prescriptions, billing and transactional integrity.",
    stack: ["SQL Server", "T-SQL", "JOINs", "Stored Procedures"],
    outcome: "15-table schema",
    href: "https://github.com/Saadali880/hospital-management-database",
    tone: "violet",
  },
  {
    index: "04",
    title: "Huffman Compression",
    type: "Algorithms",
    description:
      "Lossless text compression in C++ using a custom min-heap and Huffman tree, with measurable compression ratios and prefix-code validation.",
    stack: ["C++", "Data Structures", "Min-Heap", "Huffman Tree"],
    outcome: "Custom implementation",
    href: "https://github.com/Saadali880/huffman-compression-algorithm",
    tone: "orange",
  },
];

const toolkit = [
  "Python",
  "C++",
  "SQL",
  "React Native",
  "scikit-learn",
  "Pandas",
  "NumPy",
  "Jupyter",
  "Git",
  "OOP",
  "DSA",
  "Machine Learning",
];

function ArrowIcon() {
  return <span aria-hidden="true">↗</span>;
}

export default function Home() {
  return (
    <main>
      <nav className="nav shell" aria-label="Primary navigation">
        <a className="brand" href="#top" aria-label="Saad Ali, home">
          SA<span>•</span>
        </a>
        <div className="nav-links">
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#journey">Journey</a>
        </div>
        <a className="nav-cta" href="mailto:saadali45.official@gmail.com">
          Let&apos;s talk <ArrowIcon />
        </a>
      </nav>

      <section className="hero shell" id="top">
        <div className="hero-status reveal">
          <span className="status-dot" />
          Open to internships · Lahore / Remote
        </div>

        <div className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow reveal delay-1">Computer Science · AI/ML · Software</p>
            <h1 className="reveal delay-2">
              I turn <span>curiosity</span>
              <br /> into working systems.
            </h1>
            <p className="hero-intro reveal delay-3">
              I&apos;m <strong>Saad Ali</strong> — a final-year CS student and machine learning intern
              building practical products across AI, mobile, algorithms and data.
            </p>
            <div className="hero-actions reveal delay-4">
              <a className="button button-primary" href="#work">
                Explore selected work <span aria-hidden="true">↓</span>
              </a>
              <a
                className="button button-secondary"
                href="https://www.linkedin.com/in/saad-ali-3007a1333"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn <ArrowIcon />
              </a>
            </div>
          </div>

          <aside className="signal-card reveal delay-3" aria-label="Current focus">
            <div className="signal-top">
              <span>Currently exploring</span>
              <span className="signal-pulse" />
            </div>
            <div className="signal-orbit" aria-hidden="true">
              <span className="orbit orbit-one" />
              <span className="orbit orbit-two" />
              <span className="orbit-core">AI</span>
              <i className="node node-one" />
              <i className="node node-two" />
              <i className="node node-three" />
            </div>
            <h2>Intelligent software that solves real problems.</h2>
            <div className="signal-tags">
              <span>ML systems</span>
              <span>Mobile apps</span>
              <span>Data</span>
            </div>
          </aside>
        </div>

        <div className="hero-stats" aria-label="Profile highlights">
          <div><strong>08</strong><span>Public repositories</span></div>
          <div><strong>11</strong><span>Certifications</span></div>
          <div><strong>63</strong><span>GitHub contributions</span></div>
          <div><strong>897</strong><span>LinkedIn followers</span></div>
        </div>
      </section>

      <section className="work-section shell" id="work">
        <div className="section-head">
          <div>
            <p className="section-kicker">Selected work / 2025—26</p>
            <h2>Proof over promises.</h2>
          </div>
          <p>Projects that show how I think, build and learn — from messy data to clean systems.</p>
        </div>

        <div className="project-grid">
          {projects.map((project) => (
            <a
              className={`project-card ${project.tone}`}
              href={project.href}
              target="_blank"
              rel="noreferrer"
              key={project.title}
            >
              <div className="project-meta">
                <span>{project.index}</span>
                <span>{project.type}</span>
                <span className="project-arrow"><ArrowIcon /></span>
              </div>
              <div className="project-visual" aria-hidden="true">
                <span className="visual-grid" />
                <span className="visual-line line-a" />
                <span className="visual-line line-b" />
                <span className="visual-line line-c" />
                <span className="visual-dot dot-a" />
                <span className="visual-dot dot-b" />
                <span className="visual-dot dot-c" />
              </div>
              <div className="project-body">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-outcome">{project.outcome}</div>
                <div className="project-stack">
                  {project.stack.map((item) => <span key={item}>{item}</span>)}
                </div>
              </div>
            </a>
          ))}
        </div>

        <a
          className="all-work"
          href="https://github.com/Saadali880?tab=repositories"
          target="_blank"
          rel="noreferrer"
        >
          View all 8 repositories on GitHub <ArrowIcon />
        </a>
      </section>

      <section className="about-section" id="about">
        <div className="shell about-grid">
          <div className="about-title">
            <p className="section-kicker">About / How I work</p>
            <h2>Grounded in fundamentals. Biased toward building.</h2>
          </div>
          <div className="about-copy">
            <p className="about-lead">
              I build things to understand them — whether that means training a fraud model,
              designing a relational database or implementing compression from scratch.
            </p>
            <p>
              My computer science degree gives me the theory; projects and an active FlyRank
              AI internship turn that theory into practical engineering judgment. I&apos;m looking
              for a team where I can contribute early, learn fast and grow around experienced builders.
            </p>
            <div className="principles">
              <div><span>01</span><strong>Start with the problem</strong><p>Understand the user and constraints before choosing the tool.</p></div>
              <div><span>02</span><strong>Make it measurable</strong><p>Use clear outcomes, evaluation and honest trade-offs.</p></div>
              <div><span>03</span><strong>Keep learning visible</strong><p>Document the process, share the code and improve in public.</p></div>
            </div>
          </div>
        </div>
      </section>

      <section className="toolkit-section shell" aria-labelledby="toolkit-title">
        <div className="section-head compact">
          <div>
            <p className="section-kicker">Toolkit</p>
            <h2 id="toolkit-title">Technologies I work with.</h2>
          </div>
        </div>
        <div className="tool-cloud">
          {toolkit.map((tool, index) => (
            <span className={index < 4 ? "featured" : ""} key={tool}>{tool}</span>
          ))}
        </div>
      </section>

      <section className="journey-section shell" id="journey">
        <div className="section-head">
          <div>
            <p className="section-kicker">Journey</p>
            <h2>Learning with momentum.</h2>
          </div>
          <p>Formal education, practical experience and focused industry learning.</p>
        </div>

        <div className="timeline">
          <article>
            <div className="timeline-date">2026 — Present</div>
            <div className="timeline-marker"><span /></div>
            <div className="timeline-content">
              <p className="timeline-type">Experience</p>
              <h3>Machine Learning Intern</h3>
              <h4>FlyRank</h4>
              <p>Building hands-on ML and AI workflows while expanding into Claude-powered applications, agent skills and practical generative AI.</p>
            </div>
          </article>
          <article>
            <div className="timeline-date">Nov 2023 — Present</div>
            <div className="timeline-marker"><span /></div>
            <div className="timeline-content">
              <p className="timeline-type">Education</p>
              <h3>Bachelor of Science in Computer Science</h3>
              <h4>Lahore Garrison University</h4>
              <p>Final-year student focused on algorithms, software engineering, databases, mobile development and applied machine learning.</p>
            </div>
          </article>
          <article>
            <div className="timeline-date">Aug 2026</div>
            <div className="timeline-marker"><span /></div>
            <div className="timeline-content">
              <p className="timeline-type">Certification</p>
              <h3>Machine Learning with Python</h3>
              <h4>IBM · Coursera</h4>
              <p>Regression, classification, clustering and practical model evaluation with Python.</p>
            </div>
          </article>
          <article>
            <div className="timeline-date">2021 — 2023</div>
            <div className="timeline-marker"><span /></div>
            <div className="timeline-content">
              <p className="timeline-type">Education</p>
              <h3>Intermediate in Computer Science</h3>
              <h4>Punjab Group of Colleges</h4>
            </div>
          </article>
        </div>
      </section>

      <section className="contact-section">
        <div className="shell contact-inner">
          <p className="section-kicker">Let&apos;s build something useful</p>
          <h2>Have an internship, project or interesting problem?</h2>
          <a href="mailto:saadali45.official@gmail.com">
            saadali45.official@gmail.com <ArrowIcon />
          </a>
          <div className="contact-links">
            <a href="https://github.com/Saadali880" target="_blank" rel="noreferrer">GitHub <ArrowIcon /></a>
            <a href="https://www.linkedin.com/in/saad-ali-3007a1333" target="_blank" rel="noreferrer">LinkedIn <ArrowIcon /></a>
          </div>
        </div>
      </section>

      <footer className="footer shell">
        <span>© 2026 Saad Ali</span>
        <span>Designed to be useful, built to keep evolving.</span>
        <a href="#top">Back to top ↑</a>
      </footer>
    </main>
  );
}
