import { Container, Row, Col } from "react-bootstrap";
import profiloIcon from "../../assets/img/profile-icon.png"
import pencilIcon from "../../assets/img/pencil.svg"
import checkIcon from "../../assets/img/check-icon.svg"
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { upload_profile_picture, get_base_api } from "../../services/user.service";
import { upload_capa_picture } from "../../services/vagas.service";



const Header = (props) => {

    const { wave, portes, setWave, onSave} = props; 
    console.log('wave', wave)
    const navigate = useNavigate();
    const inputRef = useRef(null);
    const handleFileChange = event => {
        const fileObj = event.target.files && event.target.files[0];
        if (!fileObj) {
          return;
        }
    
        upload_profile(event.target.files[0]);
        
      };
    
      const upload_profile = async (file) => {
         const response = await upload_capa_picture(file, wave.vaga.id);
         console.log(response.message);
    
      }
    
      const handleClickProfile = () => {
        inputRef.current.click();
      };

    const [editing, setEditing] = useState({titulo: false, salario: false, premio: false});

    function datediff(firstDate, secondDate) {      
        const oneDay = 24 * 60 * 60 * 1000;
        return Math.round(Math.abs((firstDate - secondDate) / oneDay));  
    }

    const save = (e) => {
        if(editing[e]){
            onSave();
        }
        setEditing({...editing, [e]:!editing[e]});
        
    }
    

    return (
        <>
        
        <div style={wave.vaga.imagem_capa_link != "" && wave.vaga.imagem_capa_link != null ? {backgroundImage: "url('http://headprize.me:21073/upload/"+wave.vaga.imagem_capa_link+"')", backgroundSize: 'cover'} : {}} className={props.isMobile ? "header-people header-people-mobile" : "header-people"}>
        <button style={{float: 'right', marginRight: 15, marginTop: 20}} onClick={handleClickProfile} className="action-button">Editar capa</button>
            <Row>
                
            <Col className={props.isMobile ? "profile-pivture-mobile-div" : ""} xs={12} md={12} xl={2}>
                    {/*<div className="profile-picture">
                        <img alt="Imagem de perfil" src={(wave.empresa.logo_link !== null && wave.empresa.logo_link !== undefined && wave.empresa.logo_link !== "" ) ? get_base_api + wave.empresa.logo_link : profiloIcon} />
                        <input
                            style={{display: 'none'}}
                            ref={inputRef}
                            type="file"
                            onChange={handleFileChange}
                        />
                    </div>*/}
                </Col>
                <Col xs={12} md={12} xl={8}>
                    <div className={props.isMobile ? "body-header-people body-header-people-mobile":"body-header-people"}>
                    { !props.isMobile && (<div className={props.isMobile ? "div-edit div-edit-mobile":"div-edit"}>
                        {
                            editing.titulo ? 
                                <input className="input input-editable" type="text" value={wave.vaga.titulo} placeholder="Titulo" onChange={(e) => setWave('titulo', e.target.value)}/>
                            :
                                <span>{wave.vaga.titulo}</span>
                        }
                            <button onClick={() => save('titulo')} className="action-button">{editing.titulo ? "Salvar" : "Editar"} {!props.isMobile && !editing.titulo && "+"}</button>
                        <span onClick={() => navigate('/empresa/'+wave?.empresa?.id)} style={{cursor: 'pointer', marginLeft: 20, fontSize: 20}}>{wave.empresa.nome}</span>
                        </div>
                    )}

                    { props.isMobile && (<><div className={props.isMobile ? "div-edit div-edit-mobile":"div-edit"}>
                        {
                            editing.titulo ? 
                                <input className="input input-editable" type="text" value={wave.vaga.titulo} placeholder="Titulo" onChange={(e) => setWave('titulo', e.target.value)}/>
                            :
                                <span>{wave.vaga.titulo}</span>
                        }
                            <button onClick={() => save('titulo')} className="action-button">{editing.titulo ? "Salvar" : "Editar"} {!props.isMobile && !editing.titulo && "+"}</button>
                        </div>
                        <div className={props.isMobile ? "div-edit div-edit-mobile":"div-edit"}>
                        <span onClick={() => navigate('/empresa/'+wave?.empresa?.id)} style={{cursor: 'pointer', marginLeft: 20, fontSize: 20}}>{wave.empresa.nome}</span></div></>
                    )}
                        <p className="footer-wave-header">Há {datediff(new Date(wave.vaga.createdAt), new Date())} dias{/* - x candidaturas*/}</p>

                        <div className={props.isMobile ? "div-edit-tag":"div-edit"}>
                            <div className={props.isMobile ? "tag tag-mobile":"tag"}>

                           
                            <span>{wave.empresa.uf} - {wave.empresa.pais}</span>

                            </div>
                        </div>
                        { !props.isMobile && (
                        <div className="info-footer">
                        
                        <Row style={{marginTop: 10}}>
                            <Col size={6} sm={6} className="px-1">
                            </Col>
                            <Col size={6} sm={6} className="px-1">
                                <span className="wave-text-header">Salário</span>
                            </Col>
                        </Row>

                        <Row>
                            <Col size={12} sm={6} className="px-1">
                            { portes[(""+wave?.empresa?.ramoId) || "0"]?.descricao != undefined && wave.empresa.ramo != null && (
                                <span className="wave-text-header">{portes[(""+wave?.empresa?.ramoId) || "0"]?.descricao} - {wave.empresa.ramo}</span>
                            )}
                            </Col>
                            <Col size={12} sm={6} className="px-1">
                            {
                                    editing.salario ? 
                                        <input className="input input-editable" type="number" value={wave.vaga.salario} placeholder="Salario" onChange={(e) => setWave('salario', e.target.value)}/>
                                    :
                                    <span className="wave-text-header">R$ {(parseFloat(wave.vaga.salario).toFixed(2))}</span>
                                }
                                    <button onClick={() => save('salario')} className="action-button">{editing.salario ? "Salvar" : "Editar"} {!props.isMobile && !editing.salario && "+"}</button>
                                
                            </Col>
                        </Row>
                        </div>
                        )}

                    { props.isMobile && (
                        <div className="info-footer">
                        
                        <Row style={{marginTop: 10}}>
                            <Col size={6} sm={6} className="px-1">
                                <span className="wave-text-header">Salário - </span>
                            
                                
                                {
                                    editing.salario ? 
                                        <input style={{maxWidth: 100}}  className="input input-editable" type="number" value={wave.vaga.salario} placeholder="Salario" onChange={(e) => setWave('salario', e.target.value)}/>
                                    :
                                    <span className="wave-text-header">R$ {(parseFloat(wave.vaga.salario).toFixed(2))}</span>
                                }
                                <button onClick={() => save('salario')} className="action-button">{editing.salario ? "Salvar" : "Editar"} {!props.isMobile && !editing.salario && "+"}</button>
                            </Col>
                        </Row>

                        <Row>
                            { portes[(""+wave?.empresa?.ramoId) || "0"]?.descricao != undefined && wave.empresa.ramo != null && (
                                <Col size={12} sm={6} className="px-1">
                                    <span className="wave-text-header">{portes[(""+wave?.empresa?.ramoId) || "0"]?.descricao} - {wave.empresa.ramo}</span>
                                </Col>
                            )}
                           
                        </Row>
                        </div>
                        )}
                        <Row>
                            <Col size={12} sm={8} className="px-1">
                            <div className={props.isMobile ? "wave-description wave-description-mobile":"wave-description"}>
                                <p>Valor do premio para quem indicar a pessoa contratada: R$
                                
                                {
                                    editing.premio ? 
                                        <input className="input input-editable" type="number" value={wave.vaga.valor_premio} placeholder="Premio" onChange={(e) => setWave('valor_premio', e.target.value)}/>
                                    :
                                        (parseFloat(wave.vaga.valor_premio).toFixed(2))
                                }
                                    <button onClick={() => save('premio')} className="action-button">{editing.premio ? "Salvar" : "Editar"} {!props.isMobile && !editing.premio && "+"}</button></p>
                            </div>
                            </Col>
                        </Row>
                        
                    </div>
                </Col>
            </Row>
        </div>
        </>
    )
  };
  
  export default Header;
  