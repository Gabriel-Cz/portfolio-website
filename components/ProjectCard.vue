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
                <NuxtLink class="nuxt-link-live" :to="'/projects/' + projectId">See Live Project</NuxtLink>
            </div>
        </div>
        <div class="projectImage-Wrapper">
            <img :src="projectImage" width="100%" />
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
        }
    }
</script>

<style lang="scss" scoped>

@use '@/assets/_mediaMixin.scss' as mixin;

$fontTitle: 400 20px'Raleway', sans-serif;
$fontDescription: 300 16px 'Raleway', sans-serif;
$fontLink: 300 16px 'Quicksand', sans-serif;

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
    width: 50%;
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
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin: 0px 40px 20px 0px;
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
            display: flex;
            margin-top: 20px;
        }
        
        .projectDescription-Wrapper {
            @include mixin.media(xs) {
                display: none;
            }
            border-left: 1px ridge rgba($color: #E0E0E0, $alpha: 0.50);
            padding-left: 10px;
            .projectDescription {
                @include mixin.media(xs) {
                    font-size: 12px;
                }
                font: $fontDescription;
                letter-spacing: 1px;
                color: rgba($color: floralwhite, $alpha: 0.50);
            }
        }
    }
    .projectImage-Wrapper {
        @include mixin.media(xs) {
            width: 50%;
        }
        display: flex;
        img {
            border-right: 6px solid #E0E0E0;
            padding: none;
            margin: none;
            border-radius: 5px;
            box-shadow: 5px 5px 5px rgba($color: white, $alpha: 0.1);
        }
    }
}

.nuxt-link {
    @include mixin.media(xs) {
        font-size: 12px;
    }
    text-decoration: none;
    font: $fontLink;
    opacity: 0.5;
    transition: 0.5s ease-in-out;
    &:hover {
        transition: 0.5s ease-in-out;
        opacity: 1;
    }
}

.nuxt-link-details {
    @extend .nuxt-link;
    color: #B3E5FC;
    margin-left: 10px;
}

.nuxt-link-live {
    @extend .nuxt-link;
    margin-left: 10px;
    color: #AED581;
}

</style>