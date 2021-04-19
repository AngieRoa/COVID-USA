import Vue from 'vue'
import App from './App.vue'
import store from './store'
import * as VueGoogleMaps from "vue2-google-maps"

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)

Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyAWckDiVeJbtVLyjvSnaN-zmmvR2OIR1pw",
  },
  installComponents: true
});

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
