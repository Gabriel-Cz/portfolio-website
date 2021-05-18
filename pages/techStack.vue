<template>
    <div>
        <div class="container">
            <h4> Technologies with i've worked on and currently work.</h4>
            <div class="content-Wrapper">
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
import data from '~/static/content.json'

export default { 
    data: () => ({
        techStackData: [
        {
          "type": "Frontend",
          "stack": [
            "Vue.js",
            "React.js",
            "Nuxt.js",
            "Next.js",
            "HTML"
          ]
        },
        {
          "type": "CSS Frameworks and Preprocessors",
          "stack": [
            "SCSS",
            "Talwind",
            "Vuetify",
            "Bootstrap",
            "React-Bootstrap"
          ]
        },
        {
          "type": "State Managment",
          "stack": [
            "Vuex",
            "Redux",
            "Next-Redux-Wrapper"
          ]
        },
        {
          "type": "Backend",
          "stack": [
            "Node.js",
            "Express",
            "Mongoose",
            "MongoDB"
          ]
        },
        {
          "type": "UI sketching and Mockups",
          "stack": [
            "Figma"
          ]
        },
        {
          "type": "Extras",
          "stack": [
            "Axios",
            "Postman",
            "Github",
            "Stripe"
          ]
        }
    ],
    }),
    components: { 
        TechStackComponent 
    },
    created() {
        this.getStack
    },
    methods: {
        async getStack() {
            this.$axios.get(data)
            .then(res => this.techStackData = res.data.stack)
            .catch(e => console.log(e))
        }
    }
    /*async fetch() {
        try {
            await this.$axios.get('/stack')
            .then(res => {
                this.techStackData = res.data.technologies;
                console.log(res.data.technologies);
            })
        } catch (error) {
            console.log(error);
        }
    } */
}
</script>

<style lang="scss" scoped>

@use '@/assets/_mediaMixin.scss' as mixin;

.container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h4 {
        @include mixin.media(xs) {
            margin-top: 50px;
        }
        @include mixin.media(sm) {
            margin-top: 50px;
        }
        margin-top: 100px;
        font: 22px 'Libre Franklin', sans-serif;
        color: rgba($color: floralwhite, $alpha: 0.50);
        padding: 0px 25px;
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