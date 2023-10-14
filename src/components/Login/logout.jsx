import { useAuth } from '../controllers/authContexto';
import { Navigate } from 'react-router-dom';

function Logout() {
  const { logout } = useAuth();

  // Realiza las acciones de cierre de sesión
  const handleLogout = async () => {
    try {
      // Llama a la función de cierre de sesión proporcionada por tu contexto de autenticación
      await logout();

      // Redirige al usuario a la página de inicio de sesión
      return <Navigate to="/login" />;
    } catch (error) {
      console.error('Error al cerrar la sesión:', error);
    }
  }

  // Llama a la función de cierre de sesión al cargar el componente
  handleLogout();

  // Puedes mostrar un mensaje de cierre de sesión en este componente si lo deseas

  return null; // Devuelve null para evitar renderizar contenido en este componente
}

export default Logout;
