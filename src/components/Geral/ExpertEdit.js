import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

const ExpertEdit = (props) => {
    const {experiencia, setExperiencia, i, onEdit, onDelete, isMobile} = props;
    const mask_date = (v) => {

        var value = v
        if (v.match(/^\d{2}$/) !== null) {
            value = v + '/';
        } else if (v.match(/^\d{2}\/\d{2}$/) !== null) {
            value = v + '/';
        }

        return value
    }
  return (
    <div className="card-formation">
            <Row style={{marginBottom: 10}}>
                <Col xs={12} md={12} xl={4}>
                    <input className="input input-editable-body" type="text" value={experiencia.empresa} placeholder="Empresa" onChange={(e) => setExperiencia(i, 'empresa', e.target.value)}/>
                </Col>
                <Col xs={12} md={12} xl={8}>
                    <input className="input input-editable-body" type="text" value={experiencia.cargo} placeholder="Cargo" onChange={(e) => setExperiencia(i, 'cargo', e.target.value)}/>
                </Col>
            </Row>
            <Row style={{marginBottom: 10}}>
                <Col xs={12} md={12} xl={12}>
                    <p>
                        <strong className="title-expert">Descrição:</strong><br /> 
                                           
                    </p>

                    <textarea style={{width: "60%", }} className="input input-editable-body" type="text" value={experiencia.descricao} placeholder="Cargo" onChange={(e) => setExperiencia(i, 'descricao', e.target.value)}></textarea>
                </Col>
            </Row>
            <Row style={{marginBottom: 10}}>
                <Col xs={isMobile ? 12 : 6} md={12} xl={4}>
                    Início: <input className="input input-editable-body" type="text" value={experiencia.ano_inicio} placeholder="Ano de inicio" maxLength={10} onChange={(e) => setExperiencia(i, 'ano_inicio', mask_date(e.target.value))}/>
                </Col>
                <Col xs={isMobile ? 12 : 6} md={12} xl={4}>
                    Término: <input className="input input-editable-body" type="text" value={experiencia.ano_fim} placeholder="Ano de fim" maxLength={10} onChange={(e) => setExperiencia(i, 'ano_fim', mask_date(e.target.value))}/>
                </Col>
                <Col xs={12} md={12} xl={4}>

                    <button onClick={() => onEdit(i)} className="formation-button">Salvar</button>
           
                    <button onClick={() => onDelete(i)} className="formation-button2">Remover</button>
                </Col>
        </Row>
     </div>
  )
};

export default ExpertEdit;
