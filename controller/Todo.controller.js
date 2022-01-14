const Todo = require('../model/Todo')

const getAllTodos = (req, res) => {
    res.send("All Todos")
}

const getTodo = (req, res) => {
    res.send("Single Todo")
}

const createTodo = (req, res) => {
    res.send("Created Todo")
}

const updateTodo = (req, res) => {
    res.send("Single Todo")
}

const deleteTodo = (req, res) => {
    res.send("Delete Todo")
}

module.exports = {getAllTodos, getTodo, createTodo, updateTodo, deleteTodo}