import React from "react";
import { skillGroups } from "../data/portfolioData";
import "./Skills.css";

const skillIcons = {
  HTML: "🌐",
  CSS: "🎨",
  JavaScript: "⚡",
  React: "⚛️",
  Vite: "⚡",
  "Node.js": "🟢",
  Supabase: "🟢",
  Python: "🐍",
  C: "©️",
  "AWS EC2": "☁️",
  "AWS S3": "🪣",
  "Prompt Engineering": "🤖",
  Git: "🔀",
  GitHub: "🐙",
  "VS Code": "🔷",
  Netlify: "🔼",
  Antigravity: "🚀",
};

export default function Skills() {
  return (
    <section id="skills" className="section skills">
      <div className="section__container">
        <div className="section__header">
          <span className="section__label">Technical Skills</span>
          <h2 className="section__title">What I Work With</h2>
        </div>

        <div className="skills__grid">
          {skillGroups.map((group) => (
            <div className="skills__group" key={group.category}>
              <div className="skills__group-header">
                <span className="skills__group-icon" aria-hidden="true">{group.icon}</span>
                <h3 className="skills__group-title">{group.category}</h3>
              </div>
              <div className="skills__tags">
                {group.skills.map((skill) => (
                  <span className="skill-tag" key={skill} title={skill}>
                    <span className="skill-tag__icon" aria-hidden="true">{skillIcons[skill] || "🔧"}</span>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
