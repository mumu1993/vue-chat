<style lang="less">

</style>

<template>
  <div class="card">
    <header>
      <img src="" alt="">
      <p></p>
    </header>
    <footer>
      <input type="text">
    </footer>
  </div>
</template>

<script>
  import {actions} from '../store';
  export default {
    name: 'card',
    vuex: {
      actions: actions,
      getters: {
        user: ({user}) => user,
        filterKey: ({ filterKey }) => filterKey
      }
    },
    methods: {
      onKeyup (e) {
        this.search(e.target.value)
      }
    }
  }
</script>