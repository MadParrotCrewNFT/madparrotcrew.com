<template>
  <div class="page">
    <navigation />
    <main class="page__body">
      <Nuxt />
      <FocusTrap :active="$store.state.showTandCsModal" escape-deactivates return-focus-on-deactivate>
        <TermsAndConditionsModal v-show="$store.state.showTandCsModal" tabindex="-1" />
      </FocusTrap>
    </main>
    <site-footer />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { FocusTrap } from 'focus-trap-vue'
import { Navigation, SiteFooter } from '@/components'
import TermsAndConditionsModal from '@/components/TermsAndConditionsModal.vue'

export default Vue.extend({
  name: 'default',
  components: { Navigation, SiteFooter, FocusTrap, TermsAndConditionsModal }
})
</script>

<style lang="scss" scoped>
.page {
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  &__body {
    flex: 1;
    display: flex;
    flex-direction: column;
    
    @media (min-width: $responsive-standard-tablet) {
      margin-top: -7.75rem;
    }

    > * {
      flex: 1;
    }
  }
}
</style>
