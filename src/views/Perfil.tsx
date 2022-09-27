import React, { useContext } from "react";
import { AppContext } from "../contexts/AppContextProvider";

const Perfil = () => {
  const { user, setUser } = useContext(AppContext);
  console.log(user);
  return (
    <>
      <h3>Tu nombre de usuario es: {user.username}</h3>
      <button onClick={() => setUser(null)}>Cerrar Sesión</button>
    </>
  );
};

export default Perfil;
