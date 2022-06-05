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
            <img src="~assets/images/about-parrot-back.png" alt="An orange parrot smoking a cigar" loading="lazy" />
            <img src="~assets/images/about-parrot-front.png" alt="A green parrot wearing a tuxedo drinking red wine" loading="lazy" />
            <img src="~assets/images/about-parrot-feet.png" alt="" loading="lazy" />
          </div>
        </div>
        <div class="about__text">
          <h2>
            First rule of <span :aria-label="siteconfig.brand_name">MPC</span> is...
          </h2>
          <p aria-describedby="fight-club">
            ...not to steal quotes from Fight Club<span aria-hidden="true">*</span>.
          </p>
          <p aria-describedby="to-be-clear">
            The {{ siteconfig.brand_name }} are a bunch of randomly generated parrots who like to wear goofy shit, drink lots, fight more and can often be spotted holding anything (and everything) from a glass of wine to a deadly Katana<span aria-hidden="true">**</span>.
          </p>
          <p v-if="config.MINTING_LIVE">
            You can check out the <a :href="config.SCAN_LINK" target="_blank" rel="norefferer noopener" class="link">verified smart contract</a> on etherscan.
          </p>
          <p id="fight-club" class="small" style="margin-top: 3rem">
            <span aria-hidden="true">*</span> It's a great film, check it out.
          </p>
          <p id="to-be-clear" class="small">
            <span aria-hidden="true">**</span> Just so we're clear: We don't condone violence of any kind, nor do we endorse the idea that parrots are deadly psychopaths. However, we do find the idea of a parrot holding nunchucks, smoking a joint or sporting an afro absolutely fucking hilarious and hopefully so do you do... otherwise, you're NGMI.
          </p>
        </div>
        <div class="about__parrots--mobile">
          <img src="~assets/images/about-parrot-back.png" alt="An orange parrot smoking a cigar" loading="lazy" />
          <img src="~assets/images/about-parrot-front.png" alt="A green parrot wearing a tuxedo drinking red wine" loading="lazy" />
          <img src="~assets/images/about-parrot-feet.png" alt="" loading="lazy" />
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
  background-color: var(--mpc-purple);
  color: #fff;
  text-align: center;

  @media (min-width: $responsive-large-tablet) {
    background: #fff;
    color: currentColor;
    text-align: left;
  }

  &__inner {
    max-width: 85rem;
    margin-inline: auto;
    display: grid;
    grid-template-columns: 1fr;

    @media (min-width: $responsive-large-tablet) {
      grid-template-columns: 2fr 1fr;
    }

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
    margin-top: 6rem;
    margin-bottom: 12rem;
    padding-inline: 1rem;

    @media (min-width: $responsive-standard-tablet) {
      margin-top: 2rem;
    }

    @media (min-width: $responsive-large-tablet) {
      margin-top: 2rem;
      margin-bottom: 2.5rem;
    }

    @media (min-width: $responsive-small-desktop) {
      max-width: 35.5rem;
      margin-top: 5.125rem;
      margin-bottom: 2.875rem;
    }

    a {
      font-weight: 700;

      @media (max-width: $responsive-large-tablet + 0.0625em) {
        color: #fff;
      }
    }
  }

  h2 {
    font-size: var(--font-size-title);
    margin-top: 0;
    margin-bottom: 0.5rem;
    color: #fff;

    @media (min-width: $responsive-large-tablet) {
      margin-bottom: 2.75rem;
      color: currentColor;
    }
  }

  &__parrots {
    &--mobile {
      background-image: url(~assets/images/about-oval.svg);
      background-position: bottom;
      background-repeat: no-repeat;
      background-size: contain;

      @media (min-width: $responsive-large-tablet) {
        display: none;
      }

      img {
        position: absolute;
        left: 45%;
        transform: translateX(-50%);

        &[src*="back"] {
          width: 8.75rem;
          transform: rotate(2deg);
          bottom: -2rem;
        }

        &[src*="front"] {
          width: 8rem;
          bottom: -4.5rem;
        }

        &[src*="feet"] {
          width: 2rem;
          bottom: -1rem;
          z-index: 1;
        }
      }
    }

    &--desktop {
      display: none;

      @media (min-width: $responsive-large-tablet) {
        display: block;
        position: relative;
        bottom: 6%;
        height: 106%;
        background-image: url(~assets/images/about-oval.svg);
        background-position: bottom;
        background-repeat: no-repeat;
        background-size: contain;

        img {
          position: absolute;
          left: 40%;
          transform: translateX(-50%);

          &[src*="back"] {
            width: 20rem;
            transform: rotate(2deg);
            bottom: -4rem;
          }

          &[src*="front"] {
            width: 21.875rem;
            bottom: -13rem;
          }

          &[src*="feet"] {
            width: 5.375rem;
            bottom: -3rem;
            z-index: 1;
          }
        }
      }
    }
  }
}
</style>
