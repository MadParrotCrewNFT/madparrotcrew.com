<template>
  <div>
    <navigation />
    <Nuxt />
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