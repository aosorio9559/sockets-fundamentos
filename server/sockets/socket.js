const { io } = require("../server");

io.on("connection", (client) => {
  console.log("Usuario conectado");

  client.emit("enviarMensaje", {
    usuario: "ADMIN",
    mensaje: "Bienvenido a la app",
  });

  client.on("disconnect", () => {
    console.log("Usuario desconectado");
  });

  /* Escuchar el cliente */
  client.on("enviarMensaje", (data, callback) => {
    console.log(data);
    client.broadcast.emit("enviarMensaje", data)
    // if (mensaje.usuario) {
    //   callback({
    //     resp: "Todo bien",
    //   });
    // } else {
    //   callback({
    //     resp: "MAL!!!",
    //   });
    // }
  });
});
