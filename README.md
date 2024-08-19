## Getting Started

## Continuous Integration

- CI for Jest:
![CI for Jest](https://github.com/muhammad-zakir/technical-test-namea-technology/actions/workflows/test.yml/badge.svg)

**Running with docker**
1. Make sure you're on the application's directory
2. Install Docker and ensure that it is running
3. Create .env file `cp .env.example .env`
4. Build the Docker's image `docker build . -t technical-test-namea-image`
5. Run the Docker's image `docker run -p 3000:3000 --name technical-test-namea-container technical-test-namea-image`
6. Navigate to Swagger ([http://localhost:3000/api-docs](http://localhost:3000/api-docs))

##### (Note: Stop the running container with `docker stop technical-test-namea-container` and remove it with `docker rm technical-test-namea-container`)

**Running without docker**
1. Make sure you're on the application's directory
2. Install the latest [Node.js LTS](https://nodejs.org/en/)
3. Create .env file `cp .env.example .env`
4. Install project dependencies by running `npm install`
5. Start development server `npm run dev`
6. Navigate to Swagger ([http://localhost:3000/api-docs](http://localhost:3000/api-docs))

## Scripts

**Build production bundle**

```
npm run build
```

**Lint project (eslint)**

```
npm run lint
```

**Start development server**

```
npm run dev
```

**Run unit tests with coverage report**

```
npm run test:coverage
```
