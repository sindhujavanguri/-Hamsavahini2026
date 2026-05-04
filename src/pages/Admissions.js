import PageShell from "./PageShell";
import AdmissionForm from "./AdmissionForm";
import schoolMain from "../Assets/images/School8.jpg";

const schoolDetails = { phone: "8008546300" };

// Document Checklist
const documents = [
  "Student's Birth Certificate (Aadhar optional)",
  "Previous School Transfer Certificate (TC)",
  "Latest Report Card / Marks Memo",
  "3 Passport-size Photographs of Student",
  "Parent's ID Proof (Aadhar/Voter ID)",
];

export default function Admissions() {
  return (
    <PageShell className="inner-page">
      <style>{`
        /* --- admissions.css --- */
        
        /* Modern Split Hero */
        .academic-hero {
          display: grid;
          grid-template-columns: 1fr 1fr;
          min-height: 70vh;
          background: #f8fafc;
          align-items: center;
        }

        .hero-text {
          padding: clamp(40px, 8vw, 100px);
        }

        .hero-image-container {
          height: 100%;
          position: relative;
          overflow: hidden;
        }

        .hero-image-container img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .eyebrow {
          color: #16645f;
          text-transform: uppercase;
          font-weight: 800;
          font-size: 0.85rem;
          letter-spacing: 0.1em;
          display: block;
          margin-bottom: 1rem;
        }

        h1 {
          font-size: clamp(2.5rem, 5vw, 4rem);
          color: #0f172a;
          line-height: 1.1;
          font-weight: 800;
        }

        .hero-p {
          font-size: 1.1rem;
          color: #475569;
          margin-top: 1.5rem;
          line-height: 1.6;
        }

        /* --- Main Content Layout --- */
        .admission-main-grid {
          display: grid;
          /* FIX: Wider Container for the overall layout */
          grid-template-columns: 1fr 1fr; 
          gap: clamp(40px, 6vw, 100px);
          padding: 100px 5vw;
          /* Increased outer max-width */
          max-width: 1600px; 
          margin: 0 auto;
          align-items: start;
        }

        /* FIX: Simplify Form Card styles so internal grid works */
        .form-wrapper-card {
          background: #ffffff;
          padding: 50px;
          border-radius: 24px;
          /* Strong shadow from screenshot */
          box-shadow: 0 40px 80px -15px rgba(0,0,0,0.1); 
          border: 1px solid #f1f5f9;
        }

        /* --- Timeline / Steps Section --- */
        .steps-container {
          display: flex;
          flex-direction: column;
          gap: 25px;
          margin: 30px 0;
        }

        .step-box {
          display: flex;
          gap: 20px;
          align-items: flex-start;
          padding: 20px;
          background: #ffffff;
          border-radius: 12px;
          border: 1px solid #e2e8f0;
          transition: transform 0.2s ease, border-color 0.2s;
        }

        .step-box:hover {
          transform: translateX(10px);
          border-color: #16645f;
        }

        .step-number {
          background: #16645f;
          color: white;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          font-weight: 800;
          margin-top: 3px;
        }

        .contact-cta-btn {
          display: inline-block;
          margin-top: 15px;
          padding: 14px 30px;
          background: #16645f;
          color: white;
          border-radius: 50px;
          text-decoration: none;
          font-weight: 700;
          font-size: 0.95rem;
          transition: opacity 0.2s;
        }

        /* --- New Content Sections --- */
        .info-band {
          background: #f8fafc;
          padding: 80px 5vw;
        }

        .doc-list {
          list-style: none;
          padding: 0;
          margin: 30px 0 0;
          display: grid;
          gap: 15px;
        }

        .doc-list li {
          display: flex;
          gap: 15px;
          align-items: center;
          color: #334155;
          font-weight: 600;
        }

        .doc-list li::before {
          content: "✓";
          color: #16645f;
          font-weight: 900;
          font-size: 1.2rem;
        }

        .calendar-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 30px;
          margin-top: 40px;
        }

        .calendar-card {
          background: white;
          padding: 30px;
          border-radius: 16px;
          border-bottom: 4px solid #e2e8f0;
        }

        .calendar-card.active {
          border-color: #d84b22;
        }

        .date-badge {
          font-size: 0.8rem;
          font-weight: 800;
          color: #16645f;
          text-transform: uppercase;
        }

        /* Responsive Breakpoints */
        @media (max-width: 1100px) {
          .academic-hero,
          .admission-main-grid {
            grid-template-columns: 1fr;
          }
          .hero-image-container { height: 350px; order: -1; }
          .form-wrapper-card { padding: 30px; }
        }
      `}</style>

      {/* Modern Hero (Using Academic Style) */}
      <section className="academic-hero">
        <div className="hero-text">
          <span className="eyebrow">Enrollment Open</span>
          <h1>Join the Hamsavahini Family.</h1>
          <p className="hero-p">
            Our admissions process is designed to be simple and transparent for 
            parents. Start your child's educational journey with us today.
          </p>
        </div>
        <div className="hero-image-container">
          <img src={schoolMain} alt="Hamsavahini School Main Entrance" />
        </div>
      </section>

      {/* Main Form & Process Section */}
      <section className="admission-main-grid">
        <div className="process-info">
          <span className="eyebrow">How to Apply</span>
          <h2 style={{ fontSize: '2.5rem', color: '#1e293b' }}>Simple Application Process</h2>
          
          <div className="steps-container">
            <div className="step-box">
              <div className="step-number">1</div>
              <div>
                <h4 style={{ margin: 0, color: '#0f172a' }}>Submit Digital Enquiry</h4>
                <p style={{ margin: '6px 0 0', color: '#64748b', fontSize: '0.95rem' }}>
                  Fill the short form on this page. Our admissions office will get in touch.
                </p>
              </div>
            </div>
            <div className="step-box">
              <div className="step-number">2</div>
              <div>
                <h4 style={{ margin: 0, color: '#0f172a' }}>School Visit & Interaction</h4>
                <p style={{ margin: '6px 0 0', color: '#64748b', fontSize: '0.95rem' }}>
                  Schedule a visit for a parent counseling session and campus tour.
                </p>
              </div>
            </div>
            <div className="step-box">
              <div className="step-number">3</div>
              <div>
                <h4 style={{ margin: 0, color: '#0f172a' }}>Document & Fee Submission</h4>
                <p style={{ margin: '6px 0 0', color: '#64748b', fontSize: '0.95rem' }}>
                  Complete the formalities by submitting documents and securing the seat.
                </p>
              </div>
            </div>
          </div>
          
          <p style={{ color: '#475569', marginTop: '20px', fontWeight: 600 }}>Need immediate assistance?</p>
          <a className="contact-cta-btn" href={`tel:${schoolDetails.phone}`}>
            Call Office: {schoolDetails.phone}
          </a>
        </div>

        {/* --- FIX: The Form Container is now wider and less restricted --- */}
        <div className="form-wrapper-card">
          <span className="eyebrow">Direct Enquiry</span>
          <h2 style={{ fontSize: '1.8rem', marginBottom: '30px' }}>Application Form</h2>
          <AdmissionForm />
        </div>
      </section>

      {/* NEW: Documents Checklist Section */}
      <section className="content-band" style={{ padding: '0 5vw 100px', maxWidth: '1400px', margin: '0 auto' }}>
        <span className="eyebrow">Preparation</span>
        <h2>Documents Required</h2>
        <p style={{ color: '#64748b', marginTop: '10px', maxWidth: '600px' }}>
          Please keep ready original copies (and 2 sets of photocopies) for verification during final admission.
        </p>
        <ul className="doc-list">
          {documents.map(doc => <li key={doc}>{doc}</li>)}
        </ul>
      </section>

      {/* NEW: Admission Calendar/Timeline */}
      <section className="info-band">
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <span className="eyebrow">Admissions 2026-27</span>
          <h2>Enrollment Roadmap</h2>
          
          <div className="calendar-grid">
            <article className="calendar-card active">
              <span className="date-badge">Phase 1 (Early Birds)</span>
              <h4 style={{ marginTop: '15px' }}>Registration Starts</h4>
              <p style={{ color: '#64748b', margin: '8px 0', fontSize: '0.9rem' }}>Enquiries accepted and counseling sessions begin.</p>
              <strong style={{ color: '#0f172a' }}>Open Now</strong>
            </article>
            
            <article className="calendar-card">
              <span className="date-badge">Phase 2 (Regular)</span>
              <h4 style={{ marginTop: '15px' }}>Assessment & Interaction</h4>
              <p style={{ color: '#64748b', margin: '8px 0', fontSize: '0.9rem' }}>Interaction sessions and aptitude diagnostics.</p>
              <strong>Starting Jan 15, 2026</strong>
            </article>

            <article className="calendar-card">
              <span className="date-badge">Phase 3 (Final)</span>
              <h4 style={{ marginTop: '15px' }}>Finalize Admission</h4>
              <p style={{ color: '#64748b', margin: '8px 0', fontSize: '0.9rem' }}>Securing seats based on waiting list.</p>
              <strong>Feb - Mar 2026</strong>
            </article>
          </div>
        </div>
      </section>
    </PageShell>
  );
}