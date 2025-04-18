import { useDispatch, useSelector } from "react-redux";
import LoginForm from "../../components/LoginForm/LoginForm";
import { authError, authLoading } from "../../redux/auth/selectors";
import { useEffect } from "react";
import { clearError } from "../../redux/auth/slice";
import Loader from "../../components/Loader/Loader";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";

const LoginPage = () => {
  const isLoading = useSelector(authLoading);
  const isError = useSelector(authError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(clearError());
  }, [dispatch]);

  return (
    <div>
      <p>Please log in ...</p>
      <LoginForm />
      {<Loader loading={isLoading} />}
      {isError && (
        <ErrorMessage message="Check your data, try again please..." />
      )}
    </div>
  );
};

export default LoginPage;
