import PageShell from "./PageShell";
import PageHero from "./PageHero";

import schoolFront from "../Assets/images/School3.jpg";
import schoolCampus from "../Assets/images/girls.jpg";
import schoolClass from "../Assets/images/school6.jpg";
import schoolBlock from "../Assets/images/School2.avif";

// Import achievers data
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
/* ===== EXISTING STYLES (UNCHANGED) ===== */
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

.page-hero-content h1 {
  margin: 14px 0 0;
  font-size: clamp(2.7rem, 6.8vw, 5.8rem);
}

.page-hero-content p {
  margin: 22px 0 0;
  color: rgba(255, 255, 255, 0.88);
}

/* ===== GALLERY ===== */
.gallery-band {
  background: #ffffff;
  padding: 80px 20px;
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 15px;
  margin-top: 30px;
}

.gallery-page-grid figure {
  position: relative;
  margin: 0;
  overflow: hidden;
  border-radius: 10px;
}

.gallery-page-grid img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.gallery-page-grid figcaption {
  position: absolute;
  bottom: 10px;
  left: 10px;
  background: rgba(0,0,0,0.7);
  color: #fff;
  padding: 6px 10px;
  border-radius: 20px;
  font-size: 12px;
}

/* ===== ACHIEVERS ===== */
.achievers-gallery-band {
  background: #f6faf8;
  padding: 80px 20px;
}

.achievers-gallery-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
}

.achiever-gallery-card {
  background: #fff;
  border-radius: 12px;
  overflow: hidden;
  transition: 0.3s;
}

.achiever-gallery-card:hover {
  transform: translateY(-5px);
}

.achiever-gallery-img-wrap img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.achiever-gallery-body {
  padding: 15px;
}

@media(max-width:768px){
  .gallery-grid{
    grid-template-columns: 1fr;
  }

  .achievers-gallery-grid{
    grid-template-columns: 1fr 1fr;
  }
}
      `}</style>

      <PageHero
        eyebrow="Gallery"
        title="Photos from our school campus."
        text="A small look at the school building, outdoor spaces, and student activity areas."
        image={schoolBlock}
      />

      {/* Gallery Section */}
      <section className="gallery-band">
        <h2>Campus Moments</h2>

        <div className="gallery-grid gallery-page-grid">
          {galleryImages.map((image, i) => (
            <figure key={i}>
              <img src={image.src} alt={image.alt} />
              <figcaption>{image.title}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* Achievers Section */}
      <section className="achievers-gallery-band">
        <h2>Our Star Achievers</h2>

        <div className="achievers-gallery-grid">
          {achievers.map((a, i) => (
            <div className="achiever-gallery-card" key={i}>
              <div className="achiever-gallery-img-wrap">
                <img src={a.src} alt={a.name} />
              </div>
              <div className="achiever-gallery-body">
                <span style={{ color: a.badgeColor }}>
                  {a.badge}
                </span>
                <p>{a.name}</p>
                <p>{a.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </PageShell>
  );
}