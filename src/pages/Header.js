import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import schoolGround from "../Assets/images/School.jpeg";

const initialRegisterForm = { fullName: "", email: "", phone: "", studentClass: "", password: "" };

const schoolDetails = {
  name: "Hamsavahini School",
  phone: "8008546300",
  email: "hamsavahini.school@gmail.com", // Added email to details
};

const navItems = [
  { label: "About", path: "/about" },
  { label: "Academics", path: "/academics" },
  { label: "Admissions", path: "/admissions" },
  { label: "Facilities", path: "/facilities" },
  { label: "Gallery", path: "/gallery" },
  { label: "Contact", path: "/contact" },
];

function Header() {
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const openMobileMenu = () => setIsMobileMenuOpen(true);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <header className="site-header">
      <style>{`
        .home-page {
          min-height: 100vh;
          color: #182231;
          background: #f8faf7;
        }

        .site-header {
          position: fixed;
          top: 0;
          left: 0;
          z-index: 20;
          width: 100%;
          min-height: 114px;
          background: #ffffff;
          box-shadow: 0 10px 26px rgba(24, 34, 49, 0.1);
        }

        .top-strip {
          min-height: 36px;
          display: flex;
          align-items: center;
          background: #005f55;
          color: #ffffff;
          font-size: 0.88rem;
          font-weight: 700;
        }

        .top-strip-inner,
        .main-nav-bar {
          width: calc(100% - 40px);
          max-width: none;
          margin: 0 auto;
        }

        .top-strip-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 18px;
        }

        /* Container for phone and email on the right */
        .top-strip-contact {
          display: flex;
          gap: 20px;
          align-items: center;
        }

        .top-strip a {
          color: #ffffff;
          font: inherit;
          font-weight: 900;
          text-decoration: none;
        }

        .header-auth-actions {
          display: inline-flex;
          align-items: center;
          gap: 10px;
        }

        .header-login-link,
        .header-register-button {
          min-height: 28px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: 6px;
          padding: 0 14px;
          background: #111827;
          color: #ffffff;
          font: inherit;
          font-size: 0.92rem;
          font-weight: 900;
          text-decoration: none;
          box-shadow: 0 10px 22px rgba(17, 24, 39, 0.16);
          transition: transform 0.2s ease, background-color 0.2s ease;
        }

        .header-register-button {
          border: 0;
          cursor: pointer;
        }

        .header-login-link:hover,
        .header-login-link:focus-visible,
        .header-register-button:hover,
        .header-register-button:focus-visible {
          background: #000000;
          transform: translateY(-1px);
        }

        .main-nav-bar {
          min-height: 92px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 26px;
        }

        .brand {
          display: inline-flex;
          align-items: center;
          gap: 16px;
          margin-right: auto;
          color: #182231;
          font-weight: 800;
          text-decoration: none;
          white-space: nowrap;
        }

        .brand-logo {
          width: 74px;
          height: 74px;
          display: inline-grid;
          place-items: center;
          overflow: hidden;
          border: 2px solid #e2ebe8;
          border-radius: 50%;
          background: #ffffff;
          box-shadow: 0 10px 22px rgba(24, 34, 49, 0.1);
          flex: 0 0 auto;
        }

        .brand img {
          width: 145%;
          height: 145%;
          object-fit: contain;
        }

        .brand span {
          font-size: clamp(1.15rem, 1.65vw, 1.55rem);
        }

        .desktop-nav {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: clamp(12px, 2vw, 28px);
          flex: 0 1 auto;
          margin-left: auto;
        }

        .desktop-nav a {
          color: #334155;
          font-size: 0.95rem;
          font-weight: 700;
          text-decoration: none;
        }

        .desktop-nav a:hover,
        .desktop-nav a:focus-visible,
        .desktop-nav a.active {
          color: #16645f;
        }

        .header-call,
        .primary-button,
        .secondary-button,
        .floating-enquiry {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 46px;
          border-radius: 6px;
          padding: 0 20px;
          font-weight: 800;
          text-decoration: none;
          transition: transform 0.2s ease, box-shadow 0.2s ease, background-color 0.2s ease;
        }

        .header-call,
        .primary-button,
        .floating-enquiry {
          color: #ffffff;
          background: #d84b22;
          box-shadow: 0 14px 28px rgba(216, 75, 34, 0.24);
        }

        .secondary-button {
          color: #ffffff;
          border: 1px solid rgba(255, 255, 255, 0.62);
          background: rgba(255, 255, 255, 0.12);
        }

        .header-call:hover,
        .primary-button:hover,
        .secondary-button:hover {
          transform: translateY(-2px);
        }

        .floating-enquiry {
          position: fixed;
          right: 24px;
          bottom: 24px;
          z-index: 60;
          min-height: 54px;
          padding: 0 24px;
          border-radius: 999px;
          text-transform: uppercase;
          letter-spacing: 0.03em;
          animation: enquiry-float 1.4s ease-in-out infinite;
        }

        @keyframes enquiry-float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }

        .modal-backdrop {
          position: fixed;
          inset: 0;
          z-index: 80;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 22px;
          background: rgba(11, 23, 39, 0.68);
        }

        .admission-modal {
          position: relative;
          width: min(640px, 100%);
          max-height: calc(100vh - 44px);
          overflow-y: auto;
          padding: clamp(24px, 4vw, 38px);
          border: 1px solid rgba(255, 255, 255, 0.7);
          border-radius: 14px;
          background: #ffffff;
          box-shadow: 0 28px 80px rgba(0, 0, 0, 0.28);
        }

        .modal-close {
          position: absolute;
          top: 16px;
          right: 16px;
          width: 36px;
          height: 36px;
          border: 0;
          border-radius: 6px;
          background: #eef5f2;
          color: #182231;
          cursor: pointer;
          font-size: 1.25rem;
          font-weight: 900;
          line-height: 1;
        }

        .admission-modal h2 {
          margin: 10px 42px 0 0;
          color: #182231;
          font-size: clamp(1.9rem, 4vw, 3rem);
          line-height: 1.05;
        }

        .register-backdrop {
          z-index: 90;
        }

        .register-modal {
          width: min(620px, 100%);
        }

        .admission-form {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 18px;
          margin-top: 28px;
        }

        .compact-form {
          grid-template-columns: 1fr;
        }

        .page-form {
          margin-top: 26px;
        }

        .admission-form label {
          display: grid;
          gap: 8px;
          color: #334155;
          font-weight: 800;
        }

        .admission-form input,
        .admission-form textarea {
          width: 100%;
          border: 1px solid #ccd8d4;
          border-radius: 8px;
          padding: 13px 14px;
          color: #182231;
          font: inherit;
          outline: none;
          resize: vertical;
        }

        .admission-form input:focus,
        .admission-form textarea:focus {
          border-color: #5aa9ad;
          box-shadow: 0 0 0 3px rgba(90, 169, 173, 0.18);
        }

        .admission-form input[aria-invalid="true"],
        .admission-form textarea[aria-invalid="true"] {
          border-color: #d84b22;
        }

        .admission-form small {
          color: #c63f18;
          font-size: 0.82rem;
          font-weight: 800;
        }

        .password-field {
          position: relative;
          display: block;
        }

        .password-field input {
          padding-right: 48px;
        }

        .password-toggle {
          position: absolute;
          top: 50%;
          right: 8px;
          display: inline-grid;
          width: 34px;
          height: 34px;
          place-items: center;
          border: 0;
          border-radius: 6px;
          background: transparent;
          color: #182231;
          cursor: pointer;
          transform: translateY(-50%);
        }

        .password-toggle svg {
          width: 20px;
          height: 20px;
          fill: none;
          stroke: currentColor;
          stroke-linecap: round;
          stroke-linejoin: round;
          stroke-width: 2;
        }

        .full-field,
        .modal-submit {
          grid-column: 1 / -1;
        }

        .form-success {
          margin: 0;
          padding: 12px 14px;
          border-radius: 8px;
          background: #e8f6ef;
          color: #16645f;
          font-weight: 800;
        }

        .modal-submit {
          min-height: 48px;
          border: 0;
          border-radius: 8px;
          background: #d84b22;
          color: #ffffff;
          cursor: pointer;
          font: inherit;
          font-weight: 900;
          box-shadow: 0 14px 28px rgba(216, 75, 34, 0.24);
        }

        .hamburger-btn {
          display: none;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 5px;
          width: 42px;
          height: 42px;
          border: 0;
          border-radius: 8px;
          background: transparent;
          cursor: pointer;
          padding: 6px;
          z-index: 30;
        }

        .hamburger-btn span {
          display: block;
          width: 24px;
          height: 2.5px;
          background: #182231;
          border-radius: 2px;
        }

        .mobile-menu-overlay {
          display: none;
          position: fixed;
          inset: 0;
          z-index: 25;
          background: rgba(11, 23, 39, 0.52);
          opacity: 0;
          transition: opacity 0.35s ease;
          pointer-events: none;
        }

        .mobile-menu-overlay.open {
          opacity: 1;
          pointer-events: all;
        }

        .mobile-drawer {
          position: fixed;
          top: 0;
          left: 0;
          z-index: 26;
          width: min(300px, 82vw);
          height: 100vh;
          background: #ffffff;
          box-shadow: 8px 0 40px rgba(24, 34, 49, 0.18);
          transform: translateX(-100%);
          transition: transform 0.38s cubic-bezier(0.4, 0, 0.2, 1);
          display: flex;
          flex-direction: column;
          overflow-y: auto;
          padding: 0 0 32px;
        }

        .mobile-drawer.open {
          transform: translateX(0);
        }

        .mobile-drawer-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 18px 20px 14px;
          border-bottom: 1px solid #e8f0ed;
          min-height: 64px;
        }

        .mobile-drawer-brand {
          display: flex;
          align-items: center;
          gap: 12px;
          text-decoration: none;
          color: #182231;
          font-weight: 800;
          font-size: 1rem;
          line-height: 1.15;
        }

        .mobile-drawer-brand .brand-logo {
          width: 44px;
          height: 44px;
          box-shadow: none;
        }

        .mobile-drawer-brand img {
          width: 145%;
          height: 145%;
          object-fit: contain;
        }

        .mobile-drawer-close {
          width: 34px;
          height: 34px;
          border: 0;
          border-radius: 6px;
          background: #eef5f2;
          color: #182231;
          cursor: pointer;
          font-size: 1.35rem;
          font-weight: 900;
          line-height: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .mobile-drawer-nav {
          display: flex;
          flex-direction: column;
          padding: 10px 0;
          flex: 1;
        }

        .mobile-drawer-nav a {
          display: flex;
          align-items: center;
          padding: 14px 24px;
          color: #334155;
          font-size: 1rem;
          font-weight: 700;
          text-decoration: none;
          border-left: 3px solid transparent;
          transition: background 0.18s, color 0.18s, border-color 0.18s;
        }

        .mobile-drawer-nav a:hover,
        .mobile-drawer-nav a.active {
          background: #eef5f2;
          color: #16645f;
          border-left-color: #16645f;
        }

        .mobile-drawer-auth {
          display: flex;
          gap: 10px;
          padding: 16px 24px 0;
          border-top: 1px solid #e8f0ed;
          margin-top: auto;
        }

        .mobile-drawer-login,
        .mobile-drawer-register {
          flex: 1;
          min-height: 42px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: 6px;
          background: #111827;
          color: #ffffff;
          font-size: 0.92rem;
          font-weight: 900;
          text-decoration: none;
          border: 0;
          cursor: pointer;
          font: inherit;
          transition: background 0.2s;
        }

        .mobile-drawer-login:hover,
        .mobile-drawer-register:hover {
          background: #000000;
        }

        @media (max-width: 980px) {
          .site-header {
            position: absolute;
            min-height: 0;
          }

          .top-strip-inner,
          .main-nav-bar {
            width: calc(100% - 28px);
          }

          .main-nav-bar {
            flex-wrap: wrap;
            gap: 12px;
            padding: 12px 0;
          }

          .desktop-nav {
            display: none;
          }

          .hamburger-btn {
            display: flex;
          }

          .header-auth-actions {
            display: none;
          }

          .header-call {
            min-height: 42px;
            padding: 0 14px;
          }

          .floating-enquiry {
            right: 18px;
            bottom: 18px;
          }

          .admission-form {
            grid-template-columns: 1fr;
          }

          .mobile-menu-overlay {
            display: block;
          }
        }

        @media (max-width: 620px) {
          .top-strip {
            min-height: 56px;
          }

          .top-strip-inner {
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
            gap: 3px;
          }

          .top-strip-contact {
            flex-direction: column;
            align-items: flex-start;
            gap: 2px;
          }

          .brand span {
            max-width: 180px;
            white-space: normal;
            line-height: 1.1;
          }

          .header-call {
            width: 100%;
          }

          .floating-enquiry {
            right: 14px;
            bottom: 14px;
            min-height: 48px;
            padding: 0 18px;
            font-size: 0.84rem;
          }
        }
      `}</style>

      <div className="top-strip">
        <div className="top-strip-inner">
          <span>Best learning environment for every child.</span>
          {/* Contact group on top right */}
          <div className="top-strip-contact">
            <a href={`tel:${schoolDetails.phone}`}>Phone: {schoolDetails.phone}</a>
            {/* Direct Gmail link to avoid local Outlook popups */}
            <a 
              href={`https://mail.google.com/mail/?view=cm&fs=1&to=${schoolDetails.email}`} 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Email school"
            >
              Email: {schoolDetails.email}
            </a>
          </div>
        </div>
      </div>

      <div className="main-nav-bar">
        <Link className="brand" to="/" aria-label="Hamsavahini School home">
          <span className="brand-logo">
            <img src={schoolGround} alt="Hamsavahini School" />
          </span>
          <span>{schoolDetails.name}</span>
        </Link>

        <nav className="desktop-nav" aria-label="Main navigation">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) => (isActive ? "active" : undefined)}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="header-auth-actions">
          <Link className="header-login-link" to="/login">Login</Link>
          <button className="header-register-button" type="button" onClick={() => setIsRegisterOpen(true)}>Register</button>
        </div>

        <button
          className="hamburger-btn"
          type="button"
          onClick={openMobileMenu}
          aria-label="Open menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <div
        className={`mobile-menu-overlay${isMobileMenuOpen ? " open" : ""}`}
        onClick={closeMobileMenu}
        aria-hidden="true"
      />

      <div
        className={`mobile-drawer${isMobileMenuOpen ? " open" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
      >
        <div className="mobile-drawer-header">
          <Link className="mobile-drawer-brand" to="/" onClick={closeMobileMenu}>
            <span className="brand-logo">
              <img src={schoolGround} alt="Hamsavahini School" />
            </span>
            <span>{schoolDetails.name}</span>
          </Link>
          <button
            className="mobile-drawer-close"
            type="button"
            onClick={closeMobileMenu}
            aria-label="Close menu"
          >
            ×
          </button>
        </div>

        <nav className="mobile-drawer-nav" aria-label="Mobile navigation">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) => (isActive ? "active" : undefined)}
              onClick={closeMobileMenu}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="mobile-drawer-auth">
          <Link className="mobile-drawer-login" to="/login" onClick={closeMobileMenu}>Login</Link>
          <button
            className="mobile-drawer-register"
            type="button"
            onClick={() => { closeMobileMenu(); setIsRegisterOpen(true); }}
          >
            Register
          </button>
        </div>
      </div>

      {isRegisterOpen && <RegisterModal onClose={() => setIsRegisterOpen(false)} />}
    </header>
  );
}


function RegisterModal({ onClose }) {
  const [formData, setFormData] = useState(initialRegisterForm);
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const updateField = (event) => {
    const { name, value } = event.target;
    let nextValue = value;
    let fieldError = "";
    if (name === "fullName") { nextValue = value.replace(/[^A-Za-z\s]/g, ""); if (nextValue !== value) fieldError = "Full name can contain letters and spaces only."; }
    if (name === "phone") { nextValue = value.replace(/\D/g, "").slice(0, 10); if (nextValue !== value) fieldError = "Phone can contain numbers only."; }
    setFormData((current) => ({ ...current, [name]: nextValue }));
    setErrors((current) => ({ ...current, [name]: fieldError }));
    setSubmitted(false);
  };

  const submitRegisterForm = (event) => {
    event.preventDefault();
    const nextErrors = {};
    const trimmedName = formData.fullName.trim();
    const trimmedPhone = formData.phone.trim();
    if (!trimmedName) { nextErrors.fullName = "Full name is required."; } else if (!/^[A-Za-z\s]+$/.test(trimmedName)) { nextErrors.fullName = "Full name can contain letters and spaces only."; }
    if (!formData.email.trim()) nextErrors.email = "Email is required.";
    if (!trimmedPhone) { nextErrors.phone = "Phone number is required."; } else if (!/^\d{10}$/.test(trimmedPhone)) { nextErrors.phone = "Enter a valid 10 digit phone number."; }
    if (!formData.studentClass.trim()) nextErrors.studentClass = "Student class is required.";
    if (!formData.password.trim()) nextErrors.password = "Password is required.";
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) { setSubmitted(false); return; }
    setFormData(initialRegisterForm);
    setSubmitted(true);
    setShowPassword(false);
  };

  return (
    <div className="modal-backdrop register-backdrop" role="presentation">
      <div className="admission-modal register-modal" role="dialog" aria-modal="true">
        <button className="modal-close" type="button" onClick={onClose} aria-label="Close">×</button>
        <span className="eyebrow">Register</span>
        <h2>Create account</h2>
        <form className="admission-form page-form" onSubmit={submitRegisterForm} noValidate>
          <label>Full Name<input name="fullName" value={formData.fullName} onChange={updateField} aria-invalid={Boolean(errors.fullName)} required />{errors.fullName && <small>{errors.fullName}</small>}</label>
          <label>Email<input type="email" name="email" value={formData.email} onChange={updateField} aria-invalid={Boolean(errors.email)} required />{errors.email && <small>{errors.email}</small>}</label>
          <label>Phone Number<input type="tel" name="phone" value={formData.phone} onChange={updateField} inputMode="numeric" maxLength="10" aria-invalid={Boolean(errors.phone)} required />{errors.phone && <small>{errors.phone}</small>}</label>
          <label>Student Class<input name="studentClass" value={formData.studentClass} onChange={updateField} placeholder="Example: 5th Class" aria-invalid={Boolean(errors.studentClass)} required />{errors.studentClass && <small>{errors.studentClass}</small>}</label>
          <label className="full-field">Password
            <span className="password-field">
              <input type={showPassword ? "text" : "password"} name="password" value={formData.password} onChange={updateField} aria-invalid={Boolean(errors.password)} required />
              <button className="password-toggle" type="button" onClick={() => setShowPassword((current) => !current)} aria-label={showPassword ? "Hide password" : "Show password"}>
                {showPassword ? (
                  <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 3l18 18" /><path d="M10.6 10.6A2 2 0 0 0 13.4 13.4" /><path d="M9.9 4.3A10.6 10.6 0 0 1 12 4c5 0 8.7 4.4 10 8a12.3 12.3 0 0 1-3 4.6" /><path d="M6.6 6.7A12.3 12.3 0 0 0 2 12c1.3 3.6 5 8 10 8a10.4 10.4 0 0 0 4.2-.9" /></svg>
                ) : (
                  <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12z" /><circle cx="12" cy="12" r="3" /></svg>
                )}
              </button>
            </span>
            {errors.password && <small>{errors.password}</small>}
          </label>
          {submitted && (<p className="form-success full-field">Registration details submitted successfully.</p>)}
          <button className="modal-submit" type="submit">Register</button>
        </form>
      </div>
    </div>
  );
}

export default Header;
