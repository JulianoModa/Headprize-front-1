import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from '../../assets/img/logo.svg';
import SN from "./SocialNetworks.js";
import { useNavigate } from 'react-router-dom';
import personIcon from "../../assets/img/people-icon.svg"
import { logout } from "../../services/auth";

const NavBarLogged = (props) => {
  const navigate = useNavigate();

  const {Logout, user} = props;

  const { isMobile, isTablet } = props;
  console.log(user);

  const goto = (path) => {
    navigate(path);
    window.scrollTo(0, 0);
  }

  const sair = () => {
    logout();
    Logout();
    goto("/");
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
            <Nav className={isMobile ? "ms-auto mobile-nav navbar-custom" : "ms-auto navbar-custom"}>
              <Nav.Link className={isMobile ? "navbar-link-mobile" : ""} href="/fale-conosco">Fale conosco</Nav.Link>
              <Nav.Link className={isMobile ? "navbar-link-mobile" : "navbar-link-custom"} href="/artigos">Artigos</Nav.Link>
              <Nav.Link className={isMobile ? "navbar-link-mobile" : "navbar-link-custom"} href="/vagas">Vagas</Nav.Link>
              <Nav.Link className={isMobile ? "navbar-link-mobile profile-section-mobile" : "navbar-link-custom profile-section"} href={user.usuario.tipoId == 4 ? "/empresa" : "/pessoa-fisica"}><div className="profile-picture-div"><img src={personIcon}/><span>+</span></div> <p>Olá, {user.usuario.nome}</p></Nav.Link>
              <Nav.Link className={isMobile ? "navbar-link-mobile" : "navbar-link-custom"} onClick={() => sair()}>Sair</Nav.Link>
              </Nav>
            <span className={isMobile ? "mobile-navbar-text" : "navbar-text"}>

              <div className="social-icon">
                <SN facebook={"https://www.facebook.com"} instagram={"https://www.instagram.com"} />
              </div>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  )
};

export default NavBarLogged;
