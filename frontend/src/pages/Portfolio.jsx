import { useState, useEffect } from "react";

const categories = ["All", "Invitations", "Business Cards", "Stickers", "Packaging", "Event"];

const portfolioItems = [
  { id: 1, name: "The Serene Suite", category: "Invitations", method: "OFFSET", num: "014", tint1: "var(--sage-light)", tint2: "var(--sage)" },
  { id: 2, name: "Classic Romance", category: "Invitations", method: "OFFSET", num: "027", tint1: "var(--ivory-deep)", tint2: "var(--sage-light)" },
  { id: 3, name: "Timeless Arch", category: "Invitations", method: "DIGITAL", num: "031", tint1: "var(--ivory-deep)", tint2: "var(--sage)" },
  { id: 4, name: "Bold Press Co.", category: "Business Cards", method: "SCREEN", num: "045", tint1: "var(--ivory-deep)", tint2: "var(--espresso-soft)" },
  { id: 5, name: "Spice Garden Labels", category: "Stickers", method: "SCREEN", num: "052", tint1: "var(--ivory-deep)", tint2: "var(--sage-light)" },
  { id: 6, name: "Celestial Wedding", category: "Invitations", method: "OFFSET", num: "063", tint1: "var(--ivory)", tint2: "var(--ivory-deep)" },
  { id: 7, name: "Bake & Co. Packaging", category: "Packaging", method: "DIGITAL", num: "071", tint1: "var(--ivory-deep)", tint2: "var(--sage-light)" },
  { id: 8, name: "Heritage Events Suite", category: "Event", method: "OFFSET", num: "088", tint1: "var(--ivory-deep)", tint2: "var(--sage-light)" },
  { id: 9, name: "Modern minimal Cards", category: "Business Cards", method: "DIGITAL", num: "094", tint1: "var(--ivory-deep)", tint2: "var(--sage-light)" },
];

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [lightbox, setLightbox] = useState(null);

  const filtered = activeFilter === "All"
    ? portfolioItems
    : portfolioItems.filter((item) => item.category === activeFilter);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    const elements = document.querySelectorAll(".reveal");
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (lightbox) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [lightbox]);

  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <div className="eyebrow">Our Portfolio</div>
          <h1>Artistry in<br /><em>every impression</em></h1>
          <p className="sub">A curated selection of invitation suites and custom print projects. Every piece here reflects our commitment to hand-finished quality and bespoke design.</p>
        </div>
      </section>

      <section className="folio-section">
        <div className="wrap">
          <div className="filter-bar reveal">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`filter-btn ${activeFilter === cat ? "active" : ""}`}
                onClick={() => setActiveFilter(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="folio-grid reveal stagger">
            {filtered.map((item) => (
              <div
                className="folio-card"
                style={{ "--tint1": item.tint1, "--tint2": item.tint2 }}
                key={item.id}
                onClick={() => setLightbox(item)}
              >
                <span className="folio-mono">{item.num}</span>
                <span className="folio-tag">{item.method}</span>
                <span className="folio-name">{item.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {lightbox && (
        <div className="lightbox" onClick={() => setLightbox(null)}>
          <div className="lightbox-card" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close" onClick={() => setLightbox(null)}>×</button>
            <div className="lightbox-preview" style={{ background: `linear-gradient(150deg, ${lightbox.tint1}, ${lightbox.tint2})` }}>
              <div className="lightbox-ticket">
                <span className="ticket-num">No. {lightbox.num}</span>
                <span className="ticket-method">{lightbox.method}</span>
              </div>
              <div className="lightbox-title">{lightbox.name}</div>
            </div>
            <div className="lightbox-info">
              <h3>{lightbox.name}</h3>
              <p>Category: {lightbox.category}</p>
              <p>Print Method: {lightbox.method}</p>
              <p>Job No.: {lightbox.num}</p>
              <a href={`https://wa.me/94777278833?text=Hi,%20I'm%20interested%20in%20a%20design%20similar%20to%20${encodeURIComponent(lightbox.name)}`} className="btn btn-primary btn-lg" target="_blank" rel="noreferrer">
                <span className="btn-text">Inquire About This Design</span>
                <span className="btn-icon">→</span>
              </a>
            </div>
          </div>
        </div>
      )}

      <section className="cta-band">
        <div className="eyebrow centered">Bespoke Projects</div>
        <h2>Have a unique vision?<br />Let's craft it together.</h2>
        <div className="cta-band-ctas">
          <a href="https://wa.me/94777278833?text=Hi,%20I'd%20like%20a%20quote%20for%20a%20custom%20design" className="btn btn-primary btn-gold" target="_blank" rel="noreferrer">Message Us on WhatsApp</a>
        </div>
      </section>
    </>
  );
}
