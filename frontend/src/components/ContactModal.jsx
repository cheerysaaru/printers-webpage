import { useState, useEffect } from "react";

const whatsappNumber = "94777278833";

export default function ContactModal({ isOpen, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    message: "",
  });

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      setSubmitted(false);
      setForm({ name: "", phone: "", message: "" });
    } else {
      document.body.style.overflow = "";
    }
  }, [isOpen]);

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [isOpen, onClose]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const msg = `Hi, I'm ${form.name}. Phone: ${form.phone}. ${form.message}`;
    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(msg)}`,
      "_blank"
    );
    setSubmitted(true);
  };

  if (!isOpen) return null;

  return (
    <div className="quote-overlay" onClick={onClose}>
      <div className="quote-modal contact-modal" onClick={(e) => e.stopPropagation()}>
        <button className="quote-close" onClick={onClose}>×</button>

        {!submitted ? (
          <div className="quote-step">
            <div className="quote-header">
              <div className="quote-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2Zm0 14H5.17L4 17.17V4h16v12Z" fill="currentColor"/>
                  <path d="M7 9h2v2H7Zm4 0h2v2h-2Zm4 0h2v2h-2Z" fill="currentColor"/>
                </svg>
              </div>
              <h2>Contact Us</h2>
              <p>Quick message — we'll reply on WhatsApp within hours.</p>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="contact-modal-grid">
                <div className="form-group">
                  <label>Your Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="e.g. Amara Silva"
                  />
                </div>
                <div className="form-group">
                  <label>Phone Number *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    required
                    placeholder="e.g. 077 123 4567"
                  />
                </div>
                <div className="form-group contact-modal-full">
                  <label>Message *</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows="3"
                    required
                    placeholder="How can we help you?"
                  ></textarea>
                </div>
              </div>

              <div className="quote-actions">
                <button type="submit" className="btn btn-primary btn-lg">
                  <span className="btn-text">Send on WhatsApp</span>
                  <span className="btn-icon">→</span>
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div className="quote-step quote-done">
            <div className="quote-success-icon">✓</div>
            <h2>Message Sent!</h2>
            <p>We've opened WhatsApp with your message. We'll get back to you shortly.</p>
            <div className="quote-actions">
              <button className="btn btn-primary btn-lg" onClick={onClose}>
                <span className="btn-text">Done</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
