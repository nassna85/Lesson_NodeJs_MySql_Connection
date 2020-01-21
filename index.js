const http = require('http');
//const mysql = require('mysql');
const { createTable, insert, findById, deleteById, findAll } = require('./models/user');
const users = require('./data/user');

const server = http.createServer((req, res) => {
    res.writeHead(200);
    res.end('Test');
});
// Exercice 1 : createTable();

//Exercice 2 : insert("Naim", "Rue de l'inconnue");

//Exercice 3 : findById(2);

//Exercice 4 : Insert Data from directory data users object with Loop
//Transform data Object in Array with Object.keys then loop on this array
/*
Object.keys(users).forEach(key => {
    const name = users[key].name;
    const address = users[key].address;
    insert(name, address);
});
*/
// Select All data from User table
findAll();

//Exercice 5 : Delete
//deleteById(1);



server.listen(3000);