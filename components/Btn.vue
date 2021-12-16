<template>
  <button class="btn" :class="[color !== 'dark-blue' ? `btn--${color}` : '', { 'btn--square': square, 'btn--inverted': inverted, 'btn--small': small }]" :disabled="disabled || isLoading" @click="$emit('click')">
    <slot />
    <spinner v-if="isLoading" />
  </button>
</template>

<script lang="ts">
import Vue from 'vue'
import Spinner from './Spinner.vue'

export default Vue.extend({
    name: "Btn",
    components: { Spinner },
    props: {
        color: {
            type: String as () => "dark-blue" | "green",
            default: "dark-blue",
            validator: (value: string): boolean => {
                return ["dark-blue", "green"].includes(value);
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

  @media (min-width: $responsive-large-mobile) {
    height: 4rem;
  }

  &--square {
    height: 3rem;
    min-width: 3rem;
    max-width: 3rem;
    padding: 0;
  }

  &--green {
    --btn-color: var(--mpc-green);
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
    height: 2rem;
    width: 2rem;
  }
}
</style>
