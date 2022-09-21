import axios from "axios";
import React, { useState } from "react";

const Formulario = () => {
  const [formValues, setFormValues] = useState({
    username: "",
    email: "",
    password: "",
  });

  const formSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();

    // console.log(e.target[0].value);
    // obtener los valores de los inputs
    console.log(formValues);
    const url =
      "https://us-central1-fir-api-a3355.cloudfunctions.net/app/api/alumnos";

    const res = await axios
      .post(url, {
        action: "nuevoAlumno",
        alumno: formValues,
      })
      .catch((e) => console.error(e));
      
    console.log(res);
  };
  return (
    <div>
      <h2>Regístrate como jugador</h2>
      <form onSubmit={formSubmit}>
        <input
          type="text"
          name="username"
          value={formValues.username}
          onChange={(e) =>
            setFormValues({ ...formValues, username: e.target.value })
          }
          placeholder="Tu Nombre de Usuario"
        />
        <input
          type="email"
          name="email"
          value={formValues.email}
          onChange={(e) =>
            setFormValues({ ...formValues, email: e.target.value })
          }
          placeholder="Tu Email"
        />
        <input
          type="password"
          name="password"
          value={formValues.password}
          onChange={(e) =>
            setFormValues({ ...formValues, password: e.target.value })
          }
          placeholder="Tu Contraseña"
        />
        <button>Enviar</button>
      </form>
    </div>
  );
};

export default Formulario;
