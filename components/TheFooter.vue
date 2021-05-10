<template>
    <div>
        <footer>
            Gabriel - Cz
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
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    padding: 30px 0px;
    text-align: center;
    color: floralwhite;
    letter-spacing: 1px;
    font: $fontFooter;
    opacity: 0.5;
}

</style>