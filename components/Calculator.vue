<template>
  <div id="mint" class="calculator">
    <h2>Clubhouse now open!</h2>
    <p v-if="$store.state.contractState">
      <strong>{{ $store.state.contractState.numberMinted }}</strong>/{{ $store.state.contractState.maxSupply }}
    </p>
    <p v-if="$store.state.connectionError" class="calculator__error">{{ $store.state.connectionError }}</p>
    <p v-if="!$store.state.connectionError && !isConnected">Connect your wallet to begin.</p>
    <div v-if="!isConnected">
      <btn :disabled="!isWalletInstalled" @click="connect()" :is-loading="$store.state.isConnectingToWallet" icon="wallet">Connect Wallet</btn>
    </div>
    <template v-if="isConnected">
      <div class="calculator__buttons">
        <btn color="grey" square inverted :disabled="parrotNumber <= 1 || isClaimingNFT" @click="parrotNumber--">
          -
          <span class="sr-only">Minus 1 parrot</span>
        </btn>
        <label for="noOfParrots" class="sr-only">Number of parrots</label>
        <input id="noOfParrots" v-model="parrotNumber" readonly>
        <btn color="grey" square :disabled="!$store.state.contractState || ($store.state.contractState && (parrotNumber >= $store.state.contractState.maxMintPerWallet || parrotNumber >= $store.state.contractState.supplyLeft || isClaimingNFT))" @click="parrotNumber++">
          +
          <span class="sr-only">Plus 1 parrot</span>
        </btn>
      </div>
      <p role="text" id="how-many-parrots">
        Mint <strong>{{ parrotNumber }}</strong> parrot{{ parrotNumber !== 1 ? 's' : '' }} for <img class="calculator__ethereum" aria-hidden="true" src="~assets/images/ethereum-logo.svg" alt="Ethereum logo"> <strong>{{ calculateEthereum }}</strong> <span class="sr-only">ethereum</span> (+ gas fee)
      </p>
      <btn class="calculator__cta" @click="mintParrots()" :is-loading="isClaimingNFT" :disabled="!isCorrectNetwork" icon="wallet" aria-describedby="how-many-parrots">
        Mint parrot{{ parrotNumber !== 1 ? 's' : '' }}
      </btn>
    </template>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { ethers } from 'ethers';
import { Btn } from '@/components'
import { IContractState } from '@/store'

export default Vue.extend({
  name: 'Calcualtor',
  components: { Btn },
  data () {
    return {
      parrotNumber: 1,
      isWalletInstalled: false,
      isCorrectNetwork: true
    }
  },
  computed: {
    isConnected (): boolean {
      return this.$store.state.account !== null
    },
    isClaimingNFT (): boolean {
      return this.$store.state.isClaimingNFT
    },
    calculateEthereum (): string {
      if (!this.$store.state.contractState?.priceInWei) return ''
      // @ts-ignore
      const tempPriceInWei: ethers.BigNumber = {
        _hex: `0x${(parseInt((this.$store.state.contractState as IContractState).priceInWei._hex, 16) * this.parrotNumber).toString(16)}`,
        _isBigNumber: (this.$store.state.contractState as IContractState).priceInWei._isBigNumber
      }
      return ethers.utils.formatEther(tempPriceInWei)
    }
  },
  async mounted () {
    if (await this.$store.dispatch("checkIfConnected")) {
      await this.$store.dispatch("getContractState")
    }
    this.isWalletInstalled = await this.$store.dispatch("isAWalletInstalled")
    this.isCorrectNetwork = await this.$store.dispatch("isCorrectNetwork")

    if (window.ethereum) {
      window.ethereum.on("accountsChanged", (accounts: string) => {
        if (accounts.length === 0) {
          this.$store.commit('setAccount', null)
          this.$store.commit("setConnectionError", "Wallet was disconnected.")
        }
        else {
          this.$store.commit('setAccount', accounts[0])
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
    },
    async mintParrots (): Promise<void> {
      await this.$store.dispatch("mintParrots", this.parrotNumber);
    }
  }
})
</script>

<style lang="scss" scoped>
.calculator {
  background-color: #fff;
  max-width: 100%;
  border-radius: var(--border-radius-standard);
  padding: 2rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;

  @media (min-width: $responsive-large-mobile) {
    max-width: 23rem;
    min-width: 23rem;
  }

  h2 {
    font-size: var(--font-size-subtitle);
    margin-block: 0;
  }

  p {
    text-align: center;
    margin: 0;
  }

  &__error {
    font-size: var(--font-size-small);
    color: var(--mpc-red);
    margin-block: 0;
  }

  &__buttons {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-block: 0.75rem;

    @media (min-width: $responsive-large-mobile) {
      margin-block: 1rem;
    }
  }

  input {
    height: 4rem;
    width: 4rem;
    border: 0;
    border-radius: var(--border-radius-standard);
    box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.25);
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
