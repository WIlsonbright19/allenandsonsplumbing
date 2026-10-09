# Allen & Sons Plumbing

A static website for Allen & Sons Plumbing, built with React and Vite.

## Run locally

**Requirements:** Node.js 20.19+ or 22.12+, and npm.

```sh
npm install
npm run dev
```

Open the local URL printed by Vite (by default, `http://localhost:3000`).

## Build and deploy

```sh
npm run build
npm run preview
```

The production site is generated in `dist/`. To deploy it, configure any static
hosting provider to run `npm run build` and publish the `dist` directory. The
site uses relative asset paths and includes its photos and Poppins fonts in the
build, so it can also be hosted from a subdirectory without relying on external
image or font services. No API keys, environment variables, or server-side
runtime are required.
