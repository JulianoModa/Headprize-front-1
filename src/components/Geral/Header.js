
const Header = (props) => {

 

  return (
      <div className="header">
        <h2>
            {props.title}
        </h2>
        <p>
            Home / {props.local}
        </p>
      </div>
  )
};

export default Header;
