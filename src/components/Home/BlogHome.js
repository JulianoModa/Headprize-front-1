import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import BlogSeparator from "../../assets/img/blog-separator.svg";
import {ImgTmp} from "./ImgTmp"

export const BlogHome = (props) => {
  const {isMobile} = props;
    const articles = [
        {
            image: ImgTmp,
            title: "Como contratar o trabalhador certo para a sua vaga de emprego?"
        },
        {
            image: ImgTmp,
            title: "Como contratar o trabalhador certo para a sua vaga de emprego?"
        },
        {
            image: ImgTmp,
            title: "Como contratar o trabalhador certo para a sua vaga de emprego?"
        },
    ]
    

  return (
    <section className="blog-home" id="blog-home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={12} xl={12}>
            
            <TrackVisibility>
                {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                    <span>Blog</span>
                    <hr />

                    <div className="all-articles">
                        {
                        articles.map((article, key) => 
                            <div key={key} className={isMobile ? "mobile-blog-article" : "blog-article"}>
                                <div className={isMobile ? "mobile-blog-article-img":"blog-article-img"}>
                                    <article.image />
                                </div>
                                <span>{article.title}</span>
                                <Row className="aligh-items-center">
                                        <Col xs={7} md={6} xl={9}>
                                            <p>Publicado em: 14/04/2022</p>
                                        </Col>
                                        <Col style={isMobile?{marginLeft:30}:{}} xs={3} md={6} xl={3}><p >Saiba mais 
                                          {!isMobile && <svg xmlns="http://www.w3.org/2000/svg"><line id="Linha_43" data-name="Linha 43" x2="408" transform="translate(271 3600.219)" fill="none" stroke="#707070" strokeWidth="1" opacity="0.092"/></svg>}
                                          </p></Col>
                                            
                                </Row>
                            </div>
                        )}
                    </div>
                </div>
                }
                </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
