<template>
  <div class="card">
    <slot />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Card'
})
</script>

<style lang="scss" scoped>
.card {
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
  background-color: #fff;
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.25);
  border-radius: var(--border-radius-standard);
}
</style>
