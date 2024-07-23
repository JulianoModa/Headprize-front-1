import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import CardBlog from './CardBlog';
import Formation from "./Formation";
import FormationEdit from "./FormationEdit";
import Expert from "./Expert";


const CardEditable = (props) => {
  const {formacao, setFormacao, add} = props;
  const [editMode, setEditMode] = useState(false);

  const Add = () => {
    setEditMode(true);
    add();
  }

  return (
    <div className={props.isMobile ? "card-company card-company-mobile" : "card-company"}>
      <div className="card-company-header">
      <div className="div-edit">
        <span>{props.title}</span>
      </div>
      </div>
      <div className="card-company-body non-border">
        {
          formacao.map((f, i) => <Formation add={null}  formacao={f} isMobile={props.isMobile} />)
        }

            
      </div>
    </div>
  )
};

export default CardEditable;
