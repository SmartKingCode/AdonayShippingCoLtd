
/*
 * 
 * @Import Script
 */


import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css/animate.min.css';
import '../stylesheets/styles.scss';

import '@fortawesome/fontawesome-free/js/all';

import Vue from 'vue';
import loadMap from 'load-google-maps-api';

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



    loadMap().then( function(googleMaps){
      new google.maps.Map(document.getElementById('map'), {
     
        center: {lat: -25.344, lng: 131.036},
        zoom: 4,
        key: "AIzaSyAH780HlPY6aFgaHlPgZ_9CD6XOnumZN8o"
      })
    }).catch(function(error){
      console.error(error)
    })




  