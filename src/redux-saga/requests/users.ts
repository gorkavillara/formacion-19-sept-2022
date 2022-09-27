import axios from "axios";

const url =
  "https://us-central1-fir-api-a3355.cloudfunctions.net/app/api/alumnos";

export const fetchUsers = () => {
  return axios.post(url, { action: "obtenAlumnos" });
};
