<template>
  <div class="modal">
    <div class="modal__mask" @click="$store.commit('setShowTandCsModal', false)"></div>
    <div class="modal__card-wrapper">
      <section class="modal__card">
        <button tabindex="0" class="modal__close" @click="$store.commit('setShowTandCsModal', false)" title="Close" aria-label="Close">
          <span class="sr-only">Close</span>
          <svg-icon name="cross" />
        </button>
        <h2 class="modal__title">Terms & Conditions</h2>
        <div class="modal__content">
          <p>Mad Parrot Crew (MPC) is a collection of digital artworks (NFTs) which is run on the Ethereum network.</p>
          <p>This website is only an interface built to help you (the user) interact with that Ethereum smart contract.</p>
          <p>The users of this site are entirely responsible for the safety and management of their own private Ethereum wallets and validating all transactions generated before approving them. Use of this website is at the user’s own risk. MPC is not liable for any incorrect or failed transactions. Furthermore, as the contract runs on Ethereum, MPC have no power to undo, reverse, or restore any transactions.</p>
          <p>You use this website at your own risk and by doing so you agree full responsibility with regards to any problems, errors, and failures no matter the cause or source of those errors and accept sole responsibility for all transactions.</p>
        </div>
      </section>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'TermsAndConditionsModal',
  methods: {
    escapeKeyHandler: function (event: KeyboardEvent) {
      if (event.key === 'Escape') {
        this.$store.commit('setShowTandCsModal', false)
      }
    }
  },
  mounted() {
    document.addEventListener('keyup', this.escapeKeyHandler);
  },
  destroyed() {
    document.removeEventListener('keyup', this.escapeKeyHandler);
  }
})
</script>

<style lang="scss" scoped>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  z-index: 999;
  padding: 1rem;
  background: rgba(0, 0, 0, 0.5);

  &__mask {
    height: 100%;
    width: 100%;
  }

  &__card-wrapper {
    padding: 1rem;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    max-height: 100%;
    width: 100%;
    max-width: 57.5rem;
  }

  &__card {
    position: relative;
    background-color: #fff;
    border-radius: 0.5rem;
    padding: 1.5rem;
    max-height: 90vh;
    width: 100%;
    display: flex;
    flex-direction: column;

    @media (min-width: $responsive-standard-tablet) {
      padding: 2rem;
    }
  }

  &__close {
    background-color: transparent;
    border: none;
    padding: 0.5rem;
    cursor: pointer;
    height: 2rem;
    width: 2rem;
    position: absolute;
    top: 1.5rem;
    right: 1.5rem;
    color: var(--mpc-dark-blue);

    @media (min-width: $responsive-standard-tablet) {
      top: 2rem;
      right: 2rem;
    }
  }

  &__title {
    font-size: var(--font-size-subtitle);
    margin-top: 0;
    margin-bottom: 1rem;
    margin-right: 2rem; // To account for the close button
  }

  &__content {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    font-size: var(--font-size-large);
    font-weight: 500;
    overflow-y: auto;

    p {
      margin: 0;
    }
  }
}
</style>
