<template>
  <section>
    <h2 class="orange-gradient-text title">69 hours left...</h2>
    <p class="timer"># days<span>,</span> # hours<span>,</span> # minutes<span>,</span> # seconds</p>
    <card class="calculator">
      <div class="calculator__video">
        <video width="176" height="176" autoplay loop muted preload="auto" poster="/_nuxt/assets/images/pre-reveal-poster.png">
          <source src="~/assets/images/pre-reveal.mp4" type="video/mp4">
        </video>
        <div class="calculator__price">
          <img src="~assets/images/069-price.gif" alt="" height="48" width="48" />
          <span class="sr-only">0.069 ethereum</span>
        </div>
      </div>
      <p class="calculator__remaining"><span>2</span> parrots minted so far</p>
      <h3 class="calculator__title">Mint yours now!</h3>
      <p v-if="$store.state.connectionError" class="calculator__error" role="alert" aria-live="assertive">{{ $store.state.connectionError }}</p>
      <btn v-if="!isConnected" class="calculator__btn" :disabled="!isWalletInstalled" @click="connect()" :is-loading="$store.state.isConnectingToWallet" icon="wallet">Connect Wallet</btn>
      <template v-else>
        <div class="calculator__buttons">
          <button class="calculator__button" @click="parrotsToMint -= 2">
            <span class="sr-only">Decrease by 2</span>
            <svg-icon name="minus" />
          </button>
          <span class="calculator__parrots-to-mint">{{ parrotsToMint }}</span>
          <button class="calculator__button" @click="parrotsToMint += 2">
            <span class="sr-only">Increase by 2</span>
            <svg-icon name="plus" />
          </button>
        </div>
        <btn class="calculator__btn" @click="mintParrots()" :is-loading="isClaimingNFT">Mint {{ parrotsToMint }} <span class="sr-only">parrots</span> for {{ calculateEthereum }} <span class="sr-only">ethereum</span></btn>
      </template>
      <ul class="calculator__links">
        <li>
          <a class="link" :href="config.SCAN_LINK" target="_blank">Verified Smart Contract</a>
        </li>
        <li>
          <button class="link" @click="$store.commit('setShowTandCsModal', true)">Terms & Conditions</button>
        </li>
      </ul>
    </card>
    <ul class="links">
      <li>
        <a class="link" :href="config.SCAN_LINK" target="_blank">Verified Smart Contract</a>
      </li>
      <li>
        <button class="link" @click="$store.commit('setShowTandCsModal', true)">Terms & Conditions</button>
      </li>
    </ul>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import { ethers } from 'ethers';
import Btn from './Btn.vue'
import Card from './Card.vue'
import config from '@/config.json'
import { IState } from '@/store'

export default Vue.extend({
  name: 'DuringMintCalculator',
  components: { Btn, Card },
  data () {
    return {
      config,
      isWalletInstalled: false,
      isCorrectNetwork: true,
      parrotsToMint: 2
    }
  },
  watch: {
    parrotsToMint () {
      if (this.parrotsToMint < 2) {
        this.parrotsToMint = 2
      }
      else if (this.parrotsToMint > 10) {
        this.parrotsToMint = 10
      }
      else if (this.parrotsToMint % 2 !== 0) {
        this.parrotsToMint = 2 * Math.round(this.parrotsToMint / 2)
      }
    }
  },
  async mounted () {
    this.$store.commit("setSuccessfulMint", null)
    this.isWalletInstalled = await this.$store.dispatch("isAWalletInstalled")
    this.isCorrectNetwork = await this.$store.dispatch("isCorrectNetwork")
    if (await this.$store.dispatch("checkIfConnected")) {
      await this.$store.dispatch("getContractState")
      await this.$store.dispatch("getUserContractState")
    }

    if (window.ethereum) {
      window.ethereum.on("accountsChanged", async (accounts: string[]) => {
        if (accounts.length === 0) {
          this.$store.commit('setAccount', null)
          this.$store.commit("setConnectionError", "Wallet was disconnected.")
        }
        else {
          this.$store.commit('setAccount', accounts[0])
          await this.$store.dispatch("getUserContractState")
          await this.$store.dispatch("getContractState")
        }
      })

      window.ethereum.on('chainChanged', async () => {
        this.isCorrectNetwork = await this.$store.dispatch("isCorrectNetwork")
      })
    }
  },
  computed: {
    isConnected (): boolean {
      return (this.$store.state as IState).account !== null
    },
    isClaimingNFT (): boolean {
      return (this.$store.state as IState).isClaimingNFT
    },
    calculateEthereum (): number {
      return ((0.069 * 1000) * (this.parrotsToMint / 2)) / 1000
    }
  },
  methods: {
    async connect (): Promise<void> {
      await this.$store.dispatch("connect", true)
    },
    mintParrots (): void {
      window.alert("Minting... not really, but soon!")
    }
  }
})
</script>

<style lang="scss" scoped>
.title {
  font-size: var(--font-size-title);
  text-align: center;
  margin: 0;

  @media (min-width: $responsive-standard-tablet) {
    text-align: left;
    margin-bottom: 0.5rem;
  }
}

.timer {
  color: #fff;
  text-align: center;
  margin-top: 0;
  margin-bottom: 3rem;
  font-weight: 700;

  span {
    color: rgba(255,255,255,0.6)
  }

  @media (min-width: $responsive-standard-tablet) {
    text-align: left;
    margin-bottom: 0.5rem;
  }
}

.calculator {
  position: relative;
  
  @media (min-width: $responsive-standard-tablet) {
    min-width: 33.75rem;
    padding-left: 12rem;
  }

  &__video {
    height: 6.5rem;
    width: 6.5rem;
    border: 4px solid #fff;
    position: absolute;
    top: -2rem;
    left: 50%;
    transform: translateX(-50%);

    @media (min-width: $responsive-standard-tablet) {
      border-width: 8px;
      height: 12rem;
      width: 12rem;
      top: unset;
      transform: unset;
      left: -2rem;
      filter: drop-shadow(8px 8px 0px rgba(0, 0, 0, 0.05));
    }
  }

  &__price {
    position: absolute;
    height: 4rem;
    width: 4rem;
    bottom: -2rem;
    right: -2rem;
  }

  &__remaining {
    margin-top: 5.5rem;
    margin-bottom: 0;
    font-family: var(--font-family-luckiestguy);
    text-align: center;
    color: #767676;

    @media (min-width: $responsive-standard-tablet) {
      margin-top: 0;
      font-size: var(--font-size-large);
      text-align: left;
    }

    span {
      color: #3b863d;
    }
  }

  &__title {
    color: var(--mpc-purple);
    font-size: var(--font-size-heading);
    line-height: 1.75rem;
    margin-top: 0;
    margin-bottom: 0.5rem;
    text-align: center;

    @media (min-width: $responsive-standard-tablet) {
      text-align: left;
      font-size: 1.75rem;
    }
  }

  &__error {
    font-size: var(--font-size-small);
    color: var(--mpc-red);
    margin-top: 0;
    margin-bottom: 0.25rem;
    text-align: center;

    @media (min-width: $responsive-standard-tablet) {
      text-align: left;
    }
  }

  &__btn {
    align-self: center;

    @media (min-width: $responsive-standard-tablet) {
      align-self: flex-start;
    }
  }

  &__buttons {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1.75rem;
    margin-bottom: 2rem;

    @media (min-width: $responsive-standard-tablet) {
      justify-content: flex-start;
      margin-top: 0.75rem;
      margin-bottom: 0.75rem;
    }
  }

  &__button {
    cursor: pointer;
    display: grid;
    place-items: center;
    padding: 0.5rem;
    width: 3.25rem;
    height: 3.25rem;
    border-radius: 50%;
    border: 5px solid var(--mpc-darker-blue);
    color: var(--mpc-darker-blue);
    background-color: #fff;
    transition: transform 160ms ease;
    will-change: transform;

    &:last-of-type {
      color: #fff;
      background-color: var(--mpc-darker-blue);
    }

    &:active {
      transform: scale(0.9);
    }
  }

  &__parrots-to-mint {
    font-family: var(--font-family-luckiestguy);
    font-size: var(--font-size-title);
    color: var(--mpc-darker-blue);
    min-width: 2.875rem;
    text-align: center;
    user-select: none;
  }

  &__links {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.25rem;
    padding-left: 0;
    list-style-type: none;
    font-size: var(--font-size-small);
    margin-top: 1.5rem;
    margin-bottom: 0;

    @media (min-width: 373px) {
      flex-direction: row;

      li {
        &:not(:nth-child(1)) {
          &::before {
            content: '·';
            color: var(--mpc-text);
            margin-right: 0.25rem;
          }
        }
      }
    }

    @media (min-width: $responsive-standard-tablet) {
      display: none;
    }
  }
}

.links {
  display: none;

  @media (min-width: $responsive-standard-tablet) {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 0.25rem;
    padding-left: 0;
    list-style-type: none;
    margin-top: 0.25rem;
    margin-bottom: 0;
    font-size: var(--font-size-small);

    li {
      &:not(:nth-child(1)) {
        &::before {
          content: '·';
          color: #fff;
          margin-right: 0.25rem;
        }
      }

      ::v-deep .link {
        color: #fff;
        font-weight: 400;
      }
    }
  }
}
</style>
