import Vue from 'vue';
import { BootstrapVue } from 'bootstrap-vue';
import App from './App.vue';
import router from './router';
import store from './store';
import { createProvider } from './vue-apollo';

Vue.config.productionTip = false;

Vue.use(BootstrapVue);

new Vue({
  router,
  store,
  apolloProvider: createProvider(),
  render: h => h(App),
}).$mount('#app');
