require("dotenv").config();
const conn = require("./db/conn");

const Ususario = require("/models/Usuario")
conn
.sync()
.then(() => {
 console.log("Conectado e sincronizado!");
})

.catch((err) => {
    console.log("Ocorreu um erro: " + err);
});