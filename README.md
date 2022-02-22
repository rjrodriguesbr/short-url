# Bem Vindo ao Short Url!

Olá! Este projeto, **Short Url**, faz parte de um desafio de construção simples de uma aplicação de encurtador de Url. Abaixo tem as intruções de instalação


# Setup

Este projeto utiliza Node como Backend e Vue no Frontend. Esta é uma aplicação desacoplada, por isso Backend e Frontend estão separados.

## Backend

A pasta **backend-short-url** representa o backend e é responsavel pela parte de dados.

* Para começar abra a pasta com `cd backend-short-url`
* Instale os pacotes necessários para rodar o backend com `npm install`
* Finalizando a instalação é necessário um banco de dados MySQL. Na pasta o arquivo **.env.example** mostra as configurações:

	MYSQL_PORT=3306
	MYSQL_USER=usuario
	MYSQL_PASSWORD=senha
	MYSQL_DB_NAME=nomedatabela

* Configure conforme seu Banco de Dados
* Ainda na pasta **backend-short-url** no terminal e após configurar seu banco de dados é necessário subir as tabelas principais, você pode fazer isso com `node ace migration:run` isso sobre as tabelas vazias para o banco de dados.
* Pronto! agora as configurações do backend está funcionando. 
* Por padrão ele estará em `http://localhost:3333/`, para iniciar o backend utilize `npm run dev` ou  `node ace serve --watch`

## Frontend

A pasta **frontend-short-url-nuxt** representa o front end e é responsável pela camada View.

* Comece acessando `cd frontend-short-url-nuxt`
* Instale os pacotes necessários para rodar o frontend com `npm install`
* Na pasta do frontend tem um arquivo `nuxt.config.js` ele contém as configurações principais do projeto, mas por enquanto vamos configurar o caminho para fazer as requisições do backend, busque no arquivo por :
* axios: {
		baseURL: 'http://localhost:3333',
	},
* Após configurar você pode iniciar o frontend com `npm run dev`

## Seeders

No backend tem um arquivo que fica responsável por seeders, dados gerados para o banco de forma aleatória. Para rodar os seeders você pode ir com `node ace db:seed` que vai gerar no banco cerca de 300 links e 20 usuários.

