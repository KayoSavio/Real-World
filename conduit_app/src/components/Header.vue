<template>
    <header>
        <nav class="container">
        <a href="/"><img alt="logo" id="logo" src="https://raw.githubusercontent.com/gothinkster/realworld-starter-kit/master/logo.png"></a>
        <img @click="openMenu" alt="Abrir menu" id="menu-button" src="../assets/menu_black_24dp.svg">
        <div @click="closeMenu" id="menu-overlay" v-if="menuActivie"></div>
        <div id="menu-items" :class="{active:menuActivie}">
            <a href="/"><img alt="logo" id="menu-logo" src="https://raw.githubusercontent.com/gothinkster/realworld-starter-kit/master/logo.png"></a>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/login">Sing In</a></li>
                <li><a href="/register">Sing Up</a></li>
            </ul>
        </div>
        </nav>
    </header>
</template>

<script>


export default ({
    name:'Header',
    data(){
        return{
            menuActivie: false,
        }
    },
    methods:{
        openMenu(){
            this.menuActivie=true;
        },
        closeMenu(){
            this.menuActivie=false;
        }
    }
})
</script>

<style scoped>
    header{
        background-color: var(--color-background-nav);
        height: 60px;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    #menu-overlay{
        position: fixed;
        top: 0;
        left: 0;
        width: 60%;
        height: 100vh;
        background-color: #9C489C;
        opacity: 0.9;
    }
    nav{
        display: flex;
        justify-content: space-between;
        height: 60px;
        align-items: center;
    }
    #logo{
        width: 300px;
    }
    #menu-logo{
        width: 200px;
        margin-top: 30px;
        margin-bottom: 10px;
    }

    #menu-items{
        position: fixed;
        top: 0;
        right: 0;
        background-color: var(--color-background-nav);
        width: 40%;
        height: 100vh;
        display: none;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
    }
    ul{
        list-style: none;
        text-align: center;
    }
    ul li{
        margin: 20px 0px;
    }
    ul li a{
        color: #777777;
    }
    @media(min-width:700px){
        #menu-button,
        #menu-logo,
        #menu-overlay{
            display:none;
        }
        #menu-items{
            display: flex;
            position: static;
            height: 60px;
            width: auto;

        }
        ul{
            display: flex;
            flex-direction: row;
            height: 60px;
            align-items: center;
        }
        ul li{
            margin: 0px;
            margin-left: 20px;
        }
    }
    #menu-items.active{
        display: flex;
    }
    
</style>