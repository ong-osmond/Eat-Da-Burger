/*jshint esversion: 6 */

const express = require("express");
const burger = require("../models/burger.js");

const router = express.Router();

// Create all our routes and set up logic within those routes where required.

// Get all burgers
router.get("/burgers", function(request, response) {
    burger.selectAll(function(data) {
        response.render("index", { burgers: data });
    });
});

// Add a burger defaulted to devoured = false
router.post("/api/burgers", function(request, response) {
    burger.create([
        "burger_name", "devoured"
    ], [
        request.body.name, false
    ], function(result) {
        // Send back the ID of the new burger
        response.json({ id: result.insertId });
    });
});

// Update the burger devoured status
router.put("/api/burgers/:id", function(request, response) {
    let condition = "id = " + request.params.id;
    console.log("condition", condition);
    burger.update({
            devoured: request.body.devoured
        },
        condition,
        function(result) {
            if (result.changedRows === 0) {
                // If no rows were changed, then the ID must not exist, so 404
                return response.status(404).end();
            }
            response.status(200).end();

        }
    );
});

// Delete a burger
router.delete("/api/burgers/:id", function(request, response) {
    let condition = "id = " + request.params.id;
    burger.delete(condition, function(result) {
        if (result.affectedRows == 0) {
            // If no rows were changed, then the ID must not exist, so 404
            return response.status(404).end();
        } else {
            response.status(200).end();
        }
    });
});

// Route to home page if user does not enter an endpoint
router.get("*", function(request, response) {
    response.redirect('/burgers');
});

module.exports = router;