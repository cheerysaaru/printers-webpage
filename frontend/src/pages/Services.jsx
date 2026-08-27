import { useEffect } from "react";

const printingMethods = [
  { title: "Offset Printing", desc: "Best for high-volume orders with consistent quality. Ideal for business cards, letterheads, and large invitation runs.", best: "Business Cards · Letterheads · Invitations", icon: "▣" },
  { title: "Screen Printing", desc: "Versatile method that works on almost any material — paper, PVC, acrylic. Great for stickers, labels, and custom packaging.", best: "Stickers · Labels · Packaging · Acrylic", icon: "◎" },
  { title: "Digital Printing", desc: "Perfect for smaller runs with full-colour detail. Quick turnaround for last-minute orders and photo-quality prints.", best: "Photo Cards · Small Batches · Fast Turnaround", icon: "◈" },
];

const materials = [
  { name: "Art Paper", use: "Invitations, business cards, leaflets" },
  { name: "Cardboard", use: "Packaging, boxes, thick cards" },
  { name: "Sticker Paper", use: "Labels, decals, product stickers" },
  { name: "PVC", use: "Durable cards, waterproof labels" },
  { name: "Acrylic", use: "Premium signage, display cards" },
];

const products = [
  { num: "01", title: "Wedding & Event Invitations", desc: "Our flagship offering. Fully customisable suites designed around your story, printed by hand in our studio.", flagship: true },
  { num: "02", title: "Business Cards", desc: "Premium cards on art paper, PVC or acrylic stock. Offset or digital, with custom finishes." },
  { num: "03", title: "Stickers & Labels", desc: "Die-cut stickers and labels across all materials. Waterproof options available on PVC and acrylic." },
  { num: "04", title: "Packaging & Boxes", desc: "Cake boxes, product packaging, and custom boxes. Built to protect and impress." },
  { num: "05", title: "Bill Books & Letterheads", desc: "Complete business stationery sets. Carbon-copy bill books and letterheads in any quantity." },
  { num: "06", title: "Event Stationery", desc: "Menus, place cards, programmes, thank-you cards — everything for your event." },
];

export default function Services() {
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

  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <div className="eyebrow">What We Do</div>
          <h1>Printing services<br /><em>matched to your finish</em></h1>
          <p className="sub">Three printing methods. Five material categories. Unlimited possibilities. We help you choose the right combination for your project.</p>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="section-head reveal">
            <div className="eyebrow centered">Printing Methods</div>
            <h2>How we print</h2>
          </div>
          <div className="methods-grid reveal stagger">
            {printingMethods.map((m, i) => (
              <div className="method-card" key={i}>
                <div className="method-icon">{m.icon}</div>
                <h3>{m.title}</h3>
                <p>{m.desc}</p>
                <div className="method-best">
                  <span className="method-best-label">Best for</span>
                  <span>{m.best}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="process-section">
        <div className="wrap">
          <div className="section-head reveal">
            <div className="eyebrow centered">Materials</div>
            <h2>We work with</h2>
          </div>
          <div className="materials-grid reveal stagger">
            {materials.map((m, i) => (
              <div className="material-card" key={i}>
                <h4>{m.name}</h4>
                <p>{m.use}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="section-head reveal">
            <div className="eyebrow centered">Products</div>
            <h2>What we produce</h2>
          </div>
          <div className="craft-grid reveal stagger">
            {products.map((p) => (
              <div className={`craft-card ${p.flagship ? "flagship" : ""}`} key={p.num}>
                <div className="num">{p.num}</div>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-band">
        <div className="eyebrow centered">Need a Quote?</div>
        <h2>Tell us what you need<br />and we'll make it happen</h2>
        <div className="cta-band-ctas">
          <a href="https://wa.me/94777278833?text=Hi,%20I'd%20like%20a%20quote%20for%20printing%20services" className="btn btn-primary btn-gold" target="_blank" rel="noreferrer">Message Us on WhatsApp</a>
        </div>
      </section>
    </>
  );
}
