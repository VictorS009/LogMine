const botao = document.querySelector(".mostrar-senha");
const senha = document.querySelector("#userPassword");

  botao.addEventListener("click", () => {
    if (senha.type === "password") {
      senha.type = "text";
      botao.textContent = "🙈";
    } else {
      senha.type = "password";
      botao.textContent = "👁";
    }
  });
