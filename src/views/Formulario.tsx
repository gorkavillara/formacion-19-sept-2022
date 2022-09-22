import axios, { AxiosResponse } from "axios";
import React, { useEffect, useState } from "react";
import { Alumno } from "../models";

import "./Formulario.scss";

const url =
  "https://us-central1-fir-api-a3355.cloudfunctions.net/app/api/alumnos";

const Formulario = () => {
  const [formValues, setFormValues] = useState<Alumno>({
    username: "",
    email: "",
    password: "",
  });

  const [alumnos, setAlumnos] = useState<Alumno[] | []>([]);

  // const [toggle, setToggle] = useState<boolean>(false)
  const fetchAlumnos = async () => {
    // axios
    //   .post(url, { action: "obtenAlumnos" })
    //   .then((res: AxiosResponse) => console.log(res))
    //   .catch((e) => console.error("ERROR DE AXIOS", e));
    const res: AxiosResponse<any, any> | void = await axios
      .post(url, {
        action: "obtenAlumnos",
      })
      .catch((e) => console.error(e));
    res && setAlumnos(res.data.alumnos);
  };

  useEffect(() => {
    fetchAlumnos();
  }, []);

  const formSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();

    // console.log(e.target[0].value);
    // obtener los valores de los inputs
    console.log(formValues);
    // análisis/validación de datos

    const res = await axios
      .post(url, {
        action: "nuevoAlumno",
        alumno: formValues,
      })
      .catch((e) => console.error(e));

    fetchAlumnos();

    // setToggle(prev => !prev)
    console.log(res);
  };
  return (
    <div className="vista-formulario">
      <h2 className="titulo">Regístrate como jugador</h2>
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
        <button type="submit">Enviar</button>
      </form>
      <div>
        <table>
          <thead>
            <tr>
              <th>Username</th>
              <th>Email</th>
              <th>Password</th>
            </tr>
          </thead>
          <tbody>
            {alumnos.map((alumno: Alumno, index: number) => (
              <tr key={index}>
                <td>{alumno.username}</td>
                <td>{alumno.email}</td>
                <td>{alumno.password}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Formulario;
