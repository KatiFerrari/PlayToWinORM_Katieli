require("dotenv").config();
const conn = require("./db/conn");

const Ususario = require("/models/Usuario")
const express = requere("express");
const app= express = require();

app.get("/Usuario/novo", (req, res) =>{
    res.sendFile('${')
}
)
conn
.sync()
.then(() => {
 console.log("Conectado e sincronizado!");
})

.catch((err) => {
    console.log("Ocorreu um erro: " + err);
});