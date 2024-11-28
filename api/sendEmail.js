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

Queremos agradecer por assinar nossa newsletter! Estamos animados por você estar conosco e ansiosos para compartilhar conteúdos, atualizações e novidades da Boitata Jogos. Em breve, você receberá diretamente em sua caixa de entrada informações exclusivas, dicas, e novidades que estamos preparando com muito carinho.

Se tiver alguma dúvida, sugestão ou apenas quiser dizer um "oi", sinta-se à vontade para responder este e-mail. Adorariamos te escutar!

Obrigado mais uma vez pela confiança, e até logo!

Abraços,
Equipe Boitata Jogos.`,
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

window.addEventListener("load", function () {
  const urlParams = new URLSearchParams(window.location.search);
  if (urlParams.get("sucess") === "true") {
    modalEmail.style.display = "flex";
    body.style.overflow = "hidden";
    setTimeout(() => {
      modalEmail.style.display = "none";
      body.style.overflow = "visible";
    }, 2500);
  } else if (urlParams.get("sucess") === "false") {
    alert("Não deu certo :(");
  }
});