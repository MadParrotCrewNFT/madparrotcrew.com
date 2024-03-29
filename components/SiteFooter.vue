<template>
  <footer class="footer">
    <div class="footer__inner">
      <logo class="footer__logo" />
      <ul class="footer__social">
        <li v-for="social in socialLinks" :key="social.url">
          <a :href="social.url" target="_blank">
            <svg-icon :name="social.icon" />
            <span class="sr-only">{{ social.text }}</span>
          </a>
        </li>
      </ul>
      <a href="https://twitter.com/iamsheftali" target="_blank" rel="noopener nofollow" class="footer__signature">
        <nuxt-img src="/images/sheftali-signature.gif" loading="lazy" width="399" height="293" alt="Sheftali" />
        <span class="sr-only">Sheftali</span>
      </a>
    </div>
  </footer>
</template>

<script lang="ts">
import Vue from 'vue'
import { ISocialLink } from '@/store'
import { Logo } from '@/components'

export default Vue.extend({
  name: 'site-footer',
  components: { Logo },
  computed: {
    socialLinks (): ISocialLink[] {
      return this.$store.state.socialLinks
    }
  }
})
</script>

<style lang="scss" scoped>
.footer {
  position: relative;
  padding: 3rem;
  background-color: var(--mpc-light-grey);

  @media (min-width: $responsive-large-tablet) {
    padding-block: 4rem;
  }

  &__inner {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    gap: 2rem;
    max-width: 69.375rem;
    margin-inline: auto;

    @media (min-width: $responsive-small-tablet) {
      flex-direction: row;
      gap: 2.5rem;
    }
  }

  &__social {
    display: flex;
    gap: 0.75rem;
    list-style-type: none;
    padding-left: 0;
    margin: 0;
    height: 100%;

    li, a {
      display: flex;
      align-items: center;
      height: 100%;
      color: var(--mpc-medium-grey);

      @media (prefers-reduced-motion: no-preference) {
        transition: color 160ms ease;
        will-change: color;
      }

      &:hover,
      &:active {
        color: var(--mpc-dark-blue);
      }
    }

    svg {
      height: 1.5rem;
      width: 1.5rem;
    }
  }

  &__logo {
    width: 9rem;
    color: var(--mpc-medium-grey);
  }

  &__signature {
    max-width: 5.375rem;
  }
}
</style>
