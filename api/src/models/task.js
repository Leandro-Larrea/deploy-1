const {Schema, model} = require("mongoose");

/* trim is gonna clean up the spaces at the end and begining of the string "   asd  ".trim() = "asd"*/

const taskSchema = new Schema({
    title:{
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    description:{
        type: String,
        required: true,
        trim: true
    },
    done:{
        type: Boolean,
        default: false
    },
},
    {
        timestamps: true,
        versionKey: false
    }
)

const Task = model("Task", taskSchema)

module.exports = Task