import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import CardBlog from './CardBlog';
import Formation from "./Formation";
import Expert from "./Expert";
import ExpertEdit from "./ExpertEdit";

const CardEditable2 = (props) => {
  const {experiencia, setExperiencia, add, save, del} = props;
  const [editMode, setEditMode] = useState(Array(experiencia.length).fill(false));

  const Add = () => {
    const i = experiencia.length;
    add();
    edit(i);
  }

  const edit = (i) =>{
    console.log(editMode);
    const _edit = [...editMode];
    if(_edit[i]){
      save(i);
    }

    _edit[i] = !_edit[i];

    setEditMode(_edit)
  }

  return (
    <div className={props.isMobile ? "card-company card-company-mobile" : "card-company"}>
      <div className="card-company-header">
      <div className="div-edit">
        <h3>{props.title}</h3>
      </div>
      </div>
      <div className="card-company-body non-border">
            {
              experiencia.map((e, i) => {

                return !editMode[i] ? <Expert onDelete={del} index={i} onEdit={edit} experiencia={e} setExperiencia={setExperiencia} i={i} isMobile={props.isMobile} key={i} /> : <ExpertEdit key={i} onDelete={del} i={i} onEdit={edit} experiencia={e} setExperiencia={setExperiencia} isMobile={props.isMobile} />;
              })
            }

        <button onClick={() => Add()} className="formation-button">Adicionar +</button>
      </div>
    </div>
  )
};

export default CardEditable2;
