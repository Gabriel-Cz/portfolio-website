<template>
  <div class="defaultContainer">
    <TheSideBar/>
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

$htmlBg: linear-gradient(76.77deg, #1C1C1C 0%, #696969 100%);

html {
  color: black;
}

.defaultContainer{
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

</style>
