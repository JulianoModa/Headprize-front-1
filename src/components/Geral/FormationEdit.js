import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import CardBlog from './CardBlog';

const FormationEdit = (props) => {
    const {formacao, setFormacao, i, onEdit, onDelete, isMobile} = props;
  return (
    <div className="card-formation">
        <Row>
                <Col xs={12} md={12} xl={4}>
                        <input className="input input-editable-body" type="text" value={formacao.tipo_curso} placeholder="Tipo Curso" onChange={(e) => setFormacao(i, 'tipo_curso', e.target.value)}/>
                </Col>
                <Col xs={12} md={12} xl={8}>
                        <input className="input input-editable-body" type="text" value={formacao.curso} placeholder="Curso" onChange={(e) => setFormacao(i, 'curso', e.target.value)}/>
                </Col>
            </Row>
            <Row>
                <Col xs={12} md={12} xl={12}>
                    <input className="input input-editable-body" type="text" value={formacao.instituicao} placeholder="Instituição" onChange={(e) => setFormacao(i, 'instituicao', e.target.value)}/>
                </Col>
            </Row>
            <Row>
                <Col xs={isMobile ? 12 : 6} md={12} xl={4}>
                    Início: <input className="input input-editable-body" type="text" value={formacao.ano_inicio} placeholder="Inicio" onChange={(e) => setFormacao(i, 'ano_inicio', e.target.value)}/>
                </Col>
                <Col xs={isMobile ? 12 : 6} md={12} xl={4}>
                    Término: <input className="input input-editable-body" type="text" value={formacao.ano_fim} placeholder="Fim" onChange={(e) => setFormacao(i, 'ano_fim', e.target.value)}/>
                </Col>
                <Col xs={12} md={12} xl={4}>
                    <button onClick={() => onEdit(i)} className="formation-button">Salvar</button>
                    <button onClick={() => onDelete(i)} className="formation-button2">Remover</button>
                </Col>
        </Row>
     </div>
  )
};

export default FormationEdit;
