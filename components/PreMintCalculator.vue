<template>
  <section>
    <h2 class="orange-gradient-text title">Come back later!</h2>
    <card class="calculator">
      <!-- <h3 class="calculator__title">Minting starts<br/><time :datetime="format($store.state.mintStartDateTime, 'yyyy-MM-dd HH:mm')">{{ format($store.state.mintStartDateTime, 'do MMMM yyyy hbb O') }}</time></h3> -->
      <h3 class="calculator__title">You don't want to miss this...</h3>
      <p class="calculator__paragraph">Keep your eyes open! I'll let you know when via <a :href="config.SOCIAL.TWITTER" class="link--pink" target="_blank" rel="noopener nofollow">Twitter</a> & <a :href="config.SOCIAL.DISCORD" class="link--pink" target="_blank" rel="noopener nofollow">Discord</a>.</p>
    </card>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import { format } from 'date-fns'
import Card from './Card.vue'
import config from '@/config.json'

export default Vue.extend({
  name: 'PreMintCalculator',
  components: { Card },
  data () {
    return {
      format,
      config
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
