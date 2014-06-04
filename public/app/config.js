require.config({
    //urlArgs: 'bust=' + new Date().getTime(),
    paths: {
        jquery: '../js/jquery',
        moment: '../js/moment',
        async: '../js/async',
        backbone: '../js/backbone',
        underscore: '../js/underscore',
        text: '../js/text',
        collections: 'collections',
        models: 'models',
        views: 'views',
        tpl: 'templates'
    },
    shim: {
        'async': {
            exports: 'async'
        },
        'underscore': {
            exports: '_'
        },
        'backbone': {
            deps: ['underscore', 'jquery'],
            exports : 'backbone'
        },
        'app': {
            deps: ['backbone'],
            exports: 'app'
        }
    }
});

require([ 'app'], function(App){
    application = new App();
});
