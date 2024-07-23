import { Banner } from "../../components/Home/Banner";
import { Steps } from "../../components/Home/Steps";
import { BannerLogin } from "../../components/Home/BannerLogin";
import { Benefits } from "../../components/Home/Benefits"
import { BlogHome } from "../../components/Home/BlogHome"
import { setUser } from '../../actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

const Home = (props) => {


  return (
    <>
        <Banner isMobile={props.mobile} />
        <Steps isMobile={props.mobile} />
        <BannerLogin isMobile={props.mobile} />
        <Benefits isMobile={props.mobile} />
        <BlogHome isMobile={props.mobile} />
    </>
  )
}

const mapStateToProps = store => ({
    user: store.userState.user,
    mobile: store.mobileState.mobile
});
  
const mapDispatchToProps = dispatch =>
    bindActionCreators({ setUser }, dispatch);
  
export default connect(mapStateToProps, mapDispatchToProps)(Home);