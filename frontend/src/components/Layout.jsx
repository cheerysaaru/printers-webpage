import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import QuoteModal from "./QuoteModal";
import ContactModal from "./ContactModal";

const whatsappNumber = "94777278833";
const whatsappLink = (product = "general inquiry") =>
  `https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Hi, I'd like a quote for " + product)}`;

export default function Layout({ children }) {
  const [scrolled, setScrolled] = useState(false);
  const [quoteOpen, setQuoteOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuOpen && menuRef.current && !menuRef.current.contains(event.target) && !event.target.closest(".hamburger")) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuOpen]);

  return (
    <div className="site">
      <header className={scrolled ? "scrolled" : ""}>
        <nav>
          <Link to="/" className="logo-link">Screen Line Printers</Link>
          <div className={`nav-links ${menuOpen ? "open" : ""}`} ref={menuRef}>
            <button className="menu-close" onClick={() => setMenuOpen(false)} aria-label="Close menu">×</button>
            <Link to="/services" onClick={() => setMenuOpen(false)}>Services</Link>
            <Link to="/portfolio" onClick={() => setMenuOpen(false)}>Portfolio</Link>
            <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>
            <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
            <div className="nav-ctas">
              <button className="btn btn-outline nav-cta" onClick={() => { setMenuOpen(false); setQuoteOpen(true); }}>Get a Quote</button>
              <a href={whatsappLink()} className="btn btn-primary nav-cta" target="_blank" rel="noreferrer">WhatsApp Us</a>
            </div>
          </div>
          <button className={`hamburger ${menuOpen ? "open" : ""}`} onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu" aria-expanded={menuOpen}>
            <span></span>
            <span></span>
            <span></span>
          </button>
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

      <button className="wa-float" onClick={() => setContactOpen(true)} aria-label="Contact Us">
        <div className="wa-float-inner">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2Zm0 14H5.17L4 17.17V4h16v12Z" fill="currentColor"/>
            <path d="M7 9h2v2H7Zm4 0h2v2h-2Zm4 0h2v2h-2Z" fill="currentColor"/>
          </svg>
          <span className="wa-float-text">Contact Us</span>
        </div>
      </button>

      <QuoteModal isOpen={quoteOpen} onClose={() => setQuoteOpen(false)} />
      <ContactModal isOpen={contactOpen} onClose={() => setContactOpen(false)} />
    </div>
  );
}
