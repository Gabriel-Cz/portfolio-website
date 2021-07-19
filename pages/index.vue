<template>
  <div class="container">
    <Sphere />
    <div class="phantomDiv">This is a Phantom Div to handle the Background in this non-content landing page.</div>
  </div>
</template>

<script>

import Sphere  from '@/components/Sphere' 

export default {
  components: {
    Sphere
  }
}
</script>

<style lang="scss" scoped>

.container {
  height: 100%;
  .phantomDiv {
    color: transparent;
    height: 100vh;
  }
}

</style>
