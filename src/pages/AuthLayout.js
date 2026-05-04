import schoolLogo from "../Assets/images/School.jpeg";

export default function AuthLayout({ title, subtitle, children, toastMessage = "" }) {
  return (
    <div className="auth-page">
      <style>{`
        .auth-page {
          min-height: 100vh;
          display: grid;
          place-items: center;
          padding: 32px 18px;
          background: #005f55;
          color: #172033;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif;
        }

        .auth-card {
          width: min(430px, 100%);
          padding: 34px;
          border: 1px solid rgba(255, 255, 255, 0.74);
          border-radius: 18px;
          background: rgba(255, 255, 255, 0.96);
          box-shadow: 0 30px 80px rgba(8, 23, 42, 0.28);
          text-align: center;
        }

        .auth-logo-frame {
          width: 104px;
          height: 104px;
          display: grid;
          place-items: center;
          margin: 0 auto 18px;
          overflow: hidden;
          border: 4px solid #ffffff;
          border-radius: 50%;
          background: #ffffff;
          box-shadow: 0 16px 36px rgba(15, 77, 72, 0.2);
        }

        .auth-logo-frame img {
          width: 148%;
          height: 148%;
          object-fit: contain;
        }

        .auth-school-name {
          margin: 0 0 8px;
          color: #005f55;
          font-size: 0.86rem;
          font-weight: 900;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        .auth-card h2 {
          margin: 0;
          color: #172033;
          font-size: clamp(1.8rem, 4vw, 2.25rem);
          line-height: 1.05;
        }

        .auth-subtext {
          margin: 12px 0 24px;
          color: #5b6678;
          font-size: 0.95rem;
          line-height: 1.45;
        }

        .auth-form {
          display: grid;
          gap: 14px;
          text-align: left;
        }

        .auth-form input {
          width: 100%;
          min-height: 48px;
          border: 1px solid #ccd8d4;
          border-radius: 8px;
          padding: 0 14px;
          color: #172033;
          font: inherit;
          outline: none;
          background: #ffffff;
        }

        .auth-form input:focus {
          border-color: #5aa9ad;
          box-shadow: 0 0 0 4px rgba(90, 169, 173, 0.18);
        }

        .auth-form input[aria-invalid="true"] {
          border-color: #d84b22;
          box-shadow: 0 0 0 4px rgba(216, 75, 34, 0.12);
        }

        .auth-error {
          margin: -6px 0 0;
          color: #c63f18;
          font-size: 0.82rem;
          font-weight: 800;
        }

        .auth-success-message {
          margin: -4px 0 0;
          padding: 11px 12px;
          border: 1px solid rgba(0, 95, 85, 0.22);
          border-radius: 8px;
          background: rgba(0, 95, 85, 0.08);
          color: #005f55;
          font-size: 0.88rem;
          font-weight: 900;
          text-align: center;
        }

        .auth-button {
          width: 100%;
          min-height: 48px;
          border: 0;
          border-radius: 8px;
          background: #d84b22;
          color: #ffffff;
          cursor: pointer;
          font: inherit;
          font-weight: 900;
          box-shadow: 0 14px 28px rgba(216, 75, 34, 0.22);
          transition: transform 0.2s ease, background-color 0.2s ease, box-shadow 0.2s ease;
        }

        .auth-button:hover,
        .auth-button:focus-visible {
          background: #c74613;
          box-shadow: 0 18px 34px rgba(216, 75, 34, 0.3);
          transform: translateY(-2px);
        }

        .auth-links {
          margin: 18px 0 0;
          color: #5b6678;
          font-size: 0.94rem;
          text-align: center;
        }

        .auth-links a {
          color: #005f55;
          font-weight: 800;
          text-decoration: none;
        }

        .auth-links a:hover,
        .auth-links a:focus-visible {
          text-decoration: underline;
        }

        .auth-success-toast {
          position: fixed;
          top: 24px;
          right: 24px;
          z-index: 100;
          max-width: min(360px, calc(100vw - 32px));
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 14px 16px;
          border: 1px solid rgba(255, 255, 255, 0.65);
          border-radius: 10px;
          background: #ffffff;
          color: #005f55;
          font-weight: 900;
          box-shadow: 0 18px 42px rgba(8, 23, 42, 0.22);
          animation: authToastEnter 0.28s ease-out;
        }

        .auth-success-toast::before {
          content: "";
          width: 22px;
          height: 22px;
          flex: 0 0 auto;
          border-radius: 50%;
          background: #005f55;
          box-shadow: inset 0 0 0 6px #ffffff;
          outline: 2px solid #005f55;
        }

        @keyframes authToastEnter {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (max-width: 520px) {
          .auth-card {
            padding: 28px 22px;
          }

          .auth-success-toast {
            top: 14px;
            right: 14px;
            left: 14px;
            max-width: none;
          }
        }
      `}</style>

      {toastMessage && (
        <div className="auth-success-toast" role="status" aria-live="polite">
          {toastMessage}
        </div>
      )}

      <section className="auth-card" aria-label={title}>
        <div className="auth-logo-frame">
          <img src={schoolLogo} alt="Hamsavahini School" />
        </div>
        <p className="auth-school-name">Hamsavahini School</p>
        <h2>{title}</h2>
        <p className="auth-subtext">{subtitle}</p>
        {children}
      </section>
    </div>
  );
}
