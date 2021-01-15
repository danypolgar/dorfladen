<template>
<div>
  <h1>Vielen Dank für die Einkauf!</h1>
</div>
</template>

<script lang="ts">

import Vue from "vue";

export default Vue.extend({
  name: "Finish",
  mounted() {
    if (localStorage.getItem('reloaded')) {
      localStorage.removeItem('reloaded');
    } else {
      localStorage.setItem('reloaded', '1');
      location.reload();
    }
  }
  })

</script>

<style scoped>

</style>