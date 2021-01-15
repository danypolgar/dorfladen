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
  <button>
    <router-link to="/checkout">Zum Checkout</router-link>
  </button>
</div>
</template>

<script>
import Vue from "vue";
import CartItem from "@/components/CartItem";

export default Vue.extend({
  name: "CartDetail",
  components: {
    CartItem
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