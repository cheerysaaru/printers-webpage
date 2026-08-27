import { useState, useEffect } from "react";
import { jsPDF } from "jspdf";
import MatrixLoader from "./MatrixLoader";

const whatsappNumber = "94777278833";

const productOptions = [
  "Wedding Invitations",
  "Event Invitations",
  "Business Cards",
  "Letterheads",
  "Stickers & Labels",
  "Packaging & Boxes",
  "Bill Books",
  "Cake Boxes",
  "Other",
];

const quantityOptions = [
  "50",
  "100",
  "200",
  "300",
  "500",
  "1000",
  "2000+",
];

const materialOptions = [
  "Art Paper",
  "Cardboard",
  "Sticker Paper",
  "PVC",
  "Acrylic",
  "Not Sure / Need Advice",
];

export default function QuoteModal({ isOpen, onClose }) {
  const [step, setStep] = useState(1);
  const [isGenerating, setIsGenerating] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    product: "",
    quantity: "",
    material: "",
    size: "",
    finish: "",
    deadline: "",
    notes: "",
  });

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      setStep(1);
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

  const generatePDF = () => {
    const doc = new jsPDF();
    const date = new Date().toLocaleDateString("en-LK", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
    const quoteNo = `SLP-${Date.now().toString().slice(-6)}`;

    // Header
    doc.setFillColor(51, 36, 26);
    doc.rect(0, 0, 210, 40, "F");

    doc.setTextColor(243, 236, 220);
    doc.setFontSize(22);
    doc.setFont("helvetica", "bold");
    doc.text("Screen Line Printers", 20, 18);

    doc.setFontSize(10);
    doc.setFont("helvetica", "normal");
    doc.text("Maliban Street No. 12, Colombo 11, Pettah, Sri Lanka", 20, 26);
    doc.text("Tel: +94 77 727 8833 | screenline_printers@yahoo.com", 20, 32);

    // Quote title
    doc.setTextColor(168, 123, 63);
    doc.setFontSize(16);
    doc.setFont("helvetica", "bold");
    doc.text("QUOTATION", 20, 55);

    // Quote details
    doc.setTextColor(51, 36, 26);
    doc.setFontSize(10);
    doc.setFont("helvetica", "normal");

    const leftCol = 20;
    const rightCol = 120;
    let y = 68;

    doc.setFont("helvetica", "bold");
    doc.text("Quote No:", leftCol, y);
    doc.setFont("helvetica", "normal");
    doc.text(quoteNo, leftCol + 28, y);

    doc.setFont("helvetica", "bold");
    doc.text("Date:", rightCol, y);
    doc.setFont("helvetica", "normal");
    doc.text(date, rightCol + 16, y);

    y += 8;
    doc.setFont("helvetica", "bold");
    doc.text("Valid Until:", leftCol, y);
    doc.setFont("helvetica", "normal");
    const validDate = new Date();
    validDate.setDate(validDate.getDate() + 14);
    doc.text(validDate.toLocaleDateString("en-LK"), leftCol + 28, y);

    // Client info
    y += 16;
    doc.setFillColor(240, 237, 230);
    doc.rect(leftCol - 2, y - 6, 190, 36, "F");

    doc.setFontSize(9);
    doc.setFont("helvetica", "bold");
    doc.text("CLIENT DETAILS", leftCol, y);

    y += 8;
    doc.setFont("helvetica", "bold");
    doc.text("Name:", leftCol, y);
    doc.setFont("helvetica", "normal");
    doc.text(form.name || "—", leftCol + 16, y);

    doc.setFont("helvetica", "bold");
    doc.text("Phone:", rightCol, y);
    doc.setFont("helvetica", "normal");
    doc.text(form.phone || "—", rightCol + 16, y);

    y += 8;
    doc.setFont("helvetica", "bold");
    doc.text("Email:", leftCol, y);
    doc.setFont("helvetica", "normal");
    doc.text(form.email || "—", leftCol + 16, y);

    // Order details
    y += 20;
    doc.setFontSize(9);
    doc.setFont("helvetica", "bold");
    doc.text("ORDER DETAILS", leftCol, y);

    y += 10;
    doc.setFont("helvetica", "bold");
    doc.text("Product:", leftCol, y);
    doc.setFont("helvetica", "normal");
    doc.text(form.product || "—", leftCol + 22, y);

    y += 8;
    doc.setFont("helvetica", "bold");
    doc.text("Quantity:", leftCol, y);
    doc.setFont("helvetica", "normal");
    doc.text(form.quantity || "—", leftCol + 22, y);

    y += 8;
    doc.setFont("helvetica", "bold");
    doc.text("Material:", leftCol, y);
    doc.setFont("helvetica", "normal");
    doc.text(form.material || "—", leftCol + 22, y);

    y += 8;
    doc.setFont("helvetica", "bold");
    doc.text("Size:", leftCol, y);
    doc.setFont("helvetica", "normal");
    doc.text(form.size || "—", leftCol + 22, y);

    y += 8;
    doc.setFont("helvetica", "bold");
    doc.text("Finish:", leftCol, y);
    doc.setFont("helvetica", "normal");
    doc.text(form.finish || "—", leftCol + 22, y);

    y += 8;
    doc.setFont("helvetica", "bold");
    doc.text("Deadline:", leftCol, y);
    doc.setFont("helvetica", "normal");
    doc.text(form.deadline || "—", leftCol + 22, y);

    // Notes
    if (form.notes) {
      y += 16;
      doc.setFont("helvetica", "bold");
      doc.text("Additional Notes:", leftCol, y);
      y += 8;
      doc.setFont("helvetica", "normal");
      const lines = doc.splitTextToSize(form.notes, 170);
      doc.text(lines, leftCol, y);
      y += lines.length * 6;
    }

    // Pricing note
    y += 16;
    doc.setFillColor(168, 123, 63);
    doc.rect(leftCol - 2, y - 6, 190, 24, "F");

    doc.setTextColor(51, 36, 26);
    doc.setFontSize(10);
    doc.setFont("helvetica", "bold");
    doc.text("PRICING", leftCol, y + 2);

    doc.setFontSize(9);
    doc.setFont("helvetica", "normal");
    doc.text("Final pricing will be confirmed via WhatsApp after reviewing your requirements.", leftCol, y + 12);

    // Footer
    doc.setFontSize(8);
    doc.setTextColor(107, 89, 69);
    doc.text("This is a quotation request, not a confirmed order.", leftCol, 280);
    doc.text("Screen Line Printers | Est. 2008 | Pettah, Colombo 11", leftCol, 286);

    return { doc, quoteNo };
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isGenerating) return;
    setIsGenerating(true);

    await new Promise((resolve) => window.setTimeout(resolve, 700));

    const { doc, quoteNo } = generatePDF();
    const pdfBase64 = doc.output("datauristring");

    // Build WhatsApp message with quote details
    const msg = `Hi, I'd like to request a quotation.

*Quote Request: ${quoteNo}*

*Client:* ${form.name}
*Phone:* ${form.phone}
*Email:* ${form.email || "—"}

*Product:* ${form.product}
*Quantity:* ${form.quantity}
*Material:* ${form.material}
*Size:* ${form.size || "—"}
*Finish:* ${form.finish || "—"}
*Deadline:* ${form.deadline || "—"}

*Notes:* ${form.notes || "None"}

Please review and send me the final quote. Thank you!`;

    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(msg)}`,
      "_blank"
    );

    // Download PDF for user
    doc.save(`Quote-${quoteNo}.pdf`);

    setIsGenerating(false);
    setStep(3);
  };

  if (!isOpen) return null;

  return (
    <div className="quote-overlay" onClick={onClose}>
      <div className="quote-modal" onClick={(e) => e.stopPropagation()}>
        <button className="quote-close" onClick={onClose}>×</button>

        {step === 1 && (
          <div className="quote-step">
            <div className="quote-header">
              <div className="quote-icon">✦</div>
              <h2>Request a Quote</h2>
              <p>Tell us about your project and we'll get back with a quote within hours.</p>
            </div>

            <form onSubmit={(e) => { e.preventDefault(); setStep(2); }}>
              <div className="quote-form-grid">
                <div className="form-group">
                  <label>Your Name *</label>
                  <input type="text" name="name" value={form.name} onChange={handleChange} required placeholder="e.g. Amara Silva" />
                </div>
                <div className="form-group">
                  <label>Phone Number *</label>
                  <input type="tel" name="phone" value={form.phone} onChange={handleChange} required placeholder="e.g. 077 123 4567" />
                </div>
                <div className="form-group">
                  <label>Email (optional)</label>
                  <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="e.g. amara@email.com" />
                </div>
                <div className="form-group">
                  <label>Product *</label>
                  <select name="product" value={form.product} onChange={handleChange} required>
                    <option value="">Select product...</option>
                    {productOptions.map((p) => <option key={p} value={p}>{p}</option>)}
                  </select>
                </div>
              </div>

              <div className="quote-actions">
                <button type="submit" className="btn btn-primary btn-lg">
                  <span className="btn-text">Next: Project Details</span>
                  <span className="btn-icon">→</span>
                </button>
              </div>
            </form>
          </div>
        )}

        {step === 2 && (
          <div className="quote-step">
            <div className="quote-header">
              <div className="quote-icon">✦</div>
              <h2>Project Details</h2>
              <p>Help us understand exactly what you need.</p>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="quote-form-grid">
                <div className="form-group">
                  <label>Quantity *</label>
                  <select name="quantity" value={form.quantity} onChange={handleChange} required>
                    <option value="">Select quantity...</option>
                    {quantityOptions.map((q) => <option key={q} value={q}>{q}</option>)}
                  </select>
                </div>
                <div className="form-group">
                  <label>Material *</label>
                  <select name="material" value={form.material} onChange={handleChange} required>
                    <option value="">Select material...</option>
                    {materialOptions.map((m) => <option key={m} value={m}>{m}</option>)}
                  </select>
                </div>
                <div className="form-group">
                  <label>Size (optional)</label>
                  <input type="text" name="size" value={form.size} onChange={handleChange} placeholder="e.g. A5, 5x7 inches" />
                </div>
                <div className="form-group">
                  <label>Finish (optional)</label>
                  <input type="text" name="finish" value={form.finish} onChange={handleChange} placeholder="e.g. Matte, Glossy, Foil" />
                </div>
                <div className="form-group">
                  <label>Deadline (optional)</label>
                  <input type="text" name="deadline" value={form.deadline} onChange={handleChange} placeholder="e.g. 2 weeks, Dec 15" />
                </div>
                <div className="form-group quote-notes">
                  <label>Additional Notes (optional)</label>
                  <textarea name="notes" value={form.notes} onChange={handleChange} rows="3" placeholder="Describe your design, colors, references..."></textarea>
                </div>
              </div>

              <div className="quote-actions">
                <button type="button" className="btn btn-outline" onClick={() => setStep(1)}>← Back</button>
                <button type="submit" className="btn btn-primary btn-lg" disabled={isGenerating}>
                  {isGenerating ? <MatrixLoader variant="scan" rounded label="Preparing" /> : <><span className="btn-text">Generate Quote & Send</span><span className="btn-icon">→</span></>}
                </button>
              </div>
            </form>
          </div>
        )}

        {step === 3 && (
          <div className="quote-step quote-done">
            <div className="quote-success-icon">✓</div>
            <h2>Quote Sent!</h2>
            <p>We've opened WhatsApp with your quote request. A PDF has also been downloaded for your records.</p>
            <p className="quote-done-note">We'll review your requirements and send the final quote within a few hours.</p>
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
