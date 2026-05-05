import { useState } from "react";
import PageShell from "./PageShell";
import kid2 from "../Assets/images/kid1.jpg";

const initialContactForm = { name: "", phone: "", message: "" };

const schoolDetails = {
  address: [
    "Near Jarjangi Post",
    "Kobbarichetlapeta Village",
    "Kotabommali Mandal",
    "Srikakulam District",
    "Andhra Pradesh - 532195",
  ],
  phone: "8008546300",
  email: "hamsavahini.school@gmail.com",
};

// Google Maps link for the exact location
const MAPS_SEARCH_URL =
  "https://www.google.com/maps/search/Hamsavahini+E.M+high+school,+Kobbarichetla+Peta,+Jarjangi,+Andhra+Pradesh+532195";

export default function Contact() {
  const [formData, setFormData] = useState(initialContactForm);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const updateField = (event) => {
    const { name, value } = event.target;
    let nextValue = value;
    let fieldError = "";

    if (name === "name") {
      nextValue = value.replace(/[^A-Za-z\s]/g, "");
      if (nextValue !== value) fieldError = "Name can contain letters and spaces only.";
    }

    if (name === "phone") {
      nextValue = value.replace(/\D/g, "").slice(0, 10);
      if (nextValue !== value) fieldError = "Phone can contain numbers only.";
    }

    setFormData((current) => ({ ...current, [name]: nextValue }));
    setErrors((current) => ({ ...current, [name]: fieldError }));
    setSubmitted(false);
  };

  const submitContactForm = (event) => {
    event.preventDefault();
    const nextErrors = {};
    const trimmedName = formData.name.trim();
    const trimmedPhone = formData.phone.trim();

    if (!trimmedName) {
      nextErrors.name = "Name is required.";
    } else if (!/^[A-Za-z\s]+$/.test(trimmedName)) {
      nextErrors.name = "Name can contain letters and spaces only.";
    }

    if (!trimmedPhone) {
      nextErrors.phone = "Phone number is required.";
    } else if (!/^\d{10}$/.test(trimmedPhone)) {
      nextErrors.phone = "Enter a valid 10 digit phone number.";
    }

    if (!formData.message.trim()) nextErrors.message = "Message is required.";

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      setSubmitted(false);
      return;
    }

    setFormData(initialContactForm);
    setSubmitted(true);
  };

  return (
    <PageShell className="inner-page">
      <style>{`
        /* --- General Layout Helpers --- */
        .eyebrow {
          display: block;
          color: #16645f;
          font-size: 0.78rem;
          font-weight: 900;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        /* --- Updated Header Section --- */
        .contact-plain-header {
          background: #ffffff;
          display: flex;
          align-items: center;
          gap: clamp(28px, 5vw, 72px);
          padding: 140px clamp(18px, 5vw, 76px) 60px;
          border-bottom: 1px solid #e2eae7;
        }

        .contact-plain-header-text {
          flex: 1 1 0;
        }

        .contact-plain-header h1 {
          margin: 14px 0 0;
          font-size: clamp(2.2rem, 6vw, 4.5rem);
          line-height: 1.1;
          color: #182231;
        }

        .contact-plain-header p {
          max-width: 520px;
          margin: 18px 0 0;
          color: #526171;
          font-size: clamp(1rem, 1.8vw, 1.15rem);
          line-height: 1.6;
        }

        .contact-plain-header-img {
          flex: 0 0 clamp(220px, 28vw, 380px);
          height: clamp(280px, 34vw, 440px);
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 22px 50px rgba(24, 34, 49, 0.13);
        }

        .contact-plain-header-img img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        /* --- Contact Info & Form Section --- */
        .contact-section {
          display: grid;
          grid-template-columns: minmax(0, 0.9fr) minmax(320px, 1.1fr);
          gap: clamp(32px, 5vw, 72px);
          padding: 80px clamp(18px, 5vw, 76px);
          background: #182231;
        }

        .contact-card {
          color: #ffffff;
        }

        .contact-card h2 {
          margin: 12px 0 0;
          color: #ffffff;
          font-size: clamp(2rem, 4.5vw, 3.2rem);
          line-height: 1.1;
        }

        .contact-card address {
          display: grid;
          gap: 8px;
          margin: 24px 0 0;
          color: rgba(255, 255, 255, 0.86);
          font-style: normal;
          font-size: 1.05rem;
          line-height: 1.5;
        }

        .contact-buttons {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 12px;
          margin-top: 30px;
        }

        .phone-button, .email-button {
          display: inline-flex;
          align-items: center;
          padding: 12px 20px;
          border-radius: 8px;
          color: #ffffff;
          font-weight: 700;
          text-decoration: none;
          transition: transform 0.2s ease;
        }

        .phone-button { background: #d84b22; box-shadow: 0 10px 20px rgba(216, 75, 34, 0.2); }
        .email-button { background: #16645f; box-shadow: 0 10px 20px rgba(22, 100, 95, 0.2); }
        .phone-button:hover, .email-button:hover { transform: translateY(-3px); }

        .form-card {
          padding: 32px;
          border-radius: 14px;
          background: #ffffff;
          box-shadow: 0 24px 54px rgba(0, 0, 0, 0.2);
        }

        .form-card h2 {
          margin: 10px 0 20px;
          color: #182231;
          font-size: 1.8rem;
        }

        /* --- Google Maps Section --- */
        .maps-section {
          background: #0f1a27;
          padding: 60px clamp(18px, 5vw, 76px);
        }

        .maps-header {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 16px;
          margin-bottom: 28px;
        }

        .maps-header-text h2 {
          margin: 10px 0 0;
          color: #ffffff;
          font-size: clamp(1.6rem, 3.5vw, 2.4rem);
          line-height: 1.15;
        }

        .maps-header-text p {
          margin: 8px 0 0;
          color: rgba(255,255,255,0.6);
          font-size: 0.95rem;
        }

        .maps-directions-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 12px 22px;
          background: #d84b22;
          color: #ffffff;
          font-weight: 700;
          font-size: 0.95rem;
          border-radius: 8px;
          text-decoration: none;
          white-space: nowrap;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
          box-shadow: 0 8px 24px rgba(216, 75, 34, 0.35);
        }

        .maps-directions-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 30px rgba(216, 75, 34, 0.45);
        }

        .maps-directions-btn svg {
          flex-shrink: 0;
        }

        .maps-container {
          position: relative;
          width: 100%;
          height: clamp(340px, 50vw, 520px);
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 24px 60px rgba(0, 0, 0, 0.45);
          cursor: pointer;
        }

        .maps-container iframe {
          width: 100%;
          height: 100%;
          border: none;
          display: block;
          pointer-events: none; /* Clicks go to the anchor overlay */
        }

        /* Transparent clickable overlay — sends user to Google Maps on click */
        .maps-overlay-link {
          position: absolute;
          inset: 0;
          z-index: 10;
          display: flex;
          align-items: center;
          justify-content: center;
          background: transparent;
          transition: background 0.25s ease;
          text-decoration: none;
        }

        .maps-overlay-link:hover {
          background: rgba(216, 75, 34, 0.08);
        }

        .maps-overlay-badge {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 14px 22px;
          background: rgba(15, 26, 39, 0.82);
          backdrop-filter: blur(8px);
          border: 1px solid rgba(255,255,255,0.15);
          border-radius: 50px;
          color: #ffffff;
          font-weight: 700;
          font-size: 1rem;
          opacity: 0;
          transform: translateY(6px);
          transition: opacity 0.25s ease, transform 0.25s ease;
          pointer-events: none;
        }

        .maps-overlay-link:hover .maps-overlay-badge {
          opacity: 1;
          transform: translateY(0);
        }

        .maps-info-strip {
          display: flex;
          flex-wrap: wrap;
          gap: 20px;
          margin-top: 20px;
        }

        .maps-info-chip {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 10px 16px;
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 8px;
          color: rgba(255,255,255,0.75);
          font-size: 0.9rem;
        }

        .maps-info-chip svg {
          color: #16645f;
          flex-shrink: 0;
        }

        /* --- MOBILE MEDIA QUERIES --- */
        @media (max-width: 768px) {
          .contact-plain-header {
            flex-direction: column;
            text-align: center;
            padding-top: 160px;
            gap: 40px;
          }
          
          .contact-plain-header-text {
             display: flex;
             flex-direction: column;
             align-items: center;
          }

          .contact-plain-header h1 {
            font-size: 2.2rem;
          }

          .contact-plain-header-img {
            width: 100%;
            height: 300px;
            flex: none;
          }

          .contact-section {
            grid-template-columns: 1fr;
            padding: 60px 20px;
          }
          
          .contact-buttons {
            align-items: stretch;
          }

          .maps-section {
            padding: 48px 20px;
          }

          .maps-header {
            flex-direction: column;
            align-items: flex-start;
          }

          .maps-directions-btn {
            width: 100%;
            justify-content: center;
          }

          .maps-container {
            height: 300px;
          }
        }

        @media (max-width: 480px) {
           .contact-plain-header {
             padding-top: 180px;
           }
        }
      `}</style>

      <div className="contact-plain-header">
        <div className="contact-plain-header-text">
          <span className="eyebrow">Contact</span>
          <h1>Reach the school office.</h1>
          <p>Call the school or send a quick message for admissions, visits, and general enquiries.</p>
          <p>Visit us during school hours for a direct discussion with our staff.</p>
        </div>
        <div className="contact-plain-header-img">
          <img src={kid2} alt="Hamsavahini school student" />
        </div>
      </div>

      <section className="contact-section">
        <div className="contact-card">
          <span className="eyebrow">Address</span>
          <h2>Hamsavahini School</h2>
          <address>
            {schoolDetails.address.map((line) => (
              <span key={line}>{line}</span>
            ))}
          </address>
          <div className="contact-buttons">
            <a className="phone-button" href={`tel:${schoolDetails.phone}`}>
              Phone: {schoolDetails.phone}
            </a>
            <a
              className="email-button"
              href={`https://mail.google.com/mail/?view=cm&to=${schoolDetails.email}`}
              target="_blank"
              rel="noreferrer"
            >
              Email: {schoolDetails.email}
            </a>
          </div>
        </div>

        <div className="form-card">
          <span className="eyebrow">Send message</span>
          <h2>Quick enquiry</h2>
          <form className="admission-form page-form compact-form" onSubmit={submitContactForm}>
            <label>
              Name
              <input
                name="name"
                value={formData.name}
                onChange={updateField}
                aria-invalid={Boolean(errors.name)}
                required
              />
              {errors.name && <small style={{ color: "red" }}>{errors.name}</small>}
            </label>
            <label>
              Phone
              <input
                name="phone"
                value={formData.phone}
                onChange={updateField}
                inputMode="numeric"
                maxLength="10"
                aria-invalid={Boolean(errors.phone)}
                required
              />
              {errors.phone && <small style={{ color: "red" }}>{errors.phone}</small>}
            </label>
            <label className="full-field">
              Message
              <textarea
                name="message"
                value={formData.message}
                onChange={updateField}
                rows="4"
                aria-invalid={Boolean(errors.message)}
                required
              />
              {errors.message && <small style={{ color: "red" }}>{errors.message}</small>}
            </label>
            {submitted && (
              <p style={{ color: "green", fontWeight: "bold" }} className="full-field">
                Thank you! Your message has been sent.
              </p>
            )}
            <button className="modal-submit" type="submit" style={{ width: "100%", marginTop: "10px" }}>
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* ───────────── GOOGLE MAPS SECTION ───────────── */}
      <section className="maps-section">
        <div className="maps-header">
          <div className="maps-header-text">
            <span className="eyebrow">Find Us</span>
            <h2>Visit Hamsavahini School</h2>
            <p>Click the map to open directions in Google Maps</p>
          </div>

          <a
            className="maps-directions-btn"
            href={MAPS_SEARCH_URL}
            target="_blank"
            rel="noreferrer"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polygon points="3 11 22 2 13 21 11 13 3 11" />
            </svg>
            Get Directions
          </a>
        </div>

        {/* Map container — entire map is clickable, opens Google Maps */}
        <div className="maps-container">
          <iframe
            title="Hamsavahini School Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3797.123456789!2d84.08721531484!3d18.496312587383!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3cc3a1a1a1a1a1%3A0xb1b1b1b1b1b1b1b1!2sKobbarichetla%20Peta%2C%20Jarjangi%2C%20Andhra%20Pradesh%20532195!5e0!3m2!1sen!2sin!4v1683000000000!5m2!1sen!2sin"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />

          <a
            className="maps-overlay-link"
            href={MAPS_SEARCH_URL}
            target="_blank"
            rel="noreferrer"
            aria-label="Open Hamsavahini School location in Google Maps"
          >
            <span className="maps-overlay-badge">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              Open in Google Maps
            </span>
          </a>
        </div>

        {/* Info chips below the map */}
        <div className="maps-info-strip">
          <div className="maps-info-chip">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            G42G+HP7, Jarjangi Pindruvada Rd, Kobbarichetla Peta
          </div>
          <div className="maps-info-chip">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
              <line x1="16" y1="2" x2="16" y2="6" />
              <line x1="8" y1="2" x2="8" y2="6" />
              <line x1="3" y1="10" x2="21" y2="10" />
            </svg>
            Srikakulam District, Andhra Pradesh – 532195
          </div>
          <div className="maps-info-chip">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg>
            School Hours: Mon – Sat, 9 AM – 4 PM
          </div>
        </div>
      </section>
    </PageShell>
  );
}