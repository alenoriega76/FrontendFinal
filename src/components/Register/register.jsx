import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import './Register.css'
import Swal from 'sweetalert2';
import { useAuth } from '../controllers/authContexto'; // Importa el contexto de autenticación

function Register() {
  const navigate = useNavigate();
  const { login } = useAuth(); // Obtiene la función de inicio de sesión del contexto de autenticación
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    contraseña: '',
    username: '',
    telefono: '',
    fec_nac: '',
  });

  const [errors, setErrors] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleRegister = async () => {
    try {
      // Validaciones en el cliente
      if (!formData.nombre || !formData.email || !formData.contraseña) {
        Swal.fire({
          icon: 'error',
          title: 'Error de validación',
          text: 'Por favor, completa todos los campos obligatorios.',
        });
        return;
      }

      const response = await fetch('http://localhost:4000/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        Swal.fire({
          icon: 'success',
          title: 'Registro exitoso',
        });

        const data = await response.json();
        login(data); // Inicia sesión después del registro

        navigate('/products'); // Redirige al usuario a la página de productos
      } else {
        const data = await response.json();
        setErrors(data.errors || []);
      }
    } catch (error) {
      console.error('Error al registrar usuario:', error);
    }
  }

  return (
    <div className='container'>
      <h2 className='titulo'>Registro</h2>
      {errors.length > 0 && (
        <ul>
          {errors.map((error, index) => (
            <li key={index}>{error.msg}</li>
          ))}
        </ul>
      )}
      <form>
        <div>
          <label>Nombre:</label>
          <input
            type="text"
            name="nombre"
            value={formData.nombre}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Contraseña:</label>
          <input
            type="password"
            name="contraseña"
            value={formData.contraseña}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Username:</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Teléfono:</label>
          <input
            type="text"
            name="telefono"
            value={formData.telefono}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Fecha de Nacimiento:</label>
          <input
            type="datetime"
            name="fec_nac"
            value={formData.fec_nac}
            onChange={handleInputChange}
          />
        </div>
        <div className="boton">
          <button type="button" onClick={handleRegister}>
            Registrarse
          </button>
        </div>
      </form>
    </div>
  );
}

export default Register;
