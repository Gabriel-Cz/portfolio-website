<template>
  <div class="container">
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

.phantomDiv {
    color: transparent;
    height: 100%;
  }

</style>
