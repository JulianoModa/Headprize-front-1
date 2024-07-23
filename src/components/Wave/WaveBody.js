import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import CardEditable from '../Geral/CardNonEditable';
import CardEditable2 from '../Geral/CardCustomNonEditable2';

const PeopleBody = (props) => {
  
  const { wave } = props;

  
  return (
    <section className={props.isMobile ? "people-mobile" : "people"} id="people">
      <Container>
      <CardEditable isMobile={props.isMobile} title="Descrição" keyObject={"descricao"} description={wave.vaga.descricao} />
      </Container>
    </section>
  )
};

export default PeopleBody;
