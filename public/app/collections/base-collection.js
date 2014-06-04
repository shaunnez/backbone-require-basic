define(function (require) {

    "use strict";

    var $           = require('jquery'),
        Backbone    = require('backbone'),
        BaseModel   = require('models/base-model');

    return Backbone.Collection.extend({

        model: BaseModel,

        url: "/base",

        initialize: function() {

        }
    });

});
