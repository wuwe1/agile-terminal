import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false

const Web3 = require('web3')
const web3 = new Web3(new Web3.providers.HttpProvider(`https://mainnet.infura.io/v3/${process.env.VUE_APP_INFURA_PROJECT_ID}`))

Vue.prototype.$web3 = web3

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
