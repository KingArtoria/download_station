<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
export default {
  mounted() {
    document.title = '下载站'
  },
}
</script>
<style>
@import './index.css';
</style>
