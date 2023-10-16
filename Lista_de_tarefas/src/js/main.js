const inputNovaTarefa = document.querySelector("#nova-tarefa");
const listaDetarefas = document.getElementById("tarefas");
let tarefas = [];


document.addEventListener("click", function(event) {
    const element = event.target;
    
    switch(element.className) {
        case "adcionar-tarefa":
            if (!inputNovaTarefa.value) return;
            const novaTarefa = inputNovaTarefa.value;
            adcionarNovaTarefa(novaTarefa);
            inputNovaTarefa.value = "";
            break;

        case "remover-tarefa":
            const id = element.dataset.id;
            removerTarefa(id);
    }
})

const newElement = (tag) => {
    return document.createElement(tag);
}

const removerTarefa = (id) => {
    tarefas.splice(id, 1);
    construirListaDetarefa();
}

const adcionarNovaTarefa = (tarefaNova) => {
    tarefas.push(tarefaNova);
    construirListaDetarefa();
}

const construirListaDetarefa = () => {
    listaDetarefas.innerHTML = "";

    tarefas.forEach((tarefa, index) => {
        const li = newElement("li");
        li.innerHTML = `<span>${tarefa} <button class="remover-tarefa" data-id="${index}">apagar</button></span>`;
        listaDetarefas.appendChild(li);
    })
}