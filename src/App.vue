<template>
  <div class="wrapper">
    <AddCurrency />
    <hr>
    <ShowCurrency />
  </div>
</template>

<script>

import AddCurrency from "@/components/AddCurrency";
import ShowCurrency from "@/components/ShowCurrency";

export default {
  name: 'App',
  components: {
    ShowCurrency,
    AddCurrency
  },
  data() {
    return {
      api: '38db08c6c20c307a4a035a2c8fa14002142f5175',
    }
  },
  mounted() {
    console.log(this.$store.state.globalCurrency)
    // fetch(`https://api.nomics.com/v1/currencies/ticker?key=${this.api}&ids=BTC,ETH,SOL&interval=1d,30d`)
    //     .then(response => response.json())
    //     .then(data => {
    //       data.forEach(elem => {
    //         this.$store.state.globalCurrency.push(elem)
    //       })
    //     })

    // console.log(this.$store.state.globalCurrency)
  }
}
</script>

<style>
body {
  background-color: black!important;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 60px auto 0px;
  max-width: 600px;
}
</style>
