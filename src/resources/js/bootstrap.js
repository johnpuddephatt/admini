import Vue from 'vue'
import VueRouter from 'vue-router'
// import Buefy from 'buefy'
import Buefy from 'buefy/src/index.js'
import axios from 'axios'

Vue.use(Buefy, {
  // defaultDateFormatter: date => {
  //   console.log('formatter!');
  //   return new Date();
  // },
  // defaultDateParser: date => {
  //   console.log('parser!');
  //   return new Date();
  // },
  // defaultDatetimeCreator: date => {
  //   console.log('creator!');
  //   return new Date();
  // }
});
Vue.use(VueRouter)


// @todo move these filters into their own file

Vue.filter('date', function (value) {
  if (!value) return '';
  return new Date(value).toLocaleDateString();
})

Vue.filter('email', function (value) {
  if (!value) return '';
  return `<a href="mailto:${value}">${value}</a>`;
})

Vue.filter('check', function (value) {
  if (!value) return '';
  return `<span class="icon has-text-success"><i class="mdi mdi-account mdi-24px"></i></span>`;
})

// Vue.filter('lucky', function (value) {
//   if (value == 'Dejah Stracke') return `${ value } <span class="tag is-success">Lucky</span>`;
//   return `${ value }`;
// })

window.Vue = Vue;
window.axios = axios;

window.axios.defaults.headers.common = {
  'X-Requested-With' : 'XMLHttpRequest'
}
