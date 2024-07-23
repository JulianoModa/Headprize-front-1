import { setUser } from '../../actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Header from "../../components/Company/HeaderCompany";
import CompanyDetails from "../../components/Company/CompanyBody";
import { useState, useEffect } from "react";
import { get_empresa, get_porte } from "../../services/user.service";
import { useParams } from "react-router-dom";


const ProfileCompany = (props) => {
  const {id} = useParams();
  const [company, setCompany] = useState({nome:"", pass:"", email:"", tel_celular:"", telefone:"", linkedin:"", descricao:"", dia_faturamento:"", dia_fechamento:"", tipo_contrato:"", cnpj:"", cidade:"", uf:"", pais:"", ramo:"", porteId: 0});
  const [porte, setPorte] = useState([]);
  const [isInitialRender, setIsInitialRender] = useState(true);

    const att_data = async () => {
        const response = await get_empresa(id);
        const _porte = await get_porte();
        const porte = {};
        await _porte.porte.map((p) => {porte[p.id] = p});

        setCompany(response);

        setPorte([..._porte.porte]);
        if(response.porteId != null && response.porteId != undefined){
          response.porteText = porte[response.porteId].descricao
        }else{
          response.porteText = "0 Funcionarios";
        }
    }

    const change_company = (key, value) => {
      return null;
    }

    useEffect(() => {
      const get_data = () => {
        setIsInitialRender(false);
        att_data();
      }
      if (isInitialRender) {
        get_data();
      }
    }, [att_data, isInitialRender]);

  return (
    <>
        <Header porte={porte} company={company} setCompany={change_company} isMobile={props.mobile}/>
        <CompanyDetails company={company} setCompany={change_company} isMobile={props.mobile}/>
    </>
  )
}

const mapStateToProps = store => ({
    user: store.userState.user,
    mobile: store.mobileState.mobile
});
  
const mapDispatchToProps = dispatch =>
    bindActionCreators({ setUser }, dispatch);
  
export default connect(mapStateToProps, mapDispatchToProps)(ProfileCompany);