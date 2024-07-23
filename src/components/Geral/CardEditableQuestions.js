import { useState } from "react";

const CardEditable = (props) => {
  const { isMobile, title, add, questions, onEdit, editing, edit, onSave, deleteQ } = props;

  console.log('qq', questions)

  return (
    <div className={isMobile ? "card-company card-company-mobile" : "card-company"}>
      <div className="card-company-header">
      <div className="div-edit">
        <span>{title}</span>
        <button onClick={() => add()} className="action-button">{"+"}</button>
      </div>
      </div>
      <div className="card-company-body">
        <div className="just-you-see">
            {questions && questions.map((question, i) => {
              if(editing[i])
                return (<div className="div-edit"><input className="input input-editable-body" type="text" value={question.descricao} placeholder={"Pergunta " + (i+1)} onChange={(e) => onEdit(i, e.target.value)}/><button onClick={() => onSave(i)} className="action-button">{"Salvar"}</button><button onClick={() => deleteQ(i)} className="action-button">{"Excluir"}</button></div>)
                if(!editing[i])
                  return (<div className="div-edit"><p>{question.descricao}</p><button onClick={() => edit(i)} className="action-button">{"Editar"}</button>
                  <button onClick={() => deleteQ(i)} className="action-button">{"Excluir"}</button></div>)
            })}     
        </div>  
      </div>
    </div>
  )
};

export default CardEditable;
