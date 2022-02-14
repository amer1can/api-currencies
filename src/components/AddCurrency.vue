<template>
  <div class="add-cur-wrap">
    <div class="d-flex">
      <input class="form-control mx-1" type="text" placeholder="Currency" v-model="cur">
      <input class="form-control mx-1" type="text" placeholder="Value" v-model="val">
    </div>
    <button class="btn btn-dark mt-2 w-100" @click="addCurrency">Add currency</button>
  </div>
</template>



<script>
export default {
  name: "AddCurrency",
  data() {
    return {
      api: '38db08c6c20c307a4a035a2c8fa14002142f5175',
      cur: '',
      val: '',
    }
  },
  methods: {
    addCurrency() {
      console.log(process.env.API_KEY)
      const date = new Date();
      const year = date.getFullYear()
      const month = date.getMonth() + 1
      const day = date.getDay()
      const data = {
        name: this.cur.toUpperCase(),
        value: this.val.toUpperCase(),
        addDate: year + ' / ' + month + ' / ' + day,
        inUsd: 0,
      }
      this.$store.commit('addCurrency', data)
      this.$store.commit('addGlobalCurrency', this.cur)
      this.cur = ''
      this.val = ''
      console.log(this.$store.state.globalCurrency)
    },
  }
}
</script>

<style scoped>
.add-cur-wrap {
  max-width: 200px;
}
</style>