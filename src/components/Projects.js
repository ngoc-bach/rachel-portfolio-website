import React from "react";
import { imgStackProject1, imgStackProject2 } from "../data";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import project1 from "../images/dateful.png";
import project2 from "../images/audikids.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Project = ({
  name,
  description,
  imageSrc,
  webLink,
  gitHub,
  subTitle,
  imgStackProjects,
  duration,
  team,
}) => {
  return (
    <Container style={{ marginTop: "5rem" }}>
      <Row>
        <Col>
          <Card style={{ border: "none" }}>
            <Card.Img
              className="project-img"
              variant="bottom"
              src={imageSrc}
              style={{ boxShadow: "0 5px 15px rgba(0, 0, 0, 0.1)" }}
            />
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Body style={{ marginBottom: "1rem" }}>
              <Card.Title
                style={{
                  lineHeight: "2.5rem",
                  fontSize: "1.5rem",
                  color: "#001253",
                }}
              >
                <div className="container-title">
                  <strong>Web App: {name}</strong>
                  <div className="social-link">
                    <a href={webLink}>
                      <FontAwesomeIcon
                        className="icon"
                        icon={faGlobe}
                        style={{ fontSize: "1.25rem", color: "#001253" }}
                      />
                    </a>
                    <a href={gitHub}>
                      <FontAwesomeIcon
                        className="icon"
                        icon={faGithub}
                        style={{ fontSize: "1.45rem", color: "#001253" }}
                      />
                    </a>
                  </div>
                </div>
              </Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                {subTitle}
              </Card.Subtitle>
              <br />
              <Card.Text style={{ lineHeight: "1.75rem", fontSize: "1.15rem" }}>
                <strong>{name}</strong>
                {description}
              </Card.Text>
              <Card.Text style={{ lineHeight: "1.75rem", fontSize: "1.15rem" }}>
                <strong>Duration: </strong>
                {duration}
              </Card.Text>
              <Card.Text style={{ lineHeight: "1.75rem", fontSize: "1.15rem" }}>
                <strong>Team: </strong>
                {team}
              </Card.Text>
            </Card.Body>
            {imgStackProjects.map((imgStackProject) => {
              return (
                <Card.Footer
                  key={imgStackProject.id}
                  style={{ textAlign: "center" }}
                >
                  <img
                    src={imgStackProject.img1}
                    alt="programing language"
                    style={{ width: "45px", marginRight: "2.5rem" }}
                  />
                  <img
                    src={imgStackProject.img2}
                    alt="programing language"
                    style={{ width: "35px", marginRight: "2.5rem" }}
                  />
                  <img
                    src={imgStackProject.img3}
                    alt="programing language"
                    style={{ width: "30px", marginRight: "2.5rem" }}
                  />
                  <img
                    src={imgStackProject.img4}
                    alt="programing language"
                    style={{ width: "30px", marginRight: "2.5rem" }}
                  />
                  <img
                    src={imgStackProject.img5}
                    alt="programing language"
                    style={{ width: "100px", marginRight: "2.5rem" }}
                  />
                </Card.Footer>
              );
            })}
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

const Projects = () => {
  return (
    <>
      <Container style={{ marginTop: "5rem" }}>
        <Row>
          <Col>
            <h5>
              WED DEVELOPER | <em>FORMER CUSTOMER EXPERIENCE</em>
            </h5>
            <br />
            <h1>Hi there, I am Rachel 👋</h1>
            <h1>Happy to share my projects 👩🏻‍💻</h1>
          </Col>
          <Col></Col>
        </Row>
      </Container>

      <Project
        name="Dateful"
        description=" is a web based app that offers couples a resource for different dates and dating ideas. We realized there was a gap in the current market for a platform to help diversify and spice up people's dating lives. The USP (unique selling point) of the site was that each member of the couple could “favorite” dates for their partner to see, or “secret” dates so that they could surprise their partner at a preferred time."
        imageSrc={project1}
        webLink="https://www.dateful.me/experiences"
        gitHub="https://github.com/enazbanks/dateful"
        subTitle="Le Wagon | Melbourne | Final Project"
        imgStackProjects={imgStackProject1}
        duration="2 weeks"
        team="4 people"
      />
      <Project
        name="Audi Kids"
        description=" is an audio books web application designed to help children learn and improve their reading skills through engaging and interactive audio content. The idea for Audi Kids was developed with the goal of providing a fun and educational resource for children to enhance their reading experience."
        imageSrc={project2}
        webLink="https://audi-kids.netlify.app/"
        gitHub="https://github.com/ngoc-bach/Audi-Kids"
        subTitle="Personal Project | Melbourne | In progress"
        imgStackProjects={imgStackProject2}
        duration="in progress"
        team="personal project"
      />
    </>
  );
};

export default Projects;
