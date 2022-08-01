import React from "react";
import { Container, Button } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import Image from "react-bootstrap/Image";
import "./Navbar.css";
import logo from "../../../images/logo.png";

const activeStyle = {
  fontWeight: "bold",
  fontSize: "1.2rem",
  textAlign: "center",
  color: "goldenrod",
};
const Header = () => {
  const { user, logOut } = useAuth();

  return (
    <Navbar collapseOnSelect expand="lg">
      <Container>
        <Navbar.Brand>
          <NavLink
            className="navItem py-5"
            activeStyle={activeStyle}
            to="/home"
          >
            <Image
              alt=""
              src={logo}
              width="200"
              height="30"
              className="d-inline-block align-top Image"
              to="/home"
            />
          </NavLink>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <NavLink
              className="navItem ml-3"
              activeStyle={activeStyle}
              to="/home"
            >
              HOME
            </NavLink>

            <NavLink
              className="navItem"
              activeStyle={activeStyle}
              to="/watches"
            >
              WATCH
            </NavLink>
            <NavLink className="navItem" activeStyle={activeStyle} to="/model">
              ABOUT
            </NavLink>
            <NavLink
              className="navItem"
              activeStyle={activeStyle}
              to="/contacts"
            >
              CONTACTS
            </NavLink>
          </Nav>
          <Nav>
            {user?.email ? (
              <>
                <NavLink
                  className="navItem text-decoration-none me-3"
                  to="/dashboard"
                >
                  Dashboard
                </NavLink>
                <Button size="sm" variant="danger" onClick={logOut}>
                  Logout
                </Button>
                <NavLink className="text-decoration-none ms-3" to="#">
                  {user.displayName}
                </NavLink>
              </>
            ) : (
              <NavLink to="/login">
                <Button size="sm" variant="primary">
                  LogIn
                </Button>
              </NavLink>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
