<template>
  <footer>
    <div>Copyright © 2024-present</div>
    |
    <div>Released under the MIT License</div>
  </footer>
</template>
<script lang="ts" setup></script>
<style scoped>
footer {
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 32px;
  color: var(--vp-c-text);
  border-top: 1px solid var(--vp-c-gutter);
  background-color: var(--vp-c-bg);
  a {
    color: var(--vp-c-brand);
    font-weight: bold;
  }
  .views {
    display: inline-block;
  }
}
</style>
