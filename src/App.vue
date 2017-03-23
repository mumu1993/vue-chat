<template>
  <div id="app">
    <div class="sidebar"></div>
    <div class="main"></div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style lang="less">
#app{
  margin: 40px auto;
  width: 800px;
  height: 600px;
}
</style>
