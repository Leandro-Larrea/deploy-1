const mongoose = require("mongoose");
require("dotenv").config();

// mongoose.connect(connectionsString,{
//     useNewUrlParser: true,
//     useUnifieTopology: true,
//     useFindAndModify: false,
//     useCreateIndex: true})
// .then(()=> {
//     console.log("database connected")
// }).catch(err =>{
//     console.error(err)
// })
console.log(process.env.PRUEBA)
const db = async () =>{
    try {
        const db = await mongoose.connect(process.env.MONGODB_URI || LINK_DB)
        console.log("db connected")
    }   catch (error){
        console.error(error);
    } 
};

module.exports = db
