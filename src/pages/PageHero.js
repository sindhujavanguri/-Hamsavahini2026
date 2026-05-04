import schoolMain from "../Assets/images/School8.jpg";

export default function PageHero({ eyebrow, title, text, image = schoolMain }) {
  return (
    <section className="page-hero">
      <img src={image} alt="" aria-hidden="true" />
      <div className="page-hero-overlay" />
      <div className="page-hero-content">
        <span className="eyebrow">{eyebrow}</span>
        <h1>{title}</h1>
        <p>{text}</p>
      </div>
    </section>
  );
}
