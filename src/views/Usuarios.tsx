
import "./Formulario.scss";

import { Alumno } from "../models";
import { useContext } from "react";
import { AppContext } from "../contexts/AppContextProvider";

const Usuarios = () => {
  const { alumnos, fetchAlumnos } = useContext(AppContext)
  return (
    <div className="vista-formulario">
      <h2 className="titulo">Alumnos registrados</h2>
      <button onClick={fetchAlumnos}>Buscar Alumnos</button>
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

export default Usuarios;
