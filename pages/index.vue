<template>
  <div class="home">
    <header>
      <navigation />
      <calculator class="home__calculator" />
    </header>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Navigation, Calculator } from '@/components'

export default Vue.extend({
  components: { Navigation, Calculator }
})
</script>

<style lang="scss" scoped>
header {
  background-color: skyblue;
  min-height: 90vh;
}

.home {
  position: relative;

  &__calculator {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}
</style>
