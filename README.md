## :rocket: Projeto Todo

<h1  align="center"><img src="./libs/shared/assets/src/login.png"></h1>
<h1 align="center"><img src="./libs/shared/assets/src/register.png"></h1>
<h1 align="center"><img src="./libs/shared/assets/src/todo.png"></h1>

Nesse projeto TODO que eu criei, o objetivo principal foi colocar em prática os conhecimentos adquiridos sobre arquitetura limpa e clean code.

### Tecnologias utilizadas:

- React
- TypeScript
- Custom Hooks
- Context API
- LocalStorage
- Private Route
- React Hook Form

No projeto, desenvolvi um sistema que permite a criação e autenticação de usuários, bem como a criação, leitura, atualização e deleção de tarefas (conhecido como CRUD). Com o objetivo de seguir os princípios de clean code, criei uma abstração chamada httpClient que permite realizar as requisições HTTP de forma independente do axios.

A implementação do axios foi feita por meio da classe AxiosHttpClient, que implementa a interface httpClient. O sistema foi desenvolvido seguindo diversas práticas de arquitetura limpa e clean code, resultando em uma solução simples e bem organizada.

### Como rodar o projeto

```bash
# Clone o projeto
$ git clone https://github.com/augustodevjs/todo

# Instale todas as depedências
$ yarn

# Rode o projeto
$ yarn run dev

```
