<template>
  <div class="navbar" :class="{ 'navbar--open': isMobileNavOpen, 'navbar--solid': setSolidNav }">
    <div class="navbar__inner">
      <h1 class="navbar__logo">
        <nuxt-link to="/">
          <logo />
          <span class="sr-only" translate="no">{{ siteconfig.brand_name }}</span>
        </nuxt-link>
      </h1>
      <button class="navbar__hamburger" :class="{ 'navbar__hamburger--open': isMobileNavOpen }" @click="isMobileNavOpen = !isMobileNavOpen">
        <span></span>
        <span></span>
        <span>{{ isMobileNavOpen ? 'Close' : 'Menu' }}</span>
      </button>
      <nav class="navbar__nav" :class="{ 'navbar__nav--open': isMobileNavOpen }">
        <ul class="navbar__nav-list">
          <li v-for="navItem in navItems" :key="navItem.url">
            <a :href="($route.path !== '/' ? '/' : '') + navItem.url" :class="{ 'active': isTheChosenOne(navItem.url) }" @click="isMobileNavOpen = false">
              {{ navItem.text }}
            </a>
          </li>
        </ul>
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
    navItems (): INavItem[] {
      return [
        {
          text: 'About',
          url: '#about'
        },
        {
          text: 'Team',
          url: '#team'
        },
        {
          text: 'FAQs',
          url: '#faqs'
        }
      ]
    },
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
      if (window.matchMedia(`(min-width: ${mediaQueryScreenSize})`)) { // desktop
        if (document.body.scrollTop > 60 || document.documentElement.scrollTop > 60) {
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
    },
    isTheChosenOne (toUrl: string): boolean {
      return this.$route.hash === toUrl
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
    padding-inline: 1rem;
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
    position: relative;
    background-color: transparent;
    border: none;
    border-radius: 0.25rem;
    color: #fff;
    width: 2rem;
    height: 2rem;
    padding: 0.375rem 0.25rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: stretch;
    gap: 0.1875rem;
    cursor: pointer;

    @media (min-width: $responsive-standard-tablet) {
      display: none;
    }

    span {
      position: absolute;
      transition: all 240ms ease;

      &:not(:nth-last-child(1)) {
        background-color: #fff;
        height: 0.1875rem;
        width: 1.175rem;
        border-radius: 2rem;
        left: 0.45rem;
        z-index: 1;
      }

      &:nth-last-child(1) {
        color: #fff;
        text-transform: uppercase;
        font-size: 0.5rem;
        font-weight: 700;
        bottom: 0.25rem;
        left: 50%;
        transform: translateX(-50%);
      }

      &:nth-child(1) {
        top: 0.325rem;
      }

      &:nth-child(2) {
        top: 0.75rem;
      }
    }

    &--open {
      span {
        &:not(:nth-last-of-type(1)) {
          background-color: #fff !important;
          width: 1rem;
          top: 0.5rem;
        }

        &:nth-last-of-type(1) {
          color: #fff !important;
        }

        &:nth-child(1) {
          transform: rotate(45deg);
        }

        &:nth-child(2) {
          transform: rotate(-45deg);
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

      .navbar__nav-list {
        list-style-type: none;
        padding-left: 0;
        margin-block: 0;
        display: flex;
        flex-direction: column;
        align-items: stretch;

        a {
          color: #fff;
          font-size: var(--font-size-body);
          font-family: var(--font-family-luckiestguy);
          text-decoration: none;
          display: block;
          text-align: center;
          padding-block: 1.25rem;
          position: relative;

          &::after {
            content: '';
            display: block;
            height: 4px;
            width: calc(100% - 2rem);
            background-color: rgba(0,0,0,0.15);
            position: absolute;
            bottom: 0;
            left: 50%;
            transform: translateX(-50%);
          }
        }
      }

      .navbar__social-list {
        display: flex;
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
          padding-inline: 0.125rem;
        }

        svg {
          height: 2rem;
          width: 2rem;
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

      &-list {
        display: flex;
        list-style-type: none;
        margin: 0;
        padding-left: 0;
        height: 100%;

        li, a {
          display: flex;
          align-items: center;
          height: 100%;
        }

        a {
          font-family: var(--font-family-luckiestguy);
          font-size: var(--font-size-body);
          color: #fff;
          text-decoration: none;
          padding: 0.5rem 1rem;
          transition-property: color;
          will-change: color;
          transition: 160ms ease;
          white-space: nowrap;
          user-select: none;

          &:hover,
          &:focus,
          &.active {
            color: var(--mpc-gold);
          }
        }
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
        list-style-type: none;
        padding-left: 0;
        margin: 0;
        height: 100%;

        li, a {
          color: #fff;
          display: flex;
          align-items: center;
          height: 100%;
          padding-inline: 0.125rem;
        }

        svg {
          height: 2rem;
          width: 2rem;
        }
      }
    }
  }
}
</style>
