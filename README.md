# APIs Criada com o node.js
 
Primeiro projeto que eu fiz commitando no vs code, A ideia veio quando que eu assistir o anime e me chamou muita atenção, não encontrei nenhuma API disponivel dele.
O codigo foi desenvolvido com a base com o que eu estudei em aula.

*O README foi criado com algumas informações do material do curso de Desenvolvimento Back-End.*
--- 

## Iniciando o projeto
 
O primeiro comando foi para iniciar o npm
 
     npm init
 
---
 
## Bibliotecas usadas
 - Express
 - Nodemon
 - uuid
 - Ajv
 - sequelize
 
### O Express
O Express é uma biblioteca que facilita a criação de servidores web com Node.js.
 
O comando para instalar o Express:
 
     npm install express --save
 
 
### O Nodemon

O Nodemon é uma biblioteca que facilita o processo de desenvolvimento através do monitoramento dos arquivos do programa. Ao sinal de alguma mudança, o nodemon recarrega o sistema tornando a programação mais produtiva.
 
O comando para instalar o Nodemon:
 
    npm i --save-dev nodemon
 
 
> a opção "--save-dev". Isso é importante, pois o nodemon será utilizado apenas para fins de desenvolvimento e não deve ser adicionado ao pacote final do software.
 
**REST Client**
>Foi a extensão do proprio VS code usada para fazer os testes de requisições .  Com essa extensão, se criar um arquivo de extensão ".http"
 
---
#### uuid
A biblioteca chamada uuid que permite criar identificadores únicos universais, ela foi usada pois os dados estavam sendo salvos na memoria
O comando para instalar:
 
```
 npm install uuid --save
```
 
---
#### Ajv
Para a validação, utilizei a biblioteca do Javascript, a Ajv.
 
Para instalar o Ajv:
```
 npm install ajv --save
```
Para validar dados de entrada mais complexos:
```
 npm install ajv-formats --save
```
 
---
### Criando schemas
Os schemas são definições das estruturas esperadas para determinado dado. O Ajv utiliza um padrão internacional formalizado na [RFC 8927](https://datatracker.ietf.org/doc/rfc8927/) para as definições dos schemas.
 
Acesse a documentação da biblioteca Ajv através [deste link](https://ajv.js.org/guide/getting-started.html) para acesso a vários exemplos de definições.
 
---
 
[O middleware](https://expressjs.com/pt-br/guide/using-middleware.html) é uma ação que pode ser anexada para executar antes da chamada final de uma rota.
 
**O middleware** pode, por exemplo, validar os dados de entrada para garantir que a ação só seja executada com dados válidos. Dessa forma, o código fica mais desacoplado, evitando repetir a lógica de validação nas rotas.
 
---
#### Sequelize
 
ORM Sequelize, que nos auxiliará em toda comunicação com os bancos de dados.
 
 
Para instalar o Sequelize, execute:

```
npm install sequelize
```

**Configurando o Sequelize**
 
Após a instalação, precisa criar os arquivos de configuração do Sequelize. Para isso, pode se utilizar uma ferramenta do próprio do Sequelize que facilita esse processo.
 
Para iniciar, execute:

```
 npx sequelize-cli init
```
 
Ele é um servidor criado com o Node.js, express e com o Sequelize.
 
```
npx sequelize-cli model:generate --name Esquadrao --attributes nome:string
```
```
npx sequelize-cli model:generate --name Membros --attributes nome:string,magia:string,ranking:string
```

Apesar de funcional, o uso dos drivers diretamente deixa as aplicações dependentes dos fornecedores dos bancos de dados. Esse problema é abordado por fornecedores de ORM (Object Relational Mapper), que são ferramentas que buscam abstrair do desenvolvedor os aspectos internos de cada banco de dados. Para isso, os ORMs fornecem uma camada de alto nível para acesso aos dados permitindo que a decisão de qual banco utilizar possa ser tomada a posteriori.

Neste curso, utilizaremos o ORM Sequelize, que nos auxiliará em toda comunicação com os bancos de dados. Nas próximas videoaulas, veremos na prática como utilizá-lo.


Para executar todas as migrações pendentes, digite o seguinte comando:

```
 npx sequelize-cli db:migrate
```

