import { useId } from "react";
import { nanoid } from "nanoid";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import css from "./ContactForm.module.css";

const contactValidationSchema = Yup.object().shape({
  username: Yup.string()
    .min(3, "Too short")
    .max(50, "Too long")
    .required("Required"),
  usernumber: Yup.string()
    .matches(/^\d{3}-\d{2}-\d{2}$/, "Invalid phone number")
    .required("Required"),
});

export const ContactForm = ({ onAdd }) => {
  const usernameField = useId();
  const numberField = useId();
  const handlSubmit = (values, actions) => {
    console.log(values);
    onAdd({
      id: nanoid(),
      name: values.username,
      number: values.usernumber,
    });
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{
        username: "",
        usernumber: "",
      }}
      validationSchema={contactValidationSchema}
      onSubmit={handlSubmit}
    >
      <Form>
        <div>
          <div className={css.inputField}>
            <label htmlFor={usernameField} className={css.title}>
              Name
            </label>
            <Field name="username" id={usernameField} className={css.input} />
            <ErrorMessage name="username" />
          </div>
          <div className={css.inputField}>
            <label htmlFor={numberField} className={css.title}>
              Number
            </label>
            <Field
              type="phone"
              name="usernumber"
              id={numberField}
              className={css.input}
            />
            <ErrorMessage name="usernumber" />
          </div>
        </div>
        <button type="submit" className={css.submitButton}>
          Add contact
        </button>
      </Form>
    </Formik>
  );
};
