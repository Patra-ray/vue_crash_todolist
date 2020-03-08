<!-- template for the HelloWorld component, what we are going to output in #app -->
<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>   <!-- msg prop created-->
  </div>
</template>

<!-- HelloWord component, imported in -->
<script>
import HelloWorld from './components/HelloWorld.vue'

export default {  /* this is an object which is available outside of this file */
  name: 'App',  /* It's called App */
  components: { /* In components we list the embedded objects */
    HelloWorld  /* this is an embedded object */
  }
}
</script>

<!-- style for HelloWorld component, here it is global to the application-->
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
