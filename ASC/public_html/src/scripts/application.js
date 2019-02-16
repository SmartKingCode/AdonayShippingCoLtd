
/*
 * 
 * @Import Script
 */


import '../stylesheets/styles.scss';
import Vue from 'vue';

import i18n from './messages';



Vue.config.productionTip = false;

new Vue({
    i18n,
    
}).$mount('#container');



  