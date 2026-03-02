import { useState } from "react";
import { Container, Col, Row } from "react-bootstrap";
import { motion } from "framer-motion";

const icons = {
  user:    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/></svg>,
  email:   <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 7L2 7"/></svg>,
  phone:   <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.9v3a2 2 0 0 1-2.2 2A19.8 19.8 0 0 1 4.4 6.3 2 2 0 0 1 6.3 4h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.6a2 2 0 0 1-.5 2.1L10.1 12a16 16 0 0 0 5.9 5.9l1.6-1.4a2 2 0 0 1 2.1-.5c.8.3 1.7.6 2.6.7A2 2 0 0 1 22 17z"/></svg>,
  message: <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>,
  send:    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>,
  linkedin:<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>,
  github:  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>,
  insta:   <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>,
  map:     <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>,
};

const socialLinks = [
  { icon: icons.linkedin, label: "LinkedIn", url: "https://www.linkedin.com/in/anirudhkandwal/" },
  { icon: icons.github,   label: "GitHub",   url: "https://github.com/01anirudh"              },
  { icon: icons.insta,    label: "Instagram", url: "https://www.instagram.com/anirudh.kandwal/"},
];

export const Contact = () => {
  const init = { firstName:"", lastName:"", email:"", phone:"", message:"" };
  const [formDetails, setFormDetails] = useState(init);
  const [buttonText, setButtonText]   = useState("Send Message");
  const [status, setStatus]           = useState({});

  const onFormUpdate = (k, v) => setFormDetails({ ...formDetails, [k]: v });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formDetails.firstName.trim() || !formDetails.email.trim() || !formDetails.message.trim()) {
      setStatus({ success: false, message: "Please fill in all required fields." }); return;
    }
    if (!/\S+@\S+\.\S+/.test(formDetails.email)) {
      setStatus({ success: false, message: "Please enter a valid email address." }); return;
    }
    setButtonText("Sending...");
    try {
      const res  = await fetch("/.netlify/functions/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json;charset=utf-8" },
        body: JSON.stringify(formDetails),
      });
      const data = await res.json();
      setFormDetails(init);
      setStatus(res.ok && data.code === 200
        ? { success: true,  message: "✓ Message sent! I'll get back to you soon." }
        : { success: false, message: data.status || "Something went wrong. Try again." }
      );
    } catch {
      setStatus({ success: false, message: "Network error. Please try again later." });
    }
    setButtonText("Send Message");
  };

  return (
    <section className="contact" id="connect">
      <Container fluid>

        {/* ── Header ─────────────────────────────── */}
        <motion.div className="contact-header"
          initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }}
          transition={{ duration:0.6 }} viewport={{ once:true }}
        >
          <span className="contact-eyebrow">Let's Talk</span>
          <h2>Get In Touch</h2>
          <p className="contact-subtitle">
            Have a project in mind or just want to say hello?<br/>
            I'd love to hear from you — I reply within 24 hours.
          </p>

          {/* Quick social chips */}
          <div className="contact-socials">
            {socialLinks.map(s => (
              <a key={s.label} href={s.url} target="_blank" rel="noreferrer" className="contact-social-chip">
                {s.icon} <span>{s.label}</span>
              </a>
            ))}
          </div>
        </motion.div>

        {/* ── Info + Form grid ────────────────────── */}
        <Row className="justify-content-center align-items-start g-4">

          {/* Left: quick info card */}
          <Col md={4} lg={3}>
            <motion.div className="contact-info-card"
              initial={{ opacity:0, x:-30 }} whileInView={{ opacity:1, x:0 }}
              transition={{ duration:0.6, delay:0.1 }} viewport={{ once:true }}
            >
              <div className="info-item">
                <span className="info-icon">{icons.email}</span>
                <div>
                  <p className="info-label">Email</p>
                  <p className="info-value">anirudhkandwal@gmail.com</p>
                </div>
              </div>
              <div className="info-item">
                <span className="info-icon">{icons.map}</span>
                <div>
                  <p className="info-label">Location</p>
                  <p className="info-value">IIT Patna, Bihar, India</p>
                </div>
              </div>
              <div className="info-divider" />
              <p className="info-note">Open to internships, freelance projects, and research collaborations.</p>
            </motion.div>
          </Col>

          {/* Right: glass form */}
          <Col md={8} lg={7}>
            <motion.div className="contact-card"
              animate={status.success === false ? { x:[-8,8,-6,6,0] } : {}}
              transition={{ duration:0.4 }}
              initial={{ opacity:0, x:30 }} whileInView={{ opacity:1, x:0 }}
              viewport={{ once:true }}
            >
              <form onSubmit={handleSubmit}>
                <Row>
                  <Col sm={6} className="px-2 mb-3">
                    <label className="field-label">{icons.user} First Name</label>
                    <input type="text" value={formDetails.firstName} placeholder="Anirudh"
                      onChange={e => onFormUpdate("firstName", e.target.value)} />
                  </Col>
                  <Col sm={6} className="px-2 mb-3">
                    <label className="field-label">{icons.user} Last Name</label>
                    <input type="text" value={formDetails.lastName} placeholder="Kandwal"
                      onChange={e => onFormUpdate("lastName", e.target.value)} />
                  </Col>
                </Row>
                <Row>
                  <Col sm={6} className="px-2 mb-3">
                    <label className="field-label">{icons.email} Email *</label>
                    <input type="email" value={formDetails.email} placeholder="you@example.com"
                      onChange={e => onFormUpdate("email", e.target.value)} />
                  </Col>
                  <Col sm={6} className="px-2 mb-3">
                    <label className="field-label">{icons.phone} Phone</label>
                    <input type="text" value={formDetails.phone} placeholder="+91 00000 00000"
                      onChange={e => onFormUpdate("phone", e.target.value)} />
                  </Col>
                </Row>
                <div className="px-2 mb-3">
                  <label className="field-label">{icons.message} Message *</label>
                  <textarea rows="5" value={formDetails.message}
                    placeholder="Tell me about your project or idea..."
                    onChange={e => onFormUpdate("message", e.target.value)} />
                </div>
                <div className="px-2">
                  <button type="submit" className="contact-submit" disabled={buttonText === "Sending..."}>
                    <span>{buttonText}</span>{icons.send}
                  </button>
                </div>
                {status.message && (
                  <div className="px-2 mt-3">
                    <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                  </div>
                )}
              </form>
            </motion.div>
          </Col>

        </Row>
      </Container>
    </section>
  );
};
