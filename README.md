# data-guard-erhan

This projects can do github repository queries by programmin language, date and star rank filters.
It consist of `frontend` and `server` projects.

## Server Project

As a Node.js project, `Server` responsible to do github repositories search query on local machines without browsers' CORS policy restrictions.

### Installation

```sh
cd server
npm install
```

### Run Server Project

```sh
cd server
node server.js
```

## Frontend Project

### Installation

```sh
cd frontend
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Run End-to-End Tests with [Cypress](https://www.cypress.io/)

```sh
npm run test:e2e:dev
```

This runs the end-to-end tests against the Vite development server.
It is much faster than the production build.

But it's still recommended to test the production build with `test:e2e` before deploying (e.g. in CI environments):

```sh
npm run build
npm run test:e2e
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
