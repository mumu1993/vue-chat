import App from './App.vue'
import Vue from 'vue'
import store from './store'

Vue.config.devtools = true;

new Vue({
  el: '#app',
  render: h => h(App),
  store: store
})
