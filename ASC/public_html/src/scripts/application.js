
/*
 * 
 * @Import Script
 */


import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../stylesheets/styles.scss';

import '@fortawesome/fontawesome-free/js/all';

import Vue from 'vue';

import i18n from './messages';



Vue.config.productionTip = false;

new Vue({
    i18n,
    data: {
        selected: 1
      },
    methods: {
        active: function (){
            alert('Try event');
        },
        locale: function(locale){
           
           i18n.locale = locale;
        }
    }
    
}).$mount('#container');



  