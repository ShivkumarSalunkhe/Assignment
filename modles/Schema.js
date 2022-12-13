const mongoose  = require("mongoose");
const Schema = mongoose.Schema
const ObjectID = Schema.ObjectID


const studentSchema= new mongoose.Schema({
    id:{type:Number},
    name:{type:String},
    currentClass: {type:Number},
    division:{String}
})

const User = mongoose.model("User", studentSchema)

module.exports = User