<template>
  <footer class="footer">
    <div class="footer__inner">
      <ul class="footer__links">
        <li>
          <btn to="#mint">Mint parrot</btn>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#team">Team</a>
        </li>
        <li>
          <a href="#faq">FAQ</a>
        </li>
      </ul>
      <ul class="footer__social">
        <li v-for="social in socialLinks" :key="social.url">
          <a :href="social.url" target="_blank">
            <svg-icon :name="social.icon" />
            <span class="sr-only">{{ social.text }}</span>
          </a>
        </li>
      </ul>
      <logo class="footer__logo" />
    </div>
  </footer>
</template>

<script lang="ts">
import Vue from 'vue'
import Btn from './Btn.vue'
import { ISocialLink } from '@/store'
import { Logo } from '@/components'

export default Vue.extend({
  name: 'site-footer',
  components: { Logo, Btn },
  computed: {
    socialLinks (): ISocialLink[] {
      return this.$store.state.socialLinks
    }
  }
})
</script>

<style lang="scss" scoped>
.footer {
  padding: 3rem 1rem 4rem 1rem;
  background-color: var(--mpc-light-grey);

  @media (min-width: $responsive-large-tablet) {
    padding-top: 4rem;
  }

  &__inner {
    display: grid;
    grid-template-areas: 'links' 'social' 'logo';
    place-items: center;
    gap: 3rem;
    max-width: 70rem;
    margin-inline: auto;

    @media (min-width: $responsive-large-tablet) {
      grid-template-areas: 'links social' 'logo logo';
    }

    @media (min-width: $responsive-small-desktop) {
      grid-template-areas: 'logo links social';
      grid-template-columns: auto 1fr auto;
    }
  }

  &__links {
    grid-area: links;
    text-align: center;
    font-family: var(--font-family-luckiestguy);
    padding-left: 0;
    margin: 0;
    list-style-type: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;

    @media (min-width: $responsive-standard-tablet) {
      flex-direction: row;
    }

    a:not(.btn) {
      color: var(--mpc-medium-grey);
      text-decoration: none;
      transition: color 160ms ease;
      will-change: color;

      &:hover,
      &:active {
        color: var(--mpc-dark-blue);
      }
    }
  }

  &__social {
    grid-area: social;
    display: flex;
    gap: 1rem;
    list-style-type: none;
    padding-left: 0;
    margin: 0;
    height: 100%;

    @media (min-width: 350px) {
      gap: 1.5rem;
    }

    li, a {
      display: flex;
      align-items: center;
      height: 100%;
      padding-inline: 0.125rem;
      color: var(--mpc-medium-grey);
      transition: color 160ms ease;
      will-change: color;

      &:hover,
      &:active {
        color: var(--mpc-dark-blue);
      }
    }

    svg {
      height: 2rem;
      width: 2rem;
    }
  }

  &__logo {
    grid-area: logo;
    width: 9rem;
    color: var(--mpc-medium-grey);
  }
}
</style>
