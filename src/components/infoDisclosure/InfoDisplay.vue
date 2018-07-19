<template>
    <div>
      <siteNav></siteNav>
      <InfoDisplayBar></InfoDisplayBar>
    </div>
</template>

<script>

import siteNav from '../common/siteNav/siteNav.vue';
import InfoDisplayBar from '../common/infoDisplayBar/infoDisplayBar.vue'
export default {
  name: 'InfoDisplay',
  data () {
    return {
     
    }
  },
  components:{
    siteNav,
    InfoDisplayBar
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
