import Card from "react-bootstrap/Card";
import { Container } from "react-bootstrap";
import imgError from "../images/404-error.jpeg";

function Error() {
  return (
    <Container>
      <Card style={{ maxWidth: "60%", border: "none", margin: "2rem auto" }}>
        <Card.Body style={{ background: "#fbfbfb", padding: "1rem 0" }}>
          <Card.Link href="/">Back to home</Card.Link>
        </Card.Body>
        <Card.Img variant="bottom" src={imgError} />
      </Card>
    </Container>
  );
}

export default Error;
