## :rocket: Projeto Todo

<h1  align="center"><img src="./libs/shared/assets/src/login.png"></h1>
<h1 align="center"><img src="./libs/shared/assets/src/register.png"></h1>
<h1 align="center"><img src="./libs/shared/assets/src/todo.png"></h1>
<h1 align="center"><img src="./libs/shared/assets/src/graph-nx-workspace-todo.png"></h1>

Nesse projeto TODO que eu criei, o objetivo principal foi colocar em prática os conhecimentos adquiridos sobre arquitetura limpa, clean code, CI e CD.

### Tecnologias utilizadas:

- React
- TypeScript
- Custom Hooks
- Context API
- LocalStorage
- Private Route
- React Hook Form

Nesse projeto, desenvolvi um sistema completo que permite a criação e autenticação de usuários, além de possibilitar a criação, leitura, atualização e deleção de tarefas (também conhecido como CRUD). A fim de seguir os princípios de clean code, implementei uma abstração chamada httpClient que permite realizar as requisições HTTP de forma independente do axios.

Para garantir a qualidade do código e a organização da estrutura, utilizei diversas práticas de arquitetura limpa e clean code, resultando em uma solução simples e bem organizada. Especificamente, a implementação do axios foi realizada por meio da classe AxiosHttpClient, que implementa a interface httpClient.

Para facilitar a compreensão das relações entre as bibliotecas, utilizei o Nx workspace, permitindo uma visualização gráfica da estrutura. Além disso, configurei o CI para executar testes, lint e build a cada push no repositório do GitHub, por meio do GitHub Actions. Por fim, implementei o Continuous Deployment com a Vercel, possibilitando que o deploy seja realizado automaticamente com cada pull request na main. Tudo isso demonstra o cuidado e a preocupação constante em entregar valor ao usuário final.
