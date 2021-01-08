const socket = io();
// Escuchar evento de conexión
socket.on("connect", () => {
  console.log("Conectado");
});

// Escuchar evento de desconexión
socket.on("disconnect", () => {
  console.log("Se perdió conexión");
});

// Enviar información al servidor
socket.emit(
  "enviarMensaje",
  {
    usuario: "Alejo",
    mensaje: "Hola, mundo",
  },
  (resp) => {
    console.log("Respuesta del servidor", resp);
  }
);

// Escuchar información del servidor
socket.on("enviarMensaje", (mensaje) => {
  console.log("Servidor", mensaje);
});
