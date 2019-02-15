 
 /*
  * SYSTEMJS Configuration File
  * 
  * 1-set base url
  * 2-map path to plugins
  */
SystemJS.config({
        baseURL: '/dist/scripts/',
    map: {
        'jquery':'/node_modules/jquery/dist/jquery.min.js',
        'plugin-traceur': '/node_modules/systemjs-plugin-traceur/plugin-traceur.js',
        'traceur': '/node_modules/traceur/bin/traceur.js',
        'traceur-runtime': '/node_modules/traceur/bin/traceur-runtime.js',
        'vue': '/node_modules/vue/dist/vue.common.js',
        'vue-i18n': '/node_modules/vue-i18n/dist/vue-i18n.js'
    },
    meta: {
        'traceur': {
            format: 'global',
            exports: 'traceur',
            scriptLoad: false
        },
        'traceur-runtime': {
            format: 'global',
            exports: '$traceurRuntime'
        }
    },
    transpiler: 'plugin-traceur',
    transpilerRuntime: false
});

   System.import("application.js");