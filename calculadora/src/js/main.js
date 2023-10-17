function criarCalculadora() {
  return {
    display: document.querySelector(".display"),

    clearDisplay() {
      this.display.value = "";
    },

    deletarNumero() {
      let temp = this.display.value;
      this.display.value = temp.slice(0, -1);
    },

    inicia() {
      this.cliqueBotoes();
    },

    cliqueBotoes() {
      document.addEventListener("click", (event) => {
        const element = event.target;

        if (element.classList.contains("btn-num")) {
          this.btnParaDisplay(element.innerText);
        }

        if (element.classList.contains("btn-clear")) {
          this.clearDisplay();
        }

        if (element.classList.contains("btn-del")) {
          this.deletarNumero();
        }
      });
    },

    btnParaDisplay(valor) {
      console.log(this.display.value[0]);
      this.display.value += valor;
    },
  };
}

const calculadora = criarCalculadora();
calculadora.inicia();
