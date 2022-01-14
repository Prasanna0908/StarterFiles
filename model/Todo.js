// User Schema 
// Change the schema and file name if you want to

const mongoose = require('mongoose')

const TodoSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [true , "Name is required"]
    },
    isDone:{
        type: Boolean,
        required: [true , "Email is required"],
        default: false
    }
})

module.exports = mongoose.model('Todo', TodoSchema)