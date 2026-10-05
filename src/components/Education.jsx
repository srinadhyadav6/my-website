import React from "react";
import { education } from "../data/portfolioData";
import "./Education.css";

export default function Education() {
  return (
    <section id="education" className="section education">
      <div className="section__container">
        <div className="section__header">
          <span className="section__label">Academic Background</span>
          <h2 className="section__title">Education</h2>
        </div>

        <div className="education__list">
          {education.map((edu) => (
            <div className="edu__card" key={edu.id}>
              <div className="edu__left">
                <div className="edu__icon" aria-hidden="true">🎓</div>
              </div>
              <div className="edu__content">
                <div className="edu__header">
                  <div>
                    <h3 className="edu__degree">{edu.degree}</h3>
                    <p className="edu__institution">{edu.institution}</p>
                    <p className="edu__university">{edu.university}</p>
                  </div>
                  <div className="edu__meta">
                    <span className="edu__duration">📅 {edu.duration}</span>
                    <span className="edu__cgpa">CGPA: {edu.cgpa}</span>
                    <span className="edu__location">📍 {edu.location}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
