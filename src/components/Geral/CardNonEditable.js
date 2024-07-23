import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import CardBlog from './CardBlog';

const CardEditable = (props) => {
  const { isMobile, title, description } = props;

  return (
    <div className={isMobile ? "card-company card-company-mobile" : "card-company"}>
      <div className="card-company-header">
      <div className="div-edit">
        <span>{title}</span>
      </div>
      </div>
      <div className="card-company-body">

      <p>
            {description}
          </p>
      </div>
    </div>
  )
};

export default CardEditable;
