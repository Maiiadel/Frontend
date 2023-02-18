import { Link } from "react-router-dom";

function Header(){
return(
    <>
    <nav className="navbar"style={{backgroundColor:"tan"}}>
  <div className="container">
    <div className="navbar-header">
    <a className="navbar-brand" href="/#"><img className="img-circle" alt="BNot Found" src={process.env.PUBLIC_URL+"newlogo-removebg-preview.png"}/><p >UML generator</p></a>

    </div>
    <ul className="nav navbar-nav">
      <li className="active"><Link to="/">Home</Link></li>
      <li><Link to="/about">About</Link></li>
    </ul>
    <ul className="nav navbar-nav navbar-right">
      <li><Link to='/signup'><span className="glyphicon glyphicon-user"></span> Sign Up</Link></li>
      <li><Link to="/login"><span className="glyphicon glyphicon-log-in"></span> Login</Link></li>
    </ul>
  </div>
</nav>
    </>
);
}

export default Header;