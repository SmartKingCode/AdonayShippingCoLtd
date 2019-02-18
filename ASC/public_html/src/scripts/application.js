
/*
 * 
 * @Import Script
 */


import '../stylesheets/styles.scss';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/js/all';

import Vue from 'vue';

import i18n from './messages';



Vue.config.productionTip = false;

new Vue({
    i18n,
    
}).$mount('#container');



  