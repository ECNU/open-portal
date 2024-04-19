<template>
  <div class="min-w-[1024px] max-w-[1600px]">
    <div class="flex justify-center items-center gap-4 py-2 my-2">
      <div class="flex gap-4 items-center">
        <button
          v-for="(tag, index) in types"
          class="px-4 py-1 rounded text-sm cursor-pointer"
          :class="{
            'bg-primary-600 text-white active:bg-primary-600  dark:active:bg-primary-500 dark:hover:bg-primary-600 ':
              searchType === tag,
            'bg-white hover:bg-primary-600 active:bg-primary-500 hover:text-white dark:bg-gray-800 dark:active:bg-primary-500 dark:hover:bg-primary-600 ':
              searchType !== tag,
          }"
          :key="index"
          @click="handleSearchType(tag)">
          {{ tag }}
        </button>
      </div>
      <div class="flex-1"></div>
      <input
        v-model="searchKey"
        class="w-80 px-4 py-2 bg-white dark:bg-gray-800 rounded border focus:outline-none focus:ring-1 focus:ring-primary-600 focus:border-transparent"
        type="text"
        placeholder="请输入关键字"
        @input="handleSearchTitle" />
    </div>
    <div class="grid gap-4 grid-cols-4 lg:gap-8 justify-items-center">
      <div
        v-for="mirror in computedMirror"
        @click="handleClick(mirror)"
        class="relative h-36 w-64 cursor-pointer rounded-md flex flex-col bg-white dark:bg-gray-800 justify-center items-start gap-2 px-4 hover:shadow-xl transition-all group">
        <div
          class="absolute left-0 top-0 px-1 py-0.5 bg-primary-600 text-xs text-white rounded-sm dark:text-primary-600 dark:bg-primary-50">
          {{ mirror.type }}
        </div>
        <div class="text-xl font-medium group-hover:text-primary-600">
          {{ mirror.title }}
        </div>
        <div class="flex justify-start items-center gap-4">
          <span
            v-for="tag in mirror.tags"
            class="whitespace-nowrap rounded bg-primary-50 dark:bg-primary-600 px-2.5 py-0.5 text-sm text-primary-600 dark:text-primary-50">
            {{ tag }}
          </span>
        </div>
        <div
          class="text-sm text-gray-500 dark:text-gray-400 overflow-hidden text-ellipsis text-nowrap w-full"
          :title="mirror.description">
          {{ mirror.description }}
        </div>
      </div>
    </div>
    <div
      class="flex justify-center"
      v-show="totalPage > 1">
      <div class="select-none mt-8 flex justify-center items-center w-80 gap-4">
        <button
          class="text-white py-1 px-4 rounded transition-all"
          :class="{
            'cursor-not-allowed bg-primary-200': pageNum === 1,
            'bg-primary-600 hover:bg-primary-500 active:bg-primary-600  dark:active:bg-primary-500 dark:hover:bg-primary-600 ':
              pageNum !== 1,
          }"
          :disabled="pageNum === 1"
          @click="handlePrev">
          上一页
        </button>
        <div class="px-2">
          {{ `${pageNum}&nbsp;&nbsp;/&nbsp;&nbsp;${totalPage}` }}
        </div>
        <button
          class="text-white py-1 px-4 rounded transition-all"
          :class="{
            'cursor-not-allowed bg-primary-200': pageNum === totalPage,
            'bg-primary-600 hover:bg-primary-500 active:bg-primary-600  dark:active:bg-primary-500 dark:hover:bg-primary-600 ':
              pageNum !== totalPage,
          }"
          :disabled="pageNum === totalPage"
          @click="handleNext">
          下一页
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { withBase } from 'vitepress'
import mirrors from '../../../static/mirrors.json'
import { initTypes } from '../utils'
import { computed, ref, toRef, watch } from 'vue'

const mirrorRef = toRef(mirrors)
const searchKey = ref('')
const searchType = ref('全部')
const pageNum = ref(1)
const pageSize = ref(52)
const totalPage = ref(1)
const types = ref(initTypes())

const handleSearchType = (tag: string) => {
  searchType.value = tag
  pageNum.value = 1
  console.log(searchType.value)
}

watch(searchKey, () => {
  pageNum.value = 1
})

watch(searchType, () => {
  pageNum.value = 1
})

const computedMirror = computed(() => {
  const start = (pageNum.value - 1) * pageSize.value
  const end = pageNum.value * pageSize.value

  let filters = mirrorRef.value
  if (searchType.value !== '全部') {
    filters = filters.filter(item => item.type === searchType.value)
  }
  if (searchKey.value !== '') {
    filters = filters.filter(item => item.title.includes(searchKey.value))
  }
  totalPage.value = Math.ceil(filters.length / pageSize.value)
  return filters.slice(start, end)
})

const handleClick = row => {
  const link = row.link
  if (link.startsWith('http')) {
    window.open(link)
  } else {
    window.location.href = withBase(link + '.html')
  }
}

const handlePrev = () => {
  if (pageNum.value === 1) return
  pageNum.value--
}

const handleNext = () => {
  if (pageNum.value === totalPage.value) return
  pageNum.value++
}
</script>

<style scoped>
.mirror-wrapper {
  height: 1000px;
  border: 1px solid #ccc;
}

.block-wrapper {
  display: grid;
  padding: auto;
  grid-template-columns: repeat(5, 1fr);
  gap: 10px;
  margin-top: 20px;
}
.pagination {
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 300px;
  position: relative;
}
</style>
