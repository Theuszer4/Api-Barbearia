const express = require("express");

app.get("/", (req, res) => {
  return res.status(200).send({
    message: "Bem vindo a Api Projeto Barbearia",
  });
});

const barbeiroRoutes = require("./src/Routes/barbeiro.routes");
const clientesRoutes = require("./src/Routes/clientes.routes");
const empresaRoutes = require("./src/Routes/empresa.routes");
const pedidosRoutes = require("./src/Routes/pedidos.routes");

app.use("/barbeiro", barbeiroRoutes);
app.use("/clientes", clientesRoutes);
app.use("/empresas", empresaRoutes);
app.use("/pedidos", pedidosRoutes);

module.exports = app;
