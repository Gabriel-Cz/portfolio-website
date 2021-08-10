<template>
    <div class="pageContainer">
        <div>
            <ThePagesHeader header="Featured Projects" />
            <div v-if="error">
                Error retriving the content: {{ error }}
            </div>
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
import ThePagesHeader from "~/components/ThePagesHeader.vue"

    export default {
        components: {
            ThePagesHeader,
            ProjectCard,
        },
        data: () => ({
          projectsData: [],
          error: ""
        }),
        head: {
            title: "Gabriel Cz | Projects"
        },
        async fetch() {
            try {
                let response = await this.$axios.get('/featured-projects');
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