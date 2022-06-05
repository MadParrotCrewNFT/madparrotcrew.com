<template>
  <div>
    <header id="mint" class="header">
      <div class="header__inner">
        <PreMintCalculator v-if="!config.MINTING_LIVE" class="header__calculator" />
        <DuringMintCalculator v-else-if="config.MINTING_LIVE" class="header__calculator" />
        <PostMintCalculator v-else-if="hasSoldOutOrTimeUp()" class="header__calculator" />
        <div class="header__parrot">
          <img class="header__parrot--body" src="~assets/images/hero-parrot.png" alt="A purple parrot with a green head, holding a beer, wearing a bandana and a denim jacket" />
          <img class="header__parrot--feet" src="~assets/images/hero-parrot-feet.png" alt="" />
        </div>
      </div>
    </header>
    <section id="about" class="about">
      <div class="about__inner">
        <div>
          <div class="about__parrots--desktop">
            <img src="~assets/images/about-parrots.png" alt="A pair of Mad Parrots" height="920" width="698" loading="lazy" />
            <img src="~assets/images/about-parrot-feet.png" alt="" height="173" width="118" loading="lazy" />
          </div>
        </div>
        <div class="about__text">
          <h2 class="about__title">
            <span class="mobile">About the Mad Parrots<span class="sr-only">.</span></span>
            <span class="desktop">69 hours to mint!</span>
          </h2>
          <p aria-describedby="plan-explained">
            This project was originally intended to be something bigger, but it didn’t work out... so now it’s just about the art<span aria-hidden="true">*</span>.
          </p>
          <p>
            There are a <strong>limited number of parrots</strong> available. You have <strong>69 hours to mint</strong> after which the remaining parrots will be burned.
          </p>
          <p>
            You get IP rights to the parrots you mint.
          </p>
          <p id="plan-explained" class="about__smallprint">
            <span aria-hidden="true">*</span>This is not to say I don’t have plans for this project in the near future, but at this time I want to make it super-clear that it’s all about the art.
          </p>
        </div>
        <div class="about__parrots--mobile">
          <img src="~assets/images/about-parrots.png" alt="A pair of Mad Parrots" height="338" width="256" loading="lazy" />
          <img src="~assets/images/about-parrot-feet.png" alt="" height="63" width="43" loading="lazy" />
        </div>
      </div>
    </section>
    <section id="team" class="team">
      <h2 class="team__title">The team... Behind the crew</h2>
      <ul class="team__members">
        <li v-for="member in team" :key="member.name" class="member">
          <div class="member--mobile">
            <img class="member__img" :src="`/images/${member.image}`" :alt="`${member.name}'s avatar`" height="96" width="96" loading="lazy" />
            <p class="member__role">{{ member.role }}</p>
            <p class="member__name">{{ member.name }}</p>
            <p class="member__description">{{ member.description }}</p>
            <ul class="member__social">
              <li v-for="social in member.social" :key="social.platform">
                <a :href="social.url" target="_blank">
                  <svg-icon :name="social.platform" />
                  <span class="sr-only">{{ social.platform }}</span>
                </a>
              </li>
            </ul>
          </div>
          <div class="member--desktop">
            <div class="member__img-social">
              <img class="member__img" :src="`/images/${member.image}`" :alt="`${member.name}'s avatar`" height="96" width="96" loading="lazy" />
              <ul class="member__social">
                <li v-for="social in member.social" :key="social.platform">
                  <a :href="social.url" target="_blank">
                    <svg-icon :name="social.platform" />
                    <span class="sr-only">{{ social.platform }}</span>
                  </a>
                </li>
              </ul>
            </div>
            <div class="member__text">
              <p class="member__role">{{ member.role }}</p>
              <p class="member__name">{{ member.name }}</p>
              <p class="member__description">{{ member.description }}</p>
            </div>
          </div>
        </li>
      </ul>
    </section>
    <section id="frens" class="frens">
      <img class="frens__logo" src="~assets/images/mpc.png" alt="MPC" height="100" width="100" loading="lazy" />
      <h2 class="frens__title">Let's be frens</h2>
      <p class="frens__para">If there’s ever a NFT project that has a close-knit community, it’s us. We’re all about good vibes and we stick to a quality > quantity policy.</p>
      <p class="frens__para">So If you fancy it, pop in and say hello! We’d love to hear from you.</p>
      <btn class="frens__btn" icon="discord" white :to="config.SOCIAL.DISCORD">Join us in Discord</btn>
      <div class="frens__parrots--mobile">
        <img src="~assets/images/team-parrots.png" alt="A couple of Mad Parrots" height="229" width="261" loading="lazy" />
        <img src="~assets/images/team-parrot-feet.png" alt="" height="49" width="34" loading="lazy" />
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Btn, Logo, PreMintCalculator, DuringMintCalculator, PostMintCalculator } from '@/components'
import siteconfig from '@/siteconfig.json'
import config from '@/config.json'

interface ITeamMember {
  image: string;
  role: string;
  name: string;
  description: string;
  social: {
    platform: 'twitter',
    url: `https://${string}`
  }[]
}

export default Vue.extend({
  components: { Btn, Logo, PreMintCalculator, DuringMintCalculator, PostMintCalculator },
  data () {
    return {
      siteconfig,
      config
    }
  },
  computed: {
    team (): ITeamMember[] {
      return [
        {
          name: 'Sheftali',
          image: 'sheftali.png',
          role: 'Founder, artist, UX/UI',
          description: 'Came up with the parrots and more or less kickstarted the whole project.',
          social: [
            { platform: 'twitter', url: 'https://twitter.com/iamsheftali' }
          ]
        },
        {
          name: 'Gerry',
          image: 'gerry.png',
          role: 'Adviser',
          description: 'Long-time fren in the space who’s always shooting straight and giving top advice.',
          social: [
            { platform: 'twitter', url: 'https://twitter.com' }
          ]
        },
        {
          name: 'Fancyrats',
          image: 'fancyrats.png',
          role: 'Web3 Developer',
          description: 'Wrote the smart contract that y’all will be (hopefully) minting from.',
          social: [
            { platform: 'twitter', url: 'https://twitter.com' }
          ]
        },
        {
          name: 'Jack Domleo',
          image: 'jackdomleo.png',
          role: 'Web2 Developer',
          description: 'Built the website as well as endured Shef’s constant tweak requests.',
          social: [
            { platform: 'twitter', url: 'https://twitter.com/jackdomleo7' }
          ]
        },
        {
          name: 'Dejen',
          image: 'dejen.png',
          role: 'Community Manager',
          description: 'Sounds like she’s always smiling and that’s why she’s the the best for this role.',
          social: [
            { platform: 'twitter', url: 'https://twitter.com' }
          ]
        },
        {
          name: 'Zanko',
          image: 'zanko.png',
          role: 'Discord Server Wizard',
          description: 'Set up, configured and maintains the Discord server. Parrots love Zanko.',
          social: [
            { platform: 'twitter', url: 'https://twitter.com' }
          ]
        }
      ]
    }
  },
  methods: {
    hasSoldOutOrTimeUp (): boolean {
      return false
    }
  }
})
</script>

<style lang="scss" scoped>
$responsive-team: 69.375rem;

.header {
  position: relative;
  background: linear-gradient(180deg, #62264A 0%, rgba(98, 38, 74, 0) 100%), linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(~assets/images/hero-bg.png);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  padding: 4.75rem 1rem 1rem 1rem;

  @media (min-width: $responsive-standard-tablet) {
    padding-top: 10rem;
  }

  @media (min-width: $responsive-large-tablet) {
    min-height: 36rem;
    height: 90vh;
    max-height: 40rem;
  }

  &__inner {
    max-width: 60rem;
    margin-inline: auto;
    height: 100%;

    @media (min-width: $responsive-large-tablet) {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
    }
  }

  &__calculator {
    max-width: 34rem;
    margin-bottom: 15rem;
    margin-inline: auto;

    @media (min-width: $responsive-large-tablet) {
      transform: rotate(-4deg);
      transform-origin: top right;
      margin-bottom: 0;
    }
  }

  &__parrot {
    pointer-events: none;

    @media (min-width: $responsive-large-tablet) {
      position: relative;
    }

    &--body {
      position: absolute;
      left: 50%;
      bottom: -2rem;
      transform: translateX(-50%);
      height: 301px;
      width: 184px;

      @media (min-width: $responsive-large-tablet) {
        left: 50%;
        bottom: -6.5rem;
        height: 636px;
        width: 388px;
      }
    }

    &--feet {
      position: absolute;
      left: calc(50% - 1px);
      bottom: -15px;
      transform: translateX(-50%);
      z-index: 1;
      height: 68px;
      width: 47px;

      @media (min-width: $responsive-large-tablet) {
        left: calc(50% - 3px);
        bottom: -66px;
        height: 143px;
        width: 98px;
      }
    }
  }
}

.about {
  position: relative;
  background: linear-gradient(180deg, #ffd15b 0%, #ffcac5 100%);

  &__inner {
    max-width: 85rem;
    margin-inline: auto;
    display: grid;
    grid-template-columns: 1fr;

    @media (min-width: $responsive-small-desktop) {
      grid-template-columns: repeat(2, 1fr);
    }

    > div:nth-child(1) {
      max-width: 50rem;
    }
  }

  &__text {
    position: relative;
    max-width: 30rem;
    margin-inline: auto;
    margin-top: 3rem;
    margin-bottom: 15rem;
    padding-inline: 1rem;
    font-size: var(--font-size-large);

    @media (min-width: $responsive-small-desktop) {
      max-width: 35.5rem;
      margin-top: 5.125rem;
      margin-bottom: 2.875rem;
    }

    a {
      font-weight: 700;
    }

    p {
      margin-block: 1rem;

      &:first-of-type {
        margin-top: 0;
      }

      &:last-of-type {
        margin-bottom: 0;
      }
    }
  }

  &__title {
    font-size: var(--font-size-subtitle);
    margin-top: 0;
    margin-bottom: 0.5rem;

    @media (min-width: $responsive-small-desktop) {
      margin-bottom: 2.75rem;
    }

    .mobile {
      @media (min-width: $responsive-small-desktop) {
        display: none;
      }
    }

    .desktop {
      display: none;

      @media (min-width: $responsive-small-desktop) {
        display: block;
      }
    }
  }

  &__smallprint {
    font-size: var(--font-size-small);

    @media (min-width: $responsive-small-desktop) {
      font-size: var(--font-size-body);
    }
  }

  &__parrots {
    &--mobile {
      position: relative;

      @media (min-width: $responsive-small-desktop) {
        display: none;
      }

      &::before {
        content: '';
        position: absolute;
        top: -11rem;
        left: 50%;
        transform: translateX(-50%);
        background-image: url(~assets/images/about-oval.svg);
        background-position: bottom;
        background-repeat: no-repeat;
        background-size: contain;
        height: 14.25rem;
        width: 14.25rem;
      }

      img {
        position: absolute;
        left: 50%;

        &[src*="parrots"] {
          width: 16rem;
          bottom: -7rem;
          transform: translateX(-50%);
        }

        &[src*="feet"] {
          width: 2.6875rem;
          bottom: -1.5rem;
          z-index: 1;
          transform: translateX(calc(-50% - 2.5rem));
        }
      }
    }

    &--desktop {
      display: none;

      @media (min-width: $responsive-small-desktop) {
        display: block;
        position: relative;
        height: 100%;

        &::before {
          content: '';
          position: absolute;
          bottom: -3rem;
          left: 50%;
          transform: translateX(-50%);
          background-image: url(~assets/images/about-oval.svg);
          background-position: bottom;
          background-repeat: no-repeat;
          background-size: contain;
          height: 33.5rem;
          width: 33.5rem;
        }

        img {
          position: absolute;
          left: 50%;

          &[src*="parrots"] {
            width: 43.625rem;
            bottom: -18rem;
            transform: translateX(-50%);
          }

          &[src*="feet"] {
            width: 7.375rem;
            bottom: -4rem;
            z-index: 1;
            transform: translateX(calc(-50% - 7rem));
          }
        }
      }
    }
  }
}

.team {
  position: relative;
  background-color: #fff;
  padding: 3rem 1rem;

  &__title {
    font-size: var(--font-size-subtitle);
    text-align: center;
    margin-top: 0;
    margin-bottom: 3rem;
  }

  &__members {
    list-style-type: none;
    padding-left: 0;
    display: grid;
    grid-template-columns: 1fr;
    place-items: center;
    gap: 3rem;
    max-width: 69.375rem;
    margin: 0 auto;

    @media (min-width: $responsive-small-tablet) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (min-width: $responsive-team) {
      grid-template-columns: repeat(3, 1fr);
      gap: 2rem;
    }
  }

  .member {
    position: relative;
    max-width: 21.75rem;
    background-color: var(--mpc-light-grey);
    border-radius: 1rem;
    padding: 6rem 1rem 2rem 1rem;
    text-align: center;

    @media (min-width: $responsive-team) {
      padding: 2rem 1.5rem;
      text-align: left;
    }

    &--mobile {
      display: flex;
      flex-direction: column;

      @media (min-width: $responsive-team) {
        display: none;
      }
    }

    &--desktop {
      display: none;

      @media (min-width: $responsive-team) {
        display: flex;
        align-items: center;
        height: 100%;
      }
    }

    &__img {
      position: absolute;
      top: -1.5rem;
      left: 50%;
      transform: translateX(-50%);
      height: 6rem;
      min-height: 6rem;
      max-height: 6rem;
      width: 6rem;
      min-width: 6rem;
      max-width: 6rem;
      border-radius: 50%;
      background-color: var(--mpc-medium-grey);
      color: #fff;
      font-size: var(--font-size-small);

      @media (min-width: $responsive-team) {
        position: unset;
        transform: unset;
      }
    }

    &__role {
      font-size: var(--font-size-small);
      font-weight: 500;
      margin-top: 0;
      margin-bottom: 0.5rem;
    }

    &__name {
      font-family: var(--font-family-luckiestguy);
      letter-spacing: normal;
      font-size: var(--font-size-body);
      margin-top: 0;
      margin-bottom: 1rem;
    }

    &__description {
      font-size: var(--font-size-body);
      font-weight: 500;
      color: #000;
      margin-top: 0;
      margin-bottom: 1.5rem;
      flex: 1;

      @media (min-width: $responsive-team) {
        margin-bottom: 0;
      }
    }

    &__social {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.75rem;
      list-style-type: none;
      padding-left: 0;
      margin: 0;

      @media (min-width: $responsive-team) {
        margin-top: 1.5rem;
      }

      li, a {
        display: flex;
        align-items: center;
        height: 100%;
        color: var(--mpc-medium-grey);
        transition: color 160ms ease;
        will-change: color;

        &:hover,
        &:active {
          color: var(--mpc-dark-blue);
        }
      }

      svg {
        height: 2rem;
        width: 2rem;
      }
    }

    &__img-social {
      height: 100%;
      border-right: 1px solid #8E8E8E;
      padding-right: 0.75rem;
    }

    &__text {
      padding-left: 0.75rem;
    }
  }
}

.frens {
  position: relative;
  background-color: var(--mpc-blue);
  display: grid;
  grid-template-columns: 1fr;
  padding: 6rem 1rem 0 1rem;
  text-align: center;

  &__logo {
    position: absolute;
    top: -1.5rem;
    left: 50%;
    transform: translateX(-50%);
  }

  &__title {
    color: #fee75c;
    font-size: var(--font-size-heading);
    margin-top: 0;
    margin-bottom: 0.75rem;
  }

  &__para {
    color: #fff;
    font-size: var(--font-size-large);
    margin: 0;

    &:not(:last-of-type) {
      margin-bottom: 1rem;
    }
  }

  &__btn {
    justify-self: center;
    margin-top: 2rem;
    margin-bottom: 15rem;
  }

  &__parrots {
    &--mobile {
      @media (min-width: $responsive-small-desktop) {
        display: none;
      }

      img {
        position: absolute;
        left: 50%;

        &[src*="parrots"] {
          width: 16.3125rem;
          bottom: -2rem;
          transform: translateX(-50%);
        }

        &[src*="feet"] {
          width: 2.125rem;
          bottom: -1.25rem;
          z-index: 1;
          transform: translateX(calc(-50% - 1rem));
        }
      }
    }

    &--desktop {
      display: none;

      @media (min-width: $responsive-small-desktop) {
        display: block;
        height: 100%;

        img {
          position: absolute;
          left: 50%;

          &[src*="parrots"] {
            width: 43.625rem;
            bottom: -18rem;
            transform: translateX(-50%);
          }

          &[src*="feet"] {
            width: 7.375rem;
            bottom: -4rem;
            z-index: 1;
            transform: translateX(calc(-50% - 7rem));
          }
        }
      }
    }
  }
}
</style>
