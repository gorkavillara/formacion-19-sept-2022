import React from "react";
import { Navigate } from "react-router-dom"
import { Alumno } from "../models";

type Props = {
  user: Alumno | null;
  children: any;
};

const UserProtectedRoute = ({ user, children }: Props) => {
    if (user === null || user.username === "") return <Navigate to="/" />
  return children
};

export default UserProtectedRoute;
