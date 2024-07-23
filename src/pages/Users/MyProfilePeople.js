import { Contact } from "../../components/Home/Contact";
import { setUser } from '../../actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Header from "../../components/People/MyPeopleHeader";
import PeopleBody from "../../components/People/MyPeopleBody";
import { useEffect, useState } from "react";
import { get_user, att } from "../../services/user.service";
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

const ProfilePeople = (props) => {
    const [profile, setProfile] = useState({nome:"Juliano Vinicius Moda", profissao:"Varejista", pais:"Brasil", cidade:"São Paulo", estado:"SP", municipio:"São Bernardo do campo", descricao:"Possuo experiência de 10 anos no mercado de trabalho como vendedor de varejo. Fui reconhecida três vezes seguidas como funcionária do mês. e na última loia em que trabalhei, bati todas as metas de vendas estipuladas durante o ano todo Sou muito atenciosa e comunicativa, acredito que isso faz com que eu conquiste quase qualquer cliente, até os mais difíceis, e tenho certeza que seus produtos serão bem representados por mim.", email:"Juliano@moda.com.br", tel_celular:"119999999999", data_nasc:"13/01/2002", cpf:"99999999999", chave_stripe:"xxxxxxxxxxxxxxxxxxxx", accessToken:""});
    
    const change_profile = (key, value) => {
      setProfile({...profile, [key]:value});
    }

    const save_profile = async () => {
      console.log(profile);
      profile.id = props.user.usuario.id;
      const response = await att(profile);
      get_data();
      setStatus(response.message);
    }

    const get_data = async () => {
      const user = await get_user(props.user.usuario.id);
      console.log('get_user', user);
      if(user.pessoa == null){
        setProfile({"id":props.user.usuario.id, "nome":"Sem nome","descricao":"Sem descricao","cpf":"","profissao":"","data_nasc":"","telefone":"","foto_perfil":null,"imagem_capa_link":null,"usuarioId":props.user.usuario.id})
      }else{
        setProfile(user.pessoa);
      }
      
    }

    const setStatus = (msg) => {
      toast.info(msg);
    }

    useEffect(() => {
      get_data();
    }, []);

    return (
      <>
        <Header setStatus={setStatus} save={save_profile} profile={profile} setProfile={change_profile} isMobile={props.mobile} att={get_data}/>
        <PeopleBody setStatus={setStatus} user={props.user.usuario} profile={profile} setProfile={change_profile} isMobile={props.mobile} />
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
  
export default connect(mapStateToProps, mapDispatchToProps)(ProfilePeople);