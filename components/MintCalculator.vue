<template>
  <section>
    <h2 class="orange-gradient-text title">Minting is live!</h2>
    <card class="calculator">
      <div id="bueno-embed-container" class="header__calculator" />
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
import Card from './Card.vue'
import config from '@/config.json'

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
  },
  data () {
    return {
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
