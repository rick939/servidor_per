Os Arqivos são do meu  pequeno projeto!
Ele é um servidor criado com o Node.js, express e com o Sequelize.

Vamos iniciar o nosso projeto, execute o comando de inicialização do npm:

$ npm init

nele se usa o Express. O Express é uma biblioteca que facilita a criação de servidores web com Node.js.

Para instalar o Express, use o comando:
npm install express --save

O Nodemon é uma biblioteca que facilita o processo de desenvolvimento através do monitoramento dos arquivos do programa. Ao sinal de alguma mudança, o nodemon recarrega o sistema tornando a programação mais produtiva.

Para instalar o nodemon, execute:

$ npm install --save-dev nodemon

Perceba que adicionamos a opção "--save-dev". Isso é importante, pois o nodemon será utilizado apenas para fins de desenvolvimento e não deve ser adicionado ao pacote final do software.

Para simular as requisições foi usado a extensão do proprio VS code, chamada REST Client.  Com essa extensão, você poderá criar um arquivo de extensão ".http"

Eu usei a biblioteca chamada uuid que permite criar identificadores únicos universais, ela foi usada pois os dados estavam sendo salvos na memoria
Para instalar essa biblioteca execute:

$ npm install uuid --save