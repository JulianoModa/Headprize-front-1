import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import CardEditable from '../Geral/CardEditable';
import CardEditable2 from '../Geral/CardEditableQuestions';
import { get_questions } from "../../services/vagas.service";

const PeopleBody = (props) => {
  
  const { wave, setWave, onSave, add, editing, edit, questions, onEdit, onSaveQ, deleteQ } = props;
  console.log('q', questions);

  return (
    <section className={props.isMobile ? "people-mobile" : "people"} id="people">
      <Container>
        
        <CardEditable onChange={setWave} onSave={onSave} isMobile={props.isMobile} title="Descrição" keyObject={"descricao"} description={wave.vaga.descricao} />
        <CardEditable2 deleteQ={deleteQ} add={add} onEdit={onEdit} editing={editing} edit={edit} onSave={onSaveQ} questions={questions} isMobile={props.isMobile} title="Perguntas" />
      
      </Container>
    </section>
  )
};

export default PeopleBody;
