define(function (require) {

    "use strict";

    var Backbone = require('backbone')

    return Backbone.Router.extend({

        routes: {
            'base' : 'base',
            '*actions' : 'defaultAction'
        },

        base: function() {
            BackboneEvt.trigger("router:change", { page : "base" });
        },

        defaultAction: function() {
            BackboneEvt.trigger("router:change", { page : "default" });
        }

    })
});