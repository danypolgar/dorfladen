<template>
  <div class="container">
    <div v-for="product of this.products" :key="product.id">
      <router-link :to="'/product-detail/' + product.id">
        <div class="product-card">
          <img class="product-image" alt="image" :src="require(`../assets/${product.imageName}`)">
          <p class="product-name">{{ product.productName }}</p>
          <p class="product-old-price"><s>{{ product.normalPrice.toFixed(2) }} CHF</s></p>
          <p class="product-new-price">{{ product.specialOffer.toFixed(2) }} CHF</p>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Transfer from '../mixins/transfer'

export default Vue.extend({
  mixins: [Transfer],
  name: "ProductList",
  data() {
    return {
      products: {},
    }
  },
  async mounted() {
    this.products = await Transfer.methods.getProducts();
  }
})
</script>

<style scoped>
.container {
  padding: 2px 16px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center
}

.product-image {
  width: 300px;
}

.product-old-price {
  color: red;
}

.product-card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  width: 300px;
  display: grid;
}
</style>