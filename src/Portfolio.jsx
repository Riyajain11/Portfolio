import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  BriefcaseBusiness,
  Code2,
  GraduationCap,
  Mail,
  Menu,
  X,
} from "lucide-react";
import { projects } from "./data/projects";
import { skillGroups } from "./data/skills";
import "./Portfolio.css";

const navigation = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
];

const experience = {
  organization: "InspireLeap",
  role: "Web Developer Intern",
  dates: "September 2025 – October 2025",
};

const education = {
  degree: "B.Tech – Electronics & Communication Engineering",
  school: "Technocrats Institute of Technology",
  dates: "2023–2027",
  cgpa: "7.5 / 10",
};

const certifications = [
  {
    title: "MERN Stack Certification",
    url: "https://drive.google.com/file/d/1n-jVPeQKAWdCWuYdCMjjDUVcpyI3qD94/view",
  },
  {
    title: "InspireLeap Internship Completion Certificate",
    url: "https://drive.google.com/file/d/1V6eBv0uStBoz9HCDxnuEbkAS94tY5Rul/view",
  },
];

const emailAddress = "riyajain5210@gmail.com";
const githubProfileUrl = "https://github.com/Riyajain11";
const linkedinProfileUrl = "https://www.linkedin.com/in/riya-jain-b31558299";

const reveal = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: "easeOut" },
  },
};

function SectionLabel({ number, children }) {
  return (
    <div className="section-label">
      <span className="mono-label">{number}</span>
      <span>{children}</span>
    </div>
  );
}

function ExternalAction({ href, children, quiet = false, label }) {
  if (!href?.trim()) return null;

  return (
    <a
      className={`action-link ${quiet ? "action-link-quiet" : ""}`}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label ?? children}
    >
      {children}
      <ArrowUpRight size={15} aria-hidden="true" />
    </a>
  );
}

function ProjectActions({ project, includeApk = false }) {
  const hasActions = [
    project.liveUrl,
    project.githubUrl,
    includeApk ? project.apkUrl : "",
  ].some((url) => url?.trim());

  if (!hasActions) return null;

  return (
    <div className="project-actions" aria-label={`${project.title} links`}>
      <ExternalAction
        href={project.liveUrl}
        label={`Live Website for ${project.title}`}
      >
        Live Website
      </ExternalAction>
      <ExternalAction
        href={project.githubUrl}
        label={`GitHub for ${project.title}`}
      >
        GitHub
      </ExternalAction>
      {includeApk ? (
        <ExternalAction href={project.apkUrl} label="Download Aidly test APK">
          Download Test APK
        </ExternalAction>
      ) : null}
    </div>
  );
}
function ContactModal({ isOpen, onClose, emailAddress }) {
  const [status, setStatus] = useState("idle");

  if (!isOpen) return null;

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus("sending");

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch(
        `https://formsubmit.co/ajax/${emailAddress}`,
        {
          method: "POST",
          headers: {
            Accept: "application/json",
          },
          body: formData,
        }
      );

      if (!response.ok) {
        throw new Error("Form submission failed");
      }

      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  };

  return (
    <div
      className="contact-modal-backdrop"
      role="dialog"
      aria-modal="true"
      aria-labelledby="contact-modal-title"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <div className="contact-modal">
        <button
          className="contact-modal-close"
          type="button"
          onClick={onClose}
          aria-label="Close contact form"
        >
          <X size={20} aria-hidden="true" />
        </button>

        {status === "success" ? (
          <div className="contact-success">
            <p className="mono-label">MESSAGE SENT</p>
            <h2>Thanks for reaching out.</h2>
            <p>
              Your message has been sent successfully. I&apos;ll get back to
              you soon.
            </p>

            <button
              className="button button-light"
              type="button"
              onClick={onClose}
            >
              Close
            </button>
          </div>
        ) : (
          <>
            <p className="mono-label">GET IN TOUCH</p>

            <h2 id="contact-modal-title">Let&apos;s talk.</h2>

            <p className="contact-modal-intro">
              Have a project, opportunity, or question? Send me a message.
            </p>

            <form onSubmit={handleSubmit} className="contact-form">
              <input
                type="hidden"
                name="_subject"
                value="New Portfolio Contact"
              />

              <input
                type="hidden"
                name="_template"
                value="table"
              />

              <input
                type="text"
                name="_honey"
                tabIndex="-1"
                autoComplete="off"
                className="contact-honeypot"
              />

              <label>
                <span>Name</span>
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  required
                />
              </label>

              <label>
                <span>Email</span>
                <input
                  type="email"
                  name="email"
                  placeholder="your@email.com"
                  required
                />
              </label>

              <label>
                <span>Subject</span>
                <input
                  type="text"
                  name="subject"
                  placeholder="What would you like to discuss?"
                  required
                />
              </label>

              <label>
                <span>Message</span>
                <textarea
                  name="message"
                  placeholder="Tell me a little about it..."
                  rows="5"
                  required
                />
              </label>

              {status === "error" && (
                <p className="contact-form-error">
                  Something went wrong. Please try again.
                </p>
              )}

              <button
                className="button button-light contact-submit"
                type="submit"
                disabled={status === "sending"}
              >
                {status === "sending" ? "Sending..." : "Send message"}
                <ArrowUpRight size={15} aria-hidden="true" />
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}

function TechnologyList({ items }) {
  return (
    <ul className="technology-list">
      {items.map((technology) => (
        <li key={technology}>{technology}</li>
      ))}
    </ul>
  );
}

function AidlyCaseStudy({ project }) {
  return (
    <motion.article
      className="aidly-case"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.12 }}
      variants={reveal}
    >
      <div className="aidly-heading">
        <div className="project-heading-copy">
          <span className="project-number">{project.number}</span>
          <div>
            <h3>{project.title}</h3>
            <p className="project-subtitle">{project.category}</p>
          </div>
        </div>
      </div>

      <p className="aidly-summary">{project.summary}</p>

      <div className="aidly-platforms">
        <section className="aidly-platform" aria-labelledby="aidly-web-title">
          <p className="mono-label">WEB</p>
          <h4 id="aidly-web-title">MERN</h4>
          <TechnologyList items={project.webTechnologies} />
        </section>
        <section
          className="aidly-platform"
          aria-labelledby="aidly-mobile-title"
        >
          <div className="platform-heading-row">
            <div>
              <p className="mono-label">MOBILE</p>
              <h4 id="aidly-mobile-title">Flutter</h4>
            </div>
            <span className="development-status">
              <i className="status-dot" />
              {project.mobileStatus}
            </span>
          </div>
          <TechnologyList items={project.mobileTechnologies} />
        </section>
      </div>

      <div className="aidly-stack-row">
        <div>
          <p className="mono-label">FULL STACK</p>
          <TechnologyList items={project.technologies} />
        </div>
      </div>

      <div className="contribution-block">
        <div className="contribution-title">
          <p className="mono-label">MY CONTRIBUTION</p>
          <span>One platform, two interfaces.</span>
        </div>
        <div className="contribution-column">
          <h4>Web</h4>
          <ul>
            {project.webContribution.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="contribution-column">
          <h4>Mobile</h4>
          <p className="role-line">My role: Flutter frontend development</p>
          <ul>
            {project.mobileContribution.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
      <ProjectActions project={project} includeApk />
    </motion.article>
  );
}

function GreenPathProject({ project }) {
  return (
    <motion.article
      className="greenpath-project"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.16 }}
      variants={reveal}
    >
      <div className="project-editorial-heading">
        <div className="project-heading-copy">
          <span className="project-number">{project.number}</span>
          <div>
            <h3>{project.title}</h3>
            <p className="project-subtitle">{project.category}</p>
          </div>
        </div>
      </div>
      <p className="project-summary">{project.summary}</p>
      <div className="project-editorial-details">
        <div>
          <p className="mono-label">MARKETPLACE FEATURES</p>
          <ul className="feature-list">
            {project.features.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
        </div>
        <div className="greenpath-stack">
          <p className="mono-label">PRIMARY STACK</p>
          <TechnologyList items={project.technologies} />
          <p className="mono-label supporting-stack-label">
            SUPPORTING COMPONENT
          </p>
          <p className="supporting-description">
            {project.supportingDescription}
          </p>
          <TechnologyList items={project.supportingTechnologies} />
        </div>
      </div>
      <ProjectActions project={project} />
    </motion.article>
  );
}

function SalonGlowProject({ project }) {
  return (
    <motion.article
      className="salonglow-project"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.16 }}
      variants={reveal}
    >
      <div className="salon-copy">
        <div className="project-heading-copy">
          <span className="project-number">{project.number}</span>
          <div>
            <h3>{project.title}</h3>
            <p className="project-subtitle">{project.category}</p>
          </div>
        </div>
        <p className="project-summary">{project.summary}</p>
        <div className="project-editorial-details salon-editorial-details">
          <div>
            <p className="mono-label">FEATURES</p>
            <ul className="salon-feature-list">
              {project.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
          </div>
          <div>
            <p className="mono-label">STACK</p>
            <TechnologyList items={project.technologies} />
          </div>
        </div>
        <p className="internship-note">Built during my time at InspireLeap.</p>
        <ProjectActions project={project} />
      </div>
    </motion.article>
  );
}

function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
    const [aidly, greenPath, salonGlow] = projects;
    const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <div className="portfolio-shell">
      <header className="site-header">
        <nav className="nav content-width" aria-label="Main navigation">
          <a className="brand" href="#top" aria-label="Riya Jain home">
            <span className="brand-mark">RJ</span>
            <span>Riya Jain</span>
          </a>
          <div className={`nav-links ${menuOpen ? "is-open" : ""}`}>
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              className="nav-contact"
              href="#contact"
              onClick={() => setMenuOpen(false)}
            >
              Say hello <ArrowUpRight size={14} aria-hidden="true" />
            </a>
          </div>
          <button
            type="button"
            className="nav-toggle"
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>
      </header>

      <main id="top">
        <section className="hero content-width" aria-labelledby="hero-title">
          <motion.div
            className="hero-copy"
            initial="hidden"
            animate="visible"
            variants={reveal}
          >
            <h1 id="hero-title">
              <span>RIYA</span>
              <span className="name-accent">JAIN</span>
            </h1>
            <p className="hero-role"> FULL-STACK DEVELOPER</p>
            <p className="hero-support">
              I build web &amp; mobile products with React, Flutter &amp;
              Node.js.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#work">
                View Work <ArrowRight size={16} aria-hidden="true" />
              </a>
              {githubProfileUrl ? (
                <ExternalAction
                  href={githubProfileUrl}
                  quiet
                  label="GitHub profile"
                >
                  GitHub
                </ExternalAction>
              ) : null}
              {linkedinProfileUrl ? (
                <ExternalAction
                  href={linkedinProfileUrl}
                  quiet
                  label="LinkedIn profile"
                >
                  LinkedIn
                </ExternalAction>
              ) : null}
            </div>
          </motion.div>

          <motion.aside
            className="hero-aside"
            initial={{ opacity: 0, x: 12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            aria-label="Current project"
          >
            <span className="mono-label">CURRENTLY BUILDING</span>
            <div className="hero-aside-rule" />
            <div className="hero-aside-title">
              <span className="hero-aside-index">01</span>
              <div>
                <strong>{aidly.title}</strong>
                <span>{aidly.category}</span>
              </div>
            </div>
            <div className="hero-aside-tags">
              <span>WEB</span>
              <span>MOBILE</span>
              <span className="development-status">
                <i className="status-dot" />
                {aidly.mobileStatus}
              </span>
            </div>
            <a className="aside-link" href="#aidly">
              Explore the case study <ArrowDown size={15} aria-hidden="true" />
            </a>
          </motion.aside>
          <div className="hero-bottom-note mono-label">
            FRONTEND / FULL-STACK DEVELOPER
          </div>
        </section>

        <section
          id="work"
          className="work-section content-width"
          aria-labelledby="work-title"
        >
          <div className="section-heading work-heading">
            <SectionLabel number="01">SELECTED WORK</SectionLabel>
            <h2 id="work-title">
              Things I&apos;ve <em>Built</em>
            </h2>
            <p>Web and mobile projects, shaped from interface to API.</p>
          </div>

          <div id="aidly" className="aidly-anchor">
            <AidlyCaseStudy project={aidly} />
          </div>
          <GreenPathProject project={greenPath} />
          <SalonGlowProject project={salonGlow} />
        </section>

        <motion.section
          id="about"
          className="about-section content-width"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.18 }}
          variants={reveal}
        >
          <div className="about-heading">
            <SectionLabel number="02">A LITTLE ABOUT ME</SectionLabel>
            <h2>
              Curious about how the whole thing <em>works.</em>
            </h2>
          </div>
          <div className="about-copy">
            <p>
              I&apos;m an Electronics &amp; Communication engineering student
              who found myself increasingly drawn toward software development. I
              enjoy taking an idea, turning it into an interface, connecting the
              backend, and seeing the whole thing actually work.
            </p>
            <p>
              Lately that means building for the web and mobile with React,
              Flutter and Node.js, and learning by making real projects along
              the way.
            </p>
            <div className="about-interests">
              <span>
                <Code2 size={15} /> Web development
              </span>
              <span>
                <BriefcaseBusiness size={15} /> Mobile development
              </span>
            </div>
          </div>
        </motion.section>

        <section id="experience" className="journey-section content-width">
          <div className="section-heading">
            <SectionLabel number="03">EXPERIENCE &amp; EDUCATION</SectionLabel>
            <h2>
              A few important <em>chapters.</em>
            </h2>
          </div>
          <div className="journey-grid">
            <article className="journey-entry">
              <div className="journey-icon">
                <BriefcaseBusiness size={18} />
              </div>
              <div>
                <p className="mono-label">{experience.dates}</p>
                <h3>{experience.role}</h3>
                <p>{experience.organization}</p>
                <span className="journey-detail">
                  Worked on the SalonGlow booking application.
                </span>
              </div>
            </article>
            <article className="journey-entry">
              <div className="journey-icon">
                <GraduationCap size={19} />
              </div>
              <div>
                <p className="mono-label">{education.dates}</p>
                <h3>{education.degree}</h3>
                <p>{education.school}</p>
                <span className="journey-detail">CGPA {education.cgpa}</span>
              </div>
            </article>
          </div>
        </section>

        <section id="skills" className="skills-section content-width">
          <div className="section-heading">
            <SectionLabel number="04">TOOLS I WORK WITH</SectionLabel>
            <h2>
              My everyday <em>toolkit.</em>
            </h2>
          </div>
          <div className="skills-grid">
            {skillGroups.map((group, index) => (
              <article className="skill-group" key={group.title}>
                <span className="mono-label">0{index + 1}</span>
                <h3>{group.title}</h3>
                <ul>
                  {group.items.map((skill) => (
                    <li key={skill}>{skill}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="certifications-section content-width">
          <div className="cert-heading">
            <SectionLabel number="05">CERTIFICATIONS</SectionLabel>
            <h2>
              Learning, <em>documented.</em>
            </h2>
          </div>
          <div className="cert-list">
            {certifications.map((certification) => (
              <a
                className="cert-row"
                key={certification.title}
                href={certification.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open ${certification.title}`}
                style={{ textDecoration: "none" }}
              >
                <span className="cert-mark" />
                <p>{certification.title}</p>
                <ArrowUpRight size={16} aria-hidden="true" />
              </a>
            ))}
          </div>
        </section>

        <section id="contact" className="contact-section content-width">
          <div className="contact-inner">
            <div>
              <p className="mono-label">HAVE SOMETHING IN MIND?</p>
              <h2>
                Let&apos;s make something <em>useful.</em>
              </h2>
            </div>
            <button
  className="button button-light"
  type="button"
  onClick={() => setIsContactOpen(true)}
>
  <Mail size={16} aria-hidden="true" />
  Get in touch
  <ArrowUpRight size={15} aria-hidden="true" />
</button>
          </div>
          <div className="contact-footer-line">
            <span>Riya Jain · Full-Stack Developer</span>
            <a href={`mailto:riyajain5210@gmail.com`}>riyajain5210@gmail.com</a>
          </div>
        </section>
      </main>

      <footer className="site-footer content-width">
        <span>© 2026 Riya Jain</span>
        <span>Designed &amp; built with React, Tailwind CSS and care.</span>
        <a href="#top">
          Back to top <ArrowUpRight size={14} aria-hidden="true" />
        </a>
          </footer>
          <ContactModal
  isOpen={isContactOpen}
  onClose={() => setIsContactOpen(false)}
  emailAddress={emailAddress}
/>
      </div>
      
  );
}

export default Portfolio;
