import { Field, Form, Formik, ErrorMessage } from "formik";
import { register } from "../../redux/auth/operations";
import { useDispatch } from "react-redux";
import css from "./RegistrationForm.module.css";
import * as Yup from "yup";

const RegistrationForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(register(values));
    actions.resetForm();
  };

  const RegistrationSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    email: Yup.string().email("Wrong e-mail format").required("Required"),
    password: Yup.string().min(7, "Too Short!").required("Required"),
  });

  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        password: "",
      }}
      onSubmit={handleSubmit}
      validationSchema={RegistrationSchema}
    >
      <Form className={css.form} autoComplete="off">
        <label className={css.label}>
          Username
          <Field type="text" name="name" />
          <ErrorMessage className={css.error} name="name" component="span" />
        </label>

        <label className={css.label}>
          Email
          <Field type="email" name="email" />
          <ErrorMessage className={css.error} name="email" component="span" />
        </label>

        <label className={css.label}>
          Password
          <Field type="password" name="password" />
          <ErrorMessage
            className={css.error}
            name="password"
            component="span"
          />
        </label>
        <button type="submit">Register</button>
      </Form>
    </Formik>
  );
};

export default RegistrationForm;
