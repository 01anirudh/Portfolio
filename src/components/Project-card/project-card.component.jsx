import { Col } from "react-bootstrap";
import { motion } from "framer-motion";

// 🎓 LESSON: Props destructuring — instead of writing props.title, props.linkUrl etc.
// we destructure them right in the function signature: ({ title, description, ... })
// This is cleaner and is the standard React pattern.

export const ProjectCard = ({ title, description, imgUrl, linkUrl }) => {
  return (
    <Col size={12} sm={6} md={4}>
      {/* 🎓 LESSON: Framer Motion whileHover
          Instead of CSS :hover, we can use Framer Motion's whileHover prop.
          scale: 1.03 means "grow to 103% of original size on hover".
          transition.type: "spring" gives it a bouncy, physical feel
          instead of a linear CSS transition. */}
      <motion.div
        className="proj-imgbx"
        whileHover={{ scale: 1.03 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        {imgUrl
          ? <img src={imgUrl} alt={title} />
          : <div className="proj-img-placeholder" aria-hidden="true" />
        }

        {/* 🎓 LESSON: This div starts invisible (opacity:0 in CSS)
            and slides up from bottom on hover — all handled by
            the .proj-imgbx:hover .proj-txtx rules in App.css.
            No JS needed for hover-reveal effects! Pure CSS does it. */}
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>

          {/* 🎓 LESSON: Conditional rendering with && operator.
              If linkUrl exists AND is not "*", show the View Project button.
              linkUrl === "*" is a placeholder meaning "no real link yet".
              target="_blank" opens in a new tab.
              rel="noreferrer" is a security best practice with target="_blank"
              — it prevents the new tab from accessing your page via window.opener. */}
          {linkUrl && linkUrl !== "*" && (
            <a
              href={linkUrl}
              target="_blank"
              rel="noreferrer"
              className="proj-link-btn"
              onClick={(e) => e.stopPropagation()} // prevent card scale animating on link click
            >
              View Project →
            </a>
          )}
        </div>
      </motion.div>
    </Col>
  );
};