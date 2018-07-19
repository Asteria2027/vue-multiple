<template>
    <div id="app">
       <InfoDisplay></InfoDisplay>
    </div>
</template>

<script>
import InfoDisplay from 'components/infoDisclosure/InfoDisplay.vue'
export default {
  name: 'app',
  components: { InfoDisplay }
}
</script>

<style>

@import url("../../style/reset.css");
#app {
    overflow-x: hidden;
    width: 100%;
  }
</style>
