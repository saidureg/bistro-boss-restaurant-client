import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import PropTypes from "prop-types";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  if (loading) {
    return <progress className="progress w-56"></progress>;
  }
  if (user) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace />;
};
PrivateRoute.propTypes = {
  children: PropTypes.node,
};

export default PrivateRoute;
