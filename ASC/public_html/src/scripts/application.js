
/*
 * 
 * @Import Script
 */

import $ from 'jquery';
window.jQuery = $;
window.$ = $;
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css/animate.min.css';
import '../stylesheets/styles.scss';

import '@fortawesome/fontawesome-free/js/all';

import Vue from 'vue';
import loadMap from 'load-google-maps-api';
import MenuSpy from 'menuspy';

import i18n from './messages';
import ScrollSpy from './vanillajs-scrollspy.min';





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
        selectedItem: function(value){
          this.selected =value;
          $('.collapse').removeClass('show');
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




    let elm = document.querySelector('#page-head');
 
    let ms = new MenuSpy(elm);

   
    
    const navbar = document.querySelector('.navbar');
    const scrollspy = new ScrollSpy(navbar);
    scrollspy.init();
/*
    On Scroll Counter Animation 
*/
let dumbVar = 0;
$(window).scroll(function () {
  console.log('scroll');
  var oTop = $('#why-choose-us').offset().top - window.innerHeight;

  if (dumbVar == 0 && $(window).scrollTop() > oTop) {
    $('.counter-value').each(function () {
      var $this = $(this),
        countTo = $this.attr('data-count');
      $({
        countNum: $this.text()
      }).animate({
        countNum: countTo
      },

        {

          duration: 4000,
          easing: 'swing',
          step: function () {
            $this.text(Math.floor(this.countNum));
          },
          complete: function () {
            $this.text(this.countNum);
            //alert('finished');
          }

        });
    });
    dumbVar = 1;
  }

});

// declare variable
var scrollTop = $(".scrollTop");

$(window).scroll(function() {
  // declare variable
  var topPos = $(this).scrollTop();

  // if user scrolls down - show scroll to top button
  if (topPos > 700) {
    $(scrollTop).css("opacity", "1");

  } else {
    $(scrollTop).css("opacity", "0");
  }

}); // scroll END

//Click event to scroll to top
$(scrollTop).click(function() {
  $('html, body').animate({
    scrollTop: 0
  }, 800);
  return false;

}); // click() scroll top EMD
