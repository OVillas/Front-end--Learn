const form = document.querySelector("#formulario");
const SIZE = 5;

form.addEventListener("submit", function(e) {
    e.preventDefault();

    const secondsInput = Number(document.querySelector("#segundos-entrada").value); // Acessar o valor do elemento

    const vectorVariables = ["semanas", "dias", "horas", "minutos", "segundosResultado"]; // Corrigir o nome do último elemento
    const vectorResult = calculateTime(secondsInput);


    let j = SIZE - 1;
    for (let i = 0; i < SIZE; i++, j--) {
        document.getElementById(vectorVariables[i]).textContent = vectorResult[j];
    }
    
});

function calculateTime(secondsInput) {
    const vectorResult = [];
    vectorResult.push(secondsInput % 60);
    vectorResult.push(Math.floor(secondsInput / 60) % 60);
    vectorResult.push(Math.floor(secondsInput / 3600) % 24);
    vectorResult.push(Math.floor(secondsInput / 86400) % 7);
    vectorResult.push(Math.floor(secondsInput / 604800));

    return vectorResult;
}
