import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import CardEditable from '../Geral/CardNonEditable';

const CompanyBody = (props) => {
  const {company, setCompany} = props;

  const [editEmailMode, setEditEmailMode] = useState(false);

  const saveEmailMode = () => {
    setEditEmailMode(!editEmailMode);
  }

  return (
    <section className={props.isMobile ? "company company-mobile":"company"} id="company">
      <Container>
        <CardEditable onChange={setCompany} isMobile={props.isMobile} title="Descrição" keyObject={"descricao"} description={company.descricao} />

        <CardEditable onChange={setCompany} isMobile={props.isMobile} title="Mercado de Atuação" keyObject={"ramo"} description={company.ramo} />

      </Container>
    </section>
  )
};

export default CompanyBody;
