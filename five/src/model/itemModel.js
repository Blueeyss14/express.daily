const mysql = require('mysql2/promise');
const { db } = require('../config/config');

// let items = [
//     {id: 1, name: "Test", email: ""},
// ];

const pool = mysql.createPool({
    host: db.host,
    user: db.user,
    password: db.password,
    database: db.database,
    waitForConnections: true,
});


const getAll = async () => {
    const [rows] = await pool.query('SELECT * FROM items');
    if (rows.length === 0) return { msg: "No item here" };
    return rows;
};

const getItemById = async (id) => {
    const [rows] = await pool.query('SELECT * FROM items WHERE id = ?', [id]);
    return rows[0] || null;
};

const createItem = async (body) => {
    const { name, email } = body;
    const [result] = await pool.query('INSERT INTO items (name, email) VALUES (?, ?)', [name, email]);
    return { id: result.insertId, name, email };
};


const updateItemF = async (id, body) => {
    const { name, email } = body;
    const [result] = await pool.query('UPDATE items SET name = ?, email = ? WHERE id = ?', [name, email, id]);
    if (result.affectedRows === 0) return null;
    return { id, name, email };
};

const removeItem = async (id) => {
    const [result] = await pool.query('DELETE FROM items WHERE id = ?', [id]);
    return result.affectedRows > 0;
};


module.exports = {
    getAll,
    getItemById,
    createItem,
    updateItemF,
    removeItem
};