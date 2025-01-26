const db = require('../config/database');

exports.getAllTodos = function(callback) {
    db.query('SELECT * FROM todos', callback);
};

exports.getTodoById = function(id, callback) {
    db.query('SELECT * FROM todos WHERE id = ?', [id], callback);
};

exports.createTodo = function(newTodo, callback) {
    db.query('INSERT INTO todos SET ?', newTodo, callback);
};

exports.updateTodo = function(id, updatedTodo, callback) {
    db.query('UPDATE todos SET ? WHERE id = ?', [updatedTodo, id], callback);
};

exports.deleteTodo = function(id, callback) {
    db.query('DELETE FROM todos WHERE id = ?', [id], callback);
};

exports.addType = function(vehicle_type, callback) {
    db.query('SELECT * FROM todos WHERE vehicle_type = ?',[vehicle_type],callback);
};

exports.addColor = function(color, callback) {
    db.query('SELECT * FROM todos WHERE color = ?',[color],callback);
};

exports.addYear = function(year, callback) {
    db.query('SELECT * FROM todos WHERE year <= ?',[year],callback);
};

exports.addPRICE = function(price, callback) {
    db.query('SELECT * FROM todos WHERE price <= ?',[price],callback);
};

exports.addModel = function(model, callback) {
    db.query('SELECT * FROM todos WHERE model = ?',[model],callback);
};