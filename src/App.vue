<template>
  <div id="app">
    <div class="sidebar">
      <card></card>
    </div>
    <div class="main"></div>
  </div>
</template>

<script>
import { actions } from './store';

import card from './components/card.vue';

export default {
  components: { card },
  name: 'app',
  vuex: {
    actions: actions
  },
  created() {
    this.initData();
  },
  data() {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style lang="less">
#app {
  margin: 40px auto;
  width: 800px;
  height: 600px;
}
</style>
