<template>
  <li>
    <div :id="`accordion-${id}`" class="accordion">
      <tag :is="headingTag" class="accordion__header">
        <button
          :id="`accordion-${id}__header`"
          :aria-expanded="isAccordOpen.toString()"
          :aria-controls="`accordion-${id}__panel`"
          @click="isAccordOpen = !isAccordOpen"
        >
          <span>{{ heading }}</span>
          <div class="accordion__icon">
            <svg-icon name="chevron" />
          </div>
        </button>
      </tag>
      <section
        :id="`accordion-${id}__panel`"
        class="accordion__body"
        :class="{'accordion__body--hidden': !isAccordOpen}"
        :aria-labelledby="`accordion-${id}__header`"
      >
        <div class="accordion__body-inner">
          <slot />
        </div>
      </section>
    </div>
  </li>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Accordion',
  props: {
    headingTag: {
      type: String,
      required: true,
      validator: (value: string): boolean => {
        return ['h2', 'h3', 'h4', 'h5', 'h6'].includes(value)
      }
    },
    id: {
      type: String,
      required: true,
      validator: (value: string): boolean => {
        return !/\s/g.test(value) // Has no whitespace
      }
    },
    heading: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      isAccordOpen: false
    }
  }
})
</script>

<style lang="scss" scoped>
.accordion {
  padding: 0;
  width: 100%;
  background-color: #fff;
  border-radius: 1rem;
  box-shadow: 0.5rem 0.5rem 0 rgba(0, 0, 0, 0.05);

  @media (hover: hover) and (prefers-reduced-motion: no-preference) {
    transition-property: transform, box-shadow;
    will-change: transform, box-shadow;
    transition: 160ms ease;

    &:hover {
      transform: translate(-0.25rem, -0.25rem);
      box-shadow: 0.75rem 0.75rem 0 rgba(0, 0, 0, 0.05);
    }
  }

  &__header {
    margin: 0;

    button {
      display: flex;
      align-items: center;
      justify-content: space-between;
      color: var(--mpc-darker-blue);
      padding: 0.875rem 1rem;
      border: 0;
      background-color: transparent;
      width: 100%;
      cursor: pointer;
      font-size: var(--font-size-large);
      text-align: left;

      @media (min-width: $responsive-standard-tablet) {
        padding: 1.5rem;
      }

      &:focus {
        outline: none;

        .accordion__icon {
          outline: 1px solid;
          outline-color: Highlight;
          outline-color: -webkit-focus-ring-color;
          outline-offset: 1px;
        }
      }

      &[aria-expanded="true"] {
        .accordion__icon {
          transform: rotate(180deg);
          background-color: #000;
          color: #fff;
          border-color: #fff;
        }
      }
    }

    span {
      flex: 1;
      padding-right: 1rem;
    }
  }

  &__icon {
    height: 1.625rem;
    width: 1.625rem;
    background-color: #fff;
    color: #000;
    border: 2px solid #000;
    border-radius: 50%;
    padding: 0.25rem;
    display: grid;
    place-items: center;

    @media (prefers-reduced-motion: no-preference) {
      transition-property: transform, color, background-color, border-color;
      transition: 380ms ease;
      will-change: transform, color, background-color, border-color;
    }
  }

  &__body {
    font-size: var(--font-size-large);
    overflow: hidden;
    max-height: 50rem;

    @media (prefers-reduced-motion: no-preference) {
      transition: max-height 500ms ease;
      will-change: max-height;
    }

    &-inner {
      padding: 0.125rem 1rem 1.25rem 1rem;

      @media (min-width: $responsive-standard-tablet) {
        padding: 0.125rem 1.5rem 1.5rem 1.5rem;
      }
    }

    &--hidden {
      max-height: 0;
    }
  }
}
</style>