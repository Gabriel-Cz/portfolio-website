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
                    <div class="technologyInfo">
                        <div class="technologyType-Column">
                            <h3 class="technologyType">{{ technology.type }} :</h3> 
                        </div>
                        <div class="singleTechSpan-Column">
                            <span 
                               v-for="item in technology.stack"
                               :key="item.index"  
                               class="singleTechSpan"
                            >
                               {{ item }}
                            </span>
                        </div>
                    </div>
                </div> 
            </div>
            </div>
        </div>
    </div>
</template>

<script>

import ProjectCard from '@/components/ProjectCard'

    export default {
        components: {
            ProjectCard,
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

#projectWrapper {
    height: 100%;
}

.container {
    height: 100%;
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
            .technologyInfo {
                height: 100%;
                display: grid;
                grid-template-columns: repeat(12, 1fr);
                margin: 20px 20px 10px 20px;
                .technologyType-Column {
                    @include mixin.media(xs) {
                        grid-area: 1 / 1 / 2 / 13;
                    } 
                    grid-area: 1 / 1 / 2 / 3;
                    .technologyType {
                        font-weight: 300;
                        text-align: center;
                    }
                }
                .singleTechSpan-Column {
                    @include mixin.media(xs) {
                        grid-area: 1 / 1 / 2 / 13;
                    } 
                    grid-area: 1 / 3 / 2 / 13;
                    .singleTechSpan{
                        margin: 0px 10px 0px 10px;
                        padding: 5px 10px;
                        text-transform: capitalize;
                        box-shadow: 3px 3px rgba($color: #E0E0E0, $alpha: 0.5);
                        border: 1px ridge rgba($color: #E0E0E0, $alpha: 1.0);
                    }
                }
            }
        }
    }
}

</style>