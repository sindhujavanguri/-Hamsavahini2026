import PageShell from "./PageShell";
import PageHero from "./PageHero";
import schoolFront from "../Assets/images/School3.jpg";
import schoolCampus from "../Assets/images/girls.jpg";
import schoolClass from "../Assets/images/school6.jpg";
import schoolGround from "../Assets/images/School.jpeg";
import schoolBlock from "../Assets/images/School2.avif";
import kid1 from "../Assets/images/kid1.jpg";
import kid2 from "../Assets/images/kid2.jpg";
import kid3 from "../Assets/images/kid3.jpg";
import kid4 from "../Assets/images/kid4.jpg";

// Import achievers data to keep badge info consistent with Home page
import { achievers } from "./Home";

const galleryImages = [
  { src: schoolFront, alt: "Hamsavahini School building view", title: "School Front" },
  { src: schoolCampus, alt: "Hamsavahini School campus view", title: "Campus View" },
  { src: schoolClass, alt: "Hamsavahini School student activity", title: "Student Activity" },
  { src: schoolBlock, alt: "Hamsavahini School side view", title: "School Block" },
];

export default function Gallery() {
  return (
    <PageShell className="inner-page">
      <style>{`
.page-hero {
  position: relative;
  min-height: 520px;
  display: flex;
  align-items: flex-end;
  padding: 190px clamp(18px, 5vw, 76px) 72px;
  overflow: hidden;
  isolation: isolate;
}

.page-hero img {
  position: absolute;
  inset: 0;
  z-index: -2;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.page-hero-overlay {
  position: absolute;
  inset: 0;
  z-index: -1;
  background:
    linear-gradient(90deg, rgba(11, 23, 39, 0.88), rgba(11, 23, 39, 0.56) 55%, rgba(11, 23, 39, 0.14)),
    linear-gradient(0deg, rgba(11, 23, 39, 0.5), rgba(11, 23, 39, 0.08));
}

.page-hero-content {
  width: min(840px, 100%);
  color: #ffffff;
}

.page-hero-content .eyebrow {
  color: #9ee0d9;
}

.page-hero-content h1 {
  margin: 14px 0 0;
  max-width: 900px;
  font-size: clamp(2.7rem, 6.8vw, 5.8rem);
  line-height: 0.98;
}

.page-hero-content p {
  max-width: 720px;
  margin: 22px 0 0;
  color: rgba(255, 255, 255, 0.88);
  font-size: clamp(1.05rem, 2vw, 1.28rem);
  line-height: 1.7;
}

.eyebrow {
  display: block;
  color: #16645f;
  font-size: 0.78rem;
  font-weight: 900;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.content-band {
  padding: clamp(64px, 9vw, 112px) clamp(18px, 5vw, 76px);
}

.section-copy h2,
.section-heading h2 {
  margin: 12px 0 0;
  color: #182231;
  font-size: clamp(2rem, 4.5vw, 4rem);
  line-height: 1.05;
  letter-spacing: 0;
}

.section-copy p {
  margin: 22px 0 0;
  color: #526171;
  font-size: 1.08rem;
  line-height: 1.8;
}

.section-heading {
  width: min(820px, 100%);
}

.route-card-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 18px;
  margin-top: 38px;
}

.route-card {
  min-height: 168px;
  padding: 26px;
  border: 1px solid #d6e3de;
  border-radius: 12px;
  background:
    linear-gradient(135deg, rgba(255, 255, 255, 0.98), rgba(244, 249, 246, 0.96)),
    #ffffff;
  color: #182231;
  text-decoration: none;
  box-shadow: 0 16px 34px rgba(24, 34, 49, 0.08);
  transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;
}

.route-card:hover,
.route-card:focus-visible {
  border-color: #5aa9ad;
  transform: translateY(-4px);
  box-shadow: 0 24px 48px rgba(24, 34, 49, 0.13);
}

.route-card span {
  display: block;
  color: #16645f;
  font-size: 1.25rem;
  font-weight: 950;
}

.route-card p {
  margin: 14px 0 0;
  color: #5d6a78;
  line-height: 1.65;
}

.info-card {
  min-height: 190px;
}

.card-band {
  background: #eef5f2;
}

@media (max-width: 980px) {
  .page-hero {
    min-height: 560px;
    padding-top: 240px;
  }

  .route-card-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 620px) {
  .page-hero {
    min-height: 560px;
    padding: 300px 18px 48px;
  }

  .content-band {
    padding: 54px 18px;
  }
}

.gallery-band {
  background: #ffffff;
}

.gallery-grid {
  display: grid;
  grid-template-columns: 1.2fr 0.8fr 1fr;
  grid-auto-rows: 220px;
  gap: 14px;
  margin-top: 36px;
}

.gallery-grid img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
}

.gallery-grid img:first-child {
  grid-row: span 2;
}

.gallery-grid img:nth-child(4) {
  grid-column: span 2;
}

.gallery-page-grid figure {
  position: relative;
  margin: 0;
  overflow: hidden;
  border-radius: 8px;
}

.gallery-page-grid figure img {
  border-radius: 0;
}

.gallery-page-grid figcaption {
  position: absolute;
  left: 14px;
  bottom: 14px;
  padding: 8px 12px;
  border-radius: 999px;
  background: rgba(24, 34, 49, 0.82);
  color: #ffffff;
  font-size: 0.86rem;
  font-weight: 900;
}

/* --- Achievers Gallery Section --- */
.achievers-gallery-band {
  background: #f6faf8;
  padding: clamp(64px, 9vw, 112px) clamp(18px, 5vw, 76px);
}

.achievers-gallery-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 22px;
  margin-top: 40px;
}

.achiever-gallery-card {
  background: #ffffff;
  border-radius: 16px;
  border: 1px solid #ddeee8;
  overflow: hidden;
  box-shadow: 0 4px 18px rgba(24, 34, 49, 0.07);
  transition: transform 0.28s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.28s ease, border-color 0.22s ease;
}

.achiever-gallery-card:hover {
  transform: translateY(-10px) scale(1.025);
  box-shadow: 0 28px 52px rgba(24, 34, 49, 0.15);
  border-color: #5aa9ad;
}

.achiever-gallery-img-wrap {
  overflow: hidden;
  height: 240px;
}

.achiever-gallery-img-wrap img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.36s ease;
}

.achiever-gallery-card:hover .achiever-gallery-img-wrap img {
  transform: scale(1.06);
}

.achiever-gallery-body {
  padding: 16px 18px 20px;
}

.achiever-gallery-badge {
  display: inline-block;
  font-size: 0.74rem;
  font-weight: 800;
  letter-spacing: 0.03em;
  padding: 5px 11px;
  border-radius: 999px;
  margin-bottom: 9px;
}

.achiever-gallery-name {
  font-size: 1rem;
  font-weight: 800;
  color: #182231;
  margin: 0 0 6px;
}

.achiever-gallery-desc {
  font-size: 0.84rem;
  color: #526171;
  line-height: 1.6;
  margin: 0;
}

@media (max-width: 980px) {
  .gallery-grid {
    grid-template-columns: 1fr 1fr;
  }

  .achievers-gallery-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 620px) {
  .gallery-grid {
    grid-template-columns: 1fr;
    grid-auto-rows: 240px;
  }

  .gallery-grid img:first-child,
  .gallery-grid img:nth-child(4) {
    grid-column: auto;
    grid-row: auto;
  }

  .achievers-gallery-grid {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 420px) {
  .achievers-gallery-grid {
    grid-template-columns: 1fr;
  }
}
      `}</style>
      <PageHero
        eyebrow="Gallery"
        title="Photos from our school campus."
        text="A small look at the school building, outdoor spaces, and student activity areas."
        image={schoolBlock}
      />

      {/* Campus Photos */}
      <section className="content-band gallery-band">
        <div className="section-heading">
          <span className="eyebrow">School photos</span>
          <h2>Campus moments.</h2>
        </div>
        <div className="gallery-grid gallery-page-grid">
          {galleryImages.map((image) => (
            <figure key={image.src}>
              <img src={image.src} alt={image.alt} />
              <figcaption>{image.title}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* Student Achievers */}
      <section className="achievers-gallery-band">
        <div className="section-heading">
          <span className="eyebrow">Pride of Hamsavahini</span>
          <h2>Our star achievers.</h2>
        </div>
        <div className="achievers-gallery-grid">
          {achievers.map((a, i) => (
            <div className="achiever-gallery-card" key={i}>
              <div className="achiever-gallery-img-wrap">
                <img src={a.src} alt={a.name} />
              </div>
              <div className="achiever-gallery-body">
                <span
                  className="achiever-gallery-badge"
                  style={{ color: a.badgeColor, background: a.badgeBg }}
                >
                  {a.badge}
                </span>
                <p className="achiever-gallery-name">{a.name}</p>
                <p className="achiever-gallery-desc">{a.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </PageShell>
  );
}