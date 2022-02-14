<template>
  <div class="cur-wrapper">
    <div v-if="this.$store.state.myCurrency === 0">
      <h2>No currency added</h2>
    </div>

    <div v-else class="cur-list d-flex">
      <div v-for="(cur, idx) in this.$store.state.myCurrency" :key="idx" class="cur-card">
        <h2>{{ cur.name }}</h2>
        <h1>{{ cur.value }}</h1>
        <hr>
        <h6>{{ cur.addDate }}</h6>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ShowCurrency",
  data() {
    return {
      api: '38db08c6c20c307a4a035a2c8fa14002142f5175',
    }
  },
  computed: {
    // countValue() {
    //   this.$store.state.myCurrency =
    //     this.$store.state.myCurrency.map((elem,i) => {
    //       elem.inUsd = elem.value * this.$store.state.globalCurrency[i].price
    //     })
    // }
  }
}
</script>

<style scoped>
.cur-card {
  margin: 10px;
  padding: 10px;
  border: 1px solid lightpink;
  border-radius: 15px;
  flex-basis: 30%;
}
</style>