
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

/*
  Instanciation of Vue Object  
*/

export let view = new Vue({
    i18n,
    data: {
        selected: 1,
        user_name:'',
        user_mail:'',
        show:false,
        text:'',
        errors:[]
      },
    methods: {
        checkForm: function (e){
          e.preventDefault();
          let parameters = new Map();
          parameters.set("en_error1",'The name is required, and must contain between 3 and 7 characters.');
          parameters.set("en_error2", 'Your mail address is required and must be valid Ex: example@mail.com');
          parameters.set("en_error3", 'The message must contain between 7 and 50 characters.');
          parameters.set("fr_error1",'Le nom est requis, et doit contenir entre 3 et 7 characteres.');
          parameters.set("fr_error2",'Votre addresse mail est requises et doit etre valide Ex: example@mail.com.');
          parameters.set("fr_error3",'Le message doit contenir entre 7 et 50 characteres.');
          this.errors = [];
          let lang = i18n.locale;
          let content;
          if (!this.user_name || this.validName(this.user_name)) {
            content = parameters.get(lang+'_error1');
            this.errors.push(content);
          }
        
          
          if (!this.user_mail || !this.validEmail(this.user_mail)) {
            content= parameters.get(lang+'_error2');
            this.errors.push(content);
          }


       
          if (!this.text ) {
            content = parameters.get(lang+'_error3');
            this.errors.push(content);
          }
          else if(this.validMsg(this.text)){
            content = parameters.get(lang+'_error3');
            this.errors.push(content);
          }

         

         
         if(this.errors.length == 0){
           this.sendData();
         }
            
        },
        sendData: function(){
   
           $.ajax({
             url: 'http://adonayshippingcoltd.tk/send-email',
             type: 'POST',
             data:$('#contact-form').serializeArray(),
             success: function(){
              
                  $('#contact-form input, #contact-form textarea').val("");
                 $('.alert.alert-success').removeClass("d-none");
             },
             error: function(){
              $('.alert.alert-danger').removeClass("d-none");
             }
            
           });
        
        
        },
        validEmail: function (email) {
          let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return re.test(email);
        },
        validName: function (name) {
            let res;

          
            if(name.length< 3 || name.length >7){
           res= true;
            }else{
              res= false;
            }
           
          return res;
        },
        validMsg: function (name) {
          let resu;

        
          if(name.length< 3 || name.length >50){
         resu= true;
          }else{
            resu= false;
          }
         
        return resu;
      },
        selectedItem: function(value){

          this.selected =value;
          $('.collapse').removeClass('show');
        },
        locale: function(locale){
           
           i18n.locale = locale;
           this.errors=[];
           $('form input, form textarea').val("");
        },
        navigate: function(value){
          $('html, body').animate({
            scrollTop: value
          }, 800);
          return false;
        }
    }
    
}).$mount('#container');


  /*

      Implementation of Google Maps
  */

    loadMap().then( function(googleMaps){
    let map =  new google.maps.Map(document.getElementById('map'), {
     
        center: {lat: 6.1922583, lng: 1.1910253},
        zoom: 12,
        key: "AIzaSyAH780HlPY6aFgaHlPgZ_9CD6XOnumZN8o"
      })
      let marker = new google.maps.Marker({
        position: {lat: 6.1922583, lng: 1.1910253},
        map: map
      });
    }).catch(function(error){
      console.error(error)
    })


/*
    Meny And Scroll Spy Implementation
*/

    let element = document.querySelector('#page-head');
    let menuSpy = new MenuSpy(element);
    
    const navBar = document.querySelector('.navbar');
    const scrollspy = new ScrollSpy(navBar);
    scrollspy.init();


  
/*
    On Scroll Counter Animation 
*/
let dumbVar = 0;
$(window).scroll(function () {
 
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
           
          }

        });
    });
    dumbVar = 1;
  }

});

/*
    Implementation of scrollTop animation
*/
var scrollTop = $(".scrollTop");

$(window).scroll(function() {
  
  var  topPos = $(this).scrollTop();

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



 

