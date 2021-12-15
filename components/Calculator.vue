<template>
  <div class="calculator">
    <h2>Minting now available!</h2>
    <div v-if="!connected">
      <p v-if="$store.state.connectionError === null">Connect your Metamask wallet to begin.</p>
      <p v-else>{{ $store.state.connectionError }}</p>
      <btn :disabled="!isMetamaskInstalled" @click="connect()">Connect Wallet</btn>
    </div>
    <template v-else>
      <div class="calculator__buttons">
        <btn color="green" square inverted :disabled="parrotNumber <= 1" @click="parrotNumber--">
          -
          <span class="sr-only">Minus 1 parrot</span>
        </btn>
        <label for="noOfParrots" class="sr-only">Number of parrots</label>
        <input id="noOfParrots" v-model="parrotNumber" readonly>
        <btn color="green" square :disabled="parrotNumber >= 5" @click="parrotNumber++">
          +
          <span class="sr-only">Plus 1 parrot</span>
        </btn>
      </div>
      <p role="text">
        Mint <strong>{{ parrotNumber }}</strong> parrot{{ parrotNumber !== 1 ? 's' : '' }} for <img class="calculator__ethereum" aria-hidden="true" src="~assets/images/ethereum-logo.svg" alt="Ethereum logo"> <strong>{{ calculateEthereum() }}</strong> <span class="sr-only">ethereum</span> (+ gas fee)
      </p>
      <btn class="calculator__cta" @click="mintParrots()">
        Mint parrot{{ parrotNumber !== 1 ? 's' : '' }}
      </btn>
    </template>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Btn } from '@/components'

export default Vue.extend({
  name: 'Calcualtor',
  components: { Btn },
  data () {
    return {
      parrotNumber: 1,
      ethereumValuePerParrot: 0.075
    }
  },
  computed: {
    isMetamaskInstalled (): boolean {
      const { ethereum } = window
      if (!ethereum) this.$store.commit("setConnectionError", "Metamask is not installed.")
      return ethereum
    },
    connected (): boolean {
      return this.$store.state.account !== null
    }
  },
  mounted () {
    this.$store.dispatch("checkIfConnected")
  },
  methods: {
    async connect (): Promise<void> {
      await this.$store.dispatch("connect", true)
    },
    mintParrots (): void {
      window.alert("Sqwark sqwark! Minting parrots! (Not really, it's just pretend for now)")
    },
    calculateEthereum (): number {
      const tempEthereumValuePerParrot = this.ethereumValuePerParrot * 1000 // Prevents floating point calculation errors
      const value = tempEthereumValuePerParrot * this.parrotNumber
      return Number((value / 1000).toFixed(3))
    }
  }
})
</script>

<style lang="scss" scoped>
.calculator {
  background-color: #fff;
  max-width: 100%;
  margin-top: 4rem;
  border-radius: var(--border-radius-standard);
  padding: 2rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: $responsive-large-mobile) {
    max-width: 23rem;
    min-width: 23rem;
    padding-inline: 3.25rem;
  }

  @media (min-width: $responsive-large-tablet) {
    background-color: rgba(255, 255, 255, 0.9);
  }

  h2 {
    font-size: var(--font-size-heading);
    margin: 0;
  }

  &__buttons {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-block: 1rem;

    @media (min-width: $responsive-large-mobile) {
      margin-block: 1.5rem;
    }
  }

  input {
    height: 4rem;
    width: 4rem;
    border: 0;
    border-radius: var(--border-radius-standard);
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
    font-weight: 800;
    font-size: var(--font-size-heading);
    text-align: center;
    cursor: default;

    &:focus {
      outline: none;
    }
  }

  &__ethereum {
    width: 1rem;
    height: 1.625rem;
    vertical-align: middle;
  }

  &__cta {
    margin-top: 1rem;
  }
}
</style>
