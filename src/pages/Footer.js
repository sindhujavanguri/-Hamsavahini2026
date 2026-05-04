import { Link } from "react-router-dom";
import schoolGround from "../Assets/images/School.jpeg";

const schoolDetails = {
  name: "Hamsavahini School",
  phone: "8008546300",
  email: "hamsavahini.school@gmail.com",
  location: "Kobbarichetlapeta, Srikakulam",
};

const navItems = [
  { label: "About", path: "/about" },
  { label: "Academics", path: "/academics" },
  { label: "Admissions", path: "/admissions" },
  { label: "Facilities", path: "/facilities" },
  { label: "Gallery", path: "/gallery" },
  { label: "Contact", path: "/contact" },
];

function Footer() {
  return (
    <footer className="site-footer">
      <style>{`
        .site-footer {
          padding: clamp(46px, 6vw, 76px) clamp(18px, 5vw, 76px) 24px;
          background: #111927;
          color: rgba(255, 255, 255, 0.82);
        }

        .footer-main {
          display: grid;
          grid-template-columns: minmax(340px, 1.35fr) minmax(220px, 0.75fr) minmax(220px, 0.75fr);
          gap: clamp(28px, 4vw, 58px);
          width: min(1180px, 100%);
          margin: 0 auto;
        }

        .footer-school {
          display: grid;
          grid-template-columns: 190px minmax(0, 1fr);
          gap: 22px;
          align-items: center;
        }

        .footer-school img {
          width: 190px;
          height: 142px;
          border: 4px solid rgba(255, 255, 255, 0.14);
          border-radius: 8px;
          object-fit: cover;
        }

        .footer-school strong {
          display: block;
          color: #ffffff;
          font-size: clamp(1.45rem, 2.4vw, 2rem);
          line-height: 1.12;
        }

        .footer-school p {
          margin: 14px 0 0;
          color: rgba(255, 255, 255, 0.76);
          line-height: 1.7;
        }

        .footer-column h2 {
          margin: 0 0 16px;
          color: #ffffff;
          font-size: 1rem;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        .footer-column a,
        .footer-column span,
        .footer-links a,
        .footer-bottom a {
          color: rgba(255, 255, 255, 0.82);
          font-weight: 800;
          line-height: 1.55;
          overflow-wrap: anywhere;
          text-decoration: none;
        }

        .footer-column,
        .footer-links {
          display: grid;
          align-content: start;
          gap: 10px;
        }

        .footer-bottom {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          gap: 10px 22px;
          width: min(1180px, 100%);
          margin: 34px auto 0;
          padding-top: 22px;
          border-top: 1px solid rgba(255, 255, 255, 0.12);
          color: rgba(255, 255, 255, 0.66);
          font-size: 0.92rem;
          font-weight: 700;
        }

        @media (max-width: 980px) {
          .footer-main {
            grid-template-columns: 1fr;
          }

          .footer-school {
            grid-template-columns: 160px minmax(0, 1fr);
          }

          .footer-school img {
            width: 160px;
            height: 126px;
          }
        }

        @media (max-width: 620px) {
          .footer-school {
            grid-template-columns: 1fr;
          }

          .footer-school img {
            width: 100%;
            height: 220px;
          }

          .footer-bottom {
            justify-content: flex-start;
          }
        }
      `}</style>
      <div className="footer-main">
        <div className="footer-school">
          <img src={schoolGround} alt="Hamsavahini School building" />
          <div>
            <strong>{schoolDetails.name}</strong>
            <p>A caring school in Kobbarichetlapeta, Srikakulam, supporting children with academics, discipline, activities, and community values.</p>
          </div>
        </div>
        <div className="footer-column">
          <h2>Contact</h2>
          <a href={`tel:${schoolDetails.phone}`}>Phone: {schoolDetails.phone}</a>
        <a href={`https://mail.google.com/mail/?view=cm&to=${schoolDetails.email}`} target="_blank" rel="noreferrer">Mail: {schoolDetails.email}</a>
          <span>{schoolDetails.location}</span>
        </div>
        <div className="footer-column">
          <h2>Tabs</h2>
          <nav className="footer-links" aria-label="Footer navigation">
            {navItems.map((item) => (
              <Link key={item.path} to={item.path}>{item.label}</Link>
            ))}
          </nav>
        </div>
      </div>
      <div className="footer-bottom">
        <span>{schoolDetails.name}</span>
        <span>Near Jarjangi Post, Kobbarichetlapeta Village</span>
        <a href={`tel:${schoolDetails.phone}`}>Enquiry: {schoolDetails.phone}</a>
      </div>
    </footer>
  );
}



export default Footer;
