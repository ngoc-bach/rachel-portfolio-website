import React from "react";
import Intro from "./Intro";
import Project from "./Project";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import { projects } from "../data";

const Projects = () => {
  return (
    <>
      <Container style={{ marginTop: "4rem" }}>
        <Row xs={1} lg={2} className="g-4">
          <Intro />
          {projects.map((project) => {
            return <Project key={project.id} project={project} />;
          })}
        </Row>
      </Container>
    </>
  );
};

export default Projects;
