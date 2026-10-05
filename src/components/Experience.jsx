import React from "react";
import { experience } from "../data/portfolioData";
import "./Experience.css";

export default function Experience() {
  return (
    <section id="experience" className="section experience">
      <div className="section__container">
        <div className="section__header">
          <span className="section__label">Work Experience</span>
          <h2 className="section__title">Where I've Worked</h2>
        </div>

        <div className="experience__timeline">
          {experience.map((job) => (
            <div className="exp__card" key={job.id}>
              <div className="exp__marker">
                <div className="exp__dot"></div>
                <div className="exp__line"></div>
              </div>
              <div className="exp__content">
                <div className="exp__header">
                  <div>
                    <h3 className="exp__role">{job.role}</h3>
                    <p className="exp__company">{job.company}</p>
                  </div>
                  <div className="exp__meta">
                    <span className="exp__duration">📅 {job.duration}</span>
                    <span className="exp__location">📍 {job.location}</span>
                  </div>
                </div>
                <p className="exp__description">{job.description}</p>
                <div className="exp__skills">
                  {job.skills.map((s) => (
                    <span className="exp__skill-tag" key={s}>{s}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
