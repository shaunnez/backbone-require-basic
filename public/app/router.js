define(function (require) {

    "use strict";

    var Backbone = require('backbone')

    return Backbone.Router.extend({

        routes: {
            'base' : 'base',
            '*actions' : 'defaultAction'
        },

        base: function() {
            Backbone.Events.trigger("router:change", { page : "base" });
        },

        defaultAction: function() {
            Backbone.Events.trigger("router:change", { page : "default" });
        }

    })
});