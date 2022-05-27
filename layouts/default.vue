<template>
  <div class="page">
    <navigation />
    <main class="page__body">
      <Nuxt />
    </main>
    <site-footer />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Navigation, SiteFooter } from '@/components'

export default Vue.extend({
  name: 'default',
  components: { Navigation, SiteFooter }
})
</script>

<style lang="scss" scoped>
.page {
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  &__body {
    flex: 1;
    display: flex;
    flex-direction: column;
    
    @media (min-width: $responsive-standard-tablet) {
      margin-top: -7.75rem;
    }

    > * {
      flex: 1;
    }
  }
}
</style>
