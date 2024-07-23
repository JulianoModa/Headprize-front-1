import { Container, Row, Col } from "react-bootstrap";
import profiloIcon from "../../assets/img/profile-icon.png"
import pencilIcon from "../../assets/img/pencil.svg"
import checkIcon from "../../assets/img/check-icon.svg"
import { useState } from "react";
const Header = (props) => {

    const { profile, setProfile } = props;
    const [editNameMode, setEditNameMode] = useState(false);
    const [editOccupationMode, setEditOccupationMode] = useState(false);
    const [editLocationMode, setEditLocationMode] = useState(false);
    const [editBirthdayMode, setEditBirthdayMode] = useState(false);

    return (
        <div className={props.isMobile ? "header-people header-people-mobile" : "header-people"}>
            <Row>
                <Col className={props.isMobile ? "profile-pivture-mobile-div" : ""} xs={12} md={12} xl={2}>
                    <div className={props.isMobile ? "people-profile-picture people-profile-picture-mobile" : "people-profile-picture"}>
                        <img src={profiloIcon} />
                    </div>
                </Col>
                <Col xs={12} md={12} xl={8}>
                    <div className={props.isMobile ? "body-header-people body-header-people-mobile":"body-header-people"}>
                        <div className={props.isMobile ? "div-edit div-edit-mobile":"div-edit"}>
                            <span>{profile.nome}</span>
                        </div>
                        <div className={props.isMobile ? "div-edit div-edit-mobile":"div-edit"}>
                            <p>{profile.profissao}</p>
                        </div>

                        <div className={props.isMobile ? "div-edit-tag":"div-edit"}>
                            <div className={props.isMobile ? "tag tag-mobile":"tag"}>

                                <span>{profile.municipio}, {profile.cidade}/{profile.estado}, {profile.pais}</span>
                                
                            </div>

                            <div className={props.isMobile ? "tag tag-mobile":"tag"}>
                                <span>{profile.data_nasc}</span>
                            </div>
                        </div>

                        <hr />

                        <div className={props.isMobile ? "people-description people-description-mobile":"people-description"}>
                            <p>{profile.descricao}</p>
                        </div>
                        
                    </div>
                </Col>
            </Row>
        </div>
    )
  };
  
  export default Header;
  