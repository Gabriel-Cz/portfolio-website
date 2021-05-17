<template>
    <div class="pageContainer">
        <div>
            <div class="pageHeader">
            <p>Featured Projects</p>
        </div>
        <div class="projectContainer">
            <ProjectCard 
              v-for="project in projectsData"
              :key="project.id"
              :projectId="project.id"
              :projectName="project.name"
              :projectDescription="project.description"
              :projectImage="'http://localhost:1337' + project.image.formats.small.url"
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
        data() {
            return {
                projectsData: "",
            }
        },
        async fetch() {
            try {
                this.$axios.get('http://localhost:1337/featured-projects')
                .then(res => {
                    console.log(res.data);
                    this.projectsData = res.data
                });
            } catch (error) {
                console.log(error)
            }
        }
    }
</script>

<style lang="scss" scoped>

@use '@/assets/_mediaMixin.scss' as mixin;

.pageContainer {
    .pageHeader {
        @include mixin.media(xs) {
            font-size: 28px;
            padding: 50px 20px;
        }
        @include mixin.media(sm) {
            font-size: 28px;
            padding: 20px 20px;
        }
        color: rgba($color: floralwhite, $alpha: 0.5);
        font: 36px 'Raleway', sans-serif;
        text-align: center;
        letter-spacing: 1px;
        padding: 100px 20px;
    }
    .projectContainer {
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
    }
}

</style>