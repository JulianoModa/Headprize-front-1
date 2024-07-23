import { Row, Col } from "react-bootstrap";
import profiloIcon from "../../assets/img/profile-icon.png";
import { get_base_api } from "../../services/user.service";

const Header = (props) => {
    const {company} = props;
 

    return (
        <div className={props.isMobile ? "header-company header-company-mobile":"header-company"}>
            <Row>
                {/*<Col className={props.isMobile ? "profile-pivture-mobile-div" : ""} xs={12} md={12} xl={2}>
                    <div className="profile-picture">
                        <img alt="Imagem de perfil" src={(company.logo_link !== null && company.logo_link !== undefined && company.logo_link !== "" ) ? get_base_api + company.logo_link : profiloIcon} />
                    </div>
                </Col> */}
                <Col xs={12} md={12} xl={8}>
                    <div className={props.isMobile ? "body-header-comany body-header-comany-mobile" :"body-header-comany"}>
                        <div className={props.isMobile ? "div-edit div-edit-mobile":"div-edit"}>
                            <span>{company.nome}</span>
                        </div>
                            <p>{company.cidade} - {company.uf}</p>
                        <div className={props.isMobile ? "div-edit div-edit-mobile":"div-edit"}>
                            <p>{company.porteText}</p>
                        </div>
                        
                    </div>
                </Col>
            </Row>
        </div>
    )
  };
  
  export default Header;
  