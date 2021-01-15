<template>
  <div>
    <form
        id="checkout"
        @submit="checkForm">

      <p>
        <label for="firstName">Vorname</label>
        <input
            id="firstName"
            v-model="firstName"
            type="text"
            name="firstName"
        >
      </p>

      <p>
        <label for="lastName">Nachname</label>
        <input
            id="lastName"
            v-model="lastName"
            type="text"
            name="lastName"
            min="0"
        >
      </p>

      <p>
        <label for="email">Email</label>
        <input
            id="email"
            v-model="email"
            type="email"
            name="email"
        >
      </p>


      <p>
        <input
            type="submit"
            value="Checkout"
        >
      </p>

      <div v-if="errors.length">
        <b>Bitte verbessere die Fehler(n):</b>
        <ul>
          <li v-for="(error, index) in errors" :key="index">{{ error }}</li>
        </ul>
      </div>

    </form>
  </div>
</template>

<script>
import Transfer from '../mixins/transfer.ts'

export default {
  mixins: [Transfer],
  name: "Checkout",
  data() {
    return {
      errors: [],
      firstName: "",
      lastName: "",
      email: ""
    }
  },

  methods: {
    checkForm: async function (e) {
      if (this.firstName.trim() && this.lastName.trim() && this.email.trim()) {
        e.preventDefault();
        await Transfer.methods.deleteCart();
        await this.$router.push("/finish");
        return true;
      }

      this.errors = [];

      if (!this.firstName.trim()) {
        this.errors.push('Bitte geben sie eine Vorname an.');
      }
      if (!this.lastName.trim()) {
        this.errors.push('Bitte geben sie eine Nachname an.');
      }
      if (!this.email.trim()) {
        this.errors.push('Bitte geben sie eine valide Email an.');
      }
      e.preventDefault();

    },

  }
}
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

button {
  align-self: center;
  width: 100px;
}
</style>