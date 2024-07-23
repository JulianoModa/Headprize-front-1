import { Contact } from "../../components/Home/Contact";
import { setUser } from '../../actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Header from "../../components/Wave/WaveHeader";
import WaveBody from "../../components/Wave/WaveBody";
import { useState, useEffect } from "react";
import { DragAndDrop, Title } from "../../components/DragAndDrop"
import { get_candidates, get_questions, get_wave, get_answers_question } from "../../services/vagas.service";
import { get_porte, get_user } from "../../services/user.service";
import { useLocation } from "react-router-dom";
import {  Modal, Container, Row, Col } from "react-bootstrap";

const ProfilePeople = (props) => {
    const [wave, setWave] = useState({vaga: {nome:""}, empresa:{nome:""}});
    const [porte, setPorte] = useState([]);
    const [candidates, setCandidates] = useState([]);
    const [showCand, setShowCand] = useState(false);
    const [loadingModal, setLoadingModal] = useState(false);
    const [indicacao, setIndicacao] = useState({user: {pessoa: {}, usuario: {}}, indicador:{pessoa: {}, usuario: {}}})
    const [totalCandidates, setTotalCandidates] = useState(0)
    const location = useLocation();
    const id = location.pathname.split("/")[location.pathname.split("/").length - 1];

    const get_data = async () => {
      const wave = await get_wave(id);
      const _porte = await get_porte();
      const _candidates = await get_candidates(id);
      setTotalCandidates(_candidates.quant_indicacao)
      console.log("_candidates", _candidates);
      const users = {};
      const candidatos = []
      for(var usr of _candidates.indicado){
        users[usr.usuarioId] = usr;
      }

      for(var indicacao of _candidates.indicacao){
        const ind = {...indicacao};
        if(users[ind.usuarioId] != null && users[ind.usuarioId] != undefined){
          ind.user = users[ind.usuarioId];
          candidatos.push(ind)
        }
      }

      console.log('candidatos', candidatos)
      setCandidates(candidatos)
      const __porte = {};
      await _porte.porte.map((p) => {__porte[p.id] = p});
      setPorte(__porte);
      console.log(__porte)
      setWave(wave);
    }

    const openCandModal = async (data) => {
      setShowCand(true);
      setLoadingModal(true);
      const dados = {...data};
      const indicador = await get_user(dados.indicadorId);
      const indicado = await get_user(dados.usuarioId);
      const q = await get_questions(dados.vagaId);
      var questoes;

      if(q.message != undefined && q.message == "Não existem questões!"){
        questoes = [];
      }else{
        questoes = q.questoes;
      }

      console.log(questoes)

      

      for(var i=0;i<questoes.length;i++){
        const _respostas = await get_answers_question(questoes[i].id, dados.id);
        var resposta = "";
        for(var x=0;x<_respostas.quest.length;x++){
          if(_respostas.quest[x].indicacaoId == dados.id){
            resposta = _respostas.quest[x].resposta;
            break;
          }
        }
        questoes[i].resposta = resposta;
      }

      dados.questoes = questoes;

      console.log(indicador)
      dados.indicador = indicador;
      dados.user = indicado;
      setIndicacao(dados);
      console.log(dados);

      setLoadingModal(false);
      
    }

    useEffect(() => {
      get_data();
    }, [props]);

  return (<>
      {wave.vaga.id && (
        <>
          <Header total_candidates={totalCandidates} user={props.user} indicado={null} setIndicado={null} indicar={null} setResposta={null} questions={null} portes={porte} wave={wave} isMobile={props.mobile}/>
          <Modal style={{zIndex: 1000000, marginTop: 200}} show={showCand} onHide={() => setShowCand(false)}>
           <Modal.Header closeButton>
            <Modal.Title style={{color: "#2d2d2d"}}>Indicação</Modal.Title>
           </Modal.Header>
           
           <Modal.Body style={{display: 'flex', justifyContent: 'center'}}>
            {loadingModal == true ? <img style={{width: 50}} src="https://media.tenor.com/On7kvXhzml4AAAAj/loading-gif.gif"/>:
              <Container>
                <Row>
                <Col style={{color: "#2d2d2d"}}>
                  <Modal.Title style={{color: "#2d2d2d"}}>Indicado</Modal.Title>
                  Nome: {indicacao.user.pessoa.nome || ""} <br/>
                  Email: {indicacao.user.usuario.email || ""} <br/>
                  Profissão: {indicacao.user.pessoa.profissao || ""} <br/>
                  Linkedin: xxxxxxx <br/>
                </Col>
                <Col style={{color: "#2d2d2d"}}><Modal.Title style={{color: "#2d2d2d"}}>Indicador</Modal.Title>
                  Nome: {indicacao.indicador.pessoa.nome || ""} <br/>
                  Email: {indicacao.indicador.usuario.email || ""} <br/>
                  Profissão: {indicacao.indicador.pessoa.profissao || ""} <br/>
                  Linkedin: xxxxxxx <br/>
                  
                </Col>
                  
                </Row>
                <Row>
                <Col style={{color: "#2d2d2d"}}>
                  <Modal.Title style={{color: "#2d2d2d"}}>Perguntas</Modal.Title>
                  {indicacao.questoes != undefined && indicacao.questoes.map(quest => <><strong>{quest.descricao}?</strong><br />{quest.resposta}<br /></>)}
                  
                </Col>
                  
                </Row>
              </Container>
            }    
            {/* <Button variant="primary"> Copiar link </Button> */}
           </Modal.Body>
          </Modal>
          <DragAndDrop openCandModal={openCandModal} data={candidates} />
        </>
      )}
    </>
  )
}

const mapStateToProps = store => ({
    user: store.userState.user,
    mobile: store.mobileState.mobile
});
  
const mapDispatchToProps = dispatch =>
    bindActionCreators({ setUser }, dispatch);
  
export default connect(mapStateToProps, mapDispatchToProps)(ProfilePeople);