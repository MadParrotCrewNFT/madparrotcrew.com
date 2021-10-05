<template>
  <div class="home">
    <header class="home__header">
      <navigation />
      <calculator class="home__calculator" />
    </header>
    <section id="about" class="home__about">
      <div>
        <div class="home__about-text">
          <h2>About <span :aria-label="siteconfig.brand_name">NPP</span></h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
      </div>
      <div>
        BG image
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Navigation, Calculator } from '@/components'
import siteconfig from '@/siteconfig.json'

export default Vue.extend({
  components: { Navigation, Calculator },
  data () {
    return {
      siteconfig
    }
  }
})
</script>

<style lang="scss" scoped>
header {
  background-color: skyblue;
  min-height: 36rem;
  height: 90vh;
  max-height: 46rem;
}

.home {
  &__header {
    position: relative;
  }

  &__calculator {
    position: absolute;
    top: 60%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  &__about {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    margin-block: 9rem;

    &-text {
      max-width: 23rem;
      margin-inline: auto;
    }

    h2 {
      font-size: var(--font-size-subtitle);
      margin-top: 0;
      margin-bottom: 2.75rem;
    }
  }
}
</style>
