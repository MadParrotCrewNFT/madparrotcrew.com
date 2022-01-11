<template>
  <div class="navbar" :class="{ 'navbar--open': isMobileNavOpen, 'navbar--white-bg': setWhiteBgMobile }">
    <div class="navbar__inner">
      <h1 class="navbar__logo">
        <nuxt-link to="/">
          <logo />
          <span class="sr-only" translate="no">{{ siteconfig.brand_name }}</span>
        </nuxt-link>
      </h1>
      <button v-if="showNavItems" class="navbar__hamburger" :class="{ 'navbar__hamburger--open': isMobileNavOpen }" @click="isMobileNavOpen = !isMobileNavOpen">
        <span></span>
        <span></span>
        <span>{{ isMobileNavOpen ? 'Close' : 'Menu' }}</span>
      </button>
      <nav v-if="showNavItems" class="navbar__nav" :class="{ 'navbar__nav--open': isMobileNavOpen }">
        <ul class="navbar__nav-list">
          <li v-for="navItem in navItems" :key="navItem.url">
            <a :href="navItem.url" :class="{ 'active': isTheChosenOne(navItem.url) }" @click="isMobileNavOpen = false">
              {{ navItem.text }}
            </a>
          </li>
        </ul>
        <ul class="navbar__social-list">
          <li v-for="socialLink in socialLinks" :key="socialLink.url">
            <a :href="socialLink.url" target="_blank" :title="socialLink.text">
              <img v-if="socialLink.icon === 'instagram'" src="~assets/images/instagram.svg" :alt="socialLink.text" >
              <svg-icon v-else :name="socialLink.icon" />
              <span class="sr-only">{{ socialLink.text }}</span>
            </a>
          </li>
        </ul>
      </nav>
      <div class="navbar__social">
        <ul class="navbar__social-list">
          <li v-for="socialLink in socialLinks" :key="socialLink.url">
            <a :href="socialLink.url" target="_blank" :title="socialLink.text">
              <img v-if="socialLink.icon === 'instagram'" src="~assets/images/instagram.svg" :alt="socialLink.text" >
              <svg-icon v-else :name="socialLink.icon" />
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
      showNavItems: true,
      isMobileNavOpen: false,
      setWhiteBgMobile: false
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
          text: 'Crew Perks',
          url: '#crew-perks'
        },
        {
          text: 'Roadmap',
          url: '#roadmap'
        },
        {
          text: 'Diamond-beak Club',
          url: '#diamond-beak-club'
        },
        {
          text: 'Distribution',
          url: '#distribution'
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
  watch: {
    $route (): void {
      this.showNavItems = window.location.pathname === '/'
    }
  },
  mounted () {
    this.showNavItems = window.location.pathname === '/'
    window.addEventListener('scroll', this.handleScroll)
    this.handleScroll()
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll (): void {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        this.setWhiteBgMobile = true
      } else {
        this.setWhiteBgMobile = false
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
  transition: all 240ms ease;

  @media (min-width: $responsive-large-tablet) {
    background-color: #fff;
  }

  &--open,
  &--white-bg {
    @media (max-width: $responsive-large-tablet - math.div(1em, 16)) {
      background-color: #fff;

      .navbar__logo a {
        color: #3c3c3c;
      }
    }
  }

  &__inner {
    max-width: 73rem;
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

    a {
      color: #fff;

      @media (min-width: $responsive-large-tablet) {
        color: #000;
      }
    }

    img {
      height: 100%;
    }
  }

  &__hamburger {
    position: relative;
    background-color: #fff;
    border: none;
    border-radius: 0.25rem;
    color: var(--mpc-green);
    width: 1.875rem;
    height: 1.875rem;
    padding: 0.375rem 0.25rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: stretch;
    gap: 0.1875rem;

    @media (min-width: $responsive-large-tablet) {
      display: none;
    }

    span {
      position: absolute;
      transition: all 240ms ease;

      &:not(:nth-last-child(1)) {
        background-color: var(--mpc-green);
        height: 0.1875rem;
        width: 1rem;
        border-radius: 2rem;
        left: 0.45rem;
        z-index: 1;
      }

      &:nth-last-child(1) {
        color: var(--mpc-green);
        text-transform: uppercase;
        font-size: 0.375rem;
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
          background-color: #3c3c3c !important;
          width: 1rem;
          top: 0.5rem;
        }

        &:nth-last-of-type(1) {
          color: #3c3c3c !important;
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
    @media (max-width: $responsive-large-tablet - math.div(1em, 16)) {
      position: absolute;
      top: -27rem;
      left: 0;
      width: 100%;
      background-color: #fff;
      transition: all 240ms ease;
      display: flex;
      flex-direction: column;

      &--open {
        top: calc(100% - 1px);
      }

      .navbar__nav-list {
        list-style-type: none;
        padding-left: 0;
        margin-block: 0;
        display: flex;
        flex-direction: column;
        align-items: stretch;

        a {
          color: var(--mpc-green);
          font-size: var(--font-size-subtitle);
          font-family: var(--font-family-ampersand);
          text-decoration: none;
          display: block;
          text-align: center;
        }
      }

      .navbar__social-list {
        display: flex;
        list-style-type: none;
        padding-left: 0;
        margin: 2rem auto 1.5rem auto;
        height: 100%;
        gap: 0.75rem;

        li, a {
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

    @media (min-width: $responsive-large-tablet) {
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
        height: 100%;

        li, a {
          display: flex;
          align-items: center;
          height: 100%;
        }

        a {
          font-family: var(--font-family-ampersand);
          font-size: var(--font-size-large);
          color: var(--mpc-grey);
          text-decoration: none;
          padding: 0.5rem 1rem;
          transition-property: background-color, color;
          transition: 160ms ease;
          white-space: nowrap;
          user-select: none;

          &:hover,
          &:focus,
          &.active {
            background-color: var(--mpc-green);
            color: #fff;
          }
        }
      }
    }
  }

  &__social {
    display: none;

    @media (min-width: $responsive-small-desktop) {
      display: flex;
      height: 100%;

      &-list {
        display: flex;
        list-style-type: none;
        padding-left: 0;
        margin: 0;
        height: 100%;

        li, a {
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
