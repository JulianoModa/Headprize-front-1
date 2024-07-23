import { Contact } from "../../components/Home/Contact";
import { setUser } from '../../actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Header from "../../components/Geral/Header"
const ContactPage = (props) => {


  return (
    <>
    <Header title="Fale Conosco" local="Fale Conosco" />
    <Contact />
    </>
  )
}

const mapStateToProps = store => ({
    user: store.userState.user,
    mobile: store.mobileState.mobile
});
  
const mapDispatchToProps = dispatch =>
    bindActionCreators({ setUser }, dispatch);
  
export default connect(mapStateToProps, mapDispatchToProps)(ContactPage);