<template>
    <div class="app">
        <header class="cabeçalho">
            <div class="header-content">
                <div class="hHeader">
                    <h1>Produtos</h1>
                </div>
                <div class="header-right">
                    <nav>
                        <router-link to="/api/cart">Carrinho</router-link>
                    </nav>
                </div>
            </div>
        </header>
        <div class="container">
            <b-container class="alinhamento">
                <div class="itens">
                    <b-row  align-h="around" class='height' v-for="produtos of produtos" v-bind:key="produtos.name" > 
                        <div class="col-lg-12" style="float:left; text-align: left;" >
                            <div class="produto">
                                <h5>Nome: {{produtos.name}}</h5>                              
                            </div>
                            <div class="sku">
                                <h5>SKU: {{produtos.sku}}</h5>
                            </div>
                            <div class="categoria">
                                <h5>Categoria: {{produtos.category}}</h5>
                            </div>
                            <div class="preço">
                                <h5>Preço: R$ {{produtos.price}}</h5>
                            </div>
                            <div class="fabricante">
                                <h5>Fabricante: {{produtos.maker}}</h5>
                            </div>
                            <div class="estoque">
                                <h5>Quantidade em estoque: {{produtos.quantityAvailable}}</h5>
                            </div>
                        </div>
                        <div class="col-lg-12" style= "padding-bottom: 5px; text-align: center;">
                            <img class='redimensionamento' v-bind:src="produtos.imageURL" /> 
                        </div>
                        <div class="col-lg-12" style= "padding-bottom: 5px; text-align: right;" >
                            <b-button variant="info" @click="salvar(1)" >Comprar</b-button>
                        </div>
                    </b-row>
                </div>
            </b-container>
        </div>
    </div>
</template>

<script>
import product from '../services/produtos'
import produtos from '../services/produtos';
export default {
    name: "Loja",

    //Responsavél por utilizar a end point get product
    mounted(){
        product.listar().then(resposta => {
        console.log(resposta.data);
        this.produtos = resposta.data;
        })
    },
    //Responsavél por criar um data() e retornar uma lista com produtos da end point get, e uma biblioteca produto.
    data(){
        return{
            produto:{
                nome:'',
                sku:'',
                categoria:'',
                preço:'',
                fabricante:'',
                quantidade:'',
            },
            produtos: []
        }
    },
    methods:{
        //Responsável por adicionar os dados dos produtos a ser comprados na biblitoeca produto, e usar a end point add
        salvar(id){
            this.produto.nome+=this.produtos[id].name
            this.produto.sku+=this.produtos[id].sku
            this.produto.categoria+=this.produtos[id].category
            this.produto.preço+=this.produtos[id].price
            this.produto.fabricante+=this.produtos[id].maker
            this.produto.quantidade+=this.produtos[id].quantityAvailable

            var myJSON = JSON.stringify(this.produto);
            var obj = JSON.parse(myJSON);
            product.salvar(obj).then(resposta => {
                alert('Salvo com sucesso')
            })            
            console.log(obj)     
        },   
        //Responsável limpar e zerar a biblioteca produto para poder ser utilizada novamente
        limpar(){
            this.produto.nome=''
            this.produto.sku=''
            this.produto.categoria=''
            this.produto.preço=''
            this.produto.fabricante=''
            this.produto.quantidade=''
        },
   }
}


</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Pacifico');
@import url('https://fonts.googleapis.com/css?family=Libre+Baskerville');

.itens{
    margin: 50px auto 0 auto;
}

.btn{
    text-align:right;
    border: 1px solid black;
    -moz-border-radius: 8px;
    -webkit-border-radius: 8px;
    border-radius: 8px;
    width: 100px; 
    height: 50px;
}

.redimensionamento{
    max-width:200px;
    max-height:150px;
    width: auto;
    height: auto;
}

.container{
    width: auto;
    height: auto;
}

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

.height{
    
    min-height: 10rem;
    text-align: left;
    padding-top: 20px;
    column-gap: 50px;
    border-top: dashed;
    border-left: dashed;
    border-right: dashed;
    font-family: 'Libre Baskerville', serif;
}

.header-content{
    text-align: center;
}

</style>



