<template>
  <div class="w-[400px]">
    <div class="card-top bg-primary-600 text-white ">通知</div>
    <div class="card-st bg-white dark:bg-gray-800">
      <div
        v-for="(item, index) in data"
        class="card-list-style">
        <div
          class="left-line bg-primary-300"
          :style="index + 1 == data.length ? { height: '0px' } : {}"></div>
        <div class="circle bg-primary-600"></div>
        <div class="details">
          <a
            class="details-title"
            :href="withBase(item.url)"
            >{{ item.frontmatter.title }}</a
          >
          <div class="text-xs text-gray-800 dark:text-gray-400">
            {{ item.frontmatter.description }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<!-- 通知组件 -->
<script setup lang="ts">
// @ts-ignore
import { data } from '../posts.data'
import { withBase } from 'vitepress'
import { computed } from 'vue'
const setStyl = index => {
  if (index + 1 == data.length) {
    return { height: '0px' }
  } else {
    return {}
  }
}
</script>

<style scoped>
.card-top {
  width: 400px;
  margin-top: 50px;
  height: 40px;
  display: flex;
  line-height: 40px;
  font-weight: 500;
  font-size: 14px;
  text-align: center;
  padding: 0 20px;
}

.card-st {
  height: 260px;
  padding: 10px 20px;
}

.card-list-style {
  padding: 10px 20px;
  position: relative;
  display: flex;
}

.left-line {
  height: calc(100% - 4px);
  width: 1px;
  opacity: 0.3;
  position: absolute;
  left: 2px;
  top: 18px;
}

.circle {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  position: absolute;
  left: -1px;
  top: 15px;
}

.details {
  height: 56px;
  width: calc(100% - 50px);
  display: flex;
  flex-direction: column;
}

.details-title {
  text-align: left;
  line-height: 20px;
  font-weight: 700;
  font-size: 14px;
  transition: color 0.2s;
}
</style>
