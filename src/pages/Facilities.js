import PageShell from "./PageShell";
import schoolCampus from "../Assets/images/girls.jpg";
// Assuming you might have a library or lab image, otherwise use a placeholder
import schoolActivity from "../Assets/images/school6.jpg"; 

const facilities = [
  { title: "Smart Classrooms", text: "Ventilated, well-lit spaces equipped with modern teaching aids to ensure every student stays engaged." },
  { title: "Digital Lab", text: "A dedicated space for computer literacy, helping students stay ahead in a tech-driven world." },
  { title: "Activity Hall", text: "Multi-purpose space for seminars, cultural workshops, and collaborative group projects." },
  { title: "Safe Transport", text: "Reliable bus services covering local routes with experienced staff and student safety protocols." },
];

export default function Facilities() {
  return (
    <PageShell className="inner-page">
      <style>{`
        /* Minimalist Split Hero */
        .facility-hero {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          min-height: 75vh;
          background: #fdfdfd;
          align-items: center;
        }

        .hero-info {
          padding: clamp(40px, 8vw, 120px);
        }

        .hero-visual {
          height: 100%;
          position: relative;
        }

        .hero-visual img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          /* Subtle organic crop */
          clip-path: polygon(10% 0%, 100% 0%, 100% 100%, 0% 100%);
        }

        .eyebrow {
          display: block;
          color: #16645f;
          font-size: 0.85rem;
          font-weight: 800;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          margin-bottom: 1.5rem;
        }

        h1 {
          font-size: clamp(2.8rem, 6vw, 4.5rem);
          color: #1e293b;
          line-height: 1.05;
          margin: 0;
        }

        .hero-p {
          font-size: 1.2rem;
          color: #64748b;
          margin-top: 2rem;
          line-height: 1.6;
          max-width: 540px;
        }

        /* Modern Feature Grid */
        .feature-section {
          padding: 100px 5vw;
          background: #ffffff;
        }

        .feature-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 30px;
          margin-top: 60px;
        }

        .feature-card {
          padding: 45px;
          background: #f8fafc;
          border-radius: 24px;
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          border: 1px solid transparent;
        }

        .feature-card:hover {
          background: #ffffff;
          border-color: #e2e8f0;
          transform: translateY(-12px);
          box-shadow: 0 30px 60px -15px rgba(22, 100, 95, 0.15);
        }

        .feature-card h3 {
          font-size: 1.5rem;
          color: #16645f;
          margin: 0 0 15px 0;
        }

        .feature-card p {
          color: #475569;
          line-height: 1.7;
          margin: 0;
        }

        /* Bottom "Signature" Section */
        .signature-section {
          padding: 100px 5vw;
          display: grid;
          grid-template-columns: 0.8fr 1.2fr;
          gap: 80px;
          align-items: center;
          background: #182231;
          color: #ffffff;
        }

        .signature-content h2 {
          font-size: clamp(2.2rem, 4vw, 3.5rem);
          line-height: 1.1;
          margin-bottom: 25px;
        }

        .signature-content p {
          font-size: 1.1rem;
          opacity: 0.8;
          line-height: 1.8;
        }

        .signature-img-wrapper {
          position: relative;
        }

        .signature-img {
          width: 100%;
          border-radius: 30px;
          box-shadow: 0 50px 100px -20px rgba(0,0,0,0.5);
        }

        @media (max-width: 1024px) {
          .facility-hero, .signature-section {
            grid-template-columns: 1fr;
          }
          .hero-visual { height: 450px; order: -1; }
          .hero-visual img { clip-path: none; }
          .signature-section { gap: 40px; }
        }
      `}</style>

      {/* NEW SPLIT HERO */}
      <section className="facility-hero">
        <div className="hero-info">
          <span className="eyebrow">The Campus</span>
          <h1>Environment Built for Achievement.</h1>
          <p className="hero-p">
            We provide more than just classrooms. Our facilities are designed to 
            inspire curiosity, encourage physical fitness, and provide a safe 
            harbor for academic growth.
          </p>
        </div>
        <div className="hero-visual">
          <img src={schoolCampus} alt="Hamsavahini Campus Aerial" />
        </div>
      </section>

      {/* CORE FEATURES */}
      <section className="feature-section">
        <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
          <span className="eyebrow">Essentials</span>
          <h2 style={{ fontSize: '2.5rem', color: '#0f172a' }}>Standard-Setting Amenities</h2>
        </div>
        
        <div className="feature-grid">
          {facilities.map((f) => (
            <article className="feature-card" key={f.title}>
              <h3>{f.title}</h3>
              <p>{f.text}</p>
            </article>
          ))}
        </div>
      </section>

      {/* DARK SIGNATURE SECTION (Replacing bottom school image) */}
      <section className="signature-section">
        <div className="signature-img-wrapper">
          <img 
            src={schoolActivity} 
            className="signature-img" 
            alt="Students engaged in laboratory activity" 
          />
        </div>
        <div className="signature-content">
          <span className="eyebrow" style={{ color: '#9ee0d9' }}>Modern Pedagogy</span>
          <h2>Where Science meets Creativity.</h2>
          <p>
            Our infrastructure supports a balanced lifestyle. Whether it's the 
            precision required in our science labs or the creative freedom in 
            our arts studio, students have the tools they need to transition 
            from learners to innovators.
          </p>
          <div style={{ marginTop: '40px', display: 'flex', gap: '30px' }}>
            <div>
              <h4 style={{ color: '#9ee0d9', fontSize: '1.5rem', margin: '0' }}>100%</h4>
              <p style={{ fontSize: '0.8rem', margin: '5px 0 0' }}>Power Backup</p>
            </div>
            <div style={{ borderLeft: '1px solid rgba(255,255,255,0.2)', paddingLeft: '30px' }}>
              <h4 style={{ color: '#9ee0d9', fontSize: '1.5rem', margin: '0' }}>24/7</h4>
              <p style={{ fontSize: '0.8rem', margin: '5px 0 0' }}>CCTV Security</p>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}