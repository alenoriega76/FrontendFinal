import { Route, Navigate } from 'react-router-dom';
import { useAuth } from './AuthContext';

function ProtectedRoute({ admin, ...props }) {
  const { isAuthenticated, user } = useAuth();

  if ((admin && isAuthenticated && user?.isAdmin) || (!admin && isAuthenticated)) {
    return <Route {...props} />;
  } else {
    return <Navigate to="/login" />;
  }
}

export default ProtectedRoute;
