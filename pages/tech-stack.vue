<template>
    <div class="mainContainer">
        <div class="container">
            <ThePagesHeader header="Technology Stack" />
            <div v-if="error" class="error" >Error retriving the content: { {{ error }} }</div>
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
import ThePagesHeader from "~/components/ThePagesHeader.vue"

export default { 
    data: () => ({
        techStackData: [],
        error: ""
    }),
    head: {
      title: "Gabriel Cz | Tech Stack"
    },
    components: { 
        TechStackComponent,
        ThePagesHeader,
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
      @include mixin.media(sm) {
            font-size: 28px;
            padding: 20px 20px;
      }
      background: rgba($color: black, $alpha: 0.6);
      padding: 50px 25px;
      width: 100%;
      h4 {
        @include mixin.media(sm) {
            margin-top: 50px;
        }
        text-align: center;
        font: 300 24px 'Mulish', sans-serif;
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