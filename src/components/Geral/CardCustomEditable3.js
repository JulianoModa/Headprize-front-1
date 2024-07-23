import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import CardBlog from './CardBlog';
import Formation from "./Formation";
import Language from "./Language";
import LanguageEdit from "./LanguageEdit";

const CardEditable2 = (props) => {
  const {idioma, setIdioma, add, save, del} = props;
  const [editMode, setEditMode] = useState(Array(idioma.length).fill(false));

  const Add = () => {
    const i = idioma.length;
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
              idioma.map((id, i) => {

                return !editMode[i] ? <Language onDelete={del} index={i} onEdit={edit} idioma={id} setIdioma={setIdioma} i={i} isMobile={props.isMobile} key={i} /> : <LanguageEdit key={i} onDelete={del} i={i} onEdit={edit} idioma={id} setIdioma={setIdioma} isMobile={props.isMobile} />;
              })
            }

        <button onClick={() => Add()} className="formation-button">Adicionar +</button>
      </div>
    </div>
  )
};

export default CardEditable2;
