import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Stack from "react-bootstrap/Stack";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Project = ({ project }) => {
  const {
    type,
    name,
    imgWeb,
    status,
    website,
    github,
    description,
    duration,
    team,
    stacks,
  } = project;
  return (
    <>
      <Col>
        <Card style={{ border: "none", marginTop: "1rem" }}>
          <Card.Img
            className="project-img"
            variant="bottom"
            src={imgWeb}
            style={{ boxShadow: "0 5px 15px rgba(0, 0, 0, 0.1)" }}
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
            <Card.Subtitle className="mb-2 text-muted">{status}</Card.Subtitle>
            <br />
            <Card.Text style={{ lineHeight: "1.75rem", fontSize: "1.15rem" }}>
              <strong>Overview: </strong>
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
};

export default Project;
