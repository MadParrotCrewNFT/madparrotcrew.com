<template>
  <div>
    <header class="header">
      <navigation />
      <div class="header__calculator-wrapper">
        <calculator v-if="config.MINTING_LIVE" class="header__calculator" />
        <img v-else class="header__soon" src="~assets/images/minting-coming-soon.png" alt="Minting coming soon" width="424" height="245" loading="lazy" />
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
        <div class="about__parrots--desktop">
          <img src="~assets/images/about-parrot-back.png" alt="An orange parrot smoking a cigar" loading="lazy" />
          <img src="~assets/images/about-parrot-front.png" alt="A green parrot wearing a tuxedo drinking red wine" loading="lazy" />
          <img src="~assets/images/about-parrot-feet.png" alt="" loading="lazy" />
        </div>
      </div>
      <div class="about__text">
        <h2>
          First rule of <span :aria-label="siteconfig.brand_name">MPC</span> is...
        </h2>
        <p aria-describedby="fight-club">
          ...not to steal quotes from Fight Club<span aria-hidden="true">*</span>.
        </p>
        <p aria-describedby="to-be-clear">
          The {{ siteconfig.brand_name }} are a bunch of randomly generated parrots who like to wear goofy shit, drink lots, fight more and can often be spotted holding anything (and everything) from a glass of wine to a deadly Katana<span aria-hidden="true">**</span>.
        </p>
        <p>
          You can check out the <a :href="config.SCAN_LINK" target="_blank" rel="norefferer noopener" class="link">verified smart contract</a> on etherscan.
        </p>
        <p id="fight-club" class="small" style="margin-top: 3rem">
          <span aria-hidden="true">*</span> It's a great film, check it out.
        </p>
        <p id="to-be-clear" class="small">
          <span aria-hidden="true">**</span> Just so we're clear, we don't condone violence of any kind nor do we endorse the idea that parrots are deadly psychopaths. However, we do find the idea of a parrot holding nunchucks, smoking a joint or sporting an afro is absolutely fucking hilarious and we hope you do as well.
        </p>
      </div>
      <div class="about__parrots--mobile">
        <img src="~assets/images/about-parrot-back.png" alt="An orange parrot smoking a cigar" loading="lazy" />
        <img src="~assets/images/about-parrot-front.png" alt="A green parrot wearing a tuxedo drinking red wine" loading="lazy" />
        <img src="~assets/images/about-parrot-feet.png" alt="" loading="lazy" />
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
    <section id="bonus-trait" class="bonus bonus--desktop">
      <div class="bonus__image">
        <img src="~assets/images/diamond-beak.png" alt="A diamond parrot beak" loading="lazy" height="120" width="120" />
      </div>
      <h2>Diamond beak club</h2>
      <p>
        If your parrot has a diamond beak, something good happens (tba)
      </p>
    </section>
    <section id="distribution" class="distribution">
      <h2>Distribution</h2>
      <ul class="distribution__things">
        <li v-for="distribution in parrotDistribution" :key="distribution.image.src">
          <div class="distribution__img">
            <img :src="require(`@/assets/images/${distribution.image.src}`)" :alt="distribution.image.alt">
          </div>
          <h3>{{ distribution.title }}</h3>
          <p>{{ distribution.body }}</p>
        </li>
      </ul>
    </section>
    <section id="bonus-trait" class="bonus bonus--mobile">
      <img src="~assets/images/diamond-beak.png" alt="A diamond parrot beak" loading="lazy" height="64" width="64" />
      <h2>Diamond beak club</h2>
      <p>
        If your parrot has a diamond beak, something good happens (tba)
      </p>
    </section>
    <section id="team" class="team">
      <div>
        <h2>The team</h2>
        <ul class="team__people team__people--mobile">
          <li v-for="member in teamMembers" :key="member.name">
          <div class="team-member__img">
            <img :src="require(`@/assets/images/${member.image.src}`)" :alt="member.image.alt" loading ="lazy" height="172" width="157" />
          </div>
            <div>
              <h3>{{ member.name }}</h3>
              <p>{{ member.job }}</p>
              <ul class="team__socials">
                <li v-for="social in member.socials" :key="social.platform">
                  <a :href="social.url" :title="social.platform" target="_blank">
                    <img v-if="social.platform.toLowerCase() === 'instagram'" src="~assets/images/instagram-white.svg" :alt="social.platform" loading="lazy" />
                    <svg-icon v-else :name="`${social.platform.toLowerCase()}-white`" />
                    <span class="sr-only">{{ social.platform }}</span>
                  </a>
                </li>
              </ul>
            </div>
          </li>
        </ul>
        <div class="team__people team__people--desktop">
          <div class="team__people--1">
            <h3>{{ teamMembers[0].name }}</h3>
            <p>{{ teamMembers[0].job }}</p>
            <ul class="team__socials">
              <li v-for="social in teamMembers[0].socials" :key="social.platform">
                <a :href="social.url" :title="social.platform" target="_blank">
                  <img v-if="social.platform.toLowerCase() === 'instagram'" src="~assets/images/instagram.svg" :alt="social.platform" loading="lazy" />
                  <svg-icon v-else :name="social.platform.toLowerCase()" />
                  <span class="sr-only">{{ social.platform }}</span>
                </a>
              </li>
            </ul>
          </div>
          <div class="team__parrots">
            <img src="~assets/images/team-desktop.png" alt="Two parrots holding torches and a wrench" loading="lazy" height="654" width="568" />
            <img src="~assets/images/team-feet.png" alt="" loading="lazy" height="131" width="90" />
          </div>
          <div class="team__people--2">
            <h3>{{ teamMembers[1].name }}</h3>
            <p>{{ teamMembers[1].job }}</p>
            <ul class="team__socials">
              <li v-for="social in teamMembers[1].socials" :key="social.platform">
                <a :href="social.url" :title="social.platform" target="_blank">
                  <img v-if="social.platform.toLowerCase() === 'instagram'" src="~assets/images/instagram.svg" :alt="social.platform" loading="lazy" />
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
          </accordion-item>
          <accordion-item id="2" heading-tag="h3" heading="Accordion title">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </accordion-item>
          <accordion-item id="3" heading-tag="h3" heading="Accordion title">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </accordion-item>
          <accordion-item id="4" heading-tag="h3" heading="Accordion title">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </accordion-item>
          <accordion-item id="5" heading-tag="h3" heading="Accordion title">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </accordion-item>
          <accordion-item id="6" heading-tag="h3" heading="Will there be any one-of-ones?">
            <p>
              Yeah of course! It wouldn't be a sick collection without some one-of-ones now would it? We're going to release 10, and they'll be nothing like you've seen before.
            </p>
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
      <logo class="footer__logo" />
      <address class="footer__contact">
        Verified smart contract: <a class="link" :href="config.SCAN_LINK" rel="norefferer nofollow noopener" target="_blank">{{ config.CONTRACT_ADDRESS }}</a>
      </address>
    </footer>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Navigation, Calculator, Card, Accordion, AccordionItem, Btn, Logo } from '@/components'
import siteconfig from '@/siteconfig.json'
import config from '@/config.json'
import { ISocialLink } from '@/store'

interface IRoadmapCheckpoint {
  title: string;
  body: string;
  percentage: number;
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
  components: { Navigation, Calculator, Card, Accordion, AccordionItem, Btn, Logo },
  data () {
    return {
      siteconfig,
      config
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
    parrotDistribution (): IParrotDistribution[] {
      return [
        {
          image: {
            src: 'prize-box.svg',
            alt: 'Prize box with a parrot egg inside'
          },
          title: '1-100',
          body: 'These are reserved for founders, early supporters and giveaways.'
        },
        {
          image: {
            src: 'egg-incubator.svg',
            alt: 'Parrot eggs inside incubators'
          },
          title: '101-10,000',
          body: 'These will be available to the public via minting.'
        }
      ]
    },
    teamMembers (): ITeamMember[] {
      return [
        {
          image: {
            src: 'sheftali-parrot.png',
            alt: 'A purple parrot wearing a waste coat holding a torch'
          },
          name: 'Sheftali',
          job: 'All the arty stuff',
          socials: [
            {
              platform: 'Twitter',
              url: config.SHEFTALI.TWITTER
            },
            {
              platform: 'Instagram',
              url: config.SHEFTALI.INSTAGRAM
            }
          ]
        },
        {
          image: {
            src: 'iacove-parrot.png',
            alt: 'A grey parrot holding a wrench'
          },
          name: 'Iac',
          job: 'All the web3 stuff',
          socials: [
            {
              platform: 'Twitter',
              url: config.IACOVE.TWITTER
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
  background-image: url(~assets/images/header-bg-mobile.png);
  background-repeat: no-repeat;
  background-position: top;
  background-size: cover;

  @media (min-width: $responsive-standard-tablet) {
    background-image: url(~assets/images/header-bg-desktop.png);
    min-height: 36rem;
    height: 90vh;
    max-height: 40rem;
  }

  @media (min-width: $responsive-small-desktop) {
    background-position: center;
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
      right: 1rem;
    }

    @media (min-width: $responsive-small-desktop) {
      right: 8rem
    }

    @media (min-width: $responsive-standard-desktop) {
      right: 17rem
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
      right: 1rem;
      transform-origin: top;
    }

    @media (min-width: $responsive-small-desktop) {
      right: 8rem
    }

    @media (min-width: $responsive-standard-desktop) {
      right: 17rem
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

  &__soon {
    width: 26.5rem;
    position: relative;
  }

  &__calculator {
    position: relative;

    &-wrapper {
      margin-top: 2rem;
      margin-inline: 1rem;
      position: relative;
      top: 5.5rem;

      @media (min-width: $responsive-large-mobile) {
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
        background-image: url(~assets/images/header-parrot-mobile.svg);
        background-repeat: no-repeat;
        background-position: bottom;
        background-size: cover;
        width: 90px;
        height: 190px;
        position: absolute;
        top: -6rem;
        left: 50%;
        transform: translateX(-50%);

        @media (min-width: $responsive-large-tablet) {
          display: none;
        }
      }

      // Parrot wing
      &::after {
        content: '';
        pointer-events: none;
        background-image: url(~assets/images/header-parrot-wing-mobile.svg);
        background-repeat: no-repeat;
        background-position: bottom;
        background-size: cover;
        width: 34px;
        height: 82px;
        position: absolute;
        top: -3.3rem;
        left: calc(50% - 2.7rem);
        transform: translateX(50%);
        transform-origin: top;

        @media (min-width: $responsive-large-tablet) {
          display: none;
        }
      }
    }
  }
}

.about {
  position: relative;
  display: grid;
  grid-template-columns: 1fr;
  background-color: var(--mpc-purple);
  color: #fff;
  text-align: center;

  @media (min-width: $responsive-large-tablet) {
    position: unset;
    grid-template-columns: 2fr 1fr;
    background: #fff;
    color: currentColor;
    text-align: left;
  }

  @media (min-width: $responsive-small-desktop) {
    grid-template-columns: repeat(2, 1fr);
  }

  > div::nth-child(1) {
    max-width: 800px;
  }

  &__text {
    position: relative;
    max-width: 30rem;
    margin-inline: auto;
    margin-top: 6rem;
    margin-bottom: 12rem;
    padding-inline: 1rem;

    @media (min-width: $responsive-standard-tablet) {
      margin-top: 2rem;
    }

    @media (min-width: $responsive-large-tablet) {
      margin-top: 2rem;
      margin-bottom: 2.5rem;
    }

    @media (min-width: $responsive-small-desktop) {
      max-width: 35.5rem;
      margin-top: 5.125rem;
      margin-bottom: 2.875rem;
    }

    a {
      font-weight: 700;

      @media (max-width: $responsive-large-tablet + 0.0625em) {
        color: #fff;
      }
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
    &--mobile {
      background-image: url(~assets/images/about-oval.svg);
      background-position: bottom;
      background-repeat: no-repeat;
      background-size: contain;

      @media (min-width: $responsive-large-tablet) {
        display: none;
      }

      img {
        position: absolute;
        left: 45%;
        transform: translateX(-50%);

        &[src*="back"] {
          width: 140px;
          transform: rotate(2deg);
          bottom: -2rem;
        }

        &[src*="front"] {
          width: 128px;
          bottom: -4.5rem;
        }

        &[src*="feet"] {
          width: 32px;
          bottom: -1rem;
          z-index: 1;
        }
      }
    }

    &--desktop {
      display: none;

      @media (min-width: $responsive-large-tablet) {
        display: block;
        position: relative;
        bottom: 6%;
        height: 106%;
        background-image: url(~assets/images/about-oval.svg);
        background-position: bottom;
        background-repeat: no-repeat;
        background-size: contain;

        img {
          position: absolute;
          left: 40%;
          transform: translateX(-50%);

          &[src*="back"] {
            width: 320px;
            transform: rotate(2deg);
            bottom: -4rem;
          }

          &[src*="front"] {
            width: 350px;
            bottom: -13rem;
          }

          &[src*="feet"] {
            width: 86px;
            bottom: -3rem;
            z-index: 1;
          }
        }
      }
    }
  }
}

.roadmap {
  position: relative;
  background-color: var(--mpc-light-beige);
  padding: 2.25rem 1rem 3.5rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: $responsive-small-tablet) {
    padding-top: 4.125rem;
    padding-bottom: 10rem;
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
  display: flex;
  flex-direction: column;
  align-items: center;

  &--mobile {
    padding: 3rem 1.5rem;

    img {
      height: 64px;
      width: 64px;
    }

    @media (min-width: $responsive-standard-tablet) {
      display: none;
    }
  }

  &--desktop {
    display: none;

    @media (min-width: $responsive-standard-tablet) {
      display: flex;
      position: relative;
      padding: 6.25rem 1rem 5.5rem 1rem;

      .bonus__image {
        position: absolute;
        top: -84px;
        height: 168px;
        width: 168px;
        background-color: var(--mpc-burgandy);
        border: 10px solid #fff;
        display: grid;
        place-items: center;
        border-radius: 50%;
        box-shadow: inset 0px 0px 6px 5px rgba(0, 0, 0, 0.7);
      }

      p {
        max-width: 368px;
      }
    }
  }

  h2 {
    margin-top: 0;
    margin-bottom: 1.5rem;
    font-size: var(--font-size-title);
    text-align: center;
  }

  p {
    text-align: center;
    margin-block: 0;
  }
}

.distribution {
  padding: 6.25rem 1.5rem 3rem 1.5rem;
  background-color: var(--mpc-navy);

  @media (min-width: $responsive-standard-tablet) {
    padding-bottom: 4rem;
  }

  @media (min-width: $responsive-small-desktop) {
    padding-inline: 6rem;
  }

  h2 {
    margin-top: 0;
    margin-bottom: 4rem;
    font-size: var(--font-size-title);
    text-align: center;
    color: #fff;
  }

  &__things {
    display: grid;
    grid-template-columns: 1fr;
    gap: 2.5rem;
    place-items: center;
    list-style-type: none;
    padding-left: 0;
    margin: 0;

    li {
      height: 100%;
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    @media (min-width: $responsive-standard-tablet) {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  &__img {
    display: grid;
    place-items: center;
    background-color: #fff;
    text-align: center;
    height: 224px;
    width: 224px;
    border-radius: 50%;
    padding: 2.5rem;
  }

  h3 {
    color: var(--mpc-gold);
    font-size: var(--font-size-subtitle);
    margin-top: 1.5rem;
    margin-bottom: 0.75rem;
  }

  p {
    color: #fff;
    margin: 0;
    text-align: center;
  }
}

.team {
  background-color: var(--mpc-burgandy);
  padding: 3.125rem 1.5rem 4.5rem 1.5rem;

  @media (min-width: $responsive-small-desktop) {
    background-color: #fff;
    padding-top: 2.75rem;
    padding-bottom: 20.5rem;
  }

  h2 {
    margin-top: 0;
    margin-bottom: 4.875rem;
    font-size: var(--font-size-title);
    text-align: center;
    color: #fff;

    @media (min-width: $responsive-small-desktop) {
      color: currentColor;
    }
  }

  &__people {
    &--mobile {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 4rem;
      list-style-type: none;
      padding-left: 0;
      margin: 0;

      .team-member__img {
        background-color: #fff;
        border-radius: 50%;
        height: 126px;
        width: 126px;
        position: relative;

        img {
          max-width: unset;
          position: absolute;
          
          &[src*="sheftali"] {
            top: -23px;
            right: 4px;
          }

          &[src*="iacove"] {
            top: -26px;
            left: -2px;
          }
        }
      }

      h3 {
        font-size: var(--font-size-heading);
        color: var(--mpc-gold);
        text-align: center;
        margin-top: 1rem;
        margin-bottom: 0.5rem;
      }

      p {
        color: #fff;
        text-align: center;
        margin: 0;
      }

      .team__socials {
        margin-top: 1rem;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 1rem;
        
        svg {
          color: #fff;
        }
      }

      @media (min-width: $responsive-small-desktop) {
        display: none;
      }
    }

    &--desktop {
      display: none;

      @media (min-width: $responsive-small-desktop) {
        display: grid;
        grid-template-columns: 1fr 568px 1fr;
        gap: 1rem;

        .team__people--1 {
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
    }
  }

  &__parrots {
    display: none;

    @media (min-width: $responsive-small-desktop) {
      display: flex;
      justify-content: center;
      position: relative;
      
      img {
        position: absolute;

        &[src*="team-desktop"] {
          width: 568px;
        }

        &[src*="feet"] {
          width: 90px;
          bottom: -24rem;
          left: 9.9rem;
          z-index: 1;
        }
      }
    }
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
  position: relative;

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
    width: 9rem;
    margin-block: 1.5rem;
    color: #000;
  }

  &__contact {
    font-size: var(--font-size-small);
    font-style: normal;
    text-align: center;
  }
}
</style>
