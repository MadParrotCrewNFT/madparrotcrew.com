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
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Btn, Logo, PreMintCalculator, DuringMintCalculator, PostMintCalculator } from '@/components'
import siteconfig from '@/siteconfig.json'
import config from '@/config.json'

export default Vue.extend({
  components: { Btn, Logo, PreMintCalculator, DuringMintCalculator, PostMintCalculator },
  data () {
    return {
      siteconfig,
      config
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
</style>
