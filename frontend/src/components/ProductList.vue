<template>
<!--<div class="product-card">
  <div v-for="product in products" :key="product.id">
    <img alt="image" src="../assets/{{product.image}}.jpg">
    <div class="container">
      <p class="product-name">{{product.name}}</p>
      <p class="product-new-price">{{product.price}}</p>
      <p class="product-old-price">{{product.discount}}</p>
    </div>
    <p>{{products}}</p>
  </div>
</div>-->
  <p>{{products}}</p>
</template>

<script>

import axios from "axios";

export default {
  name: "ProductList",
  data() {
    return {
      products: null
    }
  },
  mounted() {
    axios
        .get('http://localhost:3000/api/product/getProducts')
        .then(response => (this.products = response)).then(() => console.log(this.products.data[0].description))

  }
}
</script>

<style scoped>

</style>