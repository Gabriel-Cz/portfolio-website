<template>
    <div id="project-Wrapper">
        <div class="container">
            <div class="projectData-Wrapper">
               <div class="projectName">
                  <h3>{{ project.name }}</h3>
               </div>
            <div class="projectDescription">
                <p>{{ project.description }}</p>
            </div>
            <div class="projectImage">
                <img :src="project.image" width="50%">
            </div>
            <div class="projectTechnologies">
                <div 
                  v-for="technology in project.technologies"
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
            project: "",
        }),
        computed: {
            getId() {
                return this.$route.params.id;
            },
        },
        async fetch() {
           try {
            await this.$axios.get('/featured-projects/' + this.getId)
            .then(res => this.project = res.data)
           } catch(error) {
               console.log(error)
           }
        },
    }

</script>

<style lang="scss" scoped>

@use '@/assets/_mediaMixin.scss' as mixin;

$fontTitle: 400 20px'Raleway', sans-serif;
$fontDescription: 300 16px 'Raleway', sans-serif;
$fontLink: 300 16px 'Quicksand', sans-serif;

.container {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    .projectData-Wrapper {
        @include mixin.media(xs) {
            width: 100%;
        }
        @include mixin.media(sm) {
            width: 90%;
        }
        @include mixin.media(md) {
            width: 80%;
        }
        width: 50%;
        .projectName {
            margin-top: 100px;
            text-align: center;
            h3 {
              @include mixin.media(xs) {
                font-size: 14px;
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
            margin: 50px 50px 0px 50px;
            border-left: 1px ridge rgba($color: #E0E0E0, $alpha: 0.50);
            padding-left: 10px;
            font: $fontDescription;
            letter-spacing: 1px;
            color: rgba($color: floralwhite, $alpha: 0.50); 
        }
        .projectImage {
            @include mixin.media(xs) {
                margin-top: 25px;
            }
            margin-top: 50px;
            display: flex;
            justify-content: center;
            align-items: center;
            img {
               border-bottom: 8px solid #E0E0E0;
               padding: none;
               margin: none;
               border-radius: 5px;
               box-shadow: 5px 5px 10px rgba($color: #EEEEEE, $alpha: 0.25);
            } 
        }
        .projectTechnologies {
            font-family: 'Raleway', sans-serif;
            color: floralwhite;
            display: flex;
            flex-direction: column;
            margin-top: 50px;
        }
    }
}

</style>