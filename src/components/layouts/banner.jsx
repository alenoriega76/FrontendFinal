import "./banner.css";

import UsuariosListar from "../usuarios/usuarios";

function Banner() {

  return (
    <div className="banner-container">
      <div className="bacImage">
        <img
          className="imgbanner"
          src="/img/banner1.jpg"
          width="100%"
        ></img>
      </div>

      <div className="bannerContent">
        <h1>Bienvenido a Nuestra Página {UsuariosListar.nombre}</h1>
        <p>Descubre nuestras ofertas especiales</p>

      </div>
    </div>
  );
}
export default Banner;
