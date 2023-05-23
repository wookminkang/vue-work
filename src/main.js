import Vue from 'vue'
import App from './App.vue'
import router from './router'
import '@/assets/scss/import.scss'
import PerfectScrollbar from 'vue2-perfect-scrollbar'
import 'vue2-perfect-scrollbar/dist/vue2-perfect-scrollbar.css'

Vue.config.productionTip = false
Vue.use(PerfectScrollbar)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
