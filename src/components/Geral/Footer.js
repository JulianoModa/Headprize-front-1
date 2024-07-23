import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ASN from "./AllSocialNetworks.js";
import { useNavigate } from 'react-router-dom';
import personIcon from "../../assets/img/people-icon.svg"
const Footer = (props) => {
  const navigate = useNavigate();
  const {Logout, user, isMobile, logged} = props;
  const goto = (path) => {
    navigate(path);
    window.scrollTo(0, 0);
  }

  
  return (
    <section className="all-footer" id="home">

            { (!logged) &&
              <div className={isMobile ? "mobile-header-footer" : "header-footer"}>
                <strong>Ta esperando o que para preencher sua vaga?</strong><button onClick={() => goto("/login")}>Publicar Agora</button>
              </div>
            }
        
        
        <Row className={isMobile? "aligh-items-center mobile-footer" : "aligh-items-center footer"}>
          <Col className={isMobile ? "non-border mobile-footer-col" : "non-border footer-col"} xs={12} md={isMobile ? 12 : 6} xl={isMobile ? 12 : 3}>
            <ul className="menu-footer">
                <li onClick={() => goto("/")}>Home</li>
                <li onClick={() => goto("/fale-conosco")}>Fale conosco</li>
                <li onClick={() => goto("/")}>Benefícios</li>
                <li onClick={() => goto("/artigos")}>Artigos</li>
                <li onClick={() => goto("/login")}>Política de privacidade</li>
            </ul>
          </Col>

          <Col style={{flexDirection:"column", justifyContent:"flex-start", textAlign:"center"}} className={isMobile ? "non-border mobile-footer-col" : "footer-col"}  xs={12} md={isMobile ? 12 : 6} xl={isMobile ? 12 : 4}>
            <span>
                Comece a usar agora o headprize
            </span>
            <div style={{marginTop: 25}} className="div-inline">
              {!logged ? (
              <>
                <button onClick={() => goto("/login")} className="btn-login-footer">Entrar</button>
                <button onClick={() => goto("/cadastro")} className="btn-singin-footer">Cadastre-se grátis</button>
              </>
              ):(
                <div>
                  <p>Olá, {user?.usuario?.nome}</p>
                </div>
              )
              }

               

                
            </div>
          </Col>

          <Col style={{flexDirection:"column", justifyContent:"flex-start", textAlign:"center"}} className={isMobile ? "non-border mobile-footer-col" : "footer-col"}  xs={12} md={isMobile ? 12 : 6} xl={isMobile ? 12 : 3}>
            <span>Siga-nos</span>
            <div className="social-icon">
                <ASN facebook={"https://www.facebook.com"} instagram={"https://www.instagram.com"} />
              </div>
          </Col>

          <Col className={isMobile ? "non-border mobile-footer-col" : "non-border footer-col upper-div"}  xs={12} md={isMobile ? 12 : 6} xl={isMobile ? 12 : 2}>
          <svg onClick={() => window.scrollTo(0, 0)} xmlns="http://www.w3.org/2000/svg" width="68" height="68" viewBox="0 0 68 68">
            <g id="Grupo_155" data-name="Grupo 155" transform="translate(-1601 -3767.849)">
                <rect id="Retângulo_20" data-name="Retângulo 20" width="68" height="68" transform="translate(1601 3767.849)" fill="#0d41ff"/>
                <path id="Caminho_53" data-name="Caminho 53" d="M1627.25,3579.557l9.678-9.554,9.992,9.554" transform="translate(-2.135 227.017)" fill="none" stroke="#fff" strokeWidth="3"/>
            </g>
            </svg>

          </Col>
        </Row>

    <div className="copyright-div">
        <span style={isMobile?{marginLeft:0, fontSize: 13}:{}}>Copyright © Todos os direitos reservados a HeadPrize 2022</span>
    </div>

    </section>
  )
};

export default Footer;
