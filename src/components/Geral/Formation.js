import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import CardBlog from './CardBlog';

const Formation = (props) => {
    const {formacao, onEdit, i, onDelete} = props;
  return (
    <div className="card-formation">
        <Row>
                <Col xs={12} md={12} xl={4}>
                    <p>
                       {formacao.tipo_curso}
                    </p>
                </Col>
                <Col xs={12} md={12} xl={8}>
                    <p>
                       Curso: {formacao.curso}
                    </p>
                </Col>
            </Row>
            <Row>
                <Col xs={12} md={12} xl={12}>
                    <p>
                        {formacao.instituicao}
                    </p>
                </Col>
            </Row>
            <Row>
                <Col xs={6} md={12} xl={4}>
                    Início: <div className="card-date">{formacao.ano_inicio}</div>
                </Col>
                <Col xs={6} md={12} xl={4}>
                    Término: <div className="card-date">{formacao.ano_fim}</div>
                </Col>
                <Col xs={12} md={12} xl={4}>
                    <button onClick={() => onEdit(i)} className="formation-button">Editar</button>
                    <button onClick={() => onDelete(i)} className="formation-button2">Remover</button>
                </Col>
        </Row>
     </div>
  )
};

export default Formation;
