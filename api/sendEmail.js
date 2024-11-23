const nodemailer = require("nodemailer");

module.exports = async (req, res) => {
  if (req.method !== "POST") {
    return res.status(405).send("Method not allowed");
  }

  const { email, nome } = req.body;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const emailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: "Obrigado por se Inscrever na Nossa Newsletter! 🌟",
    text: `Olá, ${nome}!

Obrigado por se inscrever! Estamos ansiosos para compartilhar novidades.`,
  };

  try {
    await transporter.sendMail(emailOptions);
    res.writeHead(302, { Location: "/" });
    return res.end();
  } catch (error) {
    console.error("Erro ao enviar email:", error);
    res.writeHead(302, { Location: "/?sucess=false" });
    return res.end();
  }
};
