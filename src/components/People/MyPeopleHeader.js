import { Container, Row, Col } from "react-bootstrap";
import profiloIcon from "../../assets/img/profile-icon.png"
import pencilIcon from "../../assets/img/pencil.svg"
import checkIcon from "../../assets/img/check-icon.svg"
import { useRef, useState } from "react";
import { get_base_api, upload_picture_people } from "../../services/user.service";
const Header = (props) => {

    const { profile, setProfile, save, setStatus, att } = props;
    const [editNameMode, setEditNameMode] = useState(false);
    const [editOccupationMode, setEditOccupationMode] = useState(false);
    const [editLocationMode, setEditLocationMode] = useState(false);
    const [editBirthdayMode, setEditBirthdayMode] = useState(false);
    const [editDescMode, setEditDescMode] = useState(false);
    const inputRef = useRef(null);
    const inputRef2 = useRef(null);
    console.log(profile)
    const toogleName = () => {
        if(editNameMode){
            save();
        }

        setEditNameMode(!editNameMode);
    }

    const toogleOccupation = () => {
        if(editOccupationMode){
            save();
        }

        setEditOccupationMode(!editOccupationMode);
    }

    const toogleLocation = () => {
        if(editLocationMode){
            save();
        }

        setEditLocationMode(!editLocationMode);
    }

    const toogleDesc = () => {
        if(editDescMode){
            save();
        }

        setEditDescMode(!editDescMode);
    }

    const toogleBirthday = () => {
        if(editBirthdayMode){
            save();
        }

        setEditBirthdayMode(!editBirthdayMode);
    }

    const handleFileChange2 = event => {
        const fileObj = event.target.files && event.target.files[0];
        if (!fileObj) {
          return;
        }
    
        upload_profile(event.target.files[0]);
        
      };

      const handleFileChange = event => {
        const fileObj = event.target.files && event.target.files[0];
        if (!fileObj) {
          return;
        }
    
        upload_profile2(event.target.files[0]);
        
      };
    
      const upload_profile = async (file) => {
        const response = await upload_picture_people(file, profile.usuarioId, 1);
        setStatus(response.message);
        att();
    
      }

      const upload_profile2 = async (file) => {
        const response = await upload_picture_people(file, profile.usuarioId, 2);
        setStatus(response.message);
        att();
      }
    
      const handleClickProfile = () => {
        inputRef.current.click();
      };

      const handleClickProfile2 = () => {
        inputRef2.current.click();
      };

    return (
        <div style={profile.imagem_capa_link != "" && profile.imagem_capa_link != null ? {backgroundImage: "url('http://headprize.me:21073/upload/"+profile.imagem_capa_link+"')", backgroundSize: 'cover'} : {}}  className={props.isMobile ? "header-people header-people-mobile" : "header-people"}>
            <button style={{float: 'right', marginRight: 15, marginTop: -50}} onClick={handleClickProfile} className="action-button">Editar capa</button>
            <input
                            style={{display: 'none'}}
                            ref={inputRef}
                            type="file"
                            onChange={handleFileChange}
                        />
            <Row>
                <Col className={props.isMobile ? "profile-pivture-mobile-div" : ""} xs={12} md={12} xl={2}>
                    <div className={props.isMobile ? "people-profile-picture people-profile-picture-mobile" : "people-profile-picture"}>
                        <div onClick={handleClickProfile2} className={props.isMobile ? "button-plus button-plus-mobile" :"button-plus"}>+</div>
                        <img src={(profile.logo_link !== null && profile.logo_link !== undefined && profile.logo_link !== "" ) ? get_base_api + profile.logo_link : profiloIcon} />
                        <input
                            style={{display: 'none'}}
                            ref={inputRef2}
                            type="file"
                            onChange={handleFileChange2}
                        />
                    </div>
                </Col>
                <Col xs={12} md={12} xl={8}>
                    <div className={props.isMobile ? "body-header-people body-header-people-mobile":"body-header-people"}>
                        <div className={props.isMobile ? "div-edit div-edit-mobile":"div-edit"}>
                            {
                            editNameMode ? 
                                <input className="input input-editable" type="text" value={profile.nome} placeholder="Nome" onChange={(e) => setProfile('nome', e.target.value)}/>

                            :
                                <span>{profile.nome}</span>
                            }
                            <img onClick={() => toogleName()} className="edit-pencil" src={editNameMode ? checkIcon : pencilIcon} />
                        </div>
                        <div className={props.isMobile ? "div-edit div-edit-mobile":"div-edit"}>

                        {
                            editOccupationMode ? 
                                <input className="input input-editable" type="text" value={profile.profissao} placeholder="Nome" onChange={(e) => setProfile('profissao', e.target.value)}/>
                            :
                                <p>{profile.profissao}</p>
                            }
                            <img onClick={() => toogleOccupation()} className="edit-pencil" src={editOccupationMode ? checkIcon : pencilIcon} />
                        </div>

                        <div className={props.isMobile ? "div-edit-tag":"div-edit"}>
                            {/* <div className={props.isMobile ? "tag tag-mobile":"tag"}>

                            {
                            editLocationMode ? (
                                <>
                                    <input className="input input-editable" type="text" value={profile.cidade} placeholder="Cidade" onChange={(e) => setProfile('cidade', e.target.value)}/><br />
                                    <input className="input input-editable" type="text" value={profile.estado} placeholder="Estado" onChange={(e) => setProfile('estado', e.target.value)}/><br />
                                    </>
                            )
                            :
                            <span>{profile.cidade} - {profile.estado}</span>
                            }
                            <img onClick={() => toogleLocation()} className="edit-pencil" src={editLocationMode ? checkIcon : pencilIcon} />
                                
                            </div> */}

                            <div className={props.isMobile ? "tag tag-mobile":"tag"}>

                            {
                            editBirthdayMode ? 
                                <input className="input input-editable" type="text" value={profile.data_nasc} placeholder="Data de nascimento" onChange={(e) => setProfile('data_nasc', e.target.value)}/>

                            :
                                <span>{profile.data_nasc}</span>
                            }
                            <img onClick={() => toogleBirthday()} className="edit-pencil" src={editBirthdayMode ? checkIcon : pencilIcon} />
                            </div>
                        </div>

                        <hr />

                        <div className={props.isMobile ? "people-description people-description-mobile":"people-description"}>

                        {
                            editDescMode ? 
                                <input className="input input-editable" type="text" value={profile.descricao} placeholder="Descrição" onChange={(e) => setProfile('descricao', e.target.value)}/>

                            :
                                <p>{profile.descricao}</p>
                            }
                            <img onClick={() => toogleDesc()} className="edit-pencil" src={editDescMode ? checkIcon : pencilIcon} />
                        </div>
                        
                    </div>
                </Col>
            </Row>
        </div>
    )
  };
  
  export default Header;
  