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
              :projectImage="project.image"
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
                projectsData: [
        {
            "id": "1",
            "name": "Plataforma Verkel",
            "description": "An HR concept platform, this was actually an attemp to archive a real world project, with two non-developers as a team, one of them a HR lead, an the other one a Project Managment. The project cannot be omplet by a logic bussines problem. This was the root prototype to test our ideas in a web",
            "technologies": [
                {
                  "type": "Stack",
                  "stack": [
                    "Nuxt.js",
                    "Vuetify",
                    "Vuex",
                    "Firebase",
                    "Axios"
                  ],
                  "extra": [
                    "REST API Service with firebase-realtime-database",
                    "Figma",
                  ]
                }
            ],
            "image": "/ProjectsImages/VerkelCapture.png",
            "link": "https://plataforma-verkel-prot.herokuapp.com/",
        },
        {
            "id": "2",
            "name": "Shared Lists",
            "description": "A Full-Stack CRUD web application based on lists, with the posibility to shared a list with someone else. This person can edit and add content to the shared list in real time (this feature is going to be implemented soon with Socket.io in mind).",
            "technologies": [
                {
                  "type": "Backend",
                  "stack": [
                    "Node.js",
                    "Express",
                    "Mongoose",
                    "MongoDB"
                  ],
                  "extras": [
                    "Postman",
                    "Figma",
                    "JSON Web Token",
                    "Mongo Clusters",
                    "Middlewares Libreries",
                    "REST API"
                  ]
                },
                {
                  "type": "Frontend",
                  "stack": [
                    "Vue.js",
                    "Vuex",
                    "Tailwind"
                  ],
                  "extras": [
                    "Figma",
                    "Axios"
                  ]
                }
            ],
            "image": "/ProjectsImages/SharedListsCapture.png",
            "link": "https://sharedlists-app-frontend.vercel.app/"
        },
        {
            "id": "3",
            "name": "Traversal Jewelry",
            "description": "A Full-Stack e-commerce site, based on a fictional jewelry store. Powered by Stripe payments.",
            "technologies": [
                {
                  "type": "Backend",
                  "stack": [
                    "Node.js",
                    "Redux"
                  ],
                  "extras": [
                    "Stripe",
                    "Next-Redux-Wrapper"
                  ]
                },
                {
                  "type": "Frontend",
                  "stack": [
                    "Next.js",
                    "React-Bootstrap",
                    "SCSS",
                    "Redux",
                    "Next-Redux-Wrapper"
                  ],
                  "extras": [
                    "Figma",
                    "Axios"
                  ]
                }
            ],
            "image": "/ProjectsImages/Traversal.png",
            "link": "https://traversal.vercel.app/"
        }
    ],
            }
        },
        /*async fetch() {
            try {
                this.$axios.get('http://localhost:1337/featured-projects')
                .then(res => {
                    console.log(res.data);
                    this.projectsData = res.data
                });
            } catch (error) {
                console.log(error)
            }
        },*/
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
        font: 400 32px 'Libre Franklin', sans-serif;
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