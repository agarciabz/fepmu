<p align="center">
<h3 align="center">Fire Emblem: Pick My Units</h3>
<p align="center">Randomize your Fire Emblem run with this. It only supports Fire Emblem Three Houses at the moment.</p>
</p>
<p></p>

## Running locally

After cloning the repo run:

```bash
npm install
npm start
```

The app will be served locally in the displayed URL.

## Development notes

Initially this was a fork of [henry-alakazhang's Pick Your Units](https://github.com/henry-alakazhang/pick-your-units) but later I decided to create this repo from scratch and use it as an excuse to learn React and apply some ~~over-engineering~~ good practises I acquired over the last years.

### Tech stack

![image](https://img.shields.io/badge/-Nx-143055?logo=nx&logoColor=white&style=flat)
![image](https://img.shields.io/badge/-TypeScript-3178C6?logo=typescript&logoColor=white&style=flat)
![image](https://img.shields.io/badge/-ReactJs-61DAFB?logo=react&logoColor=white&style=flat)

I started using [Nx CLI](https://nx.dev) to create an Angular workspace by default. At first I was going to use Angular because I was more used to it, along with [Taiga UI](https://taiga-ui.dev/), a component library. However I decided to redo the project with React to start practising with this library.

To make the migration easier I decided to leverage Nx and create a framework-agnostic pure TypeScript library which will contain logic, data and models.

```sh
nx generate @nrwl/workspace:library three-houses --directory=data
```

With time I started having errors in the workspace so I ended up recreating it from scratch, this time with React modules only.

![image](https://img.shields.io/badge/-ESLint-4B32C3?logo=eslint&logoColor=white&style=flat)
![image](https://img.shields.io/badge/-Prettier-F7B93E?logo=prettier&logoColor=white&style=flat)

ESLint and Prettier are included by default with Nx workspaces. Nx provides a modern development experience tooling from the beginning.

![image](https://img.shields.io/badge/-TailwindCSS-06B6D4?logo=tailwindcss&logoColor=white&style=flat)
![image](https://img.shields.io/badge/-Chakra_UI-319795?logo=chakraui&logoColor=white&style=flat)

I'm not good at styling so I find useful to abstract utility classes with TailwindCSS. Also I wanted to use an existing UI component library to import ready-to-use components such as selectors, so I added Chakra UI to the project. It has a nice look & feel and supports night mode.

I observed that TailwindCSS and Chakra UI overlap some of its functionalities. For example, Chakra UI has a component called `VStack` that creates a vertical container of items. You can also achieve this with Tailwind classes that applies flex containers.

![image](https://img.shields.io/badge/-GitHub_Actions-2088FF?logo=githubactions&logoColor=white&style=flat)

I set up a [GitHub Actions pipeline](.github/workflows/ci.yml) to build and deploy this app which each new commit, allowing a more agile development.

![image](https://img.shields.io/badge/-Jest-C21325?logo=jest&logoColor=white&style=flat)

I took the chance to apply Test Driven Development, specially in data library where most logic and data transformations had place. By applying TDD I could code and refactor and getting errors earlier, improving code quality.

![image](https://img.shields.io/badge/-ts--node-3178C6?logo=tsnode&logoColor=white&style=flat)

![image](https://img.shields.io/badge/-Notion-000000?logo=notion&logoColor=white&style=flat)

### Milestones

- [x] Use React
- [x] Test Driven Development
- [x] Switch between light and dark mode
- [x] CICD pipeline
- [ ] Multiple languages
