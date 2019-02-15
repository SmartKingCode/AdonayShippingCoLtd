
/*
 * 
 * @Import Script
 */
import Vue from 'vue';
import i18n from './messages';
import '../stylesheets/styles.scss';

Vue.config.productionTip = false;

new Vue({
    i18n,
}).$mount('#container');

  