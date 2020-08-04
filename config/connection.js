/*jshint esversion: 6 */

const mysql = require("mysql");

// Initialise the connection object
let connectionSettings = {
    host: "localhost",
    port: 3306,
    user: "root",
    password: "",
    database: "employeesDB"
};

// Create the connection information for the SQL database
function getConnection(connectionSettings) {
    return mysql.createConnection(connectionSettings);
}

module.exports = {
    getConnection
}