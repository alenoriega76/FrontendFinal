import { useNavigate } from 'react-router-dom';
import './Login.css';
import { useState } from 'react';
import Swal from 'sweetalert2';
import { useAuth } from '../controllers/authContexto'; // Importa el contexto de autenticación

function Login() {
  const Navigate = useNavigate();
  const { login } = useAuth(); // Obtiene la función de inicio de sesión del contexto de autenticación
  const [usuarios, setUsuarios] = useState({ email: '', contraseña: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUsuarios({ ...usuarios, [name]: value });
  };

  const handleLogin = async () => {
    if (!usuarios.email || !usuarios.contraseña) {
      Swal.fire({
        icon: 'error',
        title: 'Error de validación',
        text: 'Por favor, completa todos los campos.',
      });
      return;
     
    } <Navigate to="/products"/>

    try {
      const response = await fetch('http://localhost:4000/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(usuarios),
      });

      if (response.ok) {
        Swal.fire({
          icon: 'success',
          title: 'Inicio de sesión exitoso',
        });

        const data = await response.json();
        const { role } = data;

        login(data); // Inicia sesión y almacena la información del usuario en el contexto de autenticación

        if (role === 'admin') {
          Navigate('/nuevoProducto');
        } else {
          Navigate('/products');
        }
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Inicio de sesión fallido',
          text: 'Por favor, verifica tus credenciales e intenta nuevamente.',
        });
      }
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
    }
  }

  return (
    <div className='container'>
      <br />
      <h2>Iniciar Sesión</h2>
      <form className='formlogin'>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={usuarios.email}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Contraseña:</label>
          <input
            type="password"
            name="contraseña"
            value={usuarios.contraseña}
            onChange={handleInputChange}
          />
        </div>
        <div className='boton'>
          <button type="button" className='botonenviar' onClick={handleLogin}>
            Iniciar Sesión
          </button>
        </div>
      </form>
      <br />
    </div>
  );
}

export default Login;
