import { Contact } from "../../components/Home/Contact";
import { setUser } from '../../actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Header from "../../components/People/PeopleHeader";
import PeopleBody from "../../components/People/PeopleBody";
import { useState } from "react";


const ProfilePeople = (props) => {
  const [profile, setProfile] = useState({nome:"Juliano Vinicius Moda", profissao:"Varejista", pais:"Brasil", cidade:"São Paulo", estado:"SP", municipio:"São Bernardo do campo", descricao:"Possuo experiência de 10 anos no mercado de trabalho como vendedor de varejo. Fui reconhecida três vezes seguidas como funcionária do mês. e na última loia em que trabalhei, bati todas as metas de vendas estipuladas durante o ano todo Sou muito atenciosa e comunicativa, acredito que isso faz com que eu conquiste quase qualquer cliente, até os mais difíceis, e tenho certeza que seus produtos serão bem representados por mim.", email:"Juliano@moda.com.br", tel_celular:"119999999999", data_nasc:"13/01/2002", cpf:"99999999999", chave_stripe:"xxxxxxxxxxxxxxxxxxxx", accessToken:""});

     const change_profile = (key, value) => {
      setProfile({...profile, [key]:value});
    }

  return (
    <>
        <Header profile={profile} setProfile={change_profile} isMobile={props.mobile}/>
        <PeopleBody profile={profile} setProfile={change_profile} isMobile={props.mobile} />
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