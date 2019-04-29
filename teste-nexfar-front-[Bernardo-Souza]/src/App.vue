<template>
  <div class="eae">
    <router-view/>
  </div>
</template>

<script>
import Loja from './components/Loja.vue'
import products from './services/produtos'

export default {
  name: 'app',
  components: {
    Loja
  },
}


</script>

<style>


</style>
