<template>
    <div>
        <ThePagesHeader header="Get a Quote" />
        <div class="container">
            <div class="content">
                <TheContactForm />
            </div>
        </div>
    </div>
</template>

<script>

import TheContactForm from '@/components/TheContactForm.vue';
import ThePagesHeader from '@/components/ThePagesHeader.vue';

    export default {
        components: {
            TheContactForm,
            ThePagesHeader,
        }
    }
</script>

<style lang="scss" scoped>

@use '@/assets/_mediaMixin.scss' as mixin;

.headerWrapper {
    position: absolute;
}

.container {
    max-height: 100%;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    .content {
        @include mixin.media(xs) {
            width: 90%;
        }
        @include mixin.media(sm) {
            width: 50%;
        }
        @include mixin.media(md) {
            width: 50%;
        }
        width: 25%;
        margin-top: 50px;
    }
}

</style>