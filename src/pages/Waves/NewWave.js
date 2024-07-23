import { Contact } from "../../components/Home/Contact";
import { setUser } from '../../actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Header from "../../components/Wave/MyWaveHeader";
import WaveBody from "../../components/Wave/MyWaveBody";
import { useEffect, useState } from "react";
import { get_wave, update_wave, get_questions, add_question, update_question, delete_questions } from "../../services/vagas.service";
import { get_porte } from "../../services/user.service";
import { useLocation, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

const ProfilePeople = (props) => {
  const [profile, setProfile] = useState({nome:"Juliano Vinicius Moda", profissao:"Varejista", pais:"Brasil", cidade:"São Paulo", estado:"SP", municipio:"São Bernardo do campo", descricao:"Possuo experiência de 10 anos no mercado de trabalho como vendedor de varejo. Fui reconhecida três vezes seguidas como funcionária do mês. e na última loia em que trabalhei, bati todas as metas de vendas estipuladas durante o ano todo Sou muito atenciosa e comunicativa, acredito que isso faz com que eu conquiste quase qualquer cliente, até os mais difíceis, e tenho certeza que seus produtos serão bem representados por mim.", email:"Juliano@moda.com.br", tel_celular:"119999999999", data_nasc:"13/01/2002", cpf:"99999999999", chave_stripe:"xxxxxxxxxxxxxxxxxxxx", accessToken:""});
  const [wave, setWave] = useState({vaga: {nome:""}, empresa:{nome:""}});
  const [porte, setPorte] = useState([]);
  const location = useLocation();
  const id = location.pathname.split("/")[location.pathname.split("/").length - 2];
  const navigate = useNavigate();

    const get_data = async () => {
      console.log("aaaa")
      const wave = await get_wave(id);
      if(wave.empresa.id == props.user.empresa.id){
      const _porte = await get_porte();
        const __porte = {};
        await _porte.porte.map((p) => {__porte[p.id] = p});
        console.log([..._porte.porte]);
        setPorte(__porte);
        const q = await get_questions(wave.vaga.id);
        if(q.message != undefined && q.message == "Não existem questões!"){
          setQuestions([]);
          setEditing(new Array([].length).fill(false));
        }else{
          setQuestions(q.questoes);
          setEditing(new Array(q.questoes.length).fill(false));
        }
        
        setWave(wave);
      }else{
        navigate('/vagas')
      }
      
      
    }

    useEffect(() => {
      get_data();
    }, [props])

     const change_profile = (key, value) => {
      setProfile({...profile, [key]:value});
    }

    const change_wave = (key, value) => {
      setWave({...wave, vaga:{...wave.vaga, [key]: value}});
    }

    const save_wave = async () => {
      const update = await update_wave(wave.vaga);
      await get_data();
      setStatus(update.message);

    }

    const setStatus = (msg) => {
      toast.info(msg);
    }

    const editing_change = (i)  => {const e = [...editing];e[i]=!e[i];setEditing(e)}

    const add_q = () => {const _q = [...questions];_q.push({id: -1, alvo: 1, descricao: "", ordem: questions.length+1});setQuestions(_q);console.log(questions);setEditing([...editing, true])}

    const edit_q = (i, t) => {
      const _q = [...questions];
      _q[i].descricao = t;
      setQuestions(_q)
    }

    const onSaveQuestion = async (i) => {
      if(questions[i].id == -1){
        delete questions[i].id;
        questions[i].vagaId = wave.vaga.id;
        console.log("new quuestion", questions[i]);
        const add_r = await add_question(questions[i]);
        setStatus(add_r.message)
      }else{
        questions[i].vagaId = wave.vaga.id;
        console.log("edit question", questions[i]);
        const add_r = await update_question(questions[i]);
        setStatus(add_r.message);
      }

      editing_change(i);
    }

    const deleteQ = async (i) => {
      const r = await delete_questions(questions[i].id);
      setStatus(r.message);
    }

    const [questions, setQuestions] = useState([{descricao: "", ordem: '' }]);
    const [editing, setEditing] = useState([]);
    const [loaded, setLoaded] = useState(false);

  return (
    <>
        {wave.vaga.id && (<>
          <Header portes={porte} onSave={save_wave} setWave={change_wave} wave={wave} isMobile={props.mobile}/>
          <WaveBody deleteQ={deleteQ} add={add_q} onEdit={edit_q} editing={editing} edit={editing_change}  questions={questions} wave={wave} onSave={save_wave} onSaveQ={onSaveQuestion} setWave={change_wave} isMobile={props.mobile} />
        </>
      )}
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