import React, { useEffect, useRef } from "react";
import { personalInfo } from "../data/portfolioData";
import "./Hero.css";

export default function Hero() {
  const codeRef = useRef(null);

  useEffect(() => {
    const lines = codeRef.current?.querySelectorAll(".code-line");
    if (!lines) return;
    lines.forEach((line, i) => {
      setTimeout(() => {
        line.style.opacity = "1";
        line.style.transform = "translateX(0)";
      }, i * 120);
    });
  }, []);

  const handleNav = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="hero">
      <div className="hero__bg-grid" aria-hidden="true"></div>
      <div className="hero__container">
        {/* Left Column */}
        <div className="hero__content">
          <span className="hero__badge">Available for Opportunities</span>
          <h1 className="hero__heading">
            Hi, I'm{" "}
            <span className="hero__name">Srinadh Bethi</span>
          </h1>
          <p className="hero__subtitle">{personalInfo.title}</p>
          <p className="hero__description">{personalInfo.tagline}</p>

          <div className="hero__actions">
            <button
              id="hero-view-projects"
              className="btn btn--primary"
              onClick={() => handleNav("#projects")}
            >
              View My Projects
            </button>
            <a
              id="hero-download-resume"
              href={personalInfo.resumePath}
              download
              className="btn btn--outline"
            >
              Download Resume
            </a>
            <button
              id="hero-contact"
              className="btn btn--ghost"
              onClick={() => handleNav("#contact")}
            >
              Contact Me
            </button>
          </div>

          <div className="hero__socials">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noreferrer"
              className="hero__social-link"
              aria-label="GitHub profile"
              id="hero-github"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20" aria-hidden="true">
                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
              </svg>
              GitHub
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noreferrer"
              className="hero__social-link"
              aria-label="LinkedIn profile"
              id="hero-linkedin"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20" aria-hidden="true">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              LinkedIn
            </a>
          </div>
        </div>

        {/* Right Column - Code Visual */}
        <div className="hero__visual" aria-hidden="true">
          <div className="code-window">
            <div className="code-window__header">
              <span className="dot dot--red"></span>
              <span className="dot dot--yellow"></span>
              <span className="dot dot--green"></span>
              <span className="code-window__title">portfolio.js</span>
            </div>
            <div className="code-window__body" ref={codeRef}>
              <div className="code-line"><span className="kw">const</span> <span className="var">developer</span> = {"{"}</div>
              <div className="code-line indent"><span className="prop">name</span>: <span className="str">"Srinadh Bethi"</span>,</div>
              <div className="code-line indent"><span className="prop">role</span>: <span className="str">"React Developer"</span>,</div>
              <div className="code-line indent"><span className="prop">location</span>: <span className="str">"Andhra Pradesh, India"</span>,</div>
              <div className="code-line indent"><span className="prop">skills</span>: [</div>
              <div className="code-line indent2"><span className="str">"React"</span>, <span className="str">"JavaScript"</span>,</div>
              <div className="code-line indent2"><span className="str">"Node.js"</span>, <span className="str">"AWS"</span>,</div>
              <div className="code-line indent2"><span className="str">"Supabase"</span>, <span className="str">"Python"</span></div>
              <div className="code-line indent">],</div>
              <div className="code-line indent"><span className="prop">available</span>: <span className="bool">true</span>,</div>
              <div className="code-line indent"><span className="prop">status</span>: <span className="str">"Open to work 🚀"</span></div>
              <div className="code-line">{"}"}</div>
              <div className="code-line cursor-line"><span className="cmt">{"// Let's build something great!"}</span><span className="cursor">|</span></div>
            </div>
          </div>

          <div className="hero__float-badges">
            <span className="float-badge">React ⚛️</span>
            <span className="float-badge">AWS ☁️</span>
            <span className="float-badge">Supabase 🟢</span>
          </div>
        </div>
      </div>

      <a href="#about" className="hero__scroll-hint" onClick={(e) => { e.preventDefault(); handleNav("#about"); }} aria-label="Scroll to about section">
        <span>Scroll Down</span>
        <div className="hero__scroll-arrow"></div>
      </a>
    </section>
  );
}
