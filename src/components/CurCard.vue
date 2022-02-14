<template>
  <h2>{{ currency.name }}</h2>
  <h1>{{ currency.value }}</h1>
  <hr>
  <h6>{{ currency.addDate }}</h6>
  <h6>{{ multiple }}</h6>
</template>

<script>
export default {
  name: "CurCard",
  props: ['currency'],
  data() {
    return {
    }
  },
  computed: {
    multiple() {
      if (this.currency) {
        let findEl = this.$store.state.globalCurrency.find(elem => elem.currency === this.currency.name)
        return findEl.price * this.currency.value
      } else return 1

    }
  }
}
</script>

<style scoped>

</style>