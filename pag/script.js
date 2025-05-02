const socket = io();
const input = document.getElementById("userInput");
const chat = document.getElementById("chat");
const sendButton = document.getElementById("sendButton");

//let nome = prompt("Qual o seu nome?");
let nome = 'FURIA';
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
    const p = document.createElement('p');
    p.innerHTML = msg;
    chat.appendChild(p);
    chat.scrollTop = chat.scrollHeight;
})

socket.on('clearChat', () => {
    const chat = document.getElementById('chat');
    chat.innerHTML = '';
})
