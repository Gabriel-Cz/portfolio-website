<template>
    <div>
        <div class="sideBarWrapper">
            <div class="sideBar">
                <span v-for="link in internalLinks" :key="link.name" class="linkWrapper">
                  <NuxtLink class="nuxt-link" :to="link.link">
                      {{ link.name }}
                  </NuxtLink>
                </span>
                <span v-for="link in externalLinks" :key="link.name" class="linkWrapper">
                    <a  class="nuxt-link" target="_blank" :href="link.link">{{ link.name }}</a>
                </span>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    data() {
        return {
            internalLinks: [
                {name: "Stack", link: "/tech-stack"},
                {name: "Projects", link: "/projects"},
                {name: "Resume", link: "/resume"},
                {name: "Contact", link: "/contact"}
            ],
            externalLinks: [
                {name: "Github", link: "https://github.com/Gabriel-Cz"},
            ]
        }
    },
}

</script>

<style lang="scss" scoped>

@use '@/assets/_mediaMixin.scss' as mixin;

.sideBarWrapper {
    @include mixin.media(xs) {
        position: relative;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        overflow-x: none;
        overflow: hidden;
        grid-template-columns: none;
    }
    @include mixin.media(sm) {
        position: relative;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        overflow-x: none;
        overflow: hidden;
        grid-template-columns: none;
    }
    @include mixin.media(md) {
        position: relative;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        overflow-x: none;
        overflow: hidden;
        grid-template-columns: none;
    }
    z-index: 30;
    position: fixed;
    width: 15%;
    overflow-x: hidden;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    padding: 20px 20px;
    justify-content: center;
    align-items: center;
    .sideBar {
        @include mixin.media(xs) {
            display: flex;
            flex-direction: row;
            padding: 0px;
            width: 100%;
        }
        @include mixin.media(sm) {
            display: flex;
            flex-direction: row;
            padding: 0px;
        }
        @include mixin.media(md) {
            display: flex;
            flex-direction: row;
            padding: 0px;
        }
        height: 100%;
        display: flex;
        flex-direction: column;
        padding: 20px 20px;
        justify-content: center;
        align-items: center;
    }
}

</style>