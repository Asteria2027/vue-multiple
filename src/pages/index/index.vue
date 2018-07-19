<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
  @import url("../../style/reset.css");
  #app {
    overflow-x: hidden;
    width: 100%;
  }
</style>
