import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PageShell from "./PageShell";

// Assets
import schoolMain from "../Assets/images/School8.jpg";
import schoolFront from "../Assets/images/School3.jpg";
import schoolCampus from "../Assets/images/girls.jpg";
import schoolBlock from "../Assets/images/School2.avif";
import kid1 from "../Assets/images/kid1.jpg";
import kid2 from "../Assets/images/kid2.jpg";
import kid3 from "../Assets/images/kid3.jpg";
import kid4 from "../Assets/images/kid4.jpg";

const stats = [
  { label: "Happy Students", value: 500, suffix: "+" },
  { label: "Expert Teachers", value: 25, suffix: "" },
  { label: "Years of Excellence", value: 15, suffix: "+" },
  { label: "Board Pass Rate", value: 100, suffix: "%" },
];

const faqData = [
  {
    question: "What are the school timings?",
    answer: "Our school runs from 9:00 AM to 4:00 PM, Monday through Saturday. Kindergarten timings may vary slightly."
  },
  {
    question: "Do you provide school transport?",
    answer: "Yes, we operate safe school buses and vans covering Kobbarichetlapeta and nearby villages."
  },
  {
    question: "What is the medium of instruction?",
    answer: "We follow an English Medium curriculum with equal importance given to regional language and communication skills."
  },
  {
    question: "How can I apply for admission?",
    answer: "You can visit our campus for a physical form or click the Admission Info button to learn about the required documents."
  }
];

const features = [
  {
    title: "Safe Environment",
    desc: "A peaceful campus located away from city noise, perfect for concentration.",
    icon: "🛡️"
  },
  {
    title: "Digital Learning",
    desc: "We use modern tools and visual aids to make complex subjects easy to learn.",
    icon: "💻"
  },
  {
    title: "Character Building",
    desc: "Focus on discipline, respect, and traditional values in every student.",
    icon: "🌟"
  }
];

const learningSections = [
  {
    title: "Daily Learning",
    desc: "Students build strong basics through regular reading, writing, numeracy, and classroom practice. Teachers focus on clear understanding, discipline, and steady progress.",
    image: schoolFront,
    alt: "Students learning in a classroom"
  },
  {
    title: "Sports & Activities",
    desc: "Outdoor play, school activities, assemblies, and celebrations help children grow with confidence, teamwork, and healthy participation beyond textbooks.",
    image: schoolCampus,
    alt: "Students participating in school activities"
  },
  {
    title: "A Trusted Local Institution",
    desc: "Hamsavahini School supports families from Kobbarichetlapeta and nearby villages with caring teachers, practical learning spaces, and close community connection.",
    image: schoolBlock,
    alt: "Hamsavahini School building"
  }
];

export const achievers = [
  {
    src: kid1,
    name: "Lilly",
    badge: "🏆 Top of Year 2024",
    badgeColor: "#b8860b",
    badgeBg: "#fffbea",
    desc: "Ranked 1st in the entire school with outstanding scores in all subjects.",
  },
  {
    src: kid2,
    name: "Vijay",
    badge: "🌟 Village Topper",
    badgeColor: "#16645f",
    badgeBg: "#e6f7f5",
    desc: "Highest marks from Kobbarichetlapeta village — a true inspiration for peers.",
  },
  {
    src: kid3,
    name: "Nani",
    badge: "📚 Best in Science",
    badgeColor: "#1a4fa0",
    badgeBg: "#e8f0fb",
    desc: "Perfect score in Science and represented school at district-level Olympiad.",
  },
  {
    src: kid4,
    name: "Tharun",
    badge: "🎖️ Merit Scholarship",
    badgeColor: "#7b2d8b",
    badgeBg: "#f6eafb",
    desc: "Awarded state merit scholarship for exceptional academic performance in 2024.",
  },
];

function AnimatedStat({ value, suffix }) {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    let frameId;
    const duration = 1500;
    const startedAt = performance.now();

    const animate = (currentTime) => {
      const progress = Math.min((currentTime - startedAt) / duration, 1);
      const easedProgress = 1 - Math.pow(1 - progress, 3);

      setDisplayValue(Math.round(value * easedProgress));

      if (progress < 1) {
        frameId = requestAnimationFrame(animate);
      }
    };

    frameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(frameId);
  }, [value]);

  return (
    <>
      {displayValue}
      {suffix}
    </>
  );
}

export default function Home() {
  const [activeFaq, setActiveFaq] = useState(null);

  return (
    <PageShell>
      <style>{`
        /* --- Hero --- */
        .hero-v3 {
          position: relative;
          min-height: 90vh;
          display: flex;
          align-items: center;
          padding: 120px clamp(18px, 5vw, 80px) 60px;
          background: #0b1727;
          overflow: hidden;
        }
        .hero-bg-img { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; opacity: 0.5; }
        .hero-content-box { position: relative; z-index: 5; max-width: 800px; color: white; }
        .hero-content-box h1 { font-size: clamp(2.8rem, 6vw, 5rem); line-height: 1.1; font-weight: 950; margin-bottom: 20px; }

        /* --- Stats Bar (Compact) --- */
        .stats-bar {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
          background: #16645f;
          padding: 30px 20px;
          color: white;
          text-align: center;
          gap: 20px;
        }
        .stat-item h2 { font-size: 2.2rem; color: #5aa9ad; margin-bottom: 2px; font-weight: 800; }
        .stat-item p { font-weight: 600; text-transform: uppercase; font-size: 0.75rem; opacity: 0.8; }

        /* --- Image and Content Rows --- */
        .learning-section {
          padding: 90px clamp(18px, 5vw, 80px);
          background: #ffffff;
        }
        .learning-row {
          display: flex;
          align-items: center;
          gap: clamp(28px, 5vw, 72px);
          max-width: 1180px;
          margin: 0 auto 72px;
        }
        .learning-row:last-child {
          margin-bottom: 0;
        }
        .learning-row.reverse {
          flex-direction: row-reverse;
        }
        .learning-image,
        .learning-content {
          flex: 1 1 0;
        }
        .learning-image img {
          width: 100%;
          height: 420px;
          display: block;
          object-fit: cover;
          border-radius: 8px;
          box-shadow: 0 22px 50px rgba(24, 34, 49, 0.14);
        }
        .learning-content h2 {
          margin: 0;
          color: #182231;
          font-size: clamp(2rem, 4vw, 3.4rem);
          line-height: 1.05;
        }
        .learning-content p {
          margin: 22px 0 0;
          color: #526171;
          font-size: 1.08rem;
          line-height: 1.8;
        }

        /* --- Info Cards --- */
        .info-cards-section { padding: 80px clamp(18px, 5vw, 80px); background: #f1f5f9; text-align: center; }
        .info-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 25px; margin-top: 50px; }
        .info-card { background: white; padding: 40px; border-radius: 16px; box-shadow: 0 4px 20px rgba(0,0,0,0.05); }

        /* --- Achievers Section --- */
        .achievers-section {
          padding: 80px clamp(18px, 5vw, 80px);
          background: #ffffff;
          text-align: center;
        }
        .achievers-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
          margin-top: 48px;
          max-width: 1180px;
          margin-left: auto;
          margin-right: auto;
        }
        .achiever-card {
          background: #ffffff;
          border-radius: 18px;
          border: 1px solid #e2eae7;
          overflow: hidden;
          box-shadow: 0 6px 24px rgba(24, 34, 49, 0.07);
          transition: transform 0.28s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.28s ease, border-color 0.22s ease;
          cursor: default;
          text-align: left;
        }
        .achiever-card:hover {
          transform: translateY(-10px) scale(1.025);
          box-shadow: 0 28px 56px rgba(24, 34, 49, 0.16);
          border-color: #5aa9ad;
        }
        .achiever-card-img {
          width: 100%;
          height: 220px;
          object-fit: cover;
          display: block;
          transition: transform 0.36s ease;
        }
        .achiever-card:hover .achiever-card-img {
          transform: scale(1.04);
        }
        .achiever-card-img-wrap {
          overflow: hidden;
          position: relative;
        }
        .achiever-card-body {
          padding: 18px 20px 22px;
        }
        .achiever-badge {
          display: inline-block;
          font-size: 0.75rem;
          font-weight: 800;
          letter-spacing: 0.03em;
          padding: 5px 12px;
          border-radius: 999px;
          margin-bottom: 10px;
        }
        .achiever-name {
          font-size: 1.08rem;
          font-weight: 800;
          color: #182231;
          margin: 0 0 7px;
        }
        .achiever-desc {
          font-size: 0.88rem;
          color: #526171;
          line-height: 1.65;
          margin: 0;
        }

        @media (max-width: 980px) {
          .achievers-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 540px) {
          .achievers-grid {
            grid-template-columns: 1fr;
          }
        }

        /* --- FAQ Accordion --- */
        .faq-section { padding: 80px clamp(18px, 5vw, 80px); background: #fff; }
        .faq-container { max-width: 800px; margin: 40px auto 0; }
        .faq-item { border: 1px solid #e2e8f0; border-radius: 12px; margin-bottom: 15px; overflow: hidden; }
        .faq-question { width: 100%; padding: 20px 25px; text-align: left; background: none; border: none; display: flex; justify-content: space-between; align-items: center; cursor: pointer; font-weight: 700; color: #1e293b; font-size: 1.1rem; }
        .faq-answer { padding: 0 25px 20px; color: #64748b; line-height: 1.6; display: none; }
        .faq-item.active { border-color: #16645f; }
        .faq-item.active .faq-answer { display: block; }

        @media (max-width: 850px) {
          .learning-row,
          .learning-row.reverse {
            flex-direction: column;
            align-items: stretch;
          }
          .learning-image img {
            height: 320px;
          }
          .stats-bar { grid-template-columns: repeat(2, 1fr); }
        }
      `}</style>

      {/* Hero */}
      <section className="hero-v3">
        <img src={schoolMain} className="hero-bg-img" alt="Background" />
        <div className="hero-content-box">
          <span className="eyebrow" style={{ color: "#5aa9ad" }}>ESTABLISHED SINCE 2011</span>
          <h1>Quality Education for Every Child.</h1>
          <p>We provide a nurturing environment in Kobbarichetlapeta where students excel in academics, sports, and life values.</p>
          <Link to="/admissions" className="header-call" style={{ textDecoration: "none", display: "inline-flex", color: "white", padding: "16px 36px", borderRadius: "6px", fontWeight: "800" }}>
            Admission Info
          </Link>
        </div>
      </section>

      {/* Stats */}
      <section className="stats-bar">
        {stats.map((item, idx) => (
          <div className="stat-item" key={idx}>
            <h2><AnimatedStat value={item.value} suffix={item.suffix} /></h2>
            <p>{item.label}</p>
          </div>
        ))}
      </section>

      {/* Features Cards */}
      <section className="info-cards-section">
        <span className="eyebrow">Excellence in Learning</span>
        <h2 style={{ fontSize: "2.5rem", marginTop: "10px" }}>Why Parents Trust Us</h2>
        <div className="info-grid">
          {features.map((f, i) => (
            <div className="info-card" key={i}>
              <span className="icon">{f.icon}</span>
              <h3 style={{ color: "#16645f", marginBottom: "15px" }}>{f.title}</h3>
              <p style={{ color: "#64748b", lineHeight: 1.6 }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Student Achievers */}
      <section className="achievers-section">
        <span className="eyebrow">Our Star Students</span>
        <h2 style={{ fontSize: "2.5rem", marginTop: "10px", color: "#182231" }}>Achievers & Toppers</h2>
        <p style={{ color: "#526171", marginTop: "14px", fontSize: "1.05rem", maxWidth: "560px", margin: "14px auto 0" }}>
          Celebrating the bright minds who made Hamsavahini proud in 2024.
        </p>
        <div className="achievers-grid">
          {achievers.map((a, i) => (
            <div className="achiever-card" key={i}>
              <div className="achiever-card-img-wrap">
                <img src={a.src} alt={a.name} className="achiever-card-img" />
              </div>
              <div className="achiever-card-body">
                <span
                  className="achiever-badge"
                  style={{ color: a.badgeColor, background: a.badgeBg }}
                >
                  {a.badge}
                </span>
                <p className="achiever-name">{a.name}</p>
                <p className="achiever-desc">{a.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Image and Content Rows */}
      <section className="learning-section">
        {learningSections.map((item, index) => (
          <article className={`learning-row ${index % 2 === 1 ? "reverse" : ""}`} key={item.title}>
            <div className="learning-image">
              <img src={item.image} alt={item.alt} />
            </div>
            <div className="learning-content">
              <h2>{item.title}</h2>
              <p>{item.desc}</p>
            </div>
          </article>
        ))}
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div style={{ textAlign: 'center' }}>
          <span className="eyebrow">Information Desk</span>
          <h2 style={{ fontSize: '2.5rem', marginTop: '10px' }}>Common Questions</h2>
        </div>
        <div className="faq-container">
          {faqData.map((f, i) => (
            <div key={i} className={`faq-item ${activeFaq === i ? 'active' : ''}`}>
              <button className="faq-question" onClick={() => setActiveFaq(activeFaq === i ? null : i)}>
                {f.question} <span>{activeFaq === i ? '−' : '+'}</span>
              </button>
              <div className="faq-answer">{f.answer}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact CTA Section */}
      <section style={{ padding: '80px 20px', background: '#16645f', textAlign: 'center', color: 'white' }}>
        <h2 style={{ fontSize: '2.2rem', marginBottom: '15px' }}>Have More Questions?</h2>
        <p style={{ marginBottom: '35px', opacity: 0.9, maxWidth: '600px', margin: '0 auto 35px' }}>
          Our office is open from 9 AM to 5 PM. Feel free to visit us or reach out via phone for any admission related queries.
        </p>
        <div style={{ display: 'flex', gap: '15px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="tel:8008546300" style={{ background: 'white', color: '#16645f', padding: '16px 40px', borderRadius: '6px', textDecoration: 'none', fontWeight: '900' }}>
            Contact Us Now
          </a>
        </div>
      </section>

    </PageShell>
  );
}