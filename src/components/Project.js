import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Stack from "react-bootstrap/Stack";
import Carousel from "react-bootstrap/Carousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Project = ({ project }) => {
  const {
    type,
    name,
    imgFrames,
    status,
    website,
    github,
    description,
    technologies,
    stacks,
  } = project;
  if (imgFrames.length === 1) {
    return (
      <>
        <Col>
          <Card
            style={{
              border: "none",
              marginTop: "1rem",
              display: "flex",
              alignItems: "center",
            }}
          >
            <Card.Img
              className="project-img"
              variant="bottom"
              src={imgFrames[0].img}
              style={{
                boxShadow: "0 5px 15px rgba(0, 0, 0, 0.1)",
                width: "400px",
              }}
            />
          </Card>
        </Col>
        <Col>
          <Card style={{ marginTop: "1rem" }}>
            <Card.Body style={{ marginBottom: "1rem" }}>
              <Card.Title
                style={{
                  lineHeight: "2.5rem",
                  fontSize: "1.5rem",
                  color: "#001253",
                }}
              >
                <div className="container-title">
                  <strong>
                    {type}: {name}
                  </strong>
                  <Stack direction="horizontal" gap={1}>
                    <a href={website}>
                      <FontAwesomeIcon
                        className="icon"
                        icon={faGlobe}
                        style={{ fontSize: "1.25rem", color: "#001253" }}
                      />
                    </a>
                    <a href={github}>
                      <FontAwesomeIcon
                        className="icon"
                        icon={faGithub}
                        style={{ fontSize: "1.45rem", color: "#001253" }}
                      />
                    </a>
                  </Stack>
                </div>
              </Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                {status}
              </Card.Subtitle>
              <br />
              <Card.Text style={{ lineHeight: "1.75rem", fontSize: "1.15rem" }}>
                <strong>Overview: </strong>
                {description}
              </Card.Text>
              <Card.Text style={{ lineHeight: "1.75rem", fontSize: "1.15rem" }}>
                <em>{technologies}</em>
              </Card.Text>
            </Card.Body>
            <Card.Footer style={{ padding: "1rem" }}>
              <Stack direction="horizontal" gap={2}>
                {stacks.map((stack) => {
                  return (
                    <div key={stack.id}>
                      <img
                        src={stack.url}
                        alt="programing language"
                        style={{ maxWidth: "40%", width: "5rem" }}
                      />
                    </div>
                  );
                })}
              </Stack>
            </Card.Footer>
          </Card>
        </Col>
      </>
    );
  } else {
    return (
      <>
        <Col>
          <Card
            style={{ border: "none", marginTop: "1rem", textAlign: "center" }}
          >
            <Carousel
              variant="dark"
              style={{ boxShadow: "0 5px 15px rgba(0, 0, 0, 0.1)" }}
            >
              <Carousel.Item interval={1000}>
                <Card.Img className="project-img" src={imgFrames[0].img} />
              </Carousel.Item>
              <Carousel.Item interval={1000}>
                <Card.Img className="project-img w-50" src={imgFrames[1].img} />
              </Carousel.Item>
              <Carousel.Item>
                <Card.Img className="project-img w-50" src={imgFrames[2].img} />
              </Carousel.Item>
            </Carousel>
          </Card>
        </Col>
        <Col>
          <Card style={{ marginTop: "1rem" }}>
            <Card.Body style={{ marginBottom: "1rem" }}>
              <Card.Title
                style={{
                  lineHeight: "2.5rem",
                  fontSize: "1.5rem",
                  color: "#001253",
                }}
              >
                <div className="container-title">
                  <strong>
                    {type}: {name}
                  </strong>
                  <Stack direction="horizontal" gap={1}>
                    <a href={website}>
                      <FontAwesomeIcon
                        className="icon"
                        icon={faGlobe}
                        style={{ fontSize: "1.25rem", color: "#001253" }}
                      />
                    </a>
                    <a href={github}>
                      <FontAwesomeIcon
                        className="icon"
                        icon={faGithub}
                        style={{ fontSize: "1.45rem", color: "#001253" }}
                      />
                    </a>
                  </Stack>
                </div>
              </Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                {status}
              </Card.Subtitle>
              <br />
              <Card.Text style={{ lineHeight: "1.75rem", fontSize: "1.15rem" }}>
                <strong>Overview: </strong>
                {description}
              </Card.Text>
              <Card.Text style={{ lineHeight: "1.75rem", fontSize: "1.15rem" }}>
                <em>{technologies}</em>
              </Card.Text>
            </Card.Body>
            <Card.Footer style={{ padding: "1rem" }}>
              <Stack direction="horizontal" gap={2}>
                {stacks.map((stack) => {
                  return (
                    <div key={stack.id}>
                      <img
                        src={stack.url}
                        alt="programing language"
                        style={{ maxWidth: "40%" }}
                      />
                    </div>
                  );
                })}
              </Stack>
            </Card.Footer>
          </Card>
        </Col>
      </>
    );
  }
};

export default Project;
