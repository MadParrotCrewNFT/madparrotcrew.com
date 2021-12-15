<template>
  <div>
    <header class="header">
      <navigation />
      <div class="header__calculator-wrapper">
        <calculator class="header__calculator" />
      </div>
      <div class="header__curve">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z" fill="currentColor" />
        </svg>
      </div>
      <div class="header__block"></div>
    </header>
    <section id="about" class="about">
      <div>
        <div class="about__text">
          <h2>About <span :aria-label="siteconfig.brand_name">MPC</span></h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
      </div>
      <div class="about__parrots">
        <img src="~/assets/images/about-parrots-mobile.svg" alt="Two parrots waving">
        <img src="~/assets/images/about-parrots-desktop.svg" alt="Two parrots waving">
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
    <section id="distribution" class="distribution">
      <h2>Distribution</h2>
      <ul class="distribution__cards">
        <li v-for="distribution in parrotDistribution" :key="distribution.image.src">
          <card class="distribution__card">
            <img :src="require(`@/assets/images/${distribution.image.src}`)" :alt="distribution.image.alt">
            <h3>{{ distribution.title }}</h3>
            <p>{{ distribution.body }}</p>
          </card>
        </li>
      </ul>
    </section>
    <section id="team" class="team">
      <div>
        <h2>The team</h2>
        <ul class="team__people team__people--mobile">
          <li v-for="member in teamMembers" :key="member.name">
            <card class="team__card">
              <img :src="require(`@/assets/images/${member.image.src}`)" :alt="member.image.alt">
              <div>
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
              </div>
            </card>
          </li>
        </ul>
        <div class="team__people team__people--desktop">
          <div class="team__people--1">
            <h3>{{ teamMembers[0].name }}</h3>
            <p>{{ teamMembers[0].job }}</p>
            <ul class="team__socials">
              <li v-for="social in teamMembers[0].socials" :key="social.platform">
                <a :href="social.url" :title="social.platform" target="_blank">
                  <img v-if="social.platform.toLowerCase() === 'instagram'" src="~assets/images/instagram.svg" :alt="social.platform" >
                  <svg-icon v-else :name="social.platform.toLowerCase()" />
                  <span class="sr-only">{{ social.platform }}</span>
                </a>
              </li>
            </ul>
          </div>
          <div class="team__parrots">
            <img src="https://picsum.photos/568/444" alt="Two parrots smoking cigars">
          </div>
          <div class="team__people--2">
            <h3>{{ teamMembers[1].name }}</h3>
            <p>{{ teamMembers[1].job }}</p>
            <ul class="team__socials">
              <li v-for="social in teamMembers[1].socials" :key="social.platform">
                <a :href="social.url" :title="social.platform" target="_blank">
                  <img v-if="social.platform.toLowerCase() === 'instagram'" src="~assets/images/instagram.svg" :alt="social.platform" >
                  <svg-icon v-else :name="social.platform.toLowerCase()" />
                  <span class="sr-only">{{ social.platform }}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    <section id="faqs" class="faqs">
      <div class="faqs__inner">
        <h2>FAQs</h2>
        <accordion>
          <accordion-item id="1" heading-tag="h3" heading="Accordion title">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <btn color="dark-blue" small>
              I'm ready to mint
            </btn>
          </accordion-item>
          <accordion-item id="2" heading-tag="h3" heading="Accordion title">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <btn color="dark-blue" small>
              I'm ready to mint
            </btn>
          </accordion-item>
          <accordion-item id="3" heading-tag="h3" heading="Accordion title">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <btn color="dark-blue" small>
              I'm ready to mint
            </btn>
          </accordion-item>
          <accordion-item id="4" heading-tag="h3" heading="Accordion title">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <btn color="dark-blue" small>
              I'm ready to mint
            </btn>
          </accordion-item>
          <accordion-item id="5" heading-tag="h3" heading="Accordion title">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <btn color="dark-blue" small>
              I'm ready to mint
            </btn>
          </accordion-item>
          <accordion-item id="6" heading-tag="h3" heading="Accordion title">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <btn color="dark-blue" small>
              I'm ready to mint
            </btn>
          </accordion-item>
        </accordion>
      </div>
    </section>
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
      <img class="footer__logo" src="" :alt="`${siteconfig.brand_name} logo`">
      <address class="footer__contact">
        Smart contract: <a class="link" href="mailto:" rel="norefferer nofollow noopener">abcdefghijklmnopqrstuvwxyz</a>
      </address>
    </footer>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Navigation, Calculator, Card, Accordion, AccordionItem, Btn } from '@/components'
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
  components: { Navigation, Calculator, Card, Accordion, AccordionItem, Btn },
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
            alt: 'Gold ring with the Ethereum logo'
          },
          title: 'Ring of Powah',
          body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in ante tortor. Vivamus hendrerit justo at ligula molestie, eu luctus lorem placerat.'
        },
        {
          image: {
            src: 'mpc-tattoo.svg',
            alt: 'Tattoo with the mpc logo'
          },
          title: 'MPC Tattoo',
          body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in ante tortor. Vivamus hendrerit justo at ligula molestie, eu luctus lorem placerat.'
        }
      ]
    },
    parrotDistribution (): IParrotDistribution[] {
      return [
        {
          image: {
            src: 'prize-box.svg',
            alt: 'Prize box with a parrot egg inside'
          },
          title: '1-100',
          body: 'These are reserved for founders and giveaways.'
        },
        {
          image: {
            src: 'egg-incubator.svg',
            alt: 'Parrot eggs inside incubators'
          },
          title: '101-9990',
          body: 'These will be available to the public via minting.'
        },
        {
          image: {
            src: 'gavel.svg',
            alt: 'Gavel'
          },
          title: '9991-10,000',
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
          job: 'All the arty stuff',
          socials: [
            {
              platform: 'Twitter',
              url: 'https://twitter.com/iamsheftali'
            },
            {
              platform: 'Instagram',
              url: 'https://instagram.com'
            }
          ]
        },
        {
          image: {
            src: 'iacove-parrot.svg',
            alt: 'Blue parrot'
          },
          name: 'Iacove',
          job: 'All the techy stuff',
          socials: [
            {
              platform: 'Twitter',
              url: 'https://twitter.com'
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
@keyframes swing-wing {
  0%, 100% {
    transform: rotate(-20deg);
  }
  50% {
    transform: rotate(6deg)
  }
}

@keyframes swing-wing-reverse {
  0%, 100% {
    transform: rotate(-6deg);
  }
  50% {
    transform: rotate(20deg)
  }
}

.header {
  position: relative;
  background-image: url(~assets/images/header-bg-mobile.png);
  background-repeat: no-repeat;
  background-position: bottom;
  background-size: cover;

  @media (min-width: $responsive-standard-tablet) {
    background-image: url(~assets/images/header-bg-desktop.png);
    min-height: 36rem;
    height: 90vh;
    max-height: 40rem;
  }

  // Parrot
  &::before {
    @media (min-width: $responsive-large-tablet) {
      content: '';
      pointer-events: none;
      background-image: url(~assets/images/header-parrot.svg);
      background-repeat: no-repeat;
      background-position: bottom;
      background-size: cover;
      width: 314px;
      height: 646px;
      position: absolute;
      bottom: -17rem;
      left: 1rem;
    }

    @media (min-width: $responsive-small-desktop) {
      left: 8rem
    }

    @media (min-width: $responsive-standard-desktop) {
      left: 17rem
    }
  }

  // Parrot wing
  &::after {
    @media (min-width: $responsive-large-tablet) {
      content: '';
      pointer-events: none;
      background-image: url(~assets/images/header-parrot-wing.svg);
      background-repeat: no-repeat;
      background-position: bottom;
      background-size: cover;
      width: 125px;
      height: 306px;
      position: absolute;
      bottom: -5rem;
      left: 1rem;
      transform-origin: top;
      animation: swing-wing 5s infinite;
    }

    @media (min-width: $responsive-small-desktop) {
      left: 8rem
    }

    @media (min-width: $responsive-standard-desktop) {
      left: 17rem
    }
  }

  &__curve {
    display: none;

    @media (min-width: $responsive-large-tablet) {
      display: block;
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      overflow: hidden;
      line-height: 0;

      svg {
        position: relative;
        left: 50%;
        transform: translateX(-50%);
        display: block;
        width: calc(110% + 1.3px);
        height: 38px;
        color: #fff;
      }
    }
  }

  &__block {
    display: none;

    @media (min-width: $responsive-large-tablet) {
      display: block;
      width: 100%;
      height: 18rem;
      background-color: #fff;
      position: absolute;
      top: calc(100% - 1px);
    }
  }

  &__calculator {
    position: relative;

    &-wrapper {
      margin-top: 4rem;
      margin-inline: 1rem;
      position: relative;
      top: 1rem;

      @media (min-width: $responsive-large-mobile) {
        margin-top: 8rem;
        margin-inline: auto;
        max-width: max-content;
      }

      @media (min-width: $responsive-standard-tablet) {
        margin-top: 0;
        position: absolute;
        top: 60%;
        left: 50%;
        transform: translate(-50%, -50%);
      }

      // Parrot
      &::before {
        content: '';
        pointer-events: none;
        background-image: url(~assets/images/header-parrot.svg);
        background-repeat: no-repeat;
        background-position: bottom;
        background-size: cover;
        width: 90px;
        height: 190px;
        position: absolute;
        top: -5rem;
        left: 2rem;

        @media (min-width: $responsive-standard-tablet) {
          top: -2rem;
        }

        @media (min-width: $responsive-large-tablet) {
          display: none;
        }
      }

      // Parrot wing
      &::after {
        content: '';
        pointer-events: none;
        background-image: url(~assets/images/header-parrot-wing.svg);
        background-repeat: no-repeat;
        background-position: bottom;
        background-size: cover;
        width: 34px;
        height: 82px;
        position: absolute;
        top: -2rem;
        left: 2rem;
        transform-origin: top;
        animation: swing-wing 5s infinite;

        @media (min-width: $responsive-standard-tablet) {
          top: 1rem;
        }

        @media (min-width: $responsive-large-tablet) {
          display: none;
        }
      }
    }
  }
}

.about {
  display: grid;
  grid-template-columns: 1fr;
  background: linear-gradient(180deg, rgba(209,67,0,1) 0%, rgba(217,103,49,1) 100%);
  color: #fff;
  text-align: center;

  @media (min-width: $responsive-large-tablet) {
    grid-template-columns: repeat(2, 1fr);
    background: #fff;
    color: currentColor;
    text-align: left;
  }

  &__text {
    position: relative;
    max-width: 23rem;
    margin-inline: auto;
    margin-top: 2.5rem;
    margin-bottom: 9rem;
    padding-inline: 1rem;

    @media (min-width: $responsive-large-tablet) {
      margin-block: 9rem;
    }
  }

  h2 {
    font-size: var(--font-size-title);
    margin-top: 0;
    margin-bottom: 0.5rem;
    color: #fff;

    @media (min-width: $responsive-large-tablet) {
      margin-bottom: 2.75rem;
      color: currentColor;
    }
  }

  &__parrots {
    position: relative;
    text-align: left;

    img {
      &[src *= "mobile"] {
        position: relative;
        bottom: -1.8rem;
        left: 50%;
        transform: translateX(-50%);
        height: 15.625rem;
        margin-top: -10rem;

        @media (min-width: $responsive-large-tablet) {
          display: none;
        }
      }

      &[src *= "desktop"] {
        display: none;

        @media (min-width: $responsive-large-tablet) {
          position: absolute;
          display: block;
          height: 110%;
          bottom: -3rem;
          left: 50%;
          transform: translateX(-50%);
        }
      }
    }
  }
}

.roadmap {
  background-color: var(--mpc-light-beige);
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
    background-color: var(--mpc-orange);
    color: #fff;
    display: grid;
    place-items: center;
    min-height: 3.75rem;
    max-height: 3.75rem;
    min-width: 3.75rem;
    max-width: 3.75rem;
    font-family: var(--font-family-ampersand);
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

.distribution {
  padding: 6.25rem 1rem 3rem 1rem;
  background-color: var(--mpc-lightest-green);

  @media (min-width: $responsive-standard-tablet) {
    padding-bottom: 4rem;
  }

  @media (min-width: $responsive-small-desktop) {
    padding-inline: 6rem;
  }

  h2 {
    margin-top: 0;
    margin-bottom: 2.5rem;
    font-size: var(--font-size-title);
    text-align: center;
  }

  &__cards {
    display: grid;
    grid-template-columns: 1fr;
    gap: 0.5rem;
    place-items: center;
    list-style-type: none;
    padding-left: 0;
    margin: 0;

    li {
      height: 100%;
      width: 100%;
      display: flex;
      justify-content: center;
    }

    @media (min-width: $responsive-small-tablet) {
      grid-template-columns: repeat(2, 1fr);
      gap: 1rem;

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
  }

  &__card {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    height: 100%;
    max-width: 23rem;
    width: 100%;

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

.team {
  background-color: var(--mpc-light-green);
  padding: 2.5rem 1rem 3.5rem 1rem;

  @media (min-width: $responsive-standard-tablet) {
    background-color: #fff;
    padding-top: 2.75rem;
    padding-bottom: 0;
  }

  h2 {
    margin-top: 0;
    margin-bottom: 2.5rem;
    font-size: var(--font-size-title);
    text-align: center;
    color: #fff;

    @media (min-width: $responsive-standard-tablet) {
      color: currentColor;
    }
  }

  &__people {
    @media (max-width: calc($responsive-standard-tablet - 1px)) {
      padding-left: 0;
      list-style-type: none;
      display: flex;
      flex-direction: column;
      gap: 2rem;

      li {
        .team__card {
          flex-direction: row;
          padding: 1.5rem 1rem;
          position: relative;
          text-align: right;

          img {
            position: absolute;
            left: 0;
            bottom: 0;
            height: 110%;
          }

          &::after {
            content: '';
            pointer-events: none;
            background-image: url(~assets/images/sheftali-parrot-wing.svg);
            background-repeat: no-repeat;
            background-position: bottom;
            background-size: cover;
            height: 125px;
            width: 52px;
            position: absolute;
            left: 0.3rem;
            top: 3rem;
            transform-origin: top;
            animation: swing-wing 5s infinite;
          }

          > div {
            width: 100%;
          }

          h3 {
            font-size: var(--font-size-subtitle);
            margin: 0;
          }

          p {
            margin-top: 0;
            margin-bottom: 0.75rem;
          }
        }

        &:nth-child(even) {
          .team__card {
            text-align: left;

            img {
              right: 0;
              left: unset;
            }

            &::after {
              background-image: url(~assets/images/iacove-parrot-wing.svg);
              left: unset;
              right: 0.6rem;
              top: 3rem;
              animation: swing-wing-reverse 6s infinite 1s;
            }
          }
        }
      }
    }
    @media (min-width: $responsive-standard-tablet) {
      display: grid;
      grid-template-columns: 1fr 2fr 1fr;
      gap: 1rem;

      &--1 {
        text-align: right;
      }

      h3 {
        font-size: var(--font-size-subtitle);
        margin: 0;
      }

      p {
        margin-top: 0;
        margin-bottom: 0.75rem;
      }
    }

    &--mobile {
      @media (min-width: $responsive-standard-tablet) {
        display: none;
      }
    }

    &--desktop {
      @media (max-width: calc($responsive-standard-tablet - 1px)) {
        display: none;
      }
    }
  }

  &__parrots {
    display: flex;
    justify-content: center;
  }

  &__socials {
    display: inline-flex;
    gap: 0.5rem;
    padding-left: 0;
    list-style-type: none;
    margin: 0;

    a {
      display: block;
      height: 100%;
    }

    svg {
      height: 2rem;
      width: 2rem;
    }
  }
}

.faqs {
  @media (min-width: $responsive-small-desktop) {
    padding-inline: 13rem;
  }

  &__inner {
    padding: 3rem 1rem;
    background-color: var(--mpc-light-beige);
    // max-width: 64rem;
    // margin-inline: auto;

    @media (min-width: $responsive-standard-tablet) {
      padding: 3rem 6.25rem 4.5rem 6.25rem;
    }
  }

  h2 {
    margin-top: 0;
    margin-bottom: 1rem;
    font-size: var(--font-size-title);
    text-align: center;
  }
}

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
