/*jshint esversion: 6 */

const orm = require("../config/orm.js");

const burger = {

    selectAll: function(callback) {
        orm.selectAll("burgers", function(res) {
            callback(res);
        });
    },

    // The variables cols and vals are arrays.
    create: function(cols, vals, cb) {
        orm.create("burgers", cols, vals, function(res) {
            cb(res);
        });
    },

    update: function(objColVals, condition, callback) {
        orm.update("burgers", objColVals, condition, function(res) {
            callback(res);
        });
    },

    delete: function(condition, cb) {
        orm.delete("burgers", condition, function(res) {
            cb(res);
        });
    }

};

// Export the database functions for the controller.
module.exports = burger;