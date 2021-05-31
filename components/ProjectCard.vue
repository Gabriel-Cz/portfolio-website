<template>
    <div id="projectCard">
        <div class="projectTextContent">
            <h3>
                {{ projectName }}
            </h3>
            <div class="projectDescription-Wrapper">
                <p class="projectDescription">{{ projectDescription }}</p>
            </div>
            <div class="projectLinks">
                <NuxtLink class="nuxt-link-details" :to="'/projects/' + projectId">Project Details</NuxtLink>
                <a class="nuxt-link-live" target="_blank" :href="projectLiveUrl">See Live Project</a>
            </div>
        </div>
        <div class="projectImage-Wrapper">
            <a :href="projectLiveUrl" target="_blank">
                <img :src="projectImage" height="100%" width="100%" />
            </a>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            projectId: String,
            projectName: String,
            projectDescription: String,
            projectImage: String,
            projectDetailsLink: String,
            projectLiveUrl: String,
        }
    }
</script>

<style lang="scss" scoped>
@use '@/assets/_mediaMixin.scss' as mixin;
$fontTitle: 400 20px 'Libre Franklin', sans-serif;
$fontDescription: 300 16px 'Libre Franklin', sans-serif;
$fontLink: 300 16px 'Libre Franklin', sans-serif;
#projectCard {
    @include mixin.media(xs) {
        width: 90%;
    }
    @include mixin.media(sm) {
        width: 90%;
    }
    @include mixin.media(md) {
        width: 80%;
    }
    @include mixin.media(lg) {
        width: 60%;
    }
    width: 50%;
    z-index: 50;
    display: flex;
    flex-direction: row;
    margin-top: 20px;
    margin-bottom: 20px;
    .projectTextContent {
        @include mixin.media(xs) {
            width: 50%;
            margin: 0px 20px 10px 0px;
        }
        @include mixin.media(sm) {
            width: 60%;
            margin: 0px 20px 10px 0px;
        }
        @include mixin.media(md) {
            width: 60%;
            margin: 0px 20px 10px 0px;
        }
        width: 60%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin: 0px 40px 20px 0px;
        h3 {
          @include mixin.media(xs) {
            font-size: 14px;
              text-align: center;
          }
          letter-spacing: 1px;
          margin: 10px 0px;
          color: rgba($color: floralwhite, $alpha: 0.60);
          font: $fontTitle;
        }
        .projectLinks {
            @include mixin.media(xs) {
              flex-direction: column;
              margin-top: 0px;
              text-align: center;
            }
            display: flex;
            margin-top: 20px;
        }
        
        .projectDescription-Wrapper {
            @include mixin.media(xs) {
                display: none;
            }
            border-left: 1px ridge rgba($color: #E0E0E0, $alpha: 0.50);
            background-color: rgba($color: black, $alpha: 0.6);
            padding: 15px 10px;
            .projectDescription {
                @include mixin.media(xs) {
                    font-size: 12px;
                }
                font: $fontDescription;
                letter-spacing: 1px;
                color: rgba($color: floralwhite, $alpha: 0.8);
            }
        }
    }
    .projectImage-Wrapper {
        @include mixin.media(xs) {
            width: 50%;
        }
        width: 60%;
        height: 80%;
        display: flex;
        img {
            padding: none;
            margin: none;
        }
    }
}
.nuxt-link {
    @include mixin.media(xs) {
        font-size: 12px;
        margin: 5px 5px 5px 5px;
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
.nuxt-link-details {
    @include mixin.media(xs) {
        margin-left: 0px;
    }
    @extend .nuxt-link;
    color: #29B6F6;
    margin-left: 10px;
}
.nuxt-link-live {
    @include mixin.media(xs) {
    margin-left: 0px;
    }
    @extend .nuxt-link;
    margin-left: 20px;
    color: #26A69A;
    cursor: pointer;
}
</style>