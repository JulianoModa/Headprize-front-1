import React, { useState } from "react";

import { setUser, setMobile, Logout } from '../actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import NavBarLogged from "../components/Geral/NavBarLogged";
import NavBar from "../components/Geral/NavBar";
import Footer from "../components/Geral/Footer"
import { Outlet } from "react-router-dom";


let ps;
const Layout = (props) => {

  const {logged, Logout} = props; 

  const [isTablet, setIsTable] = useState(false);
  const resizeFunction = () => {
    if (window.innerWidth >= 1200) {

      props.setMobile(false);
    }else{
      if(window.innerWidth > 1024){
        setIsTable(true);
      }
      props.setMobile(true);
    }
  };

  React.useEffect(() => {
    if (window.innerWidth >= 1200) {
      
      props.setMobile(false);
      
    }else{
      
      props.setMobile(true);    
    }

    
    window.addEventListener("resize", resizeFunction)
    return function cleanup() {
      window.removeEventListener("resize", resizeFunction);
    };
  }, [props]);


  return (
    <div className="App">
      {
        logged ? <NavBarLogged Logout={Logout} isTablet={isTablet} isMobile={props.mobile} user={props.user} /> : <NavBar isTablet={isTablet} isMobile={props.mobile} />
      }
      
      <Outlet />
      <Footer logged={logged} Logout={Logout} user={props.user} isMobile={props.mobile}/>
    </div>
        
  );
}

const mapStateToProps = store => ({
  user: store.userState.user,
  logged: store.userState.logged,
  mobile: store.mobileState.mobile
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ setUser, setMobile, Logout }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Layout);