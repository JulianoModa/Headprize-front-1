import { useState } from "react";
import { Container } from "react-bootstrap";
import CardEditable from '../Geral/CardEditable';

const CompanyBody = (props) => {
  const {company, setCompany, onSave} = props;
  console.log('company', company)
  const [editEmailMode, setEditEmailMode] = useState(false);

  const saveEmailMode = () => {
    if(editEmailMode){
      onSave();
    }
    setEditEmailMode(!editEmailMode);
    
  }

  return (
    <section className={props.isMobile ? "company company-mobile":"company"} id="company">
      <Container>
        <CardEditable onChange={setCompany} onSave={onSave} isMobile={props.isMobile} title="Descrição" keyObject={"descricao"} description={company.descricao} />

        <CardEditable onChange={setCompany} onSave={onSave} isMobile={props.isMobile} title="Mercado de Atuação" keyObject={"ramo"} description={company.ramo} />

        <div className="just-you-see">
        <div className="div-edit">
            {
              editEmailMode ? 
              <input className="input input-editable-body" type="email" value={company.email} placeholder="Email" onChange={(e) => setCompany('email', e.target.value)}/>
              :
              <p>{company.email || "Email"}</p>
            }
            <button onClick={() => saveEmailMode()} className="action-button">{editEmailMode ? "Salvar" : "Editar"} {!props.isMobile && !editEmailMode && "+"}</button>
        </div>
        <div className="div-edit">
          <p>{company.cnpj || "CNPJ"}</p>
        </div>
        {/* <div className="div-edit">
            <p>Usuário</p>
            <button className="action-button">Editar {!props.isMobile && "+"}</button>
        </div>
        <div className="div-edit">
            <p>Número do cartão</p>
            <button className="action-button">Editar {!props.isMobile && "+"}</button>
        </div> */}

        </div>
      </Container>
    </section>
  )
};

export default CompanyBody;
