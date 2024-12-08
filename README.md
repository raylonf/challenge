# challenge
GitHub Repositories API

Este projeto é uma API que utiliza Node.js e Express para buscar os repositórios públicos de um usuário no GitHub que utilizam a linguagem C#.

📋 Funcionalidades
	•	Consulta os repositórios de um usuário no GitHub.
	•	Retorna no máximo 10 repositórios mais recentes, ordenados pela data de criação.
	•	Filtra os repositórios pela linguagem C#.

 🚀 Tecnologias Utilizadas
	•	Node.js
	•	Express.js
	•	Node Fetch

Como Executar o Projeto
	1.	Clone o repositório:


git clone https://github.com/seu-usuario/seu-repositorio.git
cd seu-repositorio

	2.	Instale as dependências do projeto:

git clone https://github.com/seu-usuario/seu-repositorio.git
cd seu-repositorio

	2.	Instale as dependências do projeto:
npm install

	3.	Certifique-se de que o arquivo package.json contém a propriedade "type": "module":

{
  "type": "module"
}

	4.	Inicie o servidor:

node server.js

	5.	Acesse o endpoint da API utilizando um navegador ou uma ferramenta como Postman:

GET http://localhost:3000/getdata/{username}

Substitua {username} pelo nome de usuário do GitHub que você deseja consultar.

Exemplo de Uso

Requisição:

GET http://localhost:3000/getdata/octocat

Resposta:

[
  {
    "id": 123456789,
    "name": "octocat-repo",
    "language": "C#",
    "html_url": "https://github.com/octocat/octocat-repo"
  },
  ...
]

Possíveis Erros
	•	500: Failed to retrieve data
Pode ocorrer caso o nome de usuário fornecido não exista no GitHub ou se houver problemas na comunicação com a API do GitHub.

Contribuições

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues e enviar pull requests para melhorias.

Licença

Este projeto está sob a licença MIT. Consulte o arquivo LICENSE para mais detalhes.