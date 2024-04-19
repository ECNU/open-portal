<template>
  <div class="home-page">
    <div class="title-img">
      <Carousel />
      <Notices class="notices-style" />
    </div>
    <div class="flex justify-center">
      <Mirrors />
    </div>
  </div>
</template>

<script setup lang="ts">
import Notices from './Notices.vue'
import Carousel from './Carousel.vue'
import Mirrors from './Mirrors.vue'
</script>

<style scoped>
.title-img {
  display: flex;
  flex-direction: row;
}

.notices-style {
  position: relative;
  left: -600px;
  width: 400px;
  z-index: 1;
}
</style>
