import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import CardBlog from './CardBlog';
import Slider from '@mui/material/Slider';
import TextField from '@mui/material/TextField';

const caseLanguage = {
    1: "Iniciante",
    2: "Intermediario",
    3: "Avançado",
    4: "Fluente",
    5: "Nativa"
}
const marks = Object.keys(caseLanguage).map((key) => {return {value: parseInt(key), label: caseLanguage[key]}});

const Language = (props) => {
    const {idioma, onEdit, i, onDelete, setIdioma} = props;
    

    function valuetext(value) {
        return caseLanguage[value];
    }
  return (
    <div className="card-formation">
            <Row>
                <TextField value={idioma.descricao} onChange={(e) => setIdioma(i, 'descricao', e.target.value)} id="outlined-basic" label="Idioma" variant="outlined" />
            </Row>
            <Row>
                <Col style={{width: "94%", marginLeft: "3%"}} xs={12} md={12} xl={12}>
                <Slider
                    aria-labelledby=""
                    aria-label=""
                    defaultValue={parseInt(idioma.nivel)}
                    getAriaValueText={valuetext}
                    disableSwap
                    min={1}
                    max={5}
                    marks={marks}
                    onChange={(e) => setIdioma(i, 'nivel', e.target.value)}
                />
                </Col>
            </Row>
            <Row>
                <Col xs={12} md={12} xl={4}>
                    <button style={{marginTop: 50}} onClick={() => onEdit(i)} className="formation-button">Salvar</button>
                </Col>
            </Row>
     </div>
  )
};

export default Language;
