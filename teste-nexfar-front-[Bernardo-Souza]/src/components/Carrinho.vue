<template>
    <div class="app">
        <header class="cabeçalho">
            <div class="header-content">
                <div class="hHeader">
                    <h1>Carrinho</h1>
                </div>
                <div class="header-right">
                    <nav>
                        <router-link to="/api/products">Produtos</router-link> 
                    </nav>
                </div>
            </div>
        </header>
        <body>
            <div class="container">            
                <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia illo laborum autem repellat nobis voluptatem vel reiciendis voluptatibus atque, nemo sed nam repellendus, magnam error facilis explicabo id quos animi!</p>
            </div>
        </body>
    </div>
</template>

<script>
import compra from '../components/Loja'
export default {
    name: "Carrinho",

    mounted(){
        console.log(compra);
        console.log(compra.data);
    }


}   


</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Pacifico');
@import url('https://fonts.googleapis.com/css?family=Libre+Baskerville');

.cabeçalho{
    overflow: hidden;
    background-color: #f1f1f1;
    padding: 20px 10px;
}

.hHeader {
    font-family: 'Pacifico', cursive;
    float: center;
    color: black;
    text-align: center;
    padding: 12px;
    text-decoration: none;
    font-size: 18px; 
    line-height: 25px;
    border-radius: 4px;
}
.header-right {
    font-family: 'Pacifico', cursive;
    float: right;
    color: black;
    text-align: center;
    padding: 12px;
    text-decoration: none;
    font-size: 18px; 
    line-height: 25px;
    border-radius: 4px;
}

.header-content{
    text-align: center;
}

.carrinho{
    width: 50%;
    border: 1px solid #000;
    border-radius: 10px;
}

.container{
    background-color: orange;
    border: 1px solid #000;
    margin: 50px auto 0 auto;
}
</style>


