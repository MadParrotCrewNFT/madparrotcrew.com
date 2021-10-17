<template>
  <div class="calculator">
    <h2>Join the posse</h2>
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
      Mint <strong>{{ parrotNumber }}</strong> parrot{{ parrotNumber !== 1 ? 's' : '' }} for <img class="calculator__etherum" aria-hidden="true" src="~assets/images/etherum-logo.svg" alt="Etherum logo"> <strong>{{ (parrotNumber * etherumValuePerParrot).toFixed(2) }}</strong> <span class="sr-only">ethereum</span> (+ gas fee)
    </p>
    <btn class="calculator__cta" @click="mintParrots()">
      Mint parrot{{ parrotNumber !== 1 ? 's' : '' }}
    </btn>
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
      etherumValuePerParrot: 0.05
    }
  },
  methods: {
    mintParrots (): void {
      window.alert("Sqwark sqwark! Minting parrots! (Not really, it's just pretend for now)")
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
    background-color: rgba(255, 255, 255, 0.9);
    max-width: 23rem;
    min-width: 22rem;
    padding-inline: 3.625rem;
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

  &__etherum {
    width: 1rem;
    height: 1.625rem;
    vertical-align: middle;
  }

  &__cta {
    margin-top: 1rem;
  }
}
</style>
