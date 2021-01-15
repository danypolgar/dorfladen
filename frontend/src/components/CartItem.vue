<template>

  <tbody>
  <tr v-for="item in items" :key="item.product.id">
    <td>{{ item.product.productName }}</td>
    <td>{{ item.product.specialOffer.toFixed(2) }}</td>
    <td>
      <button @click="changeCount(item.product.id, '-')">-</button>
      {{ item.count }}
      <button @click="changeCount(item.product.id, '+')">+</button>
    </td>
    <td>{{ (item.count * item.product.specialOffer).toFixed(2) }}</td>
  </tr>
  <tr v-if="this.items.length > 0">
    <td></td>
    <td></td>
    <td></td>
    <th>
      Total: {{this.total.toFixed(2)}}
    </th>
  </tr>
  </tbody>

</template>

<script lang="ts">
import Vue from "vue";
import Transfer from '@/mixins/transfer.ts';
declare interface ProductDto {
  id: string;
  productName: string;
  specialOffer: number;
  normalPrice: number;
  imageName: string;
  description: string;
}

declare interface ItemDto {
  product: ProductDto;
  count: number;
}

export default Vue.extend({
  mixins: [Transfer],
  name: "CartItem",
  data() {
    return {
      items: {} as ItemDto[],
      total: 0,
    }
  },
  async mounted() {
    this.items = await Transfer.methods.getCartProducts();
    for (let item of this.items){
      this.total += item.count * item.product.specialOffer
    }
  },
  methods: {
    async changeCount(id: string, direction: string){
      await Transfer.methods.changeProductCount(id, direction);
      location.reload();
    }
  }
})
</script>

<style scoped>
td {
  padding: -5px;
}
</style>