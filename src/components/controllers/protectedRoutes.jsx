import { Route, Navigate } from 'react-router-dom';
import { useAuth } from './AuthContext';
import PropTypes from 'prop-types'
function ProtectedRoute({ admin, ...props }) {
  const { isAuthenticated, user } = useAuth();

  if ((admin && isAuthenticated && user?.isAdmin) || (!admin && isAuthenticated)) {
    return <Route {...props} />;
  } else {
    return <Navigate to="/login" />;
  }
}
ProtectedRoute.propTypes = {
  admin: PropTypes.bool,
};
export default ProtectedRoute;
