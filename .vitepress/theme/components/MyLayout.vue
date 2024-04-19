<template>
  <Layout class="min-w-[1200px]">
    <template #doc-before> </template>
    <template #doc-after> </template>
    <!-- Home slot-->
    <template #home-hero-info></template>
    <template #home-features-after> <HomePage /></template>
    <template #layout-bottom><CopyRight /></template>
  </Layout>
</template>

<script setup lang="ts">
import HomePage from './HomePage.vue'
import CopyRight from './CopyRight.vue'
const { Layout } = DefaultTheme
import DefaultTheme from 'vitepress/theme'
</script>
<style scoped></style>
