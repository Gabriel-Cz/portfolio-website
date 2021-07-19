<template>
    <div class="container">
      <div class="resumeWrapper">
        <div class="div1">
            <ThePagesHeader header="Resume" />
            <div class="content">
              <div v-if="error">{{ error }}</div>
              <div v-else>
                {{ content }} <NuxtLink class="nuxt-link" to="/techStack">Stack.</NuxtLink> 
              </div>
            </div>
        </div>
      </div>
    </div>
</template>

<script>

import ThePagesHeader from "~/components/ThePagesHeader.vue"

export default {
  data: () => ({
    content: "",
    error: "",
  }),
  components: {
    ThePagesHeader,
  },
  async fetch() {
    try {
      let response = await this.$axios.get('/resume');
      this.content = response.data.content;
    } catch (error) {
      this.error = error;
    }
  }
}
</script>


<style lang="scss" scoped>

@use '@/assets/_mediaMixin.scss' as mixin;

$fontHeader: 300 26px 'Libre Franklin', sans-serif;
$fontContent: 300 18px 'Libre Franklin', sans-serif;

$boxShadow: 0 2px 4px rgb(0 0 0 / 10%), 0 8px 16px rgb(0 0 0 / 10%);

.container {
    width: 100%;
    max-height: 100%;
    min-height: 100vh;
    color: black;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    .resumeWrapper {
      z-index: 8;
      @include mixin.media(xs) {
        width: 100%;
      }
      @include mixin.media(sm) {
        margin-top: 50px;
        width: 75%;
      }
      box-shadow: $boxShadow;
      margin-top: 50px;
      width: 50%;
      border-radius: 5px;
      .div1 {
        padding: 25px;
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
        @include mixin.media(xs) {
          font-size: 14px;
          margin: 50px 10px 20px 10px;      
        }
        z-index: 9;
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