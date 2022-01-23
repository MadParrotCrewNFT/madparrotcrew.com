<template>
  <div class="t-and-c__bg">
    <section class="t-and-c">
      <h1>Terms & Conditions</h1>
      <p>Mad Parrot Crew (MPC) is a collection of digital artworks (NFTs) which is run on the Ethereum network.
      <br><br>
      This website is only an interface built to help you (the users) interact with that Ethereum smart contract.
      <br><br>
      The users of this site are entirely responsible for the safety and management of their own private Ethereum wallets and validating all transactions generated before approving them. Use of this website is at the user’s own risk. MPC is not liable for any incorrect or failed transactions. Furthermore, as the contract runs on Ethereum, MPC have no power to undo, reverse, or restore any transactions.
      <br><br>
      You use this website at your own risk and by doing so you agree full responsibility with regards to any problems, errors, and failures no matter the cause or source of those errors and accept sole responsibility for all transactions.</p>
    </section>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 't-and-c'
})
</script>

<style lang="scss" scoped>
.t-and-c {
  background-color: #fff;
  padding: 3rem 2rem;
  max-width: 35.5rem;
  margin: 4rem auto 2.5rem auto;
  border-radius: var(--border-radius-standard);

  &__bg {
    background-image: url(~assets/images/header-bg.jpg);
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    background-attachment: fixed;
    padding: 1rem;
  }

  h1 {
    font-size: var(--font-size-title);
    margin-top: 0;
    margin-bottom: 0.75rem;
  }

  h2 {
    font-size: var(--font-size-subtitle);
    margin-top: 2.5rem;
    margin-bottom: 0.75rem;
  }

  ol {
    padding-left: 1.5rem;
    margin-bottom: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }

  p {
    margin: 0;
  }
}
</style>
