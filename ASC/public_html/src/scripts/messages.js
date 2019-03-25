import Vue from 'vue';
import VueI18n from 'vue-i18n';

Vue.use(VueI18n);

const messages = {
    
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
       caption33: 'qui embarque à bord des navires étrangers',
       block1: 'Nos Services',
       block2: 'A propos ',
       block3: 'Contactez Nous',
       block4: 'Choisissez Nous',
       serviceName1: 'REPRESENTATION D\' ARMATEURS',
       serviceName2: 'CHANGEMENT D\'EQUIPE',
       serviceName3: 'FOURNISSEURS DE PROVISION',
       serviceName4: 'PIECES DE RECHANGE',
       serviceName5:'AGENCE D\'EQUIPAGE' ,

       serviceDesc1: 'Representation des proprietaires de navires pour l\' obtention des documents officiels necessaires dans l\'execution de leurs activites. ',
       serviceDesc2: 'Execution des operations de transbordement a bords des navires dans les eaux territoriales.  ',
       serviceDesc3: 'Avitaillement en eaux et provisions des navires dans le port et en rade.',
       serviceDesc4: 'Formalité pour le retrait des pièces de rechanges des navires en mer et livraison.',
       serviceDesc5: 'Préparation et mise en route des marins qui embarque à bord des navires étrangers. ',
       bietc: 'Nous couvrons le Nigeria, le Benin, le Togo pour toute expedition de toute marchandises en direction de libreville GABON. ',
          whyChooseUs: `Classer parmi les meilleurs au TOGO;
    Notre compagnie travaille dans le secteur maritime depuis plus de <span class="font-weight-bold h2 colordark"> 12 ans</span>
     et est membre d'un groupe d'entreprise fournissant des services dans l' hotelerie, la boucherie, la location de grand engins.`,
     whyProject: 'Projets',
     whyCollab: 'Collaborateurs',
     whyClient: 'Clients',
     
     aboutDescription : `      <span class="font-weight-bold h5"> Adonay Shipping Co. Ltd</span>  est une compagnie creer par un des meilleurs expert martime au TOGO ,
        bien connue par l'administration  maritime national, est s'est fixer pour mission de reduire la complexite des operations maritime et des procedures pour l'obtention
         des documents legales autorisant les diverses activites.`,
         aboutAssociate: 'Nous travaillons avec des collaborateurs qui rendent nos services les plus frequent rapide, sur, et a un prix concurentiels.',
         aboutWorldwide: 'Nos contacts d\'outre mer permettent la delocalisation de nos services, nous permettant d \' operer a une tres grande echelle.',
         aboutExpert: 'Notre equipe est constituer d\'experts dans leur domaines avec des certificats acccreditees pour les operations dans le port national.'
     ,
     abtAss: 'ASSOCIÉS',
     abtWor: 'MONDIALE',
     abtEx: 'EXPERTS',
     contactText: 'Ecrivez nous:',
     formName:'Nom',
     formMail:'Email',
     formSuj:'Sujet',
     formMsg:'Message',
     formBtn:'Envoyer',
     contactLieu: 'Totsi, Angle Rue HAAC derriere Pharmacie la nation',
     errorAlert: 'Echec d\'envoie du message !',
     successAlert: 'Message envoyez !'
     
        
    }
    ,
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
        caption33: 'who embarks on board foreign ships',
        block1: 'Our Services',
        block2: 'About Us',
        block3: 'Contact Us',
        block4: 'Why Choose Us',
        serviceName1: 'OWNER REPRESENTATIVE',
        serviceName2: 'CREW CHANGE',
        serviceName3: 'PROVISION SUPPLY',
        serviceName4: 'SPARES PART CLEARANCE',
        serviceName5: 'CREWING AGENCY',
        bietc: 'We cover Nigeria, Benin, Togo for any shipment of any goods to Libreville GABON. ',
        serviceDesc1: `Representation of shipowners in obtaining official documents necessary for the performance of their activities. `,
        serviceDesc2: ' Execution of transhipment operations on board ships in territorial waters.',
        serviceDesc3: ' Provision of water and provisions for ships in the harbor and harbor.',
        serviceDesc4: 'Formality for the withdrawal of spare parts from ships at sea and delivery.',
        serviceDesc5: ' Preparation and start-up of seafarers embarking on board foreign ships.',
        whyChooseUs: `Ranked among the best in TOGO;
        Our company has been working in the marine sector for over<span class="font-weight-bold h2 colordark"> 12 years</span>
         and is a member of a group of companies  providing services  in the hotel, the butcher shop, the renting of big machines.`,
         whyProject: 'Projects',
         whyCollab: 'Collaborators',
         whyClient: 'Clients',
         aboutDescription: `
        <span class="font-weight-bold h5"> Adonay Shipping Co. Ltd</span> is a company created by one of the best martial expert in TOGO,
                 well known by the national maritime administration, is to set itself   the task of reducing the complexity of  maritime operations and procedures for obtaining
                  legal documents authorizing various activities.`,
             aboutAssociate: 'We work with collaborators that make our most frequent services, fast, reliable and at concurential price.',
             aboutWorldwide: 'Our Outseas contacts serve for service delocalization, that make us operates on high level of range.',
             aboutExpert: 'Our team are experts in their field with accredited certificates to operates in the national port.',
            abtAss: 'ASSOCIATES',
            abtWor: 'WORLDWIDE',
            abtEx: 'EXPERTS',
             contactText: 'Write to us:',
             formName:'Name',
             formMail:'Email',
             formSuj:'Subject',
             formMsg:'Messages',
             formBtn:'Submit',           
          contactLieu: 'Totsi, Angle Street HAAC behind Pharmacy nation',
          errorAlert: 'Error sending message !',
          successAlert: 'Message well sent !'
         
       
    }
};

const i18n = new VueI18n({
    locale: 'en', // set locale
    fallbackLocale: 'fr', // set fallback locale
    messages, // set locale messages
});

export default i18n;
