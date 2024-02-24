import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import resume from "../images/RachelBach_resume.pdf";

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
              style={{ fontSize: "1.2rem", margin: "0 1rem" }}
              to="/"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              Projects
            </NavLink>
            <NavLink
              style={{ fontSize: "1.2rem", margin: "0 1rem" }}
              to="/profile"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              Profile
            </NavLink>
            <a
              href={resume}
              className="nav-link"
              style={{
                fontSize: "1.2rem",
                margin: "0 1rem",
                textDecoration: "none",
                color: "#f45d48",
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
