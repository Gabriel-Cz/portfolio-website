<template>
    <div>
      <ThePagesHeader header="Resume" />
      <div class="container">
        <div class="content">
          <div v-if="error">
            Error retriving the content: {{ error }}
          </div>
          <div v-else>
            {{ content }}
            <br/> 
            You can see the stack with i've been worked so far in <NuxtLink class="nuxt-link" to="/techStack">Stack.</NuxtLink> 
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
    display: flex;
    justify-content: center;
    .content {
      @include mixin.media(xs) {
        width: 90%;
      }
      @include mixin.media(sm) {
        width: 75%;
      }
      width: 50%;
      display: flex;
      box-shadow: $boxShadow;
      margin-top: 50px;
      z-index: 8;
      color: black;
      text-align: center;
      border-radius: 5px;
      font: $fontContent;
      padding: 30px 40px;
      letter-spacing: 1px;
      line-height: 25px;
      .nuxt-link {
        text-decoration: none;
        color: #26A69A;
      }
    }
}

</style>