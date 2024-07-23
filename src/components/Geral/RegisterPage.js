import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { register_empresa } from "../../services/user.service";
import InputMask from 'react-input-mask';

const Register = (props) => {
  const [empresa, setEmpresa] = useState({
    nome: '',
    cnpj: '',
    descricao: '',
  });
  const [pricavy, setPrivacy] = useState(false);
  const [buttonText, setButtonText] = useState('Enviar');
  const [status, setStatus] = useState({});

  const onFormUpdate = (key, value) => {
        setEmpresa({
        ...empresa,
        [key]: value
      })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("Enviando...");
    const dt = await register_empresa(empresa)
    console.log(dt);
    console.log("aaaaa");
    if (dt.message) {
      setStatus({ succes: true, message: dt.message});
    } else {
      setStatus({ succes: false, message: dt.message});
    }

    setButtonText("Enviar");
  };
  return (
    <section className="register" id="register">
      <Container>
        <Row className={props.isMobile ? "align-items-center card-register card-register-mobile":"align-items-center card-register"}>

          <Col size={12} md={12}>
                <div>
                  <h2>DADOS DA EMPRESA</h2>
                <form onSubmit={handleSubmit}>
                  <Row>
                    <Col size={12} sm={12} className="px-1">
                      <input className="input" type="text" value={empresa.nome} placeholder="Nome" onChange={(e) => onFormUpdate('nome', e.target.value)} />
                    </Col>
                    <Col size={12} sm={12} className="px-1">
                      <InputMask className="input" mask="99.999.999/9999-99" value={empresa.cnpj} placeholder="CNPJ" onChange={(e) => onFormUpdate('cnpj', e.target.value)} />
                    </Col>
                    <Col size={12} sm={12} className="px-1">
                        <textarea className="textarea" rows="6" value={empresa.mensagem} placeholder="Descricao" onChange={(e) => onFormUpdate('descricao', e.target.value)}></textarea>
                      
                    </Col>

                    <Col size={12} sm={12} className="px-1">
                      <InputMask className="input" mask="(99) 9999-9999" value={empresa.telefone} placeholder="Telefone" onChange={(e) => onFormUpdate('telefone', e.target.value)} />
                    </Col>

                    <Col size={12} sm={12} className="px-1">
                      <InputMask className="input" mask="(99) 99999-9999" value={empresa.tel_celular} placeholder="Celular" onChange={(e) => onFormUpdate('tel_celular', e.target.value)} />
                    </Col>

                    <Col size={12} sm={12} className="px-1">
                      <input className="input" type="text" value={empresa.uf} placeholder="UF" onChange={(e) => onFormUpdate('uf', e.target.value)} />
                    </Col>

                    <Col size={12} sm={12} className="px-1">
                      <input className="input" type="text" value={empresa.pais} placeholder="Pais" onChange={(e) => onFormUpdate('pais', e.target.value)} />
                    </Col>

                    <h3>Imagens</h3>

                    <Col size={12} sm={12} className="px-1">
                      <input className="input" type="text" value={empresa.email} placeholder="Email" onChange={(e) => onFormUpdate('email', e.target.value)} />
                    </Col>
                    <Col size={12} sm={12} className="px-1">
                      <input className="input" type="password" value={empresa.pass} placeholder="Senha" onChange={(e) => onFormUpdate('pass', e.target.value)} />
                    </Col>

                    <Col size={12} sm={12} className="px-1">
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="check1" name="option1" value="" checked={pricavy} onChange={(e) => setPrivacy(e.target.checked)} />
                        <label className="form-check-label">Eu li e aceito os <a href="http://headprize.me/Arquivos/Portal/Termos.pdf" target="_headpize_privacy">Termos de Privacidade</a></label>
                    </div>
                    </Col>

                    
                    
                    <Col size={12} className="px-1">
                     <button disabled={buttonText == "Enviando..." || !pricavy} type="submit"><span>{buttonText}</span></button>
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

export default Register;