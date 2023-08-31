import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import resume from "../images/Rachel_resume.pdf";

const StyledNavbar = () => {
  return (
    <Navbar
      sticky="top"
      style={{ marginTop: "2rem", backgroundColor: "#fbfbfb" }}
      expand="lg"
    >
      <Container
        style={{ borderBottom: "2px dashed #d2d2d2", paddingBottom: "2rem" }}
      >
        <Navbar.Brand className="nav-brand" href="/">
          <strong>RACHEL BACH</strong>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="nav-title">
            <NavLink
              style={{ padding: "0 2rem", fontSize: "1.2rem" }}
              to="/"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              Projects
            </NavLink>
            <NavLink
              style={{ padding: "0 2rem", fontSize: "1.2rem" }}
              to="/profile"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              Profile
            </NavLink>
            <a
              href={resume}
              style={{
                padding: "0 2rem",
                fontSize: "1.2rem",
                textDecoration: "none",
                color: "#FC7300",
              }}
              download
            >
              Resume
            </a>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default StyledNavbar;
