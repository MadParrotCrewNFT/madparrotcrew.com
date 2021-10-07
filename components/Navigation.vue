<template>
  <div class="navbar">
    <h1 class="navbar__logo">
      <img src="https://picsum.photos/128" :alt="`${siteconfig.brand_name} logo`">
      <span class="sr-only" translate="no">{{ siteconfig.brand_name }}</span>
    </h1>
    <nav class="navbar__nav">
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
            <svg-icon :name="socialLink.icon" />
            <span class="sr-only">{{ socialLink.text }}</span>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import siteconfig from '@/siteconfig.json'

interface INavItem {
  text: string;
  url: string;
}

interface ISocialLink {
  text: string;
  url: string;
  icon: string;
}

export default Vue.extend({
  name: 'Navigation',
  data () {
    return {
      siteconfig
    }
  },
  computed: {
    navItems (): INavItem[] {
      return [
        {
          text: 'About NPP',
          url: '#about'
        },
        {
          text: 'Roadmap',
          url: '#roadmap'
        },
        {
          text: 'Bonus traits',
          url: '#bonus-traits'
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
      return [
        {
          text: 'Discord',
          url: 'https://discord.com',
          icon: 'discord'
        },
        {
          text: 'Twitter',
          url: 'https://twitter.com',
          icon: 'twitter'
        },
        {
          text: 'OpenSea',
          url: 'https://opensea.io',
          icon: 'opensea'
        },
        {
          text: 'Etherscan',
          url: 'https://etherscan.io',
          icon: 'etherscan'
        },
        {
          text: 'Instagram',
          url: 'https://www.instagram.com',
          icon: 'instagram'
        }
      ]
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
  position: relative;
  top: 4rem;
  width: 100vw;
  background-color: #fff;
  height: 3.5rem;
  display: flex;
  align-items: center;
  justify-content: space-around;

  &__logo {
    border-radius: 50%;
    background-color: #fff;
    overflow: hidden;
    height: 8rem;
    width: 8rem;
    display: grid;
    place-items: center;
    margin: 0;
    font-family: var(--font-family-opensans);
    font-size: var(--font-size-body);
    text-align: center;

    img {
      height: 100%;
      width: 100%;
    }
  }

  &__nav {
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
        font-family: var(--font-family-saira-stencil-one);
        font-size: var(--font-size-subheading);
        color: var(--npp-grey);
        text-decoration: none;
        padding: 0.5rem 1rem;
        transition-property: background-color, color;
        transition: 160ms ease;
        white-space: nowrap;

        &:hover,
        &:focus,
        &.active {
          background-color: var(--npp-green);
          color: #fff;
        }
      }
    }
  }

  &__social {
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
        padding-inline: 0.125rem;
      }

      svg {
        height: 2rem;
        width: 2rem;
      }
    }
  }
}
</style>
