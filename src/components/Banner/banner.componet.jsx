import {Container,Row,Col} from "react-bootstrap";
import {ArrowRightCircle} from "react-bootstrap-icons";
import HeaderImg from "../../Assets/img/Profile.jpg";
import { useState,useEffect } from "react";

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting,setIsDeleting] = useState(false);
    const toRotate = ["Web Developer","Web Designer","C++ Programmer"]
    const [text,setText] = useState('');
    const period = 2000;
    const [delta,setDelta] = useState(300 - Math.random() * 100);

    useEffect(()=>{
        let ticker = setInterval(()=>{
            tick();
        },delta)
        return ()=>{clearInterval(ticker)};
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
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">Welcome to my Protfolio</span>
                        <h1>{`Hi I am Webdecoded`}<span className="wrap">{text}</span></h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum in ab veniam dolores optio eveniet nesciunt quidem voluptates at voluptatem ipsum nulla, suscipit dolor, quia quibusdam sequi, dolore asperiores excepturi?</p>
                        <button onClick={()=>console.log('connect')}>Let's Connect<ArrowRightCircle size={25}/></button>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img
                        src={HeaderImg} alt="Header Img"
                        />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}