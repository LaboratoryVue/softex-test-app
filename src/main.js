import Vue from 'vue';
import App from './App.vue';
import store from './store';
import router from './router';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/animate.css/animate.css';
import './assets/global-styles.scss';

Vue.config.productionTip = false;

new Vue({
  store,
  router,
  render: h => h(App),
  created() {
    this.$store.dispatch('getPiclas');
  }
}).$mount('#app');
