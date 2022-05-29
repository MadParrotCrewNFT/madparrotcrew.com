<template>
  <section>
    <h2 class="orange-gradient-text title">69 hours left...</h2>
    <p class="timer"># days<span>,</span> # hours<span>,</span> # minutes<span>,</span> # seconds</p>
    <card class="calculator">
      <div class="calculator__video">
        <video width="240" height="240" autoplay loop muted preload="auto" poster="/_nuxt/assets/images/pre-reveal-poster.png">
          <source src="~/assets/images/pre-reveal.mp4" type="video/mp4">
        </video>
        <div class="calculator__price">
          <img src="~assets/images/069-price.gif" alt="" />
          <span class="sr-only">0.069 ethereum</span>
        </div>
      </div>
      <p class="calculator__remaining"><span>6969</span>/6969 remaining</p>
      <h3 class="calculator__title">Mint your parrot</h3>
      <p v-if="$store.state.connectionError" class="calculator__error" role="alert" aria-live="assertive">{{ $store.state.connectionError }}</p>
      <btn class="calculator__btn" :disabled="!isWalletInstalled" @click="connect()" :is-loading="$store.state.isConnectingToWallet" icon="wallet">Connect Wallet</btn>
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
import Btn from './Btn.vue'
import Card from './Card.vue'
import config from '@/config.json'

export default Vue.extend({
  name: 'DuringMintCalculator',
  components: { Btn, Card },
  data () {
    return {
      config,
      isWalletInstalled: false,
      isCorrectNetwork: true
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
  methods: {
    async connect (): Promise<void> {
      await this.$store.dispatch("connect", true)
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
      bottom: -2rem;
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
