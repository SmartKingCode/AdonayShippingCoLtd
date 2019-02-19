import Vue from 'vue';
import VueI18n from 'vue-i18n';

Vue.use(VueI18n);

const messages = {
    'en': {
        home: 'Home',
        service: 'Services',
        about: 'About Us',
        contact: 'Contact Us',
        caption11:'is a company of ,',
        caption12: 'consignment in the maritime sector .',
        caption13: 'It is ranked among the best in TOGO'
       
    },
    'fr': {
       home: 'Acceuil',
       service: 'Services',
       about: 'A propos',
       contact: 'Contactez',
       caption11:'est une entreprise de , ',
       caption12: 'consignation dans le secteur maritime .',
       caption13: 'Elle est classée parmi les meilleurs au TOGO'
        
    }
};

const i18n = new VueI18n({
    locale: 'en', // set locale
    fallbackLocale: 'fr', // set fallback locale
    messages, // set locale messages
});

export default i18n;
