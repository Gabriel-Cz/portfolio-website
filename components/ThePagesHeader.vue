<template>
    <div>
        <div class="header">
            <h4> 
              {{ header }}
            </h4>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ThePagesHeader",
        props: {
            header: String
        }
    }
</script>

<style lang="scss" scoped>

@use '@/assets/_mediaMixin.scss' as mixin;

.header {
      @include mixin.media(xs) {
        font-size: 22px;
        margin-top: 25px;
        padding: 25px 5px;
      }
      @include mixin.media(sm) {
            font-size: 28px;
            padding: 20px 20px;
      }
      display: flex;
      justify-content: center;
      padding: 50px 25px;
      width: 100%;
      h4 {
        @include mixin.media(sm) {
            margin-top: 50px;
        }
        text-align: center;
        font: 300 24px 'Mulish', sans-serif;
        color: rgba($color: black, $alpha: 0.90);
      }
    }

</style>