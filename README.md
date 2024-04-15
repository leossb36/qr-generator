# Qr code generator

Esta é uma API destinada a criação de Qr code

## Pré requisitos

Node.js >= 18

## configurações necessárias

É necessário, primeiramente do arquivo `.env`. Portanto, existe um exemplar para o preenchimento do mesmo no repositório.

#### Instalar as dependências

`npm install`

#### Rodar o microsserviço

`npm run start:dev`

É possível utilizar o Docker também, uma vez que este está configurado, assim sendo possível a utilização com intuito de evitar o processo de configuração do ambiente.

#### Rodar em ambiente docker

`make dev-run` - para rodar o ambiente em modo dev;

`make down` - para terminar os seviços e excluir os volumes criados no docker.

`make all` - para excluir todas as instancias do docker e instalar todas as dependencias necessários e rodar novamente o servidor.