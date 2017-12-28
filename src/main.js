// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import d3 from 'd3'
import echarts from 'echarts'
import Kgv from 'kgv'

Vue.config.productionTip = false

Vue.use(d3);
Vue.use(echarts);
Vue.use(Kgv);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
