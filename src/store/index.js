import { createStore } from 'vuex'

export default createStore({
  state: {
    globalCurrency: [],
    myCurrency: []
  },
  mutations: {
    addCurrency(state, data) {
      this.state.myCurrency.push(data)
    },
    addGlobalCurrency(state, name) {
      const api = '38db08c6c20c307a4a035a2c8fa14002142f5175'
      fetch(`https://api.nomics.com/v1/currencies/ticker?key=${api}&ids=${name}&interval=1d,30d`)
          .then(response => response.json())
          .then(data => {
            this.state.globalCurrency.push(data[0])
          })
    }
  },
  actions: {
    async addAsyncGlobCur (commit, name) {
      commit('addGlobalCurrency', name)
    }
  },

  modules: {
  }
})
//https://realadmin.ru/coding/vuex-general.html