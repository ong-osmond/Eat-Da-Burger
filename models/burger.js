/*jshint esversion: 6 */

const orm = require("../config/orm.js");

const burger = {

    selectAll: function(callback) {
        orm.selectAll("burgers", function(response) {
            callback(response);
        });
    },

    // The variables cols and vals are arrays.
    create: function(cols, vals, callback) {
        orm.create("burgers", cols, vals, function(response) {
            callback(response);
        });
    },

    update: function(objColVals, condition, callback) {
        orm.update("burgers", objColVals, condition, function(response) {
            callback(response);
        });
    },

    delete: function(condition, callback) {
        orm.delete("burgers", condition, function(response) {
            callback(response);
        });
    }

};

// Export the database functions for the controller.
module.exports = burger;