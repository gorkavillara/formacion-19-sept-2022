import React, { createContext, useState } from "react";
import { Alumno } from "../models";

type Props = {
  children: any;
};

export const AppContext = createContext<any>(null);

const AppContextProvider = ({ children }: Props) => {
  const [user, setUser] = useState<Alumno | null>({
    username: "Alfonso",
    email: "alfonso@alfonso",
  });
  const [asignaturas, setAsignaturas] = useState<any[]>([]);
  return (
    <AppContext.Provider value={{ user, setUser, asignaturas, setAsignaturas }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
