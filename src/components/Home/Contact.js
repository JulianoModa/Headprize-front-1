import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
// import contactImg from "../../assets/img/contact-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Contact = () => {
  const formInitialDetails = {
    nome: '',
    email: '',
    telefone: '',
    celular: '',
    localizacao: '',
    tipo_conta: 0,
    mensagem: ''
  }
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('Enviar');
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
      setFormDetails({
        ...formDetails,
        [category]: value
      })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("Enviando...");
    let response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(formDetails),
    });
    setButtonText("Enviar");
    let result = await response.json();
    setFormDetails(formInitialDetails);
    if (result.code == 200) {
      setStatus({ succes: true, message: 'Message sent successfully'});
    } else {
      setStatus({ succes: false, message: 'Something went wrong, please try again later.'});
    }
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">

          <Col size={12} md={12}>
                <div>
                <h2>Entre em contato para mais informações sobre vagas ou dúvidas de cadastramento</h2>
                <form onSubmit={handleSubmit}>
                  <Row>
                    <Col size={12} sm={6} className="px-1">
                      <input className="input" type="text" value={formDetails.nome} placeholder="Nome" onChange={(e) => onFormUpdate('nome', e.target.value)} />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input className="input" type="email" value={formDetails.email} placeholder="Email" onChange={(e) => onFormUpdate('email', e.target.value)}/>
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input className="input" type="tel" value={formDetails.telefone} placeholder="Telefone" onChange={(e) => onFormUpdate('telefone', e.target.value)} />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input className="input" type="tel" value={formDetails.celular} placeholder="Celular" onChange={(e) => onFormUpdate('celular', e.target.value)}/>
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input className="input" type="text" value={formDetails.localizacao} placeholder="Cidade/Estado" onChange={(e) => onFormUpdate('localizacao', e.target.value)} />
                    </Col>
                    <Col style={{    paddingTop: 20, paddingLeft: "20px !important"}} size={12} sm={6} className="px-1">
                    <input className="form-check-input" checked={formDetails.tipo_conta == 1} onChange={(e) => setFormDetails({...formDetails, tipo_conta: e.target.checked == true?1:0})} type="radio" name="flexRadioDisabled" id="flexRadioDisabled" />
                    <label className="form-check-label" for="flexRadioDisabled">
                      Empregado
                    </label>
                    <input style={{marginLeft:20}} className="form-check-input" checked={formDetails.tipo_conta == 2} onChange={(e) => setFormDetails({...formDetails, tipo_conta: e.target.checked == true?2:0})} type="radio" name="flexRadioDisabled" id="flexRadioDisabled" />
                    <label className="form-check-label" for="flexRadioDisabled">
                      Empregador
                    </label>
                    </Col>
                    <Col size={12} className="px-1">
                      <textarea className="textarea" rows="6" value={formDetails.mensagem} placeholder="Mensagem" onChange={(e) => onFormUpdate('mensagem', e.target.value)}></textarea>
                      <button disabled={buttonText == "Enviando..."} type="submit"><span>{buttonText}</span></button>
                    </Col>
                    {
                      status.message &&
                      <Col>
                        <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                      </Col>
                    }
                  </Row>
                </form>
              </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
