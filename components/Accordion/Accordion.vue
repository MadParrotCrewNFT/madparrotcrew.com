<template>
  <ul class="accordion">
    <slot />
  </ul>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Accordion'
})
</script>

<style lang="scss" scoped>
.accordion {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 0.75rem;
  margin: 0;
  padding-left: 0;
  list-style-type: none;

  @media (min-width: $responsive-standard-tablet) {
    gap: 1rem;
  }
}
</style>
