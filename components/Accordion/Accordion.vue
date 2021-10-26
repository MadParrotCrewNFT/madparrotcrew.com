<template>
  <div class="accordion">
    <slot />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import AccordionItem from './AccordionItem.vue'

export default Vue.extend({
  name: 'Accordion',
  components: { AccordionItem }
})
</script>

<style lang="scss" scoped>
.accordion {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;

  @media (min-width: $responsive-standard-tablet) {
    gap: 1rem;
  }
}
</style>
