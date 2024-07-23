
const Header = (props) => {

 

    return (
        <div className={props.paddingBottom ? "header header-long" : "header"}>
          <h2>
              {props.title}
          </h2>
          <p>
              {props.description}
          </p>
        </div>
    )
  };
  
  export default Header;
  