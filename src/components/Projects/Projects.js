import './Projects.css'
import expenseTrackerImage from './images/expenseTracker.PNG'
import covid19TrackerImage from './images/covid19Tracker.PNG'
import shoesStoreImage from './images/shoesStoreReactRouter.PNG'
import queenRaceImage from './images/redQueenRace.PNG'
import animatedWebsiteImage from './images/animatedWebsite.PNG'

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";





const Projects = () => {

    return (
        <div id="home" className="about route bg-image background">
            <div id="stars" />
            <div id="stars2" />
            <div id="stars3" />
            <div id="projectsContainer" className='container-fluid' >
                <Container fluid className="project-section">
                   
                    <Container>
                        <h1 className="project-heading text-center">
                            My Recent <strong className="purple">Works </strong>
                        </h1>
                        <p style={{ color: "white" }} className="text-center">
                            Here are a few projects I've worked on recently.
                        </p>
                        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
                            <Col md={4} className="project-card">
                                <ProjectCard
                                    imgPath={expenseTrackerImage}
                                    isBlog={false}
                                    title="Expense Tracker"
                                    link="https://muhammadusamatariq.github.io/React.js_Epense-Tracker-App/"
                                />
                            </Col>

                            <Col md={4} className="project-card">
                                <ProjectCard
                                    imgPath={covid19TrackerImage}
                                    isBlog={false}
                                    title="Covid19 Tracker"
                                    link="https://muhammadusamatariq.github.io/Covid-19-tracker-React.js/"
                                />
                            </Col>

                            <Col md={4} className="project-card">
                                <ProjectCard
                                    imgPath={shoesStoreImage}
                                    isBlog={false}
                                    title="Shoes Store"
                                    link="https://muhammadusamatariq.github.io/Shoes-Store-React-Router-Dom-React.js/"
                                />
                            </Col>

                            <Col md={4} className="project-card">
                                <ProjectCard
                                    imgPath={queenRaceImage}
                                    isBlog={false}
                                    title="Red Queen Race Game"
                                    link="https://muhammadusamatariq.github.io/red-queen-race-web-animations-with-react.js/"
                                />
                            </Col>

                            <Col md={4} className="project-card">
                                <ProjectCard
                                    imgPath={animatedWebsiteImage}
                                    isBlog={false}
                                    title="Animated React Website"
                                    link="https://muhammadusamatariq.github.io/animated-website-react.js/"
                                />
                            </Col>
                        </Row>
                       
                    </Container>
                </Container>
                </div>
            </div>
            );
}

            export default Projects;