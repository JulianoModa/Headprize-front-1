import { setUser } from '../../actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Header from "../../components/Company/MyHeaderCompany";
import CompanyDetails from "../../components/Company/MyCompanyBody";
import { useEffect, useState } from "react";
import { get_empresa, att_empresa, get_porte } from "../../services/user.service";
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

const ProfileCompany = (props) => {
    const [company, setCompany] = useState({nome:"", pass:"", email:"", tel_celular:"", telefone:"", linkedin:"", descricao:"", dia_faturamento:"", dia_fechamento:"", tipo_contrato:"", cnpj:"", cidade:"", uf:"", pais:"", mercado_atuacao:"", funcionarios: 0});
    const [porte, setPorte] = useState([]);
    const [isInitialRender, setIsInitialRender] = useState(true);

    const att_data = async () => {
        const response = await get_empresa(props.user.empresa.id);
        const _user = {...props.user};
        _user.empresa = response;
        props.setUser(_user);
        const _porte = await get_porte();
        const __porte = {};
        await _porte.porte.map((p) => {__porte[p.id] = p});
        console.log([..._porte.porte]);
        setPorte([..._porte.porte]);
        console.log('_porte.porte', _porte.porte);
        if(response.porteId != null && response.porteId != undefined){
          response.porteText = __porte[response.porteId].descricao
        }else{
          response.porteText = "0 Funcionarios";
        }
        setCompany(response);

    }


    const save_company = async () => {
      console.log(company);
      const response = await att_empresa(company);
      att_data();
      setStatus(response.message);
    }

    const change_company = (key, value) => {
      setCompany({...company, [key]:value});
      console.log('aaaaaaaa', {...company, [key]:value});
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

    const setStatus = (msg) => {
      toast.info(msg);
    }

  return (
    <>
        <Header portes={porte} att={att_data} onSave={save_company} setStatus={setStatus} company={company} setCompany={change_company} isMobile={props.mobile}/>
        <CompanyDetails onSave={save_company} company={company} setCompany={change_company} isMobile={props.mobile}/>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
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