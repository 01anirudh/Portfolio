import { Col, Container, Row } from "react-bootstrap";
import navIcon1 from "../../Assets/img/linkdin.svg";
import navIcon2 from "../../Assets/img/fb.svg";
import navIcon3 from "../../Assets/img/insta.svg";
import navIcon4 from "../../Assets/img/github.svg";
import Logo from "../../Assets/img/logo.png";

export const Footer = () =>{
    return (
        <footer className="footer">
            <Container>
            <Row className="align-item-center">
                <Col sm={6}>
                    <img src={Logo} alt="LOGO"/>
                </Col>
                <Col sm={6} className="text-center text-sm-end">
                    <div className="social-icon">
                    <a href="https://www.facebook.com/anirudh.kandwal"><img src={navIcon1} alt="" /></a>
                    <a href="https://www.linkedin.com/in/anirudh-kandwal-96567520b/"><img src={navIcon2} alt="" /></a>
                    <a href="https://www.instagram.com/anirudhkandwal/"><img src={navIcon3} alt="" /></a>
                    <a href="https://github.com/01anirudh"><img src={navIcon4} alt="" /></a>
                    </div>
                    <p>CopyRight 2023,</p>
                </Col>
            </Row>
            </Container>
        </footer>
    )
}