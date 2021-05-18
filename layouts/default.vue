<template>
  <div class="defaultContainer">
    <TheSideBar/>
    <body>
      <Nuxt />
    </body>
    <TheFooter />
  </div>
</template>

<script>

import TheSideBar from '@/components/TheSideBar'
import Sphere from '@/components/Sphere'
import TheFooter from '@/components/TheFooter' 

export default {
  components: {
    TheFooter,
    Sphere,
    TheSideBar
  }
}
</script>

<style lang="scss">  

$htmlBg: linear-gradient(76.77deg, #1C1C1C 0%, #696969 100%);

.defaultContainer {
  position: relative;
  background: $htmlBg;
  height: 100%;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

</style>
