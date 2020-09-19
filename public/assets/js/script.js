/*jshint esversion: 6 */

// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {

    // Moving the burgers across the two columns
    $(".change-devoured").on("click", function(event) {
        let id = $(this).data("id");
        let newDevoured = !($(this).data("devoured"));
        let newDevouredState = {
            devoured: newDevoured
        };
        // Send the PUT request.
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newDevouredState
        }).then(
            function() {
                console.log("changed devoured state to", newDevoured);
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });

    // Add a burger
    $(".create-form").on("submit", function(event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        let newBurger = {
            name: $("#ca").val().trim()
        };
<<<<<<< HEAD
        if (newBurger.name == "") {
            alert("Please enter a burger name!");
        } else {
            // Send the POST request.
            $.ajax("/api/burgers", {
                type: "POST",
                data: newBurger
            }).then(
                function() {
                    console.log("created new burger");
                    // Reload the page to get the updated list
                    location.reload();
                }
            );
=======

        if (newBurger.name == "") {
            alert("Please enter a burger name!");
        } else {
            // Check if name has naughty words! Call an external API!
            let checkNameResult =
                $.ajax({
                    "async": false,
                    "crossDomain": true,
                    "url": `https://community-purgomalum.p.rapidapi.com/containsprofanity?text=${newBurger.name}`,
                    "method": "GET",
                    "headers": {
                        "x-rapidapi-host": "community-purgomalum.p.rapidapi.com",
                        "x-rapidapi-key": "d17bca8126msh409010c4680f5aap169ce0jsnf3966f718bbf"
                    },
                    "success": function(data) {
                        // Call this function on success
                        return data;
                    },
                    "error": function() {
                        // Call this function on error
                        alert("Hmmm... I'm not sure about that name...");
                        return;
                    }
                });
            if (checkNameResult.responseText == "false") {
                // Send the POST request.
                $.ajax("/api/burgers", {
                    type: "POST",
                    data: newBurger
                }).then(
                    function() {
                        console.log("created new burger");
                        // Reload the page to get the updated list
                        location.reload();
                    }
                );
            } else {
                alert("That name is not allowed! Cheeky!");
            }
>>>>>>> parent of 42ff2d1... Added employees table with sorting function
        }
    });

    // Remove a burger
    $(".delete-burger").on("click", function(event) {
        let id = $(this).data("id");
        // Send the DELETE request.
        $.ajax("/api/burgers/" + id, {
            type: "DELETE"
        }).then(
            function() {
                console.log("deleted burger", id);
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });
});