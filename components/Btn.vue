<template>
  <button @click="$emit('click')" class="btn" :class="[color !== 'dark-blue' ? `btn--${color}` : '', { 'btn--square': square, 'btn--inverted': inverted }]">
    <slot />
  </button>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Btn',
  props: {
    color: {
      type: String as () => 'dark-blue' | 'green',
      default: 'dark-blue',
      validator: (value: string): boolean => {
        return ['dark-blue', 'green'].includes(value)
      }
    },
    square: {
      type: Boolean,
      default: false
    },
    inverted: {
      type: Boolean,
      default: false
    }
  }
})
</script>

<style lang="scss" scoped>
.btn {
  --btn-color: var(--npp-dark-blue);
  cursor: pointer;
  background-color: var(--btn-color);
  border: 1px solid var(--btn-color);
  border-radius: var(--border-radius-standard);
  color: #fff;
  font-size: var(--font-size-subheading);
  font-weight: 800;
  font-family: var(--font-family-opensans);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 4rem;
  padding: 1.125rem 1.5rem;

  &--square {
    height: 3rem;
    min-width: 3rem;
    max-width: 3rem;
    padding: 0;
  }

  &--green {
    --btn-color: var(--npp-green);
    background-color: var(--btn-color);
    border-color: var(--btn-color);
  }

  &--inverted {
    background-color: #fff;
    color: var(--btn-color);
  }
}
</style>
