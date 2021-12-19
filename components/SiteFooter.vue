<template>
  <footer class="footer">
    <ul class="footer__social">
      <li v-for="socialLink in socialLinks" :key="socialLink.text">
        <a :href="socialLink.url" target="_blank">
          <img v-if="socialLink.icon === 'instagram'" src="~assets/images/instagram.svg" :alt="socialLink.text" >
          <svg-icon v-else :name="socialLink.icon" />
          <span class="sr-only">{{ socialLink.text }}</span>
        </a>
      </li>
    </ul>
    <logo class="footer__logo" />
    <ul class="footer__links">
      <li>
        <nuxt-link to="/t-and-c" class="link">Terms & Conditions</nuxt-link>
      </li>
      <li v-if="config.MINTING_LIVE">
        <a class="link" :href="config.SCAN_LINK" rel="norefferer nofollow noopener" target="_blank">Smart contract</a>
      </li>
    </ul>
  </footer>
</template>

<script lang="ts">
import Vue from 'vue'
import { ISocialLink } from '@/store'
import config from '@/config.json'
import { Logo } from '@/components'

export default Vue.extend({
  name: 'site-footer',
  components: { Logo },
  data () {
    return {
      config
    }
  },
  computed: {
    socialLinks (): ISocialLink[] {
      return this.$store.state.socialLinks
    }
  }
})
</script>

<style lang="scss" scoped>
.footer {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2.5rem 1rem 3rem 1rem;

  &__social {
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

  &__logo {
    width: 9rem;
    margin-block: 1.5rem;
    color: #000;
  }

  &__links {
    font-size: var(--font-size-small);
    font-style: normal;
    text-align: center;
    padding-left: 0;
    margin: 0;
    list-style-type: none;
    display: flex;
    align-items: center;
    gap: 0.25rem;

    li:not(:nth-child(1)) {
      &::before {
        content: '·';
        margin-right: 0.25rem;
      }
    }
  }
}
</style>
