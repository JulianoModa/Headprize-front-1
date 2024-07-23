import { Container, Row, Col, Modal, Button } from "react-bootstrap";
import profiloIcon from "../../assets/img/profile-icon.png"
import pencilIcon from "../../assets/img/pencil.svg"
import checkIcon from "../../assets/img/check-icon.svg"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { answer_question, indica_wave } from "../../services/vagas.service";

const Header = (props) => {

    const { total_candidates, wave, portes, questions, setResposta, indicar, indicado, setIndicado, user, setStatus } = props;
    const navigate = useNavigate();
    const [show, setShow] = useState(false);
    const [showConvite, setShowConvite] = useState(false);
    const [indicando, setIndicando] = useState(false);
    const [link_convite, setLink_convite] = useState("");

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    function datediff(firstDate, secondDate) {      
        const oneDay = 24 * 60 * 60 * 1000;
        return Math.round(Math.abs((firstDate - secondDate) / oneDay));  
    }

    const indica = async () => {
        setIndicando(true);
        const indicacao = await indica_wave({id: wave.vaga.id, usuarioId: user.usuario.id, indicado: indicado});
        if(indicacao.convite != undefined){
            const [convite, indicacaoId] = indicacao.convite.split("_");
            for(var question of questions){
                const resposta = {questVagaId: question.id, resposta: question.resposta, indicacaoId};
                await answer_question(resposta);
            }

            if(convite != ""){
                setLink_convite("https://orangecode.tech/convite/"+indicacao.convite)
                setShowConvite(true)
            }
            handleClose();
            setIndicando(false);
        }else{
            for(var question of questions){
                const resposta = {questVagaId: question.id, resposta: question.resposta, indicacaoId: indicacao.indicacao.id};
                await answer_question(resposta);
            }
            handleClose();
            setIndicando(false);
            setStatus(indicacao.message)
        }
        
    }
    

    return (
        <div style={wave.vaga.imagem_capa_link != "" && wave.vaga.imagem_capa_link != null ? {backgroundImage: "url('http://headprize.me:21073/upload/"+wave.vaga.imagem_capa_link+"')", backgroundSize: 'cover'} : {}} className={props.isMobile ? "header-people header-people-mobile" : "header-people"}>
            <Row>
                {/*<Col xs={12} md={12} xl={2}>
                    <div className={props.isMobile ? "people-profile-picture people-profile-picture-mobile" : "people-profile-picture"}>
                        <img src={profiloIcon} />
                    </div>
                    </Col>*/}
                <Col xs={12} md={12} xl={8}>
                    <div className={props.isMobile ? "body-header-people body-header-people-mobile":"body-header-people"}>
                        <div className={props.isMobile ? "div-edit div-edit-mobile":"div-edit"}>
                        <span>{wave.vaga.titulo}</span>
                        <span onClick={() => navigate('/empresa/'+wave.empresa.id)} style={{cursor: 'pointer', marginLeft: 20, fontSize: 20}}>{wave.empresa.nome}</span>
                        </div>

                        <p className="footer-wave-header">Há {datediff(new Date(wave.vaga.createdAt), new Date())} dias {total_candidates != undefined && total_candidates != null ? "- "+total_candidates+" candidaturas" : ""}</p>

                        <div className={props.isMobile ? "div-edit-tag":"div-edit"}>
                            <div className={props.isMobile ? "tag tag-mobile":"tag"}>

                           
                            <span>{wave.empresa.uf} - {wave.empresa.pais}</span>

                            </div>
                        </div>

                        <div className="info-footer">

                        <Row style={{marginTop: 10}}>
                        <Col size={6} sm={6} className="px-1">
                                <span className="wave-text-header"></span>
                            </Col>
                            <Col size={6} sm={6} className="px-1">
                                <span className="wave-text-header">Salário</span>
                            </Col>
                        </Row>

                        <Row>
                            <Col size={12} sm={6} className="px-1">
                                <span className="wave-text-header">{wave.empresa.ramoId != undefined ? portes[(""+wave.empresa.ramoId) || "0"].descricao : "Sem porte declarado"} - {wave.empresa.ramo}</span>
                            </Col>
                            <Col size={12} sm={6} className="px-1">
                                <span className="wave-text-header">R$ {(parseFloat(wave.vaga.salario).toFixed(2))}</span>
                            </Col>
                        </Row>
                        </div>
                    
                        <Row>
                            <Col size={12} sm={8} className="px-1">
                            <div className={props.isMobile ? "wave-description wave-description-mobile":"wave-description"}>
                                <p>Valor do premio para quem indicar a pessoa contratada: R${(parseFloat(wave.vaga.valor_premio).toFixed(2))}</p>
                            </div>
                            { indicado != null && <>
                            <Button style={{marginTop: 20}} variant="primary" onClick={handleShow}>
                                Indicar
                            </Button>

                            <Modal style={{zIndex: 1000000, marginTop: 200}} show={show} onHide={handleClose}>
                                <Modal.Header closeButton>
                                <Modal.Title style={{color: "#2d2d2d"}}>Indicação</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                <Col size={12} sm={12} className="px-1">
                                    <label for={"emailIndicado"} style={{color: '#2d2d2d'}}>Email do indicado</label>
                                    <input className="input" type="text" id={"emailIndicado"} value={indicado} placeholder="Email do indicado" onChange={(e) => setIndicado(e.target.value)} />
                                </Col>


                                {questions.map((q, i) => (
                                    <Col size={12} sm={12}  className="px-1">
                                        <label for={"question"+i} style={{color: '#2d2d2d'}}>{q.descricao}</label>
                                        <input className="input" id={"question"+i} type="text" value={q.resposta} onChange={(e) => setResposta(i, e.target.value)} placeholder={q.descricao} />
                                    </Col>
                                ))}

                                </Modal.Body>
                                <Modal.Footer>
                                { !indicando && (<>
                                    <Button variant="secondary" onClick={handleClose}>
                                        Fechar
                                    </Button>
                                
                                    <Button variant="primary" onClick={() => indica()}>
                                        Indicar
                                    </Button>
                                </>)}

                                { indicando && (<>
                                    <Button variant="secondary">
                                        Fechar
                                    </Button>
                                
                                    <Button variant="primary">
                                        Aguarde....
                                    </Button>
                                </>)}
                                </Modal.Footer>
                            </Modal>

                            <Modal style={{zIndex: 1000000, marginTop: 200}} show={showConvite} onHide={() => setShowConvite(false)}>
                                <Modal.Header closeButton>
                                <Modal.Title style={{color: "#2d2d2d"}}>Sua indicação será concluida quando a pessoa indicada se cadastrar na plataforma</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                <Col size={12} sm={12} className="px-1">
                                    <input className="input" type="text" id={"link_convite"} value={link_convite} />
                                </Col>
                                    <Button variant="primary">
                                        Copiar link
                                    </Button>
                                </Modal.Body>
                            </Modal>
                            </>}
                            </Col>
                        </Row>
                        
                    </div>
                </Col>
            </Row>
        </div>
    )
  };
  
  export default Header;
  