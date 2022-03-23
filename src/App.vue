<template>
  <div id="app">
    <v-app>
      <transactions />
    </v-app>
  </div>
</template>

<script>
import Transactions from "@/components/Transactions";

export default {
  name: 'App',
  components: {
    Transactions,
  },
  data() {
    return {
      //
    }
  },
  methods: {
    //
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0px auto;
  width: 80%;
}
</style>
