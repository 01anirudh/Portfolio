import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ColorSharp from "../../Assets/img/color-sharp.png";
import { motion } from "framer-motion";

// ── Skill data with CDN icons ──────────────────────────────────
// Using devicons CDN — no npm packages needed, just img src URLs
const skillsData = [
  { name: "C++",         icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
  { name: "Python",      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "React.js",    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "HTML5",       icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "CSS3",        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { name: "JavaScript",  icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "MySQL",       icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
  { name: "Git",         icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "Unity",       icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unity/unity-original.svg" },
];

export const Skills = () => {
  // We duplicate the array so the marquee can loop seamlessly.
  // When the first copy scrolls off screen, the duplicate is already in place.
  const doubled = [...skillsData, ...skillsData];

  return (
    <section className="skill" id="skills">
      <Container fluid>
        <Row>
          <Col>
            <div className="skill-bx">

              {/* Heading animates in from above when scrolled into view */}
              <motion.div
                initial={{ opacity: 0, y: -24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2>Skills</h2>
                <p>Building modern web experiences with these technologies.</p>
              </motion.div>

              {/* ── Infinite Marquee Slideshow ──────────────────────────
                  How it works:
                  1. .marquee-track is a flex row wider than the container.
                  2. CSS @keyframes "marquee" slides it left continuously.
                  3. We duplicate the cards so the loop is seamless.
                  4. overflow:hidden on .marquee-wrapper clips what's outside.
                  5. :hover pauses the animation (animation-play-state: paused).
              ────────────────────────────────────────────────────────── */}
              <div className="marquee-wrapper">
                <div className="marquee-track">
                  {doubled.map((skill, index) => (
                    <div className="skill-pill" key={index}>
                      <img src={skill.icon} alt={skill.name} />
                      <span>{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </Col>
        </Row>
      </Container>

      <img className="background-image-left" src={ColorSharp} alt="" />
    </section>
  );
};
