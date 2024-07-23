import { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import CardBlog from './CardBlog';
import { get_artigos } from "../../services/apiController";

const Blogs = (props) => {
  const [artigos, setArtigos] = useState([]);
  const [todosArtigos, setTodos] = useState([]);


  const getData = async () => {
    const artigos = await get_artigos();
    setArtigos(artigos.splice(0, 2));
    setTodos(artigos);
  }

  const carregar = () => {
    const _artigos = [...todosArtigos];
    setArtigos([...artigos, _artigos.splice(0, 2)]);
    setTodos(_artigos);
  }

  useEffect(() => {
    getData();
  }, []);
  

  return (
    <section className="blogs" id="blogs">
      <Container>
        {artigos.map((artigo, key)=>(<CardBlog isMobile={props.isMobile} key={key} artigo={artigo} />))}
        { todosArtigos.length > 0 &&
          <button onClick={() => carregar()} style={{margin: "auto"}} className="btn-singin-footer">Carregar mais artigos</button>
        }
      </Container>
    </section>
  )
};

export default Blogs;
