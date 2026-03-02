import { Col, Container, Row } from "react-bootstrap";
import { ProjectCard } from "../Project-card/project-card.component";
import colorSharp2 from "../../Assets/img/color-sharp2.png";
import projImg2 from "../../Assets/img/project-img2.png";
import projSkillNet from "../../Assets/img/project-skillnet.png";
import projDR from "../../Assets/img/project-diabetic-retinopathy.png";
import { motion } from "framer-motion";
import TrackVisibility from 'react-on-screen';

const cardProjects = [
  {
    title: "Crwn-Clothing",
    description: "Ecommerce Website",
    imgUrl: projImg2,
    linkUrl: "https://itachi-crwn-clothing.netlify.app/",
  },
  {
    title: "SkillNet",
    description: "AI-powered skill assessment & learning platform",
    imgUrl: projSkillNet,
    linkUrl: "https://github.com/01anirudh/SkillNet",
  },
  {
    title: "Diabetic Retinopathy Classification",
    description: "Deep learning CNN model for medical eye image diagnosis",
    imgUrl: projDR,
    linkUrl: "https://github.com/01anirudh/DR-Detection-using-CNN",
  },
];

const listProjects = [
  {
    title: "Knowledge Distillation on Satellite Imagery",
    description: "UNet segmentation with knowledge distillation on satellite data",
    linkUrl: "https://github.com/01anirudh/Segmentation-of-Satelliete-Imagery-with-Knowledge-distillation-on-Unet-Model-",
    tag: "Deep Learning",
  },
  {
    title: "Amazon Review Analysis",
    description: "NLP-based sentiment analysis on Amazon product reviews",
    linkUrl: "https://github.com/01anirudh/Amazon_Review_Analysis",
    tag: "NLP",
  },
];

export const Projects = () => {
  return (
    <section className="project" id="project">
      <Container fluid>
        <Row>
          <Col>
            <TrackVisibility>
              {({ isVisible }) =>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5 }}
                >
                  <h2>Projects</h2>
                  <p>A selection of things I've built — from web apps to deep learning research.</p>
                </motion.div>
              }
            </TrackVisibility>

            {/* ── Card grid ── */}
            <Row className="mb-5">
              {cardProjects.map((project, index) => (
                <ProjectCard key={index} {...project} />
              ))}
            </Row>

            {/* ── List projects ── */}
            <div className="proj-list">
              {listProjects.map((proj, i) => (
                <motion.a
                  key={i}
                  href={proj.linkUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="proj-list-item"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="proj-list-left">
                    <span className="proj-list-tag">{proj.tag}</span>
                    <h4>{proj.title}</h4>
                    <p>{proj.description}</p>
                  </div>
                  <span className="proj-list-arrow">→</span>
                </motion.a>
              ))}
            </div>

          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="" />
    </section>
  );
};