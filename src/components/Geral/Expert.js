import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

const Expert = (props) => {
    const {experiencia, onEdit, i, onDelete, isMobile} = props;
  return (
    <div className="card-formation">
        <Row>
                <Col xs={12} md={12} xl={4}>
                    <p>
                       {experiencia.empresa}
                    </p>
                </Col>
                <Col xs={12} md={12} xl={8}>
                    <p>
                       Cargo: {experiencia.cargo}
                    </p>
                </Col>
            </Row>
            <Row>
                <Col xs={12} md={12} xl={12}>
                    <p>
                        <strong className="title-expert">Descrição:</strong><br /> {experiencia.descricao}
                    </p>
                </Col>
            </Row>
            <Row>
                <Col xs={6} md={12} xl={4}>
                    Início: <div className="card-date">{experiencia.ano_inicio}</div>
                </Col>
                <Col xs={6} md={12} xl={4}>
                    Término: <div className="card-date">{experiencia.ano_fim}</div>
                </Col>
                <Col xs={12} md={12} xl={4}>
                    <button onClick={() => onEdit(i)} className="formation-button">Editar</button>
                    <button onClick={() => onDelete(i)} className="formation-button2">Remover</button>
                </Col>
        </Row>
     </div>
  )
};

export default Expert;
