import React from "react";
import { projects } from "../data/portfolioData";
import "./Projects.css";

export default function Projects() {
  return (
    <section id="projects" className="section projects">
      <div className="section__container">
        <div className="section__header">
          <span className="section__label">My Work</span>
          <h2 className="section__title">Projects</h2>
          <p className="section__subtitle">
            A selection of projects I've built to learn and apply different technologies.
          </p>
        </div>

        <div className="projects__grid">
          {projects.map((project) => (
            <div className={`project__card ${project.featured ? "project__card--featured" : ""}`} key={project.id}>
              <div className="project__header">
                <div className="project__icon" aria-hidden="true">📁</div>
                {project.featured && (
                  <span className="project__featured-badge">Featured</span>
                )}
              </div>

              <h3 className="project__title">{project.title}</h3>
              <p className="project__description">{project.description}</p>

              <div className="project__tech">
                {project.tech.map((t) => (
                  <span className="project__tech-tag" key={t}>{t}</span>
                ))}
              </div>

              <div className="project__actions">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="project__btn project__btn--outline"
                  aria-label={`GitHub repository for ${project.title}`}
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" width="15" height="15" aria-hidden="true">
                    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                  </svg>
                  GitHub
                </a>

                {project.liveUrl ? (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="project__btn project__btn--primary"
                    aria-label={`Live demo of ${project.title}`}
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="15" height="15" aria-hidden="true">
                      <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
                      <polyline points="15 3 21 3 21 9" />
                      <line x1="10" y1="14" x2="21" y2="3" />
                    </svg>
                    Live Demo
                  </a>
                ) : (
                  <span className="project__btn project__btn--disabled" title="No live demo available">No Live Demo</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
