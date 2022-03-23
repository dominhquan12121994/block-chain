<template>
  <div id="app">
    <transactions />
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
      currentCity: {
        id: null,
        code: '',
        name: '',
      },
      listCity: [
        {
          id: 1,
          code: 'HN',
          name: 'Hà Nội'
        },
        {
          id: 2,
          code: 'ĐN',
          name: 'Đà Nẵng'
        },
        {
          id: 3,
          code: 'HCM',
          name: 'Hồ Chí Minh'
        },
      ]
    }
  },
  methods: {
    setCurrentCity(city) {
      this.currentCity = {
        id: city.id,
        code: city.code,
        name: city.name
      }
    },
    updateListCity(indexCity) {
      this.listCity.splice(indexCity, 1);
    }
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
.current-city {
  border: 2px solid red;
}
</style>
