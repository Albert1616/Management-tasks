# Dashboard of management tasks

## Description
 Interactive dashboard for management tasks, in which it is possible creating projects with multiple users and assign tasks for users.
 The tasks have authors, users who create the task, assigners, users who assign the task, and a status that defines the current 
 state for the task.

 ## Technologies
 - **Frontend**: Next.js, Tailwind CSS, Redux Toolkit, Redux Toolkit Query, Material UI Data Grid
 - **Backend**: Node.js with Express, Prisma (PostgreSQL ORM);
 - **DataBase**: PostgreSql, managed with pgAdmin;

# IN DEVELOPMENT...
<p align="center">
    <img src="https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/ec559a9f6bfd399b82bb44393651661b08aaf7ba/icons/folder-markdown-open.svg" align="center" width="30%">
</p>
<p align="center"><h1 align="center">MANAGEMENT TASKS</h1></p>
<!-- <p align="center">
	<img src="https://img.shields.io/github/license/Albert1616/Management-tasks.git?style=default&logo=opensourceinitiative&logoColor=white&color=0080ff" alt="license MIT">
	<img src="https://img.shields.io/github/last-commit/Albert1616/Management-tasks.git?style=default&logo=git&logoColor=white&color=0080ff" alt="last-commit">
	<img src="https://img.shields.io/github/languages/top/Albert1616/Management-tasks.git?style=default&color=0080ff" alt="repo-top-language">
	<img src="https://img.shields.io/github/languages/count/Albert1616/Management-tasks.git?style=default&color=0080ff" alt="repo-language-count">
</p> -->
<br>

## 🔗 Sumário

- [📍 Descrição(#-descrição)
- [👾 Features](#-features)
- [📁 Estrutura do projeto](#-estrutura-do-projeto)
  - [📂 Project Index](#-project-index)
- [🚀 Getting Started](#-getting-started)
  - [☑️ Prerequisites](#-prerequisites)
  - [⚙️ Installation](#-installation)
  - [🤖 Usage](#🤖-usage)
  - [🧪 Testing](#🧪-testing)
- [📌 Project Roadmap](#-project-roadmap)
- [🔰 Contributing](#-contributing)
- [🎗 License](#-license)
- [🙌 Acknowledgments](#-acknowledgments)

---

## 📍 Overview

Management task é um sistema de gerenciamento de projetos e tarefas, no qual o usuário pode criar times, incluir pessoas em times e criar tarefas personalizadas para os membros do projeto.

---

## 📌 Melhorias
O projeto ainda está em desenvolvimento e as próximas atualizações serão focadas nos seguintes aspectos:

- [ ] **`Task 1`**: Integrar todas as rotas da API;
- [ ] **`Task 2`**: Registro de usuários
- [ ] **`Task 3`**: Sistema de login.
- [ ] **`Task 3`**: Deploy do projeto.

---
## 👾 Features

<ul>
 <li>Criar, editar e deletar projetos</li>
 <li>Pesquisar por projetos e tasks</li>
 <li>Filtrar tasks por prioridades</li>
 <li>Visualizar users</li>
 <li>Visualizar times</li>
 <li>Adicionar pessoas a times</li>
 <li>Criar, editar e deletar tasks</li>
 <li>Atribuir tasks a usuários</li>
<ul/>

---

## 📁 Estrutura do Projeto

```sh
└── Management-tasks.git/
    ├── README.md
    ├── client
    │   ├── .env.local
    │   ├── .eslintrc.json
    │   ├── .gitignore
    │   ├── .prettierrc
    │   ├── README.md
    │   ├── app
    │   ├── components
    │   ├── next.config.mjs
    │   ├── package-lock.json
    │   ├── package.json
    │   ├── postcss.config.mjs
    │   ├── public
    │   ├── state
    │   ├── tailwind.config.ts
    │   └── tsconfig.json
    └── server
        ├── .env
        ├── .gitignore
        ├── client.http
        ├── dist
        ├── package-lock.json
        ├── package.json
        ├── prisma
        ├── src
        └── tsconfig.json
```


### 📂 Project Index
<details open>
	<summary><b><code>MANAGEMENT-TASKS.GIT/</code></b></summary>
	<details> <!-- __root__ Submodule -->
		<summary><b>__root__</b></summary>
		<blockquote>
			<table>
			</table>
		</blockquote>
	</details>
	<details> <!-- client Submodule -->
		<summary><b>client</b></summary>
		<blockquote>
			<table>
			<tr>
				<td><b><a href='https://github.com/Albert1616/Management-tasks.git/blob/master/client/next.config.mjs'>next.config.mjs</a></b></td>
				<td><code>❯ REPLACE-ME</code></td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/Albert1616/Management-tasks.git/blob/master/client/.eslintrc.json'>.eslintrc.json</a></b></td>
				<td><code>❯ REPLACE-ME</code></td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/Albert1616/Management-tasks.git/blob/master/client/package-lock.json'>package-lock.json</a></b></td>
				<td><code>❯ REPLACE-ME</code></td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/Albert1616/Management-tasks.git/blob/master/client/tsconfig.json'>tsconfig.json</a></b></td>
				<td><code>❯ REPLACE-ME</code></td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/Albert1616/Management-tasks.git/blob/master/client/.env.local'>.env.local</a></b></td>
				<td><code>❯ REPLACE-ME</code></td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/Albert1616/Management-tasks.git/blob/master/client/postcss.config.mjs'>postcss.config.mjs</a></b></td>
				<td><code>❯ REPLACE-ME</code></td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/Albert1616/Management-tasks.git/blob/master/client/package.json'>package.json</a></b></td>
				<td><code>❯ REPLACE-ME</code></td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/Albert1616/Management-tasks.git/blob/master/client/tailwind.config.ts'>tailwind.config.ts</a></b></td>
				<td><code>❯ REPLACE-ME</code></td>
			</tr>
			</table>
			<details>
				<summary><b>components</b></summary>
				<blockquote>
					<table>
					<tr>
						<td><b><a href='https://github.com/Albert1616/Management-tasks.git/blob/master/client/components/LoadingComponent.tsx'>LoadingComponent.tsx</a></b></td>
						<td><code>❯ REPLACE-ME</code></td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/Albert1616/Management-tasks.git/blob/master/client/components/ErrorComponent.tsx'>ErrorComponent.tsx</a></b></td>
						<td><code>❯ REPLACE-ME</code></td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/Albert1616/Management-tasks.git/blob/master/client/components/NavBar.tsx'>NavBar.tsx</a></b></td>
						<td><code>❯ REPLACE-ME</code></td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/Albert1616/Management-tasks.git/blob/master/client/components/DashboardWrapper.tsx'>DashboardWrapper.tsx</a></b></td>
						<td><code>❯ REPLACE-ME</code></td>
					</tr>
					</table>
					<details>
						<summary><b>ModalNewTask</b></summary>
						<blockquote>
							<table>
							<tr>
								<td><b><a href='https://github.com/Albert1616/Management-tasks.git/blob/master/client/components/ModalNewTask/index.tsx'>index.tsx</a></b></td>
								<td><code>❯ REPLACE-ME</code></td>
							</tr>
							</table>
						</blockquote>
					</details>
					<details>
						<summary><b>Modal</b></summary>
						<blockquote>
							<table>
							<tr>
								<td><b><a href='https://github.com/Albert1616/Management-tasks.git/blob/master/client/components/Modal/index.tsx'>index.tsx</a></b></td>
								<td><code>❯ REPLACE-ME</code></td>
							</tr>
							</table>
						</blockquote>
					</details>
					<details>
						<summary><b>UserCard</b></summary>
						<blockquote>
							<table>
							<tr>
								<td><b><a href='https://github.com/Albert1616/Management-tasks.git/blob/master/client/components/UserCard/index.tsx'>index.tsx</a></b></td>
								<td><code>❯ REPLACE-ME</code></td>
							</tr>
							</table>
						</blockquote>
					</details>
					<details>
						<summary><b>project</b></summary>
						<blockquote>
							<table>
							<tr>
								<td><b><a href='https://github.com/Albert1616/Management-tasks.git/blob/master/client/components/project/ProjectHeader.tsx'>ProjectHeader.tsx</a></b></td>
								<td><code>❯ REPLACE-ME</code></td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/Albert1616/Management-tasks.git/blob/master/client/components/project/ProjectCard.tsx'>ProjectCard.tsx</a></b></td>
								<td><code>❯ REPLACE-ME</code></td>
							</tr>
							</table>
						</blockquote>
					</details>
					<details>
						<summary><b>sidebar</b></summary>
						<blockquote>
							<table>
							<tr>
								<td><b><a href='https://github.com/Albert1616/Management-tasks.git/blob/master/client/components/sidebar/SideBar.tsx'>SideBar.tsx</a></b></td>
								<td><code>❯ REPLACE-ME</code></td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/Albert1616/Management-tasks.git/blob/master/client/components/sidebar/SideBarIcon.tsx'>SideBarIcon.tsx</a></b></td>
								<td><code>❯ REPLACE-ME</code></td>
							</tr>
							</table>
						</blockquote>
					</details>
				</blockquote>
			</details>
			<details>
				<summary><b>public</b></summary>
				<blockquote>
					<table>
					<tr>
						<td><b><a href='https://github.com/Albert1616/Management-tasks.git/blob/master/client/public/License premium.txt'>License premium.txt</a></b></td>
						<td><code>❯ REPLACE-ME</code></td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/Albert1616/Management-tasks.git/blob/master/client/public/License free.txt'>License free.txt</a></b></td>
						<td><code>❯ REPLACE-ME</code></td>
					</tr>
					</table>
				</blockquote>
			</details>
			<details>
				<summary><b>state</b></summary>
				<blockquote>
					<table>
					<tr>
						<td><b><a href='https://github.com/Albert1616/Management-tasks.git/blob/master/client/state/index.ts'>index.ts</a></b></td>
						<td><code>❯ REPLACE-ME</code></td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/Albert1616/Management-tasks.git/blob/master/client/state/api.ts'>api.ts</a></b></td>
						<td><code>❯ REPLACE-ME</code></td>
					</tr>
					</table>
				</blockquote>
			</details>
			<details>
				<summary><b>app</b></summary>
				<blockquote>
					<table>
					<tr>
						<td><b><a href='https://github.com/Albert1616/Management-tasks.git/blob/master/client/app/layout.tsx'>layout.tsx</a></b></td>
						<td><code>❯ REPLACE-ME</code></td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/Albert1616/Management-tasks.git/blob/master/client/app/globals.css'>globals.css</a></b></td>
						<td><code>❯ REPLACE-ME</code></td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/Albert1616/Management-tasks.git/blob/master/client/app/page.tsx'>page.tsx</a></b></td>
						<td><code>❯ REPLACE-ME</code></td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/Albert1616/Management-tasks.git/blob/master/client/app/redux.tsx'>redux.tsx</a></b></td>
						<td><code>❯ REPLACE-ME</code></td>
					</tr>
					</table>
					<details>
						<summary><b>projects</b></summary>
						<blockquote>
							<details>
								<summary><b>BoardView</b></summary>
								<blockquote>
									<table>
									<tr>
										<td><b><a href='https://github.com/Albert1616/Management-tasks.git/blob/master/client/app/projects/BoardView/index.tsx'>index.tsx</a></b></td>
										<td><code>❯ REPLACE-ME</code></td>
									</tr>
									</table>
								</blockquote>
							</details>
							<details>
								<summary><b>ModalNewProject</b></summary>
								<blockquote>
									<table>
									<tr>
										<td><b><a href='https://github.com/Albert1616/Management-tasks.git/blob/master/client/app/projects/ModalNewProject/index.tsx'>index.tsx</a></b></td>
										<td><code>❯ REPLACE-ME</code></td>
									</tr>
									</table>
								</blockquote>
							</details>
							<details>
								<summary><b>TableView</b></summary>
								<blockquote>
									<table>
									<tr>
										<td><b><a href='https://github.com/Albert1616/Management-tasks.git/blob/master/client/app/projects/TableView/index.tsx'>index.tsx</a></b></td>
										<td><code>❯ REPLACE-ME</code></td>
									</tr>
									</table>
								</blockquote>
							</details>
							<details>
								<summary><b>[id]</b></summary>
								<blockquote>
									<table>
									<tr>
										<td><b><a href='https://github.com/Albert1616/Management-tasks.git/blob/master/client/app/projects/[id]/page.tsx'>page.tsx</a></b></td>
										<td><code>❯ REPLACE-ME</code></td>
									</tr>
									</table>
								</blockquote>
							</details>
							<details>
								<summary><b>TimeLineView</b></summary>
								<blockquote>
									<table>
									<tr>
										<td><b><a href='https://github.com/Albert1616/Management-tasks.git/blob/master/client/app/projects/TimeLineView/index.tsx'>index.tsx</a></b></td>
										<td><code>❯ REPLACE-ME</code></td>
									</tr>
									</table>
								</blockquote>
							</details>
							<details>
								<summary><b>ListView</b></summary>
								<blockquote>
									<table>
									<tr>
										<td><b><a href='https://github.com/Albert1616/Management-tasks.git/blob/master/client/app/projects/ListView/TaskCard.tsx'>TaskCard.tsx</a></b></td>
										<td><code>❯ REPLACE-ME</code></td>
									</tr>
									<tr>
										<td><b><a href='https://github.com/Albert1616/Management-tasks.git/blob/master/client/app/projects/ListView/index.tsx'>index.tsx</a></b></td>
										<td><code>❯ REPLACE-ME</code></td>
									</tr>
									</table>
								</blockquote>
							</details>
						</blockquote>
					</details>
					<details>
						<summary><b>users</b></summary>
						<blockquote>
							<table>
							<tr>
								<td><b><a href='https://github.com/Albert1616/Management-tasks.git/blob/master/client/app/users/page.tsx'>page.tsx</a></b></td>
								<td><code>❯ REPLACE-ME</code></td>
							</tr>
							</table>
						</blockquote>
					</details>
					<details>
						<summary><b>search</b></summary>
						<blockquote>
							<table>
							<tr>
								<td><b><a href='https://github.com/Albert1616/Management-tasks.git/blob/master/client/app/search/page.tsx'>page.tsx</a></b></td>
								<td><code>❯ REPLACE-ME</code></td>
							</tr>
							</table>
						</blockquote>
					</details>
					<details>
						<summary><b>settings</b></summary>
						<blockquote>
							<table>
							<tr>
								<td><b><a href='https://github.com/Albert1616/Management-tasks.git/blob/master/client/app/settings/page.tsx'>page.tsx</a></b></td>
								<td><code>❯ REPLACE-ME</code></td>
							</tr>
							</table>
						</blockquote>
					</details>
					<details>
						<summary><b>utils</b></summary>
						<blockquote>
							<table>
							<tr>
								<td><b><a href='https://github.com/Albert1616/Management-tasks.git/blob/master/client/app/utils/lst_utils.ts'>lst_utils.ts</a></b></td>
								<td><code>❯ REPLACE-ME</code></td>
							</tr>
							</table>
						</blockquote>
					</details>
					<details>
						<summary><b>timeline</b></summary>
						<blockquote>
							<table>
							<tr>
								<td><b><a href='https://github.com/Albert1616/Management-tasks.git/blob/master/client/app/timeline/page.tsx'>page.tsx</a></b></td>
								<td><code>❯ REPLACE-ME</code></td>
							</tr>
							</table>
						</blockquote>
					</details>
					<details>
						<summary><b>teams</b></summary>
						<blockquote>
							<table>
							<tr>
								<td><b><a href='https://github.com/Albert1616/Management-tasks.git/blob/master/client/app/teams/page.tsx'>page.tsx</a></b></td>
								<td><code>❯ REPLACE-ME</code></td>
							</tr>
							</table>
						</blockquote>
					</details>
					<details>
						<summary><b>priorityPage</b></summary>
						<blockquote>
							<details>
								<summary><b>[priority]</b></summary>
								<blockquote>
									<table>
									<tr>
										<td><b><a href='https://github.com/Albert1616/Management-tasks.git/blob/master/client/app/priorityPage/[priority]/page.tsx'>page.tsx</a></b></td>
										<td><code>❯ REPLACE-ME</code></td>
									</tr>
									</table>
								</blockquote>
							</details>
						</blockquote>
					</details>
					<details>
						<summary><b>home</b></summary>
						<blockquote>
							<table>
							<tr>
								<td><b><a href='https://github.com/Albert1616/Management-tasks.git/blob/master/client/app/home/page.tsx'>page.tsx</a></b></td>
								<td><code>❯ REPLACE-ME</code></td>
							</tr>
							</table>
						</blockquote>
					</details>
				</blockquote>
			</details>
		</blockquote>
	</details>
	<details> <!-- server Submodule -->
		<summary><b>server</b></summary>
		<blockquote>
			<table>
			<tr>
				<td><b><a href='https://github.com/Albert1616/Management-tasks.git/blob/master/server/package-lock.json'>package-lock.json</a></b></td>
				<td><code>❯ REPLACE-ME</code></td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/Albert1616/Management-tasks.git/blob/master/server/tsconfig.json'>tsconfig.json</a></b></td>
				<td><code>❯ REPLACE-ME</code></td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/Albert1616/Management-tasks.git/blob/master/server/.env'>.env</a></b></td>
				<td><code>❯ REPLACE-ME</code></td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/Albert1616/Management-tasks.git/blob/master/server/client.http'>client.http</a></b></td>
				<td><code>❯ REPLACE-ME</code></td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/Albert1616/Management-tasks.git/blob/master/server/package.json'>package.json</a></b></td>
				<td><code>❯ REPLACE-ME</code></td>
			</tr>
			</table>
			<details>
				<summary><b>src</b></summary>
				<blockquote>
					<table>
					<tr>
						<td><b><a href='https://github.com/Albert1616/Management-tasks.git/blob/master/server/src/index.ts'>index.ts</a></b></td>
						<td><code>❯ REPLACE-ME</code></td>
					</tr>
					</table>
					<details>
						<summary><b>routes</b></summary>
						<blockquote>
							<table>
							<tr>
								<td><b><a href='https://github.com/Albert1616/Management-tasks.git/blob/master/server/src/routes/SearchRoutes.ts'>SearchRoutes.ts</a></b></td>
								<td><code>❯ REPLACE-ME</code></td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/Albert1616/Management-tasks.git/blob/master/server/src/routes/TaskRoutes.ts'>TaskRoutes.ts</a></b></td>
								<td><code>❯ REPLACE-ME</code></td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/Albert1616/Management-tasks.git/blob/master/server/src/routes/UserRoutes.ts'>UserRoutes.ts</a></b></td>
								<td><code>❯ REPLACE-ME</code></td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/Albert1616/Management-tasks.git/blob/master/server/src/routes/ProjectsRoutes.ts'>ProjectsRoutes.ts</a></b></td>
								<td><code>❯ REPLACE-ME</code></td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/Albert1616/Management-tasks.git/blob/master/server/src/routes/TeamsRoutes.ts'>TeamsRoutes.ts</a></b></td>
								<td><code>❯ REPLACE-ME</code></td>
							</tr>
							</table>
						</blockquote>
					</details>
					<details>
						<summary><b>controller</b></summary>
						<blockquote>
							<table>
							<tr>
								<td><b><a href='https://github.com/Albert1616/Management-tasks.git/blob/master/server/src/controller/TaskController.ts'>TaskController.ts</a></b></td>
								<td><code>❯ REPLACE-ME</code></td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/Albert1616/Management-tasks.git/blob/master/server/src/controller/SearchController.ts'>SearchController.ts</a></b></td>
								<td><code>❯ REPLACE-ME</code></td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/Albert1616/Management-tasks.git/blob/master/server/src/controller/UserController.ts'>UserController.ts</a></b></td>
								<td><code>❯ REPLACE-ME</code></td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/Albert1616/Management-tasks.git/blob/master/server/src/controller/TeamController.ts'>TeamController.ts</a></b></td>
								<td><code>❯ REPLACE-ME</code></td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/Albert1616/Management-tasks.git/blob/master/server/src/controller/ProjectController.ts'>ProjectController.ts</a></b></td>
								<td><code>❯ REPLACE-ME</code></td>
							</tr>
							</table>
						</blockquote>
					</details>
				</blockquote>
			</details>
			<details>
				<summary><b>prisma</b></summary>
				<blockquote>
					<table>
					<tr>
						<td><b><a href='https://github.com/Albert1616/Management-tasks.git/blob/master/server/prisma/seed.ts'>seed.ts</a></b></td>
						<td><code>❯ REPLACE-ME</code></td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/Albert1616/Management-tasks.git/blob/master/server/prisma/schema.prisma'>schema.prisma</a></b></td>
						<td><code>❯ REPLACE-ME</code></td>
					</tr>
					</table>
					<details>
						<summary><b>seedData</b></summary>
						<blockquote>
							<table>
							<tr>
								<td><b><a href='https://github.com/Albert1616/Management-tasks.git/blob/master/server/prisma/seedData/team.json'>team.json</a></b></td>
								<td><code>❯ REPLACE-ME</code></td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/Albert1616/Management-tasks.git/blob/master/server/prisma/seedData/task.json'>task.json</a></b></td>
								<td><code>❯ REPLACE-ME</code></td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/Albert1616/Management-tasks.git/blob/master/server/prisma/seedData/attachment.json'>attachment.json</a></b></td>
								<td><code>❯ REPLACE-ME</code></td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/Albert1616/Management-tasks.git/blob/master/server/prisma/seedData/user.json'>user.json</a></b></td>
								<td><code>❯ REPLACE-ME</code></td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/Albert1616/Management-tasks.git/blob/master/server/prisma/seedData/project.json'>project.json</a></b></td>
								<td><code>❯ REPLACE-ME</code></td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/Albert1616/Management-tasks.git/blob/master/server/prisma/seedData/comment.json'>comment.json</a></b></td>
								<td><code>❯ REPLACE-ME</code></td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/Albert1616/Management-tasks.git/blob/master/server/prisma/seedData/projectTeam.json'>projectTeam.json</a></b></td>
								<td><code>❯ REPLACE-ME</code></td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/Albert1616/Management-tasks.git/blob/master/server/prisma/seedData/taskAssignment.json'>taskAssignment.json</a></b></td>
								<td><code>❯ REPLACE-ME</code></td>
							</tr>
							</table>
						</blockquote>
					</details>
					<details>
						<summary><b>migrations</b></summary>
						<blockquote>
							<table>
							<tr>
								<td><b><a href='https://github.com/Albert1616/Management-tasks.git/blob/master/server/prisma/migrations/migration_lock.toml'>migration_lock.toml</a></b></td>
								<td><code>❯ REPLACE-ME</code></td>
							</tr>
							</table>
							<details>
								<summary><b>20241103160645_init</b></summary>
								<blockquote>
									<table>
									<tr>
										<td><b><a href='https://github.com/Albert1616/Management-tasks.git/blob/master/server/prisma/migrations/20241103160645_init/migration.sql'>migration.sql</a></b></td>
										<td><code>❯ REPLACE-ME</code></td>
									</tr>
									</table>
								</blockquote>
							</details>
						</blockquote>
					</details>
				</blockquote>
			</details>
		</blockquote>
	</details>
</details>

---
## 🚀 Início

### ☑️ Pre-requisitos

Antes de iniciar o projeto é necessário que você atenda aos seguintes pré requisitos:

- Ter o <a href="https://nodejs.org/en">Node.js</a> instalado na máquina. 
- Ter algum gerenciador de pacotes para o Nodejs. Recomendo o <a href="https://www.npmjs.com/">NPM</a>.
- Recomedável ter instalado algum editor de código, como o <a href="https://code.visualstudio.com/">VS Code</a>

### ⚙️ Instalação

Passo a passo para instalar e usar o projeto:

1. Clone o repositório para sua máquina
```sh
❯ git clone https://github.com/Albert1616/Management-tasks.git
```

2. Navegue até a pasta raiz do projeto:
```sh
❯ cd Management-tasks
```

3. Instale as dependências de desenvolvimento:


**Using `npm`** &nbsp; [<img align="center" src="https://img.shields.io/badge/npm-CB3837.svg?style={badge_style}&logo=npm&logoColor=white" />](https://www.npmjs.com/)

```sh
❯ npm install
```


**Using `docker`** &nbsp; [<img align="center" src="https://img.shields.io/badge/Docker-2CA5E0.svg?style={badge_style}&logo=docker&logoColor=white" />](https://www.docker.com/)

```sh
❯ docker build -t Albert1616/Management-tasks.git .
```




### 🤖 Usage
Run Management-tasks.git using the following command:
**Using `npm`** &nbsp; [<img align="center" src="https://img.shields.io/badge/npm-CB3837.svg?style={badge_style}&logo=npm&logoColor=white" />](https://www.npmjs.com/)

```sh
❯ npm start
```


### 🧪 Testing
Run the test suite using the following command:
**Using `npm`** &nbsp; [<img align="center" src="https://img.shields.io/badge/npm-CB3837.svg?style={badge_style}&logo=npm&logoColor=white" />](https://www.npmjs.com/)

```sh
❯ npm test
```

## 🔰 Contributing

- **💬 [Join the Discussions](https://github.com/Albert1616/Management-tasks.git/discussions)**: Share your insights, provide feedback, or ask questions.
- **🐛 [Report Issues](https://github.com/Albert1616/Management-tasks.git/issues)**: Submit bugs found or log feature requests for the `Management-tasks.git` project.
- **💡 [Submit Pull Requests](https://github.com/Albert1616/Management-tasks.git/blob/main/CONTRIBUTING.md)**: Review open PRs, and submit your own PRs.

<details closed>
<summary>Contributing Guidelines</summary>

1. **Fork the Repository**: Start by forking the project repository to your github account.
2. **Clone Locally**: Clone the forked repository to your local machine using a git client.
   ```sh
   git clone https://github.com/Albert1616/Management-tasks.git
   ```
3. **Create a New Branch**: Always work on a new branch, giving it a descriptive name.
   ```sh
   git checkout -b new-feature-x
   ```
4. **Make Your Changes**: Develop and test your changes locally.
5. **Commit Your Changes**: Commit with a clear message describing your updates.
   ```sh
   git commit -m 'Implemented new feature x.'
   ```
6. **Push to github**: Push the changes to your forked repository.
   ```sh
   git push origin new-feature-x
   ```
7. **Submit a Pull Request**: Create a PR against the original project repository. Clearly describe the changes and their motivations.
8. **Review**: Once your PR is reviewed and approved, it will be merged into the main branch. Congratulations on your contribution!
</details>

<details closed>
<summary>Contributor Graph</summary>
<br>
<p align="left">
   <a href="https://github.com{/Albert1616/Management-tasks.git/}graphs/contributors">
      <img src="https://contrib.rocks/image?repo=Albert1616/Management-tasks.git">
   </a>
</p>
</details>

---

## 🎗 License

This project is protected under the [SELECT-A-LICENSE](https://choosealicense.com/licenses) License. For more details, refer to the [LICENSE](https://choosealicense.com/licenses/) file.

---

## 🙌 Acknowledgments

- List any resources, contributors, inspiration, etc. here.

---
