<template>
  <a v-if="to" :href="to" class="btn" :class="[color !== 'dark-blue' ? `btn--${color}` : '', { 'btn--square': square, 'btn--inverted': inverted, 'btn--small': small }]">
    <slot />
    <svg-icon v-if="icon" :name="icon" />
  </a>
  <button v-else class="btn" :class="[color !== 'dark-blue' ? `btn--${color}` : '', { 'btn--square': square, 'btn--inverted': inverted, 'btn--small': small }]" :disabled="disabled || isLoading" @click="$emit('click')">
    <slot />
    <svg-icon v-if="icon && !isLoading" :name="icon" />
    <spinner v-if="isLoading" />
  </button>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import Spinner from './Spinner.vue'

export default Vue.extend({
  name: "Btn",
  components: { Spinner },
  props: {
    color: {
      type: String as PropType<"dark-blue" | "grey">,
      default: "dark-blue",
      validator: (value: string): boolean => {
        return ["dark-blue", "grey"].includes(value);
      }
    },
    square: {
      type: Boolean,
      default: false
    },
    inverted: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    isLoading: {
      type: Boolean,
      default: false
    },
    small: {
      type: Boolean,
      default: false
    },
    to: {
      type: String,
      default: undefined
    },
    icon: {
      type: String,
      default: undefined
    }
  }
})
</script>

<style lang="scss" scoped>
.btn {
  --btn-color: var(--mpc-dark-blue);
  cursor: pointer;
  background-color: var(--btn-color);
  border: 1px solid var(--btn-color);
  border-radius: var(--border-radius-standard);
  color: #fff;
  font-size: var(--font-size-large);
  font-weight: 800;
  font-family: var(--font-family-opensans);
  display: inline-flex;
  gap: 1rem;
  align-items: center;
  justify-content: center;
  height: 3.25rem;
  padding: 1.125rem 1.5rem;
  user-select: none;
  text-decoration: none;

  @media (min-width: $responsive-large-mobile) {
    height: 4rem;
  }

  &--square {
    height: 3rem;
    min-width: 3rem;
    max-width: 3rem;
    padding: 0;

    ::v-deep svg {
      height: 2rem;
      width: 2rem;
    }
  }

  &--grey {
    --btn-color: var(--mpc-dark-grey);
    background-color: var(--btn-color);
    border-color: var(--btn-color);
  }

  &--inverted {
    background-color: transparent;
    color: var(--btn-color);
  }

  &--small {
    padding: 1rem;
  }

  &:disabled {
    opacity: 0.5;
    cursor: default;
  }

  ::v-deep svg {
    height: var(--font-size-heading);
    width: var(--font-size-heading);
  }
}
</style>
