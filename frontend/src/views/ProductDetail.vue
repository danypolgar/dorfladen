<template>
  <div v-if="product">
    <img class="product-image" alt="image" :src="require(`../assets/${product.imageName}`)">
    <p class="product-name">{{ product.productName }}</p>
    <p class="product-name">{{ product.description }}</p>
    <p class="product-old-price"><s>{{ product.normalPrice.toFixed(2) }} CHF</s></p>
    <p class="product-new-price">{{ product.specialOffer.toFixed(2) }} CHF</p>
    <input type="submit" value="Zum Warenkorb hinzufügen" @click="addToCart()">
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Transfer from '@/mixins/transfer.ts'

export default Vue.extend({
  props: ['productId'],
  mixins: [Transfer],
  name: "ProductDetail",
  data() {
    return {
      product: null,
    }
  },
  async mounted() {
    this.product = await Transfer.methods.getProductById(this.productId);
  },
  methods: {
     async addToCart() {
      await Transfer.methods.addToCart(this.productId);
       location.reload();
     }
  }
})
</script>

<style scoped>


.product-old-price {
  color: red;
}
</style>