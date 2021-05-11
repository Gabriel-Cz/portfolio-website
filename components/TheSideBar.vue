<template>
    <div>
        <transition name="sideBarExpand" :mode="mode">
            <div class="sideBarWrapper">
            <div v-show="showBar" class="sideBar">
                <span v-for="link in links" :key="link.name" class="linkWrapper">
                  <NuxtLink class="nuxt-link" :to="link.link">
                    {{ link.name }}
                  </NuxtLink>
                </span>
            </div>
        </div>
        </transition>
    </div>
</template>

<script>

export default {
    data() {
        return {
            showBar: true,
            transitionName: "",
            mode: "",
            links: [
                {name: "Stack", link: "/"},
                {name: "Projects", link: "/projects"},
                {name: "Resume", link: "/resume"},
                {name: "Github", link: "/github"},
                {name: "Codepen", link: "/codepen"}
            ]
        }
    },
    computed: {
        changeAnimationState() {
            return this.showBar ? this.mode = "out-in" : "in-out";
        }
    }
}

</script>

<style lang="scss" scoped>

@use '@/assets/_mediaMixin.scss' as mixin;

$fontLink: 300 16px 'Quicksand', sans-serif;

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
    position: fixed;
    width: 15%;
    z-index: 1;
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
            border: solid;
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
        animation: ExpandSideBar;
        height: 100%;
        display: flex;
        flex-direction: column;
        padding: 20px 20px;
        justify-content: center;
        align-items: center;
    }
    .dots {
        text-align: center;
        color: floralwhite;
    }
}

.nuxt-link {
    text-decoration: none;
    color: floralwhite;
    font: $fontLink;
    opacity: 0.5;
    transition: 0.5s ease-in-out;
    &:hover {
        transition: 0.5s ease-in-out;
        opacity: 1;
    }
}

.nuxt-link-active {
    text-decoration: none;
    color: floralwhite;
    font: $fontLink;
    opacity: 1;
}

.linkWrapper {
    @include mixin.media(xs) {
        margin: 0px 5px;
    }
    margin: 40px 20px;
}

@keyframes ExpandSideBar {
    from {
        opacity: 0;
        transition: 0.5s ease-in-out;
    }
    to {
        opacity: 1;
        transition: 0.5s ease-in-out;
        transform: translate(-25, -25);
    }
}

</style>