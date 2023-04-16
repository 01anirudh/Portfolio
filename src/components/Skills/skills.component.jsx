import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Container,Row,Col } from "react-bootstrap";
import ColorSharp from "../../Assets/img/color-sharp.png";
import meter1 from "../../Assets/img/meter1.svg";
import meter2 from "../../Assets/img/meter2.svg";
import meter3 from "../../Assets/img/meter3.svg";

export const Skills = () =>{
    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
     return (
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                    <div className="skill-bx">
                        <h2>Skills</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, fuga fugit inventore quaerat nam aliquam aut facere autem, cum error repellat delectus qui nemo, mollitia illo eos quisquam provident perferendis.</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={meter1} alt=""/>
                                <h5>C++</h5>
                            </div>
                            <div className="item">
                                <img src={meter1} alt=""/>
                                <h5>MySQL</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt=""/>
                                <h5>React.js</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt=""/>
                                <h5>Unity</h5>
                            </div>
                        </Carousel>
                    </div>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-left" src={ColorSharp} alt=""/>
        </section>
     )
}
