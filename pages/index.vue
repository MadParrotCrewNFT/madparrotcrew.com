<template>
  <div>
    <header id="mint" class="header">
      <div class="header__inner">
        <PreMintCalculator v-if="showPreMintCalculator" class="header__calculator" />
        <DuringMintCalculator v-else-if="showDuringMintCalculator" class="header__calculator" />
        <PostMintCalculator v-else-if="showPostMintCalculator" class="header__calculator" />
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
            <template v-if="showPreMintCalculator">Be Ready<span>.</span><span>.</span><span>.</span></template>
            <template v-else-if="showDuringMintCalculator">
              <template v-if="($store.state.mintTimeLeft.days > 0 && $store.state.mintTimeLeft.hours > 0) || $store.state.mintTimeLeft.hours > 0">
                {{ ($store.state.mintTimeLeft.days * 24) + $store.state.mintTimeLeft.hours }} hour{{ $store.state.mintTimeLeft.hours === 1 ? '' : 's' }} left to mint!
              </template>
              <template v-else-if="$store.state.mintTimeLeft.minutes > 0">
                {{ $store.state.mintTimeLeft.minutes }} minute{{ $store.state.mintTimeLeft.minutes === 1 ? '': 's' }} left to mint!
              </template>
              <template v-else>
                {{ $store.state.mintTimeLeft.seconds }} second{{ $store.state.mintTimeLeft.seconds === 1 ? '': 's' }} left to mint!
              </template>
            </template>
            <template v-else-if="showPostMintCalculator">{{ $store.state.contractState && $store.state.contractState.numberMinted }} Mad Parrots Made It</template>
          </h2>
          <template v-if="showPreMintCalculator">
            <p>
              <strong>Minting 2 parrots will cost 0.069<span aria-hidden="true">e</span><span class="sr-only">ethereum</span></strong>. Yes you read that right, you get 2.
            </p>
            <p>
              Once the time is up, <strong>the unclaimed parrots will be sent to a furnace</strong> that lives in the basement of my local KFP (<strong>burned</strong>).
            </p>
            <p>
              Obviously it goes without saying that <strong>you’ll get the IP rights</strong> to the parrots you claim.
            </p>
          </template>
          <template v-else-if="showDuringMintCalculator">
            <p>
              There's only <strong>a limited amount of parrots available</strong> and you've got 69 hours to claim yours so... chop chop!
            </p>
            <p>
              Once the time is up, <strong>the unclaimed parrots will be sent to a furnace</strong> that lives in the basement of my local KFP (<strong>burned</strong>).
            </p>
            <p>
              Obviously it goes without saying that <strong>you get the IP rights</strong> to the parrots you claim.
            </p>
          </template>
          <template v-else-if="showPostMintCalculator">
            <p>
              There were a limited amount of parrots available and <strong>after the 69 hour mint window, the community managed to save {{ $store.state.contractState && $store.state.contractState.numberMinted }} parrots.</strong>
            </p>
            <p>
              Unfortunately, <strong>the unclaimed parrots were sent to a furnace</strong> that lives in the basement of my local KFP (burned).
            </p>
            <p>
              IP rights were given to those who claimed parrots and it should go without saying that the same rights will be transferred to anyone who buys a parrot on the open market <strong>(own the NFT, own the IP rights)</strong>.
            </p>
            <p>Thank you so much for supporting my art <span style="font-family: sans-serif; color: #C82323;">❤</span></p>
            <a class="about__signature" href="https://twitter.com/iamsheftali" target="_blank" rel="noopener nofollow">
              <nuxt-img src="/images/sheftali-signature.svg" loading="lazy" width="86" height="68" alt="Sheftali" />
              <span class="sr-only">Sheftali</span>
            </a>
          </template>
        </div>
        <div class="about__parrots--mobile">
          <nuxt-img class="body" src="/images/about-parrots.png" alt="A pair of Mad Parrots" height="921" width="698" loading="lazy" sizes="4kdesktop:256px" format="webp" />
          <nuxt-img class="feet" src="/images/about-parrot-feet.png" alt="" height="174" width="118" loading="lazy" sizes="4kdesktop:43px" format="webp" />
        </div>
      </div>
    </section>
    <section id="team" class="team">
      <h2 class="team__title">The team... Behind the <span>crew</span></h2>
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
    </section>
    <section id="frens" class="frens">
      <div>
        <div class="frens__card">
          <nuxt-img class="frens__logo" src="/images/mpc.gif" alt="MPC" height="100" width="100" loading="lazy" />
          <h2 class="frens__title">Let's be frens</h2>
          <p class="frens__para">
            We got a Discord, pop in and say hello! We’d love to hear from you.
          </p>
          <btn class="frens__btn" icon="discord" white :to="config.SOCIAL.DISCORD">Join us in Discord</btn>
          <div class="frens__parrots--mobile">
            <nuxt-img class="body" src="/images/team-parrots.png" alt="A couple of Mad Parrots" height="666" width="757" loading="lazy" sizes="4kdesktop:261px" format="webp" />
            <nuxt-img class="feet" src="/images/team-parrots-feet.png" alt="" height="144" width="98" loading="lazy" sizes="4kdesktop:34px" format="webp" />
          </div>
        </div>
      </div>
      <div>
        <div class="frens__parrots--desktop">
          <nuxt-img class="body" src="/images/team-parrots.png" alt="A couple of Mad Parrots" height="666" width="757" loading="lazy" sizes="4kdesktop:757px" format="webp" />
          <nuxt-img class="feet" src="/images/team-parrots-feet.png" alt="" height="144" width="98" loading="lazy" sizes="4kdesktop:98px" format="webp" />
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
              <template v-if="showPreMintCalculator || showDuringMintCalculator">
                <p>
                  There’s a <strong>total of 6969</strong> randomly generated Mad Parrots (with <strong>30 being held back</strong> for giveaways and early supporters), <strong>max 10 per wallet, 0.069<span aria-hidden="true">e</span> <span class="sr-only">ethereum</span> for 2</strong>.
                </p>
                <p>
                  Whatever Mad Parrots are left after the 69 hour minting window will be sent to the furnace (burnt).
                </p>
              </template>
              <template v-else-if="showPostMintCalculator">
                <p>
                  There were a <strong>total of 6969</strong> randomly generated Mad Parrots (with <strong>30 held back</strong> for giveaways and early supporters). <strong>The max someone was able to mint per wallet was 10 at 0.069e for 2</strong>.
                </p>
                <p>
                  Whatever Mad Parrots were left after the 69 hour mint window were sent to the furnace (burnt).
                </p>
              </template>
            </Accordion>
            <Accordion heading="Presale list?" heading-tag="h3" id="faq-2">
              <p v-if="showPreMintCalculator || showDuringMintCalculator">
                Negative, everyone gets the same chance to mint.
              </p>
              <p v-else-if="showPostMintCalculator">
                Negative, everyone had the same chance to mint.
              </p>
            </Accordion>
            <Accordion heading="Does this awesome looking parrot have any utility?" heading-tag="h3" id="faq-3">
              <p>
                Not for the moment, but wouldn’t rule it out for the future (I got ideas!)
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
import { Accordion, Btn, Logo, PreMintCalculator, DuringMintCalculator, PostMintCalculator } from '@/components'
import siteconfig from '@/siteconfig.json'
import config from '@/config.json'
import { IState } from '@/store'

interface ITeamMember {
  image: string;
  role: string;
  name: string;
  description: string;
  twitter: `https://${string}`
}

export default Vue.extend({
  components: { Accordion, Btn, Logo, PreMintCalculator, DuringMintCalculator, PostMintCalculator },
  data () {
    return {
      siteconfig,
      config,
      interval: undefined as undefined | number
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
          name: 'Gerry',
          image: 'gerry.jpg',
          role: 'Adviser',
          description: 'Long-time fren in the space who’s always shooting straight and giving top advice.',
          twitter: 'https://twitter.com/nftgerry'
        },
        {
          name: 'Fancyrats',
          image: 'fancyrats.jpg',
          role: 'Web3 Developer',
          description: 'Wrote the smart contract that y’all will be (hopefully) minting from.',
          twitter: 'https://twitter.com/fancyrats_eth'
        },
        {
          name: 'Jack Domleo',
          image: 'jackdomleo.jpg',
          role: 'Web2 Developer',
          description: 'Built the website as well as endured my constant tweak requests.',
          twitter: 'https://twitter.com/jackdomleo7'
        },
        {
          name: 'Dejen',
          image: 'dejen.jpg',
          role: 'Community Manager',
          description: 'Sounds like she’s always smiling and that’s why she’s the the best for this role.',
          twitter: 'https://twitter.com/dejen_art'
        },
        {
          name: 'Zanko',
          image: 'zanko.jpg',
          role: 'Discord Server Wizard',
          description: 'Set up, configured and maintains the Discord server. Parrots love Zanko.',
          twitter: 'https://twitter.com/rupica3'
        }
      ]
    },
    showPreMintCalculator (): boolean {
      return true
      // const startDateTime = (this.$store.state as IState).mintStartDateTime.getTime()
      // const nowDateTime = new Date().getTime()

      // if (nowDateTime < startDateTime) return true
      // else return false
    },
    showDuringMintCalculator (): boolean {
      const startDateTime = (this.$store.state as IState).mintStartDateTime.getTime()
      const nowDateTime = new Date().getTime()
      const endDateTime = (this.$store.state as IState).mintEndDateTime.getTime()
      const hasSoldOut = (this.$store.state as IState).contractState?.numberMinted! >= (this.$store.state as IState).contractState?.maxSupply!

      if (
        (nowDateTime >= startDateTime && nowDateTime <= endDateTime && !hasSoldOut)
        || (nowDateTime >= startDateTime && !(this.$store.state as IState).contractState)
      ) {
        return true
      }
      else {
        return false
      }
    },
    showPostMintCalculator (): boolean {
      const nowDateTime = new Date().getTime()
      const endDateTime = (this.$store.state as IState).mintEndDateTime.getTime()
      const hasSoldOut = (this.$store.state as IState).contractState?.numberMinted! >= (this.$store.state as IState).contractState?.maxSupply!

      if (nowDateTime >= endDateTime || hasSoldOut) {
        return true
      }
      else {
        return false
      }
    }
  },
  async mounted () {
    if (!this.showPreMintCalculator && this.showDuringMintCalculator) {
      this.$store.commit("setSuccessfulMint", null)
      await this.$store.dispatch("isAWalletInstalled")
      await this.$store.dispatch("checkIfWalletConnected")
      await this.$store.dispatch("isCorrectNetwork")
      if (this.$store.state.walletIsConnected) {
        await this.$store.dispatch("getContractState")
      }

      if (window.ethereum) {
        window.ethereum.on("accountsChanged", async (accounts: string[]) => {
          if (accounts.length === 0) {
            this.$store.commit('setAccount', null)
            this.$store.dispatch('isAWalletInstalled')
            this.$store.dispatch('checkIfWalletConnected')
            this.$store.dispatch('isCorrectNetwork')
            this.$store.commit("setError", "Wallet was disconnected.")
            this.$store.commit("setContractState", null)
          }
          else {
            this.$store.commit('setAccount', accounts[0])
            await this.$store.dispatch("getContractState")
          }
        })

        window.ethereum.on('chainChanged', async () => {
          await this.$store.dispatch("isCorrectNetwork")
        })
      }

      this.interval = window.setInterval(() => {
        let diff = (this.$store.state.mintEndDateTime as Date).getTime() - new Date().getTime()

        let days = Math.floor(diff / (1000 * 60 * 60 * 24));
        let hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((diff % (1000 * 60)) / 1000);

        days = days <= 0 ? 0 : days
        hours = hours <= 0 ? 0 : hours
        minutes = minutes <= 0 ? 0 : minutes
        seconds = seconds <= 0 ? 0 : seconds

        this.$store.commit("setMintTimeLeft", {
          days,
          hours,
          minutes,
          seconds
        })

        if (diff < 0) {
          this.$store.commit("setMintTimeEnded", true)
          window.clearInterval(this.interval)
        }
      }, 1000);
    }
  },
  destroyed () {
    window.clearInterval(this.interval)
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

    span {
      @keyframes bounce {
        0%, 20%, 100% {
          transform: translateY(0);
        }
        10% {
          transform: translateY(-0.25rem);
        }
      }

      display: inline-block;
      animation: bounce linear 3s infinite 3s;

      &:nth-child(2) {
        animation-delay: 3.15s;
      }

      &:nth-child(3) {
        animation-delay: 3.3s;
      }
    }
  }

  &__signature {
    margin-top: 1rem;
    display: block;
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
  background-color: #fff;
  padding: 3rem 1rem;

  &__title {
    font-size: var(--font-size-subtitle);
    text-align: center;
    margin-top: 0;
    margin-bottom: 3rem;

    span {
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

      display: inline-block;
      animation: wow 6s ease infinite;
      will-change: transform;
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
    transition-property: transform, box-shadow;
    transition: transform ease 160ms;

    @media (min-width: $responsive-team) {
      padding: 2rem 1.5rem;
      text-align: left;
    }

    &:hover {
      transform: scale(1.05) rotate(1deg);
      box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.25);
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
        transition: color 160ms ease;
        will-change: color;

        &:hover,
        &:active {
          color: var(--mpc-dark-blue);
        }
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
  max-width: 85.375rem;
  margin-inline: auto;

  @media (min-width: $responsive-small-desktop) {
    display: grid;
    grid-template-columns: repeat(9, 1fr);
    padding: 3rem 8rem 6rem 8rem;
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

  &__card {
    position: relative;
    background-color: var(--mpc-blue);
    padding: 6rem 1rem 0 1rem;
    text-align: center;

    @media (min-width: $responsive-small-desktop) {
      max-width: 27.75rem;
      border-radius: 1rem;
      padding: 2rem 4rem 2rem 1.5rem;
      text-align: left;
      animation: float-up-down linear 5s infinite;
      will-change: transform;

      @keyframes float-up-down {
        25% {
          transform: translateY(-0.5rem);
        }
        75% {
          transform: translateY(0.5rem);
        }
        0%, 100% {
          transform: translateY(0);
        }
      }
    }
  }

  &__logo {
    position: absolute;
    top: -1.5rem;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 50%;

    @media (min-width: $responsive-small-desktop) {
      left: unset;
      transform: unset;
      right: 1.5rem;
    }
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

    @media (min-width: $responsive-small-desktop) {
      margin-bottom: 0;
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
    @keyframes question-mark {
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

    font-size: var(--font-size-subtitle);
    text-align: center;
    margin-top: 0;
    margin-bottom: 3rem;
    position: relative;
    max-width: 32rem;
    margin-inline: auto;
    animation: question-mark 8s linear infinite;
    display: block;
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
