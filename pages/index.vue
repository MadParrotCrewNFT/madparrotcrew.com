<template>
  <div>
    <header id="mint" class="header">
      <div class="header__inner">
        <MintCalculator class="header__calculator" />
        <div class="header__parrot">
          <nuxt-img preload class="header__parrot--body" src="/images/hero-parrot.png" alt="A purple parrot with a green head, holding a beer, wearing a bandana and a denim jacket" height="637" width="389" sizes="largetablet:184px 4kdesktop:389px" format="webp" />
          <nuxt-img preload class="header__parrot--feet" src="/images/hero-parrot-feet.png" alt="" height="143" width="98" sizes="largetablet:47px 4kdesktop:98px" format="webp" />
        </div>
      </div>
    </header>
    <section id="about" class="about">
      <div class="about__inner">
        <div>
          <div class="about__parrots--desktop">
            <nuxt-img class="body" src="/images/about-parrots.png" alt="A pair of Mad Parrots" height="921" width="698" loading="lazy" sizes="4kdesktop:698px" format="webp" />
            <nuxt-img class="feet" src="/images/about-parrot-feet.png" alt="" height="174" width="118" loading="lazy" sizes="4kdesktop:118px" format="webp" />
          </div>
        </div>
        <div class="about__text">
          <h2 class="about__title">
            Got 0.01 eth? of course you do.
          </h2>
          <p>
            <strong>Adopt a Mad Parrot. You'll love it; it'll love you. You'll also own the IP rights, so you can do tons of stuff.</strong> Fridge magnet? Poster? Bed Sheets? Pillow? Coaster? Lunch Box? T-Shirt? You name it, the sky's the limit (pun definitely intended).
          </p>
          <p>
            Nah, but jokes aside, anybody who does mint, you have my undying gratitude; I'll love you forever because it's the gesture that counts. And anybody who knows me knows that I'm in web3 for the long term, and I'm ALWAYS building. So for any and all future projects, know that if you own one of my Mad Parrots, you'll get perks as a "non-fungible token of my appreciation" it's the least I can do. 
          </p>
          <a class="about__signature" href="https://twitter.com/iamsheftali" target="_blank" rel="noopener nofollow">
            <nuxt-img src="/images/sheftali-signature.gif" loading="lazy" width="399" height="293" alt="Sheftali" />
            <span class="sr-only">Sheftali</span>
          </a>
        </div>
        <div class="about__parrots--mobile">
          <nuxt-img class="body" src="/images/about-parrots.png" alt="A pair of Mad Parrots" height="921" width="698" loading="lazy" sizes="4kdesktop:256px" format="webp" />
          <nuxt-img class="feet" src="/images/about-parrot-feet.png" alt="" height="174" width="118" loading="lazy" sizes="4kdesktop:43px" format="webp" />
        </div>
      </div>
    </section>
    <section id="team" class="team">
      <h2 class="team__title">The team... Behind the <span>crew</span></h2>
      <div>
        <div>
          <ul class="team__members">
            <li v-for="member in team" :key="member.name" class="member">
              <a :href="member.twitter" rel="nofollow noopener" target="_blank" class="member--mobile">
                <nuxt-img class="member__img" :src="`/images/${member.image}`" :alt="`${member.name}'s avatar`" height="384" width="384" loading="lazy" sizes="4kdesktop:96px" format="webp" />
                <p class="member__role">{{ member.role }}</p>
                <p class="member__name">{{ member.name }}</p>
                <p class="member__description">{{ member.description }}</p>
                <div class="member__social">
                  <svg-icon name="twitter" />
                  <span class="sr-only">Twiiter</span>
                </div>
              </a>
              <a :href="member.twitter" rel="nofollow noopener" target="_blank" class="member--desktop">
                <div class="member__img-social">
                  <nuxt-img class="member__img" :src="`/images/${member.image}`" :alt="`${member.name}'s avatar`" height="384" width="384" loading="lazy" sizes="4kdesktop:96px" format="webp" />
                  <div class="member__social">
                    <svg-icon name="twitter" />
                    <span class="sr-only">Twiiter</span>
                  </div>
                </div>
                <div class="member__text">
                  <p class="member__role">{{ member.role }}</p>
                  <p class="member__name">{{ member.name }}</p>
                  <p class="member__description">{{ member.description }}</p>
                </div>
              </a>
            </li>
          </ul>
        </div>
        <div>
          <div class="team__parrots--desktop">
            <nuxt-img class="body" src="/images/team-parrots.png" alt="A couple of Mad Parrots" height="666" width="757" loading="lazy" sizes="4kdesktop:757px" format="webp" />
            <nuxt-img class="feet" src="/images/team-parrots-feet.png" alt="" height="144" width="98" loading="lazy" sizes="4kdesktop:98px" format="webp" />
          </div>
          <div class="team__parrots--mobile">
            <nuxt-img class="body" src="/images/team-parrots.png" alt="A couple of Mad Parrots" height="666" width="757" loading="lazy" sizes="4kdesktop:261px" format="webp" />
            <nuxt-img class="feet" src="/images/team-parrots-feet.png" alt="" height="144" width="98" loading="lazy" sizes="4kdesktop:34px" format="webp" />
          </div>
        </div>
      </div>
    </section>
    <section id="faq" class="faq">
      <h2 class="faq__title">Frequently asked questions</h2>
      <div class="faq__inner">
        <div>
          <div class="faq__parrots--desktop">
            <nuxt-img class="body" src="/images/faq-parrots.png" alt="A pair of Mad Parrots" height="632" width="634" loading="lazy" sizes="4kdesktop:634px" format="webp" />
            <nuxt-img class="feet" src="/images/faq-parrots-feet.png" alt="" height="133" width="91" loading="lazy" sizes="4kdesktop:91px" format="webp" />
          </div>
        </div>
        <div class="faq__text">
          <ul>
            <Accordion heading="How many and how much?" heading-tag="h3" id="faq-1">
              <p>
                <strong>3,333</strong> (with some held back for early supporters), 0.01<span aria-hidden="true">e</span><span class="sr-only">ethereum</span>.
              </p>
            </Accordion>
            <Accordion heading="Presale list? Pre-reveal?" heading-tag="h3" id="faq-2">
              <p>
                Negative and... negative. Everyone gets the same chance to mint, and you can see what your parrot looks like instantly!
              </p>
            </Accordion>
            <Accordion heading="Does this awesome looking parrot have any utility?" heading-tag="h3" id="faq-3">
              <p>
                Not for the moment. <strong>For now, it’s just about the art</strong>. That said, anybody who owns a Mad Parrot will be granted exclusive benefits for any future projects I get involved with.
              </p>
            </Accordion>
            <Accordion heading="Who made the Smart Contract?" heading-tag="h3" id="faq-4">
              <p>
                I used Bueno. You can learn more about them at nft.bueno.art (<a href="https://nft.bueno.art/" target="_blank">https://nft.bueno.art/</a>). 
              </p>
            </Accordion>
          </ul>
        </div>
        <div class="faq__parrots--mobile">
          <nuxt-img class="body" src="/images/faq-parrots.png" alt="A pair of Mad Parrots" height="632" width="634" loading="lazy" sizes="4kdesktop:256px" format="webp" />
          <nuxt-img class="feet" src="/images/faq-parrots-feet.png" alt="" height="133" width="91" loading="lazy" sizes="4kdesktop:36px" format="webp" />
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Accordion, Btn, Logo, MintCalculator } from '@/components'
import siteconfig from '@/siteconfig.json'
import config from '@/config.json'

interface ITeamMember {
  image: string;
  role: string;
  name: string;
  description: string;
  twitter: `https://${string}`
}

export default Vue.extend({
  components: { Accordion, Btn, Logo, MintCalculator },
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
          image: 'sheftali.jpg',
          role: 'Founder, artist, UX/UI',
          description: 'Designed the parrots, the UI, the brand and kickstarted the original project.',
          twitter: 'https://twitter.com/iamsheftali'
        },
        {
          name: 'Jack Domleo',
          image: 'jackdomleo.jpg',
          role: 'Web2 Developer',
          description: 'Built the website as well as endured my constant tweak requests.',
          twitter: 'https://twitter.com/jackdomleo7'
        }
      ]
    },
  }
})
</script>

<style lang="scss" scoped>
$responsive-team: 69.375rem;

.header {
  position: relative;
  background: linear-gradient(180deg, #62264A 0%, rgba(98, 38, 74, 0) 100%), linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(/images/hero-bg.webp);
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
      width: 184px;

      @media (min-width: $responsive-large-tablet) {
        left: 50%;
        bottom: -6.5rem;
        width: 389px;
      }
    }

    &--feet {
      position: absolute;
      left: calc(50% - 1px);
      bottom: -15px;
      transform: translateX(-50%);
      z-index: 1;
      width: 47px;

      @media (min-width: $responsive-large-tablet) {
        left: calc(50% - 2px);
        bottom: -66px;
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
      min-height: 36rem;
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
      place-self: center;
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
  }

  &__signature {
    margin-top: 1rem;
    display: block;
    max-width: 5.5rem;
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
        background-image: url(/images/about-oval.svg);
        background-position: bottom;
        background-repeat: no-repeat;
        background-size: contain;
        height: 14.25rem;
        width: 14.25rem;
      }

      img {
        position: absolute;
        left: 50%;

        &.body {
          width: 256px;
          bottom: -7rem;
          transform: translateX(-50%);
        }

        &.feet {
          width: 43px;
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
          background-image: url(/images/about-oval.svg);
          background-position: bottom;
          background-repeat: no-repeat;
          background-size: contain;
          height: 33.5rem;
          width: 33.5rem;
        }

        img {
          position: absolute;
          left: 50%;
          pointer-events: none;

          &.body {
            width: 698px;
            bottom: -18rem;
            transform: translateX(-50%);
          }

          &.feet {
            width: 118px;
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
  max-width: 85.375rem;
  margin-inline: auto;
  background-color: #fff;
  padding: 3rem 1rem 14rem 1rem;

  @media (min-width: $responsive-small-desktop) {
    padding: 3rem 8rem 6rem 8rem;

    > div {
      display: grid;
      grid-template-columns: repeat(9, 1fr);
      min-height: 30rem;

      > div {
        &:nth-child(1) {
          grid-column: span 4;
          display: grid;
          place-items: center;
        }

        &:nth-child(2) {
          grid-column: span 5;
          position: relative;
        }
      }
    }
  }

  &__parrots {
    &--mobile {
      @media (min-width: $responsive-small-desktop) {
        display: none;
      }

      img {
        position: absolute;
        left: 50%;

        &.body {
          width: 261px;
          bottom: -2rem;
          transform: translateX(-50%);
        }

        &.feet {
          width: 34px;
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

          &.body {
            width: 757px;
            bottom: -10.75rem;
            transform: translateX(-50%);
          }

          &.feet {
            width: 80px;
            bottom: -9rem;
            z-index: 1;
            transform: translateX(calc(-50% - 2.35rem));
          }
        }
      }
    }
  }

  &__title {
    font-size: var(--font-size-subtitle);
    text-align: center;
    margin-top: 0;
    margin-bottom: 3rem;

    span {
      display: inline-block;

      @media (prefers-reduced-motion: no-preference) {
        @keyframes wow {
          0%, 24%, 100% {
            transform: scale(1) rotate(0deg);
          }
          6%, 10%, 14%, 18%, 22% {
            transform: scale(1.05) rotate(3deg);
          }
          8%, 12%, 16%, 20% {
            transform: scale(1.05) rotate(1deg);
          }
        }

        animation: wow 6s ease infinite;
        will-change: transform;
      }
    }
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

    @media (min-width: $responsive-small-desktop) {
      grid-template-columns: 1fr;
    }
  }

  .member {
    position: relative;
    max-width: 21.75rem;
    background-color: var(--mpc-light-grey);
    border-radius: 1rem;
    padding: 6rem 1rem 2rem 1rem;
    text-align: center;

    @media (prefers-reduced-motion: no-preference) {
      transition-property: transform, box-shadow;
      transition: transform ease 160ms;
      will-change: transform, box-shadow;
    }

    @media (min-width: $responsive-team) {
      padding: 2rem 1.5rem;
      text-align: left;
    }

    &:hover {
      box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.25);

      @media (prefers-reduced-motion: no-preference) {
        transform: scale(1.05) rotate(1deg);
      }
    }

    &--mobile {
      display: flex;
      flex-direction: column;
      text-decoration: none;

      @media (min-width: $responsive-team) {
        display: none;
      }
    }

    &--desktop {
      display: none;
      text-decoration: none;

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
      color: var(--mpc-text);
      font-weight: 500;
      margin-top: 0;
      margin-bottom: 0;
    }

    &__name {
      font-family: var(--font-family-luckiestguy);
      letter-spacing: normal;
      font-size: var(--font-size-body);
      color: var(--mpc-purple);
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
      margin: 0;
      display: flex;
      justify-content: center;

      @media (min-width: $responsive-team) {
        margin-top: 1.5rem;
      }

      svg {
        height: 2rem;
        width: 2rem;
        color: var(--mpc-medium-grey);
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

.faq {
  position: relative;
  background: linear-gradient(180deg, #ffd15b 0%, #ffcac5 100%);
  padding: 3rem 1rem 0 1rem;

  @media (min-width: $responsive-small-desktop) {
    padding: 6rem 8rem 0 8rem;
  }

  &__inner {
    max-width: 85rem;
    margin-inline: auto;
    display: grid;
    grid-template-columns: 1fr;

    @media (min-width: $responsive-small-desktop) {
      grid-template-columns: repeat(2, 1fr);
      min-height: 36rem;
    }

    > div:nth-child(1) {
      max-width: 50rem;
    }
  }

  &__title {
    font-size: var(--font-size-subtitle);
    text-align: center;
    margin-top: 0;
    margin-bottom: 3rem;
    position: relative;
    max-width: 32rem;
    margin-inline: auto;
    display: block;

    @media (prefers-reduced-motion: no-preference) {
      @keyframes skew-it {
        0%, 60%, 100% {
          transform: skew(0);
        }
        15% {
          transform: skew(20deg);
        }
        45% {
          transform: skew(-20deg);
        }
      }

      animation: skew-it 8s linear infinite;
      will-change: transform;
    }
  }

  &__text {
    position: relative;
    max-width: 30rem;
    margin-inline: auto;
    margin-bottom: 15rem;
    padding-inline: 1rem;
    font-size: var(--font-size-large);

    @media (min-width: $responsive-small-desktop) {
      max-width: 35.5rem;
      margin-top: 5.125rem;
      margin-bottom: 2.875rem;
      place-self: center;
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

    ul {
      padding-left: 0;
      list-style-type: none;
      margin: 0;
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }
  }

  &__parrots {
    &--mobile {
      position: relative;

      @media (min-width: $responsive-small-desktop) {
        display: none;
      }

      img {
        position: absolute;
        left: 50%;

        &.body {
          width: 256px;
          bottom: -2rem;
          transform: translateX(-50%);
        }

        &.feet {
          width: 36px;
          bottom: -1.15rem;
          z-index: 1;
          transform: translateX(calc(-50% - 1.67rem));
        }
      }
    }

    &--desktop {
      display: none;

      @media (min-width: $responsive-small-desktop) {
        display: block;
        position: relative;
        height: 100%;

        img {
          position: absolute;
          left: 50%;
          pointer-events: none;

          &.body {
            width: 634px;
            bottom: -5.5rem;
            transform: translateX(-50%);
          }

          &.feet {
            width: 91px;
            bottom: -3.4rem;
            z-index: 1;
            transform: translateX(calc(-50% - 4.15rem));
          }
        }
      }
    }
  }
}
</style>
