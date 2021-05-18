<template>
    <div class="container">
      <div class="resumeWrapper">
        <div class="div1">
          <div class="header">Resume</div>
             <div class="content">
              {{ content }} <NuxtLink class="nuxt-link" to="/teckStack">Stack.</NuxtLink> 
             </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  data: () => ({
    content: "",
  }),
  async fetch() {
    try {
      this.$axios.get('/resume')
      .then(res => this.content = res.data.content);
    } catch (error) {
      console.log(error);
    }
  }
}
</script>


<style lang="scss" scoped>

@use '@/assets/_mediaMixin.scss' as mixin;

$fontHeader: 400 26px 'Libre Franklin', sans-serif;
$fontContent: 300 18px 'Libre Franklin', sans-serif;

.container {
    width: 100%;
    height: 100vh;
    color: floralwhite;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    .resumeWrapper {
      @include mixin.media(xs) {
        margin-top: 50px;
        width: 90%;
      }
      @include mixin.media(sm) {
        margin-top: 50px;
        width: 75%;
      }
      margin-top: 50px;
      width: 50%;
      border-radius: 5px;
      .div1 {
        padding: 25px;
        border: 4px double rgba($color: #CFD8DC, $alpha: 0.20);
        border-radius: 5px;
      }
      .div2 {
        padding-bottom: 25px;
        padding-right: 25px;
        border-bottom: 4px double rgba($color: #CFD8DC, $alpha: 0.25);
        border-right: 4px double rgba($color: #CFD8DC, $alpha: 0.25);
        border-radius: 5px;
      }
      .header {
        margin-top: 25px;
        font: $fontHeader;
        letter-spacing: 1px;
      }
      .content {
        font: $fontContent;
        margin: 50px 25px 20px 25px;
        letter-spacing: 1px;
        line-height: 25px;
        .nuxt-link {
          text-decoration: none;
          color: #26A69A;
        }
      }
    }
}

</style>