import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import CardBlog from './CardBlog';
import Slider from '@mui/material/Slider';

const caseLanguage = {
    1: "Iniciante",
    2: "Intermediario",
    3: "Avançado",
    4: "Fluente",
    5: "Nativa"
}

const marks = Object.keys(caseLanguage).map((key) => {return {value: key, label: caseLanguage[key]}});

const Language = (props) => {
    const {idioma, onEdit, i, onDelete} = props;
    

    function valuetext(value) {
        return caseLanguage[value];
    }
  return (
    <div className="card-formation">
            <Row>
                     <p>
                        {idioma.descricao}
                    </p>
            </Row>
            <Row>
                <Col style={{width: "94%", marginLeft: "3%"}} xs={12} md={12} xl={12}>
                <Slider
                    getAriaValueText={valuetext}
                    defaultValue={parseInt(idioma.nivel)}
                    min={1}
                    max={5}
                    marks={marks}
                    disabled
                />
                </Col>
            </Row>
            <Row  style={{marginTop: 50}}>
                <Col xs={12} md={12} xl={4}>
                    <button onClick={() => onEdit(i)} className="formation-button">Editar</button>
                    <button onClick={() => onDelete(i)} className="formation-button2">Remover</button>
                </Col>
            </Row>
     </div>
  )
};

export default Language;
