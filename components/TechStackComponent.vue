<template>
    <div>
        <div class="projectTechnologies">
            <div class="technologyInfo">
                <div class="technologyType-Column">
                    <h3 class="technologyType">{{ techType }} :</h3> 
                </div>
                <div class="singleTechSpan-Column">
                    <span 
                        v-for="item in techStack"
                        :key="item.index"  
                        class="singleTechSpan"
                    >
                        {{ item }}
                    </span>
                </div>
            </div>    
        </div>
    </div>
</template>

<script>
    export default {
        name: "TechStackComponent",
        props: {
            id: Number,
            techType: String,
            techStack: Array, 
        }
    }
</script>

<style lang="scss" scoped>

@use '@/assets/_mediaMixin.scss' as mixin;

.projectTechnologies {
    font-family: 'Libre Franklin', sans-serif;
    color: floralwhite;
    display: flex;
    flex-direction: column;
    margin-top: 50px;
    .technologyInfo {
        letter-spacing: 1px;
        height: 100%;
        display: grid;
        grid-template-columns: repeat(12, 1fr);
        margin: 20px 20px 10px 20px;
           .technologyType-Column {
            @include mixin.media(xs) {
                grid-area: 1 / 1 / 2 / 6;
            } 
            @include mixin.media(sm) {
                grid-area: 1 / 1 / 2 / 5;
            } 
            grid-area: 1 / 1 / 2 / 5;
            .technologyType {
                margin: 10px 0px 10px 0px;
                font-weight: 400;
                text-align: end;
                padding-top: 5px;
                }
            }
            .singleTechSpan-Column {
                @include mixin.media(xs) {
                    grid-area: 1 / 6 / 2 / 13;
                }
                @include mixin.media(sm) {
                    grid-area: 1 / 5 / 2 / 13;
                }
                display: flex;
                flex-wrap: wrap;
                align-items: center;
                grid-area: 1 / 5 / 2 / 13;
                .singleTechSpan{
                    margin: 10px;
                    padding: 5px 10px;
                    text-transform: capitalize;
                    box-shadow: 3px 3px rgba($color: #E0E0E0, $alpha: 0.5);
                    border: 1px ridge rgba($color: #E0E0E0, $alpha: 1.0);
                }
            }
        }
}

</style>