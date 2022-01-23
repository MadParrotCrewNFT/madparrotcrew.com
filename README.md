# maddparrotcrew.com

[![Pipeline status](https://github.com/MadParrotCrew/madparrotcrew.com/actions/workflows/build-and-deploy.yml/badge.svg?branch=master)](https://github.com/MadParrotCrew/madparrotcrew.com/actions/workflows/build-and-deploy.yml) ![Website status](https://img.shields.io/website?url=https%3A%2F%2Fmadparrotcrew.com)

## Build Setup

1. Clone repo locally `git clone https://github.com/MadParrotCrew/madparrotcrew.com.git`
2. Go into project `cd madparrotcrew.com`
3. Clean install project dependencies `npm ci`
4. You're ready to go, run `npm start` to run and view in production mode

```bash
# clean install dependencies
$ npm ci

# serve with hot reload at localhost:3000 (dev mode)
$ npm run dev

# generate static project (build files for production mode)
$ npm run generate

# build for production and launch server (local production mode)
$ npm run start
```

## Project details

- The website will automatically deploy via a GitHub action on every push to the `master` branch
- The website is built using [Nuxt 2](https://nuxtjs.org), TypeScript & SCSS and various other dependencies found in `package.json`
