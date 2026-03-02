import {Container,Row,Col} from "react-bootstrap";
import HeaderImg from "../../Assets/img/Profile.jpeg";
import { useState, useEffect } from "react";
import "animate.css";
import TrackVisibility from 'react-on-screen';
import { motion } from "framer-motion";

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    // 🎓 LESSON: Array of strings the typing animation rotates through
    const toRotate = ["FullStack Developer", "C++ Programmer", "ML Enthusiast"]
    const [text, setText] = useState('');
    const period = 2000;
    const [delta, setDelta] = useState(300 - Math.random() * 100);

    // 🎓 LESSON: useEffect with [text] dependency array means this runs
    // every time 'text' changes — creating our typing effect loop
    useEffect(() => {
        let ticker = setInterval(() => { tick(); }, delta)
        return () => { clearInterval(ticker) };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting
            ? fullText.substring(0, text.length - 1)
            : fullText.substring(0, text.length + 1);

        setText(updatedText);
        if (isDeleting) { setDelta(prevDelta => prevDelta / 2) }
        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        } else if (isDeleting && updatedText === "") {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }
    }

    return (
        // 🎓 LESSON: position:relative on the section lets us
        // position the blob divs absolutely INSIDE it
        <section className="banner" id='home'>

            {/* ── Animated background blobs ──────────────────────
                These are plain <div>s styled as big blurry circles
                in App.css (.blob, .blob-1, .blob-2, .blob-3).
                They create the colourful nebula effect behind the text.
                pointer-events:none in CSS makes them non-interactive.
            ──────────────────────────────────────────────────── */}
            <div className="blob blob-1" aria-hidden="true" />
            <div className="blob blob-2" aria-hidden="true" />
            <div className="blob blob-3" aria-hidden="true" />

            <Container fluid>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7} className="first">
                        <TrackVisibility>
                        {({ isVisible }) =>
                        <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>

                            <span className="tagline">Welcome to my Portfolio</span>

                            {/* 🎓 LESSON: The <span className="wrap"> wraps the typed text.
                                In App.css, .wrap gets gradient-text treatment so the
                                typing animation appears in our indigo→pink gradient colour. */}
                            <h1>
                                {`Hi, I'm Anirudh! `}
                                <span className="wrap">{text}</span>
                            </h1>

                            {/* 🎓 LESSON: Framer Motion <motion.div>
                                initial  = where it starts (invisible, shifted left)
                                animate  = where it goes  (fully visible, in place)
                                transition = how it gets there (0.5s with a 0.2s delay)
                                This creates a smooth "slide in from left" entrance. */}
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: 0.3 }}
                            >
                                <p>
                                    M.Tech Student in Computer Science &amp; Engineering<br/>
                                    Indian Institute of Technology Patna.<br/>
                                    Building high-performance web experiences and diving deep
                                    into machine learning research.
                                </p>
                            </motion.div>

                        </div>}
                        </TrackVisibility>
                    </Col>

                    <Col xs={12} md={6} xl={5} className="second">
                        {/* Static image — fades in once, then stays still.
                            No infinite animation so it doesn't distract. */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                        >
                            <img
                                src={HeaderImg}
                                alt="Anirudh Kandwal"
                            />
                        </motion.div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}