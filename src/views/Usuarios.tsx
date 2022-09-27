import { useSelector, useDispatch } from "react-redux";

import { fetchUsers } from "../features/users/usersSlice";

import "./Formulario.scss";

import { Alumno } from "../models";
import { RootState } from "../store/store";

const Usuarios = () => {
  const alumnos = useSelector((state: RootState) => state.users)
  
  const dispatch = useDispatch()
  const fetchAlumnos = () => dispatch(fetchUsers())

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
