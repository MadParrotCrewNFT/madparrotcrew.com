<template>
  <div>
    <header>
      <navigation />
    </header>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Navigation } from '@/components'

export default Vue.extend({
  components: { Navigation }
})
</script>

<style lang="scss" scoped>
header {
  background-color: skyblue;
  min-height: 80vh;
}
</style>
