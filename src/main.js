import Vue from 'vue'
import Login from './components/Login.vue'

Vue.config.productionTip = false

new Vue({
  render: function (h) { return h(Login) },
}).$mount('#login')
