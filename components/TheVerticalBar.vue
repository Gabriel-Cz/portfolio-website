<template>
    <div>
        <div class="Bar">
            <div class="Toolbar">
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
        name: "TheVerticalBar",
        data() {
        return {
            internalLinks: [
                {name: "Stack", link: "/tech-stack"},
                {name: "Projects", link: "/projects"},
                {name: "Resume", link: "/resume"},
                {name: "Contact", link: "/contact"},
            ],
            externalLinks: [
                {name: "Github", link: "https://github.com/Gabriel-Cz"},
            ]
        }
    },
    }
</script>

<style lang="scss" scoped>

.Bar {
    display: flex;
    z-index: 30;
    .Toolbar {
        display: flex;
        z-index: 30;
    }
}

</style>