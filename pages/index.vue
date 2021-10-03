<template>
  <div>
    <btn>Click me</btn>
    <btn square>+</btn>
    <btn color="green" square>+</btn>
    <btn square inverted>-</btn>
    <btn color="green" square inverted>-</btn>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Btn } from '@/components'

export default Vue.extend({
  components: { Btn }
})
</script>

<style lang="scss" scoped></style>
