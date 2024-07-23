import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import CardBlog from './CardBlog';
import facebook from "../../assets/img/facebook.svg";
import twitter from "../../assets/img/twitter.svg";
import linkedin from "../../assets/img/linkedin.svg";

const Blogs = (props) => {

  return (
    <div className="card-blog">
      <div className="card-blog-header">
      <Row className="">
        <Col xs={12} md={12} xl={2}>
            <p>Publicado em: 14/04/2022</p>
        </Col>
        <Col xs={12} md={12} xl={2}>
            <p>Autor: Headprize</p>
        </Col>

        <Col xs={12} md={12} xl={6}>
        </Col>

        <Col xs={12} md={12} xl={2}>
            <p>Compartilhar:
              <img style={{width: 6, marginLeft: 15}} src={facebook} />
              <img style={{width: 10, marginLeft: 15}} src={linkedin} />
              <img style={{width: 10, marginLeft: 15}} src={twitter} />
            </p>
        </Col>
       </Row>
      </div>
      <div className={props.isMobile ? "card-blog-body card-blog-body-mobile" : "card-blog-body"}>
        <span>Porque contratar pelo Headprize é melhor e trás
mais benefícios para sua empresa.</span>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.<br /><br />
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.<br /><br />
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </p>
      </div>
    </div>
  )
};

export default Blogs;
