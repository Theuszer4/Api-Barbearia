const express = require("express");
const router = express.Router();

router.post("/", (req, res, next) => {
  const { nome, email, numero, senha } = req.body;

  if (!nome) {
    return res.status(422).send({ message: "O nome é obrigatório!" });
  }
  if (!email) {
    return res.status(422).send({ message: "O email é obrigatório!" });
  }
  if (!senha) {
    return res.status(422).send({ message: "A senha é obrigatório!" });
  }
  if (!numero) {
    return res.status(422).send({ message: "O numero é obrigatorio" });
  }
  
  db.getConnetion((error, conn) => {
    if (error) {
      return res.status(500).send({
        message: "Houve um erro, tente novamente mais tarde.",
        erro: error,
      });
    }

    let query = `INSERT INTO barbeiro (nome, email, numero, senha) SELECT '${nome}', '${email}', '${numero}', '${senha}'`
    conn.query(query, (erro, result) =>{
      conn.release();
      if (erro){
        return res.status(500).send({
          message: "Houve um erro tente novamente mais tarde.",
          erro: error,
        })
      }
      return res.status(201).send({
        message: "Funcionário cadastrado com sucesso!",
        id_funcionario: result.insertId,
      });
    })


  });
});

module.exports = app;