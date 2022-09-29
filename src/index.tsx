import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// import reportWebVitals from "./reportWebVitals";

const registrarServiceWorker = async() => {
  if ("serviceWorker" in navigator) {
    await navigator.serviceWorker.register("/service-worker.js")
    pedirPermisoNotificaciones()
    // registration.showNotification("Notificación inicial")
  }
}

const pedirPermisoNotificaciones = async() => {
  const res = await Notification.requestPermission()
  if (res === "granted") {
    console.log("Permiso concedido")
    // Cuando deberíamos suscribir al usuario a nuestra lista de notificaciones push
  } else {
    console.log("Permiso denegado")
  }
}

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
    <App />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals(console.log);
registrarServiceWorker()
