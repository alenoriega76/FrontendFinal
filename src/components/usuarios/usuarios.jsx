// import { useEffect, useState } from "react";

// function UsuariosListar() {
//   const [usuarios, setUsuarios] = useState([]);

//   useEffect(() => {
//     fetch('http://localhost:4000/usuarios')
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error('No se pudo obtener la información de productos');
//         }
//         return response.json();
//       })
//       .then((data) => setUsuarios(data))
//       .catch((error) => console.error('Error al obtener productos:', error));
//   }, []);
  

//   return (
//     <div>
//       <h1>Lista de Usuarios</h1>
//       <ul>
//         {usuarios.map((usuario) => (
//           <li key={usuario.id}>
//             {usuario.nombre} - {usuario.username}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default UsuariosListar;
import { useEffect, useState } from "react";
import './usuarios.css';
function UsuariosListar() {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/usuarios')
      .then((response) => {
        if (!response.ok) {
          throw new Error('No se pudo obtener la información de usuarios');
        }
        return response.json();
      })
      .then((data) => setUsuarios(data))
      .catch((error) => console.error('Error al obtener usuarios:', error));
  }, []);

  return (
    <div className="containerU">
      <h1 className="listU">Lista de Usuarios</h1>
      <ul>
      {usuarios.map(user => (
          <li className="listU" key={user.id}>

            <strong className='id'> Id: </strong>{user.id}<br />
            <strong className='name'> Nombre: </strong>{user.nombre}<br />
            <strong className='username'> Username: </strong>{user.username}<br />
            <strong className='birthdate'> Fecha de Nacimiento: </strong>{user.fec_nac}<br />
          </li>
        ))}
      </ul>
      {/* Ejemplo de renderización condicional basada en el rol */}
      {usuarios.some((usuario) => usuario.isAdmin) && (
        <div>
          {/* Mostrar elementos específicos para administradores */}
          <button>Realizar operación administrativa</button>
          {/* Otros elementos para administradores */}
        </div>
      )}
    </div>
  );
}

export default UsuariosListar;
