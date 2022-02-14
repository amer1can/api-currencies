<template>
  <div class="cur-wrapper">
    <div v-if="this.$store.state.myCurrency === 0">
      <h2>No currency added</h2>
    </div>

    <div v-else class="cur-list d-flex">
      <div v-for="(cur, idx) in this.$store.state.myCurrency" :key="idx" class="cur-card">
        <CurCard :currency="cur" />
      </div>
    </div>
  </div>
</template>

<script>
import CurCard from "@/components/CurCard";
export default {
  name: "ShowCurrency",
  components: {CurCard},
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