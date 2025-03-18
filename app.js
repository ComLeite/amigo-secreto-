//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let amigos = [];

document.querySelector('#amigos').innerHTML = amigos.join(', '); // Helicia, Maria, João, Pedro, Luna, Marcos, Matheus, Paulo, Felipe, Gabriel, Lucas
document.querySelector('#quantidade').innerHTML = amigos.length; // 11 amigos

// Exibir todos os nomes na lista de amigos
let nomesHTML = '';
for (let i = 0; i < amigos.length; i++) {
    nomesHTML += `<p>${amigos[i]}</p>`;
}
document.querySelector('#nome').innerHTML = nomesHTML;

function adicionarAmigo() {
    const input = document.querySelector('#amigo');
    const nome = input.value.trim();
    if (nome) {
        amigos.push(nome);
        input.value = '';
        atualizarListaAmigos();
    }
}

function atualizarListaAmigos() {
    const listaAmigos = document.querySelector('#listaAmigos');
    listaAmigos.innerHTML = '';
    amigos.forEach(amigo => {
        const li = document.createElement('li');
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });

    document.querySelector('#amigos').innerHTML = amigos.join(', ');
    document.querySelector('#quantidade').innerHTML = amigos.length;
}

function sortearAmigo() {
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = '';
    const sorteados = [...amigos];
    while (sorteados.length) {
        const amigo1 = sorteados.splice(Math.floor(Math.random() * sorteados.length), 1)[0];
        const amigo2 = sorteados.splice(Math.floor(Math.random() * sorteados.length), 1)[0];
        const li = document.createElement('li');
        li.textContent = `${amigo1} tirou ${amigo2}`;
        resultado.appendChild(li);
    }
}


