import { useState } from "react";
import emailjs from "@emailjs/browser";
import {
  Mail,
  MessageCircle,
  ArrowUpRight,
} from "lucide-react";

import { SiGithub, SiInstagram } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa";
import "./App.css";

const projects = [
  {
    number: "01",
    name: "SyncFleet",
    type: "Fleet management · Real-time systems",
    status: "In development",
    description:
      "A fleet tracking platform focused on live GPS movement, vehicle playback, and role-based access control.",
    technologies: ["Node.js", "React", "MongoDB", "Socket.IO"],
    featured: true,
  },
  {
    number: "02",
    name: "MyMTR Electrical",
    type: "Business application",
    status: "Deployed",
    description:
      "A deployed application developed around the operational needs of an electrical-services business.",
    technologies: ["Web Development", "Application Development"],
  },
  {
    number: "03",
    name: "SyncJewel",
    type: "Professional project",
    status: "Professional engagement",
    description:
      "A jewellery transaction monitoring application developed during a professional project engagement.",
    technologies: ["Application Development", "Monitoring"],
  },
];

const skills = [
  "Java",
  "Spring Boot",
  "Node.js",
  "Express.js",
  "React",
  "REST APIs",
  "MongoDB",
  "MySQL",
  "Kafka",
  "Socket.IO",
  "Git",
];

const contactDetails = {
  email: "whoadityadubey@gmail.com",
  whatsapp: "919372515035",
  linkedin: "https://www.linkedin.com/in/aditya-dubey-206789244/",
  github: "https://github.com/Java-Developer99",
  instagram: "https://www.instagram.com/will_jack8877/",
};

function FleetDashboard() {
  return (
    <div className="fleet-window" aria-label="Illustrative SyncFleet dashboard preview">
      <div className="fleet-titlebar">
        <div className="window-dots">
          <span />
          <span />
          <span />
        </div>
        <span className="window-title">SYNCFLEET / LIVE OVERVIEW</span>
        <span className="preview-label">UI PREVIEW</span>
      </div>

      <div className="fleet-layout">
        <aside className="fleet-sidebar">
          <div className="fleet-brand">
            <span className="fleet-brand-mark">S</span>
            <span>SyncFleet</span>
          </div>

          <div className="fleet-menu-label">WORKSPACE</div>
          <div className="fleet-menu-item selected">
            <span>◫</span> Overview
          </div>
          <div className="fleet-menu-item">
            <span>⌖</span> Live tracking
          </div>
          <div className="fleet-menu-item">
            <span>↻</span> Playback
          </div>
          <div className="fleet-menu-item">
            <span>▤</span> Reports
          </div>

          <div className="fleet-sidebar-bottom">
            <span className="fleet-avatar">A</span>
            <span>
              <strong>Admin</strong>
              <small>Fleet workspace</small>
            </span>
          </div>
        </aside>

        <div className="fleet-main">
          <div className="fleet-topbar">
            <div>
              <span className="fleet-breadcrumb">Workspace /</span>
              <strong>Overview</strong>
            </div>
            <span className="fleet-live-indicator">
              <i /> LIVE VIEW
            </span>
          </div>

          <div className="fleet-welcome">
            <div>
              <span className="fleet-overline">FLEET OPERATIONS</span>
              <h3>Good morning, Admin.</h3>
              <p>Here's an overview of your fleet.</p>
            </div>
            <span className="fleet-date">TODAY'S OVERVIEW</span>
          </div>

          <div className="fleet-stats">
            <div className="fleet-stat">
              <span>Total vehicles</span>
              <strong>24</strong>
              <small>Registered fleet</small>
              <i className="stat-icon blue">↗</i>
            </div>
            <div className="fleet-stat">
              <span>Active</span>
              <strong>18</strong>
              <small><i className="status-dot green" /> On the move</small>
              <i className="stat-icon green-bg">✓</i>
            </div>
            <div className="fleet-stat">
              <span>Idle</span>
              <strong>4</strong>
              <small><i className="status-dot amber" /> Not moving</small>
              <i className="stat-icon amber-bg">Ⅱ</i>
            </div>
            <div className="fleet-stat">
              <span>Offline</span>
              <strong>2</strong>
              <small><i className="status-dot grey" /> No live signal</small>
              <i className="stat-icon grey-bg">−</i>
            </div>
          </div>

          <div className="fleet-content-grid">
            <div className="fleet-map-panel">
              <div className="fleet-panel-heading">
                <div>
                  <strong>Live vehicle locations</strong>
                  <small>Illustrative map preview</small>
                </div>
                <span className="map-filter">All vehicles⌄</span>
              </div>

              <div className="fleet-map">
                <div className="map-block block-one" />
                <div className="map-block block-two" />
                <div className="map-block block-three" />
                <div className="map-block block-four" />
                <div className="map-road road-one" />
                <div className="map-road road-two" />
                <div className="map-road road-three" />
                <div className="map-road road-four" />
                <svg
                  className="map-route"
                  viewBox="0 0 400 230"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  <path
                    d="M 36 182 L 95 182 L 95 133 L 157 133 L 157 72 L 232 72 L 232 112 L 298 112 L 298 52 L 355 52"
                    fill="none"
                    stroke="#ffffff"
                    strokeWidth="8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M 36 182 L 95 182 L 95 133 L 157 133 L 157 72 L 232 72 L 232 112 L 298 112 L 298 52 L 355 52"
                    fill="none"
                    stroke="#315efb"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeDasharray="5 5"
                  />
                </svg>
                <span className="map-pin pin-one">↗</span>
                <span className="map-pin pin-two">↗</span>
                <span className="map-pin pin-three">↗</span>
                <span className="map-location">VEHICLE ROUTE</span>
                <span className="map-zoom">+<br />−</span>
              </div>

              <div className="fleet-map-footer">
                <span><i className="status-dot green" /> Active</span>
                <span><i className="status-dot amber" /> Idle</span>
                <span><i className="status-dot grey" /> Offline</span>
              </div>
            </div>

            <div className="fleet-vehicle-panel">
              <div className="fleet-panel-heading">
                <div>
                  <strong>Vehicle activity</strong>
                  <small>Example fleet records</small>
                </div>
                <span className="fleet-more">•••</span>
              </div>

              <div className="vehicle-row">
                <span className="vehicle-symbol">↗</span>
                <span className="vehicle-details">
                  <strong>Vehicle 001</strong>
                  <small>GPS signal received</small>
                </span>
                <span className="vehicle-status active-status">Active</span>
              </div>
              <div className="vehicle-row">
                <span className="vehicle-symbol">↗</span>
                <span className="vehicle-details">
                  <strong>Vehicle 002</strong>
                  <small>GPS signal received</small>
                </span>
                <span className="vehicle-status active-status">Active</span>
              </div>
              <div className="vehicle-row">
                <span className="vehicle-symbol">Ⅱ</span>
                <span className="vehicle-details">
                  <strong>Vehicle 003</strong>
                  <small>Stationary</small>
                </span>
                <span className="vehicle-status idle-status">Idle</span>
              </div>
              <div className="vehicle-row">
                <span className="vehicle-symbol">−</span>
                <span className="vehicle-details">
                  <strong>Vehicle 004</strong>
                  <small>No recent signal</small>
                </span>
                <span className="vehicle-status offline-status">Offline</span>
              </div>

              <div className="fleet-panel-note">
                <span>i</span>
                Illustrative interface — not connected to live vehicle data.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function App() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "Freelance project",
    budget: "",
    requirements: "",
  });

  const [formStatus, setFormStatus] = useState("");
  return (
    <>
      <header className="site-header">
        <nav className="navbar container">
          <a className="brand" href="#home" aria-label="Aditya home">
            aditya<span>.</span>
          </a>

          <div className="nav-links">
            <a href="#work">Work</a>
            <a href="#about">About</a>
            <a href="#contact">Contact <span>↗</span></a>
          </div>

          <a className="nav-cta" href="#contact">
            Let's talk <span>↗</span>
          </a>
        </nav>
      </header>

      <main>
        <section className="hero container" id="home">
          <div className="hero-copy">
            <div className="eyebrow">
              <span className="availability-dot" />
              FULL-STACK DEVELOPER <span className="eyebrow-divider">/</span> INDIA
            </div>

            <h1>
              Building useful
              <br />
              software, <span>with purpose.</span>
            </h1>

            <p className="hero-description">
              I'm Aditya, a full-stack developer working across backend
              systems, web applications, and real-time experiences.
              I turn practical problems into software people can use.
            </p>

            <div className="hero-actions">
              <a className="button button-primary" href="#work">
                Explore my work <span>↘</span>
              </a>
              <a className="button button-secondary" href="#contact">
                Get in touch <span>↗</span>
              </a>
            </div>

            <div className="hero-footnote">
              <span>JAVA & SPRING BOOT</span>
              <span className="footnote-divider" />
              <span>NODE.JS & REACT</span>
            </div>
          </div>

          <div className="hero-visual">
            <div className="visual-caption">
              <span>FEATURED PROJECT / 001</span>
              <span>SYNCFLEET</span>
            </div>
            <FleetDashboard />
            <div className="visual-footnote">
              <span>DESIGNED FOR REAL-WORLD OPERATIONS</span>
              <span>01 — 03</span>
            </div>
          </div>
        </section>

        <section className="intro-strip">
          <div className="container intro-strip-inner">
            <span>WHAT I DO</span>
            <p>
              Backend engineering <i>·</i> Full-stack development <i>·</i>{" "}
              Real-time applications <i>·</i> API design
            </p>
          </div>
        </section>

        <section className="section container" id="work">
          <div className="section-topline">
            <span className="section-index">01 / SELECTED WORK</span>
            <span className="section-side-note">PROJECTS & EXPERIENCE</span>
          </div>

          <div className="section-heading-row">
            <h2>Work that makes<br />a difference.</h2>
            <p>
              A selection of professional work and applications I've helped
              build, from real-time fleet systems to business-focused software.
            </p>
          </div>

          <div className="project-list">
            {projects.map((project) => (
              <article
                className={`project-card ${project.featured ? "project-featured" : ""}`}
                key={project.number}
              >
                <div className="project-number">{project.number}</div>

                <div className="project-main">
                  <div className="project-meta">
                    <span>{project.type}</span>
                    <span className="project-status">{project.status}</span>
                  </div>
                  <h3>{project.name}</h3>
                  <p>{project.description}</p>
                  <div className="tech-list">
                    {project.technologies.map((technology) => (
                      <span className="tech-tag" key={technology}>
                        {technology}
                      </span>
                    ))}
                  </div>
                </div>

                <a className="project-arrow" href="#contact" aria-label={`Ask about ${project.name}`}>
                  ↗
                </a>
              </article>
            ))}
          </div>
        </section>

        <section className="about-section" id="about">
          <div className="container about-layout">
            <div>
              <div className="section-index">02 / A LITTLE ABOUT ME</div>
              <h2>Thoughtful code.<br /><span>Practical outcomes.</span></h2>
            </div>
            <div className="about-content">
              <p>
                I enjoy building applications from the backend outward:
                understanding the problem, shaping the data, designing APIs,
                and connecting everything to a useful interface.
              </p>
              <p>
                My work spans Java and Spring Boot as well as Node.js and
                React. I'm continuing to deepen my engineering skills by
                building and improving real applications.
              </p>
              <div className="skills-list">
                {skills.map((skill) => (
                  <span className="skill-tag" key={skill}>{skill}</span>
                ))}
              </div>
            </div>
          </div>
        </section>


        <section className="contact-section container" id="contact">
          <div className="contact-heading">
            <div className="section-index">03 / GET IN TOUCH</div>
            <h2>Have something worth building?</h2>
            <p>
              Tell me what you're working on. Share your requirements,
              and let's discuss how I can help.
            </p>
          </div>

          <div className="contact-layout">
            <form
              className="contact-form"
              onSubmit={async (event) => {
                event.preventDefault();
                setFormStatus("Sending your enquiry...");

                try {
                  await emailjs.send(
                    import.meta.env.VITE_EMAILJS_SERVICE_ID,
                    import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                    {
                      from_name: formData.name.trim(),
                      reply_to: formData.email.trim(),
                      project_type: formData.projectType,
                      budget: formData.budget || "Not specified",
                      requirements: formData.requirements.trim(),
                    },
                    {
                      publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
                    }
                  );

                  setFormStatus(
                    "Your enquiry has been sent successfully! I'll get back to you soon."
                  );

                  setFormData({
                    name: "",
                    email: "",
                    projectType: "Freelance project",
                    budget: "",
                    requirements: "",
                  });
                } catch (error) {
                  console.error("EmailJS submission failed:", error);

                  setFormStatus(
                    "Sorry, your enquiry could not be sent. Please email me directly at whoadityadubey@gmail.com."
                  );
                }
              }}
            >
              <div className="form-field">
                <label htmlFor="contact-name">Your name</label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  placeholder="What should I call you?"
                  value={formData.name}
                  onChange={(event) =>
                    setFormData({ ...formData, name: event.target.value })
                  }
                  required
                />
              </div>

              <div className="form-field">
                <label htmlFor="contact-email">Email address</label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="you@company.com"
                  value={formData.email}
                  onChange={(event) =>
                    setFormData({ ...formData, email: event.target.value })
                  }
                  required
                />
              </div>

              <div className="form-field">
                <label htmlFor="contact-project">What do you need?</label>
                <select
                  id="contact-project"
                  name="projectType"
                  value={formData.projectType}
                  onChange={(event) =>
                    setFormData({ ...formData, projectType: event.target.value })
                  }
                >
                  <option>Freelance project</option>
                  <option>Full-time opportunity</option>
                  <option>Backend development</option>
                  <option>Full-stack application</option>
                  <option>Other enquiry</option>
                </select>
              </div>

              <div className="form-field">
                <label htmlFor="contact-budget">Estimated budget (optional)</label>
                <select
                  id="contact-budget"
                  name="budget"
                  value={formData.budget}
                  onChange={(event) =>
                    setFormData({ ...formData, budget: event.target.value })
                  }
                >
                  <option value="">Select a range</option>
                  <option>Under ₹5,000</option>
                  <option>₹5,000–₹15,000</option>
                  <option>₹15,000–₹50,000</option>
                  <option>₹50,000+</option>
                  <option>To be discussed</option>
                </select>
              </div>

              <div className="form-field form-field-full">
                <label htmlFor="contact-requirements">Project requirements</label>
                <textarea
                  id="contact-requirements"
                  name="requirements"
                  rows={5}
                  placeholder="What are you looking to build? Include the problem, key features, and timeline if known."
                  value={formData.requirements}
                  onChange={(event) =>
                    setFormData({ ...formData, requirements: event.target.value })
                  }
                  required
                />
              </div>

              <button className="button button-primary contact-submit" type="submit">
                Send your enquiry <ArrowUpRight size={16} />
              </button>

              {formStatus && (
                <p className="form-status" role="status">{formStatus}</p>
              )}
            </form>

            <aside className="contact-details">
              <span className="contact-details-label">DIRECT CONTACT</span>

              <a className="contact-method" href={`mailto:${contactDetails.email}`}>
                <Mail size={19} />
                <span>
                  <small>Email me</small>
                  <strong>{contactDetails.email}</strong>
                </span>
                <ArrowUpRight size={15} />
              </a>

              <a
                className="contact-method"
                href={`https://wa.me/${contactDetails.whatsapp}`}
                target="_blank"
                rel="noreferrer"
              >
                <MessageCircle size={19} />
                <span>
                  <small>WhatsApp</small>
                  <strong>Start a conversation</strong>
                </span>
                <ArrowUpRight size={15} />
              </a>

              <div className="social-links">
                <a
                  href={contactDetails.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  title="LinkedIn"
                >
                  <FaLinkedinIn size={20} />
                </a>

                <a
                  href={contactDetails.github}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                  title="GitHub"
                >
                  <SiGithub size={20} />
                </a>

                <a
                  href={contactDetails.instagram}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                  title="Instagram"
                >
                  <SiInstagram size={20} />
                </a>
              </div>

              <p className="contact-note">
                Prefer email? Send your requirements through the form,
                or contact me directly using the links above.
              </p>
            </aside>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-content">
          <a className="brand" href="#home">aditya<span>.</span></a>
          <span>Designed with care. Built with code.</span>
          <a href="#home">Back to top ↑</a>
        </div>
      </footer>
    </>
  );
}

export default App;
