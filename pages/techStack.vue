<template>
    <div>
        <div class="container">
            <h4> Technologies with i've worked on and currently work.</h4>
            <div class="content-Wrapper">
                <div class="projectTechnologies">
                    <TechStackComponent 
                      :techType="techStackData.type"
                      :techStack="techStackData.stack"
                    />
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import TechStackComponent from "~/components/TechStackComponent.vue"

export default { 
    data: () => ({
        techStackData: null,
    }),
    components: { 
        TechStackComponent 
    },
    async fetch() {
        try {
            await this.$axios.get('/stack/technologies')
            .then(res => this.techStackData = res.data)
        } catch (error) {
            console.log(error);
        }
    }
}
</script>

<style lang="scss" scoped>

.projectTechnologies {
    font-family: 'Raleway', sans-serif;
    color: floralwhite;
    display: flex;
    flex-direction: column;
    margin-top: 50px;
}

</style>