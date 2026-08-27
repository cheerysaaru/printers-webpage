import { useEffect } from "react";

const milestones = [
  { year: "2008", event: "Screen Line Printers founded in Pettah, Colombo" },
  { year: "2012", event: "Expanded to offset printing capabilities" },
  { year: "2016", event: "Added digital printing to our services" },
  { year: "2020", event: "Launched custom packaging & box services" },
  { year: "2024", event: "Celebrated 500+ invitation suites delivered" },
  { year: "2026", event: "18 years of craft — still printing by hand" },
];

export default function About() {
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
          <div className="eyebrow">Our Story</div>
          <h1>Eighteen years of<br /><em>ink, paper & craft</em></h1>
          <p className="sub">Screen Line Printers has been Pettah's trusted printing house since 2008. What started as a small offset press has grown into a full-service printing studio — but the hands-on approach hasn't changed.</p>
        </div>
      </section>

      <section className="about-story">
        <div className="wrap">
          <div className="about-grid reveal">
            <div className="about-content">
              <h2>We don't just design invitations — we print them.</h2>
              <p>Unlike design studios that outsource the actual printing, Screen Line Printers is the press. Every invitation, business card, sticker, and box that leaves our studio has been printed, cut, and finished right here in Pettah.</p>
              <p>Over eighteen years, we've refined three distinct printing methods — offset, screen, and digital — and matched each to the right material and finish. That means your wedding invitation isn't just designed beautifully — it's printed beautifully too.</p>
              <p>Our clients include families planning weddings, businesses building their brand, and event organisers who need reliable, high-quality printing. What they share is a desire for something custom, not something off the shelf.</p>
            </div>
            <div className="about-visual">
              <div className="about-card">
                <div className="about-card-inner">
                  <div className="about-card-crest">S</div>
                  <div className="about-card-title">Screen Line Printers</div>
                  <div className="about-card-sub">Est. 2008 · Pettah, Colombo</div>
                  <div className="about-card-line"></div>
                  <p>Offset · Screen · Digital</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="timeline-section">
        <div className="wrap">
          <div className="section-head reveal">
            <div className="eyebrow centered">Our Journey</div>
            <h2>From a single press<br />to a full studio</h2>
          </div>
          <div className="timeline reveal">
            {milestones.map((m, i) => (
              <div className="timeline-item" key={i}>
                <div className="timeline-year">{m.year}</div>
                <div className="timeline-dot"></div>
                <div className="timeline-event">{m.event}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="values-section">
        <div className="wrap">
          <div className="section-head reveal">
            <div className="eyebrow centered">What Drives Us</div>
            <h2>Craft over convenience</h2>
          </div>
          <div className="values-grid reveal stagger">
            <div className="value-card">
              <div className="value-icon">✦</div>
              <h4>Precision</h4>
              <p>Every print is checked, every cut is measured. We don't rush — we refine.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">✦</div>
              <h4>Personal Service</h4>
              <p>You work directly with the people who print your order. No middlemen.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">✦</div>
              <h4>Material Knowledge</h4>
              <p>We know paper, PVC, acrylic, and cardboard — and which one fits your project.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">✦</div>
              <h4>Reliability</h4>
              <p>Eighteen years of on-time delivery. When we say it's ready, it's ready.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-band">
        <div className="eyebrow centered">Let's Begin</div>
        <h2>Ready to bring your design<br />to life?</h2>
        <div className="cta-band-ctas">
          <a href="https://wa.me/94777278833?text=Hi,%20I'd%20like%20a%20quote%20for%20general%20inquiry" className="btn btn-primary btn-gold" target="_blank" rel="noreferrer">Message Us on WhatsApp</a>
          <a href="https://www.google.com/maps/search/?api=1&query=Maliban+Street+No.+12+Colombo+11+Pettah+Sri+Lanka" className="btn btn-outline-light" target="_blank" rel="noreferrer">Visit Our Store</a>
        </div>
      </section>
    </>
  );
}
