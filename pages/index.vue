<template>
  <div class="container">
    <TheVerticalBar />
    <Sphere />
  </div>
</template>

<script>

import Sphere from '@/components/Sphere' 
import TheVerticalBar from '@/components/TheVerticalBar' 

export default {
  components: {
    Sphere,
    TheVerticalBar,
  }
}
</script>

<style lang="scss" scoped>

.container {  
  min-height: 100vh;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}

</style>
