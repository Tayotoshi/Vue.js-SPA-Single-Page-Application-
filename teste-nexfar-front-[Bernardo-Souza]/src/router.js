import Vue from 'vue'
import Router from 'vue-router'
import Loja from './components/Loja.vue'
import Carrinho from './components/Carrinho.vue'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: "/api/products",
            name: "produtos",  
            component: Loja
        },
        {
            path: '/api/cart',
            name: 'cart',  
            component: Carrinho
        }
    ]
})