<template>
  <card :id="`accord-item-${id}`" class="accord-item">
    <tag :is="headingTag" class="accord-item__header">
      <button :id="`accord-item-${id}__header`"
              :aria-expanded="isAccordOpen.toString()"
              :aria-controls="`accord-item-${id}__panel`"
              @click="isAccordOpen = !isAccordOpen">
        <span>{{ heading }}</span>
        <svg-icon name="chevron" />
      </button>
    </tag>
    <section class="accord-item__body"
             :class="{'accord-item__body--hidden': !isAccordOpen}"
             :id="`accord-item-${id}__panel`"
             :aria-labelledby="`accord-item-${id}__header`">
             <div class="accord-item__body-inner">
               <slot />
             </div>
    </section>
  </card>
</template>

<script lang="ts">
import Vue from 'vue'
import { Card } from '@/components'

export default Vue.extend({
  name: 'AccordionItem',
  components: { Card },
  data () {
    return {
      isAccordOpen: false
    }
  },
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
  }
})
</script>

<style lang="scss" scoped>
.accord-item {
  padding: 0;

  &__header {
    margin: 0;

    button {
      display: flex;
      align-items: center;
      justify-content: space-between;
      color: var(--npp-green);
      padding: 0.875rem 1rem;
      border: 0;
      background-color: transparent;
      width: 100%;
      cursor: pointer;
      font-size: var(--font-size-large);

      @media (min-width: $responsive-standard-tablet) {
        padding: 1.5rem;
      }

      &[aria-expanded="true"] {
        svg {
          transform: rotate(180deg);
        }
      }
    }

    svg {
      height: var(--font-size-body);
      width: var(--font-size-body);
      transition: transform 450ms ease;
    }
  }

  &__body {
    font-size: var(--font-size-body);
    transition: max-height 500ms ease;
    overflow: hidden;
    max-height: 25rem;

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
