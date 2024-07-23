import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import CardEditable from '../Geral/CardCustomEditable';
import CardEditable2 from '../Geral/CardCustomEditable2';
import CardEditable3 from '../Geral/CardCustomEditable3';
import { add_experiencia_by_user, delete_experiencia_by_user, get_experiencias_by_user, update_experiencia_by_user } from "../../services/experiencia.service";
import { add_formacao_by_user, delete_formacao_by_user, get_formacao_by_user, update_formacao_by_user } from "../../services/formacao.service";
import { add_idioma_by_user, delete_idioma_by_user, get_idiomas_by_user, update_idioma_by_user } from "../../services/idioma.service";


const PeopleBody = (props) => {
  
  const { profile, setProfile, user, setStatus } = props;

  const [formacao, setFormacao] = useState([]);
  const [experiencia, setExperiencias] = useState([]);
  const [idioma, setIdiomas] = useState([]);

  const get_data = async () => {
    console.log('user.id', user.id);
    if(user.id){
      const exps = await get_experiencias_by_user(user.id);
      if(exps.experiencia){
        setExperiencias(exps.experiencia);
      }

      const form = await get_formacao_by_user(user.id);
      if(form.formacao){
        setFormacao(form.formacao);
      }

      const idiomas = await get_idiomas_by_user(user.id);
      console.log(idiomas);
      if(idiomas.idiomas){
        setIdiomas(idiomas.idiomas)
      }
    }
  }
  
  const change_formation = (i, key, value) => {
    const _f = [...formacao];
    _f[i][key] = value;
    setFormacao(_f);
  }

  const add_formation = () => {
    setFormacao([...formacao, {id:-1, curso:"", instituicao:"", ano_inicio:"", ano_fim:"", tipo_curso:""}]);
  }

  const save_formation = async (i) => {
    const formation = formacao[i]
    if(formation.id == -1){
      const resp = await add_formacao_by_user(formation, user.id);
      if(resp){
        setStatus(resp.message);
        const form = await get_formacao_by_user(user.id);
        if(form.formacao){
          setFormacao(form.formacao);
        }
      }else{
        setStatus("Erro não identificado")
      }
    }else{
      const resp = await update_formacao_by_user(formation);
      if(resp){
        setStatus(resp.message)
      }else{
        setStatus("Erro não identificado")
      }
    }
  }

  const change_idio = (i, key, value) => {
    const _f = [...idioma];
    _f[i][key] = value;
    setIdiomas(_f);
  }

  const add_idio = () => {
    setIdiomas([...idioma, {id:-1, nivel:"1", descricao:""}]);
  }

  const save_idio = async (i) => {
    const idi = {...idioma[i]};
    if(idi.id == -1){
      const resp = await add_idioma_by_user(idi ,user.id);
      if(resp){
        setStatus(resp.message);
        const idi = await get_idiomas_by_user(user.id);
        if(idi.idioma){
          setIdiomas(idi.idioma);
        }
      }else{
        setStatus("Erro não identificado")
      }

      
    }else{
      const resp = await update_idioma_by_user(idi);
      if(resp){
        setStatus(resp.message)
      }else{
        setStatus("Erro não identificado")
      }
    }

  }

  const delete_idio = async (i) => {
    const resp = await delete_idioma_by_user(idioma[i].id);
      if(resp){
        setStatus(resp.message);
        const idis = await get_experiencias_by_user(user.id);
        if(idis.idioma){
          setIdiomas(idis.idioma);
        }else{
          setIdiomas([]);
        }
      }else{
        setStatus("Erro não identificado")
      }
  }

  const change_exp = (i, key, value) => {
    const _f = [...experiencia];
    _f[i][key] = value;
    setExperiencias(_f);
  }

  const add_exp = () => {
    setExperiencias([...experiencia, {id:-1, cargo:"", empresa:"", ano_inicio:"",ano_fim:"", descricao:""}]);
  }

  const save_exp = async (i) => {
    const exp = {...experiencia[i]};
    if(exp.id == -1){
      const resp = await add_experiencia_by_user(exp ,user.id);
      if(resp){
        setStatus(resp.message);
        const exps = await get_experiencias_by_user(user.id);
        if(exps.experiencia){
          setExperiencias(exps.experiencia);
        }
      }else{
        setStatus("Erro não identificado")
      }

      
    }else{
      const resp = await update_experiencia_by_user(exp);
      if(resp){
        setStatus(resp.message)
      }else{
        setStatus("Erro não identificado")
      }
    }

  }

  const delete_exp = async (i) => {
    const resp = await delete_experiencia_by_user(experiencia[i].id);
      if(resp){
        setStatus(resp.message);
        const exps = await get_experiencias_by_user(user.id);
        if(exps.experiencia){
          setExperiencias(exps.experiencia);
        }else{
          setExperiencias([]);
        }
      }else{
        setStatus("Erro não identificado")
      }
  }

  const delete_formation = async (i) => {
    const resp = await delete_formacao_by_user(formacao[i].id);
      if(resp){
        setStatus(resp.message);
        const form = await get_formacao_by_user(user.id);
        if(form.formacao){
          setFormacao(form.formacao);
        }else{
          setFormacao([]);
        }
      }else{
        setStatus("Erro não identificado")
      }
  }


 

  useEffect(() => {
    get_data();
  }, [props])

  return (
    <section className={props.isMobile ? "people-mobile" : "people"} id="people">
      <Container>
        <CardEditable del={delete_formation} save={save_formation} formacao={formacao} setFormacao={change_formation} add={add_formation} isMobile={props.isMobile} title={"Formação Academica"} />
        <CardEditable2 del={delete_exp} save={save_exp} experiencia={experiencia} setExperiencia={change_exp} add={add_exp} isMobile={props.isMobile} title={"Experiência Profissional"}/>
        <CardEditable3 del={delete_idio} save={save_idio} idioma={idioma} setIdioma={change_idio} add={add_idio} isMobile={props.isMobile} title={"Idiomas"}/>
      </Container>
    </section>
  )
};

export default PeopleBody;
