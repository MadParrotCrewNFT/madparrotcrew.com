<template>
  <div class="navbar">
    <div class="navbar__inner">
      <h1 class="navbar__logo">
        <nuxt-link to="/">
          <logo />
          <span class="sr-only" translate="no">{{ siteconfig.brand_name }}</span>
        </nuxt-link>
      </h1>
      <nav v-if="showNavItems" class="navbar__nav">
        <ul class="navbar__nav-list">
          <li v-for="navItem in navItems" :key="navItem.url">
            <a :href="navItem.url" :class="{ 'active': isTheChosenOne(navItem.url) }">
              {{ navItem.text }}
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
      showNavItems: true
    }
  },
  mounted () {
    this.showNavItems = window.location.pathname === '/'
  },
  computed: {
    navItems (): INavItem[] {
      return [
        {
          text: 'About',
          url: '#about'
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
  methods: {
    isTheChosenOne (toUrl: string): boolean {
      return this.$route.hash === toUrl
    }
  }
})
</script>

<style lang="scss" scoped>
.navbar {
  position: absolute;
  z-index: 2;
  top: 0;
  width: 100vw;
  height: 3.5rem;

  @media (min-width: $responsive-standard-tablet) {
    position: relative;
    background-color: #fff;
  }

  &__inner {
    max-width: var(--max-max-width);
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: 100%;
    position: relative;
    margin-inline: auto;
  }

  &__logo {
    margin: 0;

    a {
      color: #fff;

      @media (min-width: $responsive-standard-tablet) {
        color: #000;
      }
    }

    img {
      height: 100%;
    }
  }

  &__nav {
    display: none;

    @media (min-width: $responsive-standard-tablet) {
      display: flex;
      height: 100%;

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

    @media (min-width: $responsive-large-tablet) {
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
