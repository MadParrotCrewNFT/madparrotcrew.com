# maddparrotcrew.com

[![Netlify Status](https://api.netlify.com/api/v1/badges/51a236ba-2359-40f5-927b-3de7a037fec3/deploy-status)](https://app.netlify.com/sites/optimistic-kepler-345fcf/deploys) ![Website status](https://img.shields.io/website?url=https%3A%2F%2Fmadparrotcrew.com)

## Process

- There is currently a manual flag in `config.json` called `MINTING_LIVE`. When minting is live, we must set this to true so we can effectively get the user's wallet and call the smart contract

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
