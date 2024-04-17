require("dotenv").config();
const express = require("express");
const conn = require("./db/conn");
const Usuario = require("./models/Usuario");
const Jogo = require('./models/Jogo');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/usuarios/novo", (req, res) => {
  res.sendFile(`${__dirname}/views/formUsuario.html`);
});

conn.sync()
  .then(() => {
    console.log("Banco de dados conectado e estrutura sincronizada!");
  })
  .catch(err => {
    console.log("Erro ao conectar/sincronizar o banco de dados: " + err);
  });

app.post("/usuarios/novo", async (req, res) => {
  const { nickname, nome } = req.body;
  const dadosUsuario = { nickname, nome };
  const usuario = await Usuario.create(dadosUsuario);
  res.send("Usuário inserido sob o id " + usuario.id);
});

app.post('/cadastrarJogo', async (req, res) => {
  try {
    const { titulo, descricao, precoBase } = req.body;
    const novoJogo = await Jogo.create({ titulo, descricao, precoBase });
    res.status(201).send('Jogo cadastrado com sucesso!');
  } catch (error) {
    console.error(error);
    res.status(500).send('Erro ao cadastrar jogo.');
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
