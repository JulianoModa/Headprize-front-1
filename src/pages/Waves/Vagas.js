import { Contact } from "../../components/Home/Contact";
import { setUser } from '../../actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Header from "../../components/Geral/CustonHeader";
import VagasPage from "../../components/Wave/VagasPage"
import { useEffect, useState } from "react";
import { delete_wave, get_all, get_all_to_user, get_all_to_user2, get_all_to_user3} from "../../services/vagas.service";
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

const Register = (props) => {

    const [vagas, setVagas] = useState([]);
    const [isInitialRender, setIsInitialRender] = useState(true);
    const [tipo, _setTipo] = useState(1);

    const setTipo  = async (i) => {
      if(i == 1){
        const vagas = await get_all_to_user()
        setVagas(vagas.vagas.reverse())
      }

      if(i == 2){
        const vagas = await get_all_to_user2(props.user.usuario.id)
        setVagas(vagas.indicacoes.reverse())
      }

      if(i == 3){
        const vagas = await get_all_to_user3(props.user.usuario.id)
        setVagas(vagas.indicacoes.reverse())
      }
      _setTipo(i);
    };

    const att_data = async () => {  
      console.log('av', props.user)
            console.log('a', props.user.tipoId == 3)
        const re = props.user.usuario.tipoId == 3 ? await get_all_to_user() : await get_all(props.user.empresa.id);
        console.log(re);  
        if(re.vagas != null && re.vagas != undefined){
          setVagas(re.vagas.reverse());
        }

    }

    const setStatus = (msg) => {
      toast.info(msg);
    }

    const deleteWave = async (i) => {
      const r = await delete_wave(vagas[i].id);
      att_data();
      setStatus(r.message)
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
        <VagasPage deleteWave={deleteWave} tipo={tipo} setTipo={setTipo} user={props.user} vagas={vagas} isMobile={props.mobile} />
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
  
export default connect(mapStateToProps, mapDispatchToProps)(Register);