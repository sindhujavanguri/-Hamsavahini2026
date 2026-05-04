import PageShell from "./PageShell";
import schoolClass from "../Assets/images/school6.jpg";
import schoolCampus from "../Assets/images/girls.jpg";

const stats = [
  { label: "Pass Percentage", value: "99%", color: "#16645f" },
  { label: "Student-Teacher Ratio", value: "25:1", color: "#2d7a74" },
  { label: "Annual Activities", value: "40+", color: "#45918a" },
  { label: "Distinction Rate", value: "85%", color: "#5ca7a1" },
];

const milestones = [
  { grade: "Primary (I-V)", focus: "Foundational Literacy & Numeracy" },
  { grade: "Middle (VI-VIII)", focus: "Critical Thinking & Lab Exploration" },
  { grade: "Secondary (IX-X)", focus: "Board Exam Prep & Career Guidance" },
];

export default function Academics() {
  return (
    <PageShell className="inner-page">
      <style>{`
        /* Statistics Bar */
        .stats-bar {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 20px;
          background: #182231;
          padding: 60px 5vw;
          text-align: center;
        }

        .stat-item h2 {
          color: #9ee0d9;
          font-size: 3rem;
          margin: 0;
          font-weight: 800;
        }

        .stat-item p {
          color: rgba(255, 255, 255, 0.7);
          text-transform: uppercase;
          font-size: 0.8rem;
          letter-spacing: 2px;
          margin-top: 10px;
        }

        /* Milestones / Timeline */
        .milestone-container {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2px;
          background: #e2e8f0;
          border-radius: 16px;
          overflow: hidden;
          margin-top: 40px;
        }

        .milestone-card {
          background: white;
          padding: 40px;
          transition: background 0.3s ease;
        }

        .milestone-card:hover {
          background: #f0fdfa;
        }

        .grade-tag {
          background: #16645f;
          color: white;
          padding: 4px 12px;
          border-radius: 20px;
          font-size: 0.75rem;
          font-weight: 700;
        }

        /* Progress Bar Section */
        .performance-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: center;
        }

        .progress-wrapper {
          margin-bottom: 25px;
        }

        .progress-label {
          display: flex;
          justify-content: space-between;
          margin-bottom: 8px;
          font-weight: 700;
          color: #1e293b;
        }

        .progress-bg {
          background: #e2e8f0;
          height: 8px;
          border-radius: 10px;
          overflow: hidden;
        }

        .progress-fill {
          background: #16645f;
          height: 100%;
          border-radius: 10px;
        }

        @media (max-width: 900px) {
          .performance-grid, .milestone-container {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      {/* 1. HERO SECTION (Same as previous step) */}
      <section className="academic-hero" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', minHeight: '70vh', background: '#f8fafc', alignItems: 'center' }}>
        <div style={{ padding: '60px 5vw' }}>
          <span className="eyebrow" style={{ color: '#16645f', fontWeight: 800 }}>Academic Excellence</span>
          <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', lineHeight: '1.1', color: '#0f172a' }}>Proven Results. Personal Attention.</h1>
          <p style={{ fontSize: '1.1rem', color: '#475569', marginTop: '20px' }}>Our curriculum is designed to challenge students while providing the support they need to master core subjects and life skills.</p>
        </div>
        <div style={{ height: '100%' }}><img src={schoolClass} style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt="Classroom" /></div>
      </section>

      {/* 2. STATS BAR */}
      <section className="stats-bar">
        {stats.map((s) => (
          <div className="stat-item" key={s.label}>
            <h2>{s.value}</h2>
            <p>{s.label}</p>
          </div>
        ))}
      </section>

      {/* 3. ACADEMIC PERFORMANCE & PROGRESS BARS */}
      <section className="content-section" style={{ padding: '100px 5vw' }}>
        <div className="performance-grid">
          <div>
            <span className="eyebrow">Results</span>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>Competitive Performance</h2>
            <p style={{ color: '#64748b', marginBottom: '30px' }}>
              We track student growth through continuous assessment. Our students consistently 
              outperform regional averages in Mathematics and Language arts.
            </p>
            
            <div className="progress-wrapper">
              <div className="progress-label"><span>Language Arts</span><span>92%</span></div>
              <div className="progress-bg"><div className="progress-fill" style={{ width: '92%' }}></div></div>
            </div>
            <div className="progress-wrapper">
              <div className="progress-label"><span>Mathematics</span><span>88%</span></div>
              <div className="progress-bg"><div className="progress-fill" style={{ width: '88%' }}></div></div>
            </div>
            <div className="progress-wrapper">
              <div className="progress-label"><span>Science & Social</span><span>95%</span></div>
              <div className="progress-bg"><div className="progress-fill" style={{ width: '95%' }}></div></div>
            </div>
          </div>
          
          <img src={schoolCampus} alt="Students" style={{ width: '100%', borderRadius: '20px', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }} />
        </div>
      </section>

      {/* 4. LEARNING MILESTONES */}
      <section className="content-section" style={{ padding: '0 5vw 100px', background: '#f8fafc' }}>
        <div style={{ textAlign: 'center', padding: '80px 0 40px' }}>
          <span className="eyebrow">The Journey</span>
          <h2>Educational Milestones</h2>
        </div>
        
        <div className="milestone-container">
          {milestones.map((m) => (
            <div className="milestone-card" key={m.grade}>
              <span className="grade-tag">{m.grade}</span>
              <h3 style={{ marginTop: '20px', color: '#1e293b' }}>{m.focus}</h3>
              <p style={{ color: '#64748b', fontSize: '0.95rem', marginTop: '10px' }}>
                Curriculum mapped to national standards ensuring a smooth transition to higher education.
              </p>
            </div>
          ))}
        </div>
      </section>
    </PageShell>
  );
}