import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import CardEditable from '../Geral/CardCustomNonEditable';
import CardEditable2 from '../Geral/CardCustomNonEditable2';

const PeopleBody = (props) => {
  
  const { profile, setProfile } = props;

  const [formacao, setFormacao] = useState([]);
  const [experiencia, setExperiencias] = useState([]);
  const [courses, setCourses] = useState([]);


  return (
    <section className={props.isMobile ? "people-mobile" : "people"} id="people">
      <Container>
        <CardEditable formacao={formacao} isMobile={props.isMobile} title={"Formação Academica"} />
        <CardEditable formacao={courses} isMobile={props.isMobile} title={"Cursos Complementares"} />
        <CardEditable2 experiencia={experiencia} isMobile={props.isMobile} title={"Experiência Profissional"}/>
      </Container>
    </section>
  )
};

export default PeopleBody;
