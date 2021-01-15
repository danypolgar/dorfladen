<template>
<div>
  <table>
    <thead>
    <tr>
      <th scope="col">Produkt</th>
      <th scope="col">Einzelpreis</th>
      <th scope="col">Anzahl</th>
      <th scope="col">Total</th>
    </tr>
    </thead>
    <CartItem></CartItem>
  </table>
  <button :disabled="this.total === 0">
    <router-link :disabled="this.total !== 0" :event="this.total !== 0 ? 'click' :''" to="/checkout">Zum Checkout</router-link>
  </button>
</div>
</template>

<script>
import Vue from "vue";
import CartItem from "@/components/CartItem";
import Transfer from '../mixins/transfer.ts'

export default Vue.extend({
  mixins: [Transfer],
  name: "CartDetail",
  components: {
    CartItem
  },
  data() {
    return{
      total: 0
    }
  },
  async mounted() {
    this.total = await Transfer.methods.sumCartItems(this.total)
  }

})
</script>

<style scoped>
table {
  margin-left: auto;
  margin-right: auto;
  table-layout: fixed;
  border-collapse: collapse;
  border: 3px solid orangered;
}
thead{
  background: orange;
}
thead th:nth-child(1) {
  width: 25%;
}

thead th:nth-child(2) {
  width: 25%;
}

thead th:nth-child(3) {
  width: 25%;
}

thead th:nth-child(4) {
  width: 25%;
}

</style>