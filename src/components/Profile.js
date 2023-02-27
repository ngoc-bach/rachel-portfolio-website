import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import picture from "../images/rachel.jpg";
import team from "../images/team_lewagon.jpg";
import marathon from "../images/marathon.jpg";

const Profile = () => {
  return (
    <>
      <Container style={{ marginTop: "5rem" }}>
        <Row>
          <Col>
            <Card style={{ border: "none", backgroundColor: "#fbfbfb" }}>
              <Card.Img src={picture} style={{ width: "50%" }} />
            </Card>
          </Col>
          <Col style={{ borderTop: "1px solid #001253" }}>
            <Card
              style={{
                border: "none",
                backgroundColor: "#fbfbfb",
                borderRadius: "0",
                marginTop: "1rem",
              }}
            >
              <Card.Body style={{ marginBottom: "1rem" }}>
                <Card.Title>
                  <h1>Hi, I'm Rachel Bach</h1>
                </Card.Title>
                <br />
                <Card.Text
                  style={{ lineHeight: "1.75rem", fontSize: "1.15rem" }}
                >
                  I'm a former Customer Experience Specialist with 5+ of
                  experience and a background in UI/UX. I want to make a career
                  change to software engineer with completing 10-week full-time
                  intensive coding bootcamp at Le Wagon.
                </Card.Text>
                <Card.Text
                  style={{ lineHeight: "1.75rem", fontSize: "1.15rem" }}
                >
                  Equipped with an assortment of technologies, I am open to new
                  opportunities and looking to utilise my previous experience
                  and transferable skills going forward in a new role as a
                  developer.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      <Container style={{ marginTop: "5rem" }}>
        <Row>
          <Col style={{ borderTop: "1px solid #001253" }}>
            <Card
              style={{
                border: "none",
                backgroundColor: "#fbfbfb",
                marginTop: "1rem",
              }}
            >
              <Card.Body>
                <Card.Title>
                  <h1>Le Wagon - final project team </h1>
                </Card.Title>
                <br />
                <Card.Text
                  style={{ lineHeight: "1.75rem", fontSize: "1.15rem" }}
                >
                  I'm on a great team for our final project at Le Wagon. Working
                  with them has been amazing and we've had a lot of fun together
                  🧡
                </Card.Text>
                <Card.Text
                  style={{ lineHeight: "1.75rem", fontSize: "1.15rem" }}
                >
                  Feel free to have a look at our Dateful{" "}
                  <a href="https://www.dateful.me/" alt="Dateful">
                    link
                  </a>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ border: "none", backgroundColor: "#fbfbfb" }}>
              <Card.Img src={team} style={{ width: "100%" }} />
            </Card>
          </Col>
        </Row>
      </Container>

      <Container style={{ marginTop: "5rem" }}>
        <Row>
          <Col style={{ borderTop: "1px solid #001253" }}>
            <Card
              style={{
                border: "none",
                backgroundColor: "#fbfbfb",
                marginTop: "1rem",
              }}
            >
              <Card.Body>
                <Card.Title>
                  <h1>Melbourne Marathon Festival</h1>
                </Card.Title>
                <br />
                <Card.Text
                  style={{ lineHeight: "1.75rem", fontSize: "1.15rem" }}
                >
                  Running is one of my hobbies, and this was my first running
                  event in Melbourne.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ border: "none", backgroundColor: "#fbfbfb" }}>
              <Card.Img src={marathon} style={{ width: "100%" }} />
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Profile;
