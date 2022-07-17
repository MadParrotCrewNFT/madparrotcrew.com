<template>
  <section>
    <h2 class="orange-gradient-text title">Come back later!</h2>
    <card class="calculator">
      <h3 class="calculator__title">Minting <time :datetime="format($store.state.mintStartDate, 'yyyy-MM-dd HH:mm')">{{ format($store.state.mintStartDate, 'do MMMM yyyy hbb') }}</time></h3>
      <p class="calculator__paragraph">You don’t want to miss this. Once minting goes live <strong>you’ll only have 69 hours</strong> to mint!</p>
    </card>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import { sub, format } from 'date-fns'
import Card from './Card.vue'

export default Vue.extend({
  name: 'PreMintCalculator',
  components: { Card },
  data () {
    return {
      format
    }
  }
})
</script>

<style lang="scss" scoped>
.title {
  font-size: var(--font-size-title);
  text-align: center;
  margin-top: 0;
  margin-bottom: 1rem;

  @media (min-width: $responsive-standard-tablet) {
    text-align: left;
    margin-bottom: 0.5rem;
  }
}

.calculator {
  &__title {
    color: var(--mpc-purple);
    font-size: var(--font-size-heading);
    line-height: 1.75rem;
    margin-top: 0;
    margin-bottom: 0.5rem;
    text-align: center;

    @media (min-width: $responsive-standard-tablet) {
      text-align: left;
    }
  }

  &__paragraph {
    margin: 0;
    font-size: var(--font-size-body);
    text-align: center;
    font-weight: 500;

    @media (min-width: $responsive-standard-tablet) {
      text-align: left;
      font-size: var(--font-size-large);
    }
  }
}
</style>
