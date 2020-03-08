import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

/* create the vue instance, then render the App component in the element with id="app" */
new Vue({
  render: h => h(App),
}).$mount('#app')
