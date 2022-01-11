<template>
  <div>
    <header class="header">
      <div class="header__inner">
        <div class="header__calculator-wrapper">
          <calculator v-if="config.MINTING_LIVE" class="header__calculator" />
          <img v-else class="header__soon" src="~assets/images/minting-coming-soon.png" alt="Minting coming soon" width="424" height="245" loading="lazy" />
        </div>
      </div>
      <div class="header__curve">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z" fill="currentColor" />
        </svg>
      </div>
      <div class="header__block"></div>
    </header>
    <section id="about" class="about">
      <div class="about__inner">
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
          <p v-if="config.MINTING_LIVE">
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
      </div>
    </section>
    <section id="crew-perks" class="perks">
      <div class="perks__inner">
        <div class="perks__text">
          <h2>Crew Perks</h2>
          <p>Being a Mad Parrot token holder entitles you to the following:</p>
          <ul>
            <li>IP (Intellectual Property) rights over your Mad Parrot(s)</li>
            <li>You're automatically enlisted in exclusive monthly giveaways for a FREE PFP derivative by Sheftali***</li>
            <li>Exclusive access to the limited supply run of merch</li>
            <li>Permission to enter the Mad Parrot Crew's Discord server</li>
            <li>Access to the private Crew section of the website (coming soon) which will allow you to generate digital art unique to your Mad Parrot(s) such as custom device wallpapers, PFP backgrounds etc</li>
          </ul>
          <p>A crew is only as strong as it's members, so aside from the above you also have a say in the decisions we make. Ultimately it will be on the founders to execute, but as a crew member your voice will be heard.</p>
        </div>
        <div class="perks__parrots">
          <img src="~/assets/images/perk-parrot-1.png" alt="" />
          <img src="~/assets/images/perk-parrot-2.png" alt="" />
          <img src="~/assets/images/perk-parrot-3.png" alt="" />
          <img src="~/assets/images/perk-parrot-4.png" alt="" />
        </div>
      </div>
    </section>
    <section id="roadmap" class="roadmap">
      <div class="roadmap__inner">
        <h2>Roadmap</h2>
        <p>We’ve split up the mint process into 4 stages and are giving away some cool prizes to early supporters!</p>
        <ol class="roadmap__cards">
          <li>
            <card>
              <h3 class="card__title">
                Stage 1 - Dya like Dags?
              </h3>
              <p>Some Mad Parrots are released into the wild</p>
              <p>Community Wallet setup, 15ETH deposited</p>
              <p>After all Mad Parrots from Stage 1 are claimed, all token holders will be enrolled in a giveaway for the Bored Ape Kennel Club NFT!</p>
            </card>
            <div class="roadmap__percentage">
              <p role="text">
                1
              </p>
            </div>
          </li>
          <li>
            <card>
              <h3 class="card__title">
                Stage 2 - Fly me... (Pt.1)
              </h3>
              <p>More Mad Parrots are released into the wild</p>
              <p>15ETH deposited into the Community Wallet</p>
              <p>We purchase land in the sandbox and start looking into building our clubhouse!</p>
              <p>After all Mad Parrots from Stage 2 are claimed, all token holders will be enrolled in a giveaway for 5 Mad Parrots as well as 10ETH!</p>
            </card>
            <div class="roadmap__percentage">
              <p role="text">
                2
              </p>
            </div>
          </li>
          <li>
            <card>
              <h3 class="card__title">
                Stage 3 - Release the Mutant
              </h3>
              <p>More Mad Parrots are released into the wild</p>
              <p>15ETH Deposited into the Community Wallet</p>
              <p>Merch designs revealed and we start looking into manufacturers & suppliers</p>
              <p>After all Mad Parrots from Stage 3 are claimed, all token holders will be enrolled in a giveaway for the Mutant Ape Yacht Club NFT!</p>
            </card>
            <div class="roadmap__percentage">
              <p role="text">
                3
              </p>
            </div>
          </li>
          <li>
            <card>
              <h3 class="card__title">
                Stage 4 - ...To the moon (Pt. 2)
              </h3>
              <p>Final batch of the Mad Parrots are released into the wild</p>
              <p>25ETH deposited into the Community Wallet</p>
              <p>Operation: ‘For Better or Worse’ begins</p>
              <p>After all Mad Parrots from Stage 4 are claimed, all token holders will be enrolled in a giveaway for 10 Mad Parrots as well as 15ETH!</p>
            </card>
            <div class="roadmap__percentage">
              <p role="text">
                4
              </p>
            </div>
          </li>
        </ol>
        <h3>...and much more</h3>
        <p>We’re committed to ensuring the Mad Parrot Crew lives on way past the roadmap illustrated above. We'll continue to contribute to the web3 space and give back to the community that has made all this possible. If you know me (Sheftali) and are familiar with my work then you know creating art is a passion of mine which will never slow down, plus Iac’s fascination in Web3 grows daily. While we’re not fans of over-promising (who is?) we have ideas, and we’re ambitious, and if it can be done we’ll do our best to deliver (with outside help if need).</p>
      </div>
    </section>
    <section v-if="showDesktopBonusSection" id="diamond-beak-club" class="bonus bonus--desktop">
      <div class="bonus__image">
        <img src="~assets/images/diamond-beak.png" alt="A diamond parrot beak" loading="lazy" height="120" width="120" />
      </div>
      <h2>Diamond-beak club</h2>
      <p>
        If your Mad Parrot was lucky enough to be born with a Diamond-beak, you may want to <span aria-label="hold on for dear life">HODL</span>. Half of the monthly royalties will be distributed evenly across all diamond-beak Mad Parrot holders.
      </p>
    </section>
    <section id="distribution" class="distribution">
      <div class="distribution__inner">
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
      </div>
    </section>
    <section v-if="!showDesktopBonusSection" id="diamond-beak-club" class="bonus bonus--mobile">
      <img src="~assets/images/diamond-beak.png" alt="A diamond parrot beak" loading="lazy" height="64" width="64" />
      <h2>Diamond-beak club</h2>
      <p>
        If your Mad Parrot was lucky enough to be born with a Diamond-beak, you may want to <span aria-label="hold on for dear life">HODL</span>. Half of the monthly royalties will be distributed evenly across all diamond-beak Mad Parrot holders.
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
          <accordion-item id="1" heading-tag="h3" heading="What's the Mad Parrot Crew (MPC)?">
            <p>A collection of 10,000 randomly generated NFTs on the Ethereum blockchain.</p>
          </accordion-item>
          <accordion-item id="2" heading-tag="h3" heading="Who created the Mad Parrots?">
            <p><a :href="config.SHEFTALI.TWITTER" target="_blank" rel="noopener noreferrer" class="link">Sheftali</a> and <a :href="config.IACOVE.TWITTER" target="_blank" rel="noopener noreferrer" class="link">Iacove</a>.</p>
          </accordion-item>
          <accordion-item id="3" heading-tag="h3" heading="What's the mint price for a Mad Parrot and how many can I get?">
            <p>{{ config.ETH_COST }} ETH per Mad Parrot, plus gas. You're allowed up to {{ config.MAX_MINT_PARROTS }} Mad Parrots per wallet.</p>
          </accordion-item>
          <accordion-item id="4" heading-tag="h3" heading="Wen mint?">
            <p>The mint will be split out in 4 stages, (2475 parrots each) the first stage will be in <time datetime="2022-02">mid-February 2022</time>.</p>
          </accordion-item>
          <accordion-item id="5" heading-tag="h3" heading="Will there be giveaways?">
            <p>Eww no. Jk, of course there will be giveaways! Check the <a href="#roadmap" class="link">roadmap</a>.</p>
          </accordion-item>
          <accordion-item id="6" heading-tag="h3" heading="Will there be any one-of-ones?">
            <p>
              Yeah of course! It wouldn't be a sick collection without some one-of-ones now would it? We're going to release 10, and they'll be nothing like you've seen before.
            </p>
          </accordion-item>
        </accordion>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Calculator, Card, Accordion, AccordionItem, Btn, Logo } from '@/components'
import siteconfig from '@/siteconfig.json'
import config from '@/config.json'

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
  components: { Calculator, Card, Accordion, AccordionItem, Btn, Logo },
  data () {
    return {
      siteconfig,
      config,
      showDesktopBonusSection: false
    }
  },
  computed: {
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
    }
  },
  mounted () {
    window.addEventListener('resize', this.canShowDesktopBonusSection)
    this.canShowDesktopBonusSection()
  },
  destroyed () {
    window.removeEventListener('resize', this.canShowDesktopBonusSection)
  },
  methods: {
    canShowDesktopBonusSection(): void {
      const showDesktopWidth = window.getComputedStyle(document.documentElement).getPropertyValue('--responsive-standard-tablet')
      this.showDesktopBonusSection = window.matchMedia(`(min-width: ${showDesktopWidth})`).matches
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

  &__inner {
    position: relative;
    height: 100%;
    max-width: 120rem;
    margin-inline: auto;

    // Parrot
    &::before {
      @media (min-width: $responsive-large-tablet) {
        content: '';
        pointer-events: none;
        background-image: url(~assets/images/header-parrot.svg);
        background-repeat: no-repeat;
        background-position: bottom;
        background-size: cover;
        width: 19.625rem;
        height: 40.375rem;
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
        width: 7.8125rem;
        height: 19.125rem;
        position: absolute;
        bottom: -5rem;
        right: 1rem;
      }

      @media (min-width: $responsive-small-desktop) {
        right: 8rem
      }

      @media (min-width: $responsive-standard-desktop) {
        right: 17rem
      }
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
        height: 2.375rem;
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
      padding-top: 3.5rem;
      margin-inline: 1rem;
      position: relative;
      top: 5.5rem;
      position: relative;
      z-index: 1;

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
        width: 5.625rem;
        height: 11.875rem;
        position: absolute;
        top: -2.5rem;
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
        width: 2.125rem;
        height: 5.125rem;
        position: absolute;
        top: 0.2rem;
        left: calc(50% - 2.6rem);

        @media (min-width: $responsive-large-tablet) {
          display: none;
        }
      }
    }
  }
}

.about {
  position: relative;
  background-color: var(--mpc-purple);
  color: #fff;
  text-align: center;

  @media (min-width: $responsive-large-tablet) {
    position: unset;
    background: #fff;
    color: currentColor;
    text-align: left;
  }

  &__inner {
    max-width: 85rem;
    margin-inline: auto;
    display: grid;
    grid-template-columns: 1fr;

    @media (min-width: $responsive-large-tablet) {
      grid-template-columns: 2fr 1fr;
    }

    @media (min-width: $responsive-small-desktop) {
      grid-template-columns: repeat(2, 1fr);
    }

    > div:nth-child(1) {
      max-width: 50rem;
    }
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
          width: 8.75rem;
          transform: rotate(2deg);
          bottom: -2rem;
        }

        &[src*="front"] {
          width: 8rem;
          bottom: -4.5rem;
        }

        &[src*="feet"] {
          width: 2rem;
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
            width: 20rem;
            transform: rotate(2deg);
            bottom: -4rem;
          }

          &[src*="front"] {
            width: 21.875rem;
            bottom: -13rem;
          }

          &[src*="feet"] {
            width: 5.375rem;
            bottom: -3rem;
            z-index: 1;
          }
        }
      }
    }
  }
}

.perks {
  position: relative;
  background-color: var(--mpc-burgandy);
  color: #fff;
  padding: 2.875rem 1rem;

  @media (min-width: $responsive-small-desktop) {
    padding: 4rem 2rem;
  }

  &__inner {
    max-width: 73rem;
    margin-inline: auto;
    display: grid;
    grid-template-columns: 1fr;

    @media (min-width: $responsive-small-desktop) {
      grid-template-columns: repeat(2, 1fr);
      gap: 2rem;
    }
  }

  h2 {
    color: #fff;
    margin-top: 0;
    margin-bottom: 1.5rem;
    font-size: var(--font-size-title);

    @media (min-width: $responsive-small-desktop) {
      margin-bottom: 2.375rem;
    }
  }

  &__text {
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (min-width: $responsive-small-desktop) {
      align-items: flex-start;
    }

    p {
      margin: 0;
    }

    ul {
      margin-block: 1.5rem;
      display: flex;
      flex-direction: column;
      gap: 0.75rem;
      padding-left: 1.5rem;

      @media (min-width: $responsive-small-desktop) {
        margin-top: 1.675rem;
        margin-bottom: 3.625rem;
        gap: 0.875rem;
        padding-right: 5rem;
      }
    }
  }

  &__parrots {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    place-items: stretch;
    gap: 1rem;
    margin-top: 2.625rem;

    @media (min-width: $responsive-small-desktop) {
      margin-top: 0;
      gap: 2rem;
    }

    img {
      @media (min-width: $responsive-small-tablet) {
        max-width: 16.75rem;
      }

      &:nth-child(odd) {
        place-self: flex-end;
      }

      &:nth-child(even) {
        place-self: flex-start;
      }
    }
  }
}

.roadmap {
  position: relative;
  background-color: var(--mpc-light-beige);
  padding: 2.25rem 1rem 3.5rem 1rem;

  @media (min-width: $responsive-standard-tablet) {
    padding-top: 4.125rem;
    padding-bottom: 10rem;
  }

  &__inner {
    max-width: 73rem;
    margin-inline: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  h2 {
    margin-top: 0;
    margin-bottom: 0.5rem;
    font-size: var(--font-size-title);
  }

  p {
    margin: 0;
  }

  &__cards {
    padding-left: 0;
    list-style-type: none;
    margin-top: 1.5rem;
    margin-bottom: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.75rem;

    @media (min-width: $responsive-standard-tablet) {
      margin-block: 3.5rem;
    }

    li {
      display: flex;
      justify-content: space-between;
      gap: 1rem;

      @media (min-width: $responsive-standard-tablet) {
        display: grid;
        grid-template-areas: "card card percentage . .";
        grid-template-columns: repeat(5, 1fr);
        justify-items: center;

        &:nth-child(even) {
          grid-template-areas: ". . percentage card card";
        }
      }
    }
  }

  &__percentage {
    display: none;

    @media (min-width: $responsive-standard-tablet) {
      grid-area: percentage;
      min-height: 4.375rem;
      max-height: 4.375rem;
      min-width: 4.375rem;
      max-width: 4.375rem;
      font-size: var(--font-size-title);
      border-radius: 50%;
      background-color: var(--mpc-orange);
      color: #fff;
      display: grid;
      place-items: center;
      font-family: var(--font-family-ampersand);
    }

    p {
      display: flex;
      align-items: center;
      white-space: nowrap;
      margin: 0;
    }
  }

  .card {
    @media (min-width: $responsive-standard-tablet) {
      grid-area: card;
      max-width: 29.25rem;
    }

    &__title {
      font-size: var(--font-size-subtitle);
      margin-top: 0;
      margin-bottom: 0.25rem;
      line-height: 1.4;

      @media (min-width: $responsive-standard-tablet) {
        margin-bottom: 1rem;
      }
    }

    p {
      margin-block: 0.5rem;
      line-height: 1.4;

      &:first-of-type {
        margin-top: 0;
      }

      &:last-of-type {
        margin-bottom: 0;
      }
    }
  }

  h3 {
    font-size: var(--font-size-title);
    margin-top: 0;
    margin-bottom: 0.75rem;
  }
}

.bonus {
  display: flex;
  flex-direction: column;
  align-items: center;

  &--mobile {
    padding: 3rem 1.5rem;

    img {
      height: 4rem;
      width: 4rem;
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
        top: -5.25rem;
        height: 10.5rem;
        width: 10.5rem;
        background-color: var(--mpc-burgandy);
        border: 10px solid #fff;
        display: grid;
        place-items: center;
        border-radius: 50%;
        box-shadow: inset 0 0 0.375rem 0.3125rem rgba(0, 0, 0, 0.7);
      }

      p {
        max-width: 35.375rem;
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

  &__inner {
    max-width: 73rem;
    margin-inline: auto;
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
    height: 14rem;
    width: 14rem;
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
    padding-bottom: 15.5rem;
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
      display: grid;
      grid-template-columns: 1fr;
      place-items: center;
      gap: 4rem;
      list-style-type: none;
      padding-left: 0;
      margin: 0;

      @media (min-width: $responsive-small-tablet) {
        grid-template-columns: repeat(2, 1fr);
      }

      .team-member__img {
        background-color: #fff;
        border-radius: 50%;
        height: 7.875rem;
        width: 7.875rem;
        position: relative;

        img {
          max-width: unset;
          position: absolute;
          
          &[src*="sheftali"] {
            top: -1.4275rem;
            right: 0.25rem;
          }

          &[src*="iacove"] {
            top: -1.625rem;
            left: -0.125rem;
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
        grid-template-columns: 1fr 35.5rem 1fr;
        gap: 1rem;

        .team__people--1 {
          text-align: right;
        }

        .team__people--1,
        .team__people--2 {
          padding-top: 5rem;
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
          width: 35.5rem;
        }

        &[src*="feet"] {
          width: 5.625rem;
          bottom: -19rem;
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
    max-width: 73rem;
    margin-inline: auto;

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
</style>
