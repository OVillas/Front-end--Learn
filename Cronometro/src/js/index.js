const relogio = document.getElementById("tempo");
const pausar = document.getElementById("pausar");
const zerar = document.getElementById("zerar");
const iniciar = document.getElementById("iniciar");
let segundos = 0;
let timer;

const setHorasEmSegundos = (segundos) => {
    let timer = new Date(1000 * segundos);

    return timer.toLocaleTimeString("pt-BR", {
        hour12: false,
        timeZone: "UTC"
    });
}

const iniciarTimer = () => {
    timer = setInterval(function() {
        segundos++;
        relogio.innerHTML = setHorasEmSegundos(segundos);
    }, 1000);
}


pausar.addEventListener("click", function(event) {
    clearInterval(timer);
    relogio.classList.add("pausado");
})

zerar.addEventListener("click", function(event) {
    clearInterval(timer);
    relogio.innerHTML = "00:00:00";
    relogio.classList.remove("pausado");
    segundos = 0;
})

iniciar.addEventListener("click", function(event) {
    clearInterval(timer);
    relogio.classList.remove("pausado");
    iniciarTimer();
})

