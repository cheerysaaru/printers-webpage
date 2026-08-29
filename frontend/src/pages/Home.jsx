import { useState, useEffect } from "react";
import MatrixLoader from "../components/MatrixLoader";

const whatsappNumber = "94777278833";
const whatsappLink = (product = "general inquiry") =>
  `https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Hi, I'd like a quote for " + product)}`;

const services = [
  { num: "01", title: "Wedding & Event Invitations", desc: "Our flagship craft — fully customisable suites, from save-the-dates to the final card, designed around your story.", flagship: true },
  { num: "02", title: "Business Cards & Letterheads", desc: "Considered stationery for businesses that care how they're remembered." },
  { num: "03", title: "Stickers & Labels", desc: "Precision-cut labels and stickers across paper, PVC and acrylic stock." },
  { num: "04", title: "Packaging & Boxes", desc: "Cake boxes, bill books and custom packaging built to protect and impress." },
  { num: "05", title: "Screen & Offset Printing", desc: "Three printing methods under one roof, matched to your finish and budget." },
];

const processSteps = [
  { num: "01", title: "Share Your Design", desc: "Send your preferred design or artwork, or tell us your idea." },
  { num: "02", title: "Artwork Confirmed", desc: "We confirm the final artwork and specifications with you." },
  { num: "03", title: "Order Confirmed", desc: "Quantities, materials and pricing are finalised together." },
  { num: "04", title: "Advance Payment", desc: "A deposit secures your place in the print queue." },
  { num: "05", title: "Printing", desc: "Your order is printed and finished by hand in our studio." },
  { num: "06", title: "Delivery / Pickup", desc: "Collect in-store or have it delivered, balance due on completion." },
];

const portfolio = [
  { num: "01", name: "The Serene Suite", tag: "Invitation Suite", tint1: "var(--gold-bright)", tint2: "var(--gold)" },
  { num: "02", name: "Classic Romance", tag: "Wedding Stationery", tint1: "var(--ivory-deep)", tint2: "var(--gold-bright)" },
  { num: "03", name: "Timeless Arch", tag: "Event Cards", tint1: "var(--ivory-deep)", tint2: "var(--gold)" },
];

const marqueeItems = ["Art Paper", "Cardboard", "Sticker Paper", "PVC", "Acrylic", "Offset Printing", "Screen Printing", "Digital Printing"];

const testimonials = [
  { name: "Anjali & Roshan", event: "Wedding, December 2025", text: "Screen Line Printers turned our vision into beautiful invitations. The quality and attention to detail was exceptional." },
  { name: "Perera & Sons", event: "Business Stationery", text: "Professional, fast, and the final product exceeded our expectations. We've been coming back for 5 years now." },
  { name: "Dilini M.", event: "Birthday Party Invitations", text: "The team was incredibly patient with our design changes. The finished invitations were stunning." },
];

export default function Home() {
  const [splashDone, setSplashDone] = useState(false);
  const [countersVisible, setCountersVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setSplashDone(true), 2200);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!splashDone) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            if (entry.target.classList.contains("stats-strip")) {
              setCountersVisible(true);
            }
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    const elements = document.querySelectorAll(".reveal");
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [splashDone]);

  return (
    <>
      {/* Splash */}
      <div className={`splash ${splashDone ? "done" : ""}`}>
        <div className="splash-content">
          <div className="splash-logo"><MatrixLoader variant="twinkle" rounded label="Preparing your print studio" /></div>
          <div className="splash-text">Screen Line Printers</div>
          <div className="splash-bar"><div className="splash-fill"></div></div>
        </div>
      </div>

      {/* Hero */}
      <section className="hero" id="top">
        <div className="hero-inner">
          <div className="hero-caption">
            <div className="eyebrow hero-eyebrow">Est. 2008 · Pettah, Colombo</div>
            <h1 className="hero-title">
              <span className="hero-line">Every invitation,</span>
              <span className="hero-line"><em>beautifully</em> printed.</span>
              <span className="hero-line">Crafted in Colombo.</span>
            </h1>
            <p className="sub hero-sub">Screen Line Printers has spent eighteen years turning first drafts into keepsakes — bespoke wedding and event invitations, letterpress details, and packaging, printed and finished by hand in Colombo.</p>
            <div className="hero-ctas">
              <a href={whatsappLink()} className="btn btn-primary btn-lg" target="_blank" rel="noreferrer">
                <span className="btn-text">WhatsApp Us</span>
                <span className="btn-icon">→</span>
              </a>
              <a href="#services" className="btn btn-outline">View Our Work</a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <div className="stats-strip reveal">
        <div className="stat">
          <span className="stat-num">18</span>
          <span className="stat-label">Years Established</span>
        </div>
        <div className="stat">
          <span className="stat-num">500+</span>
          <span className="stat-label">Invitation Suites</span>
        </div>
        <div className="stat">
          <span className="stat-num">100%</span>
          <span className="stat-label">Custom Design</span>
        </div>
      </div>

      {/* Marquee */}
      <div className="marquee-band">
        <div className="marquee-track">
          <span>{marqueeItems.join("  ·  ")}  ·  </span>
          <span>{marqueeItems.join("  ·  ")}  ·  </span>
        </div>
      </div>

      {/* Services */}
      <section id="services">
        <div className="wrap">
          <div className="section-head reveal">
            <div className="eyebrow centered">What We Craft</div>
            <h2>From the first fold to<br />the final delivery</h2>
          </div>
          <div className="craft-grid reveal stagger">
            {services.map((service) => (
              <div className={`craft-card ${service.flagship ? "flagship" : ""}`} key={service.num}>
                <div className="num">{service.num}</div>
                <h3>{service.title}</h3>
                <p>{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="process-section">
        <div className="wrap">
          <div className="section-head reveal">
            <div className="eyebrow centered">How It Works</div>
            <h2>A process refined<br />over eighteen years</h2>
          </div>
          <div className="process-strip reveal stagger">
            {processSteps.map((step) => (
              <div className="process-step" key={step.num}>
                <span className="step-num">{step.num}</span>
                <h4>{step.title}</h4>
                <p>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section id="folio">
        <div className="wrap">
          <div className="section-head reveal">
            <div className="eyebrow centered">Recent Work</div>
            <h2>Stories told through paper</h2>
            <p>A selection of suites from our studio — full gallery coming soon.</p>
          </div>
          <div className="folio-grid reveal stagger">
            {portfolio.map((item) => (
              <div className="folio-card" style={{ "--tint1": item.tint1, "--tint2": item.tint2 }} key={item.num}>
                <span className="folio-mono">{item.num}</span>
                <span className="folio-tag">{item.tag}</span>
                <span className="folio-name">{item.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="why-section">
        <div className="wrap">
          <div className="why-grid reveal stagger">
            <div className="why-card">
              <div className="why-num">18</div>
              <h4>Years in Craft</h4>
              <p>Trusted by families across Colombo since day one.</p>
            </div>
            <div className="why-card">
              <div className="why-num">100%</div>
              <h4>Custom Design</h4>
              <p>Every suite is built around you — nothing off the shelf.</p>
            </div>
            <div className="why-card">
              <div className="why-num">03</div>
              <h4>Print Methods</h4>
              <p>Offset, screen & digital, matched to your finish.</p>
            </div>
            <div className="why-card">
              <div className="why-num">∞</div>
              <h4>Delivery Reach</h4>
              <p>Based in Pettah, shipping worldwide.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials-section">
        <div className="wrap">
          <div className="section-head reveal">
            <div className="eyebrow centered">Client Stories</div>
            <h2>Trusted by families<br />and businesses alike</h2>
          </div>
          <div className="testimonials-grid reveal stagger">
            {testimonials.map((t, i) => (
              <div className="testimonial-card" key={i}>
                <div className="testimonial-stars">★★★★★</div>
                <p className="testimonial-text">"{t.text}"</p>
                <div className="testimonial-author">
                  <strong>{t.name}</strong>
                  <span>{t.event}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Band */}
      <section className="cta-band" id="contact">
        <div className="eyebrow centered">Let's Begin</div>
        <h2>Ready to bring your design<br />to life?</h2>
        <div className="cta-band-ctas">
          <a href={whatsappLink()} className="btn btn-primary btn-gold" target="_blank" rel="noreferrer">Message Us on WhatsApp</a>
          <a href="https://www.google.com/maps/search/?api=1&query=Maliban+Street+No.+12+Colombo+11+Pettah+Sri+Lanka" className="btn btn-outline-light" target="_blank" rel="noreferrer">Visit Our Store — Maliban St, Pettah</a>
        </div>
      </section>
    </>
  );
}
