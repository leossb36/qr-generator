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

#### Descrição da solução

Ao executar a api basta chamar o endpoint `/generate/{data}?size={value}`.

##### Parametros de rota

`data`: é um valor em **string** que é passado como **param** de rota, ou seja, permite ao usuário que insira o conteúdo do QRcode.

**exemplo**: `/generate/teste123`

`size`: é um valor em **number e/ou inteiro** que é passado como **Query param** para definir a largura x altura da imagem do QRcode. **Obs**: Este é um parametro opcional que possui um valor mínimo de 80 e um valor maximo de 500. Uma vez que o `size` não é passado em rota, por padrão devolverá um QRcode de tamanho 80x80.

**exemplo**: `/generate/teste123?size=250` - devolve um QRcode de tamanho 250x250.

**exemplo 2**: `/generate/teste123` - devolve um Qrcode de tamanho 80x80.




