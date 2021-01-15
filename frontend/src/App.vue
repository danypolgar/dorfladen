<template>
  <div id="app">
    <h1>Dorfladen</h1>
    <button><router-link to="/">Home</router-link>
    </button>
    <button>
      <router-link to="/cart-detail">Korb: {{this.total}} </router-link>
    </button>
    <router-view/>
  </div>
</template>

<script>
import Transfer from './mixins/transfer.ts'
import Vue from "vue";

export default Vue.extend({
  mixins: [Transfer],
  name: "ProductList",
  data() {
    return {
      total: 0
    }
  },
  async mounted() {
    this.total = await Transfer.methods.sumCartItems(this.total)

  }
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
a {
  text-decoration: none;
  color:black;
}

button {
  margin: 30px;
}

</style>
