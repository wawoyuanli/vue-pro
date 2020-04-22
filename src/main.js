import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import { Grid, GridItem } from 'vant';

Vue.config.productionTip = false
Vue.use(Grid,GridItem);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
