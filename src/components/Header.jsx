import { Link } from "react-router-dom";
import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { useGlobalAuthContext } from "../hooks/useGlobalAuthContext";
import logo from "../images/logo.png";
import "../style/header.css";

const Header = () => {
  const { user, logout } = useGlobalAuthContext();
  return (
    <nav className=" navbar navbar-expand-lg  m-3 ">
      <div className="container-fluid">
        <Link className="navbar-brand " to="/">
          <img src={logo} className="logo" />
        </Link>
        <button
          className="navbar-toggler "
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active mx-3 text-white" to="/">
                Home
              </Link>
            </li>
            {/* <li className="nav-item">
              <Link className="nav-link mx-3" to="/products">
                Products
              </Link>
            </li> */}
            <li className="nav-item">
              <Link className="nav-link mx-3 text-white" to="/about">
                Abous Us
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link mx-3 text-white" to="/contact">
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white share" to="/shareresources">
                Share Resources
              </Link>
            </li>
            <li className="nav-item nav-dropdown ">
              <NavDropdown
                className="custom-dropdown"
                title="All Categories"
                id="basic-nav-dropdown"
              >
                <NavDropdown.Item as={Link} to="/htmlpage">
                  HTML Resources
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/csspage">
                  CSS Resources
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/jspage">
                  JS Resources
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/reactpage">
                  React Resources
                </NavDropdown.Item>
              </NavDropdown>
            </li>
          </ul>

          <div>
            <div className="log-in-and-out">
              {user ? (
                <>
                  <p className="user-name">{`hello ${user.name}`}</p>
                  <Link to="/" className="btn login-btn" onClick={logout}>
                    Log Out
                  </Link>
                </>
              ) : (
                <Link to="/logIn" className="btn login-btn">
                  Log In
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Header;
