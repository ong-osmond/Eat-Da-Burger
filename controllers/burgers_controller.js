const express = require("express");
const burger = require("../models/burger.js");

const router = express.Router();

// Create all our routes and set up logic within those routes where required.
router.get("/burgers", function(request, response) {
    burger.selectAll(function(data) {
        response.render("index", { burgers: data });
    });
});

module.exports = router;