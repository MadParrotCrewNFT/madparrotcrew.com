<template>
  <div class="page">
    <navigation />
    <div class="page__body">
      <Nuxt />
    </div>
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

    > * {
      flex: 1;
    }
  }
}
</style>
