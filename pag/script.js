const socket = io();
const input = document.getElementById("userInput");
const chat = document.getElementById("chat");
const sendButton = document.getElementById("sendButton");

//let nome = prompt("Qual o seu nome?");
let nome = prompt("Qual o seu nome?") || "FURIA";
if (nome) {
    socket.emit('setNome', nome); 
}

sendButton.addEventListener('click', () => {
    if (input.value.trim() !== '') {
        socket.emit('mensagem', input.value);
        input.value = '';
    }
});

socket.on('mensagem', function (msg) {

    if (msg.tipo === 'imagem') {
        const div = document.createElement('div');
        div.innerHTML = `
        <img src="${msg.conteudo}" alt="Imagem" style="width: 200px; border-radius: 10px;">
          `;
        chat.appendChild(div);
    } else {
        const p = document.createElement('p');
        p.innerHTML = msg;
        chat.appendChild(p);
    }
    chat.scrollTop = chat.scrollHeight;
})

socket.on('clearChat', () => {
    const chat = document.getElementById('chat');
    chat.innerHTML = '';
})

