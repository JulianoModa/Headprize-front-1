import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import LinkedInPage from "./Linkedin";
import { login } from "../../services/auth";
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";


const Register = (props) => {
  const [login_data, setLogin] = useState({
    email: '',
    pass: ''
  });

  const [buttonText, setButtonText] = useState('Entrar');
  const navigate = useNavigate();
  

  const setStatus = (status) => {
    if(status.success){
      toast.info(status.message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }else{
      toast.error(status.message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  }

  const onFormUpdate = (key, value) => {
      setLogin({
        ...login_data,
        [key]: value
      })
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("Entrando...");

    const response = await login(login_data);

    console.log(login_data);
    if (response.accessToken) {
      props.setUser({user: response, role: response.tipo});
      setStatus({ success: true, message: 'Logado com sucesso!'});
      navigate(response.usuario.tipoId == 3 ? "/pessoa-fisica" : "/empresa");
      navigate(0);
      window.scrollTo(0, 0);
    } else {
      setStatus({ success: false, message: response.message});
    }

    setButtonText("Entrar");
  };

  return (
    <section className="login" id="login">
      <Container>
        <Row className={props.isMobile ? "align-items-center card-register card-register-mobile":"align-items-center card-register"}>

          <Col size={12} md={12}>
                <div style={{textAlign: 'center'}}>
                {props.hasInvite && (<span style={{fontSize: 25, color: '#000', border: '1px dashed #000', padding: 10}}>Conclua sua inscricao entrando pelo linkedin!</span>)}
                <div className="linkedin-div"><LinkedInPage /></div>

                <form onSubmit={handleSubmit}>
                  <Row>
                    <Col size={12} sm={12} className="px-1">
                      <input className="input" type="text" value={login_data.email} placeholder="Email" onChange={(e) => onFormUpdate('email', e.target.value)} />
                    </Col>
                    <Col size={12} sm={12} className="px-1">
                      <input className="input" type="password" value={login_data.pass} placeholder="Senha" onChange={(e) => onFormUpdate('pass', e.target.value)} />
                    </Col>


                    
                    
                    <Col size={12} className="px-1">
                     <button disabled={buttonText == "Entrando..."} type="submit"><span>{buttonText}</span></button>
                    </Col>
                  </Row>
                </form>
              </div>
          </Col>
        </Row>
      </Container>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        />
    </section>
  )
}

export default Register;