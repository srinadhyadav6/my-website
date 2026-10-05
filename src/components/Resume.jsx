import React from "react";
import { personalInfo } from "../data/portfolioData";
import "./Resume.css";

export default function Resume() {
  return (
    <section id="resume" className="section resume">
      <div className="section__container">
        <div className="resume__card">
          <div className="resume__left">
            <span className="resume__icon" aria-hidden="true">📄</span>
            <div>
              <h2 className="resume__title">My Resume</h2>
              <p className="resume__subtitle">
                Download my resume to see my full academic background, skills, and experience.
              </p>
              <p className="resume__note">
                💡 Place your PDF file at <code>public/resume.pdf</code> to activate the download button.
              </p>
            </div>
          </div>
          <a
            id="resume-download-btn"
            href={personalInfo.resumePath}
            download="Srinadh_Bethi_Resume.pdf"
            className="btn btn--primary resume__btn"
            aria-label="Download resume PDF"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18" aria-hidden="true">
              <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}
