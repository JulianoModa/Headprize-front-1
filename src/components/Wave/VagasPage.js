import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
const Register = (props) => {
  const {vagas, tipo, setTipo, user, deleteWave} = props;
  const navigation = useNavigate();


  return (
    <section className={props.isMobile ? "vagas vagas-mobile" : "vagas"} id="vagas">
        {user.usuario.tipoId == 3 && (<div><ul className="list-vagas-tipo"><li onClick={() => setTipo(1)} className={tipo == 1 ? "btn-tipo-vaga tipo-vaga-active" : "btn-tipo-vaga"}>ABERTAS</li><li onClick={() => setTipo(2)} className={tipo == 2 ? "btn-tipo-vaga tipo-vaga-active" : "btn-tipo-vaga"}>INDICOU</li><li onClick={() => setTipo(3)} className={tipo == 3 ? "btn-tipo-vaga tipo-vaga-active" : "btn-tipo-vaga"}>RECEBEU INDICAÇÃO</li></ul></div>)}
        {user.usuario.tipoId == 4 && (<div><button onClick={() => navigation('/nova-vaga')} style={{width: 200, float: 'right'}} href="#" className="card-btn">Criar vaga</button></div>)}
      
      <div className="div-vagas">
      {
        

       vagas.map( (vaga, i) => (
        <div key={i} className="card" style={{width: "18rem"}}>
          <img style={{ height: 200}} className="card-img-top" src={"http://headprize.me:21073/upload/"+(tipo == 1 ? vaga.imagem_capa_link : vaga.vaga.imagem_capa_link)} alt="Card image cap" />
          <div className="card-body">
              <span className="card-tag">{(tipo == 1 ? vaga.status : vaga.vaga.status)}</span>
              <h5 className="card-title">{(tipo == 1 ? vaga.titulo : vaga.vaga.titulo)}</h5>
              {/* <p className="card-text">Headprize Bloopers</p> */}
              {/* <p className="card-text">São Paulo</p> */}
              <p className="card-text card-text-footer">Publicada em {new Date((tipo == 1 ? vaga.createdAt : vaga.vaga.createdAt)).toLocaleDateString()}</p>
              
          </div>
          <div className="card-body">

              {user.usuario.tipoId == 3 && user.usuario.tipoId == 1 && <button onClick={() => navigation('/vaga/'+(tipo == 1 ? vaga.id : vaga.vaga.id))} className="card-btn">Indicar</button>}
              {user.usuario.tipoId == 3 && (user.usuario.tipoId == 2 || user.usuario.tipoId == 3) && <button onClick={() => navigation('/vaga/'+(tipo == 1 ? vaga.id : vaga.vaga.id))} className="card-btn">Ver</button>}
              {user.usuario.tipoId == 4 && <button onClick={() => navigation('/vaga/'+(tipo == 1 ? vaga.id : vaga.vaga.id) + '/editar')} className="card-btn">Ver</button>}
              {user.usuario.tipoId == 4 && <button onClick={() => deleteWave(i)}style={{marginTop: 5}} href="#" className="card-btn">Excluir</button>}
              {user.usuario.tipoId == 4 && <button onClick={() => navigation('/candidatos/'+(tipo == 1 ? vaga.id : vaga.vaga.id))}style={{marginTop: 5}} href="#" className="card-btn">Candidatos</button>}
              {/* <a href="#" className="card-link">Another link</a> */}
          </div>
        </div>))

        
      }

      {vagas.length === 0 && <p style={{color: "#2d2d2d"}}>Nenhuma vaga encontrada.</p>}
      </div>
    </section>
  )
}

export default Register;