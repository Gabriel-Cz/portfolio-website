<template>
    <div>
        <div class="container">
            <div v-if="error">{{ error }}</div>
            <div v-else class="projectData-Wrapper">
                <div class="projectName">
                  <h3>{{ project.name }}</h3>
                </div>
                <div class="projectDescription">
                  <p>{{ project.description }}</p>
                </div>
                <div class="projectImage">
                  <img :src="project.image" width="100%" />
                </div>
                <div class="link-Wrapper">
                  <a  class="nuxt-link-live" target="_blank" :href="project.link">See Live Project</a>
                </div>
                <div class="projectTechnologies">
                  <div 
                    v-for="technology in project.stack"
                    :key="technology.type"
                  >
                    <TechStackComponent 
                      :techType="technology.type"
                      :techStack="technology.stack"
                    />
                  </div> 
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import ProjectCard from '@/components/ProjectCard'
import TechStackComponent from '@/components/TechStackComponent'

    export default {
        components: {
            ProjectCard,
            TechStackComponent
        },
        data: () => ({
            project: {},
            error: ""
        }),
        computed: {
            getId() {
                return this.$route.params.id;
            },
        },
        async fetch() {
            try {
            let response = await this.$axios.get(`/featured-projects/${this.getId}`);
            console.log(response.data);
            this.project = response.data;
           } catch(error) {
               this.error(error);
           }
        }
    }

</script>

<style lang="scss" scoped>

@use '@/assets/_mediaMixin.scss' as mixin;

$fontTitle: 300 24px 'Mulish', sans-serif;
$fontDescription: 300 16px 'Mulish', sans-serif;
$fontLink: 300 22px 'Libre Franklin', sans-serif;

.container {
    z-index: 8;
    display: flex;
    justify-content: center;
    justify-items: center;
    align-items: center;
    flex-direction: column;
    max-height: 100%;
    min-height: 100vh;
    .projectData-Wrapper {
        @include mixin.media(xs) {
            width: 90%;
        }
        @include mixin.media(sm) {
            width: 90%;
        }
        @include mixin.media(md) {
            width: 80%;
        }
        z-index: 9;
        width: 40%;
        .projectName {
            @include mixin.media(xs) {
              margin-top: 50px;
            }
            margin-top: 100px;
            text-align: center;
            h3 {
              @include mixin.media(xs) {
                font-size: 16px;
              }
              letter-spacing: 1px;
              margin: 10px 0px;
              color: rgba($color: floralwhite, $alpha: 0.60);
              font: $fontTitle;
            }
        }
        .projectDescription {
            @include mixin.media(xs) {
                font-size: 12px;
            }
            margin: 50px 0px 0px 0px;
            border-left: 1px ridge rgba($color: #E0E0E0, $alpha: 0.50);
            background-color: rgba($color: black, $alpha: 0.6);
            padding: 15px 10px;
            font: $fontDescription;
            letter-spacing: 1px;
            color: rgba($color: floralwhite, $alpha: 0.80); 
        }
        .projectImage {
            border-right: 3px ridge rgba($color: #E0E0E0, $alpha: 0.50);
            background-color: rgba($color: black, $alpha: 0.6);
            margin-top: 10px;
            padding: 10px;
            display: flex;
            justify-content: center;
            align-items: center; 
        }
        .projectTechnologies {
            @include mixin.media(xs) {
              width: 100%;
              margin-top: 0px;
            }
            @include mixin.media(sm) {
              width: 90%;
              margin-top: 20px;
            }
            @include mixin.media(md) {
              width: 80%;
              margin-top: 35px;
            }
            @include mixin.media(lg) {
              width: 80%;
              margin-top: 40px;
            }
            width: 70%;
            font-family: 'Raleway', sans-serif;
            color: floralwhite;
            display: flex;
            flex-direction: column;
            margin-top: 50px;
        }
    }
}

.link-Wrapper {
  @include mixin.media(xs) {
    margin-top: 25px;
  }
  text-align: center;
  margin-top: 50px;
}

.nuxt-link {
    @include mixin.media(xs) {
        font-size: 18px;
    }
    letter-spacing: 1px;
    text-decoration: none;
    font: $fontLink;
    opacity: 0.65;
    transition: 0.5s ease-in-out;
    &:hover {
        transition: 0.5s ease-in-out;
        opacity: 1;
    }
}

.nuxt-link-live {
    @extend .nuxt-link;
    color: #26A69A;
    cursor: pointer;
}

</style>