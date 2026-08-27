import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import QuoteModal from "./QuoteModal";

const whatsappNumber = "94777278833";
const whatsappLink = (product = "general inquiry") =>
  `https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Hi, I'd like a quote for " + product)}`;

export default function Layout({ children }) {
  const [scrolled, setScrolled] = useState(false);
  const [quoteOpen, setQuoteOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="site">
      <header className={scrolled ? "scrolled" : ""}>
        <nav>
          <Link to="/" className="logo-link">Screen Line Printers</Link>
          <div className="nav-links">
            <Link to="/services">Services</Link>
            <Link to="/portfolio">Portfolio</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
          </div>
          <div className="nav-ctas">
            <button className="btn btn-outline nav-cta" onClick={() => setQuoteOpen(true)}>Get a Quote</button>
            <a href={whatsappLink()} className="btn btn-primary nav-cta" target="_blank" rel="noreferrer">WhatsApp Us</a>
          </div>
        </nav>
      </header>

      <main>{children}</main>

      <footer>
        <div className="wrap">
          <div className="footer-grid">
            <div>
              <h5>Screen Line Printers</h5>
              <p>Maliban Street No. 12,<br />Colombo 11, Pettah, Sri Lanka</p>
              <p className="footer-est">Est. 2008 — 18 Years of Craft</p>
            </div>
            <div>
              <h5>Studio</h5>
              <Link to="/services">Services</Link>
              <Link to="/portfolio">Portfolio</Link>
              <Link to="/about">About Us</Link>
              <Link to="/contact">Contact</Link>
            </div>
            <div>
              <h5>Contact</h5>
              <a href="tel:+94777278833">+94 77 727 8833</a>
              <a href="mailto:screenline_printers@yahoo.com">screenline_printers@yahoo.com</a>
              <span>10:00 AM – 6:00 PM</span>
            </div>
            <div>
              <h5>Follow</h5>
              <a href="https://www.instagram.com/sl.printers/" target="_blank" rel="noreferrer">Instagram</a>
              <a href="https://www.facebook.com/share/1HbCmS6GKk/" target="_blank" rel="noreferrer">Facebook</a>
              <a href="https://www.google.com/maps/search/?api=1&query=Maliban+Street+No.+12+Colombo+11+Pettah+Sri+Lanka" target="_blank" rel="noreferrer">Google Maps</a>
            </div>
          </div>
          <div className="footer-bottom">
            <span>© 2026 Screen Line Printers. All rights reserved.</span>
            <span>Pettah, Colombo 11 · Sri Lanka</span>
          </div>
        </div>
      </footer>

      <button className="wa-float" onClick={() => setQuoteOpen(true)} aria-label="Get a Quote">
        <div className="wa-float-inner">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.6 6.32A7.85 7.85 0 0 0 12.05 4c-4.34 0-7.87 3.53-7.87 7.87 0 1.39.36 2.74 1.05 3.93L4 20l4.32-1.13a7.83 7.83 0 0 0 3.73.95h.01c4.34 0 7.87-3.53 7.87-7.87 0-2.1-.82-4.08-2.33-5.63Zm-5.55 12.1h-.01a6.53 6.53 0 0 1-3.33-.91l-.24-.14-2.48.65.66-2.42-.16-.25a6.53 6.53 0 0 1-1-3.48c0-3.61 2.94-6.55 6.56-6.55a6.5 6.5 0 0 1 4.63 1.92 6.5 6.5 0 0 1 1.92 4.63c0 3.62-2.94 6.55-6.55 6.55Zm3.6-4.9c-.2-.1-1.17-.58-1.35-.64-.18-.07-.31-.1-.44.1-.13.19-.5.64-.62.78-.11.13-.23.15-.42.05-.2-.1-.83-.3-1.58-.97-.58-.52-.98-1.16-1.09-1.36-.11-.19-.01-.3.09-.4.09-.09.2-.23.3-.35.1-.11.13-.19.2-.32.06-.13.03-.25-.02-.35-.05-.1-.44-1.06-.6-1.45-.16-.38-.32-.33-.44-.33-.11 0-.24-.02-.37-.02-.13 0-.35.05-.53.25-.18.19-.7.68-.7 1.66s.72 1.92.82 2.06c.1.13 1.42 2.17 3.44 3.04.48.21.86.33 1.15.42.48.15.92.13 1.27.08.39-.06 1.17-.48 1.34-.94.16-.46.16-.86.11-.94-.05-.09-.18-.14-.38-.24Z" fill="currentColor"/>
          </svg>
          <span className="wa-float-text">Get a Quote</span>
        </div>
      </button>

      <QuoteModal isOpen={quoteOpen} onClose={() => setQuoteOpen(false)} />
    </div>
  );
}
