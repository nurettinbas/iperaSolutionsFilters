import Vue from 'vue';
import App from './App.vue';

require('bootstrap');
require('select2');
// require('daterangepicker');
// require('../node_modules/daterangepicker/daterangepicker.css');
require('bootstrap-daterangepicker');
require('../node_modules/bootstrap-daterangepicker/daterangepicker.css');
require('../node_modules/bootstrap/dist/css/bootstrap.css');
require('../node_modules/select2/dist/css/select2.css');
require('../node_modules/@ttskch/select2-bootstrap4-theme/dist/select2-bootstrap4.css');
var _ = require('lodash');
window.axios = require('axios');
window.$ = window.jQuery = require('jquery');

new Vue({
  el: '#app',
  render: h => h(App),
})
