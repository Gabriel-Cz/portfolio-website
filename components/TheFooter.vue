<template>
    <div>
        <footer>
            <span class="name">Gabriel - Cz</span>
            <span class="contact">Contact: gabrielczhz@gmail.com</span>
        </footer>
    </div>
</template>

<script>
export default {
    name: "TheFooter"
}
</script>

<style lang="scss" scoped>

$fontFooter: 300 12px 'Quicksand', sans-serif;

footer {
    width: 100%;
    margin-top: 25px;
    padding: 30px 0px;
    text-align: center;
    color: floralwhite;
    letter-spacing: 1px;
    display: flex;
    justify-content: center;
    background-color: transparent;
    font: $fontFooter;
    opacity: 0.5;
    .name {
        margin: 0px 15px 0px 15px;
    }
    .contact {
        opacity: 1;
        margin: 0px 15px 0px 15px;
    }
}

</style>