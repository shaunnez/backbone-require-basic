define(function (require) {

    "use strict";

    var $           = require('jquery'),
        _           = require('underscore'),
        Backbone    = require('backbone'),
        tpl         = require('text!tpl/base.html'),
        template    = _.template(tpl);

    return Backbone.View.extend({

        initialize: function(options) {
            this.render();
            this.initListeners();
        },

        render: function() {
            this.$el.html(template({}));
        },

        initListeners: function() {

        }

    });

});
