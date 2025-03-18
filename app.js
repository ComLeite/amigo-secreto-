//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.


let amigos = ['Helicia'];
let amigos = ['Maria'];
let amigos = ['João'];
let amigos = ['Pedro'];
let amigos = ['Luna'];
let amigos = ['Marcos'];
let amigos = ['Matheus'];
let amigos = ['Paulo'];
let amigos = ['Felipe'];
let amigos = ['Gabriel'];
let amigos = ['Lucas'];



document.querySelector('#amigos').innerHTML = amigos.join(', '); // Helicia, Maria, João, Pedro, Luna, Marcos, Matheus, Paulo, Felipe, Gabriel, Lucas
document.querySelector('#quantidade').innerHTML = amigos.length; // 11 amigos('#quantidade').innerHTML = amigos.length; // 11 amigos

// Exibir todos os nomes na lista de amigoses na lista de amigos
let nomesHTML = '';
for (let i = 0; i < amigos.length; i++) {s.length; i++) {
    nomesHTML += `<p>${amigos[i]}</p>`;amigos[i]}</p>`;amigos[i]}</p>`;
}
document.querySelector('#nome').innerHTML = nomesHTML;nome').innerHTML = nomesHTML;nome').innerHTML = nomesHTML;



