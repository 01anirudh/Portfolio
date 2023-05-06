import { Col, Container, Row, Tab } from "react-bootstrap";
import { ProjectCard } from "../Project-card/project-card.component";
import colorSharp2 from "../../Assets/img/color-sharp2.png";
import projImg1 from "../../Assets/img/project-img1.png";
import projImg2 from "../../Assets/img/project-img2.png";

import  "animate.css";
import TrackVisibility from 'react-on-screen';

export const Projects = () =>{
    const projects = [
        {
            title: "Monster-Rolodex",
            description: "Design & Development",
            imgUrl: projImg1,
            linkUrl: "*",
          },
          {
            title: "Crwn-Clothing",
            description: "Ecommerce Website",
            imgUrl: projImg2,
            linkUrl:`https://itachi-crwn-clothing.netlify.app/`,
          },
          
    ];
    return (
        <section className="project" id="project">
            <Container>
                <Row>
                    <Col>
                    <TrackVisibility>
                        {({isVisible})=>
                        <div className={isVisible ? "animate_animated animate_slideInUp":""}>
                    <h2>Projects</h2>
                    <p>ReactJS simplifies UI development with reusable components and declarative state management, enabling scalable and maintainable web projects.</p>
                          </div>}
                          </TrackVisibility>
                    <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    {/* <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Reactjs</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav> */}
                  <Tab.Content>
                    <Tab.Pane eventKey="first">
                        <Row>
                            {
                                projects.map((project,index)=>{
                                    return(
                                        <ProjectCard
                                        key={index}
                                        {...project}
                                        />
                                    )
                                })
                            }
                        </Row>
                    </Tab.Pane>
                    {/* <Tab.Pane eventKey="second">loremipsum</Tab.Pane>
                    <Tab.Pane eventKey="third">loremipsum</Tab.Pane> */}
                  </Tab.Content>
                  </Tab.Container>
                </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2} alt="" />
        </section>
    )
}