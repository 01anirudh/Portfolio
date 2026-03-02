import { Container, Col, Row } from "react-bootstrap";
import { motion } from "framer-motion";

const icons = {
  email:   <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 7L2 7"/></svg>,
  linkedin:<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>,
  github:  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>,
  insta:   <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>,
  map:     <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>,
};

const socialLinks = [
  { icon: icons.linkedin, label: "LinkedIn", url: "https://www.linkedin.com/in/anirudhkandwal/" },
  { icon: icons.github,   label: "GitHub",   url: "https://github.com/01anirudh"              },
  { icon: icons.insta,    label: "Instagram", url: "https://www.instagram.com/anirudhkandwal/"},
];

export const Contact = () => {
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

        {/* ── Info Grid ────────────────────────────── */}
        <Row className="justify-content-center align-items-start g-4">
          <Col md={8} lg={6}>
            <motion.div className="contact-info-card"
              initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }}
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
        </Row>

      </Container>
    </section>
  );
};
