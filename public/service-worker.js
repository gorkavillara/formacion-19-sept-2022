/* eslint-disable no-restricted-globals */
console.log("Hola última versión");

self.addEventListener("install", () => self.skipWaiting());

self.addEventListener("push", (event) => {
  self.registration.showNotification("Aquí va el título", {
    body: "Este es el cuerpo del mensaje",
  });
  console.log("push recibido");
});

self.addEventListener("fetch", () => {
  // aquí guardamos en caché las páginas que deben ser vistas en offline
});
