import Vue from 'vue';
import VueI18n from 'vue-i18n';

Vue.use(VueI18n);

const messages = {
    'en': {
        home: 'Home',
        service: 'Services',
        about: 'About Us',
        contact: 'Contact Us',
        read: 'Read more',
        caption11:'is a company of ,',
        caption12: 'consignment in the maritime sector .',
        caption13: 'It is ranked among the best in TOGO',
        caption21: 'offers of services,',
        caption22: 'refueling in water and provisions',
        caption23: 'ships in the port and in the port of Lome',
        caption31: 'supports ,',
        caption32: 'the preparation and start-up of seafarers',
        caption33: 'who embarks on board foreign ships'
       
    },
    'fr': {
       home: 'Acceuil',
       service: 'Services',
       about: 'A propos',
       contact: 'Contactez',
       read: 'Lire plus',
       caption11:'est une entreprise de , ',
       caption12: 'consignation dans le secteur maritime .',
       caption13: 'Elle est classée parmi les meilleurs au TOGO',
       caption21: 'offres des services,',
       caption22: `d'avitaillement en eaux et provisions`,
       caption23: ' des navires dans le port et en rade au Port Autonome de Lomé',
       caption31: 'prend en charge ,',
       caption32: ' la préparation  et mise en route des marins',
       caption33: 'qui embarque à bord des navires étrangers'
        
    }
};

const i18n = new VueI18n({
    locale: 'en', // set locale
    fallbackLocale: 'fr', // set fallback locale
    messages, // set locale messages
});

export default i18n;
