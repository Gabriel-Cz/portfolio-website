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
import TheFooter from '@/components/TheFooter' 

export default {
  components: {
    TheFooter,
    TheSideBar,
  }
}
</script>

<style lang="scss">  

$htmlBg: linear-gradient(76.77deg, rgba(28, 28, 28, 0.75) 0%, rgba(105, 105, 105, 0.75) 100%);

html {
  background: $htmlBg;
  height: 100%;
  body {
    overflow-y: auto;
  }
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

</style>
