// Navbar.jsx
import './nadvar.css';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUsers,
  faShoppingCart,
  faUser,
  faHome,
  faUserPlus,
  faBagShopping,
  faSignInAlt,
} from "@fortawesome/free-solid-svg-icons";




function Nadvar() {
  return (
    <nav className="navbar">
      <div className="logo-container">
        <img
          src="https://raw.githubusercontent.com/alenoriega76/NoriegaAlejandro-TechnoEspacio/master/img/logitoo2_Capa%201_copy_1.png"
          alt="Logo"
          className="logo"
        />
      </div>
      <ul className="navLinks">
        <li>
          <Link to="/" className="navLink">
           <FontAwesomeIcon icon={faHome} /> Inicio 
          </Link>
        </li>
        <li>
          <Link to="/login" className="navLink">
           <FontAwesomeIcon icon={faUser} />{" "} Login 
          </Link>
        </li>
        <li>
          <Link to="/carrito" className="navLink">
            {" "}
            <FontAwesomeIcon icon={faShoppingCart} /> Carrito
          </Link>
        </li>
        <li>
          <Link to="/register" className="navLink">
            {" "}
            <FontAwesomeIcon icon={faUserPlus} />
            Registro
          </Link>
        </li>
        <li>
          <Link to="/products" className="navLink">
            {" "}
            <FontAwesomeIcon icon={faBagShopping} /> Productos
          </Link>
        </li>
        <li>
          <Link to="/usuarios" className="navLink">
            {" "}
            <FontAwesomeIcon icon={faUsers} /> Usuarios
          </Link>
        </li>
        <li>
          <Link to="/logout" className="navLink">
            {" "}
            <FontAwesomeIcon icon={faSignInAlt} />Logout
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nadvar;
