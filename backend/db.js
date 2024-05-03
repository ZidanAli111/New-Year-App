const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://zidanali111:qV89WD48sR3zynpw@cluster0.bfxwiin.mongodb.net/todos");

const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})
const todo = mongoose.model('todos', todoSchema);

modules.exports = {
    todo
}