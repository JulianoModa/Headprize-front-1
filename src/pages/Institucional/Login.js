import { Contact } from "../../components/Home/Contact";
import { setUser } from '../../actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Header from "../../components/Geral/CustonHeader";
import LoginPage from "../../components/Geral/LoginPage"
import { useNavigate, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { att, get_user, valid_invite } from "../../services/user.service";
import { setarUsuario } from "../../services/auth";


const Register = (props) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [hasInvite, setHasInvite] = useState(false);
  const {user, setUser} = props;
  const navigate = useNavigate();
  
  console.log(user);
  console.log(user);
  const do_login = (response) => {
    
    console.log(response);
    console.log({user: response, role: response.usuario.tipoId});
    setTimeout(() => {
      console.log(user);
    }, 2000)
    //navigate(response.usuario.tipoId == 3 ? "/pessoa-fisica" : "/empresa");
    //navigate(0);
    //window.scrollTo(0, 0);
  }
  useEffect(() => {
    
    const verify_linkedin_hook = async () => {
      console.log(props)
      if(user.usuario == null || user.usuario == undefined){

        if(searchParams.get("HEADPRIZE__INVITE") != null){
          localStorage.setItem("HEADPRIZE__INVITE", searchParams.get("convite"));
          setHasInvite(true);
        }else{
          setHasInvite(false);
        }
        if(searchParams.get("id") != null){
          
          
          const response = await get_user(searchParams.get("id"));
          if(localStorage.getItem("HEADPRIZE__INVITE") != null && localStorage.getItem("HEADPRIZE__INVITE") != undefined){
            const [invite, id] = localStorage.getItem("HEADPRIZE__INVITE").split('_');
            const validacao = await valid_invite(invite, id);
            localStorage.setItem("HEADPRIZE__INVITE", null);
          }
          props.setUser(response);
          setarUsuario(response);
          console.log(response);
          navigate(response.usuario.tipoId == 3 ? "/pessoa-fisica" : "/empresa");

          //do_login(response)
          //console.log(searchParams)
          //console.log(props)
        }


      }
    }
    
    verify_linkedin_hook();
  }, [props, user]);


  return (
    <>
        <Header paddingBottom={true} title="Acesse sua Conta!" description="" />
        <LoginPage hasInvite={hasInvite} setUser={setUser} isMobile={props.mobile} />
    </>
  )
}

const mapStateToProps = store => ({
    user: store.userState.user,
    mobile: store.mobileState.mobile
});
  
const mapDispatchToProps = dispatch =>
    bindActionCreators({ setUser }, dispatch);
  
export default connect(mapStateToProps, mapDispatchToProps)(Register);