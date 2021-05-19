<template>
    <div>
        <div class="container">
            <div class="projectData-Wrapper">
               <div class="projectName">
                  <h3>{{ project.name }}</h3>
               </div>
            <div class="projectDescription">
                <p>{{ project.description }}</p>
            </div>
            <div class="projectImage">
                <img :src='project.image' width="50%">
            </div>
            <div class="link-Wrapper">
              <a  class="nuxt-link-live" target="_blank" :href="project.link">See Live Project</a>
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
            projects: [
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
                    "Firebase"
                  ],
                },
                {
                  "type": "Extra",
                  "stack": [
                    "REST API Service with firebase-realtime-database",
                    "Figma",
                    "Axios"
                  ]
                }
            ],
            "image": "https://gabrielcz-portfolio.vercel.app/ProjectsImages/VerkelCapture.PNG",
            "link": "https://plataforma-verkel-prot.herokuapp.com/",
        },
        {
            "id": "2",
            "name": "Shared Lists",
            "description": "A Full-Stack CRUD web application based on lists, with the posibility to shared a list with someone else. This person can edit and add content to the shared list in real time.",
            "technologies": [
                {
                  "type": "Backend",
                  "stack": [
                    "Node.js",
                    "Express",
                    "Mongoose",
                    "MongoDB"
                  ],
                },
                {
                  "type": "Frontend",
                  "stack": [
                    "Vue.js",
                    "Vuex",
                    "Tailwind"
                  ],
                },
                {
                  "type": "extras",
                  "stack": [
                    "Postman",
                    "Figma",
                    "JSON Web Token",
                    "Mongo Clusters",
                    "Middlewares Libreries",
                    "REST API",
                    "Figma",
                    "Axios"
                  ]
                }
            ],
            "image": "https://gabrielcz-portfolio.vercel.app/ProjectsImages/SharedListsCapture.PNG",
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
                },
                {
                  "type": "extras",
                  "stack": [
                    "Figma",
                    "Axios",
                    "Stripe",
                    "Next-Redux-Wrapper"
                  ]
                }
            ],
            "image": "https://gabrielcz-portfolio.vercel.app/ProjectsImages/Traversal.PNG",
            "link": "https://traversal.vercel.app/"
        }
    ],
        }),
        computed: {
            getId() {
                return this.$route.params.id;
            },
        },
        methods: {
            getProject() {
                this.projects.find(el => {
                    el.id === this.getId ? this.project = el : false; 
                })
            }
        },
        created() {
            this.getProject();
        }
        /*async fetch() {
            try {
            await this.$axios.get('/featured-projects/' + this.getId)
            .then(res => {
                console.log(res.data);
                this.project = res.data;
                this.projectImage = 'http://localhost:1337' + res.data.image.formats.medium.url;
            })
           } catch(error) {
               console.log(error)
           }
        } */
    }

</script>

<style lang="scss" scoped>

@use '@/assets/_mediaMixin.scss' as mixin;

$fontTitle: 400 20px'Raleway', sans-serif;
$fontDescription: 300 16px 'Raleway', sans-serif;
$fontLink: 300 18px 'Quicksand', sans-serif;

.container {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    max-height: 100%;
    min-height: 100vh;
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
        z-index: 10;
        width: 50%;
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
            margin: 50px 50px 0px 50px;
            border-left: 1px ridge rgba($color: #E0E0E0, $alpha: 0.50);
            background-color: rgba($color: black, $alpha: 0.6);
            padding: 15px 10px;
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
              @include mixin.media(xs) {
                box-shadow: 2.5px 2.5px 1px rgba($color: gainsboro, $alpha: 0.5);
              }
               border-bottom: 8px solid #E0E0E0;
               padding: none;
               margin: none;
               border: solid 1px rgba($color: white, $alpha: 0.5);
               box-shadow: 5px 5px 1px rgba($color: gainsboro, $alpha: 0.5);
               border-radius: 5px;
            } 
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