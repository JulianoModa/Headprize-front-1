import { Contact } from "../../components/Home/Contact";
import { setUser } from '../../actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Header from "../../components/Geral/CustonHeader";
import RegisterPage from "../../components/Geral/RegisterPage"


const Register = (props) => {


  return (
    <>
        <Header paddingBottom={true} title="É Muito Fácil Publicar sua Vaga na HeadPrize" description="Basta fazer a página da sua empresa e lançar sua vaga ao mundo, é só preencher os dados. A gente faz o resto!" />
        <RegisterPage isMobile={props.mobile}/>
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