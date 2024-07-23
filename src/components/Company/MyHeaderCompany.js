
import { useRef, useState } from "react";
import { Row, Col } from "react-bootstrap";
import profiloIcon from "../../assets/img/profile-icon.png"
import { upload_profile_picture, get_base_api } from "../../services/user.service";
const Header = (props) => {
    const {company, portes, setCompany, setStatus, onSave, att} = props;
    const [editNameMode, setEditNameMode] = useState(false);
    const [editUFMode, setEditUFMode] = useState(false);
    const [editQtdeMode, setEditQtdeMode] = useState(false);
    const inputRef = useRef(null);

  const saveName = () => {
    if(editNameMode){
      onSave();
    }

    setEditNameMode(!editNameMode);
  }

  const saveUF = () => {
    if(editUFMode){
      onSave();
    }

    setEditUFMode(!editUFMode);
  }

  const saveQtde = () => {
    if(editQtdeMode){
      onSave();
    }
    setEditQtdeMode(!editQtdeMode);
  }

  const handleFileChange = event => {
    const fileObj = event.target.files && event.target.files[0];
    if (!fileObj) {
      return;
    }

    upload_profile(event.target.files[0]);
    
  };

  const upload_profile = async (file) => {
    const response = await upload_profile_picture(file, props.company.id);
    setStatus(response.message);
    att();

  }

  const handleClickProfile = () => {
    inputRef.current.click();
  };
 

    return (
        <div style={company.imagem_capa_link != "" && company.imagem_capa_link != null ? {backgroundImage: "url('http://headprize.me:21073/upload/"+company.imagem_capa_link+"')", backgroundSize: 'cover'} : {}} className={props.isMobile ? "header-company header-company-mobile":"header-company"}>
          <button style={{float: 'right', marginRight: 15, marginTop: 20}} onClick={handleClickProfile} className="action-button">Editar capa</button>
            <Row>
            <input
                            style={{display: 'none'}}
                            ref={inputRef}
                            type="file"
                            onChange={handleFileChange}
                        />
                         {/*
                <Col className={props.isMobile ? "profile-pivture-mobile-div" : ""} xs={12} md={12} xl={2}>
               
                    <div className="profile-picture">
                        <div onClick={handleClickProfile} className={props.isMobile ? "button-plus button-plus-mobile" :"button-plus"}>+</div>
                        <img alt="Imagem de perfil" src={(company.logo_link !== null && company.logo_link !== undefined && company.logo_link !== "" ) ? get_base_api + company.logo_link : profiloIcon} />
                        <input
                            style={{display: 'none'}}
                            ref={inputRef}
                            type="file"
                            onChange={handleFileChange}
                        />
                    </div> 
                </Col>*/}
                <Col xs={12} md={12} xl={8}>
                    <div className={props.isMobile ? "body-header-comany body-header-comany-mobile" :"body-header-comany"}>
                        <div className={props.isMobile ? "div-edit div-edit-mobile":"div-edit"}>
                        {
                            editNameMode ? 
                                <input className="input input-editable" type="text" value={company.nome} placeholder="Nome" onChange={(e) => setCompany('nome', e.target.value)}/>
                            :
                                <span>{company.nome}</span>
                        }
                            <button onClick={() => saveName()} className="action-button">{editNameMode ? "Salvar" : "Editar"} {!props.isMobile && !editNameMode && "+"}</button>
                        </div>
                        <div className={props.isMobile ? "div-edit div-edit-mobile":"div-edit"}>
                        {
                            editUFMode ? 
                                <input className="input input-editable" type="text" value={company.uf} placeholder="UF" onChange={(e) => setCompany('uf', e.target.value)}/>
                            :
                                <p>{company.uf}</p>
                        }
                            <button onClick={() => saveUF()} className="action-button">{editUFMode ? "Salvar" : "Editar"} {!props.isMobile && !editUFMode && "+"}</button>

                            </div>
                        <div className={props.isMobile ? "div-edit div-edit-mobile":"div-edit"}>

                        {
                            editQtdeMode ? 
                                <select className="input input-editable" type="text" defaultValue={company.porteId} placeholder="Funcionarios" onChange={(e) => setCompany('porteId', e.target.value)}>
                                  {
                                    portes.map((porte) => <option key={porte.id} value={porte.id}>{porte.descricao}</option>)
                                  }
                                  
                                </select>
                            :
                            <p>{company.porteText}</p>
                        }
                            
                            <button onClick={() => saveQtde()} className="action-button">{editQtdeMode ? "Salvar" : "Editar"} {!props.isMobile && !editQtdeMode && "+"}</button>
                        </div>
                        
                    </div>
                </Col>
            </Row>
        </div>
    )
  };
  
  export default Header;
  