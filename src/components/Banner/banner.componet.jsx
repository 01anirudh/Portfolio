import {Container,Row,Col} from "react-bootstrap";
import HeaderImg from "../../Assets/img/Profile.jpg";
import { useState,useEffect } from "react";
import  "animate.css";
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting,setIsDeleting] = useState(false);
    const toRotate = ["React Developer","C++ Programmer"]
    const [text,setText] = useState('');
    const period = 2000;
    const [delta,setDelta] = useState(300 - Math.random() * 100);

    useEffect(()=>{
        let ticker = setInterval(()=>{
            tick();
        },delta)
        return ()=>{clearInterval(ticker)};
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[text])

    const tick = () =>{
        let i = loopNum%toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting?fullText.substring(0,text.length - 1): fullText.substring(0,text.length +1);

        setText(updatedText);
        if(isDeleting){
            setDelta(prevDelta=>prevDelta/2)
        }
        if(!isDeleting && updatedText === fullText){
            setIsDeleting(true);
            setDelta(period);
        }else if(isDeleting && updatedText === ""){
            setIsDeleting(false);
            setLoopNum(loopNum+1);
            setDelta(500);
        }
    }
    return(
        <section className="banner" id='home'>
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7} className="first">
                        <TrackVisibility>
                        {({isVisible})=>
                        <div className={isVisible ? "animate_animated animate_fadeIn":""}>
                        <span className="tagline">Welcome to my Portfolio</span>
                        <h1>{`Hi I am Anirudh Kandwal! `}<span className="wrap">{text}</span></h1>
                        <p>M.Tech Student in Computer Science and Engineering<br></br>
                        Indian Institute of Technology Patna.<br></br> Frontend ReactJS developers create dynamic user interfaces using reusable components and declarative state management. Attention to detail, latest advancements, and optimization are crucial for delivering high-quality code.</p>
                        </div>}
                        </TrackVisibility>
                    </Col>
                    <Col xs={12} md={6} xl={5} className="second">
                        <img
                        src={HeaderImg} alt="Header Img"
                        />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}