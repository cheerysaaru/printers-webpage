import { useState, useEffect } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    interest: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

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

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = `Hi, I'm ${formData.name}. Phone: ${formData.phone}. Interested in: ${formData.interest}. ${formData.message}`;
    window.open(`https://wa.me/94777278833?text=${encodeURIComponent(text)}`, "_blank");
    setSubmitted(true);
  };

  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <div className="eyebrow">Connect with Us</div>
          <h1>Let's bring<br /><em>your vision to the press</em></h1>
          <p className="sub">Whether you have a finished design or just the seed of an idea, we're here to craft it. Reach out via WhatsApp for the fastest response — we look forward to hearing from you.</p>
        </div>
      </section>

      <section className="contact-section">
        <div className="wrap">
          <div className="contact-grid">
            <div className="contact-form-wrap reveal">
              <h2>Send Us a Message</h2>
              <p className="contact-form-note">We typically reply within a few hours on WhatsApp.</p>

              {submitted ? (
                <div className="form-success">
                  <div className="success-icon">✓</div>
                  <h3>Message Sent!</h3>
                  <p>Your message has been prepared for WhatsApp. Thank you for reaching out!</p>
                  <button className="btn btn-outline" onClick={() => { setSubmitted(false); setFormData({ name: "", phone: "", interest: "", message: "" }); }}>Send Another</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="name">Your Name</label>
                    <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required placeholder="e.g. Amara Silva" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} required placeholder="e.g. 077 123 4567" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="interest">Project Interest</label>
                    <select id="interest" name="interest" value={formData.interest} onChange={handleChange} required>
                      <option value="">Select a category...</option>
                      <option value="Wedding Invitations">Wedding Invitations</option>
                      <option value="Event Invitations">Event Invitations</option>
                      <option value="Business Cards">Business Cards</option>
                      <option value="Stickers & Labels">Stickers & Labels</option>
                      <option value="Packaging & Boxes">Packaging & Boxes</option>
                      <option value="Letterheads & Bill Books">Letterheads & Bill Books</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="message">Message (optional)</label>
                    <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows="4" placeholder="Tell us a bit about your vision, quantity, or deadline..."></textarea>
                  </div>
                  <button type="submit" className="btn btn-primary btn-lg">
                    <span className="btn-text">Send on WhatsApp</span>
                    <span className="btn-icon">→</span>
                  </button>
                </form>
              )}
            </div>

            <div className="contact-info reveal">
              <h2>Visit Our Studio</h2>
              <div className="contact-details">
                <div className="contact-item">
                  <span className="contact-label">Studio Address</span>
                  <span>Maliban Street No. 12,<br />Colombo 11, Pettah, Sri Lanka</span>
                </div>
                <div className="contact-item">
                  <span className="contact-label">Phone</span>
                  <a href="tel:+94777278833">+94 77 727 8833</a>
                </div>
                <div className="contact-item">
                  <span className="contact-label">Email</span>
                  <a href="mailto:screenline_printers@yahoo.com">screenline_printers@yahoo.com</a>
                </div>
                <div className="contact-item">
                  <span className="contact-label">Operating Hours</span>
                  <span>Monday – Saturday<br />10:00 AM – 6:00 PM</span>
                </div>
                <div className="contact-item">
                  <span className="contact-label">Quick Chat</span>
                  <a href="https://wa.me/94777278833" target="_blank" rel="noreferrer">Chat with us on WhatsApp</a>
                </div>
              </div>

              <div className="contact-map">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63371.16293875!2d79.8378984!3d6.9218386!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae253d10f7a7003%3A0x320b2e4d32d3838d!2sColombo%2011%2C%20Sri%20Lanka!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s"
                  width="100%"
                  height="250"
                  style={{ border: 0, borderRadius: "8px" }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Screen Line Printers Location"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-band">
        <div className="eyebrow centered">Prefer Instant Messaging?</div>
        <h2>Skip the form —<br />message us directly</h2>
        <div className="cta-band-ctas">
          <a href="https://wa.me/94777278833?text=Hi,%20I'd%20like%20a%20quote%20for%20general%20inquiry" className="btn btn-primary btn-gold" target="_blank" rel="noreferrer">Open WhatsApp</a>
        </div>
      </section>
    </>
  );
}
