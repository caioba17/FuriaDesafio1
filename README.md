# Furia Desafio 1 - Chat

Este projeto foi desenvolvido como parte do Challenge #1: Experiência Conversacional. A proposta era criar uma experiência de chat interativa para os fãs da organização, permitindo acompanhar o time e interagir por comandos personalizados.

#Descrição

O Chat FURIA é uma aplicação que simula um chat para fãs da organização de esports FURIA. Nele, os usuários podem:

-  Ver o calendário dos próximos jogos.
-  Consultar informações sobre os jogadores de diferentes modalidades.
-  Conhecer uma breve história da FURIA.
-  Limpar o histórico do chat.
  
Tudo isso através de comandos simples em uma interface web.

## Funcionalidades

- Chat criado com Socket.IO
- Comandos para interação:
  - `/calendario` – exibe os próximos jogos da FURIA.
  - `/jogadores` – mostra os jogadores de CS, LoL, Valorant, etc.
  - `/historia` – traz um resumo da trajetória da FURIA.
  - `/limpar` – limpa o chat.

## Tecnologias utilizadas

- Node.js
- Express
- Socket.IO
- HTML, CSS e JavaScript

## Estrutura do projeto

furia-chat/
├── server.js           # Servidor Express com Socket.IO
└── pag/
    ├── index.html      # Interface do chat
    ├── style.css       # Estilos
    └── script.js       # Lógica do chat e comunicação com o servidor

     

##  Instalação e Execução

1. Clone o repositório:
   ```bash 
   git clone https://github.com/caioba17/FuriaDesafio1.git
   cd web-chat-furia

2. Instale as dependências:
   
     - npm install express socket.io
  
3. Inicie o servidor:

   - node server.js
  
4. Acesse a aplicação no navegador:

   - http://localhost:3000




