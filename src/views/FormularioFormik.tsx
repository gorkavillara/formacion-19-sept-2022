import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Alumno } from "../models";
import { object, string } from "yup";

const MensajeError: React.FC<any> = ({ children }) => {
  const estilos = { color: "red", fontSize: "0.7rem" };
  return <span style={estilos}>{children}</span>;
};

const validate = (values: any) => {
  const errors: any = {};
  if (!values.email) {
    errors.email = "Email requerido";
  }
  if (values.username.length < 4) {
    errors.username = "Usuario debe ser mayor a 3 caracteres";
  }
  return errors;
};

const validationSchema = object({
  email: string()
    .email("El email debe ser de tipo email")
    .required("El email es requerido"),
  username: string().min(3, "Debe ser mínimo de 3 caracteres"),
});

const FormularioFormik = () => {
  const initialValues: Alumno = {
    username: "usuariodefecto",
    email: "",
    password: "",
  };
  return (
    <div style={{ color: "white" }}>
      <h1>Formulario Formik</h1>
      <Formik
        initialValues={initialValues}
        // validate={validate}
        validationSchema={validationSchema}
        onSubmit={(e) => {
          console.log("Aquí invocas el axios");
        }}
      >
        {() => (
          <Form>
            <Field placeholder="username" name="username" type="text" />
            <ErrorMessage name="username" component={MensajeError} />
            <br />
            <Field placeholder="email" name="email" type="text" />
            <ErrorMessage name="email" component={MensajeError} />
            <br />
            <Field placeholder="password" name="password" type="password" />
            <ErrorMessage name="password" component={MensajeError} />
            <br />
            <button type="submit">Enviar</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default FormularioFormik;
