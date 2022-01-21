<template>
  <div class="t-and-c__bg">
    <section class="t-and-c">
      <h1>Terms & Conditions</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut convallis auctor tincidunt. Etiam condimentum est quam. Quisque ut lectus vestibulum, euismod nibh at, lacinia nulla.
      </p>
      <h2>Ownership</h2>
      <ol>
        <li>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut convallis auctor tincidunt. Etiam condimentum est quam. Quisque ut lectus vestibulum, euismod nibh at, lacinia nulla. 
        </li>
        <li>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut convallis auctor tincidunt. Etiam condimentum est quam. Quisque ut lectus vestibulum, euismod nibh at, lacinia nulla. 
        </li>
        <li>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut convallis auctor tincidunt. Etiam condimentum est quam. Quisque ut lectus vestibulum, euismod nibh at, lacinia nulla. 
        </li>
      </ol>
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
