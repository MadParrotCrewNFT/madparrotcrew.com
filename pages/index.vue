<template>
  <div>
    <header class="header">
      <PreMintCalculator v-if="!config.MINTING_LIVE" class="header__calculator" />
      <div class="header__parrot">
        <img class="header__parrot--body" src="~assets/images/hero-parrot.png" alt="A purple parrot with a green head, holding a beer, wearing a bandana and a denim jacket" />
        <img class="header__parrot--feet" src="~assets/images/hero-parrot-feet.png" alt="" />
      </div>
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
            <span aria-hidden="true">**</span> Just so we're clear: We don't condone violence of any kind, nor do we endorse the idea that parrots are deadly psychopaths. However, we do find the idea of a parrot holding nunchucks, smoking a joint or sporting an afro absolutely fucking hilarious and hopefully so do you do... otherwise, you're NGMI.
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
            <li aria-describedby="sheftali-derivs">Automatic enlistment in exclusive monthly giveaways for a FREE PFP derivative by Sheftali<span aria-hidden="true">***</span></li>
            <li>Exclusive access to the limited supply run of merch</li>
            <li>Access to the private Crew section of the website (coming soon) which will allow you to generate digital art unique to your Mad Parrot(s) such as custom device wallpapers, PFP backgrounds etc</li>
          </ul>
          <p>A crew is only as strong as it's members, so aside from the above you also have a say in the decisions we make. Ultimately it will be on the founders to execute, but as a crew member your voice will be heard.</p>
          <br/>
          <p id="sheftali-derivs" class="small">
            <span aria-hidden="true">***</span> The FREE PFP derivative will only be valid on other PFP projects.
          </p>
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
        <h2>Roadmap 1.0 (Mint)</h2>
        <ol class="roadmap__cards">
          <li>
            <card>
              <p class="card__title">15ETH deposited to Community Wallet</p>
              <p>We’ve got ideas for Roadmap 2.0, and between myself (Shef) and Iac… we’re pretty darn talented if I do say humbly. But, unless we’re confident we can deliver our vision to an absolute Grade-A quality - we will be more than happy to delegate to people who can. And for this reason we’re establishing a wallet. We’ll start off by depositing 15E.</p>
              <p class="card__title">Purchase land</p>
              <p>We need space for our Mad Parrots to hang. (We’ll do extensive research, as well as convene with the community to come to a decision on which we platform we go with)</p>
              <p class="card__title">Mad Parrots & ETH Giveaway</p>
              <p>All token holders will be entered into a raffle for 5x Mad Parrots as well as 10ETH!</p>
              <p style="margin-top: 1rem;"><strong>Each token will count as an entry.</strong></p>
            </card>
            <div class="roadmap__percentage">
              <p>
                25%
              </p>
            </div>
          </li>
          <li>
            <card>
              <p class="card__title">15ETH deposited to Community Wallet</p>
              <p class="card__title">BAKC Giveaway</p>
              <p>All token holders will be entered into a raffle to win a Bored Ape Kennel Club NFT!</p>
              <p style="margin-top: 1rem;"><strong>Each token will count as an entry.</strong></p>
            </card>
            <div class="roadmap__percentage">
              <p>
                50%
              </p>
            </div>
          </li>
          <li>
            <card>
              <p class="card__title">15ETH deposited to Community Wallet</p>
              <p class="card__title">Merch designs revealed</p>
              <p>What kind of project doesn’t have merch? Not this one. <strong>Think beanies, caps, hoodies, tees etc,</strong> (Limited run, exclusive to the crew)</p>
              <p class="card__title">Another Mad Parrots & ETH Giveaway</p>
              <p>Yeah, we love to give. All token holders will be entered into a raffle for 10x Mad Parrots as well as 15ETH!</p>
              <p style="margin-top: 1rem;"><strong>Each token will count as an entry.</strong></p>
            </card>
            <div class="roadmap__percentage">
              <p>
                75%
              </p>
            </div>
          </li>
          <li>
            <card>
              <p class="card__title">15ETH deposited to Community Wallet</p>
              <p class="card__title">Operation: ‘For Better or Worse’* begins</p>
              <p class="card__title">MAYC Giveaway</p>
              <p>All token holders will be entered into a raffle to win a Mutant Ape Yacht Club NFT!</p>
              <p style="margin-top: 1rem;"><strong>Each token will count as an entry.</strong></p>
            </card>
            <div class="roadmap__percentage">
              <p>
                S/O
              </p>
            </div>
          </li>
        </ol>
        <div class="roadmap-2">
          <h3>Roadmap 2.0</h3>
          <h4>Operation: For Better or Worse</h4>
          <p>One of our crew members picked up a bug in the jungle whilst on a heist job. (an actual bug, not a virus - cmon people, too soon) Our hostage-turned scientist, Dr. Tetrarch Tomb was able to churn out an elixir based on very little research and no huma... parrot testing. The results when applied to a Mad Parrot? It could go either way, you’ll have to wait and see.</p>
          <p class="small" style="margin-top: 1rem;"><strong>TL:DR:</strong> 1 Elixir (Free mint to all Mad Parrot holders), when applied to a Mad Parrot will create another variant (NFT). It'll either be more crazy, or slightly more innocent. Whatever the case, there will also be another elixir available on the secondary market which if applied will guarantee the 'other' variant (second NFT). (You'll get a chance to have both variants per Mad Parrot owned).</p>
          <h4>Operation: Beat em’ to the punch!</h4>
          <p>We can’t disclose too much about this just yet, but let’s just say we’re keeping our eyes open to some trends in the space and acting accordingly... (It’ll be an ‘oooh’ moment when it comes).</p>
          <h4 class="roadmap-2__header--luckiestguy">...and more creative stuff</h4>
          <p>We’re committed to ensuring the Mad Parrot Crew lives on way past the roadmap illustrated above. We'll continue to contribute to the web3 space and give back to the community that has made all this possible. If you know me (Sheftali) and are familiar with my work then you know creating art is a passion of mine which will never slow down, plus Iac’s fascination in Web3 grows daily. While we’re not fans of over-promising (who is?) we have ideas, and we’re ambitious, and if it can be done we’ll do our best to deliver (with outside help if need).</p>
        </div>
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
                    <svg-icon :name="`${social.platform.toLowerCase()}`" />
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
                  <svg-icon :name="social.platform.toLowerCase()" />
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
                  <svg-icon :name="social.platform.toLowerCase()" />
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
          <accordion-item id="1" heading-tag="h3" heading="What is the Mad Parrot Crew?">
            <p>The Mad Parrot Crew is a unique collection of 10,000 randomly generated Mad Parrot NFTs on the Ethereum blockchain. They're pretty crazy, often unpredictable but actually quite lovely if you give them a chance. (They need a home, for the love of God - please take them)</p>
          </accordion-item>
          <accordion-item id="2" heading-tag="h3" heading="Who created the Mad Parrots?">
            <p>The project was founded by <a :href="config.SHEFTALI.TWITTER" target="_blank" rel="noopener noreferrer" class="link">Sheftali</a> (artist & animator) and <a :href="config.IACOVE.TWITTER" target="_blank" rel="noopener noreferrer" class="link">Iac</a> (web3), but no single person is bigger than the crew. All Mad Parrot holders will have a say in the directions and decisions we make going forward!</p>
          </accordion-item>
          <accordion-item id="3" heading-tag="h3" :heading="`${config.MINTING_LIVE ? 'What\'s the' : 'What will the'} mint price for a Mad Parrot${config.MINTING_LIVE ? '' : ' be'} and how many can I get?`">
            <p>At the time of mint, it will cost <strong>0.06 ETH</strong> per Mad Parrot (aside from gas). You'll be allowed to mint up to <strong>up to 3 per wallet</strong>. In order to get more you'll have to browse on the secondary market.</p>
          </accordion-item>
          <accordion-item id="4" heading-tag="h3" heading="Wen mint?">
            <p>The short answer is: <strong>Q1 2022</strong>. We want to make sure we're 100% ready before we launch, ensuring no unpleasant surprises. The exact date will be revealed in Discord followed by our social channels.</p>
          </accordion-item>
          <accordion-item id="5" heading-tag="h3" heading="Is there a presale list?">
            <p>Hell yeah there's a presale list! Whilst we are very busy grafting to bring this project to life, we do keep an eye on our community and take note of who's putting the work in. We have no problem handing out spots to people we believe would make our crew awesome, so <strong>to be put on the presale list you just need to show us you care</strong>.</p>
            <p>Being active in Discord, promoting us on Twitter, setting your PFP to one of the MPCs in the #sneak-beaks (thanks, diegoleyva!) channel and generally just showing us love will definitely increases your chances!</p>
            <p>If you were quick enough to <a :href="config.SOCIAL.DISCORD" target="_blank" rel="noopener noreferrer" class="link">Join our Discord</a> when it launched, then you were awarded the 'Early Bird' role which gave you the opportunity to be added to the presale list. (as well as other cool perks in the future)</p>
          </accordion-item>
          <accordion-item id="6" heading-tag="h3" heading="Will there be giveaways?">
            <p>Yes absolutely! As well as the giveaways detailed on the <a href="#roadmap" class="link">roadmap</a>, we'll also be <strong>running competitions</strong> on <a :href="config.SOCIAL.TWITTER" target="_blank" rel="noopener noreferrer" class="link">Twitter</a> so make sure you're following us on there!</p>
          </accordion-item>
          <accordion-item id="7" heading-tag="h3" heading="Will there be any one-of-ones?">
            <p>
              Kiiiiinda! <strong>10x Animated Mad Parrots</strong>. We will randomly select 10 NFTs from the collection and I (Sheftali) will be animating them from scratch (just like the derivatives I'm known for). These NFTs will come with a <strong>loopable video</strong> (Suitable for <a :href="config.SOCIAL.DISCORD" target="_blank" rel="noopener noreferrer" class="link">Discord</a>) as well as the <strong>still image</strong> (Suitable for Socials).<br><br> 5 of these will be given away through <a :href="config.SOCIAL.TWITTER" target="_blank" rel="noopener noreferrer" class="link">Twitter</a>, the other 5 will be mintable.
            </p>
          </accordion-item>
        </accordion>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { ethers } from 'ethers'
import { Calculator, Card, Accordion, AccordionItem, Btn, Logo } from '@/components'
import siteconfig from '@/siteconfig.json'
import config from '@/config.json'
import PreMintCalculator from '@/components/PreMintCalculator.vue'

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
  components: { Calculator, Card, Accordion, AccordionItem, Btn, Logo, PreMintCalculator },
  data () {
    return {
      ethers,
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
  async mounted () {
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
  background: linear-gradient(180deg, #62264A 0%, rgba(98, 38, 74, 0) 100%), linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(~assets/images/hero-bg.png);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  padding: 4.75rem 1rem 1rem 1rem;

  @media (min-width: $responsive-standard-tablet) {
    padding-top: 10rem;
  }

  @media (min-width: $responsive-large-tablet) {
    min-height: 36rem;
    height: 90vh;
    max-height: 36rem;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }

  &__calculator {
    max-width: 34rem;
    margin-bottom: 15rem;
    margin-inline: auto;

    @media (min-width: $responsive-large-tablet) {
      transform: rotate(-4deg);
      transform-origin: top right;
      margin-bottom: 0;
    }
  }

  &__parrot {
    @media (min-width: $responsive-large-tablet) {
      position: relative;
    }

    &--body {
      position: absolute;
      left: 50%;
      bottom: -2rem;
      transform: translateX(-50%);
      height: 301px;
      width: 184px;

      @media (min-width: $responsive-large-tablet) {
        left: 35%;
        bottom: -6.5rem;
        height: 636px;
        width: 388px;
      }
    }

    &--feet {
      position: absolute;
      left: calc(50% - 1px);
      bottom: -15px;
      transform: translateX(-50%);
      z-index: 1;
      height: 68px;
      width: 47px;

      @media (min-width: $responsive-large-tablet) {
        left: calc(35% - 3px);
        bottom: -66px;
        height: 143px;
        width: 98px;
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
        margin-bottom: 1.675rem;
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
    padding-bottom: 7.875rem;
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
    margin-top: 3.5rem;
    margin-bottom: 2rem;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    gap: 3.5rem;

    @media (min-width: $responsive-standard-tablet) {
      margin-bottom: 3.625rem;
    }

    li {
      position: relative;
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
    position: absolute;
    left: 50%;
    top: -2rem;
    transform: translateX(-50%);
    min-height: 4.375rem;
    max-height: 4.375rem;
    min-width: 4.375rem;
    max-width: 4.375rem;
    font-size: var(--font-size-subtitle);
    border-radius: 50%;
    background-color: var(--mpc-orange);
    color: #fff;
    display: grid;
    place-items: center;
    font-family: var(--font-family-luckiestguy);

    @media (min-width: $responsive-standard-tablet) {
      position: relative;
      left: initial;
      top: initial;
      transform: none;
      grid-area: percentage;
    }

    p {
      display: flex;
      align-items: center;
      white-space: nowrap;
      margin: 0;
    }
  }

  .card {
    padding-top: 3.5rem;
    width: 100%;

    @media (min-width: $responsive-standard-tablet) {
      padding-top: 1.5rem;
      grid-area: card;
      max-width: 29.25rem;
    }

    &__title {
      font-size: var(--font-size-large);
      font-weight: 700;
      margin-top: 0;
      margin-bottom: 0.25rem;
      line-height: 1.4;

      @media (min-width: $responsive-standard-tablet) {
        margin-bottom: 1rem;
      }
    }

    p {
      margin-block: 0.25rem;
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

  &-2 {
    max-width: 50.75rem;
    margin-inline: auto;
    text-align: center;

    h4 {
      font-family: var(--font-family-montserrat);
      font-size: var(--font-size-large);
      margin-top: 2rem;
      margin-bottom: 0.5rem;
    }

    h4.roadmap-2__header--luckiestguy {
      font-family: var(--font-family-luckiestguy);
      font-size: var(--font-size-subtitle);
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
      padding: 3rem 1rem;

      .bonus__image {
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
  padding: 3rem 1.5rem;
  background-color: var(--mpc-navy);

  @media (min-width: $responsive-standard-tablet) {
    padding-block: 4rem;
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
    font-size: var(--font-size-title);
    margin-top: 1.5rem;
    margin-bottom: 0.75rem;

    @media (min-width: $responsive-standard-tablet) {
      font-size: var(--font-size-subtitle);
    }
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
            top: -0.625rem;
            left: -0.1875rem;
          }
        }
      }

      h3 {
        font-size: var(--font-size-heading);
        color: var(--mpc-gold);
        text-align: center;
        margin-top: 1.5rem;
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
          bottom: -27.8rem;
        }

        &[src*="feet"] {
          width: 5.4rem;
          bottom: -19.2rem;
          left: 9.95rem;
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

  &__inner {
    padding: 3rem 1rem;
    background-color: var(--mpc-light-beige);

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

  ::v-deep .accordion {
    max-width: 48rem;
    margin-inline: auto;
  }
}
</style>
