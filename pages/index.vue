<template>
  <div>
    <header class="header">
      <navigation />
      <calculator class="header__calculator" />
    </header>
    <section id="about" class="about">
      <div>
        <div class="about__text">
          <h2>About <span :aria-label="siteconfig.brand_name">NPP</span></h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
      </div>
      <div>
        BG image
      </div>
    </section>
    <section id="roadmap" class="roadmap">
      <h2>Roadmap</h2>
      <ol class="roadmap__cards">
        <li v-for="roadmapCheckpoint in roadmapCheckpoints" :key="roadmapCheckpoint.percentage">
          <card>
            <h3 class="card__title">
              {{ roadmapCheckpoint.title }}
            </h3>
            <p>{{ roadmapCheckpoint.body }}</p>
          </card>
          <div class="roadmap__percentage">
            <p role="text">
              {{ roadmapCheckpoint.percentage }}<span class="roadmap__percentage-symbol">%</span>
            </p>
          </div>
        </li>
      </ol>
    </section>
    <section id="bonus-traits" class="bonus">
      <h2>Bonus traits</h2>
      <ul class="bonus__things">
        <li v-for="bonusTrait in bonusTraits" :key="bonusTrait.image.src">
          <img :src="require(`@/assets/images/${bonusTrait.image.src}`)" :alt="bonusTrait.image.alt">
          <h3>{{ bonusTrait.title }}</h3>
          <p>{{ bonusTrait.body }}</p>
        </li>
      </ul>
    </section>
    <section id="distribution" class="parrot">
      <h2>Parrot distribution</h2>
      <ul class="parrot__things">
        <li v-for="distribution in parrotDistribution" :key="distribution.image.src">
          <img src="https://picsum.photos/128" :alt="distribution.image.alt">
          <h3>{{ distribution.title }}</h3>
          <p>{{ distribution.body }}</p>
        </li>
      </ul>
    </section>
    <section id="team" class="team">
      <div>
        <h2>The team</h2>
        <ul class="team__people">
          <li v-for="member in teamMembers" :key="member.name">
            <img src="https://picsum.photos/144/154" :alt="member.image.alt">
            <h3>{{ member.name }}</h3>
            <p>{{ member.job }}</p>
            <ul class="team__socials">
              <li v-for="social in member.socials" :key="social.platform">
                <a :href="social.url" :title="social.platform" target="_blank">
                  <svg-icon :name="social.platform.toLowerCase()" />
                  <span class="sr-only">{{ social.platform }}</span>
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </section>
    <section id="faqs" class="faqs">
      <h2>FAQs</h2>
    </section>
    <footer class="footer">
      <ul class="footer__social">
        <li v-for="socialLink in socialLinks" :key="socialLink.text">
          <a :href="socialLink.url" target="_blank">
            <svg-icon :name="socialLink.icon" />
            <span class="sr-only">{{ socialLink.text }}</span>
          </a>
        </li>
      </ul>
      <img class="footer__logo" src="~assets/images/logo.svg" :alt="`${siteconfig.brand_name} logo`">
      <address class="footer__contact">
        Smart contract: <a class="link" href="mailto:" rel="norefferer nofollow noopener">abcdefghijklmnopqrstuvwxyz</a>
      </address>
    </footer>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Navigation, Calculator, Card } from '@/components'
import siteconfig from '@/siteconfig.json'
import { ISocialLink } from '@/store'

interface IRoadmapCheckpoint {
  title: string;
  body: string;
  percentage: number;
}

interface IBonusTrait {
  image: {
    src: string;
    alt: string;
  };
  title: string;
  body: string;
}

interface IParrotDistribution {
  image: {
    src: string;
    alt: string;
  };
  title: string;
  body: string;
}

interface ITeamMember {
  image: {
    src: string;
    alt: string;
  },
  name: string;
  job: string;
  socials: {
    platform: string;
    url: string;
  }[]
}

export default Vue.extend({
  components: { Navigation, Calculator, Card },
  data () {
    return {
      siteconfig
    }
  },
  computed: {
    roadmapCheckpoints (): IRoadmapCheckpoint[] {
      return [
        {
          title: 'Heading goes here',
          body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ante nibh, vestibulum ac faucibus in, ornare sit amet erat.',
          percentage: 25
        },
        {
          title: 'Heading goes here',
          body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ante nibh, vestibulum ac faucibus in, ornare sit amet erat.',
          percentage: 50
        },
        {
          title: 'Heading goes here',
          body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ante nibh, vestibulum ac faucibus in, ornare sit amet erat.',
          percentage: 75
        },
        {
          title: 'Heading goes here',
          body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ante nibh, vestibulum ac faucibus in, ornare sit amet erat.',
          percentage: 100
        }
      ]
    },
    bonusTraits (): IBonusTrait[] {
      return [
        {
          image: {
            src: 'gold-beak.svg',
            alt: 'A golden parrot beak'
          },
          title: 'Goldbeak Club',
          body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in ante tortor. Vivamus hendrerit justo at ligula molestie, eu luctus lorem placerat.'
        },
        {
          image: {
            src: 'powah-ring.svg',
            alt: 'Gold ring with the Etherum logo'
          },
          title: 'Ring of Powah',
          body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in ante tortor. Vivamus hendrerit justo at ligula molestie, eu luctus lorem placerat.'
        },
        {
          image: {
            src: 'npp-tatoo.svg',
            alt: 'Tattoo with the NPP logo'
          },
          title: 'NPP Tatoo',
          body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in ante tortor. Vivamus hendrerit justo at ligula molestie, eu luctus lorem placerat.'
        }
      ]
    },
    parrotDistribution (): IParrotDistribution[] {
      return [
        {
          image: {
            src: 'prize-box.svg',
            alt: 'Prize box'
          },
          title: '1-100',
          body: 'These are reserved for founders and giveaways.'
        },
        {
          image: {
            src: 'egg-nest.svg',
            alt: 'Nest with eggs'
          },
          title: '101-9990',
          body: 'These will be available to the public via minting.'
        },
        {
          image: {
            src: 'gavel.svg',
            alt: 'Gavel'
          },
          title: '9990-10,000',
          body: 'These will be auctioned off.'
        }
      ]
    },
    teamMembers (): ITeamMember[] {
      return [
        {
          image: {
            src: 'sheftali-parrot.svg',
            alt: 'Red parrot'
          },
          name: 'Sheftali',
          job: 'Artist/Web Designer',
          socials: [
            {
              platform: 'Twitter',
              url: 'https://twitter.com/iamsheftali'
            },
            {
              platform: 'Instagram',
              url: 'https://linkedin.com'
            }
          ]
        },
        {
          image: {
            src: 'iacove-parrot.svg',
            alt: 'Blue parrot'
          },
          name: 'Iacove',
          job: 'Smart Contract Developer',
          socials: [
            {
              platform: 'Twitter',
              url: 'https://twitter.com'
            },
            {
              platform: 'Instagram',
              url: 'https://linkedin.com'
            }
          ]
        }
      ]
    },
    socialLinks (): ISocialLink[] {
      return this.$store.state.socialLinks
    }
  }
})
</script>

<style lang="scss" scoped>
.header {
  position: relative;
  background-image: url(~assets/images/header-bg-desktop.png);
  background-repeat: no-repeat;
  background-position: bottom;
  background-size: cover;

  @media (min-width: $responsive-standard-tablet) {
    min-height: 36rem;
    height: 90vh;
    max-height: 46rem;
  }

  &__calculator {
    margin-top: 4rem;
    margin-inline: 1rem;

    @media (min-width: $responsive-large-mobile) {
      margin-top: 8rem;
      margin-inline: auto;
    }

    @media (min-width: $responsive-standard-tablet) {
      margin-top: 0;
      position: absolute;
      top: 60%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
}

.about {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin-block: 9rem;

  &__text {
    max-width: 23rem;
    margin-inline: auto;
  }

  h2 {
    font-size: var(--font-size-subtitle);
    margin-top: 0;
    margin-bottom: 2.75rem;
  }
}

.roadmap {
  background-color: var(--npp-light-beige);
  padding: 2.25rem 1rem 3.5rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: $responsive-small-tablet) {
    padding-top: 4.125rem;
    padding-bottom: 5.5rem;
  }

  h2 {
    margin-top: 0;
    margin-bottom: 2rem;
    font-size: var(--font-size-title);

    @media (min-width: $responsive-small-tablet) {
      margin-bottom: 2.375rem;
    }
  }

  &__cards {
    padding-left: 0;
    list-style-type: none;
    margin: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.75rem;

    li {
      display: flex;
      justify-content: space-between;
      gap: 1rem;

      @media (min-width: $responsive-small-tablet) {
        display: grid;
        grid-template-areas: "card card percentage . .";
        grid-template-columns: repeat(5, 1fr);
        place-items: center;

        &:nth-child(even) {
          grid-template-areas: ". . percentage card card";
        }
      }
    }
  }

  &__percentage {
    border-radius: 50%;
    background-color: var(--npp-orange);
    color: #fff;
    display: grid;
    place-items: center;
    min-height: 3.75rem;
    max-height: 3.75rem;
    min-width: 3.75rem;
    max-width: 3.75rem;
    font-family: var(--font-family-saira-stencil-one);
    font-size: var(--font-size-body);

    @media (min-width: $responsive-small-tablet) {
      grid-area: percentage;
      min-height: 7.5rem;
      max-height: 7.5rem;
      min-width: 7.5rem;
      max-width: 7.5rem;
      font-size: var(--font-size-title);
    }

    p {
      display: flex;
      align-items: center;
      white-space: nowrap;
      margin: 0;
    }

    &-symbol {
      font-size: var(--font-size-small);

      @media (min-width: $responsive-small-tablet) {
        font-size: var(--font-size-subtitle);
      }
    }
  }

  .card {
    @media (min-width: $responsive-small-tablet) {
      grid-area: card;
      max-width: 23rem;
    }

    &__title {
      font-size: var(--font-size-subtitle);
      margin-top: 0;
      margin-bottom: 0.25rem;
      line-height: 1.4;

      @media (min-width: $responsive-small-tablet) {
        margin-bottom: 1rem;
      }
    }

    p {
      margin: 0;
      line-height: 1.4;
    }
  }
}

.bonus {
  padding: 6.25rem 1rem 5.5rem 1rem;

  h2 {
    margin-top: 0;
    margin-bottom: 2.5rem;
    font-size: var(--font-size-title);
    text-align: center;
  }

  &__things {
    display: grid;
    grid-template-columns: 1fr;
    gap: 3rem 1rem;
    place-items: center;
    list-style-type: none;
    padding-left: 0;
    margin: 0;

    @media (min-width: $responsive-small-tablet) {
      grid-template-columns: repeat(2, 1fr);

      li:nth-child(3) {
        grid-column: span 2;
      }
    }

    @media (min-width: $responsive-large-tablet) {
      grid-template-columns: repeat(3, 1fr);

      li {
        grid-column: span 1 !important;
      }
    }

    li {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      max-width: 23rem;

      img {
        height: 8rem;
        width: 8rem;
      }

      h3 {
        font-size: var(--font-size-subtitle);
        margin-top: 1.5rem;
        margin-bottom: 0.75rem;
      }

      p {
        margin: 0;
      }
    }
  }
}

.parrot {
  padding: 6.25rem 1rem 22rem 1rem;
  background-color: var(--npp-light-green);

  h2 {
    margin-top: 0;
    margin-bottom: 2.5rem;
    font-size: var(--font-size-title);
    text-align: center;
  }

  &__things {
    display: grid;
    grid-template-columns: 1fr;
    gap: 3rem 1rem;
    place-items: center;
    list-style-type: none;
    padding-left: 0;
    margin: 0;

    @media (min-width: $responsive-small-tablet) {
      grid-template-columns: repeat(2, 1fr);

      li:nth-child(3) {
        grid-column: span 2;
      }
    }

    @media (min-width: $responsive-large-tablet) {
      grid-template-columns: repeat(3, 1fr);

      li {
        grid-column: span 1 !important;
      }
    }

    li {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      max-width: 23rem;

      img {
        height: 8rem;
        width: 8rem;
      }

      h3 {
        font-size: var(--font-size-subtitle);
        margin-top: 1.5rem;
        margin-bottom: 0.75rem;
      }

      p {
        margin: 0;
      }
    }
  }
}

.faqs {
  padding: 21rem 1rem 3.5rem 1rem;
  background-color: var(--npp-light-beige);

  h2 {
    margin-top: 0;
    margin-bottom: 2.5rem;
    font-size: var(--font-size-title);
    text-align: center;
  }
}

.team {
  height: 0;
  position: relative;
  display: flex;
  align-items: center;

  div {
    background-color: #fff;
    border-radius: var(--border-radius-standard);
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
    max-width: 48rem;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    padding: 2.625rem 9rem 4rem 9rem;

    h2 {
      margin-top: 0;
      margin-bottom: 1rem;
      font-size: var(--font-size-title);
      text-align: center;
    }
  }

  &__people {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1rem;
    list-style-type: none;
    padding-left: 0;
    margin: 0;

    @media (min-width: $responsive-standard-tablet) {
      grid-template-columns: repeat(2, 50%);
    }

    img {
      height: 9rem;
      width: 9.625rem;
    }

    > li {
      display: flex;
      flex-direction: column;
      align-items: center;

      h3 {
        margin-top: 1.5rem;
        margin-bottom: 0;
        font-size: var(--font-size-subtitle);
      }

      p {
        margin: 0;
        white-space: nowrap;
      }
    }
  }

  &__socials {
    display: flex;
    gap: 0.5rem;
    align-items: center;
    list-style-type: none;
    padding-left: 0;
    margin-top: 0.5rem;
    margin-bottom: 0;

    a {
      height: 1.5rem;
      width: 1.5rem;
      display: block;
    }
  }
}

.footer {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2.5rem 1rem 0.25rem 1rem;

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
    height: 8rem;
    width: 8rem;
    margin-block: 1.5rem;
  }

  &__contact {
    font-size: var(--font-size-small);
    font-style: normal;
  }
}
</style>
