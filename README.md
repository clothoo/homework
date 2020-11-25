# [Homework](https://github.com/clothoo/homework)

### Project setup

- UI: Vue.js
- UI theme: Bootstrap-Vue
- Server: Apollo GraphQL
- Unit test: Jest
- E2E test: Cypress
- CI/CI: CircleCI

### Running locally

#### Step 0: Install dependencies

```
yarn install
```

#### Step 1: Start apollo server

```
yarn apollo
```

GraphQL server will start on http://localhost:4000/graphql

#### Step 2: Start ui

```
yarn serve
```

Web app will start on http://localhost:8080

### Run unit tests

```
yarn test:unit
```

### Run end-to-end tests

```
yarn test:e2e
```
