import React from "react";
import { aboutCards } from "../data/portfolioData";
import "./About.css";

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="section__container">
        <div className="section__header">
          <span className="section__label">About Me</span>
          <h2 className="section__title">Who I Am</h2>
        </div>

        <div className="about__grid">
          <div className="about__text">
            <p>
              I'm <strong>Srinadh Bethi</strong>, an Electronics and Communication Engineering
              graduate from Vignana Bharathi Institute of Technology (VBIT), JNTU Hyderabad.
              Over the course of my degree, I discovered a strong interest in software
              development and gradually transitioned toward web and application development.
            </p>
            <p>
              I've built practical skills in <strong>React</strong>, <strong>JavaScript</strong>,{" "}
              <strong>Node.js</strong>, and backend integration using <strong>Supabase</strong>.
              I've also explored cloud services through <strong>AWS EC2</strong> and <strong>S3</strong>,
              and I'm actively developing my understanding of AI tools through prompt engineering.
            </p>
            <p>
              I completed a Software Engineer Internship at{" "}
              <strong>Realityrift Innovations Pvt Ltd (Hello Aria)</strong>, where I contributed to
              web development work in a professional team environment. I'm currently looking for
              entry-level IT roles where I can grow, contribute, and continue learning.
            </p>
            <div className="about__info-pills">
              <span className="pill">📍 Pedagadi, Andhra Pradesh</span>
              <span className="pill">🎓 B.Tech ECE – 2026</span>
              <span className="pill">💼 Open to Opportunities</span>
            </div>
          </div>

          <div className="about__cards">
            {aboutCards.map((card) => (
              <div className="about__card" key={card.id}>
                <span className="about__card-icon" aria-hidden="true">{card.icon}</span>
                <h3 className="about__card-title">{card.title}</h3>
                <p className="about__card-desc">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
