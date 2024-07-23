import { Contact } from "../../components/Home/Contact";
import { setUser } from '../../actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Header from "../../components/Geral/CustonHeader";
import RegisterWavePage from "../../components/Wave/RegisterPageWave"


const RegisterWave = (props) => {


  return (
    <>
        <Header paddingBottom={true} title="É Muito Fácil Publicar sua Vaga na HeadPrize" description="" />
        <RegisterWavePage user={props.user} isMobile={props.mobile}/>
    </>
  )
}

const mapStateToProps = store => ({
    user: store.userState.user,
    mobile: store.mobileState.mobile
});
  
const mapDispatchToProps = dispatch =>
    bindActionCreators({ setUser }, dispatch);
  
export default connect(mapStateToProps, mapDispatchToProps)(RegisterWave);