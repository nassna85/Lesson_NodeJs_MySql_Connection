const { connection } = require('./connection');

//Create Table

const createTable = () => {
    const sql = "CREATE TABLE user_test (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), address VARCHAR(255))";
    connection.query(sql, (error, result) => {
        if(error) throw error;
        console.log('Table Created !');
    });
};

const insert = (name, address) => {
    const sql = `INSERT INTO user_test (name, address) VALUES ("${name}", "${address}")`;
    connection.query(sql, (error, result) => {
        if(error) throw error;
        console.log('Data Insert !');
    });
};

const findById = id => {
    const sql = `SELECT * FROM user_test WHERE id = ${id}`;
    connection.query(sql, (error, result) => {
        if(error) throw error;
        console.log(result);
    });
};

const findAll = () => {
    const sql = `SELECT * FROM user_test`;
    connection.query(sql, (error, results) => {
        if(error) throw error;
        console.log(results)
    });
};

const deleteById = id => {
    const sql = `DELETE FROM user_test WHERE id = ${id}`;
    connection.query(sql, (error, result) => {
        if(error) throw error;
        console.log('User deleted');
    });
};

module.exports = {
    createTable,
    insert,
    findById,
    deleteById,
    findAll
};