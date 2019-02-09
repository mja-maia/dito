# Miguel Maia (Dito)

Esta é uma aplicação que foi criada durante o processo seletivo da empresa Dito, onde consistia em criar um componente para exibição de eventos fornecidos por eles através de uma API.

### Instalação

Para efetuar a instalação é necessario uma maquina com o NPM instalado. Após clonar o repositório na sua maquina, acesse a pasta raiz do repositório e digite:

```
$ yarn install
```
Depois de instalado todas as dependencias do projeto basta digitar: 
```
$ yarn start
```
### Testes:
Para executar os testes escritos na aplicação execute:
```
yarn test
```
### Build para produção
É um comando disponível que cria a pasta chamada 'build', onde arquivos são minificados, melhorando assim sua performace

```
yarn build
```

### obs:
Para este projeto decidi utilizar o boiler-plate do react, fornecido pelo Facebook. Também implementei alguns teste com JEST e Enzyme para garantir a integridade da aplicação. Se tivesse um pouco mais de tempo teria feito uma CI/CD com o Circle/CI para garantir a integridade de cada commit feito.


