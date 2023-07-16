## :rocket: Projeto Todo

<h1  align="center"><img src="./libs/shared/assets/src/login.png"></h1>
<h1 align="center"><img src="./libs/shared/assets/src/register.png"></h1>
<h1 align="center"><img src="./libs/shared/assets/src/todo.png"></h1>
<h1 align="center"><img src="./libs/shared/assets/src/graph-nx-workspace-todo.png"></h1>

In this project TODO that I created, the main objective was to put into practice the knowledge acquired about clean architecture, clean code, CI, and CD.

### Technologies used::

- React
- TypeScript
- Custom Hooks
- Context API
- LocalStorage
- Private Route
- React Hook Form

I developed a complete system that allows the creation and authentication of users, as well as the creation, reading, updating, and deletion of tasks (also known as CRUD). To follow the principles of clean code, I implemented an abstraction called httpClient that allows performing HTTP requests independently of axios.

To ensure code quality and organizational structure, I used various practices of clean architecture and clean code, resulting in a simple and well-organized solution. Specifically, the implementation of axios was done through the AxiosHttpClient class, which implements the httpClient interface.

To facilitate understanding of the relationships between libraries, I used the Nx workspace, allowing for a graphical view of the structure. Additionally, I configured CI to run tests, linting, and build on every push to the GitHub repository using GitHub Actions. Finally, I implemented Continuous Deployment with Vercel, enabling automatic deployment with each pull request to the main branch. All of this demonstrates the care and constant focus on delivering value to the end-user.
