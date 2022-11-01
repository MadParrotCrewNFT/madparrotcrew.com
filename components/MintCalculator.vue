<template>
  <section>
    <h2 class="orange-gradient-text title">Minting is live!</h2>
    <card class="calculator">
      <div id="bueno-embed-container" class="header__calculator" />
    </card>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import Card from './Card.vue'

export default Vue.extend({
  name: 'PreMintCalculator',
  components: { Card },
  head () {
    return {
      script: [
        {
          src: 'bueno.js',
          type: 'module'
        }
      ]
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

  @media (prefers-reduced-motion: no-preference) {
    @keyframes grow-shrink {
      25% {
        transform: scale(1.05);
      }
      75% {
        transform: scale(0.95);
      }
      0%, 100% {
        transform: scale(1);
      }
    }

    animation: grow-shrink linear 4s infinite;
    will-change: transform;
  }

  @media (min-width: $responsive-standard-tablet) {
    text-align: left;
    margin-bottom: 0.5rem;
  }
}
</style>
