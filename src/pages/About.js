import PageShell from "./PageShell";
import PageHero from "./PageHero";
import schoolFront from "../Assets/images/School3.jpg";
import schoolBlock from "../Assets/images/School2.avif";

const highlights = [
  { title: "Strong Foundation", text: "Daily practice in reading, writing, numeracy, communication, and classroom discipline." },
  { title: "Caring Teachers", text: "Close attention, regular guidance, and patient support help every child move forward." },
  { title: "Community Trust", text: "A familiar village school environment where families can stay connected to learning." },
];

export default function About() {
  return (
    <PageShell className="inner-page">
      <style>{`
        /* Existing Styles */
        .page-hero { position: relative; min-height: 520px; display: flex; align-items: flex-end; padding: 190px clamp(18px, 5vw, 76px) 72px; overflow: hidden; isolation: isolate; }
        .page-hero img { position: absolute; inset: 0; z-index: -2; width: 100%; height: 100%; object-fit: cover; }
        .page-hero-overlay { position: absolute; inset: 0; z-index: -1; background: linear-gradient(90deg, rgba(11, 23, 39, 0.88), rgba(11, 23, 39, 0.56) 55%, rgba(11, 23, 39, 0.14)), linear-gradient(0deg, rgba(11, 23, 39, 0.5), rgba(11, 23, 39, 0.08)); }
        .page-hero-content { width: min(840px, 100%); color: #ffffff; }
        .page-hero-content h1 { margin: 14px 0 0; font-size: clamp(2.7rem, 6.8vw, 5.8rem); line-height: 0.98; }
        .eyebrow { display: block; color: #16645f; font-size: 0.78rem; font-weight: 900; letter-spacing: 0.08em; text-transform: uppercase; }
        .content-band { padding: clamp(64px, 9vw, 112px) clamp(18px, 5vw, 76px); }
        .section-copy h2 { margin: 12px 0 0; color: #182231; font-size: clamp(2rem, 4.5vw, 4rem); line-height: 1.05; }
        .section-copy p { margin: 22px 0 0; color: #526171; font-size: 1.08rem; line-height: 1.8; }
        .about-band { display: grid; grid-template-columns: minmax(0, 0.9fr) minmax(320px, 1.1fr); align-items: center; gap: clamp(28px, 5vw, 72px); }
        .about-photo-wrap img { display: block; width: 100%; height: min(58vw, 520px); object-fit: cover; border-radius: 8px; box-shadow: 0 24px 54px rgba(24, 34, 49, 0.18); }
        
        /* New Styles for Mission/Vision and Green Card */
        .mission-vision-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 30px; margin-top: 40px; }
        .mv-card { padding: 40px; background: #ffffff; border-radius: 12px; border-left: 5px solid #16645f; box-shadow: 0 10px 30px rgba(0,0,0,0.05); }
        .mv-card h3 { color: #16645f; margin-bottom: 15px; font-size: 1.5rem; }

        .highlights-band { background: #eef5f2; }
        .highlight-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }
        .highlight-card { padding: 28px; background: #ffffff; border-radius: 8px; box-shadow: 0 14px 34px rgba(24, 34, 49, 0.08); }

        .green-contact-card { 
          background: #16645f; 
          border-radius: 24px; 
          display: grid; 
          grid-template-columns: 1fr 1fr; 
          overflow: hidden; 
          color: white; 
          margin-top: 60px;
        }
        .green-card-content { padding: 60px; }
        .green-card-image img { width: 100%; height: 100%; object-fit: cover; }
        .school-info-list { list-style: none; padding: 0; margin: 30px 0; }
        .school-info-list li { margin-bottom: 15px; display: flex; flex-direction: column; }
        .school-info-list span { font-size: 0.75rem; text-transform: uppercase; opacity: 0.7; font-weight: 800; }
        .school-info-list strong { font-size: 1.2rem; }

        @media (max-width: 980px) {
          .about-band, .highlight-grid, .mission-vision-grid, .green-contact-card { grid-template-columns: 1fr; }
          .green-card-image { height: 300px; }
        }
      `}</style>

      <PageHero
        eyebrow="About the school"
        title="Learning with care, values, and everyday discipline."
        text="Hamsavahini School supports students with a balanced approach to academics, personal development, and community values."
        image={schoolFront}
      />

      {/* Story Section with Established/Principal info */}
      <section className="content-band about-band">
        <div className="section-copy">
          <span className="eyebrow">Our story</span>
          <h2>A trusted school close to home.</h2>
          <p>
            Established in <strong>2011</strong>, Hamsavahini School began with a vision to provide quality 
            English medium education to the children of <strong>Kobbarichetlapeta</strong>. Under the 
            leadership of our Principal, <strong>Mrs. S. Rajyalakshmi</strong>, the school focuses 
            on classroom discipline and practical confidence.
          </p>
          
          {/* Mission & Vision Added Here */}
          <div className="mission-vision-grid">
            <div className="mv-card">
              <h3>Our Mission</h3>
              <p>To provide a safe and nurturing environment where rural students gain the tools to excel in modern academics and character.</p>
            </div>
            <div className="mv-card">
              <h3>Our Vision</h3>
              <p>To be the foundation for future leaders by blending traditional values with competitive digital learning standards.</p>
            </div>
          </div>
        </div>
        <div className="about-photo-wrap">
          <img src={schoolBlock} alt="Hamsavahini School building block" />
        </div>
      </section>

      {/* Highlights Grid */}
      <section className="content-band highlights-band">
        <div className="highlight-grid">
          {highlights.map((item) => (
            <article className="highlight-card" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>

        {/* Final Green Card Container */}
        <div className="green-contact-card">
          <div className="green-card-content">
            <span className="eyebrow" style={{color: '#9ee0d9'}}>Quick Information</span>
            <h2 style={{color: 'white', fontSize: '2.5rem', marginTop: '10px'}}>Visit Our Campus</h2>
            <p style={{opacity: 0.9, marginTop: '15px'}}>We welcome parents to visit our school and see our classrooms, playground, and meet our faculty.</p>
            
            <ul className="school-info-list">
              <li>
                <span>Established</span>
                <strong>June 2011</strong>
              </li>
              <li>
                <span>Principal</span>
                <strong>Mrs. S. Rajyalakshmi</strong>
              </li>
              <li>
                <span>Location</span>
                <strong>Kobbarichetlapeta, Jarjangi Post</strong>
              </li>
            </ul>
          </div>
          <div className="green-card-image">
            <img src={schoolFront} alt="School Entrance" />
          </div>
        </div>
      </section>
    </PageShell>
  );
}
