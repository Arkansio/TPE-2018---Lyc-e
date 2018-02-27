<template lang="pug">
  div(id="app")
    navbar
    router-view

</template>

<script>
import navbar from './components/navbar'

export default {
  name: 'App',
  components: {
    navbar
  }
}
</script>

<style>
#app {
  font-family: GillSans, Calibri, Trebuchet, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.brand-logo {
  margin-left: 20px;
}
</style>
