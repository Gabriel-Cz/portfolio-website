<template>
    <div id="projectCard">
        <div class="projectTextContent">
            <div class="projectTitle-Wrapper">
              <h3>
                {{ projectName }}
              </h3>
            </div>
            <div class="projectDescription-Wrapper">
                <div>
                    <p class="projectDescription">{{ projectDescription }}</p>
                </div>
                <div class="projectLinks">
                  <NuxtLink class="nuxt-link-details" :to="'/projects/' + projectId">Project Details</NuxtLink>
                  <a class="nuxt-link-live" target="_blank" :href="projectLiveUrl">See Live Project</a>
                </div>
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

$fontTitle: 300 20px 'Libre Franklin', sans-serif;
$fontDescription: 300 14px 'Libre Franklin', sans-serif;
$fontLink: 300 15px 'Libre Franklin', sans-serif;

$darkBackground: rgba($color: black, $alpha: 0.6);

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
    margin-top: 25px;
    margin-bottom: 25px;
    .projectTextContent {
        @include mixin.media(xs) {
            width: 50%;
        }
        @include mixin.media(sm) {
            width: 60%;
        }
        @include mixin.media(md) {
            width: 60%;
        }
        width: 60%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin: 0px 5px 0px 0px;
        h3 {
          @include mixin.media(xs) {
            font-size: 14px;
          }
          letter-spacing: 1px;
          margin: 10px 0px;
          color: rgba($color: floralwhite, $alpha: 0.60);
          font: $fontTitle;
        }
        .projectLinks {
            @include mixin.media(xs) {
              flex-direction: column;
              justify-content: start;
              align-items: flex-start;
              margin-top: 0px;
            }
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100%;
            margin-top: 20px;
        }
        
        .projectDescription-Wrapper {
            @include mixin.media(xs) {
            padding: 5px 5px;
            }
            height: 100%;
            background: $darkBackground;
            border-left: 1px ridge rgba($color: #E0E0E0, $alpha: 0.50);
            padding: 20px 15px;
            display: flex;
            flex-direction: column;
            .projectDescription {
                @include mixin.media(xs) {
                    font-size: 12px;
                    display: none;
                }
                overflow : hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-line-clamp: 4;
                -webkit-box-orient: vertical;
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
        background: $darkBackground;
        width: 60%;
        border-top: 1px ridge rgba($color: #E0E0E0, $alpha: 0.50);
        border-right: 1px ridge rgba($color: #E0E0E0, $alpha: 0.50);
        height: 100%;
        display: grid;
        place-items: center;
        padding: 10px;
    }
}
.nuxt-link {
    @include mixin.media(xs) {
        font-size: 12px;
        padding: 2px;
    }
    letter-spacing: 1px;
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