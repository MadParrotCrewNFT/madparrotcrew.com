<template>
  <div class="navbar" :class="{ 'navbar--open': isMobileNavOpen, 'navbar--solid': setSolidNav }">
    <div class="navbar__inner">
      <h1 class="navbar__logo">
        <nuxt-link to="/">
          <logo />
          <span class="sr-only" translate="no">{{ siteconfig.brand_name }}</span>
        </nuxt-link>
      </h1>
      <button class="navbar__hamburger" :class="{'navbar__hamburger--open': isMobileNavOpen}" @click="isMobileNavOpen = !isMobileNavOpen">
        <div class="navbar__hamburger-icon">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <span class="sr-only">{{ isMobileNavOpen ? 'Close' : 'Menu' }}</span>
      </button>
      <nav class="navbar__nav" :class="{ 'navbar__nav--open': isMobileNavOpen }">
        <ul class="navbar__social-list">
          <li v-for="socialLink in socialLinks" :key="socialLink.url">
            <a :href="socialLink.url" target="_blank" :title="socialLink.text">
              <svg-icon :name="socialLink.icon" />
              <span class="sr-only">{{ socialLink.text }}</span>
            </a>
          </li>
        </ul>
      </nav>
      <div class="navbar__social">
        <ul class="navbar__social-list">
          <li v-for="socialLink in socialLinks" :key="socialLink.url">
            <a :href="socialLink.url" target="_blank" :title="socialLink.text">
              <svg-icon :name="socialLink.icon" />
              <span class="sr-only">{{ socialLink.text }}</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Logo from '@/components/Logo.vue'
import siteconfig from '@/siteconfig.json'
import { ISocialLink } from '@/store'

interface INavItem {
  text: string;
  url: string;
}

export default Vue.extend({
  name: 'Navigation',
  components: { Logo },
  data () {
    return {
      siteconfig,
      isMobileNavOpen: false,
      setSolidNav: false
    }
  },
  computed: {
    socialLinks (): ISocialLink[] {
      return this.$store.state.socialLinks
    }
  },
  mounted () {
    window.addEventListener('scroll', this.handleScroll)
    this.handleScroll()
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll (): void {
      const mediaQueryScreenSize = getComputedStyle(document.documentElement).getPropertyValue('--responsive-standard-tablet')
      if (window.matchMedia(`(min-width: ${mediaQueryScreenSize})`).matches) { // desktop
        if (document.body.scrollTop > 70 || document.documentElement.scrollTop > 70) {
          this.setSolidNav = true
        } else {
          this.setSolidNav = false
        }
      }
      else { // mobile
        if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
          this.setSolidNav = true
        } else {
          this.setSolidNav = false
        }
      }
    }
  }
})
</script>

<style lang="scss" scoped>
@use 'sass:math';

.navbar {
  position: fixed;
  z-index: 2;
  top: 0;
  width: 100vw;
  height: 3.5rem;
  transition: all 80ms ease;
  color: #fff;

  @media (min-width: $responsive-standard-tablet) {
    position: sticky;
    top: 0;
    margin-top: 4.25rem;
  }

  &--open,
  &--solid {
    background-color: var(--mpc-burgandy);
    box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.25);
  }

  &__inner {
    max-width: 69.375rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;
    position: relative;
    margin-inline: auto;
    padding-inline: 2rem;
  }

  &__logo {
    margin: 0;
    width: 8.625rem;

    @media (min-width: $responsive-standard-tablet) {
      width: 12.875rem;
    }

    a {
      color: #fff;
    }

    img {
      height: 100%;
    }
  }

  &__hamburger {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 3.375rem;
    height: 1.9375rem;
    border: none;
    margin: 1rem 0;
    background-color: transparent;

    @media (min-width: $responsive-standard-tablet) {
      display: none;
    }

    &-icon {
      width: 1.3rem;
      height: 1.1rem;
      position: relative;
      z-index: 2;
      transform: rotate(0deg);
      cursor: pointer;

      span {
        display: block;
        position: absolute;
        height: 0.125rem;
        width: 100%;
        background-color: #fff;
        border-radius: 0.5rem;
        opacity: 1;
        left: 0;
        transform: rotate(0deg);
        transition: 0.25s ease-in-out;

        &:nth-child(1) {
          top: 0;
        }

        &:nth-child(2),
        &:nth-child(3) {
          top: 45%;
        }

        &:nth-child(4) {
          top: 90%;
        }

        .navbar__hamburger--open & {
          &:nth-child(1),
          &:nth-child(4) {
            top: 45%;
            width: 0;
            left: 50%;
          }

          &:nth-child(2) {
            transform: rotate(45deg);
          }

          &:nth-child(3) {
            transform: rotate(-45deg);
          }
        }
      }
    }
  }

  &__nav {
    @media (max-width: $responsive-standard-tablet - math.div(1em, 16)) {
      position: absolute;
      top: -38rem;
      left: 0;
      width: 100%;
      background-color: var(--mpc-dark-burgandy);
      transition: all 240ms ease;
      display: flex;
      flex-direction: column;
      box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.25);

      &--open {
        top: 100%;
      }

      .navbar__social-list {
        display: flex;
        gap: 0.75rem;
        list-style-type: none;
        padding-left: 0;
        margin: 2rem auto 2.5rem auto;
        height: 100%;
        gap: 0.75rem;

        li, a {
          color: #fff;
          display: flex;
          align-items: center;
          height: 100%;
        }

        svg {
          height: 1.5rem;
          width: 1.5rem;
        }
      }
    }

    @media (min-width: $responsive-standard-tablet) {
      display: flex;
      height: 100%;
      position: unset;
      width: auto;
      background-color: transparent;

      .navbar__social-list {
        display: none;
      }
    }
  }

  &__social {
    display: none;

    @media (min-width: $responsive-standard-tablet) {
      display: flex;
      height: 100%;

      &-list {
        display: flex;
        gap: 0.75rem;
        list-style-type: none;
        padding-left: 0;
        margin: 0;
        height: 100%;

        li, a {
          color: #fff;
          display: flex;
          align-items: center;
          height: 100%;

          &:hover,
          &:active {
            color: var(--mpc-gold);
          }
        }

        svg {
          height: 1.5rem;
          width: 1.5rem;
        }
      }
    }
  }
}
</style>
