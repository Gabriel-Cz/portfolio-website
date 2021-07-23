<template>
  <div class="defaultContainer">
    <TheSideBar v-if="$route.path !== '/'" />
    <Nuxt />
    <TheFooter />
  </div>
</template>

<script>

import TheSideBar from '@/components/TheSideBar'
import TheFooter from '@/components/TheFooter' 

export default {
  components: {
    TheFooter,
    TheSideBar
  }
}
</script>

<style lang="scss">  

html {
  color: black;
}

body {
  height: 100%;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

</style>
