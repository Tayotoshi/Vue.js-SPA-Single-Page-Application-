import {http} from './config'

export default{

    listar:() => {
        return http.get('product')
    },

    busca:() => {
        return http.get('cart')
    },

    salvar:(produto) => {
        return http.post('cart/add',produto)
    },

    delete:(produto) => {
        return http.delete('cart/remove/{sku}' ,produto)
    }


}