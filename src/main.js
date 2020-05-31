import Vue from 'vue'
import vuetify from './plugins/vuetify'
import App from './App.vue'
import router from './router'
import VueResource from 'vue-resource'
import store from './store.js';
import $ from 'jquery';






Vue.config.productionTip = false
Vue.use(VueResource)

Vue.http.headers.common['Access-Control-Allow-Origin'] = '*'


new Vue({
  router,
  vuetify,
  VueResource,
  $,
  store,
  render: h => h(App)
}).$mount('#app')