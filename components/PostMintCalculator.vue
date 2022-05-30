<template>
  <section>
    <h2 class="orange-gradient-text title">Times's up, mint is over!</h2>
    <card class="calculator">
      <div class="calculator__img">
        <img src="~/assets/images/mint-ended-poster.png" alt="" height="176" width="176" />
        <img src="~/assets/images/mint-ended-x.png" alt="" height="176" width="176" />
      </div>
      <p class="calculator__minted"><span>3484</span> were minted in total</p>
      <h3 class="calculator__title">You can still join us!</h3>
      <btn class="calculator__btn" :to="config.OPENSEA_LINK" icon="opensea">Visit marketplace</btn>
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
  name: 'PostMintCalculator',
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

.calculator {
  position: relative;
  
  @media (min-width: $responsive-standard-tablet) {
    min-width: 33.75rem;
    padding-left: 12rem;
  }

  &__img {
    display: none;

    @media (min-width: $responsive-standard-tablet) {
      display: block;
      position: absolute;
      border: 8px solid #fff;
      height: 12rem;
      width: 12rem;
      left: -2rem;
      bottom: -2rem;
      filter: drop-shadow(8px 8px 0px rgba(0, 0, 0, 0.05));
    }

    img {
      position: absolute;
      top: 0;
      left: 0;
    }
  }

  &__minted {
    margin-top: 0;
    margin-bottom: 0;
    font-family: var(--font-family-luckiestguy);
    text-align: center;
    color: #767676;

    @media (min-width: $responsive-standard-tablet) {
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

    @media (min-width: 375px) {
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
