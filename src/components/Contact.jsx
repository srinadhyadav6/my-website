import React, { useState } from "react";
import { personalInfo } from "../data/portfolioData";
import "./Contact.css";

const initialForm = { name: "", email: "", message: "" };

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = "Name is required.";
    if (!form.email.trim()) {
      errs.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      errs.email = "Please enter a valid email address.";
    }
    if (!form.message.trim()) errs.message = "Message is required.";
    else if (form.message.trim().length < 15)
      errs.message = "Message must be at least 15 characters.";
    return errs;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    // No email backend connected. Showing success state only.
    setSubmitted(true);
    setForm(initialForm);
  };

  return (
    <section id="contact" className="section contact">
      <div className="section__container">
        <div className="section__header">
          <span className="section__label">Get In Touch</span>
          <h2 className="section__title">Contact Me</h2>
          <p className="section__subtitle">
            Feel free to reach out for opportunities, collaborations, or just a quick hello.
          </p>
        </div>

        <div className="contact__grid">
          {/* Info Side */}
          <div className="contact__info">
            <h3 className="contact__info-heading">Let's Connect</h3>
            <p className="contact__info-text">
              I'm actively looking for entry-level software/IT roles. If you have an opportunity
              that matches my profile, I'd love to hear from you.
            </p>

            <div className="contact__details">
              <a href={`mailto:${personalInfo.email}`} className="contact__detail-item" id="contact-email-link">
                <span className="contact__detail-icon" aria-hidden="true">📧</span>
                <div>
                  <span className="contact__detail-label">Email</span>
                  <span className="contact__detail-value">{personalInfo.email}</span>
                </div>
              </a>

              <a href={`tel:${personalInfo.phone}`} className="contact__detail-item" id="contact-phone-link">
                <span className="contact__detail-icon" aria-hidden="true">📞</span>
                <div>
                  <span className="contact__detail-label">Phone</span>
                  <span className="contact__detail-value">{personalInfo.phone}</span>
                </div>
              </a>

              <a href={personalInfo.github} target="_blank" rel="noreferrer" className="contact__detail-item" id="contact-github-link">
                <span className="contact__detail-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20" aria-hidden="true">
                    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                  </svg>
                </span>
                <div>
                  <span className="contact__detail-label">GitHub</span>
                  <span className="contact__detail-value">github.com/srinadhyadav6</span>
                </div>
              </a>

              <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="contact__detail-item" id="contact-linkedin-link">
                <span className="contact__detail-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20" aria-hidden="true">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </span>
                <div>
                  <span className="contact__detail-label">LinkedIn</span>
                  <span className="contact__detail-value">linkedin.com/in/srinadh-bethi</span>
                </div>
              </a>
            </div>
          </div>

          {/* Form Side */}
          <div className="contact__form-wrapper">
            {submitted ? (
              <div className="contact__success">
                <span className="contact__success-icon" aria-hidden="true">✅</span>
                <h3>Message Received!</h3>
                <p>
                  Thank you for reaching out. This form currently doesn't send emails automatically
                  — please contact me directly at{" "}
                  <a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a>.
                </p>
                <button
                  className="btn btn--outline"
                  onClick={() => setSubmitted(false)}
                  id="contact-reset-btn"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form className="contact__form" onSubmit={handleSubmit} noValidate>
                <div className="form__group">
                  <label className="form__label" htmlFor="contact-name">Name</label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    className={`form__input ${errors.name ? "form__input--error" : ""}`}
                    placeholder="Your full name"
                    value={form.name}
                    onChange={handleChange}
                    autoComplete="name"
                  />
                  {errors.name && <p className="form__error">{errors.name}</p>}
                </div>

                <div className="form__group">
                  <label className="form__label" htmlFor="contact-email">Email</label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    className={`form__input ${errors.email ? "form__input--error" : ""}`}
                    placeholder="your@email.com"
                    value={form.email}
                    onChange={handleChange}
                    autoComplete="email"
                  />
                  {errors.email && <p className="form__error">{errors.email}</p>}
                </div>

                <div className="form__group">
                  <label className="form__label" htmlFor="contact-message">Message</label>
                  <textarea
                    id="contact-message"
                    name="message"
                    className={`form__input form__textarea ${errors.message ? "form__input--error" : ""}`}
                    placeholder="Tell me about the opportunity or what you'd like to discuss..."
                    value={form.message}
                    onChange={handleChange}
                    rows={5}
                  />
                  {errors.message && <p className="form__error">{errors.message}</p>}
                </div>

                <p className="contact__form-note">
                  ⚠️ This form currently does frontend validation only. No email backend is connected.
                  For immediate contact, email me directly.
                </p>

                <button id="contact-submit-btn" type="submit" className="btn btn--primary contact__submit">
                  Send Message
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16" aria-hidden="true">
                    <line x1="22" y1="2" x2="11" y2="13" />
                    <polygon points="22 2 15 22 11 13 2 9 22 2" />
                  </svg>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
