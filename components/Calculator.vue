<template>
  <div id="mint" class="calculator">
    <div v-if="hasSoldOut()" class="calculator__sold-out">
      <!-- Only show this section if all 10,000 parrots have been minted -->
      <h2 v-if="$store.state.contractState.maxSupply === 10000">Sold out</h2>
      <h2 v-else>This stage has sold out</h2>
      <p v-if="$store.state.contractState && $store.state.successfulMint" class="calculator__success">Successfully minted {{ $store.state.successfulMint }} {{ $store.state.successfulMint === 1 ? 'parrot' : 'parrots' }}! Check your wallet shortly</p>
      <p v-if="$store.state.contractState">
        <strong>{{ commaNumber($store.state.contractState.numberMinted) }}</strong> / {{ commaNumber($store.state.contractState.maxSupply) }}
      </p>
      <p>
        All Mad Parrots have been claimed<template v-if="$store.state.successfulMint"> for this stage</template>, but you can still get one on the secondary marketplace.
      </p>
      <btn :to="config.OPENSEA_LINK" icon="opensea-white">OpenSea collection</btn>
    </div>
    <template v-else>
      <h2>Clubhouse now open!</h2>
      <p v-if="$store.state.contractState && $store.state.successfulMint" class="calculator__success">Successfully minted {{ $store.state.successfulMint }} {{ $store.state.successfulMint === 1 ? 'parrot' : 'parrots' }}! Check your wallet shortly</p>
      <p v-if="$store.state.connectionError" class="calculator__error">{{ $store.state.connectionError }}</p>
      <template v-if="!isConnected">
        <p v-if="!$store.state.connectionError">Connect your wallet to begin.</p>
        <div>
          <btn :disabled="!isWalletInstalled" @click="connect()" :is-loading="$store.state.isConnectingToWallet" icon="wallet">Connect Wallet</btn>
        </div>
      </template>
      <template v-else>
        <spinner v-if="!hasGottenSmartContract()" style="height: 2rem; width: 2rem;" />
        <template v-else-if="isWhitelistActiveAndNotWhitelistedUser()">
          <p>
            <strong>{{ commaNumber($store.state.contractState.numberMinted) }}</strong> / {{ commaNumber($store.state.contractState.maxSupply) }}
          </p>
          <p class="calculator__error">You are not a whitelisted user, please come back later during public mint</p>
        </template>
        <template v-else-if="isPublicMintActive() || isWhitelistActiveAndWhitelistedUser()">
          <p>
            <strong>{{ commaNumber($store.state.contractState.numberMinted) }}</strong> / {{ commaNumber($store.state.contractState.maxSupply) }}
          </p>
          <p v-if="$store.state.userContractState && $store.state.userContractState.alreadyMinted > 0">
            You have already minted {{ $store.state.userContractState.alreadyMinted }} {{ $store.state.userContractState.alreadyMinted === 1 ? 'parrot' : 'parrots' }} <template v-if="$store.state.userContractState.maxAllowedToMint === 0">- the maximum</template>
          </p>
          <div class="calculator__buttons">
            <btn color="grey" square inverted :disabled="parrotNumber <= 1 || isClaimingNFT || $store.state.successfulMint" @click="parrotNumber--">
              -
              <span class="sr-only">Minus 1 parrot</span>
            </btn>
            <label for="noOfParrots" class="sr-only">Number of parrots</label>
            <input id="noOfParrots" v-model="parrotNumber" readonly>
            <btn color="grey" square :disabled="!$store.state.contractState || $store.state.successfulMint || ($store.state.contractState && $store.state.userContractState && (parrotNumber >= $store.state.userContractState.maxAllowedToMint || parrotNumber >= $store.state.contractState.supplyLeft || isClaimingNFT))" @click="parrotNumber++">
              +
              <span class="sr-only">Plus 1 parrot</span>
            </btn>
          </div>
          <p role="text" id="how-many-parrots">
            Mint <strong>{{ parrotNumber }}</strong> parrot{{ parrotNumber !== 1 ? 's' : '' }} for <img class="calculator__ethereum" aria-hidden="true" src="~assets/images/ethereum-logo.svg" alt="Ethereum logo"> <strong>{{ calculateEthereum }}</strong> <span class="sr-only">ethereum</span> (+ gas fee)
          </p>
          <btn class="calculator__cta" @click="mintParrots()" :is-loading="isClaimingNFT" :disabled="!isCorrectNetwork || $store.state.userContractState.maxAllowedToMint === 0 || $store.state.successfulMint" icon="wallet" aria-describedby="how-many-parrots">
            Mint parrot{{ parrotNumber !== 1 ? 's' : '' }}
          </btn>
        </template>
      </template>
    </template>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { ethers } from 'ethers';
// @ts-ignore
import commaNumber from 'comma-number'
import { Btn } from '@/components'
import Spinner from '@/components/Spinner.vue'
import { IState } from '@/store'
import config from '@/config.json'

export default Vue.extend({
  name: 'Calcualtor',
  components: { Btn, Spinner },
  data () {
    return {
      config,
      commaNumber,
      parrotNumber: 1,
      isWalletInstalled: false,
      isCorrectNetwork: true
    }
  },
  computed: {
    isConnected (): boolean {
      return (this.$store.state as IState).account !== null
    },
    isClaimingNFT (): boolean {
      return (this.$store.state as IState).isClaimingNFT
    },
    calculateEthereum (): string {
      if (!this.$store.state.contractState?.priceInWei) return ''
      // @ts-ignore
      const tempPriceInWei: ethers.BigNumber = {
        _hex: `0x${(parseInt((this.$store.state as IState).contractState!.priceInWei._hex, 16) * this.parrotNumber).toString(16)}`,
        _isBigNumber: (this.$store.state as IState).contractState!.priceInWei._isBigNumber
      }
      return ethers.utils.formatEther(tempPriceInWei)
    }
  },
  async mounted () {
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
    },
    async mintParrots (): Promise<void> {
      await this.$store.dispatch("mintParrots", this.parrotNumber);
    },
    hasGottenSmartContract (): boolean {
      return (this.$store.state as IState).contractState !== null && (this.$store.state as IState).userContractState !== null
    },
    hasSoldOut (): boolean {
      return (this.$store.state as IState).contractState !== null && (this.$store.state as IState).contractState!.numberMinted === (this.$store.state as IState).contractState!.maxSupply
    },
    isWhitelistActiveAndNotWhitelistedUser (): boolean {
      return (this.$store.state as IState).contractState !== null && (this.$store.state as IState).userContractState !== null && !(this.$store.state as IState).contractState!.isPublicMintActive && (this.$store.state as IState).contractState!.isWhitelistMintActive && !(this.$store.state as IState).userContractState!.isWhitelisted
    },
    isPublicMintActive (): boolean {
      return (this.$store.state as IState).contractState !== null && (this.$store.state as IState).userContractState !== null && (this.$store.state as IState).contractState!.isPublicMintActive
    },
    isWhitelistActiveAndWhitelistedUser (): boolean {
      return (this.$store.state as IState).contractState !== null && (this.$store.state as IState).userContractState !== null && !(this.$store.state as IState).contractState!.isPublicMintActive && (this.$store.state as IState).contractState!.isWhitelistMintActive && (this.$store.state as IState).userContractState!.isWhitelisted
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

  &__success {
    font-size: var(--font-size-small);
    color: var(--mpc-green);
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

  &__sold-out {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.25rem;

    h2 {
      font-size: var(--font-size-title);
    }

    ::v-deep .btn {
      margin-top: 1.25rem;
    }
  }
}
</style>
