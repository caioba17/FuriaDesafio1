const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const chatIo = socketIo(server);

app.use(express.static('pag'));

chatIo.on('connection', (socket) => {
    console.log('usuário conectado');

    socket.on('setNome', (nome) => {
        // Mensagem de boas-vindas
        chatIo.emit('mensagem', `👋 Bem-vindo, <strong>${nome}</strong>! Use os comandos abaixo para interagir:<br><br>👉 /calendario - Calendário de jogos até o dia 05/01/2025
            <br>👉 /jogadores - Informações sobre os jogadores<br>👉 /historia - Breve história da FURIA<br>👉 /limpar - Limpar o chat`);
    });

    socket.on('mensagem', (msg) => {
        if (msg === '/calendario') {
            const calendario = 'Aqui estão os próximos eventos que a FURIA vai participar!' +
            '<br><br><strong>02/05/2025</strong><br>👉 07h00 - [PUBG] FURIA DIA 1 - PGS 7 - FINAL Stage'  +
            '<br>👉 16h00 - [RL] RLCS 2025 - Open Qualifier 4 Dia 3 - x Gratia' +
            '<br><br> <strong>03/05/2025</strong><br>👉 07h00 - [PUBG] FURIA DIA 2 - PGS 7 - FINAL Stage' +
            '<br>👉 15h00 - [FURIA LOL] FURIA X RED - Fase de grupos 2º Split' +
            '<br>👉 19h00 -  [FURIA FC] Kings League vs Funkbol Clube' +
            '<br><br> <strong>04/05/2025</strong><br>👉 07h00 - [PUBG] FURIA DIA 3 - PGS 7 - FINAL Stage' +
            '<br><br> <strong>05/05/2025</strong><br>👉 17h00 - [FURIA FC] Kings League vs Fluxo FC'     
        chatIo.emit('mensagem', calendario);
        } else if (msg === '/jogadores') {
            const jogadores = 'Aqui estão os jogadores da FURIA:<br>' +
            '<br><strong>Counter Strike 2</strong><br><br>👉 Kaike "KSCERATO" Cerato<br>👉 Gabriel "FalleN" Toledo<br>👉 Danil "molodoy" Golubenko<br>👉 Yuri "yuurih" Santos<br>'  +
            '<br><strong>League of Legends</strong><br><br>👉 Andrey "ayu" Saraiva<br>👉 Arthur "Tutsz" Machado<br>👉 Gabriel "JoJo" Oliveira<br>'  +
            '<br><strong>Rocket League</strong><br><br>👉 Gabriel "Lostt" Buzon<br>👉 Yan "Yanxnz" Nolasco<br>👉 Arthur "Drufinho" Miguel<br>' +
            '<br><strong>Valorant</strong><br><br>👉 Ilan "havoc" Eloy<br>👉 Khalil "Khalil" Schmidt<br>👉 Rafael "raafa" Lima<br>👉 Luis "pryze" Henrique<br>👉 Olavo "heat" Marcelo<br>' + 
            '<br><strong>Rainbow Six Siege</strong><br><br>👉 Gustavo "HerdsZ" Herdina<br>👉 Diego "Kheyze" Zanello<br>👉 João "Jv92" Vitor<br>👉 Felipe "FelipoX" De Lucia<br>👉 Felipe "Nade" Sá'
            chatIo.emit('mensagem', jogadores);
        } else if (msg === '/limpar') {
            chatIo.emit('clearChat');
            chatIo.emit('mensagem', '🧹 O chat foi limpo!');
        } else if (msg === '/historia') {
            const historia = 'A FURIA é uma organização de esports brasileira fundada em 2017 por André Akkari, Jaime Pádua e Cris Guedes em Uberlândia-MG. Representar o Brasil no cenário competitivo de Couter Strike era o objetivo, com isso, a Furia' +
            'rapidamente se destacou no mundo dos esports. Hoje, a FURIA é uma das organizações mais respeitadas e reconhecidas do Brasil, com equipes em diversos jogos como Counter-Strike: Global Offensive, League of Legends, Rainbow Six Siege, Valorant e PUBG.';
            chatIo.emit('mensagem', historia);
        }
        else {
            chatIo.emit('mensagem', msg);
        }
        
    })
})

server.listen(3000, () => { 
    console.log(`Servidor rodando na porta 3000`);
});

