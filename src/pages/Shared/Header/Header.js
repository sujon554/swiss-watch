import React from "react";
import { Container, Navbar, Nav, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
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
    <div className="Navbar py-3">
      <Navbar collapseOnSelect expand="lg" variant="dark">
        <Container>
          <Navbar.Brand>
            <NavLink
              className="navItem py-5"
              activeStyle={activeStyle}
              to="/home"
            >
              <img
                alt=""
                src={logo}
                width="200"
                height="30"
                className="d-inline-block align-top"
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
              <NavLink
                className="navItem"
                activeStyle={activeStyle}
                to="/model"
              >
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
            <Nav className="d-flex align-items-center">
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
    </div>
  );
};

export default Header;
