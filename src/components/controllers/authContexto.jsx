import { createContext, useContext, useState } from "react";
import PropTypes from "prop-types";

const AuthContext = createContext();

function useAuth() {
  return useContext(AuthContext);
}

 function AuthProvider({ children }) {
  const [usuario, setUsuario] = useState(null);

  const login = async (user) => {
    setUsuario(user);
  };

  const logout = () => {
    setUsuario(null);
  };

  const value = {
    usuario,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { AuthProvider, useAuth };
