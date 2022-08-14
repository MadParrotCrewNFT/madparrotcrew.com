<template>
  <a v-if="to" :href="to" class="btn" :class="{ 'btn--white': white }">
    <slot />
    <svg-icon v-if="icon" :name="icon" />
  </a>
  <button v-else class="btn" :disabled="disabled || isLoading" @click="$emit('click')">
    <slot />
    <svg-icon v-if="icon && !isLoading" :name="icon" />
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
    white: {
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
  --btn-color: var(--mpc-pink);
  cursor: pointer;
  background-color: var(--btn-color);
  border: 1px solid var(--btn-color);
  border-radius: 0.5rem;
  color: #fff;
  font-size: var(--font-size-large);
  font-family: var(--font-family-luckiestguy);
  display: inline-flex;
  gap: 1rem;
  align-items: center;
  justify-content: center;
  height: 3.25rem;
  padding: 1.125rem 1.5rem;
  user-select: none;
  text-decoration: none;

  @media (prefers-reduced-motion: no-preference) {
    transition: background-color ease 160ms;
    will-change: background-color;
  }

  @media (min-width: $responsive-large-mobile) {
    height: 4rem;
  }

  &:not(:disabled) {
    &:hover,
    &:active {
      --btn-color: #a53a87;

      @media (hover: hover) and (prefers-reduced-motion: no-preference) {
        ::v-deep svg {
          transform: rotate(12deg) translateY(-0.25rem);
        }
      }
    }
  }

  &--white {
    --btn-color: #fff;
    background-color: var(--btn-color);
    border-color: var(--btn-color);
    color: #000;

    &:not(:disabled) {
      &:hover,
      &:active {
        --btn-color: #f0f0f0;
      }
    }
  }

  &:disabled {
    opacity: 0.5;
    cursor: default;
  }

  ::v-deep svg {
    height: var(--font-size-heading);
    width: var(--font-size-heading);
    transition: transform 240ms ease;
    will-change: transform;
  }
}
</style>
