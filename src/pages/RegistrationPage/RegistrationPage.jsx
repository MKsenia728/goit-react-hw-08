import { useDispatch, useSelector } from "react-redux";
import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";
import { authError, authLoading } from "../../redux/auth/selectors";
import Loader from "../../components/Loader/Loader";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import { clearError } from "../../redux/auth/slice";
import { useEffect } from "react";

const RegistrationPage = () => {
  const isLoading = useSelector(authLoading);
  const isError = useSelector(authError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(clearError());
  }, [dispatch]);

  return (
    <>
      <p>Register your account ... </p>
      <RegistrationForm />
      {<Loader loading={isLoading} />}
      {isError && <ErrorMessage message="Wrong data, try again please..." />}
    </>
  );
};

export default RegistrationPage;
