import { Field, Form, Formik } from "formik";
import { useId } from "react";
import * as Yup from "yup";
import { ErrorMessage } from "formik";
import { nanoid } from "nanoid";
import css from "./ContactForm.module.css";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsSlice/";

export default function ContactForm() {
  const nameFieldId = useId();
  const telFieldId = useId();
  const dispatch = useDispatch();

  const AddNewNumerSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    number: Yup.string()
      .matches(/^\+?[0-9\s\-()]{7,}$/, "Неверный формат номера телефона")
      .required("Required"),
  });

  const handleSubmit = (values, form) => {
    dispatch(addContact({ ...values, id: nanoid() }));
    form.resetForm();
  };

  return (
    <Formik
      initialValues={{ name: "", number: "" }}
      onSubmit={handleSubmit}
      validationSchema={AddNewNumerSchema}
    >
      <Form className={css.form}>
        <label htmlFor={nameFieldId}>Name</label>
        <Field className={css.input} type="text" name="name" id={nameFieldId} />
        <ErrorMessage className={css.error} name="name" component="span" />
        <label htmlFor={telFieldId}>Number</label>
        <Field className={css.input} type="tel" name="number" id={telFieldId} />
        <ErrorMessage className={css.error} name="number" component="span" />
        <button className={css.button} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
}
