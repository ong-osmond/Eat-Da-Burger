const connection = require("./connection");

const orm = {
    selectAll: function(tableInput) {
        var queryString = "SELECT * FROM ??";
        connection.query(queryString, [tableInput], function(err, result) {
            if (err) throw err;
            console.log(result);
        });
    },
    insertOne: function(tableInput, burgerNameInput, devouredInd) {
        var queryString = "INSERT INTO ?? (burger_name, devoured) VALUES (?, ?)";
        console.log(queryString);
        connection.query(queryString, [tableInput, burgerNameInput, devouredInd], function(err, result) {
            if (err) throw err;
            console.log(result);
        });
    },
    updateOne: function(tableInput, devouredInd, burgerID) {
        var queryString = "UPDATE ?? set devoured = ? where id = ?";
        console.log(queryString);
        connection.query(queryString, [tableInput, devouredInd, burgerID], function(err, result) {
            if (err) throw err;
            console.log(result);
        });
    }
}

module.exports = orm;