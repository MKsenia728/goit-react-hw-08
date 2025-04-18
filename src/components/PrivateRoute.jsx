import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../redux/auth/selectors";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ component, redirectedTo }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return isLoggedIn ?  component  : <Navigate to={redirectedTo} />;
};

export default PrivateRoute;
