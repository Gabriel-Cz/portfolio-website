<template>
    <div>
        <div class="projectTechnologies">
            <div class="technologyInfo">
                <div class="technologyType-Column">
                    <h3 class="technologyType">{{ techType }} <span class="doublePoint">:</span></h3> 
                </div>
                <div class="singleTechSpan-Column">
                    <span 
                      v-for="item in techStack"
                      :key="item.index"  
                      class="singleTechSpan"
                    >
                        <span class="dot">
                            <img width="100%" :src="`/svgIcons/${item.toLowerCase()}.svg`" alt="Logo" />
                        </span> {{ item }}
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
    color: black;
    display: flex;
    flex-direction: column;
    margin-top: 50px;
    .technologyInfo {
        @include mixin.media(xs) {
            grid-template-columns: repeat(12, 1fr);
        } 
        letter-spacing: 1px;
        height: 100%;
        display: grid;
        grid-template-columns: repeat(12, 1fr);
        margin: 20px 20px 10px 20px;
           .technologyType-Column {
            @include mixin.media(xs) {
                text-align: center;
                margin-bottom: 15px;
                grid-area: 1 / 1 / 2 / 13;
            } 
            @include mixin.media(sm) {
                grid-area: 1 / 1 / 2 / 5;
            } 
            grid-area: 1 / 1 / 2 / 5;
            .technologyType {
                margin: 10px 0px 10px 0px;
                font-weight: 400;
                padding-top: 5px;
                .doublePoint {
                    @include mixin.media(xs) {
                      display: none;
                    } 
                  }
                }
            }
            .singleTechSpan-Column {
                @include mixin.media(xs) {
                    grid-area: 2 / 1 / 3 / 13;
                    justify-content: center;
                }
                @include mixin.media(sm) {
                    grid-area: 1 / 5 / 2 / 13;
                }
                display: flex;
                flex-wrap: wrap;
                align-items: center;
                grid-area: 1 / 5 / 2 / 13;
                .singleTechSpan{
                    @include mixin.media(xs) {
                        margin: 5px 10px 5px 10px;
                    }
                    position: relative;
                    margin: 10px;
                    padding: 5px 10px;
                    text-transform: capitalize;
                    .dot {
                        position: absolute;
                        top: 0;
                        left: 0;
                        transform: translate(-50%, 0%);
                        width: 15px;
                        height: 15px;
                        border-radius: 5px;
                    }
                }
            }
        }
}

</style>