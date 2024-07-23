import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import CardBlog from './CardBlog';
import Formation from "./Formation";
import FormationEdit from "./FormationEdit";
import Expert from "./Expert";


const CardEditable = (props) => {
  const {formacao, setFormacao, add, del, save} = props;
  console.log(formacao.length);
  console.log(Array(formacao.length).fill(false));
  const [editMode, setEditMode] = useState(Array(formacao.length).fill(false));

  const Add = () => {
    const i = formacao.length;
    add();
    edit(i);
  }

  const edit = (i) =>{
    console.log(editMode);
    const _edit = [...editMode];

    if(_edit[i]){
      save(i)
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
          formacao.map((f, i) => {

            return editMode[i]?(<FormationEdit onDelete={del} onEdit={edit} add={Add} formacao={f} setFormacao={setFormacao} i={i} last={i==(formacao.length-1)} isMobile={props.isMobile} />):(<Formation onDelete={del} i={i} add={Add} onEdit={edit} formacao={f} last={i==(formacao.length-1)} isMobile={props.isMobile} />)
          })
        }

        <button onClick={() => Add()} className="formation-button">Adicionar +</button>
            
      </div>
    </div>
  )
};

export default CardEditable;
