<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <router-view />
  </div>
</template>

<script>
  // import { mapState } from 'vuex'

  export default {
    name: 'App',
  }
</script>

<style>
  @import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro');
  @import url('https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css');

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body, html { 
    font-family: 'Source Sans Pro', sans-serif;
  }

  #app {
    min-width: 360px;
  }
</style>
