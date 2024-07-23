import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { register_empresa } from "../../services/user.service";
import { new_wave } from "../../services/vagas.service";

const Register = (props) => {
  const [wave, setWave] = useState({
    titulo: '',
    descricao: '',
    valor_premio: null,
	  premio_deposito: null,
	  salario: null,
    imagem_capa_link: ""
  });

  const [questions, setQuestions] = useState([]);
  const [autoindica, setAutoindica] = useState(false);
  const [buttonText, setButtonText] = useState('Enviar');
  const [status, setStatus] = useState({});

  const onFormUpdate = (key, value) => {
      setWave({
        ...wave,
        [key]: value
      })
  }

  const change_question = (i, t) => {
    const _q = [...questions];
    _q[i] = {ordem: _q[i].question, descricao: t};
    setQuestions(_q);
  }

  const newQuestion = () => {
    const _q = [...questions];
    _q.push({ordem: questions.length + 1, descricao: ""});
    setQuestions(_q);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("Enviando...");
    wave.autoindica = autoindica;
    wave.empresaId = props.user.empresa.id;
    wave.salario = parseFloat(wave.salario);
    wave.premio_deposito = parseFloat(wave.premio_deposito);
    wave.valor_premio = parseFloat(wave.valor_premio);
    
    const dt = await new_wave(wave)
    console.log(dt);
    console.log("aaaaa");
    if (dt.message) {
      setStatus({ succes: true, message: dt.message});
    } else {
      setStatus({ succes: false, message: dt.message});
    }

    setButtonText("Enviar");
  };

  String.prototype.reverse = function(){
    return this.split('').reverse().join(''); 
  };
  
  function mascaraMoeda(evento){
    var tecla = (!evento) ? window.event.keyCode : evento.which;
    var valor  =  evento.target.value.replace(/[^\d]+/gi,'').reverse();
    var resultado  = "";
    var mascara = "##.###.###,##".reverse();
    for (var x=0, y=0; x<mascara.length && y<valor.length;) {
      if (mascara.charAt(x) != '#') {
        resultado += mascara.charAt(x);
        x++;
      } else {
        resultado += valor.charAt(y);
        y++;
        x++;
      }
    }
    onFormUpdate('salario', resultado.reverse());
  }

  const mascaraMoed1a = (event) => {
    const onlyDigits = event.target.value
      .split("")
      .filter(s => /\d/.test(s))
      .join("")
      .padStart(3, "0")
    const digitsFloat = onlyDigits.slice(0, -2) + "." + onlyDigits.slice(-2)
    onFormUpdate('salario', digitsFloat);

  }
  
  const maskCurrency = (valor, locale = 'pt-BR', currency = 'BRL') => {
    return new Intl.NumberFormat(locale, {
      style: 'currency',
      currency
    }).format(valor)
  }

  return (
    <section className="register" id="register">
      <Container>
        <Row className={props.isMobile ? "align-items-center card-register card-register-mobile":"align-items-center card-register"}>

          <Col size={12} md={12}>
                <div>
                  <h2>DADOS DA VAGA</h2>
                <form onSubmit={handleSubmit}>
                  <Row>
                    <Col size={12} sm={12} className="px-1">
                      <input className="input" type="text" value={wave.titulo} placeholder="Titulo" onChange={(e) => onFormUpdate('titulo', e.target.value)} />
                    </Col>
                    
                    <Col size={12} sm={12} className="px-1">
                        <textarea className="textarea" rows="6" value={wave.mensagem} placeholder="Descricao" onChange={(e) => onFormUpdate('descricao', e.target.value)}></textarea>
                      
                    </Col>
                    <Col size={12} sm={12} className="px-1">
                      <input className="input" type="number" value={wave.salario} placeholder="Salario" onChange={(e) => onFormUpdate('salario', e.target.value)} />
                    </Col>
                    <Col size={12} sm={12} className="px-1">
                      <input className="input" type="number" value={wave.valor_premio} placeholder="Valor Premio" onChange={(e) => onFormUpdate('valor_premio', e.target.value)} />
                    </Col>
                    <Col size={12} sm={12} className="px-1">
                      <input className="input" type="number" value={wave.premio_deposito} placeholder="Premio Deposito" onChange={(e) => onFormUpdate('premio_deposito', e.target.value)} />
                    </Col>
                    <Col size={12} sm={12} className="px-1">

                    {/* <div className="question-div"><h3>Perguntas</h3><button type="button" onClick={() => newQuestion()} style={{marginLeft: 5, marginTop: -3, padding: 10}}>+</button>
                    </div>

                    {questions.map((question, i) => (
                      <Col size={12} sm={12} className="px-1">
                        <input className="input" type="text" value={question.descricao} placeholder={"Pergunta " + (i+1)} onChange={(e) => change_question(i, e.target.value)} />
                      </Col>
                    ))} */}

                    

                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="check1" name="option1" value="" checked={setAutoindica} onChange={(e) => setAutoindica(e.target.checked)} />
                        <label className="form-check-label">Auto Indicação</label>
                    </div>
                    </Col>

                    

                    
                    
                    <Col size={12} className="px-1">
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

export default Register;