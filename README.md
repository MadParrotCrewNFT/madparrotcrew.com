# maddparrotcrew.com

[![Netlify Status](https://api.netlify.com/api/v1/badges/51a236ba-2359-40f5-927b-3de7a037fec3/deploy-status)](https://app.netlify.com/sites/optimistic-kepler-345fcf/deploys) ![Website status](https://img.shields.io/website?url=https%3A%2F%2Fmadparrotcrew.com)

## Process

- Decide a mint start datetime (in UTC format), set this as `mintStartDateTime` in `@/store/index.ts`
- The end datetime is automatically calculated as 69 hours after the start datetime
- This will rely on ensuring the contract has enabled minting for the datetime defined in `mintStartDateTime`
- The UI will show the minting panel for 69 hours
- When the 69 hours is up, the UI will show that minting has finished (this will rely on ensuring the contract has disabled minting)
- If all parrots have been minted before the 69-hour timer is up, it will show the same UI as if the 69 hour period had finished
- After the 69 hour minting period, we should hardcode the UI to represent the minted ended state (beneficial for page speed, SEO & maintenance reasons)

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
