require("dotenv").config()
const express = require("express"); //colocando bibilioteca dento de uma variavel
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const path = require("path");

const app = express(); //puxando função para metodo http da bibiloteca express

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.post("/", async (req, res) => {
  const { email, nome } = req.body;

  const transporter = nodemailer.createTransport({ 
    service: 'gmail', 
    auth: { 
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  })

  const emailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: "Obrigada por se inscrever!",
    text: `Obrigada por se inscrever, ${nome}` 
  }

  try {
    await transporter.sendMail(emailOptions)
    res.redirect("/?sucess=true")
  } catch(Erro) {
    console.log(Erro);
    res.redirect("/?sucess=false")
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando: http://localhost:${PORT}`);
});
