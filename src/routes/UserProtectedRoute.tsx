import React from "react";
import { Navigate } from "react-router-dom"
import { Alumno } from "../models";

type Props = {
  user: Alumno;
  children: any;
};

const UserProtectedRoute = ({ user, children }: Props) => {
    if (user.username === "") return <Navigate to="/" />
  return children
};

export default UserProtectedRoute;
