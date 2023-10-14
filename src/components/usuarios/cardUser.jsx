import PropTypes from 'prop-types';

function CardUsuario({ usuario }) {
  const cardStyle = {
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '16px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#fff',
  };

  const titleStyle = {
    fontSize: '1.5rem',
    color: '#333',
  };

  const userInfoStyle = {
    fontSize: '1rem',
    color: '#666',
    margin: '8px 0',
  };

  if (!usuario) {
    return <div style={cardStyle}>No hay información de usuario disponible.</div>;
  }

  return (
    <div style={cardStyle}>
      <div className="card-body">
        <h3 style={titleStyle}>{usuario.nombre}</h3>
        <p style={userInfoStyle}>Correo: {usuario.email}</p>
        <p style={userInfoStyle}>User: {usuario.username}</p>
        <p style={userInfoStyle}>Fecha de Nacimiento: {usuario.fec_nac}</p>
      </div>
    </div>
  );
}

CardUsuario.propTypes = {
  usuario: PropTypes.shape({
    id: PropTypes.number.isRequired,
    nombre: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    contraseña: PropTypes.string.isRequired,
    fec_nac: PropTypes.number.isRequired,
    username: PropTypes.string.isRequired,
  }),
};

export default CardUsuario;
