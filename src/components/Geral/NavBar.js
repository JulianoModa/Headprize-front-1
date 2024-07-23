import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from '../../assets/img/logo.svg';
import SN from "./SocialNetworks.js";
import { useNavigate } from 'react-router-dom';


const NavBar = (props) => {
  const navigate = useNavigate();

  const { isMobile, isTablet } = props;
  console.log("is", isMobile);

  const goto = (path) => {
    navigate(path);
    window.scrollTo(0, 0);
  }

  return (
      <Navbar expand="md" className={""}>
        <Container>
          <Navbar.Brand style={isTablet?{width:"20%"}:{}} className={isMobile?"mobile-navbar-brand":"" } href="/">
            <img src={logo} alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className={isMobile ? "ms-auto mobile-nav" : "ms-auto"}>
              <Nav.Link className={isMobile ? "navbar-link-mobile" : ""} href="/fale-conosco">Fale conosco</Nav.Link>
              <Nav.Link className={isMobile ? "navbar-link-mobile" : "navbar-link-custom"} href="/artigos">Artigos</Nav.Link>
              </Nav>
            <span className={isMobile ? "mobile-navbar-text" : "navbar-text"}>
            <button onClick={() => goto("/login")} className={isMobile ? "mobile-login-button" : "login-button"}>Entrar</button>
            <button onClick={() => goto("/cadastro")} className={isMobile ? "mobile-register-button" : "register-button"}>Cadastrar-se grátis</button>

              <div className="social-icon">
                <SN facebook={"https://www.facebook.com"} instagram={"https://www.instagram.com"} />
              </div>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  )
};

export default NavBar;
