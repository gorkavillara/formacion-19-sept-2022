import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Alumno } from "../models";

type Props = {
  setUser: React.Dispatch<React.SetStateAction<Alumno | null>>;
};

const Login = ({ setUser }: Props) => {
  const [username, setUsername] = useState<string>("");

  const navigate = useNavigate();

  const loginUser = () => {
    setUser({ username, email: username });
    navigate("/perfil");
  };

  return (
    <div>
      <h3>Haz Login</h3>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button onClick={loginUser}>Enviar</button>
    </div>
  );
};

export default Login;
