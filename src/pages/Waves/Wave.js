import { Contact } from "../../components/Home/Contact";
import { setUser } from '../../actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Header from "../../components/Wave/WaveHeader";
import WaveBody from "../../components/Wave/WaveBody";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { get_questions, get_wave, indica_wave } from "../../services/vagas.service";
import { get_porte } from "../../services/user.service";
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

const ProfilePeople = (props) => {
  const [wave, setWave] = useState({vaga: {nome:""}, empresa:{nome:""}});
  const [questions, setQuestions] = useState([]);
  const [porte, setPorte] = useState([]);
  
  const [indicado, setIndicado] = useState("");
     const location = useLocation();
     const id = location.pathname.split("/")[location.pathname.split("/").length - 1];

    const get_data = async () => {
      const wave = await get_wave(id);
      const _porte = await get_porte();
      const q = await get_questions(id);
      
        const __porte = {};
        await _porte.porte.map((p) => {__porte[p.id] = p});
        setPorte(__porte);
        if(q.message != undefined && q.message == "Não existem questões!"){
          setQuestions([]);
        }else{
          setQuestions(q.questoes);
        }
        setWave(wave);
    }

    const setStatus = (msg) => {
      toast.info(msg);
    }

    useEffect(() => {
      get_data();
    }, [props]);

    const setResposta = (i, r) => {
      const q = [...questions];
      q[i].resposta = r;
      setQuestions(q);
    }

    const indica = async () => {
      return new Promise(async (resolve) => {
        const data = {indicado, usuarioId:props.user.usuario.id, id: wave.vaga.id}
        console.log(data)
        const r = await indica_wave(data);
        console.log(r)
        resolve(true)
      });
    }
    

  return (
    <>
      {wave.vaga.id && (<>
        <Header setStatus={setStatus} user={props.user} indicado={indicado} setIndicado={setIndicado} indicar={indica} setResposta={setResposta} questions={questions} portes={porte} wave={wave} isMobile={props.mobile}/>
        <WaveBody wave={wave} isMobile={props.mobile} />
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
      )}

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