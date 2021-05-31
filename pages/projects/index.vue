<template>
    <div class="pageContainer">
        <div>
            <div class="header-Wrapper">
               <p>Featured Projects</p>
            </div>
        <div v-if="error">{{ error }}</div>
        <div v-else class="projectContainer">
            <ProjectCard 
              v-for="project in projectsData"
              :key="project.id"
              :projectId="project.id"
              :projectName="project.name"
              :projectDescription="project.description"
              :projectImage="project.image"
              :projectLiveUrl="project.link"
            />
        </div>
        </div>
    </div>
</template>

<script>

import ProjectCard from '@/components/ProjectCard'

    export default {
        components: {
            ProjectCard
        },
        data: () => ({
          projectsData: [],
          error: ""
        }),
        async fetch() {
            try {
                let response = await this.$axios.get('http://localhost:1337/featured-projects');
                this.projectsData = response.data;
            } catch (error) {
                this.error = error
            }
        }
    }
</script>

<style lang="scss" scoped>

@use '@/assets/_mediaMixin.scss' as mixin;

.pageContainer {
    z-index: 8;
    max-height: 100%;
    min-height: 100vh;
    .header-Wrapper {
        z-index: 9;
        @include mixin.media(xs) {
            font-size: 22px;
            margin-top: 25px;
            padding: 25px 5px;
        }
        @include mixin.media(sm) {
            font-size: 28px;
            padding: 20px 20px;
        }
        background-color: rgba($color: black, $alpha: 0.6);
        color: rgba($color: floralwhite, $alpha: 0.60);
        font: 400 32px 'Libre Franklin', sans-serif;
        text-align: center;
        letter-spacing: 1px;
        padding: 50px 25px;
    }
    .projectContainer {
        @include mixin.media(xs) {
          margin-top: 25px;
        }
        margin-top: 50px;
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
    }
}

</style>