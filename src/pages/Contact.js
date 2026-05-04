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
          /* Increased top padding to clear fixed headers */
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

        /* --- MOBILE MEDIA QUERIES --- */
        @media (max-width: 768px) {
          .contact-plain-header {
            flex-direction: column;
            text-align: center;
            padding-top: 160px; /* Specific fix for the top content missing */
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
            align-items: stretch; /* Buttons take full width on mobile */
          }
        }

        @media (max-width: 480px) {
           .contact-plain-header {
             padding-top: 180px; /* Extra space for the very tall green top-bar in your screenshot */
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
            <a className="email-button" href={`https://mail.google.com/mail/?view=cm&to=${schoolDetails.email}`} target="_blank" rel="noreferrer">
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
              {errors.name && <small style={{color: 'red'}}>{errors.name}</small>}
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
              {errors.phone && <small style={{color: 'red'}}>{errors.phone}</small>}
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
              {errors.message && <small style={{color: 'red'}}>{errors.message}</small>}
            </label>
            {submitted && <p style={{color: 'green', fontWeight: 'bold'}} className="full-field">Thank you! Your message has been sent.</p>}
            <button className="modal-submit" type="submit" style={{width: '100%', marginTop: '10px'}}>
              Send Message
            </button>
          </form>
        </div>
      </section>
    </PageShell>
  );
}