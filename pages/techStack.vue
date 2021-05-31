<template>
    <div class="mainContainer">
        <div class="container">
            <div class="header-Wrapper">
              <h4> Technologies with i've worked on and currently work.</h4>
            </div>
            <div v-if="error" class="error" >Error al consultar contenido: { {{ error }} }</div>
            <div v-else class="content-Wrapper">
                <div 
                  class="projectTechnologies"
                  v-for="tech in techStackData"
                 :key="tech.index"
                >
                  <TechStackComponent 
                    :techType="tech.type"
                    :techStack="tech.stack"
                  />
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import TechStackComponent from "~/components/TechStackComponent.vue"

export default { 
    data: () => ({
        techStackData: [],
        error: ""
    }),
    components: { 
        TechStackComponent 
    },
    async fetch() {
        try {
            let response = await this.$axios.get('/stack');
            this.techStackData = response.data.technologies;
        } catch (error) {
            this.error = error.message;
        }
    } 
}
</script>

<style lang="scss" scoped>

@use '@/assets/_mediaMixin.scss' as mixin;

.mainContainer {
  height: 100%;
}

.container {
    z-index: 8;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .error {
      margin-top: 25px;
      text-align: center;
      z-index: 9;
      color: rgba($color: rgb(168, 50, 50), $alpha: 1);
    }
    .header-Wrapper {
      @include mixin.media(xs) {
        font-size: 22px;
        margin-top: 25px;
        padding: 25px 5px;
      }
      background: rgba($color: black, $alpha: 0.6);
      padding: 50px 25px;
      width: 100%;
      h4 {
        @include mixin.media(xs) {
            font-size: 22px;
        }
        @include mixin.media(sm) {
            margin-top: 50px;
        }
        text-align: center;
        font: 28px 'Libre Franklin', sans-serif;
        color: rgba($color: floralwhite, $alpha: 0.60);
    }
    }
    .content-Wrapper {
        @include mixin.media(xs) {
            width: 100%;
        }
        @include mixin.media(sm) {
            width: 70%;
        }
        width: 50%;
    }
}

</style>