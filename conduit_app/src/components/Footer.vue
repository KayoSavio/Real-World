<template>
    <footer>
        <a href="/" id="link-home">Projeto Real World by Kayo Savio</a>
    </footer>
</template>

<script>
export default {
    name:'Footer'
}
</script>

<style scoped>
    footer{
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #9C489C;
        width: 100%;
        height: 60px;
    }
    #link-home{
        color: var(--color-text-light);
    }
</style>