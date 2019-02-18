import Vue from 'vue';
import VueI18n from 'vue-i18n';

Vue.use(VueI18n);

const messages = {
    'en': {
        home: 'Home',
        service: 'Services',
        about: 'About Us',
        contact: 'Contact Us'
       
    },
    'fr': {
       home: 'Acceuil',
       service: 'Services',
       about: 'A propos',
       contact: 'Contactez'
    }
};

const i18n = new VueI18n({
    locale: 'en', // set locale
    fallbackLocale: 'fr', // set fallback locale
    messages, // set locale messages
});

export default i18n;
