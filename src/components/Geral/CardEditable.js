import { useState } from "react";

const CardEditable = (props) => {
  const [editMode, setEdit] = useState(false);
  const { isMobile, title, description, onChange, keyObject, onSave } = props;

  return (
    <div className={isMobile ? "card-company card-company-mobile" : "card-company"}>
      <div className="card-company-header">
      <div className="div-edit">
        <span>{title}</span>
        <button onClick={() => {if(editMode){onSave();} setEdit(!editMode); }} className="action-button">{editMode ? "Salvar" : "Editar"} {!isMobile && !editMode && "+"}</button>
      </div>
      </div>
      <div className="card-company-body">

        {

        editMode ?
        (
          <textarea className="textarea" rows="6" value={description} placeholder="" onChange={(e) => onChange(keyObject, e.target.value)}></textarea>
        ) :
          <p>
            {description}
          </p>
        }
      </div>
    </div>
  )
};

export default CardEditable;
