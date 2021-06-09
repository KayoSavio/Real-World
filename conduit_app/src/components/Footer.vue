<template>
    <footer>
      <div class="container">
        <a href="/" id="link-home">Projeto Real World by Kayo Savio</a>
      </div>
    </footer>
</template>

<script>
export default {
    name:'Footer'
}
</script>

<style scoped>
    div{
        display: flex;
        justify-content: center;
        background-color: #9C489C;
        width: 100%;
        height: 60px;
    }
    #link-home{
        margin-top: 20px;
        color: white;
    }
</style>