import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import CardBlog from './CardBlog';
import Formation from "./Formation";
import Expert from "./Expert";
import ExpertEdit from "./ExpertEdit";

const CardEditable2 = (props) => {
  const {experiencia, setExperiencia, add} = props;
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
              experiencia.map((e, i) => <Expert add={null} experiencia={e} setExperiencia={setExperiencia} isMobile={props.isMobile} />)
            }
      </div>
    </div>
  )
};

export default CardEditable2;
