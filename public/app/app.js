define(function (require) {

    "use strict";

    var $           = require('jquery'),
        _           = require('underscore'),
        Backbone    = require('backbone'),
        moment      = require('moment'),
        async       = require('async'),
        Router      = require('router'),
        BaseView    = require('views/base-view'),
        tpl         = require('text!tpl/application.html'),
        template    = _.template(tpl);

    return Backbone.View.extend({

        events: {

        },

        initialize: function () {
            this.$el = $("#application");
            this.render();
            this.initListeners();
            this.router = new Router();
            Backbone.history.start();
        },

        render: function () {
            this.$el.html(template({}));
        },

        initListeners: function() {
            Backbone.Events.on("router:change", this._handleRouterChange, this);
        },

        _handleRouterChange: function(options) {
            this.subView && this.subView.remove();
            if(options.page == "base") {
                this.loadBaseView(options);
            } else {
                this.render();
            }
            console.log("router changed", options);
        },

        loadBaseView: function(options) {
            this.subView = new BaseView(options);
            this.$el.html( this.subView.el );
        }

    });


});